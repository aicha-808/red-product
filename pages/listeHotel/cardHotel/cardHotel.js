import React from 'react';
import styled from "styled-components";
import Image from 'next/image';

const CardContainer = styled.div`
    width: 250px;
    height: 280px;
    border-radius: 5px;
    background: #FFFF;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 8px; 
`
const CardImage = styled.div`
 width: 250px;
height: 196px;
padding: 0;
margin: 0;
object-fit: contain;
`
const CardBody = styled.div`
width: 220px;
height: 80px;
padding: 3px 8px;
`
const Adresse  = styled.p`
font-size: 11px;
font-weight: 300;
/* line-height:34px; */
color: #8D4B38;
margin: 3px;
`
const Titre = styled.h4`
font-size: 18px;
font-weight:600;
/* line-height: 18px; */
color: #222222;
margin: 3px;
`
const Prix = styled.p`
font-size: 14px;
font-weight:400;
/* line-height: 25px; */
color: #222222;
margin: 6px;
`

const  CardHotel = ({ titre,adresse,prix, imgUrl} ) => {
    return ( 
        <CardContainer>
            <CardImage  >
                {imgUrl}
                {/* <Image src ={imgUrl} alt="hotel" width={250} height={196} /> */}
            </CardImage>
            <CardBody>
                <Adresse>{adresse}</Adresse> 
                <Titre>{titre} </Titre>
                <Prix>{prix}</Prix>
            </CardBody>
        </CardContainer>
     );
}
 
export default CardHotel;
