<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <!--
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>
    -->
      <div class="form-group">
        <label for="title">Origem</label>
        <input
          type="text"
          class="form-control"
          id="contaDeOrigem"
          required
          v-model="transferecia.contaDeOrigem"
          name="contaDeOrigem"
        />
      </div>
      <div class="form-group">
        <label for="description">Destino</label>
        <input
          class="form-control"
          id="contaDeDestino"
          required
          v-model="transferecia.contaDeDestino"
          name="contaDeDestino"
        />
      </div>
      <div class="form-group">
        <label for="description">Valor transferencia</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="transferecia.valorTrasferencia"
          name="valorTrasferencia"
        />
      </div>


      <div class="form-group">
        <label for="description">data de Hoje</label>
        <input
          class="form-control"
          id=""
          type="radio"
    
          name=""
        checked/>
      </div>

      <div class="form-group">
        <label for="description">data de transferencia</label>
        <input
          class="form-control"
          id="dataTrasferencia"
          required
          v-model="transferecia.dataTrasferencia"
          name="dataTrasferencia"
        />
      </div>
      <!--
      <div class="form-group">
        <label for="description">data agendamento</label>
        <input
          class="form-control"
          id="dataAgendamento"
          required
          v-model="transferecia.dataAgendamento"
          name="dataAgendamento"
        />
      </div> -->
      <button @click="saveTransferencia" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
// import TutorialDataService from "../services/TutorialDataService";
import TransferenciaDataService from "../services/TransferenciaDataService";

export default {
  name: "add-transferencia",
  data() {
    return {
      tutorial: {
      },
      transferecia:{
        id:null,
        contaDeOrigem: "",
        contaDeDestino: "",
        valorTrasferencia: "",
        dataTrasferencia: "",
        dataAgendamento:"",
        taxa: null
      },
      submitted: false
    };
  },
  methods: {

      saveTransferencia() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        contaDeOrigem: this.transferecia.contaDeOrigem,
        contaDeDestino: this.transferecia.contaDeDestino,
        valorTrasferencia: this.transferecia.valorTrasferencia,
        dataTrasferencia: this.transferecia.dataTrasferencia,
        dataAgendamento: this.transferecia.dataTrasferencia,
        taxa: "10"
      };
      TransferenciaDataService.create(data)
      .then(response => {
          this.transferencia.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
      this.transferecia = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
