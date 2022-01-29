const query = window.location.search;
console.log("Searched URL. Got output:\n"+query);

const params = new URLSearchParams(query);
console.log("Found parameters. Got output:\n"+params);

const product = params.get('text');
console.log("Found value. Got output:\n"+product);

const wname = params.get('name');
const wavatar = params.get('pfp');
const wurl = params.get('url');

if (wname=="Bot Name") {
  wname = "JaxoDev's HTML API Bot";
}
if (wavatar=="Bot Picture URL") {
  wavatar = "";
}

function sendMessage(msg) {
  const request = new XMLHttpRequest();
  request.open("POST", wurl);
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    username: wname,
    avatar_url: wavatar,
    content: msg
  };
  request.send(JSON.stringify(params));
}

sendMessage(product);
