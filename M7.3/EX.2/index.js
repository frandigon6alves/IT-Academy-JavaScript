function showSetback() {
	
  const input = document.getElementById("input-string").value;
	let stringSetback = "";

	for (let i = input.length - 1; i >= 0; i--) {
		stringSetback += input[i];
	}

	document.getElementById("result").innerHTML = stringSetback;
}