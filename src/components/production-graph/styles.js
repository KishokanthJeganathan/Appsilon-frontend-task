import styled from 'styled-components';
import { boxShadow, setColor, setFontSize } from '../../../utils/helpers';

export const Section = styled.div`${boxShadow};`;

export const TitleDiv = styled.div`
	background-color: ${setColor.lightGray};

	padding: 0.5rem 1rem;
	h2,
	p {
		margin: 0.5rem 0rem;
	}
	display: grid;
	grid-template-columns: 3fr 1fr;
	align-items: center;
	span {
		display: flex;
		font-size: ${setFontSize.icon};
		justify-content: space-around;
	}
`;
