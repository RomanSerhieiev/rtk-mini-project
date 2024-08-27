import React, { FC } from 'react';
import css from '../../../styles/ItemsComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import RegionCardComponent from '../region-card/RegionCardComponent';

const RegionsComponent: FC = () => {
    const regions = useAppSelector(store => store.locationSlice.regions);

    return (
        <div className={css.main}>
            {regions && regions.results.map((region, i) => <RegionCardComponent key={i} name={region.name} />)}
        </div>
    );
};

export default RegionsComponent;