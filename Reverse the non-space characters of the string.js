function reverseStringSpaces(str) {
    const chars = str.split('');
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        while (left < right && chars[left] === ' ') left++;
        while (left < right && chars[right] === ' ') right--;

        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }

    return chars.join('');
}

const input = "this is the new string";
console.log(reverseStringSpaces(input));
