<template>
  <div class="bg-grey-10">
    <div class="row items-center q-gutter-md ">
      <q-responsive :ratio="4" class="col">
        <!-- aqui vendria el codigo que se genera para compartir a los clientes y que los direcciona a Usser -->
        <div class="rounded-borders text-white flex flex-center" style="background-color: #ff00ffcc;">
          CODIGO: 5DG4S7
        </div>
      </q-responsive>

      <q-responsive :ratio="6" class="col">
        <!-- Aqui vendria complemento para interaccion del notificacion de los votos de los clientes  -->
        <div class="rounded-borders text-white flex flex-center" style="background-color: #329c1f;">
        Notificaciones con interaccion
          
        </div>
      </q-responsive>
      <q-responsive :ratio="4" class="col">
        <img src="https://cdn2.downdetector.com/static/uploads/logo/Spotify_Logo_RGB_Green.png">
      </q-responsive>
    </div>

    <br>


    <div class="row items-start q-gutter-md bg-transparent text-white">
        <q-responsive :ratio="16/9" class="col">
        <PlayList/>
        </q-responsive>
      <q-responsive :ratio="3.8" class="col">

        <img src="https://media.istockphoto.com/vectors/audio-player-mockup-in-gradient-background-and-flat-icons-music-with-vector-id1222750064?b=1&k=6&m=1222750064&s=170667a&w=0&h=XFmv33aL-dVxyvskyJnIIO-x8bB8f-EHfBfPWPe8ESw=">
        <br>
        <br>

        <div class="rounded-borders text-white flex flex-center" style="background-color: #329c1f;">
          Instructivo 
        </div>
      </q-responsive>
    </div>

    <br>


    <!-- <div class="row items-start q-gutter-md">
      <q-responsive :ratio="10" class="col">
        <div class="rounded-borders text-white flex flex-center" style="background-color: #ff00ffcc;">
          PUBLICIDAD
        </div>
      </q-responsive>
    </div> -->
  </div>
</template>

<script>
import PlayList from 'components/PlayList.vue'

export default {
  name: 'Player',
  components: { PlayList },
  data () {
    return {
    }
  }
}
</script>