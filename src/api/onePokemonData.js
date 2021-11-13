export const getOnePokemon = async (id) => {
    
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const result = await res.json()
    if(result.status >= 400) {
        throw Error('Something wrong')
    }
    return result
        
}