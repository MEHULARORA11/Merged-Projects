buttons = document.querySelectorAll('button')
main = document.querySelector('.main')

main.addEventListener('click',(e) => {
switch(e.target.id){
        case "1" : window.open('https://color-scheme-switcher-nine.vercel.app/','_blank')
        break;
        case "2" : window.open('https://bmi-calculator-ivory-rho.vercel.app/','_blank')
        break;
        case "3" : window.open('https://digital-clock-brown-omega.vercel.app/','_blank')
        break;
        case "4" : window.open('https://random-number-game-ten.vercel.app/','_blank')
        break;
        case "5" : window.open('https://magic-keys.vercel.app/','_blank')
        break;
        case "6" : window.open('https://colour-changing-game.vercel.app/','_blank')
        break;
        case "7" : window.open('https://currency-converter-one-bice.vercel.app/','_blank')
        break;
        case "8" : window.open('https://tic-tac-toe-game-nine-puce.vercel.app/','_blank')
        break;
        case "9" : window.open('https://rock-paper-scissor-game-taupe-tau.vercel.app/','_blank')
        break;
        case "10" : window.open('https://my-todo-app-20.vercel.app/','_blank')
        break;
        default:
                  
                   
    }
})
