import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

function Button({ children, type, onclick, buttonStyle, buttonsize }) {
    // eslint-disable-next-line no-undef
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onclick={onclick} type={type}>
                {children}
            </button>
        </Link>
    );
}

export default Button;
