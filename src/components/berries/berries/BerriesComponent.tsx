import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css'
import { useAppSelector } from '../../../hooks/useAppSelector';
import BerryCardComponent from '../berry-card/BerryCardComponent';

const BerriesComponent: FC = () => {
    const berries = useAppSelector(store => store.berrySlice.berries);

    return (
        <div className={css.main}>
            {berries && berries.results.map((berry, i) => <BerryCardComponent key={i} name={berry.name} />)}
        </div>
    );
};

export default BerriesComponent;