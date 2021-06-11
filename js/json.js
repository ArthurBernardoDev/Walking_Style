URL = 'http://localhost:3000/feedbacks'

const feedback = document.getElementById('show_feedback');

fetch(URL)
    .then(res => res.json())
    .then(feedbacks => {
        let lista_feedback = "";
        for (let i = 0; i < feedbacks.length; i++) {
            lista_feedback += `
            <div>
                <span>${feedbacks[i].id}</span>
                <span>${feedbacks[i].nome}</span>
                <span>${feedbacks[i].comentario}</span>
                <div>
                    <a onclick="getProduto(${feedbacks[i].id});" 
                    data-toggle="modal" data-target="#produto-modal">
                    <i></i>  Editar
                    </a>

                    <a onclick="$('#id-prod').text(${feedbacks[i].id});
                    data-toggle="modal" data-target="#modal-delete">
                    <i></i> Remover
                    </a>
                </div>
            </div>
            `;
            console.log(lista_feedback)
            feedback.innerHTML = lista_feedback
        }
    });