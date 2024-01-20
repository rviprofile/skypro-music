let counter = 0;

const recursion = () => {
    if (counter < 200000) {
        counter++;
        recursion()
        console.log(counter);
    }
}
 recursion()