import { PokemonSprites } from './PokemonSprites.model';

export interface PokemonAllSprites extends PokemonSprites {
    other: {
        dream_world: PokemonSprites,
        home: PokemonSprites,
        official_artwork: PokemonSprites,
        showdown: PokemonSprites,
    },
    versions: {
        generation_i: {
            red_blue: PokemonSprites,
            yellow: PokemonSprites,
        },
        generation_ii: {
            crystal: PokemonSprites,
            gold: PokemonSprites,
            silver: PokemonSprites,
        },
        generation_iii: {
            firered_leafgreen: PokemonSprites,
            ruby_sapphire: PokemonSprites,
        },
        generation_iv: {
            diamond_pearl: PokemonSprites,
            heartgold_soulsilver: PokemonSprites,
            platinum: PokemonSprites,
        },
        generation_v: {
            black_white: {
                animated: PokemonSprites,
            } extends PokemonSprites ? PokemonSprites : PokemonSprites,
        },
        generation_vi: {
            omegaruby_alphasapphire: PokemonSprites,
            x_y: PokemonSprites,
        },
        generation_vii: {
            icons: PokemonSprites,
            ultra_sun_ultra_moon: PokemonSprites,
        },
        generation_viii: {
            icons: PokemonSprites,
        },
    }
}