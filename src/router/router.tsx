import { createBrowserRouter, RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/main/MainLayout';
import ErrorLayout from '../layouts/error/ErrorLayout';
import PokemonsPage from '../pages/pokemons/pokemons/PokemonsPage';
import PokemonPage from '../pages/pokemons/pokemon/PokemonPage';
import AbilitiesPage from '../pages/pokemons/abilities/AbilitiesPage';
import AbilityPage from '../pages/pokemons/ability/AbilityPage';
import BerriesPage from '../pages/berries/berries/BerriesPage';
import BerryPage from '../pages/berries/berry/BerryPage';
import BerryFirmnessesPage from '../pages/berries/berry-firmnesses/BerryFirmnessesPage';
import BerryFirmnessPage from '../pages/berries/berry-firmness/BerryFirmnessPage';
import BerryFlavorsPage from '../pages/berries/berry-flavors/BerryFlavorsPage';
import BerryFlavorPage from '../pages/berries/berry-flavor/BerryFlavorPage';
import CharacteristicsPage from '../pages/pokemons/characteristics/CharacteristicsPage';
import CharacteristicPage from '../pages/pokemons/characteristic/CharacteristicPage';
import ContestEffectsPage from '../pages/contests/contest-effects/ContestEffectsPage';
import ContestEffectPage from '../pages/contests/contest-effect/ContestEffectPage';
import ContestTypesPage from '../pages/contests/contest-types/ContestTypesPage';
import ContestTypePage from '../pages/contests/contest-type/ContestTypePage';
import EggGroupsPage from '../pages/pokemons/egg-groups/EggGroupsPage';
import EggGroupPage from '../pages/pokemons/egg-group/EggGroupPage';
import EncounterConditionsPage from '../pages/encounters/encounter-conditions/EncounterConditionsPage';
import EncounterConditionPage from '../pages/encounters/encounter-condition/EncounterConditionPage';
import EncounterConditionValuesPage from '../pages/encounters/encounter-condition-values/EncounterConditionValuesPage';
import EncounterConditionValuePage from '../pages/encounters/encounter-condition-value/EncounterConditionValuePage';
import EncounterMethodsPage from '../pages/encounters/encounter-methods/EncounterMethodsPage';
import EncounterMethodPage from '../pages/encounters/encounter-method/EncounterMethodPage';
import EvolutionChainsPage from '../pages/evolution/evolution-chains/EvolutionChainsPage';
import EvolutionChainPage from '../pages/evolution/evolution-chain/EvolutionChainPage';
import EvolutionTriggersPage from '../pages/evolution/evolution-triggers/EvolutionTriggersPage';
import EvolutionTriggerPage from '../pages/evolution/evolution-trigger/EvolutionTriggerPage';
import GendersPage from '../pages/pokemons/genders/GendersPage';
import GenderPage from '../pages/pokemons/gender/GenderPage';
import GenerationsPage from '../pages/games/generations/GenerationsPage';
import GenerationPage from '../pages/games/generation/GenerationPage';
import GrowthRatesPage from '../pages/pokemons/growth-rates/GrowthRatesPage';
import GrowthRatePage from '../pages/pokemons/growth-rate/GrowthRatePage';
import ItemsPage from '../pages/items/items/ItemsPage';
import ItemPage from '../pages/items/item/ItemPage';
import ItemAttributesPage from '../pages/items/item-attributes/ItemAttributesPage';
import ItemAttributePage from '../pages/items/item-attribute/ItemAttributePage';
import ItemCategoriesPage from '../pages/items/item-categories/ItemCategoriesPage';
import ItemCategoryPage from '../pages/items/item-category/ItemCategoryPage';
import ItemFlingEffectsPage from '../pages/items/item-fling-effects/ItemFlingEffectsPage';
import ItemFlingEffectPage from '../pages/items/item-fling-effect/ItemFlingEffectPage';
import ItemPocketsPage from '../pages/items/item-pockets/ItemPocketsPage';
import ItemPocketPage from '../pages/items/item-pocket/ItemPocketPage';
import LanguagesPage from '../pages/languages/languages/LanguagesPage';
import LanguagePage from '../pages/languages/language/LanguagePage';
import LocationsPage from '../pages/locations/locations/LocationsPage';
import LocationPage from '../pages/locations/location/LocationPage';
import LocationAreasPage from '../pages/locations/location-areas/LocationAreasPage';
import LocationAreaPage from '../pages/locations/location-area/LocationAreaPage';
import MachinesPage from '../pages/machines/machines/MachinesPage';
import MachinePage from '../pages/machines/machine/MachinePage';
import MovesPage from '../pages/moves/moves/MovesPage';
import MovePage from '../pages/moves/move/MovePage';
import MoveAilmentsPage from '../pages/moves/move-ailments/MoveAilmentsPage';
import MoveAilmentPage from '../pages/moves/move-ailment/MoveAilmentPage';
import MoveBattleStylesPage from '../pages/moves/move-battle-styles/MoveBattleStylesPage';
import MoveBattleStylePage from '../pages/moves/move-battle-style/MoveBattleStylePage';
import MoveCategoriesPage from '../pages/moves/move-categories/MoveCategoriesPage';
import MoveCategoryPage from '../pages/moves/move-category/MoveCategoryPage';
import MoveDamageClassesPage from '../pages/moves/move-damage-classes/MoveDamageClassesPage';
import MoveDamageClassPage from '../pages/moves/move-damage-class/MoveDamageClassPage';
import MoveLearnMethodsPage from '../pages/moves/move-learn-methods/MoveLearnMethodsPage';
import MoveLearnMethodPage from '../pages/moves/move-learn-method/MoveLearnMethodPage';
import MoveTargetsPage from '../pages/moves/move-targets/MoveTargetsPage';
import MoveTargetPage from '../pages/moves/move-target/MoveTargetPage';
import NaturesPage from '../pages/pokemons/natures/NaturesPage';
import NaturePage from '../pages/pokemons/nature/NaturePage';
import PalParkAreasPage from '../pages/locations/pal-park-areas/PalParkAreasPage';
import PalParkAreaPage from '../pages/locations/pal-park-area/PalParkAreaPage';
import PokeathlonStatsPage from '../pages/pokemons/pokeathlon-stats/PokeathlonStatsPage';
import PokeathlonStatPage from '../pages/pokemons/pokeathlon-stat/PokeathlonStatPage';
import PokedexesPage from '../pages/games/pokedexes/PokedexesPage';
import PokedexPage from '../pages/games/pokedex/PokedexPage';
import PokemonColorsPage from '../pages/pokemons/pokemon-colors/PokemonColorsPage';
import PokemonColorPage from '../pages/pokemons/pokemon-color/PokemonColorPage';
import PokemonFormsPage from '../pages/pokemons/pokemon-forms/PokemonFormsPage';
import PokemonFormPage from '../pages/pokemons/pokemon-form/PokemonFormPage';
import PokemonHabitatsPage from '../pages/pokemons/pokemon-habitats/PokemonHabitatsPage';
import PokemonHabitatPage from '../pages/pokemons/pokemon-habitat/PokemonHabitatPage';
import PokemonShapesPage from '../pages/pokemons/pokemon-shapes/PokemonShapesPage';
import PokemonShapePage from '../pages/pokemons/pokemon-shape/PokemonShapePage';
import PokemonSpeciesPage from '../pages/pokemons/pokemon-species/PokemonSpeciesPage';
import PokemonSpeciePage from '../pages/pokemons/pokemon-specie/PokemonSpeciePage';
import RegionsPage from '../pages/locations/regions/RegionsPage';
import RegionPage from '../pages/locations/region/RegionPage';
import StatsPage from '../pages/pokemons/stats/StatsPage';
import StatPage from '../pages/pokemons/stat/StatPage';
import SuperContestEffectsPage from '../pages/contests/super-contest-effects/SuperContestEffectsPage';
import SuperContestEffectPage from '../pages/contests/super-contest-effect/SuperContestEffectPage';
import TypesPage from '../pages/pokemons/types/TypesPage';
import TypePage from '../pages/pokemons/type/TypePage';
import VersionsPage from '../pages/games/versions/VersionsPage';
import VersionPage from '../pages/games/version/VersionPage';
import VersionGroupsPage from '../pages/games/version-groups/VersionGroupsPage';
import VersionGroupPage from '../pages/games/version-group/VersionGroupPage';
import PokemonLocationAreasPage from '../pages/pokemons/pokemon-location-areas/PokemonLocationAreasPage';
import PokemonLocationAreaPage from '../pages/pokemons/pokemon-location-area/PokemonLocationAreaPage';
import FavoritesPage from '../pages/pokemons/favorites/FavoritesPage';
import PokemonsByTypePage from '../pages/pokemons/pokemons-by-type/PokemonsByTypePage';

const routs: RouteObject[] = [
    {
        path: '',
        element: <MainLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                element: <PokemonsPage />,
                index: true,
            },
            {
                path: 'pokemon',
                element: <PokemonsPage />
            },
            {
                path: 'favorite',
                element: <FavoritesPage />
            },
            {
                path: 'pokemon-by-type',
                element: <PokemonsByTypePage />
            },
            {
                path: 'pokemon-by-type/:id',
                element: <PokemonPage />
            },
            {
                path: 'pokemon/:id',
                element: <PokemonPage />
            },
            {
                path: 'favorite/:id',
                element: <PokemonPage />
            },
            {
                path: 'ability',
                element: <AbilitiesPage />
            },
            {
                path: 'ability/:id',
                element: <AbilityPage />
            },
            {
                path: 'berry',
                element: <BerriesPage />
            },
            {
                path: 'berry/:id',
                element: <BerryPage />
            },
            {
                path: 'berry-firmness',
                element: <BerryFirmnessesPage />
            },
            {
                path: 'berry-firmness/:id',
                element: <BerryFirmnessPage />
            },
            {
                path: 'berry-flavor',
                element: <BerryFlavorsPage />
            },
            {
                path: 'berry-flavor/:id',
                element: <BerryFlavorPage />
            },
            {
                path: 'characteristic',
                element: <CharacteristicsPage />
            },
            {
                path: 'characteristic/:id',
                element: <CharacteristicPage />
            },
            {
                path: 'contest-effect',
                element: <ContestEffectsPage />
            },
            {
                path: 'contest-effect/:id',
                element: <ContestEffectPage />
            },
            {
                path: 'contest-type',
                element: <ContestTypesPage />
            },
            {
                path: 'contest-type/:id',
                element: <ContestTypePage />
            },
            {
                path: 'egg-group',
                element: <EggGroupsPage />
            },
            {
                path: 'egg-group/:id',
                element: <EggGroupPage />
            },
            {
                path: 'encounter-condition',
                element: <EncounterConditionsPage />
            },
            {
                path: 'encounter-condition/:id',
                element: <EncounterConditionPage />
            },
            {
                path: 'encounter-condition-value',
                element: <EncounterConditionValuesPage />
            },
            {
                path: 'encounter-condition-value/:id',
                element: <EncounterConditionValuePage />
            },
            {
                path: 'encounter-method',
                element: <EncounterMethodsPage />
            },
            {
                path: 'encounter-method/:id',
                element: <EncounterMethodPage />
            },
            {
                path: 'evolution-chain',
                element: <EvolutionChainsPage />
            },
            {
                path: 'evolution-chain/:id',
                element: <EvolutionChainPage />
            },
            {
                path: 'evolution-trigger',
                element: <EvolutionTriggersPage />
            },
            {
                path: 'evolution-trigger/:id',
                element: <EvolutionTriggerPage />
            },
            {
                path: 'gender',
                element: <GendersPage />
            },
            {
                path: 'gender/:id',
                element: <GenderPage />
            },
            {
                path: 'generation',
                element: <GenerationsPage />
            },
            {
                path: 'generation/:id',
                element: <GenerationPage />
            },
            {
                path: 'growth-rate',
                element: <GrowthRatesPage />
            },
            {
                path: 'growth-rate/:id',
                element: <GrowthRatePage />
            },
            {
                path: 'item',
                element: <ItemsPage />
            },
            {
                path: 'item/:id',
                element: <ItemPage />
            },
            {
                path: 'item-attribute',
                element: <ItemAttributesPage />
            },
            {
                path: 'item-attribute/:id',
                element: <ItemAttributePage />
            },
            {
                path: 'item-category',
                element: <ItemCategoriesPage />
            },
            {
                path: 'item-category/:id',
                element: <ItemCategoryPage />
            },
            {
                path: 'item-fling-effect',
                element: <ItemFlingEffectsPage />
            },
            {
                path: 'item-fling-effect/:id',
                element: <ItemFlingEffectPage />
            },
            {
                path: 'item-pocket',
                element: <ItemPocketsPage />
            },
            {
                path: 'item-pocket/:id',
                element: <ItemPocketPage />
            },
            {
                path: 'language',
                element: <LanguagesPage />
            },
            {
                path: 'language/:id',
                element: <LanguagePage />
            },
            {
                path: 'location',
                element: <LocationsPage />
            },
            {
                path: 'location/:id',
                element: <LocationPage />
            },
            {
                path: 'location-area',
                element: <LocationAreasPage />
            },
            {
                path: 'location-area/:id',
                element: <LocationAreaPage />
            },
            {
                path: 'machine',
                element: <MachinesPage />
            },
            {
                path: 'machine/:id',
                element: <MachinePage />
            },
            {
                path: 'move',
                element: <MovesPage />
            },
            {
                path: 'move/:id',
                element: <MovePage />
            },
            {
                path: 'move-ailment',
                element: <MoveAilmentsPage />
            },
            {
                path: 'move-ailment/:id',
                element: <MoveAilmentPage />
            },
            {
                path: 'move-battle-style',
                element: <MoveBattleStylesPage />
            },
            {
                path: 'move-battle-style/:id',
                element: <MoveBattleStylePage />
            },
            {
                path: 'move-category',
                element: <MoveCategoriesPage />
            },
            {
                path: 'move-category/:id',
                element: <MoveCategoryPage />
            },
            {
                path: 'move-damage-class',
                element: <MoveDamageClassesPage />
            },
            {
                path: 'move-damage-class/:id',
                element: <MoveDamageClassPage />
            },
            {
                path: 'move-learn-method',
                element: <MoveLearnMethodsPage />
            },
            {
                path: 'move-learn-method/:id',
                element: <MoveLearnMethodPage />
            },
            {
                path: 'move-target',
                element: <MoveTargetsPage />
            },
            {
                path: 'move-target/:id',
                element: <MoveTargetPage />
            },
            {
                path: 'nature',
                element: <NaturesPage />
            },
            {
                path: 'nature/:id',
                element: <NaturePage />
            },
            {
                path: 'pal-park-area',
                element: <PalParkAreasPage />
            },
            {
                path: 'pal-park-area/:id',
                element: <PalParkAreaPage />
            },
            {
                path: 'pokeathlon-stat',
                element: <PokeathlonStatsPage />
            },
            {
                path: 'pokeathlon-stat/:id',
                element: <PokeathlonStatPage />
            },
            {
                path: 'pokedex',
                element: <PokedexesPage />
            },
            {
                path: 'pokedex/:id',
                element: <PokedexPage />
            },
            {
                path: 'pokemon-color',
                element: <PokemonColorsPage />
            },
            {
                path: 'pokemon-color/:id',
                element: <PokemonColorPage />
            },
            {
                path: 'pokemon-form',
                element: <PokemonFormsPage />
            },
            {
                path: 'pokemon-form/:id',
                element: <PokemonFormPage />
            },
            {
                path: 'pokemon-habitat',
                element: <PokemonHabitatsPage />
            },
            {
                path: 'pokemon-habitat/:id',
                element: <PokemonHabitatPage />
            },
            {
                path: 'pokemon-location-area',
                element: <PokemonLocationAreasPage />
            },
            {
                path: 'pokemon-location-area/:id',
                element: <PokemonLocationAreaPage />
            },
            {
                path: 'pokemon-shape',
                element: <PokemonShapesPage />
            },
            {
                path: 'pokemon-shape/:id',
                element: <PokemonShapePage />
            },
            {
                path: 'pokemon-species',
                element: <PokemonSpeciesPage />
            },
            {
                path: 'pokemon-species/:id',
                element: <PokemonSpeciePage />
            },
            {
                path: 'region',
                element: <RegionsPage />
            },
            {
                path: 'region/:id',
                element: <RegionPage />
            },
            {
                path: 'stat',
                element: <StatsPage />
            },
            {
                path: 'stat/:id',
                element: <StatPage />
            },
            {
                path: 'super-contest-effect',
                element: <SuperContestEffectsPage />
            },
            {
                path: 'super-contest-effect/:id',
                element: <SuperContestEffectPage />
            },
            {
                path: 'type',
                element: <TypesPage />
            },
            {
                path: 'type/:id',
                element: <TypePage />
            },
            {
                path: 'version',
                element: <VersionsPage />
            },
            {
                path: 'version/:id',
                element: <VersionPage />
            },
            {
                path: 'version-group',
                element: <VersionGroupsPage />
            },
            {
                path: 'version-group/:id',
                element: <VersionGroupPage />
            },
        ]
    }
];

export const router = createBrowserRouter(routs);