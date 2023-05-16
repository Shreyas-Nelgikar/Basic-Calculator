let string = "0";
document.querySelector('input').value = string;
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "0";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            let char = string.charAt(0);
            if (char == '0') {
                string = e.target.innerHTML;
            }
            else {
                string = string + e.target.innerHTML;
            }
            document.querySelector('input').value = string;
        }
    })
})