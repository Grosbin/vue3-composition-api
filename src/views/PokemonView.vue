<template>
    <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
    <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

    <template v-else>
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" alt="" />
        <br />
        <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
    </template>
</template>

<script>
import usePokemon from '@/composable/usePokemon'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { watch } from 'vue'
export default {
    setup() {
        const route = useRoute()
        const { pokemon, errorMessage, isLoading, searchPokemon } = usePokemon(
            route.params.id
        )

        watch(
            () => route.params.id,
            () => searchPokemon(route.params.id)
        )

        onBeforeRouteLeave(() => {
            const answer = window.confirm('¿Estas seguro de salir?')

            if (!answer) return false
        })

        return { errorMessage, isLoading, pokemon }
    },
}
</script>

<style></style>
