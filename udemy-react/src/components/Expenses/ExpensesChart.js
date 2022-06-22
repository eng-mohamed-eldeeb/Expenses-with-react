import Chart from '../Chart/Chart'

const ExpenseChart = props => {
    const chartData = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'dec', value: 0}
    ];

    for(const i of props.expenses) {
        const expenseMonth = i.date.getMonth();
        chartData[expenseMonth].value += i.amount;
    }

    return (
        <Chart data={chartData} />
    )
}
export default ExpenseChart;