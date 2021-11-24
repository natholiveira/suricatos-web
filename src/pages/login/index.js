import React, {useState} from 'react';
import {Box, Button, Container, Form, FormControl, FormControlLabel, InputLabel, OutlinedInput, Switch, Background} from "./styled";
import {ReactComponent as SuricatoIcon} from "../../assets/icons/logo.svg";
import {useAuth} from "../../routes";
import {useLocation, useNavigate} from "react-router-dom";

const FormInitialState = {
    email: {value: '', error: ''},
    password: {value: '', error: ''},
    remember: {value: true, error: ''}
}

function Login(props) {
    const [form, setForm] = useState({...FormInitialState})
    let auth = useAuth();
    let navigate = useNavigate();
    let location = useLocation();
    const handleForm = (e) => {
        const {name, type} = e.target
        const value = type === 'checkbox' ? e.target.checked : (type === 'file' ? [...e.target.files] : e.target.value)

        setForm(prevState => ({
            ...prevState,
            [name]: {...prevState[name], value},
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let from = '/incidente'
        console.log('aqui')
        console.log(form)
        auth.signin({username: form.email.value, password: form.password.value}, () => {
            navigate(from, { replace: true });
        })
    }

    return <Container>
        <Background>
            <SuricatoIcon/>
            <p>Suricatos</p>
        </Background>
        <Box>
            <div>
                <h4>Bem Vindo</h4>
                <p>Preencha seu email e senha para acessar o Portal Suricatos</p>
            </div>
            <Form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel htmlFor="email" shrink={true}>E-mail</InputLabel>
                    <OutlinedInput id='email' name='email'
                                   placeholder='Seu e-mail'
                                   onChange={handleForm}
                                   value={form.email.value}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='password' shrink={true}>Senha</InputLabel>
                    <OutlinedInput id='password' name='password'
                                   placeholder='Sua senha'
                                   onChange={handleForm}
                                   value={form.password.value}
                                   type={"password"}
                                   />
                </FormControl>

                <FormControlLabel

                    control={<Switch size="small" color='secondary' checked={form.remember.value}
                                     onChange={handleForm}/>}
                    label="Lembrar-me"
                />
                <Button variant="contained" type='submit'>Acessar</Button>
            </Form>
            <a href="#">Não possui uma conta? Crie uma aqui</a>
        </Box>

    </Container>
}

export default Login