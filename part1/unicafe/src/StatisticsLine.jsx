
function StatisticsLine(props) {

    if (props.text == "positives") {
        return (
            <tbody>
                <tr>
                    <td>
                        <p>{props.text}</p>
                    </td>
                    <td>
                        <p>{String(props.value)}%</p>
                    </td>
                </tr>
            </tbody>
        )
    }
    return (
        <tbody>
            <tr>
                <td>
                    <p>{props.text}</p>
                </td>
                <td>
                    <p>{String(props.value)}</p>
                </td>
            </tr>
        </tbody>
    )
}

export default StatisticsLine