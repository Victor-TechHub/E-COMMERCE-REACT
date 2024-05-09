import { motion } from "framer-motion"
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import "./style.scss"
import { NavContainer, item } from "../../utils/animation";
import { useState } from "react";
import BackDropComponent from "../Backdrop";
import { Link } from "react-router-dom";
import { PATHS } from "../../routes/path";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <BackDropComponent open={isOpen} handleClose={handleClick} />
            <main className={`main ${window.innerWidth <= 600 ? "" : "scrolled"}`}>
                {/* <div className="disclaimer">
                    <p className='scroll-text'>New Season Coming! Discount 10% for all products! Check out now <span>20:48</span></p>
                </div> */}

                <div className={`burger ${window.innerWidth < 600 ? "show" : "hide"} scrolled`}
                    onClick={handleClick}>
                    {isOpen ? <CloseIcon style={{ color: "whitesmoke", scale: "1.5", cursor: "pointer" }} /> : <MenuRoundedIcon style={{ cursor: "pointer", color: "whitesmoke", scale: "1.5" }} />}
                </div>

                <header className={`${isOpen ? "header" : "header hide"}`}>
                    <nav className="navigation">
                        <motion.ul
                            variants={NavContainer}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.li className='logo' variants={item}><Link to={PATHS.HOME}>Volt</Link></motion.li>
                            <motion.li variants={item}><Link to={PATHS.CATEGORY}>Categories</Link></motion.li>
                            <motion.li variants={item}><Link to={PATHS.COLLECTION}>Collections</Link></motion.li>
                            <motion.li variants={item}><Link to={PATHS.STORE}>Store</Link></motion.li>
                            <motion.li variants={item}><Link to={PATHS.BLOG}>Blog</Link></motion.li>
                            <motion.li variants={item}><Link to={PATHS.STORE}>Find store</Link></motion.li>
                        </motion.ul>
                    </nav>

                    <motion.div className='left-wrapper' initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                        <span><SearchIcon /> Search</span>
                        <span><Link to={PATHS.CART}><LocalMallOutlinedIcon /> Cart (0)</Link></span>
                        <span><Link to={PATHS.LOGIN}><AccountCircleOutlinedIcon /> Login</Link></span>
                    </motion.div>
                </header>
            </main >
        </>

    )
}

export default Navbar