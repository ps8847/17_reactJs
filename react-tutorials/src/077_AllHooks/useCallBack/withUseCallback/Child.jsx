import React , {useEffect} from 'react'

export default function Child({ returnComment}) {
	useEffect(() => {
		console.log("Action was called");
	} , [returnComment])
  return (
	<div>{returnComment("prince")}</div>
  )
}
