import styled from 'styled-components';
import { boxShadow, media, setColor } from '../../../utils/helpers';

export const Span = styled.span`
	background-color: ${(props) => (props.bgColor === 'strongGray' ? '#E0E2E5' : '')};

	border: none;
	${boxShadow};

	p {
		display: grid;
		justify-items: center;
		align-items: center;
	}

	${media.small`
	p{padding: 0.5rem;
	margin:0rem}`};

	${media.tablet`p {
		margin: 0rem;
		margin-right: 1rem;
		padding: 0.5rem 0.6rem;
	}`};
	display: grid;
	grid-template-columns: 3fr 1fr;
`;

export const IconHolder = styled.span`
	background-color: ${(props) => props.bgColor === 'strongGray' && '#999999'};
	color: ${(props) => (props.bgColor === 'strongGray' ? 'white' : '')};
	padding: 0.5rem 0.6rem;
	display: grid;
	justify-items: center;
	align-items: center;
`;
