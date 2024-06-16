import React from 'react'
import style from './inputbutton.module.css'
interface Props {
    onChange: (e: any) => void;
    label: string;
    inactive: boolean;
    onClick?: any
}
const InputButton = ({ onChange, label, inactive, onClick }: Props) => {
    return (
        <div className={style.inputButton}>
            <input
                className={style.input}
                disabled={inactive}
                onChange={onChange} />
            <button onClick={onClick} disabled={inactive} className={inactive ? `${style.inactiveButton}` : `${style.activeButton}`}>{label}</button>
        </div >
    )
}

export default InputButton
