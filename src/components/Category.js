import React, { useContext } from 'react'
import data from '../components/data'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import QuizContext from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const navigate=useNavigate();
    const quizContext=useContext(QuizContext);
    const {fetchQuestion}=quizContext;
  const selectCategory=(val)=>{

    fetchQuestion(val)
    navigate('/quiz')

  }
  return (
    <div className='category'>
        <div className='cat'>
            <h1 className='text-white'>Select your favourite Category:</h1>
            <DropdownButton id="dropdown-basic-button"  title="SELECT FAVOURITE CATEGORY">
                {
                    data.map((c)=>(
                        <div className='text-center mx-5'>
                        <Dropdown.Item href="#/action-1"onClick={(e)=>selectCategory(c.value)} >{c.category}</Dropdown.Item>
                     </div>
                    ))
                }
                   </DropdownButton>
     
        </div>
    </div>
  )
}

export default Category