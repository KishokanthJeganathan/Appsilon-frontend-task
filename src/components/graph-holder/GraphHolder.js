import React from 'react';
import { GiMoai } from 'react-icons/gi';
import ProductionGraph from '../production-graph/ProductionGraph';
import SalesMap from '../sales-map/SalesMap';
import SummaryGraph from '../summary-graph/SummaryGraph';
import * as S from './styles';

const GraphHolder = () => {
	return (
		<S.Section>
			<span>
				<ProductionGraph />
				<SummaryGraph />
			</span>
			<SalesMap />
		</S.Section>
	);
};

export default GraphHolder;
