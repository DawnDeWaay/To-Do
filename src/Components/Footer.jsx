import {motion} from "framer-motion";

const Footer = () => {
    return (
        <div className="footer">
            <motion.h2 whileHover={{scale: 1.1}}>
                <a href="https://dondewaay.github.io/Portfolio/">Don DeWaay III</a>
            </motion.h2>
            <motion.h2 whileHover={{scale: 1.1}}>
                <a href="https://github.com/dondewaay/To-Do">GitHub</a>
            </motion.h2>
        </div>
    )
}

export default Footer;