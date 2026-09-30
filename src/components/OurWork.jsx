import assets from "../assets/assets"
import Title from "./Title"
import { motion } from "motion/react"

const OurWork = () => {

    const workData = [
        {
            title: "Mobile App Marketing",
            description: "A creative marketing campaign designed to increase mobile app downloads and user engagement.",
            image: assets.work_mobile_app
        },
        {
            title: "Dashboard Management",
            description: "A modern dashboard that helps businesses manage their data, track performance, and make better decisions.",
            image: assets.work_dashboard_management
        },
        {
            title: "Fitness App",
            description: "A user-friendly fitness application designed to help users track workouts, progress, and daily activities.",
            image: assets.work_fitness_app
        }
    ]
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            transition={{ staggerChildren: .2 }}
            viewport={{ once: true }}
            id="ourWork" className="flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title
                title="Our latest work"
                desc="Explore some of our latest projects and see how we turn ideas into creative digital solutions."
            />
            <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {
                    workData.map((work, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer">
                            <img src={work.image} alt="" className=" w-full rounded-xl" />
                            <h3 className=" mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default OurWork
