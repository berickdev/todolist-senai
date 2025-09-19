let tarefas = [];

const campoTarefa = document.querySelector('#campoTarefa');
const addTarefa = document.querySelector('#addTarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

addTarefa.addEventListener('click',(e)=>{
    e.preventDefault();
    const textoTarefa = campoTarefa.value.trim(); //Valor em branco no começo ou no final da tarefa é removido;
    if(textoTarefa !== ''){
        tarefas.push({text:textoTarefa, concluido: false});
        alert("Tarefa Adicionada com Sucesso!")
        campoTarefa.value = '';
        mostrarTarefas();
    }
})

function mostrarTarefas() {
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index)=>{
        const li = document.createElement('li');
        li.classList.toggle('completo', tarefa.concluido);

        li.innerHTML = `
        <span>${tarefa.text}</span>
        <input type="checkbox" ${tarefa.concluido ? 'checked' : ''} onclick="tarefaConcluida(${index})">
        <button class="editar" onclick="editarTarefa(${index})">Editar</button>
        <button class="excluir" onclick="excluirTarefa(${index})">Excluir</button>
        `
        listaTarefas.appendChild(li);
    });
}

function excluirTarefa(index){
    if(confirm("Você deseja excluir a tarefa?")){
        tarefas.splice(index, 1);
        mostrarTarefas();
    }
}

function editarTarefa(index){
    const novaTarefa = prompt(`Editando a tarefa: ${tarefas[index].text}`);
    if(novaTarefa !== null && novaTarefa.trim() !== ''){
        tarefas[index].text = novaTarefa.trim();
        mostrarTarefas();
    }

}

function tarefaConcluida(index){
    tarefas[index].concluido = !tarefas[index].concluido;
    mostrarTarefas();
}