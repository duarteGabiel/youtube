import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContexts";
import {  ButtonContainerLogin, CheckBox, Container,Image, InputContainer, Span, Span2 } from "./styles";
import { useNavigate } from "react-router-dom";


function Login(){
    const { handleLogin } = useContext(UserContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const logar = function() {
        handleLogin(email, password);
        navigate('/');
    };

    return(<>
        <Container>
            <Image src='data:image/jpeg;base64,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'/>
            <Span>Fazer login</Span>
            <Span2>Prosseguir no YouTube</Span2>
            <InputContainer>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"/>
            </InputContainer>
            <InputContainer>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
            </InputContainer>
            <CheckBox>
                <input type="checkbox"/>Mostrar senha
            </CheckBox>
            <ButtonContainerLogin>
                <button onClick={() => navigate('/sing-up')}>Criar conta</button>
                <button onClick={logar}>Próxima</button>
            </ButtonContainerLogin>
            
        </Container>
    </>
    )
}

export default Login;