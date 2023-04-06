
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processMorse(data);
  })
  .catch(error => console.log(error));

function processMorse( data ){

  data.forEach( function(item, index){
    


  let newItem = document.createElement("div");
    newItem.classList.add("icon");
    newItem.classList.add(`letter-${item.alphabet}`);

      newItem.innerHTML = `
      <div class="alphabet">${item.alphabet}</div>
      <div class="morse code">${item.morsecode}</div>
      <div class="phrase"><p>${item.phrase}</p> </div>
        <audio src="morse_code_audios/${item.sound}" controls>
        
      </div>
      <div class="phrase"><p>${item.phrase}</p> </div>
      `;
      container.appendChild(newItem); 
      // newItem.item.alphabet.toggle("active");
  });

}

let buttons = document.querySelectorAll('.button');
buttons.forEach( element=>{
  element.addEventListener('click', function(){
      console.log('clicked on letter', element.id);
      let letterElement = document.querySelector(`.letter-${element.id}`);
      letterElement.classList.toggle('visible');

  });
});