//     *
//    ***
//   *****
//  *******
// **** ****
//  *******
//   *****
//    ***
//     *

let N = 5;
// let space = N - 1;
// for (i = 1; i <= 2 * N - 1; i += 2) {
//   if (i < 9) {
//     console.log(" ".repeat(space) + "*".repeat(i));
//     space--;
//   }
//   //    console.log(i)
//   else if (N % 2 !== 0) {
//     console.log(
//       " ".repeat(space) +
//         "*".repeat(Math.floor(i / 2)) +
//         " " +
//         "*".repeat(Math.floor(i / 2))
//     );
//   }
//   //    space --
//   else if (N % 2 === 0) {
      
//     console.log(
//       " ".repeat(space) +
//         "*".repeat(Math.floor(i / 2)) +
//         " " +
//         "*".repeat(Math.floor(i / 2))
//     );
//      if (i=2*N){
//           continue
//      }
     
//   }
// }

for (i=1 ;i<=N;i++){
   if (i<N) console.log (" ".repeat(N-i) + "*".repeat(i) + "*".repeat(i-1))

   else if (i===2*N) {
    console.log (" ".repeat(N-i) + "*".repeat(Math.floor(i/2)) + " " +"*".repeat(Math.floor(i/2)))
   }


}
// for (i=N)

