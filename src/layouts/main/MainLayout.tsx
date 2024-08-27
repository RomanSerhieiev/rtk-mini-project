import React, { FC } from 'react';
import css from './MainLayout.module.css'
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/header/HeaderComponent';
import FooterComponent from '../../components/footer/FooterComponent';

const MainLayout: FC = () => {
    return (
        <div className={css.main}>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    );
};

export default MainLayout;