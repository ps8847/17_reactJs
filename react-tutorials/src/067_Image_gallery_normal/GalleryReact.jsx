import React , {useState} from "react";
import "./index.css";
import Menu from "./Menu";

const GalleryReact = () => {

	const [items, setItems] = useState(Menu);

	const filterItem = (catItem) => {
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
      <div clasName="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button className="btn btn-warning" onClick={() => filterItem('breakfast')}>Breakfast</button>
          <button className="btn btn-warning" onClick={() => filterItem('lunch')}>Lunch</button>
          <button className="btn btn-warning" onClick={() => filterItem('evening')}>Evening</button>
          <button className="btn btn-warning" onClick={() => filterItem('dinner')}>Dinner</button>
          <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>
        </div>
      </div>

      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
		  <div class="row">
			{
				items.map((elem) => {
					const {id, name , img, desc , price} = elem;

					return (
						<>
						
              <div className="col-sm-4">
                <div className="card my-1">
				<img src={img} class="card-img-top photo" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
					<h3 className="card-title price">{price}</h3>
                    <p className="card-text">
                      {desc}
                    </p>
                    <button className="btn btn-outline-primary">Go somewhere </button>
                  </div>
                </div>
              </div>
           
						</>
					)
				})
			}
			 </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
