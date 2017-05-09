//ID's
var submit = document.getElementById("submit");
var clear = document.getElementById("clear");
var donorTable = document.getElementById("donorTable");
//dom stuff

function populateDOM (){
infoArray = walkAthon.getInfo();
for(var i =0; i < infoArray.length; i++) {
	stringBuilder = `<tr><td>${infoArray[i].name}</td><td>${infoArray[i].lastName}</td><td>${infoArray[i].email}</td><td>${infoArray[i].dollars}</td><td>${infoArray[i].paymentModel}</td></tr>`
}
	donorTable.innerHTML += stringBuilder;
}

submit.addEventListener("click", function(event){
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var email = document.getElementById("email");
	var dollarAmount = document.getElementById("dollarAmount");
	var whichselected;
	var radios = document.getElementsByName('paymentModel');
		for (var i = 0; i < radios.length; i++){
			if (radios[i].checked){
				whichselected = radios[i].value;
				break;
			}
		}
	var newDonor = {name: firstName.value, lastName: lastName.value, email: email.value, dollars: dollarAmount.value, paymentModel: whichselected};
	walkAthon.addDonor(newDonor);
	populateDOM();
});

clear.addEventListener("click", function(event){
	firstName.value = "";
	lastName.value = "";
	email.value = "";
	dollarAmount.value = "";
})




console.log(walkAthon.getInfo());
console.log(email);