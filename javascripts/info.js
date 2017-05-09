var walkAthon = (function(original){
	var donorInfo = [];

	return {
		getInfo: function (){
			return donorInfo;
		},
		addDonor: function (newDonor) {
			donorInfo.push(newDonor);///walkathon.adddonor invoke this function
		}
	}

})(walkAthon || {});
