import css from './Buttons.module.css'

const Buttons = ({ buttonsNames, handleClick }) => (
    <ul className={css.list}>
        {buttonsNames.map((item, idx) => (
            <li key={idx}>
                <button className={`${css.button} ${css[item]}`} onClick={()=>handleClick(item)}>{ item }</button>
            </li>
        ))}
    </ul>
)
export default Buttons;