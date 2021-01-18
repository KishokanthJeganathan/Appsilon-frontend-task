import React from 'react';
import * as S from './styles';
import { VscSync } from 'react-icons/vsc';
import { GiCrossedBones } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { salesChartData } from '../../../utils/Data';

const ProductionGraph = () => {
	return (
		<S.Section>
			<S.TitleDiv>
				<h2>PRODUCTION</h2>
				<span>
					<VscSync />
					<GiCrossedBones />
					<IoIosArrowDown />
				</span>
			</S.TitleDiv>

			<div>
				<ResponsiveContainer width="100%" height={400}>
					<BarChart
						width={500}
						height={300}
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
						<Bar dataKey="pv" stackId="a" fill="#8884d8" />
						<Bar dataKey="amt" stackId="a" fill="#82ca9d" />
						<Bar dataKey="uv" fill="#ffc658" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</S.Section>
	);
};

export default ProductionGraph;
