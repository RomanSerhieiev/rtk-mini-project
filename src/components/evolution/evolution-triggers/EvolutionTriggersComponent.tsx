import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import BerryCardComponent from '../../berries/berry-card/BerryCardComponent';

const EvolutionTriggersComponent: FC = () => {
    const triggers = useAppSelector(store => store.evolutionSlice.triggers);

    return (
        <div className={css.main}>
            {triggers && triggers.results.map((trigger, i) => <BerryCardComponent key={i} name={trigger.name} />)}
        </div>
    );
};

export default EvolutionTriggersComponent;