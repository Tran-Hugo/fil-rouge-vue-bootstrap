<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <header class="w-100">
      <div class="col-12 d-none d-lg-flex justify-content-end min-menu">
        <ul class="col-2 d-flex p-0 justify-content-around">
          <li>
            <a href="pages/inscription.html">S'inscrire</a>
          </li>
          <li>
            <a href="#">Se connecter</a>
          </li>
        </ul>
      </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
          <!-- <div class="col-lg-12 d-none d-lg-flex hidden">
            <div class="col-4 d-flex">
              <ul></ul>
            </div>
          </div> -->
            <div class="container-fluid justify-content-around p-0">
              <button @click="toggleBarre = !toggleBarre" class="navbar-toggler col-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars burger"></i>
              </button>
              <!-- <a class="navbar-brand col-8 col-lg-2 d-flex justify-content-center" href="#"> -->
                <router-link class="navbar-brand col-8 col-lg-2 d-flex justify-content-center" to="/">
                <img src="@/assets/logo.svg" alt="logo.svg">
                </router-link>
                <!-- </a> -->
              <div class="barre col-12 d-lg-none" v-bind:class="{ 'd-none' : toggleBarre}">
              </div>  
              <h1 class="d-none d-lg-block">La Notule</h1>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-lg-none">
                  <li class="nav-item">
                    
                      <router-link class="nav-link active" to="#">
                      Se connecter
                      </router-link>
                      
                  </li>
                  <li class="nav-item">
                    <!-- <a class="nav-link" href="pages/inscription.html"> -->
                    <router-link class="nav-link" to="/inscription">
                    S'inscrire
                    </router-link>
                    <!-- </a> -->
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Panier(0)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">La Boutique</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contactez-nous</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">À Propos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Mentions Légales</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">F.A.Q</a>
                  </li>
                </ul>
                
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Rechercher</button>
                </form>
              </div>
            </div>
          </nav>  
          
    </header>
    <div class="barre2 col-12 d-none d-lg-flex justify-content-center">
      <ul class="d-none d-lg-flex justify-content-between p-0 w-75">
      <li class="nav-item">
        <a class="nav-link" href="#">Accueil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">La Boutique</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contactez-nous</a>
      </li>
      
    </ul>
  </div>
  <router-view/>
  <footer class="container-fluid">
      <div class="row d-flex justify-content-between">
        <ul class="nav flex-column col-6 col-lg-8 flex-lg-row">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">La Boutique</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contactez nous</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">À Propos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mentions légales</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">F.A.Q</a>
          </li>
          
        </ul>
        <div class="col-4 col-lg-2 d-flex flex-column justify-content-between">
          <a href="#" class="d-lg-none">retour en haut</a>
          <div class="icone">
            <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      toggleBarre : false,
    }
  },
  methods: {
    
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400&display=swap');

* {
    font-family: "Pacifico";
}



/* #region header*/
header {
    position: fixed;
    z-index: 10;
    top: 0;
}

.hidden {
    background-color: red;
}

.fas.fa-bars {
    font-size: 3em;
    color: #fa8072;
}

header nav .container-fluid a img {
    width: 100%;
    height: 12vh;
    margin-bottom: 5%;
}

.navbar-toggler {
    border: none !important;
}

.navbar-light .navbar-nav .nav-link {
    color: #fa8072 !important;
}

.form-control {
    color: #03989e !important;
}

.btn-outline-success {
    color: #03989e !important;
    border-color: #03989e !important;
}

.barre {
    height: 7vh;
    width: 100%;
    background-color: wheat;
    
}
.navbar-light .navbar-toggler {
    color: rgb(248 249 250) !important;
}

footer {
    background-color: wheat;
}

footer .row ul li a {
    color: black !important;
}

footer .col-4 a {
    color: black;
    text-decoration: none;
}

footer .col-4 {
    height: 15vh;
    margin-top: 1em;
}

.fab {
    font-size: 1.9em;
}
  


@media screen and (min-width: 768px) {
    
    .fas.fa-bars {
        font-size: 6em;
    }

    .navbar-light .navbar-nav .nav-link {
        font-size: 1.7em;
    }

    .form-control {
        height: 6vh;
        font-size: 1.5em !important;
    }

    footer .row ul li a {
        font-size: 1.5em;
    }

    footer .col-4 a {
        font-size: 1.5em;
    }

}

@media screen and (min-width:992px) {
    /* .navbar-nav {
        display: none;
    } */
    header {
        position: static;
    }

    .min-menu {
        background-color: #f8f9fa;
        height: 3vh;
    }

    .min-menu ul {
        list-style-type: none;
    }

    .min-menu ul li a {
        color: black;
        text-decoration: none;
        font-size: 1.1em;
    }

    /* #nav a.router-link-exact-active {
        color: salmon;
    } */

    .navbar-light .navbar-nav .nav-link {
        font-size: 1.5em;
    }

    .navbar-collapse {
        flex-grow: 0 !important;
    }

    h1 {
        color: salmon;
        font-size: 4em !important;
    }

    .form-control {
        height: unset;
        font-size: 1em !important;
    }

    .barre2 {
        height: 5vh;
        width: 100%;
        background-color: wheat;
    }

    .barre2 ul {
        list-style-type: none;
    }

    .barre2 ul li a {
        color: black;
        font-size: 1.5em;
    }

    .barre2 ul li a:hover {
        color: salmon !important;
    }

    footer .col-4 {
        height: unset;
    }

    .fab.fa-facebook {
        color: #2d88ff;
    }

    .fab.fa-instagram {
        background: #d6249f;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .fab.fa-twitter {
        color: #1da1f2;
    }
    
}

/*#endregion*/
</style>
