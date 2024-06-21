import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import styles from "@/styles/style.module.css"
import { IoMdAdd } from "react-icons/io";
import CardHotel from "@/pages/listeHotel/cardHotel/cardHotel";
import Sidebar from "@/pages/sidebar/sidebar";
import Header from "@/pages/header/header";
import axios from "axios";



const Container = styled.div`
width:100%;
height: 100vh;
display: flex;
gap: 0;
`
 const ContSidebar = styled.div`
 width:19%;
 height: 100vh;
 padding: 0.5rem 0rem;
 background: #55595C;
 `
const ContHotel = styled.div`
background: #F0F0F0;
width:100%;
height: 100vh;
`
const HomePage = styled.div`
width:100%;
height: 100px;
padding: 9px 8px;
box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
margin-top: 2px;
background: white;
display: flex;
justify-content:space-between;
align-items: center;
`
const Title = styled.h4`
font-Weight:300;
font-size:22px;
color: #000000;
margin-left: 5px;
`
const Compteur = styled.span`
font-Weight:300;
font-size:22px;
color: gray;
`
const AddHotel = styled.div`
border: 0.5px solid gray;
width:200px;
height: 30px;
border-radius: 7px;
padding: 1rem 1rem;
display: flex;
align-items:center;
gap: 5px;
`
const Contcard = styled.div`
background: #F0F0F0;
padding: 15px 20px;
width:80%;
height: 100%;
display: grid;
grid-template-columns: repeat(4, 0.5fr);
gap: 20px;
`

export default function ListeHotel() {
    
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/addHotel');
            setHotels(response.data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchHotels();
    }, []);


    return( 
        <Container>
            <ContSidebar><Sidebar /> </ContSidebar>
            <ContHotel> 
                <Header /> 
                <HomePage>
                    <Title>
                        Hotel <Compteur>8</Compteur>
                    </Title>
                    <AddHotel>
                    <Link href='/addHotel' className={styles.adhotel}>  <IoMdAdd />  Créer un nouveau hotel</Link>
                    </AddHotel>
                </HomePage>
                <Contcard>
                    {hotels.map((hotel) => (
                        <CardHotel
                            key={hotel._id}
                            imgUrl={hotel.imgUrl}
                            adresse={hotel.adresse}
                            titre={hotel.titre}
                            prix={hotel.prix}
                        /> 
                    ))}
                </Contcard>
            </ContHotel>
        </Container>
    )
} 