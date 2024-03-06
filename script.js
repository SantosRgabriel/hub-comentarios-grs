let data = [];

const submitContent = (event) => {
  event.preventDefault();

  const autor = inputAutor.value;
  const comment = inputComment.value;

  data.push({ autor: autor, comment: comment });

  console.log(data);
  loadComment();

  
};

const formComentario = document.getElementById("formComment");
formComentario.addEventListener("submit", submitContent);

const loadComment = () => {
    //dados carregados da API
    if(data){
        displayComment();
    }
};

const displayComment = () => {
  const body = document.getElementByIdTagName("body")[0];
  data.forEach((elemento) => {
    const divDisplay = document.createElement("div");
    divDisplay.className = "comentarios";
    divDisplay.innerHTML = `
        <strong>${elemento.autor}</strong>
        <p>${elemento.comment}</p>
        `;
    body.appendChild(divDisplay);
  });
};
