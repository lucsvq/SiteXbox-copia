


/*const restaurante = {
    nome : 'habibis',
    menu : ['carne', 'porra', 'escremento', 'morcego', 'rato'],
    pratoPrincipal : ['lasanha de verme', 'bolo de lixo'],
    horariosDeFuncionamento : {
        seg : {
            abre : 06,
            fecha : 18,
        },
        ter : {
            abre : 08,
            fecha : 16,
        },
        qua : {
            abre : 12,
            fecha : 22,
        },
    },

    order : function(menuIndex, pratoIndex) {
        return [this.menu[menuIndex], this.pratoPrincipal[pratoIndex]]
    },

    orderDelivery : function ({time, adress, menuIndex, pratoIndex}) {
        console.log(`Pedido recebido!, ${this.menu[menuIndex]} e ${this.pratoPrincipal[pratoIndex]} serao entrege as ${time} horas no endereço ${adress}`)
    },

    orderPast : function(ing1, ing2, ing3) {
        console.log(`Temos uma pizza personalizada por voce com ${ing1}, ${ing2} e ${ing3}`)
    }

};

const porra = Object.keys(restaurante.horariosDeFuncionamento)

for (const day of porra) {
    console.log(day)
}

const dias = ['seg', 'ter', 'qua']

for (const dia of dias) {
    const open = restaurante.horariosDeFuncionamento[dia]?.abre;
    console.log(`Na ${dia} o restaurante abre as ${open} horas`)
}

restaurante.orderDelivery({
    time : '22:00',
    adress : 'Rua da Bica, 22',
    menuIndex : 4,
    pratoIndex : 1,

})

console.log(restaurante.order(2, 0))

const [menu, pratoPrincipal] = restaurante.order(2, 0)


console.log(`ò menu principal é ${menu} e o prato principal é ${pratoPrincipal}`)

const {horariosDeFuncionamento} = restaurante;

const {seg: {abre: sega, fecha: segf}, ter: {abre: tera, fecha: terf}, qua: {abre: quaa, fecha: quaf}} = horariosDeFuncionamento;
console.log(sega, segf, tera, terf, quaa, quaf)

const ingredientes = [
    prompt('Vamos fazer uma pizza, ingrediente 1?'),
    prompt('ingrediente 2?'),
    prompt('ingrediente 3?'),
]



restaurante.orderPast(...ingredientes)*/




/*const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  
  
};

const [players1, players2] = game.players
const [allPlayers] = game.players
const [gk, ...fieldPlayers] = players1

const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1]

console.log(players1)
console.log(players2)
console.log(allPlayers)
console.log(gk, fieldPlayers)

const {odds: {team1, x, team2}} = game

console.log(team1, x, team2)

const printGoals = function(...players) {
    console.log(`${players.length} goals were scoad`)
}

printGoals(...game.scored)

const scoredPlayers = Object.entries(game.scored)
console.log(scoredPlayers)

for (const [x, jogador] of scoredPlayers) {
    console.log(`${jogador} fez o ${parseInt(x) + 1} gol`)
}

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'empate' : `vitoria ${game[team]}`
    console.log(`odd de ${teamStr} ${odd}`)
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);*/



/*const rest = new Map();
rest.set('name', 'Frizzbar pizzaria')
rest.set('categories', ['pizza', 'hamburguer', 'bebidas', 'vegano']) .set('open', 6) .set('close', 20) .set(true, 'Estamos abertos :D') .set(false, 'Estamos fechados :(')
const horas = 13

console.log(rest.get(horas >= rest.get('open') && horas <= rest.get('close')))

console.log(rest)


const question = new Map([
    ['question', 'Whats the best progamming language in the word?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Python'],
    [4, 'JavaScript'],
    ['correct', 4],
    [true, 'Correct🎉'],
    [false, 'Try again!']
])

console.log(question)

for (const[key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Aswer ${key}: ${value}`)
    }
}

const aswer = Number(prompt('Your aswer'))
console.log(aswer)
console.log(question.get(question.get('correct') === aswer))*/


