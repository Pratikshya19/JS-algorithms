//Find the longest substring which is palindrome.
function longestPalindrome(s) {
    if (s === '') {
        return ''
    }
    let arr = [];
    let _s = s.split('');
    for (let i = 0; i < _s.length; i++) {
        for (let j = 0; j < _s.length; j++) {
            let word = _s.slice(0, j + 1).join('');
            let rev_word = _s.slice(0, j + 1).reverse().join('');
            if (word === rev_word) {
                arr.push(word)
            }
        }
        _s.splice(0, 1)
    }
    let _arr = arr.sort((a, b) => a.length - b.length);
    for (let i = 0; i < _arr.length; i++) {
        if (_arr[arr.length - 1].length === _arr[i].length) {
            return _arr[i]
        }
    }
    }
console.log(longestPalindrome("hellosaanaasmith"))//saanaas
console.log(longestPalindrome("abcdef")) //a

