import React , {useContext} from 'react'
import { AppContext } from './App'

const Login = () => {

	const {setusername} = useContext(AppContext)

  return (
	<div>
		<input onChange={(e) => {
			setusername(e.target.value)
		}} />
	</div>
  )
}

export default Login