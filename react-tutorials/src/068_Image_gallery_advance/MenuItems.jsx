import React from 'react'

const MenuItems = (props) => {
  return (
	<>
	<div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
		  <div class="row">
			{
				props.items.map((elem) => {
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
  )
}

export default MenuItems