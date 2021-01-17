import React from 'react';
import DataSnippetHolder from '../src/components/data-snippet-holder/DataSnippetHolder';
import Title from '../src/components/title/Title';

const index = () => {
	return (
		<main>
			<Title title="Enterprise Shiny Dashboards" />
			<DataSnippetHolder />
		</main>
	);
};

export default index;
