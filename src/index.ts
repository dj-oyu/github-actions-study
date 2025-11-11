import { isEven } from './isEven';

export const checkEven = (num: number) => {
    console.log('Checking if a number is  even or odd.');
    const number = num;
    console.log(`Number ${number} is ${isEven(number) ? 'even' : 'odd'}`);
};