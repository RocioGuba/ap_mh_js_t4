/*getFetch();
async function getFetch() {

    viewSpiner(conteinerCardDetail);

    await fetch(APIurl)
            .then(res => res.json() )
            .then(data => {

                let eventos = data.events;  // guardo mis eventos 

                let eventID = location.search.split('?id=').join(''); // busca en url el ID

                let eventoDetail = eventos.find(evento => evento._id === eventID); // busca dentro de los eventos el ID

                printDetail(eventoDetail, conteinerCardDetail, data);

            })
}*/

let idEvento = (location.search.split('?id='))[1]
let evento = []
async function getData(){
    await fetch()
}