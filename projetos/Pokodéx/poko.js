//Conectando a Poke Api
//Variáveis global

const pokemonName = document.querySelector(".pokemon_name")
const pokemonNumber = document.querySelector(".pokemon_number")
const pokemonImg = document.querySelector(".pokemon_img")
const form = document.querySelector(".form")
const input = document.querySelector(".input_search")
const buttonPrev = document.querySelector(".btn-prev")
const buttonNext = document.querySelector(".btn-next")
let searchPokemon = 0;

const fetchPokemon = async (pokemon)=>{

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIResponse.status===200) {
        
        const data = await APIResponse.json();
        return data;  
    }

   
};

//Renderizar dados pokemón

const renderPokemon = async (pokemon)=>{

    pokemonName.innerHTML = "Carregando..."
    pokemonNumber.innerHTML = ""
 
    const data = await fetchPokemon(pokemon);

    if (data) {

        pokemonName.innerHTML=data.name;
    pokemonNumber.innerHTML=data.id;
    pokemonImg.src = data["sprites"]['versions']['generation-v']['black-white']['animated']['front_default']
    input.value = "";
    searchPokemon = data.id
        
    } else {

        pokemonImg.src = "https://media4.giphy.com/media/M6BvFDxqoNUrzgMyYf/giphy.gif?cid=6c09b9523i42qzcpogqms3o6dpf11inlnmap3ptccla1ii21&ep=v1_stickers_related&rid=giphy.gif&ct=s"
        pokemonName.innerHTML = "Não encontrado :C"
        input.value = ""
        
    }
};

//Achar o pokemón pelo input

form.addEventListener("submit", (event)=>{

    event.preventDefault();

    renderPokemon(input.value.toLowerCase());

    
});


//Eventos do botões prev e next

    buttonPrev.addEventListener("click",()=> {

        if (searchPokemon > 1) {

            searchPokemon-=1;
            renderPokemon(searchPokemon)
            
        }
        
    });

    buttonNext.addEventListener("click",()=> {

        searchPokemon +=1;
        renderPokemon(searchPokemon)

    });

renderPokemon(65)