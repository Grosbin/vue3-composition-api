<template>
    <h1>Buscar Pokemon</h1>
    <form @submit.prevent="onSubmit">
        <input
            type="number"
            placeholder="Numero de pokemones"
            ref="textInput"
            v-model="pokemonId"
        />
    </form>
    <br />
    <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const pokemonId = ref(1)
        const textInput = ref()

        onActivated(() => {
            console.log('onActivated')

            textInput.value.select()
        })

        const onSubmit = () => {
            console.log('submit ', pokemonId.value)
            router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
        }

        return { pokemonId, onSubmit, textInput }
    },
}
</script>

<style></style>
