import React from 'react'

const CatMenu = ({filterItem , catItems}) => {
  return (
	<>
	<div clasName="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">

			{
				catItems.map((curElem , index) => {
					 return (
					 <>
					 <button className="btn btn-warning" key={index} onClick={() => filterItem(curElem)}>{curElem}</button>
					 </>
					 )
				})
			}
         
         
          {/*<button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>*/}
        </div>
      </div>
	</>
  )
}

export default CatMenu