import {StyledForm, StyledButton, StyledInput, StyledLabel, StyledCheckbox, Sty} from "../../styleComponent/StyleForm"

export default function AddHotel() {

    // styled-components
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
    const Erreur = styled.p `
    text-align: center;
    `
   
    return(
        <Conteneur>
            <ContBrandName> 
            <BrandName>RED PRODUCT</BrandName>
              </ContBrandName>
            <StyledForm  >
                <Titre>Ajouter un hotel</Titre>
                <StyledLabel  >Name</StyledLabel>
                <StyledInput type="text" name="name" ></StyledInput>
                <StyledLabel  >Adress</StyledLabel>
                <StyledInput type="text" name="name" ></StyledInput>
                <StyledLabel>E-mail</StyledLabel>
                <StyledInput type="email" name="email"></StyledInput>
                <StyledLabel>Price</StyledLabel>
                <StyledInput type="number" name="price" ></StyledInput>
                <StyledLabel>Number</StyledLabel>
                <StyledInput type="number" name="nombre" ></StyledInput>
                <StyledLabel>Devise</StyledLabel>
                <StyledInput type="number" name="price" ></StyledInput>
                <StyledLabel>images</StyledLabel>
                <StyledInput type="file"  ></StyledInput>
                {error && <Erreur>{error}</Erreur>}
                <StyledButton>Ajouter</StyledButton>
            </StyledForm>
        </Conteneur> 
  
    )
}