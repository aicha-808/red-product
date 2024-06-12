import React from 'react';
import styled from "styled-components";
import styles from '../../../styles/style.module.css'

const CardContainer = styled.div`
    width: 300px;
    height: 65px;
    border-radius: 5px;
    background: #FFFF;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 3px; 
    padding: 8px;
`

const CardBody = styled.div`
 width: 300px;
height: 65px;
padding: 2px;
display: flex;
gap: 1rem;
align-items: center;

`
const Nombre = styled.span`
font-size: 28px;
font-weight: 300;
line-height:35px;
color: #000000;
margin-right: 5px;
`
const Titre = styled.h4`
font-size: 18px;
font-weight:300;
line-height: 18px;
color: #000000;

;
`
const Desc = styled.span`
font-size: 14px;
font-weight:400;
line-height: 25px;
color: #000000;
margin: 0px;
`
const Context = styled.div`
`
const ContIcone = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
background: ${(props) => (props.background)};
text-align: center;
` 
const  Card = ({ titre,nombre,desc, background, icon: Icone} ) => {
    return ( 
        <CardContainer>
            <CardBody>
                <ContIcone  background ={background}>
                    {Icone &&  <Icone color="white" className={styles.icone}  size={15}/>}
                </ContIcone>
                <div>
                    <Titre>
                        <Nombre>{nombre}</Nombre> 
                        {titre}<br />
                        <Desc>{desc}</Desc>
                    </Titre>
                </div>
            </CardBody>
        </CardContainer>
     );
}
 
export default Card;
