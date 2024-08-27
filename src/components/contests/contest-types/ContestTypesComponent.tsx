import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import BerryCardComponent from '../../berries/berry-card/BerryCardComponent';

const ContestTypesComponent: FC = () => {
    const types = useAppSelector(store => store.contestSlice.types);

    return (
        <div className={css.main}>
            {types && types.results.map((type, i) => <BerryCardComponent key={i} name={type.name} />)}
        </div>
    );
};

export default ContestTypesComponent;