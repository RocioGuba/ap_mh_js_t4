let data = []
let evento = []
let detail = document.getElementById('tarjetasDetail');

function traerDatos() {
    //  fetch("./script/amazing_1.json")
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(data => {
            datosApi = data
            configuraBusqueda(datosApi)
        })
        .catch(error => console.log(error.message))
}

traerDatos()

function configuraBusqueda(datosApi) {
    let queryString = location.search
    let params = new URLSearchParams(queryString)
    let id = params.get('id')
    evento = datosApi.events.find((info) => {
        return info._id == id
    }); 
    crearTarjeta()
}

function crearTarjeta() {
    detail.innerHTML = `
    <div class="card border-primary   mb-3 mt-3 p-3" style="max-width: 100%, font-size:1.2rem">
    <div class="row g-3">
            <div class="col-md-5 align-self-center">           
                <img src="${evento.image}" class="align-self-center" style="width:100%; height: auto;" alt="img">
            </div>
        <div class="col-md-7">
        <div class="card-body">
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text">${evento.description}</p>
                    <p class="card-text">${evento.date}</p>
                    <p class="card-foot">$${evento.price}</p>
                    <p class="card-text">${evento.category}</p>
                    <p class="card-text">${evento.capacity}</p>
                    <p class="card-text">${evento.assistance}</p>
            <div class="d-flex flex-row justify-content-center">
                    <a href="./index.html" class="btn btn-primary">Home</a>
            </div>               
        </div>
    </div>
</div>`

}
