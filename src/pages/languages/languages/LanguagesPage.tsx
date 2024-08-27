import React, { FC, useEffect } from 'react';
import css from '../../../styles/ItemsPage.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { utilityActions } from '../../../store/slices/utility.slice';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import LanguagesComponent from '../../../components/languages/languages/LanguagesComponent';

const LanguagesPage: FC = () => {
    const pages = useAppSelector(store => store.utilitySlice.languagesPages);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    useEffect(() => {
        dispatch(utilityActions.getAllLanguages((page - 1) * 20));
    }, [params]);

    return (
        <div className={css.main}>
            <div>
                <h1>Languages Page</h1>
                <LanguagesComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default LanguagesPage;