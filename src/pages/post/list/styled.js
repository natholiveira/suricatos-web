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
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`
export const Post = styled.li`
  max-width: 790px;
  box-shadow: 0 0 1px 0 #625e5e;

  & + && {
    margin-top: 32px;
  }
`
export const ProfilePost = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    >div {
        display: flex;
        align-items: center;
        h5 {
            span {
                font-weight: normal;
            }
        } 
        img {
            height: 55px;
            width: 55px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 12px;
        }
    }
`
export const HeaderPost = styled.div`
    padding: 12px 24px;
    h3 {
        margin: 0 0 24px;
    }
`
export const ImgPost = styled.img`
    width: 100%;
`