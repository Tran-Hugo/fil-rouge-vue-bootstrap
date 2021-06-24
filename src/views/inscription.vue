<template>
  <div class="about">
    <main>
        <div class="container-fluid w-100 d-flex justify-content-center align-items-center titre m-0">
            <h2 class="col-4">Inscription</h2>
        </div>
        <div class="container-fluid w-100 d-flex justify-content-center align-items-center wheat">
            <form @submit="submit" class="col-10 col-lg-5 py-5 my-4 formulaire">
              <h1 v-if="isValid">Vous êtes inscrit !</h1>
                <div class="mb-3 mx-2 px-4">
                    <label for="exampleFormControlInput1" class="form-label">Prénom</label>
                    <input v-model="prénom" type="text" class="form-control prenom" v-bind:class="{'is-invalid' : errorPrénom}" placeholder="Prénom">
                    <erreur v-if="errorPrénom" msg="minimum 2 caractères"/>
                  </div>
                  <div class="mb-3 mx-2 px-4">
                    <label for="exampleFormControlInput1" class="form-label">Nom</label>
                    <input v-model="nom" type="text" class="form-control nom" v-bind:class="{'is-invalid' : errorNom}" placeholder="Nom">
                    <erreur v-if="errorNom" msg="minimum 2 caractères"/>
                  </div>
                  <div class="mb-3 mx-2 px-4">
                    <label for="exampleFormControlInput1" class="form-label">Adresse</label>
                    <!--ajouter la classe is-invalid !!!&-->
                    <input @blur="attention" v-model="adresse" type="text" class="form-control adresse" v-bind:class="{'is-invalid' : adresseWrong}" placeholder="Adresse">
                    <avertissement v-if="adresseError" msg="Votre adresse ne comporte pas de numéro de rue"/>
                  </div>
                  <div class="mb-3 mx-2 px-4">
                    <label for="exampleFormControlInput1" class="form-label">Ville</label>
                    <input v-model="ville" type="text" class="form-control ville"  v-bind:class="{'is-invalid' : errorVille}" placeholder="Ville">
                    <erreur v-if="errorVille" msg="minimum 2 caractères"/>
                  </div>
                  <div class="mb-3 mx-2 px-4">
                    <label for="exampleFormControlInput1" class="form-label">Code postal</label>
                    <input v-model="codePostal" type="number" class="form-control codePostal" v-bind:class="{'is-invalid' : cpShort || cpLong }" placeholder="Code postal"/>                    
                    <erreur v-if="cpShort" msg="minimum 5 chiffres"/>
                    <erreur v-if="cpLong" msg="maximum 5 chiffres"/>                    
                  </div>
                  <div class="mb-3 mx-2 px-4">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input @input="testEmail" v-model="email" type="email" class="form-control email" v-bind:class="{'is-invalid' : errorEmail}" placeholder="Email">              
                    <erreur v-if="emailInvalid" msg="Veuillez entrer un email valide"/>
                  </div>
                  <div class="mb-3 mx-2 px-4">
                    <label for="exampleFormControlInput1" class="form-label">Mot de passe</label>
                    <input @focus="showReg" @blur="hideReg" v-model="motDePasse" type="password" class="form-control motDePasse" placeholder="Mot de passe" v-bind:class="{'is-invalid' : passwordWrong}" >
                    <avertissement v-if="focus" msg='minimum 8 caractères, 1 Majuscule, 1 minuscule et 1 caractère spécial "!@#$%^&*"'/>
                  </div>
                  <div class="mb-3 mx-2 px-4">
                    <label for="exampleFormControlInput1" class="form-label">Confirmez le mot de passe</label>
                    <input v-model="motDePasseConfirm" type="password" class="form-control motDePasseConfirm" placeholder="Confirmez le mot de passe" v-bind:class="{'is-invalid' : nonidenticalPassword || passwordWrong}">
                    <p class="d-none error confirmPassword">Ne correspond pas au mot de passe indiqué</p>
                    <erreur v-if="nonidenticalPassword" msg="Ne correspond pas au mot de passe indiqué"/>
                  </div>
                  <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary mx-4 inscrire">S'inscrire</button>
                  </div>
              
                  
                </form>
        </div>

    </main>
    
  </div>
</template>

<script>
import erreur from '../components/erreur.vue'
import avertissement from '../components/avertissement.vue'


