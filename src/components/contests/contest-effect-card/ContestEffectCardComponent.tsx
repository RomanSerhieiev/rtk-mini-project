import React, { FC } from 'react';
import css from '../../../styles/ItemCardComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { Button, Card, CardHeader } from 'reactstrap';
import { APIResource } from '../../../models/common/APIResource.model';

const ContestEffectCardComponent: FC<APIResource> = ({url}) => {
    const {blue} = useAppSelector(store => store.themeSlice);
    const id = url.split('/')

    return (
        <Card className={css.main} color={blue ? 'primary' : 'success'}>
            <CardHeader>
                Contest effect #{id[id.length - 2]}
            </CardHeader>
            <Button className={css.button} color={'warning'}>
                Go
            </Button>
        </Card>
    );
};

export default ContestEffectCardComponent;