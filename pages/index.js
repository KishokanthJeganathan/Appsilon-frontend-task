import React from 'react';
import DataSnippetHolder from '../src/components/data-snippet-holder/DataSnippetHolder';
import GraphHolder from '../src/components/graph-holder/GraphHolder';
import Title from '../src/components/title/Title';

const index = () => {
	// I'd usually fetch the data on the index page and pass it as props to children,
	// but since there is no data fetching I opted to create dummy data within the components and display it
	return (
		<main>
			<Title title="Enterprise Shiny Dashboards" />
			<DataSnippetHolder />
			<GraphHolder />
		</main>
	);
};

export default index;
