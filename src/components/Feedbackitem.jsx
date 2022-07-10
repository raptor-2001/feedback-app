// import { useState } from "react";
import Card from "./shared/Card";
import React, {useContext} from "react";
import PropTypes from 'prop-types';
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({item}){

  // const [rating,setRating] = useState(7);
  // const [text,setText] = useState('This is box one');

  
  
  // To increment the rating by one
  // const handleClick = () => {
  //   text = setRating((prev)=>{
  //     return prev + 1;
  //   });
  // }

  // handle the click 
  // const handleClick = (id) => {
  //   console.log(id);
  // }


  const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
  return(

    <Card>
       <div className="num-display">{item.rating}</ div>

       <button 
        className='close' 
        onClick={(()=> deleteFeedback(item.id))}
       >
        <FaTimes color='purple'/>

       </button>

       <button 
        className="edit"
        onClick={(()=> editFeedback(item))}
        >
        <FaEdit color = 'purple'/>
       </button>

       <div className="text-display">{item.text}</div>
       {/* <button onClick={handleClick}>click</button> */}
    </Card>
     
  
   
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;