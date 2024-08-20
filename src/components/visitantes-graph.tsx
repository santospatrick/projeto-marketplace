import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  {
    name: '26',
    visitantes: 150,
  },
  {
    name: '27',
    visitantes: 10,
  },
  {
    name: '28',
    visitantes: 50,
  },
]

function VisitantesGraph() {
  return (
    <div>
      <h2 className="font-dmsans text-lg font-bold mb-4">Visitantes</h2>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          width={730}
          height={250}
          data={data}
          style={{ fontSize: '12px' }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="10 10"
            className="stroke-gray-200/20"
          />
          <XAxis axisLine={false} tickLine={false} dy={14} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} width={25} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="visitantes"
            stroke="#5EC5FD"
            strokeWidth={2}
            dot={{
              stroke: 'white',
              fill: '#5EC5FD',
              strokeWidth: 2,
              r: 6,
            }}
            activeDot={{
              stroke: 'white',
              fill: '#5EC5FD',
              strokeWidth: 3,
              r: 6,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VisitantesGraph
