<template>
  <div v-if="currentTransferencia" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title">Origem</label>
        <input type="text" class="form-control" id="title"
          v-model="currentTransferencia.contaDeOrigem"
        />
      </div>
      <div class="form-group">
        <label for="description">Destino</label>
        <input type="text" class="form-control" id="description"
          v-model="currentTransferencia.contaDeDestino"
        />
      </div>

      <div class="form-group">
        <label for="description">Valor </label>
        <input type="text" class="form-control" id="description"
          v-model="currentTransferencia.valorTrasferencia"
        />
      </div>

      <div class="form-group">
        <label for="description">Taxa</label>
        <input type="text" class="form-control" id="description"
          v-model="currentTransferencia.taxa"
        />
      </div>
      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTransferencia.contaDeDestino ? "Published" : "Pending" }}
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        <input type="text" class="form-control" id="description"
          v-model="currentTransferencia.dataTrasferencia"
        />
      
      </div>
    </form>
<!--
    <button class="badge badge-primary mr-2"
      v-if="currentTransferencia.published"
      @click="updatePublished(false)"
    > --
      UnPublish
    </button>-->
  <!--  <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>-->

    <button class="badge badge-danger mr-2"
      @click="deleteTutorial"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateTransferencia()"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import TransferenciaDataService from "../services/TransferenciaDataService";

export default {
  name: "XXX",
  data() {
    return {
      currentTutorial: null,
      currentTransferencia: null,
      message: ''
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data;
          console.log("response.data");
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    getTransferencia(id) {
      TransferenciaDataService.get(id)
        .then(response => {
          this.currentTransferencia = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },    
    /*updatePublished(status) {
      var data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status
      };

      TutorialDataService.update(this.currentTutorial.id, data)
        .then(response => {
          console.log(response.data);
          this.currentTutorial.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },*/

    updateTutorial() {
      TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTransferencia() {
      console.log("currentTutorial");
      console.log(this.currentTutorial);
      TransferenciaDataService.update(this.currentTransferencia.id, this.currentTransferencia)
        .then(response => {
          console.log(response.data);
          this.message = 'The transferencia was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" });
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTransferencia() {
      TutorialDataService.delete(this.currentTransferencia.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "transferencia" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
   // this.getTutorial(this.$route.params.id);
    this.getTransferencia(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
