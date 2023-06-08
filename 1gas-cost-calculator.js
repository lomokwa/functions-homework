// Gas calculator at $0,15/mi

function mileageCalculator(odomLast, odomFirst) {
  return odomLast - odomFirst;
}

const odomFirst = 130000 // This is the initial odometer value.
const odomLast = 150000 // This is the final odometer value.

const totalPrice = "The gas cost for this trip was $"+mileageCalculator(odomLast,odomFirst) * .15;
console.log(totalPrice);
