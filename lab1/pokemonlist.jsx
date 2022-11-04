const Pokemonlist=({pokemons})=>{
    const list=pokemons.map((pokemon)=><Pokemon Pokemon={pokemon}/>);
    return <div className="pokemon-list">{list}</div>
}
Pokemonlist.prototype={
    pokemons:PropTypes.arrayof(PokemonType)
}