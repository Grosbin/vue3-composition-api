<template>
  <h2>Espere por favor...</h2>
  <h2>Usuarios</h2>
  <h5>Error en la carga</h5>

  <div>
    <ul>
      <li>
        <h4>Nombre de la persona</h4>
        <h6>email@gmail.com</h6>
      </li>
    </ul>
  </div>

  <button>Atras</button>
  <button>Siguiente</button>
  <span>Pagina: 10</span>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const users = ref([]);
    const isLoading = ref(true);
    const currentPage = ref(1);
    const errorMessage = ref("");

    const getUsers = async (page = 1) => {
      if (page <= 0) page = 1;

      isLoading.value = true;
      const { data } = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );

      if (data.data.length > 0) {
        users.value = data.data;
        currentPage.value = page;
      } else {
        errorMessage.value = "No hay usuarios";
      }
    };
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
