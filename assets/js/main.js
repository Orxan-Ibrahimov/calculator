let clear = document.querySelector('.clear');
let monitor = document.querySelector('.monitor');
let butons = document.querySelectorAll('.buton');
let equal = document.querySelector('.equal');
let operation = '';

window.addEventListener('load', Loading());

function Loading(params) {
    
    butons.forEach(function(buton,index) {
        if(buton.classList.contains('equal') || buton.classList.contains('clear')){

        }
        else{
            buton.addEventListener('click', function() {
                monitor.value += buton.textContent;
                operation += Number.parseFloat(buton.textContent);
              
            });
        }
    });

    clear.addEventListener('click', function() {
        monitor.value = '';
    });

   equal.addEventListener('click', function() {
      if (monitor.value != '') {
          console.log(monitor.value);
        let operation = eval(monitor.value);    
        monitor.value = operation;
      }
});


};
   
