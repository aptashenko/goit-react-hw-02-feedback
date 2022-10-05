import css from './stats.module.css';

const Statistic = ({ buttonsValues, buttonsNames, count, percent }) => (
    <ul className={css.list}>
        {buttonsValues.map((item, idx) => (
            <li key={idx}>{buttonsNames[idx]}: <span className={item > 0 && css[buttonsNames[idx]]}>{ item }</span></li>
        ))}
        <li>Total: { count() }</li>
        <li>Positive Feedback: <span className={percent() > 50 ? css.good : css.bad }>{ percent() }</span></li>
    </ul>
)

export default Statistic;