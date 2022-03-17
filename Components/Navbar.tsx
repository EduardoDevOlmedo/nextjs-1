
import { ActiveLink } from "./ActiveLink"
import styles from "./NavBar.module.css"

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    }
];

export default function Navbar() {

    return(
        <nav className={styles['menu-container']}>
                {
                    menuItems.map(element => {
                        return <ActiveLink href={element.href} text={element.text} />
                    })
                }
        </nav>
    )
}