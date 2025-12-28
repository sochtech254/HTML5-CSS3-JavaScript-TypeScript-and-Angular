function calculateRectangleArea(
    lengthRectangle: number,
    widthRectangle: number
): number {
    return lengthRectangle * widthRectangle;
}

// calling the function with valid arguments
const lengthRectangle = 5;
const widthRectangle = 3;

const area = calculateRectangleArea(lengthRectangle, widthRectangle);
console.log(`The area of the rectangle is: ${area}`);