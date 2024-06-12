import styled from "styled-components";

export const Conteneur = styled.section`
padding: 2rem;
background-color: #494C4F;
`
export const ContBrandName = styled.div`
text-align: center;
`
export const BrandName = styled.div`
font-size: 25px;
margin-left: 2px;
color: #FFFFFF;
`
export const Connect  = styled.p `
text-align: center;
color: #FFF;
`
export const ForgotMp = styled.div `
text-align: center;
`
export const Erreur = styled.p `
text-align: center;
color: red;
`

export const StyledForm = styled.form`
    padding: 20px;
    width: 30%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 2rem auto;

`
export const Titre = styled.h1`
    font-size: 20px;
`
    
export const StyledLabel = styled.label`
  display: block;
  margin-top: 15px;
  font-weight: semibold;

`
export const StyledInput = styled.input`
  width: 90%;
  margin-top: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
`
export const StyledCheckbox = styled.div `
    width: 90%;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
`
export const StyledForgetPw = styled.div `
    width: 90%;
    font-size: 16px;
    font-weight: 400;
    line-height:24px;
`
export const StyledButton = styled.button`
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
