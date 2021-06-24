<template>
  <div class="productCard d-flex flex-column align-items-center justify-content-around">
      <img src="../assets/op1.jpg">
      <h3>{{titre}}</h3>
      <p>{{auteur}}</p>
      <p>{{editeur}}</p>
      <p>{{prix}}</p>
      <div class="dispo d-flex align-items-center justify-content-around" v-if="dispo">
        <div class="circle"></div>
        <p class="m-0">disponible</p>
       </div>
       <div class="dispo d-flex align-items-center justify-content-around" v-else>
        <div class="circleRed"></div>
        <p class="m-0">indisponible</p>
       </div>
       <button type="button" class="btn btn-primary">Ajouter au panier</button>
  </div>
</template>

<script>
export default {
    name:"productCard",
    data(){
        return {
            publicPath: process.env.BASE_URL,
            dispo:true,
        }
    },
    props:{
        lien:String,
        titre:String,
        auteur:String,
        editeur:String,
        prix:String,
        books:Array,
    },
    methods:{
        
    },
}
</script>

<style scoped>
p{
    margin:0
}
img{
    height: 50%;
    width: 70%;
    border-radius: 15px;
    margin-top: 1vh;
}
.productCard {
    background-color: #FFF3DD;
    margin-inline: 5%;
    border-radius: 15px;
}
.dispo {
    width: 25vw;
}
.circle {
    height: 7px;
    width: 7px;
    background-color: #4DB00D;
    border-radius: 50%;
}
.circleRed {
    height: 7px;
    width: 7px;
    background-color: red;
    border-radius: 50%;
}
.btn-primary{
    background-color: wheat;
    color:black;
    border: none;
}

@media screen and (min-width: 768px) {
    .dispo {
        width: 11vw;
    }
}

@media screen and (min-width:992px) {
    .dispo {
        width: 7vw;
    }
}

</style>