<template>
	<h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
    <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

    <template>
        <h3>{{ pokemon }}</h3>
    </template>
</template>

<script>
import usePokemon from '@/composable/usePokemon';
import { useRoute } from 'vue-router'
export default {
 setup() {
  const route = useRoute();
  const idPokemon = route.params.id;

  const { pokemon, errorMessage, isLoading } = usePokemon(idPokemon);
  
  return { idPokemon, pokemon, errorMessage, isLoading  };
 }
}
</script>

<style>

</style>