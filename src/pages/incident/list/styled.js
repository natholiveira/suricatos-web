import styled from "styled-components";

import ButtonStyle from '@mui/material/Button'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    width: 100%;
    margin-bottom: 32px;
    h4 {
        font-size: 24px;
        color: #2D3748;
    }
`
export const Button = styled(ButtonStyle)``
export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 16px;
    overflow-y: scroll;
`

export const Item = styled.li`
  padding: 16px 12px;
  background: #FFFFFF;
  box-shadow: -2px 5px 20px -5px rgba(72, 69, 77, 0.1);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`

export const ItemHeader = styled.div`
	display: flex;
  	justify-content: space-between;
  	flex-direction: row;
  	align-items: center;
  	h4 {
      	font-size: 14px;
      	color: #242326;
	}
`


export const ItemDetail = styled.div`
  	color: #48454C;
  	display: flex;
  	justify-content: space-between;
  	font-size: 12px;
  	padding: 4px 0;
  	.bold {
	  	font-weight: 600;
	}
	&+&& {
      	padding: 11px 0 0;
      	border-top: 1px solid #F6F7FC;
    }
`