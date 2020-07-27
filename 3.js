let K = 5
let N = 10

let calc = function(k,n){
    let zbir=0
    let proizvod = 1
    let k1 = (k<n)? k : n
    let n1 = (k<n)? n : k

  for (let i=k1 ; i <= n1 ; i++){
 
if ( i % 3 === 0){
    zbir +=i
    
}
 else if ( i % 7 === 0 && i%3 !==0 )
    proizvod *=i
    


}
console.log (`Zbir brojeva deljivih sa 3 - od ${k1} do ${n1} je: ${zbir}`)
console.log (`Proizvod brojeva deljivih sa 7 - od ${k1} do ${n1} je: ${proizvod}`)
}

calc(K,N)
