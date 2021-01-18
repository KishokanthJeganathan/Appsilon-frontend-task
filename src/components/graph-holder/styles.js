import styled from 'styled-components';
import { media } from '../../../utils/helpers';

export const Section = styled.section`
	display: grid;

	padding: 2rem;
	grid-gap: 2rem;

	${media.small`grid-template-columns: 1fr;`};
	${media.desktop`grid-template-columns: 1fr 1fr;`};
`;
