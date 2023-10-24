import React, { useMemo } from 'react'

const ExpensiveComponent = React.memo(() => {
    console.log("expensive component re-render")

    let total = 0;

    for(let i = 0; i < 10000; i++){
        total += i;
    }
  return (
    <div>ExpensiveComponent</div>
  )
})

export default ExpensiveComponent;