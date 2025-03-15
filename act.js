// Criei uma Variavel Zerada
let playerPlayingNow = "None"
let board = []

const btnStart = document.getElementById('btnStart')
let playerTurn = document.getElementById('turnOf')
let player1Name
let player2Name

// Adiciono Ação no Botão
btnStart.addEventListener('click', function() {

    clearBoard()

    const info = document.getElementById('info')
    const board = document.getElementById('board')
    
    // Pego o nome dos Jogadores
    player1Name = prompt("Digite o nome do primeiro jogador (O): ")
    player2Name = prompt("Digite o nome do segundo jogador (X): ")

    // Seto o nome do Jogador 1 na Tela
    const player1Space = document.getElementById('player1')
    player1Space.innerText = "Player 1 - " + player1Name

    // Seto o nome do Jogador 2 na Tela
    const player2Space = document.getElementById('player2')
    player2Space.innerText = "Player 2 - " + player2Name

    // Set o Jogador 1 como vez
    playerTurn.innerText = "Vez de: " + player1Name
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
            playerTurn.innerText = "Vez de: " + player2Name
        }
        else
        {
            cel.innerText = "X"
            board[nro] = "X"
            verifica()
            playerPlayingNow = "O"
            playerTurn.innerText = "Vez de: " + player1Name
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