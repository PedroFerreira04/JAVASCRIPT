let num = [5,8,9,2,3]

let pesquisa =num.indexOf(5)



if(pesquisa == -1){
    console.log('não existe esse numero no vetor!')
} else {
    console.log(`o numero ${num[pesquisa]} esta na ${pesquisa+1}º posição`)
}