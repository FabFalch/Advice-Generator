const adviceText = document.getElementById('advice-txt')
const diceButton = document.getElementById('dice')
const adviceNumber = document.querySelector('.advice-number')
const diceCircle = document.querySelector('.dice-wrap')

// Testing the API to understand it
async function testAPI(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json();

    console.log(data);

    console.log(`This is the Advice: ${data.slip.advice}`);
    console.log(`This is the id: ${data.slip.id}`)
}

//Grabbing The API
async function fetchAdvice() {
    
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json();

        adviceText.innerText = `"${data.slip.advice}"`;
        adviceNumber.innerText = `'Advice #${data.slip.id}'`
    }
 catch (error) {
    console.error("Error fetching advice:" , error);
    adviceText.innerText = 'opps! something went wrong. try again'
    
} finally {
diceCircle.style.backgroundColor = 'hsl(150, 100%, 66%)'
}

};

diceButton.addEventListener('click', () => {
    diceCircle.style.backgroundColor = 'hsl(217, 19%, 38%)'
    fetchAdvice()
    adviceText.style.color = 'hsl(193, 38%, 86%)'
    adviceText.style.fontWeight = 'bold'
    
}) 

//Console Logs the Api Advice and ID (To help with locating)
testAPI()
    





