import s from './portfolio.module.scss'
import sofa_tag from '../../images/sofa_tag.png'
import sofa_description from '../../images/sofa_description.png'
import keyboard_tag from '../../images/key_tag.png'
import keyboard_description from '../../images/keyboard_description.png'
import work_tag from '../../images/work_media_tag.png'
import work_description from '../../images/work_media_description.png'
import done_tag from '../../images/done_tag.png'
import done_description from '../../images/done_description.png'
import {useFormik} from "formik";
import {useEffect, useState} from "react";
import {useWindowSize} from "react-use";
import gift_icon from '../../images/gift_icon.png'
import block_portfolio_banner from '../../images/block_portfolio_banner.png'
import lady_portfolio_banner from '../../images/lady_portfolio_banner.png'
import cloud_portfolio_banner from '../../images/cloud_portfolio_banner.png'
import clock_shape from './../../images/clock_shape.png'
import {SimpleSliderSection} from "../swiper/swiper";
import founder from '../../images/founder.png'
import quote from '../../images/quote.png'
import {NavLink} from "react-router-dom";

const PortfolioSection = () => {

    const {values, handleChange} = useFormik({
        initialValues: {
            works: 'Show all'
        }
    })
    let {width} = useWindowSize()

    useEffect(() => {
        if (width > 610) {
            values.works = 'Show all'
        }
    }, [width])

    const [works, setWorks] = useState('Show all')

    useEffect(() => {
        setWorks(works)
    }, [works])

    return (
        <div className={s.portfolioSection}>
            <div className={s.portfolio_p}>
                <p>PORTFOLIO</p>
            </div>
            <div className={s.portfolio_h2}>
                <h2>Latest Work</h2>
            </div>
            <div className={s.latest_works}>
                <p onClick={() => setWorks('Show all')}>
                    Show All
                    <span>14</span>
                </p>
                <p onClick={() => setWorks('Design')}>
                    Design
                    <span>6</span>
                </p>
                <p onClick={() => setWorks('Branding')}>
                    Branding
                    <span>4</span>
                </p>
                <p onClick={() => setWorks('Illustration')}>
                    Illustration
                    <span>3</span>
                </p>
                <p onClick={() => setWorks('Motion')}>
                    Motion
                    <span>1</span>
                </p>
            </div>
            <div className={s.select_section}>
                <select name="works" value={values.works} onChange={handleChange}>
                    <option value="Show all">Show all</option>
                    <option value='Design'>Design</option>
                    <option value='Branding'>Branding</option>
                    <option value='Illustration'>Illustration</option>
                    <option value='Motion'>Motion</option>
                </select>
            </div>
            <div className={s.portfolio_images}>
                {
                    values.works === 'Design' || works === 'Design' ?  (
                        <div className={s.sofa}>
                            <img src={sofa_tag} alt="sofa_tag"/>
                            <img src={sofa_description} alt='sofa_description'/>
                        </div>
                    ) : values.works === 'Branding' || works === 'Branding' ? (
                        <div className={s.keyboard}>
                            <img src={keyboard_tag} alt="keyboard_tag"/>
                            <img src={keyboard_description} alt="keyboard_description"/>
                        </div>
                    ) : values.works === 'Illustration' || works === 'Illustration' ? (
                        <div className={s.work_media}>
                            <img src={work_tag} alt="work_tag"/>
                            <img src={work_description} alt="work_description"/>
                        </div>
                    ) : values.works === 'Motion' || works === 'Motion' ? (
                        <div className={s.done}>
                            <img src={done_tag} alt="done_tag"/>
                            <img src={done_description} alt="done_description"/>
                        </div>
                    ) : (
                        <>
                            <div className={s.sofa}>
                                <img src={sofa_tag} alt="sofa_tag"/>
                                <img src={sofa_description} alt='sofa_description'/>
                            </div>
                            <div className={s.keyboard}>
                                <img src={keyboard_tag} alt="keyboard_tag"/>
                                <img src={keyboard_description} alt="keyboard_description"/>
                            </div>
                            <div className={s.work_media}>
                                <img src={work_tag} alt="work_tag"/>
                                <img src={work_description} alt="work_description"/>
                            </div>
                            <div className={s.done}>
                                <img src={done_tag} alt="done_tag"/>
                                <img src={done_description} alt="done_description"/>
                            </div>
                        </>
                    )
                }
            </div>
            <button className={s.explore_more_button}>EXPLORE MORE</button>
            <div className={s.portfolio_banner}>
                <img className={s.gift_icon} src={gift_icon} alt="gift_icon"/>
                <p>GET STARTED</p>
                <h4>We Help Companies <br/> Move Faster</h4>
                <NavLink to={'/contact'}>
                    <button>CONTACT US</button>
                </NavLink>
                <img className={s.block_portfolio_banner} src={block_portfolio_banner} alt="block"/>
                <img className={s.cloud_portfolio_banner} src={cloud_portfolio_banner} alt="cloud"/>
                <img className={s.lady_portfolio_banner} src={lady_portfolio_banner} alt="lady"/>
            </div>
            <div className={s.events_section}>
                <p className={s.events}>EVENTS</p>
                <div className={s.h2_events}>
                    <h2>Explore Future Conferences</h2>
                </div>
                <div className={s.events_block}>
                    <div>
                        <h4>
                            3
                            <span>November <br/> 2021</span>
                        </h4>
                        <p className={s.events_time}>
                            <img src={clock_shape} alt="clock"/>
                            9:00 am - 3:00 pm
                        </p>
                        <span className={s.events_line}></span>
                        <p className={s.events_name}>Design Weeks</p>
                        <p className={s.events_description}>Digital agency is a business you hire to outsource your digital.</p>
                        <p className={s.explore}>Explore now</p>
                    </div>
                    <div>
                        <h4>
                            15
                            <span>November <br/> 2021</span>
                        </h4>
                        <p className={s.events_time}>
                            <img src={clock_shape} alt="clock"/>
                            1:00 pm - 8:00 pm
                        </p>
                        <span className={s.events_line}></span>
                        <p className={s.events_name}>Interior Design</p>
                        <p className={s.events_description}>Marketing efforts, instead of handing in-house.</p>
                        <p className={s.explore}>Explore now</p>
                    </div>
                    <div>
                        <h4>
                            2
                            <span>December <br/> 2021</span>
                        </h4>
                        <p className={s.events_time}>
                            <img src={clock_shape} alt="clock"/>
                            10:00 am - 2:00 pm
                        </p>
                        <span className={s.events_line}></span>
                        <p className={s.events_name}>The F design events</p>
                        <p className={s.events_description}>Provide your business with a variety of digital solutions to promote.</p>
                        <p className={s.explore}>Explore now</p>
                    </div>
                </div>
                <button className={s.explore_more_button}>EXPLORE MORE</button>
            </div>
            <div className={s.team_section}>
                <p className={s.our_team_p}>OUR TEAM</p>
                <h1 className={s.our_team_h1}>Team of Designers and Developers</h1>
                <SimpleSliderSection/>
            </div>
            <div className={s.founder_section}>
                <div className={s.founder_image}/>
                <div className={s.founder_description}>
                    <img className={s.quote} src={quote} alt="quote"/>
                    <p className={s.founder_words}>FOUNDER WORDS</p>
                    <h3 className={s.founder_h3}>Digital agency is a business you hire to outsource your digital marketing efforts</h3>
                    <p className={s.ren_delan}>Ren Delan</p>
                    <p className={s.founder_p}>Founder</p>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection