import React, {useState, useContext} from "react";
import styles from "@/styles/auth.module.css";
import Link from "next/link";
import styled from 'styled-components';
import {AuthContext} from "../auhContext";
import { useRouter } from "next/router";



const Conteneur = styled.section`
padding: 2rem;
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
 const Connect  = styled.p `
text-align: center;
color: #FFF;
`
 const ForgotMp = styled.div `
text-align: center;
`

 const StyledForm = styled.form`
    padding: 20px;
    width: 30%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 2rem auto;

`
 const Titre = styled.h1`
    font-size: 20px;
`
 const StyledLabel = styled.label`
  display: block;
  margin-top: 15px;
  font-weight: semibold;

`
 const StyledInput = styled.input`
  width: 90%;
  margin-top: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
`
 const StyledCheckbox = styled.div `
    width: 90%;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
`

 const StyledButton = styled.button`
  background-color: #474A4D;
  color: white;
  padding: 10px;
  font-size: 21.33px;
  line-height: 26.67px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 90%;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
`

export default function Login() {

    const [values, setValues] = useState({
        email: "",
        password: "",
      });
      
    const {login} = useContext(AuthContext);

      const { email, password } = values;
    
      const handleChange = (e) =>
        setValues({ ...values, [e.target.name]: e.target.value });

      const routerDahboard = useRouter();

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(email, password);
          routerDahboard.push('/dashboard');
        } catch (error) {
          console.log("Error:", error);
        }
        
      }

       return(
        <Conteneur>
            <ContBrandName> 
            <BrandName>RED PRODUCT</BrandName>
              </ContBrandName>
            <StyledForm  onSubmit={handleSubmit}>
                <Titre>Connectez-vous en tant que Admin</Titre>
                <StyledLabel htmlFor="mail">E-mail</StyledLabel>
                <StyledInput type="email"  name="email" value={email} onChange={handleChange} id="mail" placeholder="email"></StyledInput>
                <StyledLabel>Mot de passe</StyledLabel>
                <StyledInput type="password"  name="password" value={password} onChange={handleChange} ></StyledInput>
                <StyledCheckbox>
                    <input type="checkbox" />
                    <StyledLabel>Gardez-moi connecté</StyledLabel>
                </StyledCheckbox>
                {/* {error && <Erreur>{error}</Erreur>} */}
                <StyledButton type="submit">Se connecter</StyledButton>
            </StyledForm>
            <ForgotMp>
                <Link href='/auth/forgotPW' className={styles.fpm}>Mot de passe oublié?</Link>
            </ForgotMp>
            <Connect>Vous n'avez pas de compte?
               <Link href='/auth/register' className={styles.fpm}> S'inscrire</Link> 
            </Connect>
        </Conteneur>

    )
}