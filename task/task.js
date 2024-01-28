const days = {
	0: 'Sunday',
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday',
};

//  Your code here
function getWeekDay(offset) {
	let currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + offset);

	const dayIndex = currentDate.getDay();
	console.log(dayIndex);

	return days[dayIndex];
}

const day = getWeekDay(-1);
console.log(day);
