import React,{useState} from 'react';
import GaugeChart from 'react-gauge-chart';
const Performance = () => {
    const [value, setValue] = useState(0);
    setTimeout(() => {
        setValue(4.6);
      }, 10000)
    return (
        <div style={{marginTop:'150px'}}>
            <GaugeChart id="gauge-chart1"  percent={value}  nrOfLevels={1} hideText colors={['#2185d0']}/>
        </div>
    );
}

export default Performance;
