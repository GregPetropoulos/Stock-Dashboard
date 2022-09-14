import{Chart} from 'react-google-charts';

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];
export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};
//   export const options={
// title:"My Daily Activities"
//   }
  export const charts=({chartInfo})=>{
  // const {data,options, chartType, width,height}=chartInfo
    return (
        <Chart
        chartType="LineChart"
      width="250px"
      height="250px"
      data={data}
      options={options}
        />
    )

  }
  export default charts