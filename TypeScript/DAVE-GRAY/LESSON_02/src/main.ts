// type inference or implicitly defining a variable type
let myName = 'Soch';

// explicitly defining a variable
let meaningOfLife: number = 42;
let isLoading: boolean = true;
let album: string | number;

album = "Van Halen";
album = 42;

const concat = (a: string, b: string): string => {
    return a + b;
}

concat("soch", "tech");

const sum = (a: number, b: number): number => a + b;
sum(3, 5);