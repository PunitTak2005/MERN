function printPUNIT() {
    const P = ['*****','*   *','**** ','*    ','*    '];
    const U = ['*   *','*   *','*   *','*   *','*****'];
    const N = ['*   *','**  *','* * *','*  **','*   *'];
    const I = ['*****','  *  ','  *  ','  *  ','*****'];
    const T = ['*****','  *  ','  *  ','  *  ','  *  '];
    
    const letters = [P, U, N, I, T];
    
    for (let row = 0; row < 5; row++) {
        let line = '';
        for (let col = 0; col < 5; col++) {
            line += letters[col][row];
            if (col < 4) line += ' ';
        }
        console.log(line);
    }
}

printPUNIT();
