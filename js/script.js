const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal button");
var imgActual = 0;
let rutasImg = [];

//abrir modal
enlaces.forEach(function(enlace,indice){
	rutasImg.push(enlace.getAttribute("href"));
	enlace.addEventListener("click", function(event){
		event.preventDefault();
		imgActual = indice;
		imgModal.setAttribute("src",rutasImg[imgActual]);
		modal.classList.add("visible");
	});
});

//cerrar modal
modal.addEventListener("click", function(){
	modal.classList.remove("visible");
});

//navegacion modal
flechas.forEach(function(flecha,indice) {
	flecha.addEventListener("click", function(event) {
		event.stopPropagation();
		if (indice == 0) {
			imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1;
		}else{
			imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0;
		}
		imgModal.setAttribute("src",rutasImg[imgActual]);
	});
});