import React from 'react';
import * as S from './styles';
import { BiCoinStack, BiGridVertical } from 'react-icons/bi';
import { BsPerson, BsThreeDots } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';

const DataSnippet = ({ sum, title, change, icon, BgColor }) => {
	const displayCorrectIcon = (icon) => {
		if (icon === 'BiCoinStack') {
			return <BiCoinStack />;
		} else if (icon === 'BiGridVertical') {
			return <BiGridVertical />;
		} else if (icon === 'BsPerson') {
			return <BsPerson />;
		} else {
			return <BsThreeDots />;
		}
	};

	return (
		// Math.sign checks if the the change is + o - and passes a prop to change the color of the %
		<S.Div isMinus={Math.sign(change) === -1 && 'minus'}>
			<S.Num>{sum}</S.Num>
			<S.Span>
				<p>{title}</p>
				<p>
					{Math.sign(change) === -1 ? null : '+'}
					{change}%
				</p>
			</S.Span>
			<S.Span>
				<p>
					MONTHLY STATS <AiFillCaretDown />
				</p>
				<S.IconHolder BgColor={BgColor}>{displayCorrectIcon(icon)}</S.IconHolder>
			</S.Span>
		</S.Div>
	);
};

export default DataSnippet;
