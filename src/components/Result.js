import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Result = () => {
    const {score}=useParams();
  return (
    <div className='result'> 
        <h1>Congrats!! You Score {score} out of 10 </h1>
        <br/>
        <div>
       Want to Play Again: <button className='res-btn'><Link to={'/category'} style={{textDecoration:'none'}}>Click</Link></button>
       </div>
   </div>
  )
}

export default Result