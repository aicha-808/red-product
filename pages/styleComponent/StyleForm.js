import styled from "styled-components";

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
 const StyledForgetPw = styled.div `
    width: 90%;
    font-size: 16px;
    font-weight: 400;
    line-height:24px;
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
function StyleForm({brandname,handleSubmit,title,styleforgotPw,Nom,handleChange,Email,motPass,confident,bEnvoi, forgotMp,compte,bredirect,emailName, emailvalue}) {

  return(
    <Conteneur>
    <ContBrandName> 
    <BrandName>{brandname}</BrandName>
      </ContBrandName>
    <StyledForm  onSubmit={handleSubmit}>
        <Titre>{title}</Titre>
        <StyledForgetPw>{styleforgotPw}</StyledForgetPw>
        <StyledLabel  >{Nom}</StyledLabel>
        <StyledInput type="text"  onChange={handleChange}></StyledInput>
        <StyledLabel>{Email}</StyledLabel>
        <StyledInput type="email" onChange={handleChange} name={emailName} value={emailvalue}></StyledInput>
        <StyledLabel>{motPass}</StyledLabel>
        <StyledInput type="password"  onChange={handleChange}></StyledInput>
        <StyledCheckbox>
            <input type="checkbox" />
            <StyledLabel>{confident}</StyledLabel>
        </StyledCheckbox>
        {/* {error && <Erreur>{error}</Erreur>} */}
        <StyledButton type="submit">{bEnvoi}</StyledButton>
    </StyledForm>
    <ForgotMp>{forgotMp}</ForgotMp>
    <Connect>{compte}
       <Link href='/auth/login'> {bredirect}</Link> 
    </Connect>
  </Conteneur> 
  )
}

export default StyleForm;
