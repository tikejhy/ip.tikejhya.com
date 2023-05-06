$.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {


document.getElementById("json").textContent = data.ip;


var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);
document.body.style.background = bgColor;

document.close();
});