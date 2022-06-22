import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
    const values = props.data.map(data => data.value)
    const totalMax = Math.max(...values);
  return (
    <div className="chart">
      {props.data.map((d) => (
        <ChartBar
          key={d.label}
          value={d.value}
          max={totalMax}
          labl={d.label}
        />
      ))}
    </div>
  );
};

export default Chart;
