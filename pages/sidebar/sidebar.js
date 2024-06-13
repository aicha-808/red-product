import React from 'react';
import Link from "next/link"
import styled from 'styled-components';
import styles from "@/styles/style.module.css";
import { MdDashboard } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import Image from "next/image";
import profile from "@/public/profile.png"



export default function Sidebar() {
    
    const BrandName = styled.h4`
    font-weight: 700;
    font-size: 25px;
    margin-left: 2px;
    line-height: 21.33px;
    margin-left:15px;
    margin-right:15px;
    color: #FFFFFFDE;
    `
    const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-left:15px;
    margin-right:15px;
    color: #FFFFFFDE;
    `
    const ContDashboar = styled.div`
    width: 100%;
    height:auto;
    background: #FFFFFF;
    padding:8px 5px 8px 5px;
    `
    const ContListeHotel = styled.div`
    margin-top:8px;
    margin-left:15px;
    margin-right:15px;
    `
    const ContProfile = styled.div`
    width: 180px;
    height: 60px;
    margin-top: 230px;
    border-top: 1px solid gray;
    display: flex;
    padding:8px;
   
    align-items:center; 
    gap: 10px;
    `
    const ProfileImage = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: white;
    `
    const ContProfileName = styled.div`
    
    `
    const ProfileName = styled.h5`
     font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        color: #FFFFFFDE;
    `
    const ProfilStatusCercle = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    padding: 2.32px 0px  1px 0px;
    background: green;
    margin-right: 4px;
    `
    const ProfilStatus = styled.h5`
    font-size: 12px;
    font-weight: 400;
    line-height: 20.2px;
    color: #FFFFFFDE;
    `

    return(
        <>
            <BrandName>RED PRODUCT</BrandName>
            <Text>Principal</Text>
            <ContDashboar>
                <MdDashboard  size={17} />
                <Link href='/dashboard' className={styles.linkdashboard}>Dashboard</Link>
            </ContDashboar>
            <ContListeHotel>
                <FaHotel color="white"  size={17}  />
                 <Link href='/listeHotels' className={styles.linkhotel}>Liste des hôtels</Link>
            </ContListeHotel>
            <ContProfile>
                <ProfileImage>
                    <Image src={profile} alt="Profil" width={35} height={35} className={styles.profile}/>
                </ProfileImage>
                <ContProfileName>
                    <ProfileName>Mouhamet Badiane</ProfileName>
                    <ProfilStatus><ProfilStatusCercle></ProfilStatusCercle>en ligne</ProfilStatus>
                </ContProfileName>
            </ContProfile>
        </>
    )
}