import styled, {css} from 'styled-components'
import FormControlStyle from "@mui/material/FormControl";
import OutlinedInputStyle from "@mui/material/OutlinedInput";
import ButtonStyle from "@mui/material/Button";
import IconButtonStyle from "@mui/material/IconButton";
import SelectMultipleStyle from "react-select";
export const Container = styled.div`

`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    > div {
        display: flex;
        flex-direction: column;
        padding: 24px;
    }
    @media(min-width: 1024px) {
        flex-wrap: wrap;
        >div {
            width: 50%;
        }
    }
`

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

export const IconButton = styled(IconButtonStyle)`
    && {
        align-self: flex-end;
        svg {
            height: 15px;
        }
    }
`
export const Button = styled(ButtonStyle)`
    && {
        color: #FCFCFF;
        padding: 12px 36px;
        align-self: flex-end;
        margin-top: 12px;
    }
`

export const SelectMultiple = styled(SelectMultipleStyle).attrs((props) => ({
    ...props,
    theme: (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            neutral0: "#FCFCFF",
            primary: "#6360ff",
            primary25: "rgba(99,96,255,0.25)",
            primary50: "rgba(99,96,255,0.5)",
            primary75: "rgba(99,96,255,0.75)"
        }
    }),
    styles: {
        control: (data) => ({...data}),
        menuPortal: (base) => ({...base, zIndex: 9999, backgroundColor: '#FFF'})
    },
    placeholder: "Digite ou selecione",
    maxMenuHeight: 220,
    menuPlacement: "auto",
    menuPortalTarget: document.getElementById('root')
}))`
    && {
        ${({error}) => error && css`>div {border-color: #F44336;}`}
        > div {
            padding: 9px 6px;
            border-radius: 12px;
        }
    }
`

export const ImageDrop = styled.div`
    width: 100%;
    height: 300px;
    background: #F3F3F8;
    border-radius: 25px 0 0 25px;

    display: flex;
    flex-direction: column;
    
    img {
        max-width: 100%;
        width: fit-content;
    }
    >div {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media(min-width: 1024px){
        height: 100%;
        width: 50%;
    }
    
`

export const InputFile = styled.input.attrs(props => ({
    ...props,
    type: 'file'
}))``