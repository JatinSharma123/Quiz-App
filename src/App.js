
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import QuizState from "./context/QuizState";
import Category from "./components/Category";
import Log from "./components/Log";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
   
    <QuizState>

     <Routes>
    
      <Route path="/" element={<Log/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/quiz" element={<Quiz/>}/>
      <Route path="/result/:score" element={<Result/>}/>
     </Routes>
     </QuizState>
     <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
