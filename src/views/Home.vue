<template>

  <div class= "mb-5">
      <hr>
      <h1 class="text-center"> ¡Nustros articulos! </h1>
      <hr>
     <b-card-group columns>
    <b-card
      title="¿Lorem ipsum dolor?"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum itaque optio corrupti eius facilis accusantium voluptates fugit officiis laudantium, repellendus ad. Totam at atque corporis assumenda. Perferendis, dicta et!
      </b-card-text>
      <b-button  variant="success" :to="{name:'Post'}">Leer articulo...</b-button>
      <template #footer>
        <small class="text-muted">Autor: Sebastian Losada </small>
      </template>
    </b-card>
    
    <b-card bg-variant="info" text-variant="white">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante!</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </b-card>

    <b-card header="Quote">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum vel nisi, quaerat libero sapiente dignissimos blanditiis. Labore facere tenetur sint ullam dolor.</p>
        <footer class="blockquote-footer">
          Por: <cite title="Source Title">Sebastian Losada</cite>
        </footer>
      </blockquote>
    </b-card>

    <b-card title="Lorem" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
      <b-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quibusdam cum illum. Iure, soluta error dolorem ipsa autem hic iusto, atque asperiores provident harum tempore nulla quibusdam optio.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Autor: Sebastian Losada</small>
      </template>
      <b-button  variant="success" :to="{name:'Post'}">Leer articulo...</b-button>
    </b-card>

    <b-card bg-variant="warning" text-variant="white">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Nemo quibusdam cum illum. Iure, soluta</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </b-card>

    <b-card>
      <b-card-title>Lorem</b-card-title>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
    </b-card>

    <b-card img-src="https://picsum.photos/400/400/?image=42" img-alt="Image" overlay></b-card>
    <b-card>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-button  variant="success" :to="{name:'Post'}">Leer articulo...</b-button>
      <template #footer>
        <small class="text-muted">Autor: Sebastian Losada</small>
      </template>
    </b-card>
    </b-card>
  </b-card-group>
  
   <h2 class="text-center mt-5"><hr>¡El destacado de la semana!</h2><hr><br>
    
        <b-row>
            <b-col cols="12" md="12">
                <b-card
                    img-src="https://picsum.photos/600/150/?image=40"
                    img-top
                    title="Lorem"
                >
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, eligendi nesciunt perspiciatis culpa aspernatur odit, suscipit qui saepe in ipsam aliquid, minus odio eum recusandae doloremque quidem optio iste voluptatum?</p>
                <b-button  variant="success" :to="{name:'Post'}">Leer articulo...</b-button>
                <template #footer>
                    <small class="text-muted">Autor: Sebastian Losada</small>
                </template>
                </b-card>
                
            </b-col>
        </b-row>  

        <b-row class="mt-5">
            <b-col cols='12' md='4'>
                <b-card
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-top
                    title="Lorem"
                >
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, eligendi nesciunt perspiciatis culpa aspernatur odit, suscipit qui saepe in ipsam aliquid, minus odio eum recusandae doloremque quidem optio iste voluptatum?</p>
                <b-button  variant="success" :to="{name:'Post'}">Leer articulo...</b-button>
                <template #footer>
                    <small class="text-muted">Autor: Sebastian Losada</small>
                </template>
                </b-card>
                    

            </b-col>
        
            <b-col cols='12' md='4'>
                <b-card
                    img-src="https://placekitten.com/600/300"
                    img-top
                    title="Lorem"
                >
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, eligendi nesciunt perspiciatis culpa aspernatur odit, suscipit qui saepe in ipsam aliquid, minus odio eum recusandae doloremque quidem optio iste voluptatum?</p>
                <b-button  variant="success" :to="{name:'Post'}">Leer articulo...</b-button>
                <template #footer>
                    <small class="text-muted">Autor: Sebastian Losada</small>
                </template>
                </b-card>
                    

            </b-col>
        
            <b-col cols='12' md='4'>
                <b-card
                    img-src="https://placekitten.com/600/300?image=10"
                    img-top
                    title="Lorem"
                >
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, eligendi nesciunt perspiciatis culpa aspernatur odit, suscipit qui saepe in ipsam aliquid, minus odio eum recusandae doloremque quidem optio iste voluptatum?</p>
                <b-button  variant="success" :to="{name:'Post'}">Leer articulo...</b-button>
                <template #footer>
                    <small class="text-muted">Autor: Sebastian Losada</small>
                </template>
                </b-card>
            </b-col>
            
        </b-row>
           
  </div>
</template>

<script>
export default {
    name: 'home'
}
</script>
