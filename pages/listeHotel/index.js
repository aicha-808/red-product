import Link from "next/link";
import styled from "styled-components";
import styles from "../../../styles/Home.module.css"
import { IoMdAdd } from "react-icons/io";
import hotel1 from "../../../public/hotel1.svg";
import hotel2 from "../../../public/hotel2.svg";
import hotel3 from "../../../public/hotel3.svg";
import hotel4 from "../../../public/hotel4.svg";
import hotel5 from "../../../public/hotel5.svg";
import hotel6 from "../../../public/hotel6.svg";
import hotel7 from "../../../public/hotel7.svg";
import hotel8 from "../../../public/hotel8.svg";
import CardHotel from "../cardhotel";
import Sidebar from "..";
import Header from "@/pages/header";

export default function ListeHotel() {
    const  CardDataHotel = [
        { adresse: "Boulevard Martin Luther King Dakar, 11500", titre: "Hôtel Terrou-Bi", prix:"25.000 XOF par nuit", imgUrl:hotel1},
        { adresse: "Rte des Almadies, Dakar", titre: "King Fahd Palace", prix:"20.000 XOF par nuit", imgUrl:hotel2},
        { adresse: "Boulevard Martin Luther King Dakar, 11500", titre: "Hôtel Terrou-Bi", prix:"25.000 XOF par nuit", imgUrl:hotel3},
        { adresse: "Rte de la Corniche O, Dakar 16868", titre: "22.000 XOF par nuit", prix:"22.000 XOF par nuit", imgUrl:hotel4},
        { adresse: "Place de l'Independance, 10 Rue PL 29, Dakar", titre: "Pullman Dakar Teranga", prix:"30.000 XOF par nuit", imgUrl:hotel5},
        { adresse: "Lac Rose, Dakar", titre: "Hôtel Lac Rose", prix:"25.000 XOF par nuit", imgUrl:hotel6},
        { adresse: "Mbour, Sénégal", titre: "Hôtel Saly", prix:"20.000 XOF par nuit", imgUrl:hotel7},
        { adresse: "BP64, Saly 23000", titre: "Palm Beach Resort & Spa", prix:"22.000 XOF par nuit", imgUrl:hotel8},
    ]

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
    width:180px;
    height: 30px;
    border-radius: 7px;
    padding: 6px;
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
                    <IoMdAdd />
                    <Link href='/addhotel' className={styles.adhotel}>Créer un nouveau hotel</Link>
                    </AddHotel>
                </HomePage>
                <Contcard>
                    {CardDataHotel.map((card, index) => (
                        <CardHotel
                            key={index}
                            {...card}
                        /> 
                    ))}
                </Contcard>
            </ContHotel>
        </Container>
    )
} 