let schoolReport = 101;


if (schoolReport >= 0 && schoolReport <= 100){ 
if (schoolReport >= 90) {
    console.log("A");
} else if (schoolReport >= 80) {
    console.log("B");
} else if (schoolReport >= 70) {
    console.log("C");
} else if (schoolReport >= 60) {
    console.log("D");
} else if (schoolReport >= 50) {
    console.log("E");
} else if (schoolReport < 50) {
    console.log("F");
}
} else {
console.log("Invalid school report");
}