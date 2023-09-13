import { useContext, useEffect, useState } from "react";
import { ContextAPI } from "../../apis/ContextApi";
import { Fade, Slide } from 'react-awesome-reveal'

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
                                            {
                                                images.map((img) => {
                                                    return (
                                                        <div className="max-h-80 overflow-hidden flex flex-row items-center">
                                                <img src={img} alt={`${name} images`} style={{ width: "100%", height: "100%" }} />
                                            </div>
                                                    )
                                                })
                                            }
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