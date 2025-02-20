import React from 'react'
import { Link } from 'react-router'
import {styled} from 'styled-components'

const Nav=styled.div`
    width: 100%;
    height: 55px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const List=styled.li`
    list-style: none;
    color: black;
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
    cursor: pointer;
    &:hover{
        color:lightgray;
    }
`



function Navabar() {
  return (
    <Nav>
      <List><Link to={'/'}>Home</Link></List>
        <List>Cart</List>
        <List>Order</List>
        <List>profile</List>
        <List>Logout</List>
    </Nav>
  )
}

export default Navabar