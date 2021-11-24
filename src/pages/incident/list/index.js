import React, {useState, useEffect} from "react";
import {Container,Button,Header, List, Item, ItemHeader, ItemDetail} from './styled'
import {useNavigate} from "react-router-dom";
import ButtonOption from "./buttonOption";
import api from '../../../services/api';

import moment from 'moment';

const IncidentList = () => {
    let navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/incidente/${id}`, { replace: true })
    }

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        getIncidents();
    }, [])

    const getIncidents = () => {
        api.get(`api/post`)
            .then((response) => {
                console.log("getIncidents")
                console.log(response.data)
                setIncidents(response.data)
            }).catch((err) => {
                console.log(err)
            });
    }

    return <Container>
        <Header>
            <h4>Incidentes</h4>
            <div>
                <ButtonOption status={[true]} setStatus={(data) => console.log(data)}/>

            </div>
        </Header>
        <List>
            {incidents.map(incident => <Item onClick={() => handleClick(incident.post.id)} key={incident.post.id}>
                <ItemHeader>
                    <h4>{incident?.post?.title}</h4>
                </ItemHeader>
                <ItemDetail>{moment(incident?.post?.createdAt).format('DD/MM/YYYY [ás] h:mm:ss')}</ItemDetail>
                <ItemDetail><p><span className="bold"></span> (Criado por: {incident?.post?.user?.name})</p></ItemDetail>
            </Item>)}
        </List>
    </Container>
}

export default IncidentList