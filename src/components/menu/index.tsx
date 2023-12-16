import { MenuContext } from "../../contexts/menuContexts";
import {
    ButtonIcon,
    Container,
     MenuItem
} from "./styles";
import React, { useContext } from 'react';
import HomeIcon from '../../assets/botao-de-inicio.png';
import LivroIcon from '../../assets/abra-o-livro.png';
import ShortsIcon from '../../assets/logotipo-do-youtube.png';
import HistoryIcon from '../../assets/historia.png';
import { useNavigate } from "react-router-dom";


const items = [
    {name: 'inicio', link: '/', Image: HomeIcon },
    {name: 'Shorts', link: '/shorts', Image: ShortsIcon},
    {name: 'Biblioteca', link: '/library', Image: LivroIcon},
    {name: 'Historico', link: '/history', Image: HistoryIcon}
]


function Menu() {
    const {openMenu} = useContext(MenuContext);
    const navigate = useNavigate();

    return(
        <Container openMenu={openMenu}>
            {items.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                    <ButtonIcon alt="" src={item.Image}/>
                    <span>{item.name}</span>
                </MenuItem>
            ))}
        </Container>
    )
}

export default Menu;