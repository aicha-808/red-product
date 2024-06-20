import React, {useState} from "react";
import {Conteneur,ContBrandName,BrandName,Link,Titre, StyledButton, StyledForm, StyledInput, StyledLabel, StyledForgetPw } from "../../styleComponent/StyleForm";
import axios from 'axios';
import styles from '@/styles/auth.module.css'
// import { useRouter } from "next/router";

export default function ForgetMP() {
  
    const [email, setEmail] = useState("");
 
    const [error, setError] = useState('');
    // const routerVlidePw = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
          setEmail(response.data.message);
          console.log(response.data);
          // routerVlidePw.push('/auth/validPassword');
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