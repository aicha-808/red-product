import styled from "styled-components";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FaSignOutAlt,FaRegBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import profile from "../../public/profile.png"


export default function Header() {

    const { data } = useSession();

    // style-components
    const Navbar = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center; 
        height: 40px;
        width:100%;
        padding: 9px 8px;
        background: white;
    `
    const WrapperLeft = styled.div `
       display: flex;
        gap: 4px;
        align-items: center;
    `
    const ContIputSearch = styled.div `
    display: flex;
    align-items: center;
    justify-content:space-around;
    background-color: white;
    padding: 4px 3px;
    width: 180px;
    height: 20px;
    border-radius: 666px;
    border: 1.33px solid ;  

    ` 
    const InputSearch = styled.div `
        width: 100%;
        border: none;
        outline: none;
        color: #0000;
    `
    const ContCloche = styled.div`
    width: 28px;
    height: auto;
    position: relative;
    padding: 4px;
    `
    const Notification = styled.span`
    width: 6px;
    height: 9px;
    background-color: orange;
    padding: 2px;
    text-align: center;
    color:#FFFF;
    border-radius: 3px;
    font-size:10px;
    position: absolute;
    top:0;
    `
    const Profil = styled.div`
    width: 15px;
    height:15px;
    border-radius: 100%;
    `
   

    return(
        <Navbar>
            <Link href='/dashboard' className={styles.dashboardH}>Dashboard</Link>
            <WrapperLeft> 
                <ContIputSearch>  
                    <IoSearchOutline size={20}/>
                    <InputSearch type="search"  placeholder= "Recherche" ></InputSearch>
                </ContIputSearch>
                <ContCloche>
                    <FaRegBell size={15}/>
                    <Notification>3</Notification>
                </ContCloche>
                <Profil>
                <Image src={profile} alt="Profil" width={15} height={15}  className={styles.profile}/>
                </Profil>
                { data?.user ? (
                    <FaSignOutAlt size={15} onClick={signOut} />

                ):
                <Link className={styles.dashboardH} href="/inscription">I</Link>
                }
            </WrapperLeft>
        </Navbar>  
    )
}