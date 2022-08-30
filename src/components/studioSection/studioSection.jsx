import React from 'react';
import s from './studioSection.module.scss'
import {NavLink} from "react-router-dom";
import guy from '../../images/Guy.png'


const StudioSection = () => {
    return (
        <div className={s.studio_section}>
            <div className={s.modern_studio_description}>
                <p className={s.modern_studio}>
                    MODERN STUDIO
                </p>
                <div className={s.modern_studio_h1}>
                    <h1 className={s.h1_desktop}>
                        We're Help <br/>To Build Your <br/>Dream Project
                    </h1>
                    <h1 className={s.h1_mobile}>
                        We're Help <br/>To Build <br/> Your Dream <br/> Project
                    </h1>
                </div>
                <div className={s.modern_agency_provides}>
                    <p className={s.p_desktop}>
                        Agency provides a full service range including technical <br/> skills, design, business understanding.
                    </p>
                    <p className={s.p_mobile}>
                        Agency provides a full service range <br/> including technical skills, design, <br/> business understanding.
                    </p>
                </div>
                <div className={s.modern_studio_buttons}>
                    <NavLink to={'/info'}>
                        <button>
                            HOW WE WORK
                        </button>
                    </NavLink>
                    <NavLink to={'/contact'}>
                        <button>
                            CONTACT US
                        </button>
                    </NavLink>
                </div>
                <div className={s.quote}>
                    <img src={guy} alt="Guy"/>
                    <p>"Put themselves in the merchant's shoes"<br/>Meta inc.</p>
                </div>
            </div>
            <div className={s.studio_section_images}>

            </div>
        </div>
    );
};

export default StudioSection;