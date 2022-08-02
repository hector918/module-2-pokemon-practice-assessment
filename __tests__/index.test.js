const {
  getAllPokemonNames,
  checkIfAnyPokemonWeighsLessThan,
  findByName,
  filterByType,
} = require("..");

const pokemon = require("../pokemon");

describe("getAllPokemonNames()", () => {
  test("should use the `.map()` method", () => {
    const text = getAllPokemonNames.toString();
    expect(text).toMatch(/\.map\(.*\)/s);
  });
  test("should throw an error if there is only one movie", () => {
    const actual = () => getAllPokemonNames(["Just One Pokemon"]);
    expect(actual).toThrow();
  });
  test("should return all of the pokemon names in an array", () => {
    const actual = getAllPokemonNames(pokemon);
    const expected = [
      "bulbasaur",
      "ivysaur",
      "venusaur",
      "charmander",
      "charmeleon",
      "charizard",
      "squirtle",
      "wartortle",
      "blastoise",
      "caterpie",
      "metapod",
      "butterfree",
      "weedle",
      "kakuna",
      "beedrill",
      "pidgey",
      "pidgeotto",
      "pidgeot",
      "rattata",
      "raticate",
      "spearow",
      "fearow",
      "ekans",
      "arbok",
      "pikachu",
      "raichu",
      "sandshrew",
      "sandslash",
      "nidoran-f",
      "nidorina",
      "nidoqueen",
      "nidoran-m",
      "nidorino",
      "nidoking",
      "clefairy",
      "clefable",
      "vulpix",
      "ninetales",
      "jigglypuff",
      "wigglytuff",
    ];
    expect(actual).toEqual(expected);
  });
});

describe("checkIfAnyPokemonWeighsLessThan()", () => {
  test("should use the `.some()` method", () => {
    const text = checkIfAnyPokemonWeighsLessThan.toString();
    expect(text).toMatch(/\.some\(.*\)/s);
  });
  test("should return `true` if any pokemon in the list weighs less than the provided weight", () => {
    const weight = 60;
    const actual = checkIfAnyPokemonWeighsLessThan(pokemon, weight);
    const expected = true;
    expect(actual).toEqual(expected);
  });
  test("should return `false` if no pokemon in the list weighs less than the provided weight", () => {
    const weight = 18;
    const actual = checkIfAnyPokemonWeighsLessThan(pokemon, weight);
    const expected = false;
    expect(actual).toEqual(expected);
  });
  test("if no weight is passed, the default should be a number higher than 18", () => {
    expect(checkIfAnyPokemonWeighsLessThan(pokemon)).toEqual(true);
  });
});

describe("findByName()", () => {
  test("should use the `.find()` method", () => {
    const text = findByName.toString();
    expect(text).toMatch(/\.find\(.*\)/s);
  });
  test("should return the entire poke based on the poke id", () => {
    const id = 36;
    const actual = findByName(pokemon, id);
    expect(actual.pokeId).toEqual(36);
    expect(actual.name).toEqual("clefable");
  });
  test("should dynamically change depending on the poke id inputted", () => {
    const id = 37;
    const actual = findByName(pokemon, id);
    expect(actual.pokeId).toEqual(37);
    expect(actual.name).toEqual("vulpix");
  });
  test("should return `null` if the pokemon cannot be found", () => {
    const id = 41;
    const actual = findByName(pokemon, id);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("filterByType()", () => {
  test("should use the `.filter()` method", () => {
    const text = filterByType.toString();
    expect(text).toMatch(/\.filter\(.*\)/s);
  });
  test("should use the `.find()` method", () => {
    const text = filterByType.toString();
    expect(text).toMatch(/\.find\(.*\)/s);
  });
  test("should return all pokemon that include the specified type", () => {
    const type = "fire";
    const actual = filterByType(pokemon, type);
    const expected = [
      pokemon[3], // charmander
      pokemon[4], // charmeleon
      pokemon[5], // charizard
      pokemon[36], // vulpix
      pokemon[37], // vulpix
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the type inputted", () => {
    const type = "water";
    const actual = filterByType(pokemon, type);
    const expected = [
      pokemon[6], // squirtle
      pokemon[7], // wartortle
      pokemon[8], // blastoise
    ];
    expect(actual).toEqual(expected);
  });
  test("should be case-insensitive", () => {
    const type = "FIRE";
    const actual = filterByType(pokemon, type);
    const expected = [
      pokemon[3], // charmander
      pokemon[4], // charmeleon
      pokemon[5], // charizard
      pokemon[36], // vulpix
      pokemon[37], // vulpix
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if no pokemon match the type", () => {
    const type = "psychic";
    const actual = filterByType(pokemon, type);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});
