<template>
  <div class="connexion">
      <img src="../assets/connexion.jpg">
      <form class="d-flex flex-column align-items-center justify-content-around col-9 col-lg-3">
            <h2 class="identifiant">Identifiant</h2>
            <input type="text" id="Identifiant">
            <h2 class="mdp">Mot de passe</h2>
            <input type="text" id="Identifiant">
            
                <button type="button" class="btn btn-co col-6 col-lg-8">Se connecter</button>
            
            <a href="#" class="fgMdp">Mot de passe oublié ?</a>
            
                <button type="button" class="btn btn-primary col-6 col-lg-8">Créer un compte</button>
            
        </form>
  </div>
</template>

<script>
export default {
    name:"connexion",

}
</script>

<style scoped>
.connexion img {
    width: 100%;
    margin-top: 21vh;
}
form {
    background-color: rgba(255, 243, 221, 0.63);
    /* width: 80vw; */
    height: 62vh;
    border-radius: 15px;
    position: absolute;
    top: 32vh;
    left: 11vw;   
}
form input {
    width: 70%;
    border-radius: 10px;
    margin-top: -7%;

}
/* .btn {
    width: 50vw;
} */
.btn-primary {
    background-color: rgba(3, 152, 158, 0.79);
    border:none;
}
.btn-co {
    background-color: rgba(245, 222, 179, 0.90);
}
@media screen and (min-width: 768px){
    form input {
        margin-top: -4%;
        height: 7%;
    }
    form h2 {
        font-size: 2em;
        font-weight: bold;
    }
    .btn {
        height: 6vh;
        font-size: 2em;
    }
    .fgMdp {
        font-size: 1.5em;
    }
}

@media screen and (min-width:992px) {
   .connexion img{
        margin-top: unset;
        object-fit: cover;
        height: 85vh;
        object-position: 0px -1000px;
    }
    form h2 {
        font-size: 1.5em;
        font-weight: normal;
    }
    .btn {
        font-size: 1.5em;
    }
    .fgMdp {
        font-size: 1em;
    }
}
</style>