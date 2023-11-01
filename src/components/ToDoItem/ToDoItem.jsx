import { Checkbox } from '@mui/material'
import React from 'react'
import './ToDoItem.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const ToDoItem = ({ item, onUpdateTitle, deleteItem }) => {

	const [checked, setChecked] = React.useState(item.isChecked)

	const handleChecked = () => {
		setChecked(!checked)
	}
	
  return (
	<li className={checked ? 'item done' : 'item'}>	
	 	<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
	 		<Checkbox color="success" onClick={handleChecked} />
			<p className='item__title'>{item.title}</p>
	 	</div>
		<div className='item__actions'>
			<button onClick={() => onUpdateTitle(item.id)} className='item__button item__change'>
				<EditIcon/>
			</button>
			<button className='item__button item__delete' onClick={() => deleteItem(item.id)}>
				<DeleteOutlineIcon/>
			</button>
		</div>
	</li>
  )
}

export default ToDoItem
