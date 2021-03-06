
export const getPokemons = async (limit = 25, offset = 1) => {
    let data = {}
    for(let i = offset; i <= limit; i++) {
        const url =`https://pokeapi.co/api/v2/pokemon/${i}`
        const res = await fetch(url);
        const result = await res.json()
        if(result.status >= 400) {
            throw Error('Something wrong')
        }
        data[i] = result
        

    }
    return Object.values(data)
}


