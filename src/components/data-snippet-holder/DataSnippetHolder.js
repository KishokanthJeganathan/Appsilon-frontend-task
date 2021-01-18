import React from 'react';
import DataSnippet from '../data-snippet/DataSnippet';
import * as S from './styles';

const DataSnippetHolder = () => {
	const data = [
		{ sum: '$2 674 862', title: 'TOTAL PROFIT', change: 4.5, icon: 'BiCoinStack', iconBgColor: '#4FBFD7' },
		{ sum: '657', title: 'ACTIVE USERS', change: 8.5, icon: 'BsPerson', iconBgColor: '#BDD74B' },
		{ sum: '245', title: 'NEW ORDERS', change: 3.9, icon: 'BiGridVertical', iconBgColor: '#F49D42' },
		{ sum: '12', title: 'OPEN COMPLAINTS', change: -5.3, icon: 'BsThreeDots', iconBgColor: '#ED4D4E' }
	];
	return (
		<S.Section>
			{data.map((snippet) => (
				<DataSnippet
					sum={snippet.sum}
					title={snippet.title}
					change={snippet.change}
					icon={snippet.icon}
					BgColor={snippet.iconBgColor}
				/>
			))}
		</S.Section>
	);
};

export default DataSnippetHolder;
