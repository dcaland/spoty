<template>
  <div style="background-color: #292b2c;" class="text-center text-white ">
    <q-layout >
      <!-- Inicio componente del menu de perfil de usuario con componente lista-->
      <Profile/>
      <!-- Final componente del menu de perfil de usuario con componente lista-->      
    </q-layout>
  </div>
</template>

<script>
import Profile from 'components/Profile.vue'

export default {
  name: 'Administrador',
  components: { Profile },
  data () {
    return {

    }
  }
}
</script>