const ang1 = 60;
const ang2 = 50;
const ang3 = 60;

let sumAngles = ang1 + ang2 + ang3;
let positiveAngles = ang1 > 0 && ang2 > 0 && ang3 > 0;
if (positiveAngles)
if (sumAngles === 180){
    console.log(true);
} else {
    console.log(false);
} else {
    console.log("Invalid angle");
}
