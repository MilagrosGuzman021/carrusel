
const imgRoutes = [
    "./img/bulbasaur.png", 
    "./img/blastoise.png", 
    "./img/charizard.png", 
    "./img/pika.png"
]

let counter = 0;

function* nextImage(i){
    while(i<4){
        yield i++;
    }
}
function* prevImage(i){
    while(i>=0){
        yield i--;
    }
}

function* generator (i){
    yield* nextImage(i);
    i=0;
    yield* generator(i);
}
function* generatorPrev (i=3){
    yield* prevImage(i);
    i=3;
    yield* generatorPrev(i);
}
const buttonNext = document.getElementById("next");
const buttonPrev = document.getElementById("prev");

const ite = generator(counter)
const itePrev = generatorPrev();


buttonNext.addEventListener("click", ()=>{
    
    document.getElementById("img1").setAttribute("src", imgRoutes[ite.next().value])
})
buttonPrev.addEventListener("click", ()=>{
    
    document.getElementById("img1").setAttribute("src", imgRoutes[itePrev.next().value])
     
})