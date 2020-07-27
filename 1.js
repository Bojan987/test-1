// zadatak 1


let kolicina = 4
let cena = 100
let godine = 22
let racun = 0

if ( godine > 18){

    if ( godine % 7 ===0){
       racun += kolicina * 0.85*cena
       console.log (`Vas racun uz 15% popusta je ${racun}`)
    }
    else if ( godine % 11 ===0 || (godine % 11 ===0 && godine % 7 ===0)){

        racun += kolicina* 0.75*cena
        console.log (`Vas racun uz 25% popusta je ${racun}`)
    }

    else {
        racun += kolicina*cena
        console.log (`Vas racun  je ${racun}`)
    }
     


} else (`Osoba koja zeli da plati racun nema 18 godina`)

