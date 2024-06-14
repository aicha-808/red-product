import React from "react";
import styled from 'styled-components';
import {Link,StyledLink,Titre, StyledButton, StyledForm, StyledInput, StyledLabel, StyledForgetPw } from "../../styleComponent/StyleForm";


export default function ForgetMP() {

    const [email, setEmail] = useState("");
 
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    

    return(
        <Conteneur>
            <ContBrandName> 
            <BrandName>RED PRODUCT</BrandName>
              </ContBrandName>
            <StyledForm  onSubmit= {handleSubmit}>
                <Titre>Mot de passe oublié?</Titre>
                <StyledForgetPw>Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions
                 sur la façon de modifier votre mot de passe.</StyledForgetPw>
                <StyledLabel>Votre e-mail</StyledLabel>
                <StyledInput type="email"  onChange={(e) => setEmail(e.target.value)}></StyledInput>
                <StyledButton>Envoyer</StyledButton>
            </StyledForm>
            <Link>Revenir à la
               <StyledLink href='/login'> connexion</StyledLink> 

            </Link>
        </Conteneur>

    )
} 