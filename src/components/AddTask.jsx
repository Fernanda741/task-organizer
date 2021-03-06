import React from 'react';
import  Button from "./Button";
import "./AddTask.css";

const AddTask = () => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    return (
       <div className="add-task-container">
            <input 
                 onChange={handleInputChange}
                 value={inputData} 
                 classNAme="add-task-input" type="text" 
            />;
          <div className="add-task-button-container">
             <Button>Adcionar</Button> 
          </div>
          
        </div>
    );
};
 
export default AddTask;