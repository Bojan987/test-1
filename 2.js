//     *
//    ***
//   *****
//  *******
// **** ****
//  *******
//   *****
//    ***
//     *

let N = 6;

for (i=1 ;i<=N;i++){
   if (i<N) console.log (" ".repeat(N-i) + "*".repeat(i) + "*".repeat(i-1))

   else if (i===N) {
    console.log (" ".repeat(N-i) + "*".repeat(Math.floor(i-1)) + " " +"*".repeat(i-1))
   }


}


for (i = N; i>0; i--){
 
    console.log (" ".repeat(N-i) + "*".repeat(i) + "*".repeat(i-1))
}