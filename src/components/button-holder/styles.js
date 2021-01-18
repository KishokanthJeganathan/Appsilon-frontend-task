import styled from 'styled-components';
import { media } from '../../../utils/helpers';

export const Div = styled.div`
	display: grid;
	padding: 1rem;

	${media.small`
	grid-template-columns: 0.8fr 1fr;
	column-gap:1rem`};

	${media.tablet`
	grid-template-columns: 1fr 0.7fr;`};
	span:nth-of-type(1) {
		display: flex;
		justify-content: flex-start;
	}

	span {
		display: flex;
		justify-content: space-between;
	}
`;
