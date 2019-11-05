let hoursWorked = prompt("Please enter your hours for the week")
let hourlyRate = prompt("Please enter your hourly pay rate")
let overtimeRate = hourlyRate*1.5;

function calculateRegularPay(regularHours, hourlyRate){
	let regularPay = regularHours*hourlyRate;
	return regularPay;
}

function calculateOvertimePay(overtimeHours, overtimeRate){
	let overtimePay = overtimeHours*overtimeRate;
	return overtimePay;
}

function calculateTotalPay(regularPay, overtimePay){
	let totalPay = regularPay+overtimePay;
	return totalPay;
}

function printCheckInformation(totalPay, regularHours, overtimeHours, totalHours, regularPay, overtimePay, totalPay){	
	alert("Total Pay of $"+totalPay);
	console.log("Regular Hours: "+regularHours);
	console.log("Overtime Hours: "+overtimeHours);
	console.log("Total Hours: "+totalHours);
	console.log("Regular Pay: $"+regularPay);
	console.log("Overtime Pay: $"+overtimePay);
	console.log("Total Pay: $"+totalPay);
}

if (hoursWorked < 40) {
	let regularHours = hoursWorked;
	let overtimeHours = 0;
	let totalHours = regularHours;
	let regularPay = calculateRegularPay(regularHours, hourlyRate);
	let overtimePay = calculateOvertimePay(overtimeHours, overtimeRate);
	let totalPay =  calculateTotalPay(regularPay, overtimePay);
	printCheckInformation(totalPay, regularHours, overtimeHours, totalHours, regularPay, overtimePay, totalPay)
} else {
	let regularHours = 40;
	let overtimeHours = hoursWorked-40;
	let totalHours = regularHours+overtimeHours;
	let regularPay = calculateRegularPay(regularHours, hourlyRate);
	let overtimePay = calculateOvertimePay(overtimeHours, overtimeRate);
	let totalPay =  calculateTotalPay(regularPay, overtimePay);

	printCheckInformation(totalPay, regularHours, overtimeHours, totalHours, regularPay, overtimePay, totalPay)	
}
