<template>
  <div class="mt-5">
    <b-container>

        <h1 class="text-center">¿Qué desea hacer?</h1>
        <hr>
        <div class=" mt-5 p-5">

       
        <b-row>
          <b-col cols='12' md='3'>
              <b-card bg-variant="info" text-variant="white" header="Crear Autor" class="text-center">
                 <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                 <b-button  class="text-center mt-2" variant="success" :to="{name:'Crear-autor'}">¡Vamos!</b-button>
              </b-card>
          </b-col>
          <b-col cols='12' md='3'>
              <b-card bg-variant="warning" text-variant="white" header="Crear Post" class="text-center">
                 <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                 <b-button  class="text-center mt-2" variant="success" :to="{name:'Crear-post'}">¡Vamos!</b-button>
              </b-card>
          </b-col>
          <b-col cols='12' md='3'>
              <b-card bg-variant="secondary" text-variant="white" header="Editar un post" class="text-center">
                 <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                 <b-button  class="text-center mt-2" variant="success" :to="{name:'Editar-post'}">¡Vamos!</b-button>
              </b-card>
          </b-col>
          <b-col cols='12' md='3'>
              <b-card bg-variant="danger" text-variant="white" header="Eliminar un post" class="text-center">
                 <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                 <b-button  class="text-center mt-2" variant="success" :to="{name:'Eliminar-post'}">¡Vamos!</b-button>
              </b-card>
          </b-col>
        </b-row>
         </div>
    </b-container>
    </div>
</template>
