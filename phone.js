function printPhone() {
    const zero = ['*****','*    ','*****','*   *','*****'];
    const one  = ['*****','    *','*****','    *','*****'];
    const two  = ['*****','*    ','*****','*   *','*****'];
    const three= ['*****','    *','   * ','  *  ',' *   '];
    const four = ['*****','*   *','*   *','*   *','*****'];
    const five = ['*****','*   *','*****','*   *','*****'];
    const six  = ['*****','*   *','*****','*   *','*****'];
    const seven= ['*****','*   *','*****','*   *','*****'];
    const eight= ['*   *','*   *','*****','    *','    *'];
    const nine = ['  *  ','  *  ','  *  ','  *  ','  *  '];
    
 const digits = [zero, one, two, three, four, five, six, seven, eight, nine];
    
    for (let row = 0; row < 5; row++) {  
        let line = '';
        for (let col = 0; col < 10; col++) {
            line += digits[col][row];
            if (col < 9) line += ' ';
        }
        console.log(line);
    }
}

printPhone();
