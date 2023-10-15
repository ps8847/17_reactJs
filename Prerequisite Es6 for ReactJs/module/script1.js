export let a = 10;
// export const add = () => 10 + 50;

// let a = 10;
const add = () => 10 + 50;

export {
    a,
    add
};

const sub = () => {
    let num1 = 50;
    let num2 = 20;
    return num1 - num2;
}

export default sub;