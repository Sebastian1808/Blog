<template>
  <div id="app bg-dark">
      <b-navbar toggleable="md" type="dark" variant="dark">
        
        <b-container>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav_collapse" is-nav>
        

        <b-navbar-nav>
                  <b-nav-item :to="{name:'Home'}"><img src="@/assets/Icon.png" height="100" width="180" ></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="md" class="mr-md-4" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 " type="submit">Search</b-button>
          </b-nav-form>
          
        </b-navbar-nav>
      
          
           <template>
            <div class="h2 p-2" >
              <a href="https://www.facebook.com/sebastian.losada.184" target="_blank"><b-icon icon="facebook" variant="info"></b-icon></a>
            </div>
            <div class="h2 p-2">
              <a href="https://www.instagram.com/sebaslg16/" target="_blank"><b-icon icon="instagram" variant="white"></b-icon></a>
            </div>
            <div class="h2 p-2">
              <a href="https://twitter.com/08_losada" target="_blank"><b-icon icon="twitter" variant="info"></b-icon></a>
            </div>
            <div class="h2 p-2">
              <a href="https://github.com/Sebastian1808" target="_blank"><b-icon icon="github" variant="white"></b-icon></a>
            </div>
          </template>
          </b-collapse>
          
        </b-container>
       
          

      </b-navbar>
    

  <b-container>
      <router-view/>
  </b-container>

  </div>

  
</template>
