// find the largest sequence of the repeated characters from the given string
// save the character and the count of how many times that character is repeated
// the result should be character 'f' and the count is 10 as you may se from the string below

var str = "aabbbbdddddkkkkkkhhhhhhffffffffffiiiikkssllssaaaa";

function repeat(str) {
    let strLength = str.length;
    let count = 0;
    let res = str[0];
    for (let i = 0; i < strLength; i++) {
        let cur_count = 1;
        for (let j = i + 1; j < strLength; j++) {
            if (str[i] != str[j])
                break;
            cur_count++;
        }
        if (cur_count > count) {
            count = cur_count;
            res = str[i];
        }
    }
    document.write(count + " ")
    return res;
}
document.write(" " + repeat(str));


