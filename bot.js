const pertanyan = document.getElementById("pertanyan")
const jawaban = document.getElementById("jawaban")

let init = 0


const botSay = (data) => {
    return [
        "halo saya adalah danu Bot, Siapa nama kamu?",
        `hallo ${data?.nama}, berapa usia kamu?`,
        `Ohh ${data?.usia}, apa hobi kamu apa?`,
        `wowww sama dong aku juga suka ${data?.hobi}, kamu udah punya pacar blom?`,
        `Yaa kasian dehh ${data?.pacar}, yaudah deh kalo begitu`,
    ]
}
pertanyan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
       
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}
function botDelay(jawabanUser) {
    console.log({ usersData: usersData})

    setTimeout(() => {
        pertanyan.innerHTML = botSay(jawabanUser)[init]
    }, [500])
     usersData.push( jawaban.value)
    jawaban.value = ""
}

function finishing() {
    
    pertanyan.innerHTML = `terima kasih ${usersData[0]}, sudah menjawab pertanyan,
    kalo ada waktu kita ${usersData[2]} bareng yuk`
    jawaban.value = "arigato"
}

function botEnd() {
    window.location.reload()
}

