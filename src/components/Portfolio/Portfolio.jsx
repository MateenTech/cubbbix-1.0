import { useContext, useEffect, useState } from "react";
import { ContextAPI } from "../../apis/ContextApi";
import { Fade } from 'react-awesome-reveal'
import { Carousel } from "react-responsive-carousel";


export const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const { portfolio } = useContext(ContextAPI);

    useEffect(() => {
        setProjects(portfolio);
        console.log(projects)
    }, [projects, portfolio])

    return (
        <section id='portfolio' className='w-full min-h-screen bg-slate-200'>
            <div className=" w-full min-h-screen container mx-auto px-10 py-20">
                <Fade direction="left">
                    <h1 className='text-5xl font-extrabold text-slate-800 text-center mb-14'>Projects</h1>
                </Fade>
                <div>
                    <Fade direction="right">
                        <ul className="grid place-content-center gap-11 md:grid-cols-auto-fit">
                            {
                                projects.map((project, indx) => {
                                    const { name, ratings, users, descp, images } = project;
                                    return (
                                        <li key={indx} className="max-w-sm shadow-lg bg-slate-50 rounded-xl overflow-hidden ">
                                            <Carousel showArrows={true} showThumbs={false}>

                                                {
                                                    images.map((img, indx) => {
                                                        console.log(img)
                                                        return (
                                                            <div  className=" w-full h-80 grid  place-content-start shadow-sm">
                                                                <img src={img} alt={`${name} images`} key={indx} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </Carousel>
                                            <div className=" p-7">
                                                <h3 className="text-slate-800 text-2xl font-semibold mb-4">{name}</h3>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <p className="text-sm text-slate-500">Ratings: {ratings}</p>
                                                    <p className="text-sm
                                                    text-slate-500">Users: {users}</p>
                                                </div>
                                                <p className="text-md text-slate-700">{descp}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Fade>
                </div>
            </div>
        </section>
    )
};