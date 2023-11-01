import React from 'react'
import ToDoInput from '../ToDoInput/ToDoInput'
import ToDoList from '../ToDoList/ToDoList'
import { v4 as uuidv4 } from 'uuid'
uuidv4();

const ToDoWrapper = () => {
	const [items, setItems] = React.useState([])

	const addTodo = (item) => {
		const newItem = [...items, { id: uuidv4(), title: item, completed: false, isEdit: false }]
		setItems(newItem)
	}

	const deleteItem = (id) => {
		const newItem = items.filter(item => item.id !== id)
		setItems(newItem)
	}

	const onUpdateTitle = (id) => {
		setItems(items.map(item => item.id === id ? {
			...item, isEdit: !item.isEdit
		} : item))
	}

	const onUpdateTask = (title, id) => {
		const newItem = items.map(item => item.id === id ? {
			...item, title, isEdit: !item.isEdit
		} : item)
		setItems(newItem);
	}

  return (
	<>
		<h1 className='title'>Daily Tasks</h1>
		<div style={{ flex: 1 }}>
			<ToDoList  
				data={items} 
				deleteItem={deleteItem}
				onUpdateTitle={onUpdateTitle}
				onUpdateTask={onUpdateTask}
			/>
		</div>
		<ToDoInput addTodo={addTodo}/>
	</>
  )
}

export default ToDoWrapper
