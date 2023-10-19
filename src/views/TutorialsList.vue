<template>
  <div class="list row">
    <div class="col-md-8"><!--
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>-->
    </div>
    <div class="col-md-6">
      <h4>Tutorials List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(transferenciaList, index) in transferencia"
          :key="index"
          @click="setActiveTransferencia(transferenciaList, index)"
        >
          {{ transferenciaList.contaDeOrigem }} - {{ transferenciaList.contaDeDestino }} - {{ transferenciaList.valorTrasferencia }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentTransferencia">
        <h4>Transferencia</h4>
        <div>
          <label><strong>conta origem:</strong></label> {{ currentTransferencia.contaDeOrigem }}
        </div>
        <div>
          <label><strong>conta destino:</strong></label> {{ currentTransferencia.contaDeDestino }}
        </div>
        <div>
          <label><strong>valor:</strong></label> {{ currentTransferencia.valorTrasferencia }}
        </div>

        <router-link :to="'/transferencia/' + currentTransferencia.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import TransferenciaDataService from "../services/TransferenciaDataService";

export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      transferencia:[],
      currentTutorial: null,
      currentTransferencia: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrieveTransferencia() {
      TransferenciaDataService.getAll()
        .then(response => {
          this.transferencia = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTransferencia();
      this.currentTutorial = null;
      this.currentTransferencia = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },

    setActiveTransferencia(transferencia, index) {
      this.currentTransferencia = transferencia;
      this.currentIndex = transferencia ? index : -1;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveTransferencia();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
