function stringChanger() {

    let N = prompt('Введите число');
    let alphabet = 'ABDEFGHIJKLMNOQRTUVWYZ0123456789+-_$~'
    let randomString = stringCreator(N, alphabet);
    let [changedString, letterCount] = letterReplacer(randomString)
    let [changedString2, digitCount] = digitReplacer(changedString)
    
    console.log('Строка из случайных символов длинны N:', randomString);
    console.log('Строка после замены букв:', changedString);
    console.log('Строка после замены цифр:', changedString2);
    console.log('Количество повторений первого символа:', letterCount);
    console.log('Количество повторений второго символа:', digitCount);
    console.log('Количество неизмененных символов:', N - (letterCount + digitCount));
}

function stringCreator(N, alphabet) {
    let randomedString = '';
    for (let i = 0; i < N; i++) {
        randomedString += alphabet[Math.floor(Math.random() * (alphabet.length - 1) + 1)]
    }
    return randomedString
}

function letterReplacer(str) {
    let userSymbol = prompt('Введите первый символ');
    let counter = 0;
    let newString = [];
    str.split('').forEach((item)=> {
        if (item !== '+' && item !== '-' && item !== '_' && item !== '$' && item !== '~' && isNaN(item)) {
            newString.push(userSymbol)
            counter++;
        } else {
            newString.push(item)
        }
    })
    return [newString.join(''), counter];
}

function digitReplacer(str) {
    let userSymbol = prompt('Введите второй символ');
    let counter = 0;
    let newString = [];
    str.split('').forEach((item)=> {
        if (!isNaN(item)) {
            newString.push(userSymbol)
            counter++
        } else {
            newString.push(item)
        }
    })
    return [newString.join(''), counter];
}

stringChanger()