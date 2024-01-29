import classes from './BarchartAlt.module.css'
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Rectangle,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

type BarchartAltProps = {
  showGrid?: boolean
  data: { name: string; amt: number }[]
}

const BarchartAlt = ({ showGrid = false, data }: BarchartAltProps) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        className={classes.barchart}
      >
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar
          dataKey="amt"
          fill="#63AD0E"
          activeBar={<Rectangle fill="#ED9B97" stroke="none" />}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarchartAlt
