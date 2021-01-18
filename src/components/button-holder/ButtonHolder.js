import React from 'react';
import Button from '../button/Button';
import * as S from './styles';
const ButtonHolder = () => {
	return (
		<S.Div>
			<span>
				<Button content="JUNE 2018" bgColor="gray" icon="AiFillCaretDown" />
			</span>
			<span>
				<Button content="EXPORT" bgColor="strongGray" icon="BsDownload" />{' '}
				<Button content="PRINT" bgColor="strongGray" icon="AiOutlinePrinter" />
			</span>
		</S.Div>
	);
};

export default ButtonHolder;
