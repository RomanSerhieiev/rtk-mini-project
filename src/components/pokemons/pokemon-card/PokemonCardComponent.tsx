import React, { FC } from 'react';
import css from '../../../styles/ItemCardComponent.module.css';
import { NamedAPIResource } from '../../../models/common/NamedAPIResource.model';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { Button, Card, CardHeader } from 'reactstrap';

const PokemonCardComponent: FC<NamedAPIResource> = ({name, url}) => {
    const navigate = useNavigate();
    const blue = useAppSelector(store => store.themeSlice.blue);
    const id = url.split('/')

    return (
        <Card className={css.main} color={blue ? 'primary' : 'success'}>
            <CardHeader>
                {name}
            </CardHeader>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id[id.length - 2]}.png`} alt={name} />
            <Button className={css.button} color={'warning'} onClick={() => navigate(`${id[id.length - 2]}`)}>
                Go
            </Button>
        </Card>
    );
};

export default PokemonCardComponent;