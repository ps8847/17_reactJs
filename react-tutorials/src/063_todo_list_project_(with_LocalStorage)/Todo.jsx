import React , {useState , useEffect} from 'react'
import Logo from './Logo.png';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';


// to get the data fom local storage

const getLocalItems = () => {
	let list = localStorage.getItem('lists');
	
	if(list){
		return JSON.parse(localStorage.getItem('lists'));
	} else {
		return [];
	}
}
const Todo = () => {
	const [inputData , setInputData] = useState("");
	const [items, setItems] = useState(getLocalItems());

	const addItem = () => {
		if(!inputData){

		}else{
			setItems([...items, inputData]);
			setInputData('');
		}
	}

	const deleteItem = (index) =>{
		const updatedItems = items.filter((elem, ind) => {
			return ind !== index;
		})
		setItems(updatedItems);
	}

	const removeAll = () => {
		setItems([]);
	}

	//add data data to localstorage
	useEffect(() => {
		localStorage.setItem('lists' , JSON.stringify(items))
	} , [items]);
	
  return (
	<>
	<div className="main-div">
		<div className="child-div">
		
			<figure>
				<img src={Logo} alt="logo" />
				<figcaption>Add your List Here</figcaption>
			</figure>

			<div className="addItems">
				<input type="text" placeholder="Add items...." value={inputData} onChange={(e) => {
					setInputData(e.target.value);
				}}/>
				<AddIcon className="fa fa-plus" title="Add Items" onClick={addItem}/>
			</div>

			<div className="showItems">

				{
					items.map((element, index) => {
						return <div className="eachItem" key={index}>
							<h3>{element}</h3>
							<DeleteIcon className="fa fa-trash-alt" title="Remove Items" onClick={() => deleteItem(index)}/>
							</div>
					})
				}
			</div>

			<div className="showItems">
				<button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>  <span> CHECK LIST </span></button>
			</div>
		</div>
	</div>
	</>
  )
}

export default Todo