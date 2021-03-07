<template>
    <div>
        <div class="q-pa-md">
            <q-parallax :height="100" :speed="0.5">
            <template v-slot:media>
                <img src="https://pbs.twimg.com/media/Di-Sd3pVsAA6gCl.jpg">
            </template>
            <h2 class="text-white">Ranking</h2>
            </q-parallax>
        </div>


        <div class="text-white">
           
            <!-- <q-banner class="q-pa-none"  dark borderless >
            <q-list >
                <q-intersection v-for="index2 in 1" :key="index2" transition="flip-right"  >
            <q-item clickable class="q-pa-none">
                <p class="q-pa-sm"> <br>puntos</p> 
                <q-item-section avatar>
                <q-avatar square size="45px">
                    <img src="https://t2.uc.ltmcdn.com/images/4/5/0/como_descargar_musica_de_spotify_actualizado_25054_600.jpg">
                </q-avatar>
                </q-item-section>
                <q-item-section>
                <q-item-label>titulo</q-item-label>
                <q-item-label caption class="text-grey-3">artista</q-item-label>
                </q-item-section>
                <q-space />
            </q-item>
            </q-intersection>
            </q-list>
            </q-banner> -->
        </div>



    </div>
</template>
<script>

export default {
     name: 'list',
  data() {
    return {
      sheet: true,
    };
  },
  methods: {
    
  }
}
</script>