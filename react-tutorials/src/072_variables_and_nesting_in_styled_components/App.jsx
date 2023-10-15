import React from 'react';
import './index.css';
import styled from 'styled-components';


const App = () => {


  let myFavColor = "red";

  const Button = styled.button`
    align-items:center;
    appearance: none;
    background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
    border: 0;
    border-radius: 6px;
    box-shadow: rgba(45,35,66,0.4) 0 2px 4px, rgba(58,65,111,0.5) 0 -3px 0 inset;
    box-sizing: border-box;

    //color: #fff;
    color : ${myFavColor};
    
    cursor: pointer;
    display: inline-flex;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s , transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 18px;
  
    &:focus{
      box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45,35,66,0.4) 0 2px 4px, rgba(45,35,66,0.3) 0 7px 13px -3px , #3c4fe0 0 -3px 0 inset;
    }
    
    &:hover{
      box-shadow: rgba(45,35,66,0.4) 0 4px 8px, rgba(45,35,66,0.3) 0 7px 13px -3px , #3c4fe0 0 -3px 0 inset;
      transform: translateY(-2px);
    }
    
    &:active{
      box-shadow: #3c4fe0 0 3px 7px inset;
      transform: translateY(2px);
    }

    &:after{
      content: "👌";
    }

    //span{
    //  color:#5adaff;
    //  b{
    //    color:white;
    //  }
    //}

    span{
      color:#5adaff;
      .test {
        color:white;
      }
      &:hover {
        color:#3c4fe0;
      }
    }
  `
  const Para = styled.p`
  color: #5468ff
  `;


 return (
  <>

  {/*<Button className="btn">Subscribe Now</Button>*/}

  {/*<Button className="btn">
    <span>like and share <b>Comment also</b> </span> Subscribe Now
  </Button>*/}

  <Button className="btn">
    <span>like and share <b className='test'>Comment also</b> </span> Subscribe Now
  </Button>

  <Para>prince sharma</Para>

  </>
  )
}

export default App