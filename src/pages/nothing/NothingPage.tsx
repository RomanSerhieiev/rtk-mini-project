import React, { FC } from 'react';
import css from './NothingPage.module.css'

const NothingPage: FC = () => {
    return (
        <div className={css.main}>
            <h1>Not found</h1>
        </div>
    );
};

export default NothingPage;