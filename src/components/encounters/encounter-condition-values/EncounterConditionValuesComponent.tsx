import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import BerryCardComponent from '../../berries/berry-card/BerryCardComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';

const EncounterConditionValuesComponent: FC = () => {
    const conditionValues = useAppSelector(store => store.encounterSlice.conditionValues);

    return (
        <div className={css.main}>
            {conditionValues && conditionValues.results.map((conditionValue, i) => <BerryCardComponent key={i} name={conditionValue.name} />)}
        </div>
    );
};

export default EncounterConditionValuesComponent;