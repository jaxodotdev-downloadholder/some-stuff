var url = "";
var nameUE = "JaxoDev's HTML API";
var pfp = "";
var msg = "";
var name = nameUE.replace(" ", "%20")

var output = document.getElementById("output").innerHTML;

function refreshVars() {
  url = document.getElementById("url").value;
  msgUE = document.getElementById("message").value;
  msg = msgUE.replace(" ", "%20")
  nameUE = document.getElementById("name").value;
  name = nameUE.replace(" ", "%20")
  pfp = document.getElementById("pfp").value;
}

function gen() {
  refreshVars();
  output = "https://discord.jaxo.dev/htmlapi/run/?text="+msg+"&url="+url+"&name="+name+"&pfp="+pfp;
  open(output);
}