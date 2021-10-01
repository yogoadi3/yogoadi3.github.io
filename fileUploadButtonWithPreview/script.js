let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numberOfImage = document.getElementById("number-of-img");

function preview(){
    imageContainer.innerHTML = "";
    numberOfImage.textContent = `${fileInput.files.length} Files Selected`;
    numberOfImage.style.color = "black";

    for(i of fileInput.files){
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload=()=>{
            let img = document.createElement("img");
            img.setAttribute("src",reader.result);
            figure.insertBefore(img,figCap);
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }
}