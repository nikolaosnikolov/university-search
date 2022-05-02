const startButton1 = document.getElementById('startButton')
const table = document.getElementById("table1")
const c1 = document.getElementById("1")
const c2 = document.getElementById("2")
const c3 = document.getElementById("3")
const c4 = document.getElementById("4")


const universitiesArray = [
    {
        name: 'Harvard University',
        accRate: '5%',
        costs: '54.000 USD',
        est: '1636',
    },
    {
        name: 'Princeton University',
        accRate: '9%',
        costs: '59.550 USD',
        est: '1883',
    },
    {
        name: 'Yale University',
        accRate: '4,8%',
        costs: '49.000 USD',
        est: '1456',
    },
    {
        name: 'MIT',
        accRate: '7,3%',
        costs: '60.000 USD',
        est: '1300',
    },
]

const users = [
    {
        name: 'Peter',
        surname: 'Pan',
        username: 'peter.pan',
        password: '559988',
    },
    {
        name: 'Cat',
        surname: 'Woman',
        username: 'cat.woman',
        password: '115544',
    }
]


table.style.setProperty('display', 'none')

startButton1.onclick = () => {
    const prompt1 = prompt('Please put your username')
    const prompt2 = prompt('Please put your password')
    if (prompt1 === users[0].username && prompt2 === users[0].password || prompt1 === users[1].username && prompt2 === users[1].password) {
        const prompt3 = prompt('Please write the university the data of which will be shown.')
        universitiesArray.forEach(item => {
            if (prompt3 === item.name) {
                c2.textContent = item.accRate;
                c3.textContent = item.costs;
                c4.textContent = item.est;
            }
            table.style.removeProperty('display')
            c1.textContent = prompt3;
        })
    } else {
        alert('Your data are invalid')
    }
}