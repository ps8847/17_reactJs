import React from 'react'

const Login = ({setusername}) => {
  return (
	<div>
		<input onChange={(e) => {
			setusername(e.target.value)
		}} />
	</div>
  )
}

export default Login