import StatisticsLine from "./StatisticsLine";

function Statistics(props) {
    const good = props.statistics.good;
    const neutral = props.statistics.neutral;
    const bad = props.statistics.bad;
    const all = good+neutral+bad;
    const average = (good-bad)/all
    const positives = (good/all)*100;
    return (
        <div>
            <table>
                <StatisticsLine text="good" value={good} />
                <StatisticsLine text="neutral" value={neutral} />
                <StatisticsLine text="bad" value={bad} />
                <StatisticsLine text="all" value={all} />
                <StatisticsLine text="average" value={average} />
                <StatisticsLine text="positives" value={positives} />
            </table>
        </div>
    )
}

export default Statistics