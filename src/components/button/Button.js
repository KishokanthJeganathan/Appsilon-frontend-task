import React from 'react';
import { AiFillCaretDown, AiOutlinePrinter } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import * as S from './styles';

const Button = ({ content, bgColor, icon }) => {
	const displayIcon = () => {
		if (icon === 'AiFillCaretDown') {
			return <AiFillCaretDown />;
		} else if (icon === 'BsDownload') {
			return <BsDownload />;
		} else return <AiOutlinePrinter />;
	};
	return (
		<S.Span bgColor={bgColor}>
			<p>{content}</p>
			<S.IconHolder bgColor={bgColor}>{displayIcon(icon)}</S.IconHolder>
		</S.Span>
	);
};

export default Button;
