import React from "react";
import styled from 'styled-components';
import { useState } from "react";
import axios from 'axios';


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
const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const FileLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffffff;
  color: gray;
  border-radius: 4px;
  border:   1px solid gray;
  margin-right: 10px;
  text-align:center;
  width: 400px;
  height:200px;
  font-size: 12px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileName = styled.span`
  font-size: 14px;
  color: #333;
`;


export default function AddHotel() {

  const [imgUrl, setImgUrl] = useState('');
  const [ titre, setTitre] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [prix, setPrix] = useState('');
  const [devise, setDevise] = useState('');

  const emptyInput = () => {
    setAdresse('');
    setDevise('');
    setEmail('');
    setImgUrl('');
    setPhone('');
    setTitre('');
    setPrix('');
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImgUrl(file.name);
    } else {
      setImgUrl('');
    }
  }

const handleSubmit = async(e) => {
    e.preventDefault();
    try {
    const response = await axios.get('http://localhost:5000/api/addHotel', {
        imgUrl,
        adresse,
        titre,
        email,
        phone,
        prix,
        devise,
    });
    console.log(response.data);
    } catch (error) {
    console.log(error);
    }
    
    emptyInput();
}
               
   
    return(
        <Conteneur>
            <ContBrandName> 
            <BrandName>RED PRODUCT</BrandName>
              </ContBrandName>
            <StyledForm  onSubmit={handleSubmit}>
                <Titre>Créer un nouveau hôtel</Titre>
                <StyledLabel  >Nom de l'hôtel</StyledLabel>
                <StyledInput type="text" name=" titre" value={ titre} onChange={(e) => setTitre(e.target.value)} required></StyledInput>
                <StyledLabel  >Adresse</StyledLabel>
                <StyledInput type="text" name="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)}></StyledInput>
                <StyledLabel>E-mail</StyledLabel>
                <StyledInput type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></StyledInput>
                <StyledLabel>Numero de téléphone</StyledLabel>
                <StyledInput type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required></StyledInput>
                <StyledLabel>Prix par nuit</StyledLabel>
                <StyledInput type="text" name="prix" value={prix} onChange={(e) => setPrix(e.target.value)} required></StyledInput>
                <StyledLabel>Devise</StyledLabel>
                <select value={devise} onChange={(e) => setDevise(e.target.value)}>
                    <option >F XOF</option>
                    <option>Euro</option>
                    <option>Dollar</option>
                </select>
                <StyledLabel >Ajouter une photo</StyledLabel>
                <FileInputContainer>
                    <FileLabel htmlFor="file-input">Ajouter une photo</FileLabel>
                    <HiddenFileInput id="file-input" type="file" onChange={handleFileChange}  placeholder="ajouter une photo"  />
                    <FileName>{imgUrl}</FileName>
                </FileInputContainer>
                <StyledButton type="submit">Enregistrer</StyledButton>
            </StyledForm>
        </Conteneur> 
  
    )
}