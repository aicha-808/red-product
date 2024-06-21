import React, {useState, useContext} from "react";
import styled from 'styled-components';
import Link from "next/link";
import { AuthContext } from '../../../context/AuthContext';


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
                <StyledButton type="submit">S'inscrire</StyledButton>
            </StyledForm>
            <Connect>Vous avez déja un compte?
               <Link href='/auth/login'> Se connecter</Link> 
            </Connect>
        </Conteneur> 
  
    )
}