import React, { FC } from 'react';
import css from './PaginationComponent.module.css';
import { useSearchParams } from 'react-router-dom';
import { Button, ButtonGroup, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useAppSelector } from '../../hooks/useAppSelector';

interface IProps {
    pages: number,
}

const PaginationComponent: FC<IProps> = ({pages}) => {
    const {blue} = useAppSelector(store => store.themeSlice);
    const [params, setParams] = useSearchParams({
        page: '1',
    });

    const pageHandler = (page: string) => {
        setParams({page})
    }

    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    return (
        <div className={css.main}><ButtonGroup size="lg">
            <Button color={blue ? 'primary' : 'success'} disabled={page === 1} outline onClick={() => pageHandler('1')}>
                First
            </Button>
            <Button color={blue ? 'primary' : 'success'} disabled={page === 1} outline onClick={() => pageHandler((page - 1).toString())}>
                Previous
            </Button>
            <Button color={blue ? 'primary' : 'success'} disabled>
                {page}
            </Button>
            <Button color={blue ? 'primary' : 'success'} disabled={page === pages} outline onClick={() => pageHandler((page + 1).toString())}>
                Next
            </Button>
            <Button color={blue ? 'primary' : 'success'} disabled={page === pages} outline onClick={() => pageHandler(pages.toString())}>
                Last
            </Button>
        </ButtonGroup></div>
    );
};

export default PaginationComponent;