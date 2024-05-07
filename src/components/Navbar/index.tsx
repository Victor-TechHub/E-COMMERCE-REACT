import { motion, useScroll } from "framer-motion"
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import "./style.scss"
import { NavContainer, item } from "../../utils/animation";
import { useNavScroll } from "../../hooks/useNavScroll";

const Navbar = () => {
    const { scroll } = useNavScroll()
    return (
        <main className={`main ${scroll > 0 ? "scrolled" : ""}`}>
            <div className="disclaimer">
                <p className='scroll-text'>New Season Coming! Discount 10% for all products! Check out now <span>20:48</span></p>
            </div>
            <header className='header'>
                <div className="burger">
                    <MenuRoundedIcon style={{ color: "whitesmoke", scale: "1.5" }} />
                </div>

                <nav className="navigation">
                    <motion.ul
                        variants={NavContainer}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.li className='logo' variants={item}>Volt</motion.li>
                        <motion.li variants={item}>Categories</motion.li>
                        <motion.li variants={item}>Collections</motion.li>
                        <motion.li variants={item}>Store</motion.li>
                        <motion.li variants={item}>Blog</motion.li>
                        <motion.li variants={item}>Find store</motion.li>
                    </motion.ul>
                </nav>

                <motion.div className='left-wrapper' initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <span><SearchIcon /> Search</span>
                    <span><LocalMallOutlinedIcon /> Cart (0)</span>
                    <span><AccountCircleOutlinedIcon /> Login</span>
                </motion.div>
            </header>
        </main>
    )
}

export default Navbar