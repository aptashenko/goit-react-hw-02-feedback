const Body = ({ buttonsValues, buttonsNames, count, percent }) => (
    <ul>
        {buttonsValues.map((item, idx) => (
            <li key={idx}>{ buttonsNames[idx] }: { item }</li>
        ))}
        <li>Total: { count() }</li>
        <li>Positive Feedback: { percent() }</li>
    </ul>
)

export default Body;