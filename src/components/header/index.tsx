import { 
    Container, 
    LogoContainer, 
    ButtonContainer, 
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput, 
    SearchButton,
    HeaderButton,
    BackButton,
    ClearButton,
    CloseImg,
    SearchButtonResponsive
} from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone-gravador_5aec03c3660f4d97b7d99219e43f0185.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';
import BackButtonIcon from '../../assets/voltar.png';
import CloseIcon from '../../assets/fechar-simbolo-de-botao-circular.png';
import React, { useContext, useRef, useState } from 'react'
import { MenuContext } from "../../contexts/menuContexts";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContexts";
import { useSearchContext } from "../../contexts/searchContexts";




const Header: React.FC = () => {
    const {openMenu,setOpenMenu} = useContext(MenuContext);
    const navigate = useNavigate();
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)
    const [clearButton, setClearButton] = useState(false)

    const [openSearch, setOpenSearch] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null);

    const Search = () => {
      setOpenSearch(true)
      if(inputRef.current) {
        inputRef.current.focus()
      }
    }   
    const { login, logOut, user} = useContext(UserContext)  

    const {setSearch} = useSearchContext()  

    const [inputValue, setInputValue] = useState('')

    function handleInput(inputValue: string) {
      setInputValue(inputValue)
      if(inputValue === '') {
        setClearButton(false)
      } else (
        setClearButton(true)
      )
    }   
    const clearInput = () => {
      setInputValue('')
      setClearButton(false)
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }   
    return(
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)}  margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburguerIcon}/>
                </ButtonContainer>
                <img 
                    style={{ cursor: 'pointer', width: '100px' }}
                    alt=''
                    src={Logo}
                />
            </LogoContainer>

            <SearchButtonResponsive onClick={Search}>
                <ButtonIcon alt="ícone lupa" src={SearchIcon}/>
            </SearchButtonResponsive>

            <SearchContainer openSearch={openSearch}>

                <BackButton openSearch={openSearch} onClick={() => setOpenSearch(false)}>
                    <img alt="Botão voltar" src={BackButtonIcon} style={{width: '20px'}}/>
                </BackButton>

                <SearchInputContainer>
                    <SearchInput
                        ref={inputRef}
                        value={inputValue} 
                        placeholder="Pesquisar" 
                        onChange={(e) => {
                        handleInput(e.target.value)
                        }}
                        onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setSearch(inputValue)
                            navigate('/search')
                            setOpenSearch(false)
                        }
                        }}
                    />
                <ClearButton 
                    clearButton={clearButton}
                    onClick={clearInput}
                >
                    <CloseImg src={CloseIcon}/>                    
                </ClearButton>
                
                </SearchInputContainer>

                <SearchButton 
                onClick={() => {
                    if (inputValue.trim() === '') {
                    alert('Digite alguma palavra chave antes de tentar pesquisar')
                    return;
                    }
                    setSearch(inputValue)
                    navigate('/search')
                }}
                >
                <ButtonIcon alt="ícone lupa" src={SearchIcon}/>
                </SearchButton>

                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="ícone microfone" src={MicIcon}/>
                </ButtonContainer>
            </SearchContainer>
            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon}/>
                </ButtonContainer>

                {login?
                <>
                    <ButtonContainer margin='60px 0px 0 30px' onClick={onClick} className="dropDownMenu">
                        {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}       
                        <nav ref={dropDownRef} className={`dropDownMenu ${isActive ? "active" : "inactive"}`}>
                            <span onClick={() => logOut()}>Sair</span>                        
                        </nav>
                        <nav ref={dropDownRef} className={`dropDownMenu ${isActive ? "active" : "inactive"}`}>                           
                            <span onClick={() => navigate('/your-videos')}>Meus videos</span>
                        </nav>
                    </ButtonContainer>
                    
                </>
                :
                
                    <button onClick={() => navigate('/login')} >Fazer login</button>
                }
            </HeaderButton>

        </Container>
    )
}

export default Header;