function coneVol(radius,height) {
  return height/3 * 3.14 * radius*radius
}

const radius = 10;
const height = 20;

const result = "The volume of this cone is: " + coneVol(radius,height);
console.log(result);