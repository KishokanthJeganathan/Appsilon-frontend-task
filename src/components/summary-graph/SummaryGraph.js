import React from 'react';
import GraphTitle from '../graph-title/GraphTitle';
import * as S from './styles';
import {
	ComposedChart,
	Line,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts';
import ButtonHolder from '../button-holder/ButtonHolder';

const SummaryGraph = () => {
	const data = [
		{
			name: 'Sector A',
			revenue: 1397,
			cost: 1098
		},
		{
			name: 'Sector B',
			revenue: 1480,
			cost: 1200
		}
	];
	return (
		<S.Section>
			<GraphTitle title="SUMMARY" />
			<div style={{ width: '100%', height: '170px' }}>
				<ResponsiveContainer width="99%">
					<ComposedChart
						layout="vertical"
						data={data}
						margin={{
							top: 20,
							right: 20,
							bottom: 20,
							left: 20
						}}
					>
						<CartesianGrid stroke="#f5f5f5" />
						<XAxis type="number" />
						<YAxis dataKey="name" type="category" />
						<Tooltip />
						<Legend />
						<Area dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
						<Bar dataKey="cost" barSize={20} fill="#413ea0" />
					</ComposedChart>
				</ResponsiveContainer>
			</div>
			<ButtonHolder />
		</S.Section>
	);
};

export default SummaryGraph;
