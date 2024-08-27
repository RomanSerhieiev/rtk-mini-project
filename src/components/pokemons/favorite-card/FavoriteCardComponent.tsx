import React, { FC } from 'react';
import css from '../../../styles/ItemCardComponent.module.css';
import { FavoritePokemon } from '../../../models/pokemon/FavoritePokemon.model';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { Button, Card, CardHeader } from 'reactstrap';

const FavoriteCardComponent: FC<FavoritePokemon> = ({id, name, img}) => {
    const navigate = useNavigate();
    const blue = useAppSelector(store => store.themeSlice.blue);

    return (
        <Card className={css.main} color={blue ? 'primary' : 'success'}>
            <CardHeader>
                {name}
            </CardHeader>
            <img src={img} alt={name} />
            <Button className={css.button} color={'warning'} onClick={() => navigate(`${id}`)}>
                Go
            </Button>
        </Card>
    );
};

export default FavoriteCardComponent;