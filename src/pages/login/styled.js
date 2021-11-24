import styled from 'styled-components'
import ButtonStyle from '@mui/material/Button'
import FormControlLabelStyle from '@mui/material/FormControlLabel'
import SwitchStyle from '@mui/material/Switch'
import FormControlStyle from '@mui/material/FormControl'
import OutlinedInputStyle from '@mui/material/OutlinedInput'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    @media(min-width: 1024px) {
        flex-direction: row-reverse;
    }
`
export const Background = styled.div`
    background: #6360FF;
    border-radius: 0 0 25px 25px;
    color: #F1F1FA;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
    width: 100%;

    @media(min-width: 1024px) {
        height: 100%;
        max-width: 50%;
        border-radius: 25px 0 0 25px;
    }
    p {
        font-weight: bold;
        margin-left: 40px;
    }
    >svg {
        height: 80px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 24px;
    height: 100%;
    max-width: 520px;
    width: 100%;
    justify-content: center;
    @media(min-width: 1024px) {
        margin: 0 auto;
    }
    > div {
        margin-bottom: 24px;
        h4 {
            font-size: 32px;
            color: #FF8181;
            margin-bottom: 12px;
        }
        p {
            font-size: 14px;
            color: #333333;
        }
    }
    > a {
        text-decoration: none;
        color: #4F4F4F;
        font-size: 14px;
        margin-top: 12px;
        align-self: center;
    }
`
export const Button = styled(ButtonStyle)`
    && {/*
        background: #FF8181;
        border-radius: 12px;
        color: #F1F1FA;*/
    }
`
export const FormControlLabel = styled(FormControlLabelStyle)`
    && {
        margin: 12px 0 24px;
    }
`
export const Switch = styled(SwitchStyle)``
export const FormControl = styled(FormControlStyle)`
    && {
        &+&& {
            margin-top: 24px;
        }
    }
`
export const InputLabel = styled.label`
    font-size: 14px;
    color: #2D3748;
    margin-bottom: 6px;
`
export const OutlinedInput = styled(OutlinedInputStyle)`
    && {
        border-radius: 15px;
    }
`

