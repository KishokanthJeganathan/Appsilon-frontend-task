import React from 'react';
import ProductionGraph from '../production-graph/ProductionGraph';
import SalesMap from '../sales-map/SalesMap';
import * as S from './styles';

const GraphHolder = () => {
	return (
		<S.Section>
			<ProductionGraph />
			<SalesMap />
		</S.Section>
	);
};

export default GraphHolder;
