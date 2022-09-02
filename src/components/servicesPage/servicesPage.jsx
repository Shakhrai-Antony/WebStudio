import React from 'react'
import s from './servicesPage.module.scss'
import jenny from "../../images/jenny.png";
import oval_features_block from "../../images/oval_features_block.png";
import shape_design from "../../images/shape_design.png";
import shape_development from "../../images/shape_development.png";
import shape_marketing from "../../images/shape_marketing.png";

const ServicesPage = () => {
    return (
        <main>
            <section className={s.services_page_section}>
                <div>
                    <h1>About Service</h1>
                    <p>Agency provides a full service range including technical skills, design, business understanding.</p>
                </div>
                <div className={s.service_section}>
                    <div className={s.service_description}>
                        <div className={s.service_images}>

                        </div>
                        <div className={s.about_service}>
                            <p className={s.about_service_p}>SERVICE</p>
                            <h1>Making Complex <br/> Digital Products</h1>
                            <p className={s.agency_provides_p}>Agency provides a full service range including <br/> technical skills, design, business</p>
                            <p className={s.agency_provides_p_mini}>Agency provides a full service range including  technical skills, design, business</p>
                            <div className={s.about_service_quote}>
                                <img src={jenny} alt="jenny"/>
                                <p>"Understanding ability to put themselves in the <br/> merchant shoe's. It's meant to partner."</p>
                            </div>
                            <p className={s.about_service_jenny}>Jenny Murtaugh</p>
                            <button>EXPLORE</button>
                        </div>
                    </div>
                    <div className={s.service_block}>
                        <p>SERVICE</p>
                        <h1>How Our Agency <br/> Can Help</h1>
                        <div className={s.service_block_present}>
                            <div>
                                <img src={oval_features_block} alt="oval"/>
                                <img src={shape_design} alt="shape_design"/>
                                <h4>Design</h4>
                                <p>Agency provides a full service range including technical skills, design.</p>
                            </div>
                            <div>
                                <img src={oval_features_block} alt="oval"/>
                                <img src={shape_development} alt="shape_development"/>
                                <h4>Development</h4>
                                <p>Full service range including technical skills, design, business.</p>
                            </div>
                            <div>
                                <img src={oval_features_block} alt="oval"/>
                                <img src={shape_marketing} alt="shape_marketing"/>
                                <h4>Marketing</h4>
                                <p>Technical skills, design, business, understanding, ability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServicesPage