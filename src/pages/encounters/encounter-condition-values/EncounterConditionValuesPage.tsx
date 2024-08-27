import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import EncounterConditionValuesComponent from '../../../components/encounters/encounter-condition-values/EncounterConditionValuesComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { encounterActions } from '../../../store/slices/encounter.slice';

const EncounterConditionValuesPage: FC = () => {
    const conditionValuesPages = useAppSelector(store => store.encounterSlice.conditionValuesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(encounterActions.getAllConditionValues((page - 1) * 20))
    }, [params])

    return (
        <div className={css.main}>
            <div>
                <h1>Encounter Condition Values Page</h1>
                <EncounterConditionValuesComponent />
            </div>
            <PaginationComponent pages={conditionValuesPages} />
        </div>
    );
};

export default EncounterConditionValuesPage;