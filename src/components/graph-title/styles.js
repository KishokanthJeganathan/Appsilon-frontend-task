import styled from 'styled-components';
import { setColor, setFontSize } from '../../../utils/helpers';

export const TitleDiv = styled.div`
	background-color: ${setColor.lightGray};

	padding: 0.5rem 1rem;
	h2,
	p {
		margin: 0.5rem 0rem;
	}
	display: grid;
	grid-template-columns: 2.5fr 1fr;
	align-items: center;
	span {
		display: flex;
		font-size: ${setFontSize.icon};
		justify-content: space-around;
		cursor: pointer;
	}
`;
