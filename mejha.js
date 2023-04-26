let target = document.getElementsByClassName('container')[0];

let button = document.getElementById('click');

let time = document.querySelector('#timer').value;


function startTimer(time1)
{
    target.textContent = time1;
    if(time1>0)
    {
        time1--;
        setTimeout(()=>{
            startTimer(time1)
        }, time1*100);
    }
}

button.addEventListener('click', ()=>{
    startTimer(45);
});

