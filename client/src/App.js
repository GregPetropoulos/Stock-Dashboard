import { useState, useEffect } from 'react';

import Chart from './components/charts/chart';
import chartData from './data/data.json';
console.log(chartData)
const App = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);
  useEffect(() => {
    if (show) {
      setData(chartData);
      
    }
  }, [show]);
  
  console.log("test",chartData)
  return (
    <div className='container mx-0'>
      <h1>Dashboard</h1>
      {show ? 
        <span>
          <h2>Available Charts</h2>
          {show &&
            data &&
            data.charts.map((chartInfo, idx) => (
              <Chart chartInfo={chartInfo} key={idx} />
            ))}
        </span>
       : 
        <h2>No Charts Available</h2>
      }
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Data' : 'Fetch Data'}
      </button>
      {/* <Chart /> */}
    </div>
  );
};

export default App;
