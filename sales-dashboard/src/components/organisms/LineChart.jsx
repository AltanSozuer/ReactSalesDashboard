import "../../styles/css/chart.css"
import "../../styles/css/shared/shadowbox.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

export default function LineCharts({
    title,
    data,
    width,
    height,
    chartMargin,
    lineDataKey,
    xAxisDataKey
}){ 
    return (
        <div className='chart shadow-box' >
            <h3 className='chartTitle'>{ title }</h3>
            <ResponsiveContainer width="100%" aspect={ 5 / 2 }>
                <LineChart
                    width={width}
                    height={height}
                    data={data}
                    margin={chartMargin} >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey={xAxisDataKey} />
                    <Tooltip />
                    <Line type="monotone" dataKey={lineDataKey} stroke="#8884d8" strokeWidth={2} />
                </LineChart>    
            </ResponsiveContainer>
        </div>
    );
}
  

LineCharts.defaultProps = {
    title: "Default LineChart Title",
    width: 100,
    height: 100,
    data: null,
    lineDataKey: null,
    xAxisDataKey: null
}

LineCharts.propTypes = {
    title: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.array,
    lineDataKey: PropTypes.string,
    xAxisDataKey: PropTypes.string
}