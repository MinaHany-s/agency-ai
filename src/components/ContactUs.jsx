import toast from "react-hot-toast";
import assets from "../assets/assets"
import Title from "./Title"
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { motion } from "motion/react"

const ContactUs = () => {

    const [loading, setLoading] = useState(false)

    const onSubmit = async (event) => {
        setLoading(true)
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "99a2bd71-1f5e-4d8d-8151-ad7aebcc25c8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            toast.success('Thank you for your submission!');

        } else {
            toast.error('This is an error try again later!');
        }
        setLoading(false);


    };

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            transition={{ staggerChildren: .2 }}
            viewport={{ once: true }}

            id="contactUs" className=" flex flex-col gap-7 items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">

            <Title
                title="Reach out to us"
                desc="Have a project in mind? Get in touch with us and let's create something great together."
            />
            <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .4 }}
                viewport={{ once: true }}

                className=" grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full" onSubmit={onSubmit}>

                <div>
                    <p className=" mb-2 text-sm font-medium">Your name</p>
                    <div className="flex pl-3  rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.person_icon} alt="" />
                        <input type="text" name="name" placeholder="Enter your name" className="w-full p-3 text-sm outline-none" required />
                    </div>
                </div>
                <div>

                    <p className=" mb-2 text-sm font-medium">Email Id</p>
                    <div className="flex pl-3  rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.email_icon} alt="" />
                        <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none" required />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <p className=" mb-2 text-sm font-medium">Message</p>
                    <textarea name="message" rows={8} placeholder="Enter your message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" />
                </div>


                <button disabled={loading} type="submit"
                    className={`w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full transition-all ${loading
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:scale-105"
                        }`}>
                    {loading ? (
                        <BeatLoader color="#ffffff" size={5} margin={2} />
                    ) : (
                        <>
                            Submit
                            <img src={assets.arrow_icon} alt="" className="w-4" />
                        </>
                    )}
                </button>


            </motion.form>

        </motion.div>
    )
}

export default ContactUs



