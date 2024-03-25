
let productList = document.getElementById("productlist");

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        productList.innerHTML = ""; 

        data.forEach((value, index) => {
            
            let listItem = document.createElement("li");
            listItem.setAttribute("type","none")

           let title=document.createElement("h3")
           title.textContent=`Title${value.title}`;

            let image = document.createElement("img");
            image.style.width="200px"
            image.src = `${value.image}`;
            image.alt = `title:${value.title}`;

           
            let heading = document.createElement("h2");
            heading.textContent =` price:${value.price}` ; 

            
            listItem.appendChild(title)
            listItem.appendChild(image); 
            listItem.appendChild(heading);
            productList.appendChild(listItem);
        });

        console.log(data);
    })
    .catch(error => console.error('Error fetching data:', error));
