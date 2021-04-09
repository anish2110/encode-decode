let str = 'abcdefghijklmn';

let keys = {
    'a' : 0,
    'b' : 1,
    'c' : 2,
    'd' : 3,
    'e' : 4,
    'f' : 5,
    'g' : 6,
    'h' : 7,
    'i' : 8,
    'j' : 9,
    'k' : 10,
    'l' : 11,
    'm' : 12,
    'n' : 13,
    'o' : 14,
    'p' : 15,
    'q' : 16,
    'r' : 17,
    's' : 18,
    't' : 19,
    'u' : 20,
    'v' : 21,
    'w' : 22,
    'x' : 23,
    'y' : 24,
    'z' : 25
}

let keys2 = {
    '0' : 'a',
    '1' : 'b',
    '2' : 'c',
    '3' : 'd',
    '4' : 'e',
    '5' : 'f',
    '6' : 'g',
    '7' : 'h',
    '8' : 'i',
    '9' : 'j',
    '10' : 'k',
    '11' : 'l',
    '12' : 'm',
    '13' : 'n',
    '14' : 'o',
    '15' : 'p',
    '16' : 'q',
    '17' : 'r',
    '18' : 's',
    '19' : 't',
    '20' : 'u',
    '21' : 'v',
    '22' : 'w',
    '23' : 'x',
    '24' : 'y',
    '25' : 'z',
    '26' : 'A',
    '27' : 'B',
    '28' : 'C',
    '29' : 'D',
    '30' : 'E',
    '31' : 'F',
    '32' : 'G',
    '33' : 'H',
    '34' : 'I',
    '35' : 'J',
    '36' : 'K',
    '37' : 'L',
    '38' : 'M',
    '39' : 'N',
    '40' : 'O',
    '41' : 'P',
    '42' : 'Q',
    '43' : 'R',
    '44' : 'S',
    '45' : 'T',
    '46' : 'U',
    '47' : 'V',
    '48' : 'W',
    '49' : 'X',
    '50' : 'Y',
    '51' : 'Z',
    '52' : '0',
    '53' : '1',
    '54' : '2',
    '55' : '3',
    '56' : '4',
    '57' : '5',
    '58' : '6',
    '59' : '7',
    '60' : '8',
    '61' : '9'
}

//ENCODING STRING

function encode(str){
    let encodeTotal = 0;
    var counter = 0;
    let encodedString = '';
    let trimmedString = checkForA(str);

    for(let i=0; i<trimmedString.length; i++){
        encodeTotal += keys[trimmedString.charAt(i)] * Math.pow(26, trimmedString.length - (i+1));
    }    

    while(encodeTotal>0){
        let z = encodeTotal%62;
        encodedString += keys2[z];
        encodeTotal = Math.floor(encodeTotal/62);
    }

    encodedString = encodedString.split('').reverse().join('');

    if(counter > 0){
        for(let i=0; i<counter; i++){
            encodedString = 'a'+encodedString;
        }

        return encodedString;
    }

    return encodedString;

    function checkForA(str){
        for(let i=0; i<str.length; i++){
            if(str.charAt(i) === 'a'){
                counter++;
                continue;
            }

            else{
                return str.slice(counter, str.length);
            }
        }
    }
}

//DECODING STRING

function decode(encoded){
    let decodeTotal = 0;
    var counter = 0;
    let decodedString = '';
    let trimmedString = checkForA(encoded);

    for(let i=0; i<trimmedString.length; i++){
        decodeTotal += parseInt(Object.keys(keys2).find(key => keys2[key] === trimmedString.charAt(i))) * Math.pow(62, trimmedString.length - (i+1));
        console.log(decodeTotal);
    }

    while(decodeTotal>0){
        let z = decodeTotal%26;
        decodedString += Object.keys(keys).find(key => keys[key] === z);
        decodeTotal = Math.floor(decodeTotal/26);
    }

    decodedString = decodedString.split('').reverse().join('');

    if(counter > 0){
        for(let i=0; i<counter; i++){
            decodedString = 'a'+decodedString;
        }

        return decodedString;
    }

    else return decodedString;

    function checkForA(encoded){
        for(let i=0; i<encoded.length; i++){
            if(encoded.charAt(i) === 'a'){
                counter++;
                continue;
            }

            else{
                return encoded.slice(counter, encoded.length);
            }
        }
    }
}

let encodedString = encode(str);

console.log('Original String -> '+str);
console.log('Encoded String -> '+encodedString);
console.log('Decoded String -> '+decode(encodedString));