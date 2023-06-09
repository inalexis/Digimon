 //Api
 
 // Solicitud de API
 fetch('https://digimon-api.vercel.app/api/digimon')
 .then(response => response.json())
 .then(data => {
   const cardsContainer = document.getElementById('cards');

  //Peticion
   data.forEach(digimon => {
     const card = document.createElement('div');
     card.className = 'col';
     card.innerHTML = `
       <div class="card">
         <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}">
         <div class="card-body">
           <h3 class="card-title">${digimon.name}</h5>
           <p class="card-text">${digimon.level}</p>
         </div>
       </div>
     `;

     cardsContainer.appendChild(card);
   });
 })
 //Error
 .catch(error => {
   console.log('Error:', error);
 });

 document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.getElementById('cards');
  const searchInput = document.getElementById('searchInput');


  // Agregar evento clic a todas las cards
  cardsContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (card) {
      card.classList.toggle('expanded');
    }
  });

  // Agregar evento doble clic a todas las cards
  cardsContainer.addEventListener('dblclick', (event) => {
    const card = event.target.closest('.card');
    if (card) {
      card.classList.remove('expanded');
    }
  });
   
});

//Alert
$(document).ready(function() {
  $("#uso").click(function() {
    $("#alertD").toggle();
  });
})

$("#close-link").click(function() {
  $("#alertD").hide();
});
