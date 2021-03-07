<template>
  <div class="q-pa-md " >
    <q-btn  rounded icon-right=" search" @click="medium = true" class="text-center text-white full-width" label="Busca tu Canción!" style="background-color: #1DB954;">
    </q-btn>
    <q-dialog v-model="medium">
      <q-card style="width: 700px; max-width: 90vw;">
          <SearchList/>
      </q-card>
    </q-dialog>
  </div>

</template>
<script>
import SearchList from 'components/SearchList.vue'

export default {
     name: 'Modal',
     components: { SearchList },
     data () {
    return {
      medium: false,
      confirm: false,
      prompt: false,

      address: ''
    }
  }
}
</script>

