var el=document.getElementById('one');
var el1=document.getElementById('two');
function set1()
{
    el.className='cool';
    el1.className='hot';
}
el1.addEventListener('onmousemove',set1);
