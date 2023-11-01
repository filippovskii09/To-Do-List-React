import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import './ToDoList.css'
import ToDoEdit from '../ToDoEdit/ToDoEdit'

const ToDoList = ({ data, deleteItem, onUpdateTitle, onUpdateTask }) => {

return (
	data.length === 0 ? (
		<p style={{textAlign:'center', padding:'20px 0px'}}>No task</p>
	) : (
		<ul className='list'>
		{data.map((item, index) => (
			item.isEdit ? (
				<ToDoEdit key={index} onUpdateTask={onUpdateTask} item={item}/>
			) : (
				<ToDoItem 
					item={item}
					deleteItem={deleteItem}
					key={index}
					onUpdateTask={onUpdateTask}
					onUpdateTitle={onUpdateTitle}
				/>
			)
		))}
	 </ul>
	)
  )
}

export default ToDoList
