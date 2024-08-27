import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import LocationAreaCardComponent from '../location-area-card/LocationAreaCardComponent';

const LocationAreasComponent: FC = () => {
    const areas = useAppSelector(store => store.locationSlice.areas);

    return (
        <div className={css.main}>
            {areas && areas.results.map((area, i) => <LocationAreaCardComponent key={i} name={area.name} />)}
        </div>
    );
};

export default LocationAreasComponent;