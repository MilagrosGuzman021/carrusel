
const imgRoutes = [
    "./img/bulbasaur.png", 
    "./img/blastoise.png", 
    "./img/charizard.png", 
    "./img/pika.png"
]

let counter = 0;
let iterador = 0

function* nextImage(i){
    while(i<4){
        yield i++;
    }

    counter = i;
}
function* prevImage(i=3){
    while(i>=0){
        yield i--;
    }
   
    counter = i;
}

function* generator (i){
    yield* nextImage(i);
    i=0;
    yield* generator(i);
}
const buttonNext = document.getElementById("next");
const buttonPrev = document.getElementById("prev");
const iterator = nextImage(counter);
const iterator2 = prevImage();
const ite = generator(counter)


buttonNext.addEventListener("click", ()=>{
    
    document.getElementById("img1").setAttribute("src", imgRoutes[ite.next().value])
})
buttonPrev.addEventListener("click", ()=>{
    
    document.getElementById("img1").setAttribute("src", imgRoutes[iterator2.next().value])
     
})