import {motion, AnimatePresence} from "framer-motion";
import Plus from "/img/plus.svg"
import {useState} from "react";

const AddNew = ({addTask}) => {
    const [isBig, setIsBig] = useState(false);
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);

    function toggleBig() {
        setIsBig(!isBig);
        setText('')
    }

    return (
        <motion.div
            className="add-new"
            initial={{opacity:0.8, borderRadius: 12}}
            whileHover={{opacity: 1, boxShadow: "0 10px 11px rgba(33,33,33,.2)"}}
            animate={{
                opacity: isBig ? 1 : 0.8,
                height: isBig ? 150 : 50,
                width: isBig ? 340 : 50,
                boxShadow: "0 5px 11px rgba(33,33,33,.2)"
            }}
        >
            <motion.img
                src={Plus}
                className="plus"
                onClick={() => toggleBig()}
                animate={{rotate: isBig ? 45 : 0,}}
            />
            {isBig &&
                <AnimatePresence type="wait">
                    <motion.div
                        className="new-contain"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.2}}
                        exit={{opacity:0}}
                        layout
                        >
                        <textarea
                            value={text}
                            onChange={handleChange}
                            placeholder="Task"
                        />
                        <button onClick={text && (() => {addTask(text); toggleBig();})}>
                            Add
                        </button>
                    </motion.div>
                </AnimatePresence>
            }
        </motion.div>
    )
}

export default AddNew