import {Conteneur,BrandName,Erreur, ContBrandName, StyledForm, StyledButton, StyledInput, StyledLabel} from "../../styleComponent/StyleForm"

export default function AddHotel() {

   
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