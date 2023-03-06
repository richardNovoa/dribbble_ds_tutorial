import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, type, sx }) => {
	var buttonType = {
		primary: 'btn btn-primary',
		secondary: 'btn btn-secondary'
	};
	var bootstrap = buttonType[type];
	console.log(bootstrap);

	return <button className={bootstrap}>{label}</button>;
};

Button.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	sx: PropTypes.object
};

export default Button;
