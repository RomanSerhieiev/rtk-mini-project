import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import LanguageCardComponent from '../language-card/LanguageCardComponent';

const LanguagesComponent: FC = () => {
    const languages = useAppSelector(store => store.utilitySlice.languages);

    return (
        <div className={css.main}>
            {languages && languages.results.map((language, i) => <LanguageCardComponent key={i} name={language.name} />)}
        </div>
    );
};

export default LanguagesComponent;