import React, { useEffect } from "react";
import { useState,createContext } from "react";
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

  const [feedback, setFeedback] = useState ([])
  const [isLoading, setIsLoading] = useState(false);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback();
  },[])

  // Fetching Feedback
  const fetchFeedback = async () => {
    const response = await fetch (`/feedback?_sort=id&_order=desc`);

    const data =  await response.json();

    setFeedback(data);
    setIsLoading(false);

  }


  // Delete feedback
  const deleteFeedback = async (id) => {
    if(window.confirm('Are you sure want to delete it')){

      await fetch(`/feedback/${id}`,{method: 'DELETE'})
      setFeedback(feedback.filter((item) => item.id!==id))
    }
  }

  // Add feedback to Server
  const addFeedback = async (newFeedback) => {

    const response = await fetch('/feedback',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json;

    setFeedback([data, ...feedback]);
 }


  const updateFeedback = async (id, upItem) => {

      const response = await fetch('/feedback/${id}',{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(upItem)
      })

      const data = await response.json;

      setFeedback(
        feedback.map((item) => (item.id === id ? 
        {...item, ...upItem}: item))
      )
  }

  const editFeedback = (item) =>  {
      setFeedbackEdit ({
        item,
        edit : true,
      })
 }

  return <FeedbackContext.Provider
  value = {{
    feedback,
    feedbackEdit,
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext