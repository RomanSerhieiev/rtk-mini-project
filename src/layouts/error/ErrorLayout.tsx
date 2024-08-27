import React, { FC } from 'react';
import css from './ErrorLayout.module.css'
import HeaderComponent from '../../components/header/HeaderComponent';
import FooterComponent from '../../components/footer/FooterComponent';

const ErrorLayout: FC = () => {
    return (
        <div className={css.main}>
            <HeaderComponent />
            <h1>Error</h1>
            <FooterComponent />
        </div>
    );
};

export default ErrorLayout;