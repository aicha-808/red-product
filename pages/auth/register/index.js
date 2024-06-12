import React, {useState, useContext} from "react";
import styled from 'styled-components';
import Link from "next/link";
import {Conteneur,BrandName, ContBrandName, Connect, ForgotMp, StyledForm, Titre, StyledButton, StyledInput, StyledLabel, StyledCheckbox  } from "../../styleComponent/StyleForm";
import { AuthContext } from '../auhContext';


export default function Singup() {
    const { register } = useContext(AuthContext);

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });
 
    // const [error, setError] = useState(null);
    const { name, email, password } = values;

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
       
    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(name, email, password);
    };

  
    return(
        <Conteneur>
            <ContBrandName> 
            <BrandName>RED PRODUCT</BrandName>
              </ContBrandName>
            <StyledForm  onSubmit={handleSubmit}>
                <Titre>Inscrivez-vous en tant que Admin</Titre>
                <StyledLabel  >Nom</StyledLabel>
                <StyledInput type="text" name="name" value={name} onChange={handleChange}></StyledInput>
                <StyledLabel>E-mail</StyledLabel>
                <StyledInput type="email" name="email" value={email} onChange={handleChange}></StyledInput>
                <StyledLabel>Mot de passe</StyledLabel>
                <StyledInput type="password" name="password" value={password} onChange={handleChange}></StyledInput>
                <StyledCheckbox>
                    <input type="checkbox" />
                    <StyledLabel>Accepter les termes et la politique</StyledLabel>
                </StyledCheckbox>
                {/* {error && <Erreur>{error}</Erreur>} */}
                <StyledButton type="submit">S'inscrire</StyledButton>
            </StyledForm>
            <Connect>Vous avez déja un compte?
               <Link href='/auth/login'> Se connecter</Link> 
            </Connect>
        </Conteneur> 
  
    )
}