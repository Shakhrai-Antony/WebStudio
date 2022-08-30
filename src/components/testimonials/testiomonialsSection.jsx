import s from './testimonials.module.scss'
import stars from '../../images/stars.png'
import alan_marti from '../../images/alan_marti.png'
import richardo_kann from '../../images/richardo_kann.png'
import graham_griffiths from '../../images/graham_griffiths.png'
import maria_trofimova from '../../images/maria_trofimova.png'
import sofa_award from '../../images/sofa_award.png'
import keyboard_award from '../../images/keyboard_award.png'
import workmedia_award from '../../images/workmedia_award.png'
import sofa_award_logo from '../../images/sofa_award_logo.png'
import key_board_award_logo from '../../images/key_board_award_logo.png'
import work_media_award_logo from '../../images/work_media_award_logo.png'
import stories_blog from '../../images/stories_blog.png'
import design_blog from '../../images/design_blog.png'
import marketing_blog from '../../images/marketing_blog.png'
import oval_orange from '../../images/Oval_orange.png'
import phone_icon from '../../images/phone_icon.png'
import email_icon from '../../images/email_icon.png'
import address_icon from '../../images/address_icon.png'
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {GoogleMap} from "../googleMap/googleMap";

const feedbacks = [
    {
        id: 1,
        stars: stars,
        feedback: 'A digital agency is a business you hire to outsource your digital marketing efforts instead of handing' +
            'in house. They can provide your business with variety of digital solutions to promote your product or service online and help you.',
        person: alan_marti,
        name: 'Alan Marti',
        corp: 'Meta Inc.'
    },
    {
        id: 2,
        stars: stars,
        feedback: 'Provide your business with a variety of digital solutions to promote your product or service online.',
        person: richardo_kann,
        name: 'Richardo Kann',
        corp: 'Photogram'
    },
    {
        id: 3,
        stars: stars,
        feedback: 'Outsource your digital marketing efforts instead of handling in-house. They can provide your business with a variety.',
        person: graham_griffiths,
        name: 'Graham Griffiths',
        corp: 'Twitter'
    },
    {
        id: 4,
        stars: stars,
        feedback: 'Promote your product or service online and help you hit your marketing goals and grow your business.',
        person: maria_trofimova,
        name: 'Maria Trofimova',
        corp: 'Whochat'
    },

]
const questionsBlock = [
    {
        id: 1,
        title: 'A digital agency is a business',
        description: 'Digital marketing efforts, instead of handling in-house. ' +
            'They can provide your business with a variety of digital solutions\n' +
            'to promote your product or service online and help you hit your marketing goals and grow your business',
    },
    {
        id: 2,
        title: 'Hire to outsource your digital',
        description: 'Digital marketing efforts, instead of handling in-house. ' +
            'They can provide your business with a variety of digital solutions\n' +
            'to promote your product or service online and help you hit your marketing goals and grow your business',
    },
    {
        id: 3, title: 'Marketing efforts', description: 'Digital marketing efforts, instead of handling in-house. ' +
            'They can provide your business with a variety of digital solutions\n' +
            'to promote your product or service online and help you hit your marketing goals and grow your business',
    },
    {
        id: 4,
        title: 'Can provide your business',
        description: 'Digital marketing efforts, instead of handling in-house. ' +
            'They can provide your business with a variety of digital solutions\n' +
            'to promote your product or service online and help you hit your marketing goals and grow your business',
    },
]
const awards = [
    {
        id : 1, value: sofa_award, title: 'SOFA', date: '25 Oct, 2021', name: 'Awwwards', logo: sofa_award_logo
    },
    {
        id : 2, value: keyboard_award, title: 'KeyBoard', date: '19 Oct, 2021', name: 'CSS Design Awards', logo: key_board_award_logo
    },
    {
        id : 3, value: workmedia_award, title: 'Work Media', date: '7 Oct, 2021', name: 'The FWA', logo: work_media_award_logo
    },

]
const blogItems = [
    {
        id: 1, value: stories_blog, title: 'Stories', description: 'Agency is a business you hire to outsource', date: '5 Nov, 2021'
    },
    {
        id: 2, value: design_blog, title: 'Design', description: 'Outsource your digital marketing efforts', date: '29 Oct, 2021'
    },
    {
        id: 3, value: marketing_blog, title: 'Marketing', description: 'Your business with a variety of digital', date: '21 Oct, 2021'
    }
]
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

export const TestimonialsSection = () => {

    const [accordionStatus, setAccordionStatus] = useState(1)
    const handleClick = (id) => (accordionStatus === id ? setAccordionStatus(null) : setAccordionStatus(id));


    return (
        <div className={s.testimonials_section}>
            <p className={s.tesmonials_enter}>TESTIMONIALS</p>
            <h2 className={s.clients_saying}>What Our Clients Saying</h2>
            <div className={s.feedback_section}>
                {feedbacks.map((item) => {
                    return (
                        <div className={s.feedback_block} key={item.id}>
                            <img className={s.stars} src={item.stars} alt="stars"/>
                            <p className={s.feedback}>{item.feedback}</p>
                            <div className={s.person_description}>
                                <img className={s.person} src={item.person} alt="person"/>
                                <div className={s.person_name_corp}>
                                    <p>{item.name}</p>
                                    <p>{item.corp}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
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
            <div className={s.faq_section}>
                <div className={s.faq_description}>
                    <p>FAQ</p>
                    <h3>Frequently Asked Questions</h3>
                    <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of
                        handling in-house</p>
                    <NavLink to={'/contact'}>
                        <p>Contact Us</p>
                    </NavLink>
                </div>
                <div className={s.faq_blocks}>
                    {questionsBlock.map(({id, title, description}) => {
                        return (
                            <div key={id} className={`${s.question_item} ${accordionStatus === id && s.active}`}>
                                <div onClick={ () => handleClick(id)} className={s.question}>
                                    <h4 className={s.question_title}>{title}</h4>
                                    <span className={s.question_button}>▼</span>
                                </div>
                                <p className={s.description}>{description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={s.awards_section}>
                <div>
                    <h2>Our Awards</h2>
                </div>
                <div className={s.awards_content}>
                    {awards.map(({id, value, title, date, name, logo }) => {
                        return (
                            <div className={s.awards_items} key={id}>
                                <div>
                                    <img src={value} alt={title}/>
                                    <p>{title}</p>
                                </div>
                                <div>
                                    <p>{date}</p>
                                </div>
                                <div>
                                    <p>{name}</p>
                                    <img src={logo} alt={name}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={s.blog_section}>
                <div className={s.blog_description}>
                    <p>OUR BLOG</p>
                    <h2>Latest Blog Articles</h2>
                </div>
                <div className={s.blog_content}>
                    {blogItems.map(({id, value, title, description, date}) => {
                        return (
                            <div key={id} className={s.blog_items}>
                                <img src={value} alt={title}/>
                                <p>{title}</p>
                                <h4>{description}</h4>
                                <p>{date}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={s.newsletter_section}>
                <h3>Newsletter</h3>
                <div>
                    <input type="text" placeholder='Your email'/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className={s.map_section}>
                <GoogleMap/>
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
        </div>
    )
}