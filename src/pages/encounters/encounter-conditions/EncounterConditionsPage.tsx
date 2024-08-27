import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import EncounterConditionsComponent from '../../../components/encounters/encounter-conditions/EncounterConditionsComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { encounterActions } from '../../../store/slices/encounter.slice';

const EncounterConditionsPage: FC = () => {
    const conditionsPages = useAppSelector(store => store.encounterSlice.conditionsPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(encounterActions.getAllConditions((page - 1) * 20))
    }, [params])

    return (
        <div className={css.main}>
            <div>
                <h1>Encounter Conditions Page</h1>
                <EncounterConditionsComponent />
            </div>
            <PaginationComponent pages={conditionsPages} />
        </div>
    );
};

export default EncounterConditionsPage;