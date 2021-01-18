import { css } from 'styled-components';

export const setColor = {
	lightGray: '#fafcfd',
	gray: '#f2f2f2',
	strongGray: 'gray'
};

export const setFontWeight = {
	thin: '300',
	normal: '400',
	bold: '600'
};

export const setFontSize = {
	title: '3rem',
	smallTitle: '2.2rem',
	normalBig: '1.2rem',
	normal: '1.1rem',
	normalSmall: '0.9rem',
	icon: '1.4rem'
};

export const boxShadow = `-webkit-box-shadow: 3px 3px 5px 2px #d6d6d6;
box-shadow: 3px 3px 5px 2px #d6d6d6;`;

const sizes = {
	large: 1200,
	desktop: 992,
	tablet: 768,
	phone: 576,
	small: 375
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`@media (min-width: ${sizes[label] / 16}em) {${css(...args)};}`;
	return acc;
}, {});
