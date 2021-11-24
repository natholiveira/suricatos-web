import React, {useState} from 'react';
import {Container, Menu as MenuContainer, ToggleMenu, Logo, ListMenu, ListItem} from './style'
import {ReactComponent as ToggleMenuIcon} from '../../assets/icons/toggleMenu.svg';
import {ReactComponent as LogoIcon} from '../../assets/icons/logo.svg';
import {ReactComponent as ConfiguracaoIcon} from '../../assets/icons/configuracao.svg';
import {ReactComponent as DashboardIcon} from '../../assets/icons/dashboard.svg';
import {ReactComponent as PublicacaoIcon} from '../../assets/icons/publicacao.svg';
import {ReactComponent as IncidenteIcon} from '../../assets/icons/incidente.svg';
import {ReactComponent as LogoutIcon} from '../../assets/icons/logout.svg';
import classNames from 'classnames'
import {useLocation, useNavigate} from "react-router-dom";
function Menu(props) {
    const [showMenu, setShowMenu] = useState(false)
    let navigate = useNavigate();
    let location = useLocation();
    const changePage = (path) => {
        setShowMenu(false)
        //history.push(path)
        navigate(path)
    }

    const path = [
        {name: 'Incidentes', pathname: '/incidente', icon: <IncidenteIcon/>},
        {name: 'Dashboard', pathname: '/dashboard', icon: <DashboardIcon/>},
        {name: 'Publicações', pathname: '/publicacao', icon: <PublicacaoIcon/>},
        {name: 'Configuraçoes', pathname: '/configuracao', icon: <ConfiguracaoIcon/>},
        {name: 'Sair', pathname: '/login', icon: <LogoutIcon/>},
    ]

    return <Container>
        <Logo href="#">
            <LogoIcon/>
            <p>Suricatos</p>
        </Logo>
        <input type="checkbox" className="hidden" checked={showMenu} onChange={({target}) => setShowMenu(target.checked)}/>
        <MenuContainer>
            <nav>
                <ListMenu>
                    {path.map(x => <ListItem className={classNames({
                        active: location.pathname.includes(x.pathname)
                    })} button={true} onClick={() => changePage(x.pathname)}><div className="icon">{x.icon}</div>{x.name}</ListItem>)}
                </ListMenu>
            </nav>
        </MenuContainer>
        <ToggleMenu>
            <input type="checkbox" checked={showMenu} onChange={({target}) => setShowMenu(target.checked)}/>
            <div>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <ToggleMenuIcon/>
                <ToggleMenuIcon/>
            </div>
        </ToggleMenu>
    </Container>
}

export default Menu