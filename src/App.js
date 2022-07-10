// Code without JSX
// import React, { createElement } from "react"



// function App(){
  //   return createElement('div',{className :'container'},
  
  //     createElement('h1',{},'Hello form the app component')
//   )
// }

// Dynamic object and var in JSX
// function App(){
  
  //   // variables
  //   const title = 'BLOG'
  //   const body = 'Here are some interesting blogs on traveling'
  //   const comments = [
    //     {num: 1, comment: 'First comment'},
    //     {num: 2, comment: 'Second comment'},
    //     {num: 3, comment: 'Third comment'}
    //   ]
    
    //   const load = false
    //   const showcomments = true
    //   const commentBlock = (
      
      //     <div className="comment-class">
      //           <h3>Comments ({comments.length})</h3>
      //           <ul className="commentlist">
      
      //             {comments.map((comments,index)=>(
        //                 <li key={index}>{comments.comment}</li>
        //             ))}
        
        //           </ul>
        //       </div>
        
        
        //   )
        //   if(load) return <h1>Loading...</h1>
        
        
        //   return (
          //     <div className="container">
          //       <h1>{title}</h1>
          //       <p>{body}</p>
          
          //       {/* tunary operator */}
          
          //       {showcomments ? 'yes': 'no'}
          
          //       {(showcomments && commentBlock)}
          
          //     </div>
          //   )
          // }
          

// Unsed imports
// import FeedbackItem from "./components/Feedbackitem" 
// import { useState } from "react"    
// import FeedbackData from "./data/FeedbackData"
// import Card from "./components/shared/Card"


import React from "react"
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutLinkIcon from "./components/AboutLinkIcon"
function App(){

  return (
      <FeedbackProvider>
       <Router>
        <Header/>
         <div className="container">
          <Routes>
            <Route 
            path = "/"
            element = {
              <>
                <FeedbackForm/>
                <FeedbackStats/>
                <FeedbackList/>
                <AboutLinkIcon/>
              </>
            }/> 
            <Route path = "about" element = {<AboutPage/>}/>
          </Routes>
        </div>
       </Router>  
      </FeedbackProvider>
  )
  
  // Without Router
  
  // return (
  //   <>
  //      {/* <Header text={'Feedback App'} bgColor={'red'} color={'white'}/> */}
  //      <Router>
  //         <Header/>
  //         <div className="container">

  //             <Route exact path='/'>
  //                 <FeedbackForm handleAdd={addFeedback}/>
  //             <FeedbackStats feedback={feedback}/>
  //             {/* <FeedbackItem item ={feedback}/> */}
  //             <FeedbackList feedback={feedback} handleDelete = {deleteFeedback} />
  //             </Route>
  //             <Route exact path='/about' component ={AboutPage}></Route>
  
  //         </div>
  //      </Router>
  
  //   </>
  
  // )
}
export default  App 

