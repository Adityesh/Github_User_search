import { AnimatePresence, motion } from 'framer-motion';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearError } from '../redux/actions';
import './component.css';

const Toast = () => {
    const error = useSelector(state => state.error);
    const errorMessage = useSelector(state => state.errorMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        if(error) {
            setTimeout(() => {
                dispatch(ClearError());
            }, 1500)
        }
    })

    return (
        <AnimatePresence>
            {error && (<motion.div
                className="toast"
                initial={{opacity : 0}}
                animate={{opacity : 1}}
                exit={{opacity : '0'}}
            
            >
                {errorMessage}
            </motion.div>)}
        </AnimatePresence>
    )
};


export default Toast;