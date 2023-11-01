import React from 'react'

const ToDoEdit = ({ onUpdateTask, item }) => {
	const [inputValue, setInputValue] = React.useState(item.title);

	const changeValue = (e) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onUpdateTask(inputValue, item.id);
		setInputValue('')
	}

	return (
	 <form className='input-wrapper' onSubmit={handleSubmit}>
	 	<input 
			value={inputValue} 
			onChange={changeValue} 
			type='text'
			className='input' 
			placeholder='Edit task'
		/>
		<button 
			disabled={ inputValue.length === 0 }  
			type='submit' 
			className={ inputValue.length ? 'input__button active-button' :  'input__button' }
		>
			Update
		</button>
	 </form>
  )
}

export default ToDoEdit