/*const gameEvents = new Map([
    [0, '📢 Game start'],
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
    [93, '📢 End of the game']
]);

const events = [... new Set(gameEvents.values())]
console.log(events)
gameEvents.delete(64)
console.log(gameEvents)



for (const [i, event] of gameEvents) {
   const timeHalf = i >= 0 && i < 45 ? '[FIRST HALF]' : '[SECOND HALF]';
   console.log(`${timeHalf} in minute: ${i}, there was ${event}`)
    
}

const name = 'LucAs';
const nameLower = name.toLowerCase();
const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1)
console.log(nameCorrect)

const maskCardCredit = function (number) {
    const str = number + '';
    const last = str.slice(-4)
    return last.padStart(str.length, '*')
}

console.log(maskCardCredit(7289843))*/

/*const bookings = []

const creatBooking = function (flightNum, numPassagers = 1, price = 500){
    
    const booking = {
        flightNum,
        numPassagers,
        price
    }

    bookings.push(booking)
    console.log(booking)
}

creatBooking(10, 70, 800)
creatBooking(10, undefined*/

/*const greet = greeting => name => console.log(`${greeting} ${name}`)
const greeterHey = greet('hey')
greeterHey('lucas')*/

/*const congonhas = {
    airlane: 'Congonhas Aeroporto',
    iatacode: 'CH',
    bookings: [],

    book(flightNum, name) {
        console.log(`${name} boked a seat on ${this.airlane} flight ${this.iatacode}${flightNum}`)
        this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name})
    }
    
}

congonhas.book(167, 'Lucas Vinicius')
congonhas.book(132, 'kaka')
congonhas.book(107, 'ze aramalho')

console.log(congonhas)

const guarulhos = {
    airlane: 'Guarulhos Airplane',
    iatacode: 'GA',
    bookings: [],
}


const book = congonhas.book

book.call(guarulhos, 41, 'Jose Estevao')


const bookGua = book.bind(guarulhos)
bookGua(66, 'Desgrca')
bookGua(66, 'Desgrca')
bookGua(66, 'Desgrca')


console.log(guarulhos)


const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate
    }
}

const addVAT2 = addTaxRate(1)
console.log(addVAT2(12))*/

/*const dices = [
    {
        dicePrincipal: 'dice-1.png',
        diceSecundario: 'dice-2.png',
    },
    {
        dicePrincipal: 'dice-3.png',
        diceSecundario: 'dice-4.png',
    },
    {
        dicePrincipal: 'dice-5.png',
        diceSecundario: 'dice-6.png',
    },
]


const dados = document.querySelectorAll('.dice')

for (const d of dados) {
    d.addEventListener('click', function() {
        document.querySelector('.imgSec').src= 'dice-2.png'
    })
}*/

/*const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),

    registerAswer() {
        const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}\n(Write option number) `))
        console.log(answer)

        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;d

        this.displayResults()
        this.displayResults('string')
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        }else if(type === 'string') {
            console.log(`Pool results are ${this.answers.join(', ')}`)
        }
    }
    
}

document.querySelector('.answerBtn').addEventListener('click', poll.registerAswer.bind(poll))*/

/*const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`Nós estamos abordo com ${n} passageiros`)
        console.log(`Estamos em 3 grupos, com ${Math.trunc(perGroup)} passageiros cada um`)
    }, wait * 1000)

    console.log(`iremos decolar em ${wait} secundos`)
}

boardPassengers(100, 5)*/

/*const movimentacao = [100, 123, 999, -123, -4, 543, -122]

movimentacao.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movimento ${i + 1}: Voce depositou ${mov}R$ `)
    } else {
        console.log(`Movimento ${i + 1}: Voce retirou ${Math.abs(mov)}R$`)
    }
})*/






/*TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]*/

/*const checkDogs = function (juliaDogs, kateDogs) {
    const correctJuliaDogs = [...juliaDogs];
    correctJuliaDogs.splice(-2)

    const dogs = [...correctJuliaDogs, ...kateDogs]

    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`O cachorro ${i + 1} é velho, tem ${dog} anos o coitado kk `)
        } else {
            console.log(`O cachorro ${i + 1} é novim, tem ${dog} anos`)
        }
    })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])*/

/*const movimentacao = [100, 123, 999, -123, -4, 543, -122]


const euToUsd = 1.1

const movementsUSD = movimentacao.map( mov => mov * euToUsd )

console.log(movementsUSD)

const movementsDescriptions = movimentacao.map((mov, id) => 
    `Moviment ${id + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
)

console.log(movementsDescriptions)*/



