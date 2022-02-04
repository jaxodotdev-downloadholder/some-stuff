var head = document.getElementsByTagName('HEAD')[0]; 
var link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css'; 
function theme(user, file) {
  link.href = 'https://discord.jaxo.dev/webdisc/themes/'+user+'/'+file+'.css';
  head.appendChild(link);
export { head, link, theme };
