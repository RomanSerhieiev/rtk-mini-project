import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PalParkAreaCardComponent from '../pal-park-area-card/PalParkAreaCardComponent';

const PalParkAresComponent: FC = () => {
    const palParkAreas = useAppSelector(store => store.locationSlice.palParkAreas);

    return (
        <div className={css.main}>
            {palParkAreas && palParkAreas.results.map((palParkArea, i) => <PalParkAreaCardComponent key={i} name={palParkArea.name} />)}
        </div>
    );
};

export default PalParkAresComponent;