const slider = document.querySelector('#slider');
const display = document.querySelector('.display');
const display_hide=document.querySelector('.display_hide');

slider.addEventListener('input',()=>{
if(slider.value==1)
{
    document.body.style.backgroundColor='red';
    display.innerHTML='red';
    display_hide.classList.remove('display_hide');
    setTimeout(()=>{
        display_hide.classList.add('display_hide');
        
    },2000);
}
else if(slider.value==2)
{
    document.body.style.backgroundColor='green';
    display.innerHTML='green';
    display_hide.classList.remove('display_hide');
    setTimeout(()=>{
        display_hide.classList.add('display_hide');
        
    },2000);
}
else if(slider.value==3)
{
    document.body.style.backgroundColor='blue';
    display.innerHTML='blue';
    display_hide.classList.remove('display_hide');
    setTimeout(()=>{
        display_hide.classList.add('display_hide');
        
    },2000);
}
else if(slider.value==4)
{
    document.body.style.backgroundColor='yellow';
    display.innerHTML='yellow';
    display_hide.classList.remove('display_hide');
    setTimeout(()=>{
        display_hide.classList.add('display_hide');
        
    },2000);
}
else if(slider.value==5)
{
    document.body.style.backgroundColor='black';
    display.innerHTML='black';
    display_hide.classList.remove('display_hide');
    setTimeout(()=>{
        display_hide.classList.add('display_hide');
        
    },2000);
}
else if(slider.value==6)
{
    document.body.style.backgroundColor='pink';
    display.innerHTML='pink';
    display_hide.classList.remove('display_hide');
    setTimeout(()=>{
        display_hide.classList.add('display_hide');
        
    },2000);
}
else if(slider.value==7)
{
    document.body.style.backgroundColor='brown';
    display.innerHTML='brown'
    display_hide.classList.remove('display_hide');
    setTimeout(()=>{
        display_hide.classList.add('display_hide');
        
    },2000);
}
else if(slider.value==8)
{
    document.body.style.backgroundColor='gold';
    display.innerHTML='gold';
    display_hide.classList.remove('display_hide');
    setTimeout(()=>{
        display_hide.classList.add('display_hide');
        
    },2000);
}
else if(slider.value==9)
{
    document.body.style.backgroundColor='gray';
    display.innerHTML='gray';
    display_hide.classList.remove('display_hide');
    setTimeout(()=>{
        display_hide.classList.add('display_hide');
        
    },2000);
}
else 
{
    document.body.style.backgroundColor='purple';
    display.innerHTML='purple';
    display_hide.classList.remove('display_hide');
    setTimeout(()=>{
        display_hide.classList.add('display_hide');
        
    },2000);
}
});

