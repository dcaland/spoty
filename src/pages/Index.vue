<template>
  <div :style="myStyle" id="wrapper">
    <q-layout  container style="height: 625px" class="shadow-2">

      <div class="row items-center q-gutter-md ">
        <!-- <q-responsive :ratio="4" class="text-white col" >
          <q-btn to="/Usuarios" label="Usuarios"  style="background-color: #1DB954;"/>
        </q-responsive> -->

        <q-responsive :ratio="4" class="text-white col" >
          <q-btn to="/Player" label="Principal"   style="background-color: #1DB954;" />
        </q-responsive>
        
        <q-responsive :ratio="4" class="text-white col" >
          <q-btn to="/Administrador" label="Administrador"   style="background-color: #1DB954;" />
        </q-responsive>
      </div>

    <q-footer class="bg-transparent">
        <q-toolbar  class="bg-dark">
          <q-toolbar-title></q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      autoplay: true,
      slide: 'first',
      myStyle:{
            backgroundColor:"#191414" 
            }
    }
  }
}
</script>

