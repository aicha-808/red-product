import React, {useState, useContext} from "react";
import styles from "@/styles/auth.module.css";
import Link from "next/link";
import {Conteneur,BrandName, ContBrandName, Connect, ForgotMp,StyledForm, Titre, StyledButton, StyledInput, StyledLabel, StyledCheckbox  } from "@/pages/styleComponent/StyleForm";
import {AuthContext} from "../auhContext";

export default function Login() {

    const [values, setValues] = useState({
        email: "",
        password: "",
      });
      
    const {login} = useContext(AuthContext);

      const { email, password } = values;
    
      const handleChange = (e) =>
        setValues({ ...values, [e.target.name]: e.target.value });
        
      const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
        // try {
        //   const response = await axios.get('http://localhost:5000/api/adusers', {email, password});
        //   // setToken(response.data.token);
        //   console.log(response.data);
        //   setError(false)
        // } catch (error) {
        //   console.error(error);
        // }
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
                <Link href='/forgotMp' className={styles.fpm}>Mot de passe oublié?</Link>
            </ForgotMp>
            <Connect>Vous n'avez pas de compte?
               <Link href='/auth/register' className={styles.fpm}> S'inscrire</Link> 
            </Connect>
        </Conteneur>

    )
}