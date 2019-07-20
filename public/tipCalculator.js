function calc() {
	var bill = parseFloat(document.getElementById('bill').value);
	var tip = parseFloat(document.getElementById("tip").value)

	var totalTip = bill * (tip/ 100)

	var totalBill = bill + totalTip
	document.getElementById("tipAmount").innerHTML= "$"+Number(totalTip).toFixed(2);
	 document.getElementById("total").innerHTML= "$"+Number(totalBill).toFixed(2);
}