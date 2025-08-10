import Link from "next/link";
import logo from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import Navlink from "./nav-link";

export default function MainHeader(){
    return(
     <>
     <MainHeaderBackground/>
           <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logo} alt="a plate with food" priority/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Navlink  href={"/meals"}>Browse Meal</Navlink>
                    </li>
                      <li>
                        <Navlink  href={"/community"}>Foodies Community</Navlink>
                    </li>
                </ul>
            </nav>
        </header>
     </>
    )
}