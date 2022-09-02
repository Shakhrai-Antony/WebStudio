import React from "react";
import s from './pricingPage.module.scss'
import {NavLink} from "react-router-dom";

const PricingPage = () => {
    return (
        <main>
            <section className={s.pricing_page_section}>
                <div>
                    <h1>Our Prices</h1>
                    <p>Agency provides a full service range including technical skills, design, business understanding.</p>
                </div>
                <div className={s.pricing_section}>
                    <p className={s.pricing}>PRICING</p>
                    <h2 className={s.check_pricing}>Check Our Pricing Plan</h2>
                    <div className={s.pricing_blocks}>
                        <div className={s.consultation_block}>
                            <p>CONSULTATION</p>
                            <h3>Free</h3>
                            <p>Your digital efforts, instead of handling in-house.</p>
                            <ul>
                                <li>Brand Design</li>
                                <li>Market Analysis</li>
                                <li>Production</li>
                            </ul>
                            <NavLink to={'/contact'}>
                                <button>CONTACT US</button>
                            </NavLink>
                        </div>
                        <div className={s.design_block}>
                            <button>Popular</button>
                            <p>DESIGN</p>
                            <h3>$1500</h3>
                            <p>Provide your business variety of digital solutions to promote.</p>
                            <ul>
                                <li>Brand Design</li>
                                <li>Market Analysis</li>
                                <li>Production</li>
                            </ul>
                            <NavLink to={'/contact'}>
                                <button>CONTACT US</button>
                            </NavLink>
                        </div>
                        <div className={s.design_code_block}>
                            <p>DESIGN + CODE</p>
                            <h3>$2900</h3>
                            <p>Help you hit marketing goals and grow your business.</p>
                            <ul>
                                <li>Brand Design</li>
                                <li>Market Analysis</li>
                                <li>Production</li>
                            </ul>
                            <NavLink to={'/contact'}>
                                <button>CONTACT US</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default React.memo(PricingPage)