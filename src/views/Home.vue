<template>
  <div class="home">
    <img src="../assets/typewriter.jpg" alt="typemachine.png" class="img-fluid banniere w-100">
    <main>
      <div class="container-fluid corps">
        <div class="container inside">
          <div class="row d-flex flex-wrap justify-content-around contenu">
          <div class="card col-10 px-0 m-3">
            <img src="../assets/bd.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card col-10 px-0 m-3">
            <img src="../assets/jeunesse.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary wheat">Go somewhere</a>
            </div>
          </div>
          <div class="card col-10 px-0 m-3">
            <img src="../assets/thriller1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card col-10 px-0 m-3">
            <img src="../assets/biographie.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card col-10 px-0 m-3">
            <img src="../assets/fiction1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card col-10 px-0 m-3">
            <img src="../assets/SF.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>
.banniere {
    /* width: 100%; */
    margin-top: 18vh;
}


.corps {
    background-color: #FFF3DD;
}

.inside {
    background-color: white;
    width: 90% !important;
}
.contenu {
    height: 100%;
    padding-top: 3%;
}

.card {
    width: 80%;
    max-width: 300px !important;
    /* margin: 1em; */
    border: none !important;
}


.card-body {
    background-color: #FFF3DD;
}

.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
    background-color: wheat !important;
    color: black;
    border: none !important;
}

@media screen and (min-width:768px) {
    .card-img-top {
        max-height: 17vh;
    }
}

@media screen and (min-width:992px) {

    .banniere {
        margin-top: 0;
        height: 50vh !important;
        object-fit: cover;
        object-position: 0px 36%;
    }

    .card-img-top {
        max-height: 17vh;
    }
    
}
</style>
