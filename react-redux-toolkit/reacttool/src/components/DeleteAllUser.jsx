import React from "react";
import styled from "styled-components";
import { deleteAllUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";
export const DeleteAllUser = () => {

  const dispatch = useDispatch()
  const deleteUsers = () => {
    dispatch(deleteAllUsers())
  }
  return <Wrapper>
    <button className="clear-btn" onClick={deleteUsers}>Clear users</button>
  </Wrapper>
};

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capatilze;
    background-color:#db338a;
  }
`