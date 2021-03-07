<template>
    <div style="background-color: #292b2c;" class="text-dark text-left ">
    <q-layout >
      <q-header reveal elevated style="background-color: #292b2c;">
        <q-toolbar>
            
          <q-toolbar-title class="q-ml-lg">
              SpotifyRank!</q-toolbar-title>
          <!-- <q-btn flat @click="drawer = !drawer" round dense icon="music_video" /> -->
          <div class="q-mr-md">
            <q-spinner-audio
              color="green-13"
              size="2em"
              flat 
              @click="drawer = !drawer" 
              round dense
            />
            <q-tooltip :offset="[0, 1]">Menu</q-tooltip>
          </div>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
        side="right"
        >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>
              <q-item-section>
                Cuenta
              </q-item-section>
            </q-item>
            <q-item  clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>
              <q-item-section>
                Configuración
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="help_outline" />
              </q-item-section>
              <q-item-section>
                Ayuda
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="exit_to_app" />
              </q-item-section>
              <q-item-section >
                Salir
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        <q-img class="absolute-top" src="https://image.freepik.com/foto-gratis/plantilla-diseno-simple-minimalista-logotipo-spotify-copy-space-3d_1379-4878.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://thumbs.dreamstime.com/b/retrato-de-rottweiler-en-traje-86699267.jpg">
            </q-avatar>
            <div class="text-weight-bold">Administrador</div>
            <div>Tovi</div>
          </div>
        </q-img>
      </q-drawer>
      <br><br><br>
      <Modal/>
      <List/>
    </q-layout >
  </div>
</template>
<script>
import List from 'components/List.vue'
import Modal from 'components/Modal.vue'

export default {
  name: 'Profile',
  components: {  Modal, List },
 data () {
    return {
      drawer: false,
      
    }
  }
}
</script>