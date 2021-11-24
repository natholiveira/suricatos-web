import styled from "styled-components"
import LogoImage from "../../assets/icons/logo.svg"
import ListItemStyle from "@mui/material/ListItem"

export const Menu = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    width: 100%;
    padding: 1rem;
    flex-flow: column-reverse nowrap;
    height: calc(100vh - 56px);
    justify-content: center;
    transform: scaleX(0);
    pointer-events: none;
    transition: transform .15s;
    @media (min-width: 1025px) {
        position: initial;
        width: 100%;
        margin-top: 50px;
        flex-flow: column nowrap;
        justify-content: flex-start;
        padding: 0;
        opacity: 1;
        transform: unset;
        pointer-events: unset;
        height: 100%;
        > nav {
            width: 100%;
        }
    }
`
export const Container = styled.header`
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    position: relative;
    min-height: 56px;
    align-items: center;
  
    > input {
        display: none;
    }
    > input:checked + ${Menu} {
        transform: scaleX(1);
        opacity: 1;
        pointer-events: initial;
        background-color: #FFF;
        z-index: 999;
    }
    @media (min-width: 1025px) {
        flex-direction: column;
        width: 250px;
        height: 100%;
    }
`

export const ToggleMenu = styled.label`
    display: block;
    cursor: pointer;
    input {
        display: none;
        & + div {
            width: 20px;
            height: 14px;
            position: relative;
            div {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                transition: transform .5s ease;
                span {
                    display: block;
                    position: absolute;
                    left: 0;
                    right: 0;
                    &:first-child {
                        top: 0;
                        &:before,
                        &:after {
                            top: 0;
                        }
                    }
                    &:last-child {
                        bottom: 0;
                        &:before,
                        &:after {
                            bottom: 0;
                        }
                    }
                    &:before,
                    &:after {
                        content: '';
                        display: block;
                        width: 47%;
                        height: 2px;
                        border-radius: 1px;
                        background: #2D3748;
                        position: absolute;
                        -webkit-backface-visibility: hidden;
                        transition: transform .5s ease, border-radius .3s ease, background .4s ease;
                    }
                    &:before {
                        left: 0;
                        transform-origin: 0 50%;
                        transform: translate(1px, 0) scaleX(1.1);
                    }
                    &:after {
                        right: 0;
                        transform-origin: 100% 50%;
                        transform: translate(-1px, 0) scaleX(1.1);
                    }
                }
            }
            svg {
                display: block;
                fill: none;
                stroke: #2D3748;
                stroke-width: 2px;
                width: 44px;
                height: 44px;
                stroke-linecap: round;
                position: absolute;
                left: 50%;
                top: 50%;
                margin: -22px 0 0 -22px;
                stroke-dasharray: 0 82.801 8 82.801;
                stroke-dashoffset: 82.801;
                transform-origin: 50% 50%;
                -webkit-backface-visibility: hidden;
                transform: scale(1);
                transition: stroke-dashoffset .5s ease, stroke-dasharray .6s ease, transform .5s ease, stroke .4s ease;
                &:nth-child(3) {
                    transform: rotate(180deg) scale(1);
                }
            }
        }
        &:checked + div {
            div {
                transform: rotate(90deg);
                span {
                    &:before,
                    &:after {
                        background: #2D3748;
                    }
                    &:first-child {
                        &:before {
                            transform: rotate(45deg) translate(2.2px, -3px) scaleX(1.05);
                        }
                        &:after {
                            transform: rotate(-45deg) translate(-2.2px, -3px) scaleX(1.05);
                        }
                    }
                    &:last-child {
                        &:before {
                            transform: rotate(-45deg) translate(2.2px, 3px) scaleX(1.05);
                        }
                        &:after {
                            transform: rotate(45deg) translate(-2.2px, 3px) scaleX(1.05);
                        }
                    }
                }
            }
            svg {
                stroke-dashoffset: 62;
                stroke-dasharray: 0 82.801 62 82.801;
                transform: rotate(90deg);
                stroke: #2D3748;
                &:nth-child(3) {
                    transform: rotate(270deg);
                }
            }
        }
    }
    @media (min-width: 1025px) {
        display: none;
    }
`

export const Logo = styled.a`
    color: #FF8181;
    background-size: 100%;
    font-size: 14px;
    display: flex;
    text-decoration: none;
    align-items: center;
    p {
        margin-left: 10px;
        font-weight: bold;
    }
    svg {
        width: 32px;
        height: 64px;
    }
`

export const ListMenu = styled.ul`
    display: flex;
    list-style: none;
    flex-flow: column nowrap;
    height: fit-content;
    color: #2D3748;
    text-align: center;
   
        
    @media (min-width: 481px) and (max-width: 1024px) {
        
    }
    /*
    @media (min-width: 1025px) {
        flex-direction: row;
    }*/
    
`


export const ListItem = styled(ListItemStyle)`
    && {
        cursor: pointer;
        color: #A0AEC0;
        padding: 6px 14px;
        user-select: none;
        font-size: .8rem;
        box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
        border-radius: 15px;
        &+&& {
            margin-top: 10px;
        }
        &.active {
            color: #2D3748;
            div.icon {
                background-color: #FF8181;
                color: #F1F1FA;
            }
        }
        div.icon {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            padding: 8px;
            margin-right: 12px;
            color: #FF8181;
            svg {
                height: 15px;
            }
        }
    }
`
