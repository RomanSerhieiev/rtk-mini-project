import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import EncounterMethodsComponent from '../../../components/encounters/encounter-methods/EncounterMethodsComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { encounterActions } from '../../../store/slices/encounter.slice';

const EncounterMethodsPage: FC = () => {
    const methodsPages = useAppSelector(store => store.encounterSlice.methodsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(encounterActions.getAllMethods((page - 1) * 20))
    }, [params])

    return (
        <div className={css.main}>
            <div>
                <h1>Encounter Methods Page</h1>
                <EncounterMethodsComponent />
            </div>
            <PaginationComponent pages={methodsPages} />
        </div>
    );
};

export default EncounterMethodsPage;