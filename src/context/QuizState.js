import QuizContext from "./QuizContext"
import axios from 'axios'
import { useEffect, useState } from "react"

const QuizState=(props)=>{

   const [questions, setQuestions] = useState([])
     const fetchQuestion=async(val)=>{

        try {
            const URL=`https://opentdb.com/api.php?amount=10&category=${val}&difficulty=${'easy'}&type=multiple`       
            let  {data}=await axios.get(URL);
    
            console.log(data)
              setQuestions(data);
        } catch (error) {
            console.log(error);
        }
       
        

     }
  
     
   
    return(
        <QuizContext.Provider value={{fetchQuestion,questions,setQuestions}}>
       {props.children}
        </QuizContext.Provider>
    )

}

export default QuizState;