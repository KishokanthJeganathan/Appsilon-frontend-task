import styled from 'styled-components';

export const Div = styled.div`
	background-color: #fafcfd;
	-webkit-box-shadow: 3px 3px 5px 2px #d6d6d6;
	box-shadow: 3px 3px 5px 2px #d6d6d6;

	p {
		margin: 0.5rem;
	}

	span:nth-of-type(1) {
		font-size: 1.2rem;
		padding: 0.5rem;
		p:nth-of-type(2) {
			color: ${(props) => (props.isMinus === 'minus' ? '#ff5e5e' : '#c7e5ac;')};
		}
	}

	span:nth-of-type(2) {
		background-color: #f2f2f2;
		P {
			font-size: 0.9rem;
			margin: 0.5rem 1rem;
			display: grid;
			grid-template-columns: 1.3fr 1fr;
			align-items: center;
		}
	}
`;

export const Span = styled.span`
	display: grid;

	grid-template-columns: 5fr 1fr;
	p:nth-of-type(2) {
		text-align: right;
	}
`;

export const Num = styled.p`
	font-size: 2.2rem;
	padding: 0rem 0.5rem;
	font-weight: 400;
	margin: 0rem;
`;

export const IconHolder = styled.span`
	background-color: ${(props) => props.BgColor};
	color: white;
	font-size: 1.4rem;
	display: grid;
	justify-items: center;
	align-items: center;
`;
