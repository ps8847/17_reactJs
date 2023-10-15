import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState:[],
	reducers:{
		addUser(state, action){
			state.push(action.payload)
		},
		removeUser(state, action){
			state.splice(action.payload , 1)
		},
		deleteAllUsers(state,action){
			//return state = [];
			return []
		},
	},
	//extraReducers(builder){
	//	builder.addCase(userSlice.actions.deleteAllUsers)
	//}
})

console.log(userSlice.actions);

export {userSlice}
export const {addUser , removeUser , deleteAllUsers} = userSlice.actions;

// if we want to use reducers at multiple place withput repeating the code >> we can use extraReducers