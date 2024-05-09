import { Link } from "react-router-dom"
import "./style.scss"
import { motion } from "framer-motion"
import { PATHS } from "../../../routes/path"

const Banner = () => {
    return (
        <main>
            <section className="banner">
                <div className="container">
                    {/* <Navbar /> */}
                    <motion.div
                        className="hero-section">
                        <motion.span
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 1.5 } }}
                        >Volt Sport Project
                        </motion.span>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 2 } }}
                        >
                            Introducing our latest collection, designed specifically for outdoor enthusiasts.
                            Features a range of high-performance<br />
                            outwear with a range of bold and vibrant colors and patterns to choose from.
                        </motion.p>
                        <Link to={PATHS.STORE}>
                            <motion.button
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 2.5 } }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Shop Now

                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default Banner