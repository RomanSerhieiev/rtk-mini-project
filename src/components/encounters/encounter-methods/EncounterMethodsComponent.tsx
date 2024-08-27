import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import BerryCardComponent from '../../berries/berry-card/BerryCardComponent';

const EncounterMethodsComponent: FC = () => {
    const methods = useAppSelector(store => store.encounterSlice.methods);

    return (
        <div className={css.main}>
            {methods && methods.results.map((method, i) => <BerryCardComponent key={i} name={method.name} />)}
        </div>
    );
};

export default EncounterMethodsComponent;