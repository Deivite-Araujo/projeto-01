let myBtn = document.querySelector('.btnGoTop');

window.onscroll = () => {
if (document.body.scrollTop> 20 || document.documentElement.scrollTop > 20){
	myBtn.style.opacity = 100;
	myBtn.style.visibility = 'visible';

} else{
	myBtn.style,opacity = 0;
	myBtn.style.visibility = 'hidden';
	}
}

myBtn.addEventListener('click', () =>{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});