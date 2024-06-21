import React, {useState} from "react";
import axios from 'axios';
import styles from '@/styles/auth.module.css'
import { useRouter } from "next/router";
import styled from 'styled-components';
import Link from "next/link";


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

const StyledForgetPw = styled.div `
width: 90%;
font-size: 16px;
font-weight: 400;
line-height:24px;
`


export default function ForgetMP() {
  
    const [email, setEmail] = useState("");
 
    const [error, setError] = useState('');
    const routerVlidePw = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
          setEmail(response.data.message);
          console.log(response.data);
          routerVlidePw.push('/auth/validPassword');

        } catch (error) {
          console.error('Error sending reset email:', error);
          setError('Error sending reset email');
        }
      };
    

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
                <StyledButton type="submit">Envoyer</StyledButton>
            </StyledForm>
            {error && <p>{error}</p>}
            <p className={styles.fwp}>Revenir à la
               <Link href='/auth/login' className={styles.fwp}> connexion</Link> 
            </p>
        </Conteneur>

    )
} 