<template>
  <div class="mt-5 mb-5">
      <b-container>
      <h1 class= "text-center">This is the title</h1>
      <hr>
      <b-row>
          <b-col cols='12' md='6'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, dolor, adipisci, a fuga eos quo perferendis distinctio doloribus modi ipsam odio. Sit debitis alias qui, aliquid facere aspernatur libero laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt dolorem commodi sed voluptatem voluptas, nulla distinctio assumenda necessitatibus reiciendis impedit consectetur eius expedita repellendus pariatur asperiores sequi itaque porro? Laborum!</p>
          </b-col>
          <b-col cols='12' md='6'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, dolor, adipisci, a fuga eos quo perferendis distinctio doloribus modi ipsam odio. Sit debitis alias qui, aliquid facere aspernatur libero laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vero provident maxime doloribus ratione quas? Dignissimos omnis, vitae natus doloremque laboriosam iusto, in exercitationem voluptatem magnam amet qui dicta accusantium!</p>
          </b-col>
            <b-col cols="12" md="12">
                <b-card
                    img-src="https://picsum.photos/600/200/?image=40"
                >
                    <medium class="text-muted">Autor: Sebastian Losada</medium>
                </b-card>
                
            </b-col>
          <b-col cols='12' md='6'>
              <hr>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, dolor, adipisci, a fuga eos quo perferendis distinctio doloribus modi ipsam odio. Sit debitis alias qui, aliquid facere aspernatur libero laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt dolorem commodi sed voluptatem voluptas, nulla distinctio assumenda necessitatibus reiciendis impedit consectetur eius expedita repellendus pariatur asperiores sequi itaque porro? Laborum!</p>
          </b-col>
          <b-col cols='12' md='6'>
              <hr>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, dolor, adipisci, a fuga eos quo perferendis distinctio doloribus modi ipsam odio. Sit debitis alias qui, aliquid facere aspernatur libero laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vero provident maxime doloribus ratione quas? Dignissimos omnis, vitae natus doloremque laboriosam iusto, in exercitationem voluptatem magnam amet qui dicta accusantium!</p>
          </b-col>
      </b-row>
      <b-button  class="text-center mt-2" variant="success" :to="{name:'Home'}">Volver</b-button>
      </b-container>
  </div>
</template>

<script>
export default {
    name:'Post'
}
</script>