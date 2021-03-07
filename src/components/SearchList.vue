<template>
    <div style="background-color: #292b2c;">
        <q-layout >
            <q-page-container class="text-white bg-dark ">
                <div id="list" class="q-pa-lg">
                    <div >
                      <q-btn  label="Cerrar" icon="close" v-close-popup  class="absolute-top-right text-white" style="bg-transparent" border-style="none" >
                      </q-btn>
                      <div class="text-center text-h4 text-green-14 text-weight-bolder q-pa-none">Encuentrala por:</div>
                    </div>
                <q-input class=" bg-white text-dark " filled label="Artistas o Título" v-model="nuevaCancion" v-on:keyup.enter="agregarCancion" >
                <template v-slot:append>
                  <q-icon name="search" color="green-14" @click="agregarCancion"/>
                </template>
                </q-input>
                <div >
                <div v-for="(item, index) of Canciones">
                    <div >
                    <q-banner class="q-pa-none"  dark borderless >
                    <q-list >
                        <q-intersection v-for="index2 in 1" :key="index2" transition="flip-right"  >
                    <q-item clickable class="q-pa-none">
                      <p class="q-pa-sm"> <br>{{item.Puntos}}</p> 
                        <q-item-section avatar>
                        <q-avatar square size="45px">
                            <img src="https://t2.uc.ltmcdn.com/images/4/5/0/como_descargar_musica_de_spotify_actualizado_25054_600.jpg">
                        </q-avatar>
                        </q-item-section>
                        <q-item-section>
                        <q-item-label>{{item.Titulo}}</q-item-label>
                        <q-item-label caption class="text-grey-3">{{item.Artista}}</q-item-label>
                        </q-item-section>
                        <q-space />
                        <q-menu>
                        <!-- <q-btn-dropdown dropdown-icon="more_vert"> -->
                        <q-list style="background-color: #191414;" class="text-white">

                            <q-item clickable v-close-popup @click="Postular(index)">
                            <q-item-section avatar>
                                <q-avatar icon="favorite_border" style="background-color: #1DB954;" text-color="white" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Postular</q-item-label>
                                <q-item-label caption class="text-green-13" >para que salga en pantalla.</q-item-label>
                            </q-item-section>
                            </q-item>

                            <q-item clickable v-close-popup @click="Quitar">
                            <q-item-section avatar>
                                <q-avatar icon="favorite_border" color="grey-6" text-color="white" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Quitar</q-item-label>
                                <q-item-label caption class="text-grey-6" > para no escucharla.</q-item-label>
                            </q-item-section>
                            </q-item>

                        </q-list>
                        <!-- </q-btn-dropdown> -->
                        </q-menu>
                    </q-item>
                    </q-intersection>
                    </q-list>
                    </q-banner>
                </div>
            </div>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import Hijo from 'components/Hijo.vue';

export default {
  name: 'SearchList',
  component:{ Hijo },
 data () {
    return {
      Boton: `Solicitala `,
      Canciones: [],
      nuevaCancion: '',
      sheet: true,
      // Puntos: 0,
    }
  },
  
  methods: {
    agregarCancion: function(){
      // console.log('diste click', this.nuevaCancion);
      this.Canciones.push({
        Titulo: this.nuevaCancion,
        Artista: this.nuevaCancion,
        Imagen: this.nuevaCancion,
        Estado: false,
        Puntos: 0,
      });
      console.log(this.Canciones);
      this.nuevaCancion = '';
    },

    Postular: function(index) {
      //this.Canciones[index] = Puntos+1;
      this.Canciones[index].Puntos = +1;
      // this.Canciones[index].Estado = true;
      // console.log('editar ', index);
    },
    Quitar: function(index) {
       this.Canciones.splice(index,1);
    },
    
  }
}
</script>
<style>

</style>