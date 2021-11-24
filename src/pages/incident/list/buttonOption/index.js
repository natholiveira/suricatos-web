import React, {useState, useRef} from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import {Container, Button, ButtonGroup} from "./style";
import { ReactComponent as ExpandMore } from '../../../../assets/icons/expandMore.svg';
import classNames from 'classnames'

export default function ButtonOption(props) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <Container>
            <Button classes={{root: 'toggle'}} ref={anchorRef}
                    aria-controls={open ? 'option-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select option"
                    className="toggle"
                    aria-haspopup="menu"
                    onClick={handleToggle}>
                Visualizar por {!open ? <ExpandMore/> : <ExpandMore style={{transform: "rotate(180deg)"}}/>}
            </Button>

            <Popper open={open} anchorEl={anchorRef.current} role={undefined}
                    transition disablePortal>
                {({TransitionProps, placement}) => (
                    <div
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'right top' : 'right bottom',

                        }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <ButtonGroup >
                                    <Button className={classNames({
                                        active: props.status.length === 1 && props.status[0] === false
                                    })} onClick={() => props.setStatus([false ])}>Abertos</Button>
                                    <Button className={classNames({
                                        active: props.status.length === 1 && props.status[0] === true
                                    })} onClick={() => props.setStatus([true])}>Fechados</Button>
                                    <Button className={classNames({
                                        active: props.status.length === 2
                                    })} onClick={() => props.setStatus([true, false])}>Todos</Button>
                                </ButtonGroup>
                            </ClickAwayListener>
                    </div>
                )}
            </Popper>
        </Container>
    );
}
