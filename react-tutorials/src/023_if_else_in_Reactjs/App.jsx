import React from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";


const favSeries = 'netflix';

const FavSeries = () => {

	if(favSeries === 'netflix'){
		return <Netflix />
	}else{
		return <Amazon />
	}
}

const App = () => (
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
    <FavSeries />
  </>
);

export default App;