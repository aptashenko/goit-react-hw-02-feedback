const Buttons = ({ buttonsValues, buttonsNames, handleClick }) => (
    <ul>
        {buttonsNames.map((item, idx) => (
            <li key={idx}>
                <button onClick={()=>handleClick(idx)}>{ item }</button>
            </li>
        ))}
    </ul>
)

export default Buttons;