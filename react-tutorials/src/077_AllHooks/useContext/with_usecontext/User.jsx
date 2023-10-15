import React , {useContext} from 'react'
import { AppContext } from './App'

const User = () => {

	const {username} = useContext(AppContext)
  return (
	<div>
		<h1>user : {username}</h1>
	</div>
  )
}

export default User