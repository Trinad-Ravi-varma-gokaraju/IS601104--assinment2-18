function count() {
    let inputString = document.getElementById('inputString').value;
    let vowels = 0;
    let consonants = 0;

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if ('aeiouAEIOU'.includes(char)) { 
            vowels++;
        } else if (/[a-zA-Z]/.test(char)) { 
            consonants++;
        }
    }

    var resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Vowels: ' + vowels + ', Consonants: ' + consonants;
}

document.addEventListener('DOMContentLoaded', function () {
    var countButton = document.getElementById('countButton');
    countButton.addEventListener('click', count);
});
