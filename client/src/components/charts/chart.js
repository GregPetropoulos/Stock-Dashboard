import{Chart} from 'react-google-charts';

// export const data = [
//     ["Task", "Hours per Day"],
//     ["Work", 11],
//     ["Eat", 2],
//     ["Commute", 2],
//     ["Watch TV", 2],
//     ["Sleep", 7],
//   ];
//   export const options={
// title:"My Daily Activities"
//   }
  export const charts=({chartInfo})=>{
  const {data,options, chartType, width,height}=chartInfo
    return (
        <Chart
        chartType={chartType}
        data={data}
        options={options}
        width={width}
        height={height}
        />
    )

  }
  export default charts