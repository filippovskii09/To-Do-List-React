import React from 'react'
import './ToDoInput.css'
import SendIcon from '@mui/icons-material/Send';

const ToDoInput = ({ addTodo }) => {
	const [inputValue, setInputValue] = React.useState('');

	const changeValue = (e) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(inputValue);
		setInputValue('')
	}

	return (
	 <form className='input-wrapper' onSubmit={handleSubmit}>
	 	<input value={inputValue} onChange={changeValue} className='input' placeholder='Enter your task'/>
		<button disabled={ inputValue.length === 0 }  type='submit' className={ inputValue.length ? 'input__button active-button' :  'input__button' }><SendIcon/></button>
	 </form>
  )
}

export default ToDoInput
