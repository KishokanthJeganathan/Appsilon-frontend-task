import styled from 'styled-components';
import { media } from '../../../utils/helpers';

export const Section = styled.span`
	display: grid;
	column-gap: 2rem;
	margin-top: 1rem;
	padding: 2rem;

	${media.small`grid-template-columns: 1fr ;
	row-gap:2rem;`};
	${media.tablet`grid-template-columns: 1fr 1fr;`};
	${media.large`grid-template-columns: 1fr 1fr 1fr 1fr ;
	margin-top: 4rem;`};
`;
