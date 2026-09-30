
import toast from "react-hot-toast";
import assets from "../assets/assets";
import Title from "./Title";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BeatLoader } from "react-spinners";
import { motion } from "motion/react";

const ContactUs = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "Name must be at least 3 characters")
                .required("Name is required"),

            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),

            message: Yup.string()
                .min(10, "Message must be at least 10 characters")
                .required("Message is required"),
        }),
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                const formData = new FormData();

                formData.append(
                    "access_key",
                    "99a2bd71-1f5e-4d8d-8151-ad7aebcc25c8"
                );

                formData.append("name", values.name);
                formData.append("email", values.email);
                formData.append("message", values.message);

                const response = await fetch(
                    "https://api.web3forms.com/submit",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                const data = await response.json();

                if (data.success) {
                    toast.success("Thank you for your submission!");
                    resetForm();
                } else {
                    toast.error("This is an error, try again later!");
                }
                // eslint-disable-next-line no-unused-vars
            } catch (error) {
                toast.error("Something went wrong, try again later!");
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            id="contactUs"
            className="flex flex-col gap-7 items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
        >
            <Title
                title="Reach out to us"
                desc="Have a project in mind? Get in touch with us and let's create something great together."
            />

            <motion.form
                noValidate
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
                onSubmit={formik.handleSubmit}
            >

                {/* Name */}
                <div>
                    <p className="mb-2 text-sm font-medium">
                        Your name
                    </p>

                    <div
                        className={`flex pl-3 rounded-lg border ${formik.touched.name && formik.errors.name
                                ? "border-red-500"
                                : "border-gray-300 dark:border-gray-600"
                            }`}
                    >
                        <img src={assets.person_icon} alt="" />

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full p-3 text-sm outline-none"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>

                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                            {formik.errors.name}
                        </p>
                    )}
                </div>


                {/* Email */}
                <div>
                    <p className="mb-2 text-sm font-medium">
                        Email Id
                    </p>

                    <div
                        className={`flex pl-3 rounded-lg border ${formik.touched.email && formik.errors.email
                                ? "border-red-500"
                                : "border-gray-300 dark:border-gray-600"
                            }`}
                    >
                        <img src={assets.email_icon} alt="" />

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 text-sm outline-none"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>

                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                            {formik.errors.email}
                        </p>
                    )}
                </div>


                {/* Message */}
                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">
                        Message
                    </p>

                    <textarea
                        name="message"
                        rows={8}
                        placeholder="Enter your message"
                        className={`w-full p-3 text-sm outline-none rounded-lg border ${formik.touched.message && formik.errors.message
                                ? "border-red-500"
                                : "border-gray-300 dark:border-gray-600"
                            }`}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {formik.touched.message && formik.errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                            {formik.errors.message}
                        </p>
                    )}
                </div>


                {/* Submit */}
                <button
                    disabled={formik.isSubmitting}
                    type="submit"
                    className={`w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full transition-all ${formik.isSubmitting
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer hover:scale-105"
                        }`}
                >
                    {formik.isSubmitting ? (
                        <BeatLoader
                            color="#ffffff"
                            size={5}
                            margin={2}
                        />
                    ) : (
                        <>
                            Submit
                            <img
                                src={assets.arrow_icon}
                                alt=""
                                className="w-4"
                            />
                        </>
                    )}
                </button>

            </motion.form>
        </motion.div>
    );
};

export default ContactUs;