export default {
  name:'inscription',
  components: {
    erreur,
    avertissement,
  },
  data(){
    return {
      //nom et prénom
      prénom: '',
      errorPrénom : false,
      nom: '',
      errorNom : false,
      //adresse
      adresse:'',
      adresseError: false,
      adresseWrong: false,
      ville:'',
      errorVille: false,
      codePostal:"",
      cpShort: false,
      cpLong: false,
      //email
      email:"",
      regEmail: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      emailInvalid: false,
      errorEmail: false,
      //mot de passe
      regPassword: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})"),
      motDePasse:'',
      passwordWrong:false,
      focus:false,
      motDePasseConfirm:'',
      nonidenticalPassword:false,
      //Validation
      prenomValid: false,
      nomValid: false,
      adresseValid: false,
      villeValid:false,
      codePostalValid:false,
      emailValid:false,
      motDePasseValid:false,
      motDePasseConfirmValid:false,
      isValid:false,
    }
  },
  methods: {
    hideReg: function(){
      this.focus=false;
    },
    showReg: function(){
      this.focus=true;
    },
    testEmail: function(){
      if(this.regEmail.test(this.email)==false){
        this.emailInvalid = true;
    } else {
        this.emailInvalid = false;
    }
    },
    attention: function(){
      if (this.adresse.match(/\d/g)==null && this.adresse!="") {
        this.adresseError = true;
      } else {
        this.adresseError = false;
      }
    },

    submit: function(event){
      event.preventDefault();      
      if (this.prénom.length<2) {
        this.errorPrénom = true;
        this.prenomValid = false;
      } else {
        this.errorPrénom = false;
        this.prenomValid = true;
      }

      if (this.nom.length<2) {
        this.errorNom = true;
        this.nomValid = false;
      } else {
        this.errorNom = false;
        this.nomValid = true;
      }

      if (this.adresse=='') {
        this.adresseWrong = true;
        this.adresseValid = false;
      } else {
        this.adresseWrong = false;
        this.adresseValid = true;
      }

      if (this.ville.length<2) {
        this.errorVille = true;
        this.villeValid = false;
      } else {
        this.errorVille = false;
        this.villeValid = true;
      }

      if (this.codePostal.length<5) {
        this.cpShort = true;
        this.cpLong = false;
        this.codePostalValid = false;
      } else if (this.codePostal.length>5) {
        this.cpLong = true;
        this.cpShort = false;
        this.codePostalValid = false;
      } else {
        this.cpShort = false;
        this.cpLong = false;
        this.codePostalValid = true;
      }

      if (this.emailInvalid) {
        this.errorEmail = true;
        this.emailValid = false;
      } else {
        this.errorEmail = false;
        this.emailValid = true;
      }

      if (this.regPassword.test(this.motDePasse)==false) {
        this.passwordWrong = true;
        this.motDePasseValid = false;
      } else {
        this.passwordWrong = false;
        this.motDePasseValid = true;
      }

      if (this.motDePasse == '' ||  this.motDePasse !== this.motDePasseConfirm) {
        this.nonidenticalPassword = true
        this.motDePasseConfirmValid = false;
      } else {
        this.nonidenticalPassword = false
        this.motDePasseConfirmValid = true;
      }

      if (this.prenomValid && this.nomValid && this.adresseValid && this.villeValid && this.codePostalValid && this.emailValid && this.motDePasseValid && this.motDePasseConfirmValid) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }

      // if (this.isValid) {
      //   alert('Vous êtes inscrit');
      // }

    }
  },
  // mounted: {
  //   refresh: function(){
  //     location.reload();
  //   },
  // }
}
</script>

<style scoped>
main {
    margin-top: 23vh;
}

.titre {
    height: 7vh;
}

h1{
  text-align: center;
  color: #31aaaf;
}

h2 {
    text-align: center;
}

.wheat {
    background-color: #FFF3DD;
}

.formulaire {
    background-color: white;
    border-radius: 20px;
}

.btn-primary {
    background-color: #31aaaf !important;
    border-color: #31aaaf !important;
}

.error {
    color:red;
    margin-top: 1vh;
}

.error.adresse {
    color: #31aaaf;
}

.error.password {
    color:#31aaaf;
}

@media screen and (min-width:768px) {
    
    h2 {
        font-size: 3em;
    }
    
    .form-label {
        font-size: 1.5em;
    }
    .inscrire {
        font-size: 1.5em;
    }
}

@media screen and (min-width:992px) {
    
    h2 {
        font-size: 2em;
    }
    
    main {
        margin-top: unset;
    }
}
</style>