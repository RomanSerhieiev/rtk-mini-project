import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import LocationCardComponent from '../location-card/LocationCardComponent';

const LocationsComponent: FC = () => {
    const locations = useAppSelector(store => store.locationSlice.locations);

    return (
        <div className={css.main}>
            {locations && locations.results.map((location, i) => <LocationCardComponent key={i} name={location.name} />)}
        </div>
    );
};

export default LocationsComponent;