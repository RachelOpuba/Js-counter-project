let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

console.log(value)

btns.forEach(function(item){
    item.addEventListener('click', function(e){
        const myBtn = e.target.classList;

        if(myBtn.contains("decrease")){
            count--;
            value.textContent = count;
        }else if (myBtn.contains("increase")){
            count++;
            value.textContent = count;

        }else{
            count = 0;
            value.textContent = count;
        }

        if (count > 0){
            value.style.color ="green"
        }else if(count < 0){
            value.style.color ="red"
        }else {
            value.style.color ="black"
        }

    })
})