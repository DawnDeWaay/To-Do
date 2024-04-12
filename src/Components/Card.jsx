import {motion} from "framer-motion";
import Check from "/img/check.svg"
import Trash from "/img/trash.svg"

const Card = ({task, index, deleteTask, toggleChecked}) => {
    return (
        <motion.div
            className="card"
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: task.checked === true ? 0.3 : 0.7, boxShadow: "0 5px 11px rgba(33,33,33,.2)", transition: {delay: index * 0.06}}}
            exit={{x: 20, opacity: 0}}
            whileHover={{
                y: -5,
                opacity: 1,
                boxShadow: "0 10px 11px rgba(33,33,33,.2)",
                transition: {delay: 0}
            }}
            layout
        >
            <p>{task.text}</p>
            <div className={"options-contain"}>
                <motion.div className={"check"} animate={{}} onClick={() => deleteTask(task.id)}
                            whileHover={{backgroundColor: "#c94126", boxShadow: "0 0 15px #c94126"}}>
                    <img src={Trash} alt="Trash"/>
                </motion.div>
                <motion.div className={"check"} animate={{}} onClick={() => toggleChecked(task)}
                            whileHover={{backgroundColor: "#659dff", boxShadow: "0 0 15px #659dff"}}>
                    <img src={Check} alt="Check Mark"/>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Card