import { useState } from "react"
import { AiOutlineHome } from "react-icons/ai"
import { TbDeviceMobileVibration, TbTransferOut } from 'react-icons/tb'
import { FcSimCardChip, FcDisclaimer } from 'react-icons/fc'
import { GiShoebillStork } from 'react-icons/gi'
import { GrContact } from 'react-icons/gr'
import { RiLogoutCircleRLine } from 'react-icons/ri'

const Navs = () => {

    const [navs] = useState([
        {
            id: 1,
            icon: AiOutlineHome,
            link: 'Home'
        },
        {
            id: 2,
            icon: TbDeviceMobileVibration,
            link: 'Buy Airtime'
        },
        {
            id: 3,
            icon: TbTransferOut,
            link: 'Send Money'
        },
        {
            id: 4,
            icon: GiShoebillStork,
            link: 'Bills payment'
        },
        {
            id: 5,
            icon: FcSimCardChip,
            link: 'Free Credit Card'
        },
        {
            id: 6,
            icon: FcDisclaimer,
            link: 'Complaints'
        },
        {
            id: 7,
            icon: GrContact,
            link: 'Contact Us'
        },
        {
            id: 8,
            icon: RiLogoutCircleRLine,
            link: 'Log Out'
        },
    ])

    return (
        <>
            {navs.map((nav) => (
                <div className="side-link" key={nav.id}>
                    <i>{<nav.icon />}</i>
                    <p>{nav.link}</p>
                </div>
            ))}
        </>
    )
}

export default Navs