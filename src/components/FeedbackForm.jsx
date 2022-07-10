import React from 'react'
import Card from './shared/Card'
import { useState, useContext,useEffect } from 'react'
// import PropTypes from 'prop-types'
import Button from './shared/Button'
import Rating from './Rating'
import {v4 as uuidv4} from 'uuid'
import FeedbackContext from '../context/FeedbackContext'
// import { updateLayoutMeasurement } from 'framer-motion/types/render/dom/projection/utils'

function FeedbackForm() {

  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect (() => {
     if (feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit])

  const handleTextChange = ({target:{value}})=>{

    if(value === ''){
      setBtnDisabled(true);
      setMessage(null);


    }else if(value.trim().length < 10){
      setMessage('Review should have atleast have 10 characters');
      setBtnDisabled(true);
    }else{
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(value);

    
  }

  const handleForm = (e) => {
    e.preventDefault();

    if(text.trim().length > 10){
      const newFeedback = {
        id: +uuidv4(),
        text,
        rating
      }
     
    if(feedbackEdit.edit===true){
      updateFeedback(feedbackEdit.item.id, newFeedback)
    }else{
      addFeedback(newFeedback)
    }
    
    setText('')
    setBtnDisabled(true)
    setRating(10)
    
   
    }
  }
  return (
    <Card>
      <form onSubmit={handleForm}>
        <h2>How would you rate our service with us</h2>
        <Rating select = {(rating)=>setRating(rating)
       }/>
        <div className="input-group">
          <input 
          onChange={handleTextChange}
          type="text"
          placeholder='Write your review here'
          value ={text} />
          <Button type='submit' isDisabled = {btnDisabled}>SEND</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
    
  )
}

// FeedbackForm.propTypes = {
//   input: PropTypes.array.isRequired,
// }
export default FeedbackForm
