let allImg=document.querySelectorAll("img");
console.log(allImg[0])
for(let i=0; i<allImg.length;++i)
{
    allImg[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    allImg[i].alt="Elzero Logo";
 }