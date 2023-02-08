import './Form.css';
import {v4 as uuidV4} from "uuid";

function Form({input, setInput, todo, setTodo}){

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodo([...todo, {id: uuidV4(), title: input, completed: false}]);
        setInput("");
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input type='text' 
            placeholder="Enter a Todo..." 
            className='task-input'
            value={input}
            required
            onChange={onInputChange}
            />
            <button className='button-add' type='submit'>Add</button>
        </form>
    )
}

export default Form
