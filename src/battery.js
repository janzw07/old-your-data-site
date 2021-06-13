const setBatteryCharge = (parent) => {
	const battery = navigator.getBattery();
	const batteryCharging = document.createElement('p');
	parent.appendChild(batteryCharging);
	if (battery.charging) {
		batteryCharging.innerHTML = `Your battery is charging`;
		const batteryChargingTime = document.createElement('p');
		batteryChargingTime.innerHTML = `Your battery will charged in ${battery.chargingTime} seconds`;
		parent.appendChild(batteryChargingTime);
		return 1;
	}
	batteryCharging.innerHTML = `Your battery is not charging`;
	return 0;
};

const createBatteryInfo = (parent = document.getElementById('root')) => {
	const batteryInfo = document.createElement('div');
	const batteryLevel = document.createElement('p');
	navigator.getBattery().then((battery) => {
		batteryLevel.innerHTML = `Your battery Percentage ${battery.level * 100}%`;
		setBatteryCharge(battery);
	});
	parent.appendChild(batteryInfo);
};
export default createBatteryInfo;
