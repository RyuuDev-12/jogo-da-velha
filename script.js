const buttons = document.querySelectorAll('.btn')
const h2 = document.querySelector('h2')
const pontuacaoX = document.querySelector('#pontuacao-x')
const pontuacaoY = document.querySelector('#pontuacao-y')
const resetBtn = document.querySelector('#resetBtn')

buttons.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        if(!verificarVitoria()){
            jogar(btn)
        }
        verificarVitoria(btn)
    })
})

resetBtn.addEventListener('click', () =>{
    buttons.forEach(btn =>{
        btn.textContent = ''
    })

    if(h2.textContent == 'Vitória de O'){
        h2.textContent = 'Turno do Jogador O'
        turno = 1
    }else{
        h2.textContent = 'Turno do Jogador X'
        turno = 0
    }
})

let turno = 0
let accX = 0
let accO = 0


function jogar(btn){
    if(turno % 2 == 0){
        btn.textContent = 'x'
        turno ++
        h2.textContent = "Vez do Jogador O"
    }else{
        btn.textContent = 'o'
        turno ++
        h2.textContent = "Vez do Jogador X"
    }
}

function verificarVitoria(){
    let valores = []

    buttons.forEach(btn =>{
        valores.push(btn.textContent)
    })

    if(
        valores[0] == 'x' && valores[1] == 'x' && valores[2] == 'x' ||
        valores[3] == 'x' && valores[4] == 'x' && valores[5] == 'x' ||
        valores[6] == 'x' && valores[7] == 'x' && valores[8] == 'x' ||
        valores[0] == 'x' && valores[3] == 'x' && valores[6] == 'x' ||
        valores[1] == 'x' && valores[4] == 'x' && valores[7] == 'x' ||
        valores[2] == 'x' && valores[5] == 'x' && valores[8] == 'x' ||
        valores[2] == 'x' && valores[4] == 'x' && valores[6] == 'x' ||
        valores[0] == 'x' && valores[4] == 'x' && valores[8] == 'x'
    ){
        h2.textContent = 'Vitória de X'
        accX ++
        pontuacaoX.textContent = accX
        return true
    }

    if(
        valores[0] == 'o' && valores[1] == 'o' && valores[2] == 'o' ||
        valores[3] == 'o' && valores[4] == 'o' && valores[5] == 'o' ||
        valores[6] == 'o' && valores[7] == 'o' && valores[8] == 'o' ||
        valores[0] == 'o' && valores[3] == 'o' && valores[6] == 'o' ||
        valores[1] == 'o' && valores[4] == 'o' && valores[7] == 'o' ||
        valores[2] == 'o' && valores[5] == 'o' && valores[8] == 'o' ||
        valores[2] == 'o' && valores[4] == 'o' && valores[6] == 'o' ||
        valores[0] == 'o' && valores[4] == 'o' && valores[8] == 'o'
    ){
        h2.textContent = 'Vitória de O'
        accO ++
        pontuacaoY.textContent = accO
        return true
    }
    return false
}