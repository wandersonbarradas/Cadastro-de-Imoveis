class App {
  constructor() {
    this.novoImovel = null;
  }

  start() {
    event.preventDefault();
    this.cadastrar();
    this.limpar();
    this.novoImovel = null;
  }

  cadastrar() {
    this.novoImovel = new formCadastro();
    this.novoImovel.buscarDados();
    let dados =
      "Tipo do Imovel: " +
      this.novoImovel.tipo +
      ", Tamanho: " +
      this.novoImovel.area +
      "m².";
    let elementLi = this.createElemet(this.novoImovel.situacao, dados);
    if (this.novoImovel.verification != false) {
      this.listar(elementLi);
    }
  }

  createElemet(situacao, dados) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const div = document.createElement("div");
    const btn = document.createElement("button");
    li.setAttribute(
      "class",
      "list-group-item d-flex justify-content-between align-items-center",
    );
    if (situacao != "Disponivel") {
      span.setAttribute("class", "badge bg-danger rounded-pill");
      span.innerText = situacao;
      li.appendChild(span);
    }

    div.setAttribute("class", "ms-2 me-auto");
    div.innerText = dados;
    btn.setAttribute("class", "btn btn-sm btn-warning");
    btn.setAttribute("type", "button");
    btn.setAttribute("onclick", "app.remove(this)");
    btn.innerText = "Remover";

    li.appendChild(div);
    li.appendChild(btn);
    return li;
  }

  listar(element) {
    document.querySelector("#listaImoveis").appendChild(element);
  }

  limpar() {
    document.querySelector("#tipoImovel").value = 0;
    document.querySelector("#inputArea").value = "";
    document.querySelector("#inlineRadio1").checked = true;
  }

  remove(element) {
    let item = element.parentNode;
    let ul = document.querySelector("#listaImoveis");
    let res = confirm("Deseja realmente remover esse item permanente mente?");
    if (res == true) {
      ul.removeChild(item);
    }
  }
}
