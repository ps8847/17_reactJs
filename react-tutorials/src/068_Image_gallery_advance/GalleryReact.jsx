import React , {useState} from "react";
import "./index.css";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import CatMenu from './CatMenu';

const allCatValues  = [ ...new Set(Menu.map((currElem) =>currElem.category)), "all"];

const GalleryReact = () => {

	const [items, setItems] = useState(Menu);
	const [catItems , setCatItems] = useState(allCatValues);

	const filterItem = (catItem) => {

		if( catItem === "all"){
			setItems(Menu);
			return;
		}

		const updatedItems = Menu.filter((curElem) => {
			return curElem.category === catItem;
		})
		setItems(updatedItems);
	}
  return (
    <>
      <h2 className="mt-5 text-center title">ORDER YOUR FAVOURITE DISH</h2>
      <hr />
      <br />
     <CatMenu filterItem={ filterItem } catItems= {catItems}/>

<MenuItems items={items}/>
      
    </>
  );
};

export default GalleryReact;
