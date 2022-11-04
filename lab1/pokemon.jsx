const PokemonType=propTypes.exact({
    id:PropTypes.number,
    name:PropTypes.string,
    type:PropTypes.string,
    image:PropTypes.string,
})
Pokemon.PropTypes={
    pokemon:PokemonType,
}

const rostm=ReactDOM.createRoot(document.querySelector("#app3"));
rostm.render(<Pokemonlist/>)