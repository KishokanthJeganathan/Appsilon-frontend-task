import styled from 'styled-components';
import { boxShadow, setColor } from '../../../utils/helpers';

export const Section = styled.section`
	${boxShadow};
	margin-top: 2rem;
`;

export const GraphHolder = styled.div`background-color: ${setColor.lightGray};`;
