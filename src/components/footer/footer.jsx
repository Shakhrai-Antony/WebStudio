import s from './footer.module.scss';
import social from '../../images/social.png'

export const Footer = () => {
    return (
        <footer className={s.footer_content}>
            <div className={s.banner_section}>
                <div className={s.banner_description}>
                    <h2>We're Help <br/>To Build Your <br/>Dream Project</h2>
                    <p>A digital agency is a business you hire to outsource your <br/>digital marketing efforts, instead of handling in-house</p>
                    <button>CONTACT US</button>
                </div>
                <div className={s.footer_icon}>
                </div>
            </div>
            <div className={s.social_section}>
                <img src={social} alt="social_icons"/>
            </div>
            <div className={s.copyrights_section}>
                <p>Copyright © 2022 Shakhrai. All Rights Reserved.</p>
            </div>
        </footer>
    )
}