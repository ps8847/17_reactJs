import React from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";


const favSeries = 'amazon';


const App = () => (
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>

	{favSeries === 'netflix' ? <Netflix /> : <Amazon />}
  </>
);

export default App;