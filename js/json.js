URL = 'http://localhost:3000/feedbacks'

const name = document.getElementById('name')
const description = document.getElementById('description')
const feedback = document.getElementById('feedback')
const button = document.querySelector("#button").addEventListener("click",() => {
    const create_feedback = JSON.stringify({
        name:name.value, description:description.value, feedback:feedback.value
    })
    
    console.log({create_feedback})
    fetch(URL, {method: "POST",headers:{
        "Content-Type":"application/json"
    }, body:create_feedback
}).then(res => res.json).then(() => location.reload())
})


const feed = document.getElementById('show_feedback');

function deletar(id) {
    fetch(`${URL}/${id}`,{method:"DELETE"}).then(res => res.json()).then(() => {
        location.reload()
    })
}

fetch(URL)
.then(res => res.json())
.then(feedbacks => {
    let lista_feedback = "";
    for (let i = 0; i < feedbacks.length; i++) {
        lista_feedback += `
            <div class="comentario">
            <span>${feedbacks[i].name}</span>
            <div class ="content_feedback">
            <span>${feedbacks[i].description}</span>
            <span> Avaliação: ${feedbacks[i].feedback} ⭐</span>
            </div>
            <div>

            <a onclick="deletar(${feedbacks[i].id})" id="deletar">
            <i></i> Remover
            </a>
            </div>
            </div>
            `;

            feed.innerHTML = lista_feedback
        }
    });
   
