import React from "react";
import styled from 'styled-components';
import {Titre, StyledButton, StyledForm, StyledInput, StyledLabel, StyledForgetPw } from "../../styleComponent/StyleForm";


export default function ForgetMP() {

    const Conteneur = styled.section`
    padding: 5rem;
    background-color: #494C4F;
    `
    const ContBrandName = styled.div`
    text-align: center;
    `
    const BrandName = styled.div`
    font-size: 25px;
    margin-left: 2px;
    color: #FFFFFF;
    `
    const Link = ({ className, children }) => (
      <>
      <a className={className}>
        {children}
      </a>  
      </>
    );
    
    const Styledpara = styled(Link)`
    color: red;
    text-align: center;
  `;
    const StyledLink = styled(Link)`
      color: #FCC100;
      font-weight: bold;
      text-align: center;
    `;

    // fonctionnalités-------
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