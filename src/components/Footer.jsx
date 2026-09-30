import assets from "../assets/assets"
import { motion } from "motion/react"

const Footer = ({ theme }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}


            className=" bg-slate-50 dark:bg-gray-900 pt-10 sm:p-10 mt-20 px-4 sm:px-10 lg:px-24 xl:px-40">
            {/* footer top */}
            <div className=" flex justify-between lg:items-center max-lg:flex-col gap-10">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6, delay: .2 }}

                    viewport={{ once: true }}
                    className=" space-y-5 text-sm text-gray-700 dark:text-gray-400">
                    <img src={theme == "dark" ? assets.logo_dark : assets.logo} className=" w-32 sm:w-44" />
                    <p className="max-w-md">
                        We help businesses turn ideas into powerful digital experiences
                        through creative design, technology, and innovative solutions.
                    </p>
                    <ul className="flex gap-8">
                        <li className=" hover:text-primary"><a href="#hero">Home</a></li>
                        <li className=" hover:text-primary"><a href="#services">Services</a></li>
                        <li className=" hover:text-primary"><a href="#ourWork">Our Work </a></li>
                        <li className=" hover:text-primary"><a href="#contactUs">Contact us</a></li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6, delay: .3 }}
                    viewport={{ once: true }}
                    className=" text-gray-600 dark:text-gray-400">
                    <h3 className=" font-semibold">Subscribe to our newsletter</h3>
                    <p className=" text-sm mt-2 mb-6">The latest news, articles and resources, sent to your inbox weekly.</p>

                    <div className="flex gap-2 text-sm">
                        <input type="email" name="email" placeholder="Enter your email" className="
                        w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"/>
                        <button className="bg-primary text-white rounded px-6 cursor-pointer">Subscribe</button>
                    </div>
                </motion.div>

            </div>

            <hr className=" border-gray-300 dark:border-gray-600 my-6" />

            {/* footer bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .6 }}
                viewport={{ once: true }}
                className=" pb-6 text-sm text-gray-600 flex
             justify-center sm:justify-between gap-4 flex-wrap">
                <p>Copyright 2026 &copy; agency.io All Right Reserved.</p>
                <div className=" flex items-center justify-between gap-4">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </motion.div>

        </motion.div>
    )
}

export default Footer
