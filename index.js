const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const initial = 0;
const totalBatteries = batteryBatches.reduce((together, value)=> together + value, initial);
console.log(totalBatteries);
