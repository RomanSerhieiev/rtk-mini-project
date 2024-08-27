import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import BerryCardComponent from '../../berries/berry-card/BerryCardComponent';

const EncounterConditionsComponent: FC = () => {
    const conditions = useAppSelector(store => store.encounterSlice.conditions);

    return (
        <div className={css.main}>
            {conditions && conditions.results.map((condition, i) => <BerryCardComponent key={i} name={condition.name} />)}
        </div>
    );
};

export default EncounterConditionsComponent;