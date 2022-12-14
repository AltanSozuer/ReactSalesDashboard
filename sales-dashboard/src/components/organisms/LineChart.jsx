import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ACTIVE_USER_COUNT } from "../../DummyData/MonthlyActiveUser"
import "../../styles/css/chart.css"
import "../../styles/css/shared/shadowbox.css"

export default function LineCharts(props){
    return (
        <div className='chart shadow-box' >
            <h3 className='chartTitle'>Monthly Active Users</h3>
            <ResponsiveContainer width="100%" aspect={ 5 / 2 }>
                <LineChart
                    width={1000}
                    height={400}
                    data={ACTIVE_USER_COUNT}
                    margin={{
                        top: 10,
                        right: 20,
                        left: 20,
                        bottom: 10,
                    }} >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <Tooltip />
                    <Line type="monotone" dataKey="Active User" stroke="#8884d8" strokeWidth={2} />
                </LineChart>    
            </ResponsiveContainer>
        </div>
    );
}
  
