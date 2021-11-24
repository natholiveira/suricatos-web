import React, {useState} from "react";
import {
    Container,
    Form,
    Button,
    FormControl,
    OutlinedInput,
    InputLabel,
    SelectMultiple,
    ImageDrop,
    InputFile,
    IconButton
} from "./styled";
import imgProfile from "../../../assets/imgprofile.png";
import imgAdd from "../../../assets/imgAdd.png";
import {ReactComponent as CloseIcon} from "../../../assets/icons/close.svg";
import {ProfilePost} from "../list/styled";
import {useDropzone} from 'react-dropzone';

const FormInitialState = {
    title: {value: '', error: ''},
    text: {value: '', error: ''},
    location: {value: '', error: ''},
    people: {value: [], error: ''},
    tag: {value: [], error: ''},
    file: {value: false, error: ''},
}


const PostCreate = () => {
    const [form, setForm] = useState({...FormInitialState})
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        onDrop: acceptedFiles => {
            handleForm({
                target: { name: 'file',value: {...acceptedFiles[0], preview: URL.createObjectURL(acceptedFiles[0])} }
            });
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        let error = false
        let newForm = {}
        const value = Object.keys(form).reduce((prev, curr) => {
            newForm[curr] = { ...form[curr], error: '' }
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
            console.log(value)
        }
    }

    const handleForm = (e) => {
        const {name, type} = e.target
        const value = type === 'checkbox' ? e.target.checked : (type === 'file' ? [...e.target.files] : e.target.value)

        setForm(prevState => ({
            ...prevState,
            [name]: {...prevState[name], value},
        }))
    }
    const tagsAvailable = [{label: 'Asfalto', value: 'asfalto'},{label: 'Mobilidade', value: 'mobilidade'},{label: 'Transporte Público', value: 'transportepublico'},]
    console.log(form)
    return <Container>

        <Form onSubmit={handleSubmit}>
            <div>
            <ProfilePost>
                <div>
                    <img src={imgProfile} alt="profile"/>
                    <div>
                        <h5>Prefeitura da Cidade de São Paulo</h5>
                        <p>12/11/2021 12:11:233</p>
                    </div>
                </div>

            </ProfilePost>
            <FormControl>
                <InputLabel htmlFor="title">Título</InputLabel>
                <OutlinedInput id='title' name='title'
                               placeholder='Título da publicação'
                               onChange={handleForm}
                               value={form.title.value}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="texg">Texto</InputLabel>
                <OutlinedInput id='text' name='text'
                               minRows={5}
                               multiline={true}
                               maxRows={5}
                               placeholder='Texto a ser publicado'
                               onChange={handleForm}
                               value={form.text.value}/>
            </FormControl>


            <FormControl>
                <InputLabel htmlFor="location">Localização</InputLabel>
                <OutlinedInput id='location' name='location'
                               placeholder='Título da publicação'
                               onChange={handleForm}
                               value={form.location.value}/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="tag">Categorias</InputLabel>
                <SelectMultiple inputId='tag' options={tagsAvailable}
                                value={(Array.isArray(tagsAvailable) && Array.isArray(form.tag.value)) && form.tag.value.map(x =>  tagsAvailable.find(tag => tag.value === x))}
                                error={form.tag.error}
                                isMulti={true}
                                onChange={e => {
                                    console.log(e)
                                    handleForm({
                                        target: { name: 'tag', value: Array.isArray(e) ? e.map(x => x.value) : [] },
                                    })
                                }} />
            </FormControl>

            <Button color='secondary' variant='contained'>
                Publicar
            </Button>
            </div>
            <ImageDrop {...getRootProps({className: 'dropzone'})}>
                <InputFile {...getInputProps()}/>
                {form.file.value && <IconButton onClick={(e) => {
                    e.stopPropagation()
                    handleForm({
                        target: {name: 'file', value: false}
                    });
                }}>
                    <CloseIcon/>
                </IconButton>}
                <div>
                <img src={form.file.value ? form.file.value.preview : imgAdd} alt="image post"/>
                </div>
            </ImageDrop>
        </Form>
    </Container>
}

export default PostCreate