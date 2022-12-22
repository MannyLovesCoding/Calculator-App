// Use eval to evaluate equations using strings like eval("3 + 1");
// Use form.value = form.value + '1' // + '-' or '+'
// replace calculateBox with answer when = is clicked

function addNumber(num) { // Create a function that takes a number and adds it to the form!
    console.log('Adding Number/Equation');

    //let formInput = document.getElementById('calculateBox').value;
    if (num == '.' && document.getElementById('calculateBox').value.includes('.')) {
        
    } else {
        document.getElementById('calculateBox').value = document.getElementById('calculateBox').value + num;
    }
}

function clearForm() { // Makes the forms value go back to 1
    document.getElementById('calculateBox').value = '';
}

function addEquation(symbol) { // Adds the equation to the form
    let hasNumber = false;
    for (let i = 0; i < 9;i++) { // Checks if the form includes any number; 
        if (document.getElementById('calculateBox').value.includes(i)) {
            hasNumber = true;
            break;
        } 
    }
    console.log(hasNumber);

    if (hasNumber == false) {
        alert('Please add a number first');
    } else {
        document.getElementById('calculateBox').value = document.getElementById('calculateBox').value + symbol;
    }
}

function solveEquation() { // Replaces the form value with a new value!

    if (document.getElementById('calculateBox').value == '') { // Checks if checkbox is blank!
        alert('Please enter a vaild equation!');
    } else {
        const answer = eval(document.getElementById('calculateBox').value);
        console.log(answer);
        document.getElementById('calculateBox').value = answer;
    }
}