const btnLogin = document.querySelector('.login_button');
const main = document.querySelector('main');
const titleHeader = document.querySelector('.title_header');
const loginUser = document.querySelector('.login_input-user');
const loginPin = document.querySelector('.login_input-pin');
const date = document.querySelector('.date');
const saldo = document.querySelector('.saldo');
const containerMoviments = document.querySelector('section');
const header = document.querySelector('header');
const labelSumIn = document.querySelector('.sumary_value-in')
const labelSumOut = document.querySelector('.sumary_value-out')
const labelSumInterest = document.querySelector('.sumary_value-interest')
const btnTransfer = document.querySelector('.form_button-transfer')
const transferTo = document.querySelector('.input_transfer-to')
const transferAmount = document.querySelector('.input_transfer-amount')
const btnCloseAcc = document.querySelector('.form_button-close')
const confirmUser = document.querySelector('.input_close-user')
const confirmPin = document.querySelector('.input_close-pin')
const requestInp = document.querySelector('.input_request')
const btnRequest = document.querySelector('.form_button-request')
const sortBtn = document.querySelector('.sumary_label-sort')

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
  
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
  
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
  
const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4]

const displayMoviments = function(moviments, sort = false) {

    containerMoviments.innerHTML = ''

    const movs = sort ? moviments.slice().sort((a, b) => a - b) : moviments

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `<div class="moviments_row">
                            <div class="moviments_type moviments_type-${type}">${i + 1} ${type}</div>
                            <div class="movements__date">12/03/2020</div>
                            <div class="movements__value">${mov} €</div>
                      </div>`

            containerMoviments.insertAdjacentHTML('afterbegin', html)
    })
    

}


const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
    saldo.textContent = `${acc.balance} €`;
}


const calcDisplaySumarry = function(acc) {
    const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
    labelSumIn.textContent = `${incomes} €`

    const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
    labelSumOut.textContent = `${Math.abs(out)} €`;

    const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate) / 100).filter(int => int >= 1).reduce((acc, int) => acc + int, 0)
    labelSumInterest.textContent = `${interest} €`;
}


const createUserName = function(accs) {

    accs.forEach(function(acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map(function(name) {
            return name[0]
            }).join('')
    })
    
}
createUserName(accounts)
console.log(accounts)

const updateUi = function(acc) {
        displayMoviments(acc.movements)
        calcDisplayBalance(acc)
        calcDisplaySumarry(acc)
}

let currentAcount;

btnLogin.addEventListener('click', function(e) {
    e.preventDefault()

    currentAcount = accounts.find(acc => acc.username === loginUser.value)
    console.log(currentAcount)

    if(currentAcount?.pin === Number(loginPin.value)) {
        
        titleHeader.textContent = `Welcome back, ${currentAcount.owner.split(' ')[0]}`

        main.style.opacity = 100

        updateUi(currentAcount)
    }
})

btnTransfer.addEventListener('click', function(e) {
    e.preventDefault()

    const amount = Number(transferAmount.value)
    const reciveAccount = accounts.find(acc => acc.username === transferTo.value)
    transferAmount.value = transferTo.value = ''


    if(amount > 0 && reciveAccount && currentAcount.balance >= amount && reciveAccount.username !== currentAcount.username) {
        currentAcount.movements.push(-amount)
        reciveAccount.movements.push(amount)

        updateUi(currentAcount)
    }
})

btnRequest.addEventListener('click', function(e) {
    e.preventDefault()

    const amount = Number(requestInp.value)

    if (amount > 0 && currentAcount.movements.some(mov => mov >= amount * 0.1)) {
        currentAcount.movements.push(amount)

        updateUi(currentAcount)
    }
})

btnCloseAcc.addEventListener('click', function(e) {
    e.preventDefault()

    if(confirmUser.value === currentAcount.username && Number(confirmPin.value) === currentAcount.pin) {
        const index = accounts.findIndex(acc => acc.username === confirmUser.value)
        console.log(index)

        accounts.splice(index, 1)

        main.style.opacity = 0

        titleHeader.textContent = `Log in to get started`
        
    }
})

let sorted = false

sortBtn.addEventListener('click', function(e) {
    e.preventDefault()
  
    displayMoviments(currentAcount.movements, !sorted)
    sorted = !sorted
})

const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)



/*const movimentacao = [100, 123, 999, -123, -4, 543, -122]

const euToUSD = 1.1

const totalDepositUSD = movimentacao.filter(mov => mov > 0).map(mov => mov * euToUSD).reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUSD)*/

const totalDeposits = accounts.map(acc => acc.movements).flat().filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)

console.log(totalDeposits) 

