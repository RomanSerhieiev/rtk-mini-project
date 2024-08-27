import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import BerryFirmnessesCardComponent from '../berry-firmness-card/BerryFirmnessesCardComponent';

const BerryFirmnessComponent: FC = () => {
    const firmnesses = useAppSelector(store => store.berrySlice.firmnesses);

    return (
        <div className={css.main}>
            {firmnesses && firmnesses.results.map((firmness, i) => <BerryFirmnessesCardComponent key={i} name={firmness.name} />)}
        </div>
    );
};

export default BerryFirmnessComponent;