<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="user in users" :key="user.id">
        <h4>{{ user.firs_name }}-{{ user.last_name }}</h4>
        <h6>{{ user.email }}</h6>
      </li>
    </ul>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nexPage">Siguiente</button>
  <span>Pagina: {{ currentPage }}</span>
</template>

<script>
import useUsers from "@/composable/useUsers";
export default {
  setup() {
    const { users, isLoading, currentPage, errorMessage, nexPage, prevPage } =
      useUsers();
    return { users, isLoading, currentPage, errorMessage, nexPage, prevPage };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 250px;
}
</style>
