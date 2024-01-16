function updateTime() {
	const now = new Date();
	const timeElement = document.getElementById('time');
	const dateElement = document.getElementById('date');

	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');

	const year = now.getFullYear();
	const month = (now.getMonth() + 1).toString().padStart(2, '0');
	const day = now.getDate().toString().padStart(2, '0');

	const timeString = `${hours} : ${minutes} : ${seconds}`;
	const dateString = `${day} - ${month} - ${year}`;

	timeElement.textContent = timeString;
	dateElement.textContent = dateString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();
