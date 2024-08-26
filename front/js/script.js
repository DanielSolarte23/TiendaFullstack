const $ = document

const contenedorProductos = $.querySelector('#containerProducts');

const newCard = ({ title, imagen, descripcion, precio }) => {
    return `
            <div class="card">
                <h3 class="card-title">${title}</h3>
                <img class="card-img" src="${imagen}" alt="" />
                <p class="card-desc"> ${descripcion} </p>
                <strong class="card-precio">${precio}</strong>
                <button class="btn-add">Agregar al carrito</button>
            </div>`
}

const renderCards = (array) => {
    contenedorProductos.innerHTML = ''
    array.map(item => {
        contenedorProductos.innerHTML += newCard(item)
    })
}

const getAll = async () =>{
    try{
        const response = await fetch('http://localhost:3008/api/productos')
        if(response.status !== 200){
            throw new Error('Error en la solicitud')
        }else{
            const data = await response.json()
            renderCards(data)
        }
        
        // response.status !== 200 ? new Error('Error en la solicitud'): renderCards(data)
    }catch(error){
        alert('Error ' + error)
    }
}

getAll()

// fetch('http://localhost:3008/api/productos')
//     .then((res) => res.json())
//     .then((data) => renderCards(data))
//     .catch((err) => console.log(err));