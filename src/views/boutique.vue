<template>
  <div class="boutique">
      <img src="../assets/boutique.jpg" class="w-100 banniere">
      <p class="store m-0">La boutique</p>
      <main class="w-100 d-flex justify-content-center justify-content-lg-between">
          <nav class="desknav d-none d-lg-block col-lg-3">
                <h2>Catégories</h2>
                <ul class="catégories p-0 d-flex flex-column justify-content-around align-items-center">
                    <li><a href="">BD et Manga</a></li>
                    <li><a href="">Jeunesse</a></li>
                    <li><a href="">Policier et Thriller</a></li>
                    <li><a href="">Biographie</a></li>
                    <li><a href="">Littérature et Fiction</a></li>
                    <li><a href="">SF et Fantasy</a></li>
                </ul>
            </nav>
          <div class="center col-9">
              <h2 class="w-100 m-0 d-lg-none">Catégories</h2>
              <nav class="d-lg-none">
                  <ul class="catégories p-0 d-flex flex-column justify-content-around align-items-center">
                    <li><a href="#">BD et Manga</a></li>
                    <li><a href="#">Jeunesse</a></li>
                    <li><a href="#">Policier et Thriller</a></li>
                    <li><a href="#">Biographie</a></li>
                    <li><a href="#">Littérature et Fiction</a></li>
                    <li><a href="#">SF et Fantasy</a></li>
                </ul>
              </nav>
              <h2>BD et Manga</h2>
              <div class="container-fluid mb-3 mt-3">
                  <div class="row d-flex flex-row flex-nowrap overflow-scroll">
                      <product-card class="col-9 col-md-5 col-lg-3" lien='op1' titre='Invincible' auteur='Oda Eiichiro' editeur='Kana' prix='10€'/>
                      <product-card class="col-9 col-md-5 col-lg-3" titre="blabla"/>
                      <product-card class="col-9 col-md-5 col-lg-3"/>
                  </div>
              </div>
              <h2>Jeunesse</h2>
              <div class="container-fluid mb-3 mt-3">
                  <div class="row d-flex flex-row flex-nowrap overflow-scroll">
                      <product-card class="col-9 col-md-5 col-lg-3" lien='op1' titre='Invincible' auteur='Oda Eiichiro' editeur='Kana' prix='10€'/>
                      <product-card class="col-9 col-md-5 col-lg-3" titre="blabla"/>
                      <product-card class="col-9 col-md-5 col-lg-3"/>
                  </div>
              </div>
              <h2>Policier et Thriller</h2>
              <div class="container-fluid mb-3 mt-3">
                  <div class="row d-flex flex-row flex-nowrap overflow-scroll">
                      <product-card class="col-9 col-md-5 col-lg-3" lien='op1' titre='Invincible' auteur='Oda Eiichiro' editeur='Kana' prix='10€'/>
                      <product-card class="col-9 col-md-5 col-lg-3" titre="blabla"/>
                      <product-card class="col-9 col-md-5 col-lg-3"/>
                  </div>
              </div>
              <h2>Biographie</h2>
              <div class="container-fluid mb-3 mt-3">
                  <div class="row d-flex flex-row flex-nowrap overflow-scroll">
                      <product-card class="col-9 col-md-5 col-lg-3" lien='op1' titre='Invincible' auteur='Oda Eiichiro' editeur='Kana' prix='10€'/>
                      <product-card class="col-9 col-md-5 col-lg-3" titre="blabla"/>
                      <product-card class="col-9 col-md-5 col-lg-3"/>
                  </div>
              </div>
              <h2>Littérature et Fiction</h2>
              <div class="container-fluid mb-3 mt-3">
                  <div class="row d-flex flex-row flex-nowrap overflow-scroll">
                      <product-card class="col-9 col-md-5 col-lg-3" lien='op1' titre='Invincible' auteur='Oda Eiichiro' editeur='Kana' prix='10€'/>
                      <product-card class="col-9 col-md-5 col-lg-3" titre="blabla"/>
                      <product-card class="col-9 col-md-5 col-lg-3"/>
                  </div>
              </div>
              <h2>SF et Fantasy</h2>
              <div class="container-fluid mb-3 mt-3">
                  <div class="row d-flex flex-row flex-nowrap overflow-scroll">
                      <product-card class="col-9 col-md-5 col-lg-3" lien='op1' titre='Invincible' auteur='Oda Eiichiro' editeur='Kana' prix='10€'/>
                      <product-card class="col-9 col-md-5 col-lg-3" titre="blabla"/>
                      <product-card class="col-9 col-md-5 col-lg-3"/>
                  </div>
              </div>

          </div>
      </main>
  </div>
</template>

<script>
import productCard from '../components/productCard.vue'
export default {
    name:'boutique',
    components:{
        productCard,
    }
}
</script>

<style scoped>
.banniere {
    margin-top: 21vh;
    object-fit: cover;
    height: 40vh;
}
.store {
    height: 6vh;
    text-align: center;
    width: 40%;
    background-color: rgba(255, 243, 221, 58%);
    position: absolute;
    top: 36vh;
    left: 30vw;
    border-radius: 10px;
    font-size: 1.5em;
}
main {
    background-color: #FFF3DD;
}
.center {
    background-color: white;
}
h2 {
    background-color: #FFF3DD;
    text-align: center;
    font-weight: normal;
    padding-bottom: 1rem;
    padding-top: 1rem;
}
.overflow-scroll {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
.overflow-scroll::-webkit-scrollbar {
    display: none;
}
.catégories {
    list-style-type: none;
    height: 45vh;
    margin: 4vh 0px;
    font-size: 1.2em;
}
.catégories li {
    background-color: wheat;
    border-radius: 25px;
    text-align: center;
    width: 90%;
}
.catégories li a {
    color: black;
    text-decoration: none;
}


@media screen and (min-width:768px) {
    .store {
        font-size: 2em;
    }
    .catégories li {
        height: 10%;
        font-size: 1.5em;
    }
}

@media screen and (min-width: 992px) {
    .store {
        top: 44vh;
        left: 38vw;
        width: 20vw;
    }
    h2{
        background-color: wheat;
    }

    .banniere {
        margin-top:0;
        height: 50vh;
    }
    .productCard {
        height: 48vh;
    }
    .desknav {
        display: block;
        background-color: white;
        height: min-content;
        position: sticky;
        top: 10vh;
        border: 3px solid wheat;
    }
    .catégories li {
        height: 12%;
        font-size: 1.5em;
    }
    
}

</style>