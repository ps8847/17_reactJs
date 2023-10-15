import styled from "styled-components"
import{useSelector , useDispatch} from 'react-redux'
import {MdDeleteForever} from 'react-icons/md';
import { removeUser } from "../store/slices/UserSlice";
const DisplayUsers = () => {

	const data = useSelector((state) => {
		return state.users;
	})

	const dispatch = useDispatch();
	const deleteUser = (id) => {
		dispatch(removeUser(id))
	}
	console.log(data);
	return <Wrapper>
		{
			data.map((user , id) => {
				return <li key={id}>{user}
				<button className="btn-delete" onClick={() => deleteUser(id)}>
					<MdDeleteForever className="delete-icon" />
				</button>
				</li>
			})
		}
	</Wrapper>
}

const Wrapper = styled.section`
	li{
		width: :100%;
		display:flex;
		align-items:center;
		justify-content: :space-between;
		padding:1rem;
		border-bottom: 1px solid #eee;

		&:first-child{
			border-top: : 1px solid #eee;
		}
	}
`

export default DisplayUsers;