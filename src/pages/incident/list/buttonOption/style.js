import styled from "styled-components";
import ButtonStyle from '@mui/material/Button'

export const Container = styled.div`
	margin: 0 12px;
    position: relative;
    >button {
       &+div {
          position: absolute!important;
          top: 40px!important;
       }
    }
`

export const ButtonGroup = styled.div`
	&& {
	  	display: flex;
	  	flex-direction: column;
	  	background-color: #FFFFFF;
      	box-shadow: 0px 10px 20px -20px rgba(53, 32, 87, 0.08);
      	border-radius: 3px;
	  	overflow: hidden;
	}
`
export const Button = styled(ButtonStyle)`
    && {
        height: 32px;
	  	width: 140px;
	  	border-radius: 0;
      	color: #6B6871;
      	font-size: 14px;
	  	justify-content: start;
	  	padding: 5px 7px;
	  	border: 0;
        white-space: nowrap;
	  	&.active {
          	color: #7D3CE8;
          	background: #F6F7FC;
		}
	  	svg {
		  	height: 14px;
		  	margin-left: 7px;
		}
    }
`