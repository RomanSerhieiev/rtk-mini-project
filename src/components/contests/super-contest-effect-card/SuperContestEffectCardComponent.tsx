import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { APIResource } from '../../../models/common/APIResource.model';
import css from '../../../styles/ItemCardComponent.module.css';
import { Button, Card, CardHeader } from 'reactstrap';

const SuperContestEffectCardComponent: FC<APIResource> = ({url}) => {
    const {blue} = useAppSelector(store => store.themeSlice);
    const id = url.split('/')

    return (
        <Card className={css.main} color={blue ? 'primary' : 'success'}>
            <CardHeader>
                Super contest effect #{id[id.length - 2]}
            </CardHeader>
            <Button className={css.button} color={'warning'}>
                Go
            </Button>
        </Card>
    );
};

export default SuperContestEffectCardComponent;