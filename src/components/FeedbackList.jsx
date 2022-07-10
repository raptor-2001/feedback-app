// import { useState } from 'react';

// import {motion, AnimatePresence} from 'framer-motion'
// import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

import FeedbackItem from './Feedbackitem';
import React, {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner'


function FeedbackList() {

  const {feedback,deleteFeedback,isLoading} = useContext(FeedbackContext)


  if(!isLoading && (!feedback || feedback.length === 0)){
    return <p>No Feedback Yet...</p>
  }
  
 
  return isLoading ? (
    <Spinner/>
    ): (
      
      <div>
      {feedback.map((item) => (
          <FeedbackItem 
          key={item.id} 
          item={item}
          deleteFeedback= {deleteFeedback}
          />
      ))}
    </div>

  )

  // With animation
  // <div className='feedback-list'>
  //   <AnimatePresence>
  //     {feedback.map((item) => (
  //         <motion.div
  //             key={item.id}
  //             initial={{opacity:0}}
  //             animate={{opacity:1}}
  //             exit={{opacity:0}}
  //             >
  //             <FeedbackItem 
  //             key={item.id} 
  //             item={item}
  //             deleteFeedback = {deleteFeedback}
  //             />
  //         </motion.div>
  //     ))} 
  //   </AnimatePresence> 
  //   </div>


  
 
}


export default FeedbackList
