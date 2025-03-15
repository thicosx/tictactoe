// Criação de Variáveis
let playerPlayingNow = "None"
let board = []
let player1Name
let player2Name

const btnStart = document.getElementById('btnStart')
const player1Space = document.getElementById('player1')
const player2Space = document.getElementById('player2')

// Adiciono Ação no Botão
btnStart.addEventListener('click', function() {

    clearBoard()

    btnStart.innerText = 'Reiniciar Jogo'
    
    // Pego o nome dos Jogadores
    player1Name = prompt("Digite o nome do primeiro jogador (O): ")
    player2Name = prompt("Digite o nome do segundo jogador (X): ")

    // Seto o nome dos Jogadores na Tela
    player1Space.innerText = "P1 - " + player1Name
    player2Space.innerText = "P2 - " + player2Name

    // Set o Jogador 1 como vez
    player1Space.classList.add('vez')
    playerPlayingNow = "O"

    document.querySelectorAll('.space').forEach(function (element, index) {
        element.addEventListener('click', function () { checaVez(element, index) })
    })
})

function checaVez(cel, nro) {

    if (cel.innerText === "")
    {
        if (playerPlayingNow == "O")
        {
            cel.innerText = "O"
            board[nro] = "O"
            verifica()
            playerPlayingNow = "X"
            player1Space.classList.remove('vez')
            player2Space.classList.add('vez')
        }
        else
        {
            cel.innerText = "X"
            board[nro] = "X"
            verifica()
            playerPlayingNow = "O"
            player1Space.classList.add('vez')
            player2Space.classList.remove('vez')
        }
    }
}

function clearBoard() {
    const space = document.querySelectorAll('.space')
    space.forEach(function (e) {
        e.innerText = ""
        e.classList.remove('ganhou')
    })

    board = []
    playerPlayingNow = "None"
    player1Name = ''
    player2Name = ''

    player1Space.classList.remove('vez')
    player2Space.classList.remove('vez')
}

function verifica() {

    if ((board[0] == board[1]) && (board[1] == board[2]) && (board[0] != null) && (board[1] != null) && (board[2] != null))
    {
        l1c1.classList.add('ganhou')
        l1c2.classList.add('ganhou')
        l1c3.classList.add('ganhou')
        alert('Ganhou')
    } 
    else if ((board[3] == board[4]) && (board[4] == board[5]) && (board[3] != null) && (board[4] != null) && (board[5] != null))
    {
        l2c1.classList.add('ganhou')
        l2c2.classList.add('ganhou')
        l2c3.classList.add('ganhou')
        alert('Ganhou')
    }
    else if ((board[6] == board[7]) && (board[7] == board[8]) && (board[6] != null) && (board[7] != null) && (board[8] != null))
    {
        l3c1.classList.add('ganhou')
        l3c2.classList.add('ganhou')
        l3c3.classList.add('ganhou')
        alert('Ganhou')
    }
    else if ((board[0] == board[3]) && (board[3] == board[6]) && (board[0] != null) && (board[3] != null) && (board[6] != null))
    {
        l1c1.classList.add('ganhou')
        l2c1.classList.add('ganhou')
        l3c1.classList.add('ganhou')
        alert('Ganhou')
    }
    else if ((board[1] == board[4]) && (board[4] == board[7]) && (board[1] != null) && (board[4] != null) && (board[7] != null))
    {
        l1c2.classList.add('ganhou')
        l2c2.classList.add('ganhou')
        l3c2.classList.add('ganhou')
        alert('Ganhou')
    }
    else if ((board[6] == board[7]) && (board[7] == board[8]) && (board[6] != null) && (board[7] != null) && (board[8] != null))
    {
        l3c1.classList.add('ganhou')
        l3c2.classList.add('ganhou')
        l3c3.classList.add('ganhou')
        alert('Ganhou')
    }
    else if ((board[2] == board[4]) && (board[4] == board[6]) && (board[2] != null) && (board[4] != null) && (board[6] != null))
    {
        l1c3.classList.add('ganhou')
        l2c2.classList.add('ganhou')
        l3c1.classList.add('ganhou')
        alert('Ganhou')
    }
    else if ((board[0] == board[4]) && (board[4] == board[8]) && (board[0] != null) && (board[4] != null) && (board[8] != null))
    {
        l1c1.classList.add('ganhou')
        l2c2.classList.add('ganhou')
        l3c3.classList.add('ganhou')
        alert('Ganhou')
    }
    else if ((board[0] != null) && (board[1] != null) && (board[2] != null) && (board[3] != null) && (board[4] != null)
         && (board[5] != null) && (board[6] != null) && (board[7] != null) && (board[8] != null))
    {
        confirm('Empate!!!')
        clearBoard()
    }
}