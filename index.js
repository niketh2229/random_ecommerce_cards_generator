const myDiv = document.getElementById('container')
const min = Math.ceil(1);
const max = Math.floor(20);
const k = Math.floor(Math.random() * (max - min + 1)) + min;
const request = new XMLHttpRequest()
request.open('GET',`https://fakestoreapi.com/products/${k}`)
request.send()
request.addEventListener('load',function() {
    const myData  = JSON.parse(request.responseText)
    const title = `${myData.title}`.substring(0,61);
    const category = `${myData.category}`.toUpperCase();
    const htmlToInsert = `
    <div id="card">
            <img src="${myData.image}">
                <p id="p1">${title}</p>
            <div id="other">
                <div id="other_1">
                    <h1>Price</h1>
                    <p>${myData.price + "$"}</p>
                </div>
                <div id="other_2">
                    <h1>Category</h1>
                    <p>${category}</p>
                </div>
                <div id="other_3">
                    <h1>Rating</h1>
                    <p>${myData.rating.rate}</p>
                </div>
            </div>
        </div>
    `;
    myDiv.insertAdjacentHTML('afterbegin',htmlToInsert);
})