import assets from "../assets/assets"
import ServiceCard from "./ServiceCard"
import Title from "./Title"
import { motion } from "motion/react"

const Services = () => {
    const servicesData = [
        {
            title: "Advertising",
            description: "Create engaging advertising campaigns that help your business reach more customers.",
            icon: assets.ads_icon
        },
        {
            title: "Marketing",
            description: "Build a strong and memorable brand identity that stands out from the competition.",
            icon: assets.marketing_icon
        },
        {
            title: "Content Creation",
            description: "Create high-quality content that connects with your audience and grows your brand.",
            icon: assets.content_icon
        },
        {
            title: "Social Media",
            description: "Grow your online presence with effective social media strategies and campaigns.",
            icon: assets.social_icon
        }
    ]
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: .2 }}
            viewport={{ once: true }}
            


            id="services" className=" relative flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">

            <img src={assets.bgImage2} alt="" className=" absolute -top-110 -left-70 -z-1 dar:hidden" />


            <Title
                title={'How can we help?'}
                desc={'Have a project in mind? Tell us what you need, and we’ll help you find the right solution.'}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </motion.div>
    )
}

export default Services
