import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { locationActions } from '../../../store/slices/location.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import LocationsComponent from '../../../components/locations/locations/LocationsComponent';

const LocationsPage: FC = () => {
    const locationsPages = useAppSelector(store => store.locationSlice.locationsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(locationActions.getAll((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Locations Page</h1>
                <LocationsComponent />
            </div>
            <PaginationComponent pages={locationsPages} />
        </div>
    );
};

export default LocationsPage;