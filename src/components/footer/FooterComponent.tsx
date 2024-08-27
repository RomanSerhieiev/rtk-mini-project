import React, { FC } from 'react';
import css from './FooterComponent.module.css';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Button, ButtonGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const FooterComponent: FC = () => {
    const {blue} = useAppSelector(store => store.themeSlice);

    return (
        <div className={css.main}>
            <ButtonGroup>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'berry'}>
                        All Berries
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'berry-firmness'}>
                        Berry Firmnesses
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'berry-flavor'}>
                        Berry Flavors
                    </NavLink>
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'contest-type'}>
                        Contest Types
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'contest-effect'}>
                        Contest Effects
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'super-contest-effect'}>
                        Super Contest Effects
                    </NavLink>
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'encounter-method'}>
                        Encounter Methods
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'encounter-condition'}>
                        Encounter Conditions
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'encounter-condition-value'}>
                        Encounter Condition Values
                    </NavLink>
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'evolution-chain'}>
                        Evolution Chains
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'evolution-trigger'}>
                        Evolution Triggers
                    </NavLink>
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'generation'}>
                        Generations
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'pokedex'}>
                        Pokedexes
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'version'}>
                        Versions
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'version-group'}>
                        Version Groups
                    </NavLink>
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'item'}>
                        All items
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'item-attribute'}>
                        Item Attributes
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'item-category'}>
                        Item Categories
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'item-fling-effect'}>
                        Item Fling Effects
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'item-pocket'}>
                        Item Pockets
                    </NavLink>
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'location'}>
                        All locations
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'location-area'}>
                        Location Areas
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'pal-park-area'}>
                        Pal Park Areas
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'region'}>
                        Regions
                    </NavLink>
                </Button>
            </ButtonGroup>
            <Button color={blue ? 'primary' : 'success'}>
                <NavLink to={'machine'}>
                    Machines
                </NavLink>
            </Button>
            <ButtonGroup>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'move'}>
                        All moves
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'move-ailment'}>
                        Move Ailments
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'move-battle-style'}>
                        Move Battle Styles
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'move-category'}>
                        Move Categories
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'move-damage-class'}>
                        Move Damage Classes
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'move-learn-method'}>
                        Move Learn Methods
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'move-target'}>
                        Move Targets
                    </NavLink>
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'pokemon'}>
                        All pokémons
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'pokemon-color'}>
                        Pokemon Colors
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'pokemon-form'}>
                        Pokemon Forms
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'pokemon-habitat'}>
                        Pokemon Habitats
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'pokemon-shape'}>
                        Pokemon Shapes
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'pokemon-species'}>
                        Pokemon Species
                    </NavLink>
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'ability'}>
                        Abilities
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'characteristic'}>
                        Characteristics
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'egg-group'}>
                        Egg Groups
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'gender'}>
                        Genders
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'growth-rate'}>
                        Growth Rates
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'nature'}>
                        Natures
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'pokeathlon-stat'}>
                        Pokeathlon Stats
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'stat'}>
                        Stats
                    </NavLink>
                </Button>
                <Button color={blue ? 'primary' : 'success'}>
                    <NavLink to={'type'}>
                        Types
                    </NavLink>
                </Button>
            </ButtonGroup>
            <Button color={blue ? 'primary' : 'success'}>
                <NavLink to={'language'}>
                    Languages
                </NavLink>
            </Button>
            <Button color={blue ? 'primary' : 'success'}>
                <NavLink to={'favorite'}>
                    Favorites
                </NavLink>
            </Button>
        </div>
    );
};

export default FooterComponent;