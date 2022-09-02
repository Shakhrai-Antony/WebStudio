import React from 'react'
import s from './contactPage.module.scss'
import oval_orange from "../../images/Oval_orange.png";
import phone_icon from "../../images/phone_icon.png";
import email_icon from "../../images/email_icon.png";
import address_icon from "../../images/address_icon.png";
import GoogleMap from "../googleMap/googleMap";

const contanctsBlog = [
    {
        id: 1, background: oval_orange, icon: phone_icon, title: 'PHONE', description: '+1 (234) 567-89-00'
    },
    {
        id: 2, background: oval_orange, icon: email_icon, title: 'EMAIL', description: 'info@agency.com'
    },
    {
        id: 3, background: oval_orange, icon: address_icon, title: 'ADDRESS', description: '2247 Lunetta Street, TX 76301'
    },
]

const ContactPage = () => {

    return (
        <main>
            <section className={s.contact_page_section}>
                <div>
                    <h1>Our Contacts</h1>
                    <p>Agency provides a full service range including technical skills, design, business understanding.</p>
                </div>
                <div className={s.contacts_section}>
                    {contanctsBlog.map(({id, background, icon ,title, description}) => {
                        return (
                            <div key={id} className={s.contacts_item}>
                                <div>
                                    <img className={s.background} src={background} alt="oval"/>
                                    <img className={s.icon} src={icon} alt="icon"/>
                                    <span>{title}</span>
                                </div>
                                <p>{description}</p>
                            </div>
                        )
                    })}
                </div>
                <GoogleMap/>
            </section>
        </main>
    )
}


export default React.memo(ContactPage)