async function fetchCharacters()
{
    const page = document.getElementById("pageInput").value || 1;
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
    try
    {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displaycharacters(data.results);
    } 
    catch(error)
    {
        console.error("erro ao buscar personagens - ", error);
    }
    
    function displaycharacters(characters){
    const container = document.getElementById("container");
      container.innerHTML = ""
    
        characters.forEach(character => {
    
        const card = document.createElement("div");
       card.className = "card"

       const name = document.createElement("h3")
       name.textContent = character.name;

       const species = document.createElement("p")
       species.textContent = `Specie: ${character.species}`;

       const image = document.createElement("img")
       image.classname = "image-style";
       image.src = character.image;
       image.alt = character.name;
       image.style.width = "200px" 
       
       const status = document.createElement("li")
       status.className = "statusStyle";
       status.textContent = `ai: ${character.status}`;

      if (character.status == "Alive"){
        status.style.color = 'green';

      }else if (character.status == "Dead"){
        status.style.color = 'red';
      }else {
        status.style.color = 'grey'
      }     





       card.appendChild(name);
       card.appendChild(species);
       card.appendChild(image)
       card.appendChild(status);
       container.appendChild(card)
        
        

        
    })
    }
}
   
    function searchbyname(){
       const searchterm = document.getElementById("nameinput2").value.toLowerCase();
       const character = document.querySelectorAll('.card');
       
       character.forEach((character) => {
        const charactername = character.querySelector('h3').textContent.toLowerCase();
            if (charactername.includes(searchterm)){
                character.style.dislay = "flex";
            }else{
                character.style.display = "none"
            }
        })
    }


    

