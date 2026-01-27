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
        case "5" : window.open('https://github.com/MEHULARORA11/Magic-Keys.git','_blank')
        break;
        case "6" : window.open('https://github.com/MEHULARORA11/Colour_Changing_Game.git','_blank')
        break;
        case "7" : window.open('https://github.com/MEHULARORA11/Currency-Converter.git','_blank')
        break;
        case "8" : window.open('https://tic-tac-toe-game-nine-puce.vercel.app/','_blank')
        break;
        case "9" : window.open('https://rock-paper-scissor-game-taupe-tau.vercel.app/','_blank')
        break;
        case "10" : window.open('https://my-todo-app-five-ecru.vercel.app/','_blank')
        break;
        default:
                  
                   
    }
})
