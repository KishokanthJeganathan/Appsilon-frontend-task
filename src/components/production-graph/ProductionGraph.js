import React from 'react';
import * as S from './styles';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ButtonHolder from '../button-holder/ButtonHolder';
import GraphTitle from '../graph-title/GraphTitle';

const ProductionGraph = () => {
	const salesChartData = [
		{
			name: 'Bogota',
			revenue: 8400,
			cost: 2400
		},

		{
			name: 'Lima',
			revenue: 9800,
			cost: 2290
		},
		{
			name: 'La Paz',
			revenue: 3908,
			cost: 2000
		},
		{
			name: 'Brasilia',
			revenue: 3800,
			cost: 2500
		}
	];
	return (
		<S.Section>
			<GraphTitle title="PRODUCTION" />
			<div>
				<ResponsiveContainer width="99%" height={200}>
					<BarChart
						data={salesChartData}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 5
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="revenue" stackId="a" fill="#8884d8" />
						<Bar dataKey="cost" stackId="a" fill="#82ca9d" />
					</BarChart>
				</ResponsiveContainer>
			</div>

			<ButtonHolder />
		</S.Section>
	);
};

export default ProductionGraph;
