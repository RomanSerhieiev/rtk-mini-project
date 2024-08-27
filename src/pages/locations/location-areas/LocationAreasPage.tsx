import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { locationActions } from '../../../store/slices/location.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import LocationAreasComponent from '../../../components/locations/location-areas/LocationAreasComponent';

const LocationAreasPage: FC = () => {
    const pages = useAppSelector(store => store.locationSlice.areasPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(locationActions.getAllAreas((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Location Areas Page</h1>
                <LocationAreasComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default LocationAreasPage;