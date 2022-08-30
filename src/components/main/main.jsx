import React from 'react';
import s from './main.module.scss'
import StudioSection from "../studioSection/studioSection";
import AboutSection from "../about/about";
import PortfolioSection from "../portfolio/portfolio";
import {TestimonialsSection} from "../testimonials/testiomonialsSection";
import {Footer} from "../footer/footer";

const Main = () => {
    return (
        <main>
            <section className={s.modern_studio_section}>
                <StudioSection/>
            </section>
            <section className={s.about_section}>
                <AboutSection/>
            </section>
            <section className={s.portfolio_section}>
                <PortfolioSection/>
            </section>
            <section className={s.testimonials_section}>
                <TestimonialsSection/>
            </section>
            <section className={s.footer_section}>
                <Footer/>
            </section>
        </main>
    );
};

export default Main;