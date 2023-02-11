console.log("heelo")
const container = document.querySelector('.cards')
console.log(container)

function data () {
fetch('https://dummyjson.com/products')
.then(res => res.json())
// .then(data => console.log(data))
.then(data => showData(data.products))
            
}  
data()
let html =""
const showData = (data) => {
   
    data.forEach(element => {
      html += `
      <div class="card">
                <div class="card-body">
                 <div class="card-img">
                    <img src="${element.images[0]}" alt="">
                    </div>
                    <div class="card-text">
                    <span>Title : ${element.title}</span>
                    <span> Brand: ${element.brand}</span>
                    <p>price: ${element.price}</p>
                    <p>Ratings : ${element.rating}</p>
                    <p>stocks : ${element.stock}</p></p>
                    </div>
                </div>
            </div>`
         

    

    })
     
    

    
  
   
    container.innerHTML = html
 

  }  

