function checkPalindrome() {
    const input = document.getElementById('numberInput').value;

    const isPalindrome = function(str) {
        const len = str.length;
        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
    };

    function displayResult(isPalindrome, input) {
        const resultElement = document.getElementById('result');
        if (isPalindrome) {
            resultElement.textContent = `${input} is a palindrome.`;
        } else {
            resultElement.textContent = `${input} is not a palindrome.`;
        }
    }
    
    displayResult(isPalindrome(input), input);
}

document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.getElementById('checkButton');
    checkButton.addEventListener('click', checkPalindrome);
});
