import React from 'react';
import * as S from './styles';
import { VscSync } from 'react-icons/vsc';
import { GiCrossedBones } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';

const GraphTitle = ({ title }) => {
	return (
		<S.TitleDiv>
			<h2>{title}</h2>
			<span>
				<VscSync />
				<GiCrossedBones />
				<IoIosArrowDown />
			</span>
		</S.TitleDiv>
	);
};

export default GraphTitle;
