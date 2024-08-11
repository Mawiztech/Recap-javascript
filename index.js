

const div = document.querySelector(".container")


const fetchDataFromBackend = async ()=>{
    await fetch("https://jsonplaceholder.typicode.com/todos")

    .then(anything => anything.json())

    .then(anythingg =>  {
        anythingg.forEach((eachItem, index) => {
            div.innerHTML += `
                <div class="card">
                    <h1 class="id">${eachItem.id}</h1>
                    <h3 class="completed">${eachItem.completed}</h3>
                    <p>${eachItem.title}</p>
                    
                </div>
            `
        });
    })  

    
}

fetchDataFromBackend()



