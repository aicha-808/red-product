import styled from "styled-components"
import CardDashboard from "./cardDashboard/CardDashboard"
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar"
import { FaEnvelopeOpen } from "react-icons/fa6";
import { HiUsers  } from "react-icons/hi";
import { TbLetterP } from "react-icons/tb";


export default function Dashboard() {
    const  CardData = [
        { nombre: "125", titre: 'Formulaires', desc:"Je ne sais pas quoi mettre", background:'#A88ADD', icon: FaEnvelopeOpen },
        {nombre: "40", titre: 'Messages', desc:"Je ne sais pas quoi mettre",  background:'#0CC2AA',icon: TbLetterP },
        {nombre: "600", titre: 'Utilisateurs ', desc:"Je ne sais pas quoi mettre", background:'#FCC100', icon: HiUsers  },
        {nombre: "25", titre: 'E-mails', desc:"Je ne sais pas quoi mettre", background:'#F90000', icon: FaEnvelopeOpen },
        {nombre: "40", titre: 'Hôtels ', desc:"Je ne sais pas quoi mettre", background:'#9C27B0' ,icon: TbLetterP},
        {nombre: "02", titre: 'Entités ', desc:"Je ne sais pas quoi mettre" , background:'#1565C0', icon: HiUsers  },
    ]
 
    const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    gap: 0;
    `
    const ContSidebar = styled.div`
    width:19%;
    height: 150vh;
    padding: 0.5rem 0rem;
    background: #55595C;
    `
    const Contdasboard = styled.div`
    background: #F0F0F0;
    width:100%;
    height: 100vh;
    `
    const ContCard = styled.div`
      padding: 18px 10px;
      width:100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(3, 0.3fr);
      gap: 5px;
      `
    const HomePage = styled.div`
     width:100%;
     height: 100px;
     padding: 9px 8px;
     box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
     margin-top: 2px;
     background: white;
    `
    const Title = styled.h4`
    font-Weight:300;
    font-size:22px;
    color: #000000;
    line-height: 35px;
    `
    const Description = styled.p`
    font-Weight:400;
    font-size: 16.8px;
    color: #000000;
    line-height:25.2px;
    `

    return(
        <Container>
            <ContSidebar><Sidebar /> </ContSidebar>
            <Contdasboard> 
                <Header /> 
                <HomePage>
                    <Title>
                        Bienvenue sur RED Product  <br/>
                        <Description>Lorem ipsum dolor sit amet consectetur</Description>
                    </Title>
                </HomePage>
                <ContCard>
                    {CardData.map((card, index) => (
                <CardDashboard
                    key={index}
                    {...card}
                /> 
                    ))}
                </ContCard>
            </Contdasboard>
        </Container>
    )
}