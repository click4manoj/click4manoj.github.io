document.querySelector('body').addEventListener('mouseleave',function(){
	let cookieArr = document.cookie.split("=");
	if('hidePopup' != cookieArr[0]){
		document.querySelector('.popup').classList.add('active');
	}
});
document.querySelector('.popupIntent').addEventListener('click',function(){
	document.querySelector('.popup').classList.remove('active');
	let exdays = 7;
	let d = new Date();
	d.setTime(d.getTime() + (exdays  * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = `hidePopup=true; ${expires}`;
});
document.querySelector('.contactBtn').addEventListener('click', function(e){
	e.preventDefault();
	document.querySelector('.popupContact').classList.add('active');
});
document.querySelector('.closeContact').addEventListener('click', function(e){
	e.preventDefault();
	document.querySelector('.popupContact').classList.remove('active');
	document.querySelector('.mainForm').style.display = '';
	document.querySelector('.thanyou').textContent = '';
});
document.querySelector('#gform').addEventListener('submit', function(e){
	document.querySelector('.mainForm').style.display = 'none';
	document.querySelector('.thanyou').append('Thank you for connecting me, Will reach you shortly!');
});
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
	if(event.keyCode == 123) {
		return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
		return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
		return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
		return false;
	}
	if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
		return false;
	}
}