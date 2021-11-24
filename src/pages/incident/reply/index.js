import React, {useEffect, useState} from "react";
import {Button, Container, Form, FormControl, ImageDrop, Info, InputLabel, OutlinedInput,} from "./styled";
import imgProfile from "../../../assets/imgJoaquina.png";
import {ProfilePost} from "../../post/list/styled";

import api from '../../../services/api';

import moment from 'moment';
import {useNavigate, useParams} from "react-router";
import {SelectMultiple} from "../../post/create/styled";


const FormInitialState = {
    feedback: {value: '', error: ''},
    link: {value: '', error: ''},
    protocol: {value: '', error: ''},
    status: {value: '', error: ''},
}


const PostCreate = () => {
    const navigate = useNavigate()
    const {protocol} = useParams();
    const [form, setForm] = useState({...FormInitialState})
    const [incident, setIncident] = useState({})


    const handleSubmit = (e) => {
        e.preventDefault()
        let error = false
        let newForm = {}
        const value = Object.keys(form).reduce((prev, curr) => {
            newForm[curr] = {...form[curr], error: ''}
            switch (curr) {
                default:
                    break
            }
            if (form[curr].value !== null) {
                prev[curr] = form[curr].value
            }
            return prev
        }, {})
        setForm(newForm)
        if (!error) {
            api.post(`api/post-reply`, {
                "postId": Number(protocol),
                "externalLink": value.link,
                "externalProtocal": value.protocol,
                "description": value.feedback,
                "status": value.status,
            })
                .then((response) => {
                    navigate(`/incidente`, {replace: true})
                }).catch((err) => {
                console.log(err)
            });
            console.log()
        }
    }

    useEffect(() => {
        getIncident(protocol);
    }, [])

    const getIncident = (id) => {
        api.get(`api/post/${id}`)
            .then((response) => {
                setIncident(response.data)
            }).catch((err) => {
            console.log(err)
        });
    }

    const handleForm = (e) => {
        const {name, type} = e.target
        const value = type === 'checkbox' ? e.target.checked : (type === 'file' ? [...e.target.files] : e.target.value)

        setForm(prevState => ({
            ...prevState,
            [name]: {...prevState[name], value},
        }))
    }

    const statusAvailable = [{label: 'Aberto', value: 'OPEN'}, {label: 'Em Andamento', value: 'IN_PROGRESS'}, {label: 'Concluído', value: 'CONCLUDED'},]
    return <Container>

        <Form onSubmit={handleSubmit}>
            <div>
                <ProfilePost>
                    <div>
                        <img src={imgProfile} alt="profile"/>
                        <div>
                            <h5>{incident?.post?.user?.name}
                                <span>está em</span> {incident?.post?.address?.neighborhood} - {incident?.post?.address?.city}
                            </h5>
                            <p>{moment(incident?.post?.createdAt).format('DD/MM/YYYY [ás] h:mm:ss')}</p>
                        </div>
                    </div>

                </ProfilePost>

                <Info>
                    <h3>{incident?.post?.title}</h3>
                    <p>{incident?.post?.description}</p>
                </Info>
                <FormControl>
                    <InputLabel htmlFor="status">Status</InputLabel>
                    <SelectMultiple inputId='tag' options={statusAvailable}
                                    value={Array.isArray(statusAvailable) && statusAvailable.find(tag => tag.value === form.status.value)}
                                    error={form.status.error}
                                    onChange={e => {
                                        handleForm({
                                            target: {name: 'status', value: e.value},
                                        })
                                    }}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="feedback">Devolutiva do problema</InputLabel>
                    <OutlinedInput id='feedback' name='feedback'
                                   minRows={5}
                                   multiline={true}
                                   maxRows={5}
                                   placeholder='Devolutiva do problema relatado'
                                   onChange={handleForm}
                                   value={form.feedback.value}/>
                </FormControl>


                <FormControl>
                    <InputLabel htmlFor="link">Link Externo</InputLabel>
                    <OutlinedInput id='link' name='link'
                                   placeholder='Link externo da prefeitura'
                                   onChange={handleForm}
                                   value={form.link.value}/>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="protocol">Protocolo</InputLabel>
                    <OutlinedInput id='protocol' name='protocol'
                                   placeholder='Protocolo da prefeitura'
                                   onChange={handleForm}
                                   value={form.protocol.value}/>
                </FormControl>


                <Button color='secondary' onClick={handleSubmit} variant='contained'>
                    Responder
                </Button>
            </div>
            <ImageDrop>
                {incident?.images && incident?.images.length > 0 &&
                <img src={incident?.images[0]} alt="image post"/>
                }
            </ImageDrop>
        </Form>
    </Container>
}

export default PostCreate