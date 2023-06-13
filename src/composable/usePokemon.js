import axios from "axios"
import { ref } from "vue"




const usePokemon = (pokemonId = '1') => {

	const pokemon = ref()
	const isLoading = ref(false)
	const errorMessage = ref('')

	const searchPokemon = () => {
		isLoading.value = true
		pokemon.value = null
		try {
			const res = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
			pokemon.value = res.data
			errorMessage.value = null
			console.log('Pokemon id ', pokemonId);

			console.log(res.data);
			errorMessage.value = ''

		} catch (error) {
			errorMessage.value = 'No se puedo cargar ese pokemon'
		}

		isLoading.value = false

	}


	searchPokemon()
	return {
		pokemon,
		isLoading,
		errorMessage
	}
}

export default usePokemon