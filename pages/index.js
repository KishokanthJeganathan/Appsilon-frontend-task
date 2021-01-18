import React from 'react';
import DataSnippetHolder from '../src/components/data-snippet-holder/DataSnippetHolder';
import GraphHolder from '../src/components/graph-holder/GraphHolder';
import Title from '../src/components/title/Title';

const index = () => {
	return (
		<main>
			<Title title="Enterprise Shiny Dashboards" />
			<DataSnippetHolder />
			<GraphHolder />
		</main>
	);
};

export default index;
