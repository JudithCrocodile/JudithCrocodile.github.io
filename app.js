
var open = document.querySelector('.open');
var close = document.querySelector('.close');

open.addEventListener('click', function(){
    document.querySelector('.nav-list').classList.add('active');
    console.log('open');
});

close.addEventListener('click', function(){
    document.querySelector('.nav-list').classList.remove('active');
    console.log('close');
});


