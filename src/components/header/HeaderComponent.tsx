import React, { FC } from 'react';
import css from './HeaderComponent.module.css';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label, UncontrolledDropdown } from 'reactstrap';
import { themeActions } from '../../store/slices/theme.slice';

const HeaderComponent: FC = () => {
    const {blue} = useAppSelector(store => store.themeSlice);
    const dispatch = useAppDispatch();

    const changeTheme = () => {
        dispatch(themeActions.changeTheme());
    };

    return (
        <ButtonGroup className={css.main}>
            <UncontrolledDropdown>
                <DropdownToggle color={blue ? 'primary' : 'success'} caret>
                    Berries
                </DropdownToggle>
                <DropdownMenu>
                    <NavLink to={'berry'}>
                        <DropdownItem>
                            All Berries
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'berry-firmness'}>
                        <DropdownItem>
                            Berry Firmnesses
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'berry-flavor'}>
                        <DropdownItem>
                            Berry Flavors
                        </DropdownItem>
                    </NavLink>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
                <DropdownToggle color={blue ? 'primary' : 'success'} caret>
                    Contests
                </DropdownToggle>
                <DropdownMenu>
                    <NavLink to={'contest-type'}>
                        <DropdownItem>
                            Contest Types
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'contest-effect'}>
                        <DropdownItem>
                            Contest Effects
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'super-contest-effect'}>
                        <DropdownItem>
                            Super Contest Effects
                        </DropdownItem>
                    </NavLink>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
                <DropdownToggle color={blue ? 'primary' : 'success'} caret>
                    Encounters
                </DropdownToggle>
                <DropdownMenu>
                    <NavLink to={'encounter-method'}>
                        <DropdownItem>
                            Encounter Methods
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'encounter-condition'}>
                        <DropdownItem>
                            Encounter Conditions
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'encounter-condition-value'}>
                        <DropdownItem>
                            Encounter Condition Values
                        </DropdownItem>
                    </NavLink>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
                <DropdownToggle color={blue ? 'primary' : 'success'} caret>
                    Evolutions
                </DropdownToggle>
                <DropdownMenu>
                    <NavLink to={'evolution-chain'}>
                        <DropdownItem>
                            Evolution Chains
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'evolution-trigger'}>
                        <DropdownItem>
                            Evolution Triggers
                        </DropdownItem>
                    </NavLink>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
                <DropdownToggle color={blue ? 'primary' : 'success'} caret>
                    Games
                </DropdownToggle>
                <DropdownMenu>
                    <NavLink to={'generation'}>
                        <DropdownItem>
                            Generations
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'pokedex'}>
                        <DropdownItem>
                            Pokedexes
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'version'}>
                        <DropdownItem>
                            Versions
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'version-group'}>
                        <DropdownItem>
                            Version Groups
                        </DropdownItem>
                    </NavLink>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
                <DropdownToggle color={blue ? 'primary' : 'success'} caret>
                    Items
                </DropdownToggle>
                <DropdownMenu>
                    <NavLink to={'item'}>
                        <DropdownItem>
                            All items
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'item-attribute'}>
                        <DropdownItem>
                            Item Attributes
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'item-category'}>
                        <DropdownItem>
                            Item Categories
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'item-fling-effect'}>
                        <DropdownItem>
                            Item Fling Effects
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'item-pocket'}>
                        <DropdownItem>
                            Item Pockets
                        </DropdownItem>
                    </NavLink>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
                <DropdownToggle color={blue ? 'primary' : 'success'} caret>
                    Locations
                </DropdownToggle>
                <DropdownMenu>
                    <NavLink to={'location'}>
                        <DropdownItem>
                            All locations
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'location-area'}>
                        <DropdownItem>
                            Location Areas
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'pal-park-area'}>
                        <DropdownItem>
                            Pal Park Areas
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'region'}>
                        <DropdownItem>
                            Regions
                        </DropdownItem>
                    </NavLink>
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavLink to={'machine'}>
                <Button color={blue ? 'primary' : 'success'}>
                    Machines
                </Button>
            </NavLink>
            <UncontrolledDropdown>
                <DropdownToggle color={blue ? 'primary' : 'success'} caret>
                    Moves
                </DropdownToggle>
                <DropdownMenu>
                    <NavLink to={'move'}>
                        <DropdownItem>
                            All moves
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'move-ailment'}>
                        <DropdownItem>
                            Move Ailments
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'move-battle-style'}>
                        <DropdownItem>
                            Move Battle Styles
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'move-category'}>
                        <DropdownItem>
                            Move Categories
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'move-damage-class'}>
                        <DropdownItem>
                            Move Damage Classes
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'move-learn-method'}>
                        <DropdownItem>
                            Move Learn Methods
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'move-target'}>
                        <DropdownItem>
                            Move Targets
                        </DropdownItem>
                    </NavLink>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
                <DropdownToggle color={blue ? 'primary' : 'success'} caret>
                    Pokémons
                </DropdownToggle>
                <DropdownMenu>
                    <NavLink to={'pokemon'}>
                        <DropdownItem>
                            All pokémons
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'pokemon-color'}>
                        <DropdownItem>
                            Pokemon Colors
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'pokemon-form'}>
                        <DropdownItem>
                            Pokemon Forms
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'pokemon-habitat'}>
                        <DropdownItem>
                            Pokemon Habitats
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'pokemon-shape'}>
                        <DropdownItem>
                            Pokemon Shapes
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'pokemon-species'}>
                        <DropdownItem>
                            Pokemon Species
                        </DropdownItem>
                    </NavLink>
                    <DropdownItem divider />
                    <NavLink to={'ability'}>
                        <DropdownItem>
                            Abilities
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'characteristic'}>
                        <DropdownItem>
                            Characteristics
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'egg-group'}>
                        <DropdownItem>
                            Egg Groups
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'gender'}>
                        <DropdownItem>
                            Genders
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'growth-rate'}>
                        <DropdownItem>
                            Growth Rates
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'nature'}>
                        <DropdownItem>
                            Natures
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'pokeathlon-stat'}>
                        <DropdownItem>
                            Pokeathlon Stats
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'stat'}>
                        <DropdownItem>
                            Stats
                        </DropdownItem>
                    </NavLink>
                    <NavLink to={'type'}>
                        <DropdownItem>
                            Types
                        </DropdownItem>
                    </NavLink>
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavLink to={'language'}>
                <Button color={blue ? 'primary' : 'success'}>
                    Languages
                </Button>
            </NavLink>
            <NavLink to={'favorite'}>
                <Button color={blue ? 'primary' : 'success'}>
                    Favorites
                </Button>
            </NavLink>
            <Form>
                <FormGroup className={css.form} switch>
                    <Input
                        type="switch"
                        defaultChecked={blue}
                        onClick={changeTheme}
                    />
                    <Label>{blue ? 'Blue' : 'Green'}</Label>
                </FormGroup>
            </Form>
        </ButtonGroup>
    );
};

export default HeaderComponent;