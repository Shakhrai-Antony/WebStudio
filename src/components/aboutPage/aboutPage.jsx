import React from 'react'
import s from './aboutpage.module.scss'
import digitalside from "../../images/digitalside.png";
import vortex from "../../images/vortex.png";
import travel from "../../images/travel.png";
import fuzion from "../../images/fuzion.png";
import mediafury from "../../images/mediafury.png";
import {NavLink} from "react-router-dom";
import check from "../../images/check.png";
import oval_features_block from "../../images/oval_features_block.png";
import combined_shape_features_block from "../../images/combined_shape_features_block.png";

const partners = [
    {partner: <img src={digitalside} alt='digitalside'/>},
    {partner: <img src={vortex} alt='vortex'/>},
    {partner: <img src={travel} alt='travel'/>},
    {partner: <img src={fuzion} alt='fuzion'/>},
    {partner: <img src={mediafury} alt='mediafury'/>},
]

const AboutPage = () => {
    return (
        <main>
            <section className={s.about_us_section}>
                <div>
                    <h1>About Us</h1>
                    <p>Agency provides a full service range including technical skills, design, business understanding.</p>
                </div>
                <div className={s.about_section}>
                    <div className={s.partners_section}>
                        {partners.map((item, index) => {
                            return (
                                <div key={index} className={s.partner}>
                                    {item.partner}
                                </div>
                            )
                        })}
                        <div className={s.partners_line}></div>
                    </div>
                    <div className={s.about}>
                        <div className={s.about_design_images}></div>
                        <div className={s.about_description}>
                            <p className={s.p_about}>
                                ABOUT
                            </p>
                            <h1 className={s.h1_about}>
                                An Expirience <br/> Design Agency
                            </h1>
                            <p className={s.p_service}>
                                Provides a full service range
                            </p>
                            <p className={s.p_ability}>
                                Ability to put themselves in the merchant shoes. It is <br/> meant to partner on the long run, and work as an extension <br/> of the merchant's team.
                            </p>
                            <p className={s.p_ability_mob}>
                                Ability to put themselves in the <br/> merchant shoes. It is meant to partner <br/> on the long run, and work as an extension <br/> of the merchant's team.
                            </p>
                            <NavLink to='/about'>
                                <button>
                                    ABOUT US
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.about_studio_numbers}>
                        <div>
                            <h1>42%</h1>
                            <p>Years of expirience</p>
                        </div>
                        <div>
                            <h1>73+</h1>
                            <p>Agency members</p>
                        </div>
                        <div>
                            <h1>5.000</h1>
                            <p>Projects complete</p>
                        </div>
                    </div>
                    <div className={s.how_we_work_section}>
                        <div className={s.how_we_work_description}>
                            <p className={s.how_we_work_p}>
                                HOW WE WORK
                            </p>
                            <h1>
                                Making Your Projects <br/> Look Awesome
                            </h1>
                            <p className={s.how_we_work_skills}>
                                Technical skills, design, business understanding, ability to <br/> put themselves in the merchant's shoes.
                            </p>
                            <p className={s.how_we_work_skills_mini}>
                                Technical skills, design, business <br/> understanding, ability to put themselves <br/> in the merchant's shoes.
                            </p>
                        </div>
                        <div className={s.how_we_work_numbers}>
                            <div>
                                <h1>
                                    1
                                </h1>
                                <p>
                                    Full service range including
                                </p>
                            </div>
                            <div>
                                <h1>
                                    2
                                </h1>
                                <p>
                                    Technical skills, design, business
                                </p>
                            </div>
                            <div>
                                <h1>
                                    3
                                </h1>
                                <p>
                                    Themselves in the merchant's
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={s.line}></div>
                    <div className={s.video_reel_section}>
                        <div className={s.video_reel}>

                        </div>
                        <div className={s.video_reel_description}>
                            <p>
                                VIDEO REEL
                            </p>
                            <h1>
                                Unlock The Greatest Value Possible
                            </h1>
                            <p className={s.video_reel_p}>
                                Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.
                            </p>
                        </div>
                    </div>
                    <div className={s.features_section}>
                        <div className={s.features_description}>
                            <p className={s.features_p}>
                                FEATURES
                            </p>
                            <h1>
                                Give Your Site <br/> A New Look
                            </h1>
                            <p className={s.features_service_p}>
                                Service range including technical skills, design, <br/> business understanding.
                            </p>
                            <p className={s.features_service_p_mini}>
                                Service range including technical <br/> skills, design, business <br/> understanding.
                            </p>
                            <ul className={s.features_ul}>
                                <li>
                                    <img src={check} alt="check"/>
                                    <p>Range including technical skills</p>
                                </li>
                                <li>
                                    <img src={check} alt="check"/>
                                    <p>Business understanding</p>
                                </li>
                                <li>
                                    <img src={check} alt="check"/>
                                    <p>Partner on the long run</p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.features_images}>

                        </div>
                    </div>
                    <div className={s.features_block}>
                        <div className={s.features_block_description}>
                            <p className={s.features_block_p}>FEATURES</p>
                            <p className={s.features_block_p_long_run}>Long run, and work as an extension of the merchant's team</p>
                        </div>
                        <div className={s.features_block_presentation}>
                            <div className={s.professional_block}>
                                <img className={s.oval_features} src={oval_features_block} alt="oval"/>
                                <img className={s.shape_features} src={combined_shape_features_block} alt="shape"/>
                                <h4>Professional</h4>
                                <p>Full service range including technical skills, desing.</p>
                            </div>
                            <div className={s.accessibility_block}>
                                <h4>Accessibility</h4>
                                <p>Business understanding, ability to put themselves</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default React.memo(AboutPage)