import React, { FC } from 'react';
import css from './PokemonForm.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const PokemonFormComponent: FC = () => {
    const form = useAppSelector(state => state.pokemonSlice.form);
    const navigate = useNavigate();

    const navigateHandler = (url: string) => {
        const id = url.split('/');
        navigate(`/pokemon/${id[id.length - 2]}`);
    };

    return (
        form &&
        <div className={css.main}>
          <h3>{form.id}. {form.name}</h3>
          <div>
            <div>
              <div>
                <h5>
                  Pokemon: {}
                  <Button color={'warning'} onClick={() => navigateHandler(form.pokemon.url)}>
                      {form.pokemon.name}
                  </Button>
                </h5>
              </div>
              <p>Order: {form.order}</p>
              <p>Form order: {form.form_order}</p>
              <p>{form.is_default ? 'Default' : 'Not default'}</p>
              <p>{form.is_battle_only ? 'Battle only' : 'Not battle only'}</p>
              <p>{form.is_mega ? 'Mega' : 'Not mega'}</p>
                {form.form_name && <p>Form name: {form.form_name}</p>}
              <p>Version group: {form.version_group.name}</p>
              <h5>Types</h5>
                {form.types.map((type, i) =>
                    <div key={i}>
                        <p>Slot: {type.slot}</p>
                        <p>Name: {type.type.name}</p>
                    </div>
                )}
            </div>
            <div>
              <div>
                <h5>Default</h5>
                <img src={form.sprites.front_default} alt={form.name} />
                <img src={form.sprites.back_default} alt={form.name} />
              </div>
              <div>
                <h5>Shiny</h5>
                <img src={form.sprites.front_shiny} alt={form.name} />
                <img src={form.sprites.back_shiny} alt={form.name} />
              </div>
            </div>
          </div>
        </div>
    );
};

export default PokemonFormComponent;