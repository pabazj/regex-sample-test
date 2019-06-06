function isValidPlate(licenseNumber) {
	var formatedInput = licenseNumber.value.replace(/\s{2,}/g,' ').trim();

	var vintage = new RegExp(/^[0-9]{2} [a-zA-Z]{3} [0-9]{4}$/);
	var old = new RegExp(/(^[0-9]{2}[\s-]+[0-9]{4})|(^[0-9]{3}[\s-]+[0-9]{4}$)/);
	var modern = new RegExp(/(^[A-Z]{2} [A-Z]{2}[\s-]+[0-9]{4})|(^[A-Z]{3}[\s-]+[0-9]{4}$)/);

	if (formatedInput !== "") {
		if (vintage.test(formatedInput) || old.test(formatedInput) || modern.test(formatedInput)) {
			return true;
		}
		else {

			return false;
		}
	}
}

function getPlateType(licenseNumber) {

	var formatedInput = licenseNumber.value.replace(/\s{2,}/g,' ').trim();

	var vintage = new RegExp(/^[0-9]{2} [a-zA-Z]{3} [0-9]{4}$/);
	var old = new RegExp(/(^[0-9]{2}[\s-]+[0-9]{4})|(^[0-9]{3}[\s-]+[0-9]{4}$)/);
	var modern = new RegExp(/(^[A-Z]{2} [A-Z]{2}[\s-]+[0-9]{4})|(^[A-Z]{3}[\s-]+[0-9]{4}$)/);

	if (vintage.test(formatedInput)) {
		return "vintage";
	}
	else if (old.test(formatedInput)) {
		return "old";
	}
	else if (modern.test(formatedInput)) {
		return "modern";
	}
}

function checkLicensePlate() {
	var userInput = document.getElementsByName("enter")[0];
	if (isValidPlate(userInput)) {
		document.getElementById('result').innerHTML = getPlateType(userInput);
	}
	else {
        document.getElementById('result').innerHTML = 'Invalied';
       
	}
	clearInputField();
}

function clearInputField() {
    var userInput = document.getElementById('licencePlate');
    if (userInput) {
        userInput.value = "";
    }
}

