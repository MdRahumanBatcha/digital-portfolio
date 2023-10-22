const header=document.querySelector('header');
header.addEventListener('mouseover',function()
{
    header.style.backgroundColor='blue';
});
header.addEventListener('mouseout',function(){
    header.style.backgroundColor='#333';
});
document.querySelectorAll('a[href^="#"]').forEach(anchor=>
{
    anchor.addEventListener('click',function(e)
    {
        e.preventDefault();
        const targetId=this.getAttribute('href').substring(1);
    const targetElement=document.getElementById(targetId);
    if(targetElement)
    {
        window.scrollTo({
            top:targetEement.offsetTop,behavior:'smooth'
        });

    }
    });
});