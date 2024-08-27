import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { locationActions } from '../../../store/slices/location.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import PalParkAresComponent from '../../../components/locations/pal-park-ares/PalParkAresComponent';

const PalParkAreasPage: FC = () => {
    const pages = useAppSelector(store => store.locationSlice.palParkAreasPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(locationActions.getAllPalParkAreas((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Pal Park Areas Page</h1>
                <PalParkAresComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PalParkAreasPage;