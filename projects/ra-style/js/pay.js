if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready(){
    var buton = document.getElementById('submit');
    buton.addEventListener('click', function(){
        alert('Thank you for your purchase');
    });
}
