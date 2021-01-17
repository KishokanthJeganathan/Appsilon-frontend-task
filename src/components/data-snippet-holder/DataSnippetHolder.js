import React from 'react';
import { data } from '../../../utils/Data';
import DataSnippet from '../data-snippet/DataSnippet';
import * as S from './styles';

const DataSnippetHolder = () => {
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
