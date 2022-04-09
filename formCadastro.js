class formCadastro {
  buscarDados() {
    let area = document.querySelector("#inputArea").value;
    let tipo = document.querySelector("#tipoImovel").value;
    if (area == "" || tipo == 0) {
      alert("Prencha todos os campos");
      this.verification = false;
    }
    this.tipo = tipo;
    this.area = area;
    this.situacao = document.querySelector(
      "input[name='inlineRadioOptions']:checked",
    ).value;
  }

  constructor() {
    this.tipo = null;
    this.area = null;
    this.situacao = null;
    this.verification = true;
  }
}
