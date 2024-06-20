import {Titre,Conteneur,BrandName, ContBrandName, StyledForm, StyledButton, StyledInput, StyledLabel} from "../../styleComponent/StyleForm"

export default function AddHotel() {
  
   
    return(
        <Conteneur>
            <ContBrandName> 
            <BrandName>RED PRODUCT</BrandName>
              </ContBrandName>
            <StyledForm  >
                <Titre>Ajouter un hotel</Titre>
                <StyledLabel  >Nom de l'hôtel</StyledLabel>
                <StyledInput type="text" name="name" ></StyledInput>
                <StyledLabel  >Adresse</StyledLabel>
                <StyledInput type="text" name="name" ></StyledInput>
                <StyledLabel>E-mail</StyledLabel>
                <StyledInput type="email" name="email"></StyledInput>
                <StyledLabel>Numero de téléphone</StyledLabel>
                <StyledInput type="number" name="nombre" ></StyledInput>
                <StyledLabel>Prix par nuit</StyledLabel>
                <StyledInput type="number" name="price" ></StyledInput>
                <StyledLabel>Devise</StyledLabel>
                <select>
                    <option>F XOF</option>
                    <option>Euro</option>
                    <option>Dollar</option>
                </select>
                <StyledInput type="number" name="price" ></StyledInput>
                <StyledLabel>Ajouter une photo</StyledLabel>
                <StyledInput type="text"  ></StyledInput>
                {/* {error && <Erreur>{error}</Erreur>} */}
                <StyledButton type="submit">Enregistrer</StyledButton>
            </StyledForm>
        </Conteneur> 
  
    )
}