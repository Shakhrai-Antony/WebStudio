import React from 'react'
import s from './blogPage.module.scss'
import blog_stories from '../../images/blog_strories.png'
import blog_design from '../../images/blog_design.png'
import stories_blog from "../../images/stories_blog.png";
import design_blog from "../../images/design_blog.png";
import marketing_blog from "../../images/marketing_blog.png";
import our_blogs_design from "../../images/our_blogs_design.png";
import our_blogs_branding from "../../images/our_blogs_branding.png";
import our_blogs_stories from "../../images/our_blogs_stories.png";

const blogs = [
    {
        id: 1, value: blog_stories, title: 'Stories', description: 'Performance marketing agencies specialize', date: '7 dec, 2021'
    },
    {
        id: 2, value: blog_design, title: 'Design', description: 'Digital marketing channels', date: '23 nov, 2021'
    },
]

const ourBlogs = [
    {
        id: 1, value: stories_blog, title: 'Stories', description: 'Agency is a business you hire to outsource', date: '5 Nov, 2021'
    },
    {
        id: 2, value: design_blog, title: 'Design', description: 'Outsource your digital marketing efforts', date: '29 Oct, 2021'
    },
    {
        id: 3, value: marketing_blog, title: 'Marketing', description: 'Your business with a variety of digital', date: '21 Oct, 2021'
    },
    {
        id: 4, value: our_blogs_design, title: 'Design', description: 'Analytics to track and report on results', date: '17 Nov, 2021'
    },
    {
        id: 5, value: our_blogs_branding, title: 'Branding', description: 'The most well known performance', date: '12 Oct, 2021'
    },
    {
        id: 6, value: our_blogs_stories, title: 'Stories', description: 'Marketing channels native advertising', date: '9 Oct, 2021'
    }

]

const BlogPage = () => {
    return (
        <main>
            <section className={s.blog_page_section}>
                <div>
                    <h1>Blog Articles</h1>
                    <p>Agency provides a full service range including technical skills, design, business understanding.</p>
                </div>
                <div className={s.blog_content}>
                    {blogs.map(({id, value, title, description, date}) => {
                        return (
                            <div key={id} className={s.blog_items}>
                                <img src={value} alt={title}/>
                                <p>{title}</p>
                                <h3>{description}</h3>
                                <p>{date}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={s.our_blog_content}>
                    {ourBlogs.map(({id, value, title, description, date}) => {
                        return (
                            <div key={id} className={s.our_blog_items}>
                                <img src={value} alt={title}/>
                                <p>{title}</p>
                                <h3>{description}</h3>
                                <p>{date}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default React.memo(BlogPage)