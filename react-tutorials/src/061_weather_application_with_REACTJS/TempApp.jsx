import React  , {useEffect, useState} from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const TempApp = () => {

	const [city , setCity] = useState(null);
	const [search , setSearch] = useState("Delhi");

	useEffect( () => {
		const fetchApi = async () => {
			const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a6829334fb8034c828fd03c09613b5e6`;
			const response = await fetch(url);
			const resJson = await response.json();
			setCity(resJson.main);
		}
		fetchApi();
	} , [search])
  return (
    <>
      <div className="box">
		<div className="inputData">
			<input type="search" value={search} className="inputField" onChange={ (event) => {
				setSearch(event.target.value)
			}}/>
		</div>
	  
{ !city ? ( <p className="errorMsg"> No Data Found </p>) : ( <>
	<div className="info">
		<h2 className="location">
		<LocationOnIcon className="locationIcon"/> {search}
		</h2>

		<h1 className="temp">{city.temp} &#8451;</h1>
		<h3 className="tempmin_max">Min : {city.temp_min}&#8451;el | Max : {city.temp_max} &#8451;el</h3>
	  </div>

	  <div className="wave -one"></div>
	  <div className="wave -two"></div>
	  <div className="wave -three"></div>
</>)}
	  
	  </div>
    </>
  );
};

export default TempApp;
