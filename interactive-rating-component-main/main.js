let ratings = document.querySelectorAll('.circle');  
let btn = document.getElementById('submit'); 
let evaluation = document.querySelector('.evaluation'); 
let thankyou = document.querySelector('.thanks'); 
let span = document.getElementById('rating'); 


            for (let i = 0; i < ratings.length; i++) {
          
                     ratings[i].addEventListener('click', () => {            
                    let rating = ratings[i].innerHTML;
                    for (let i = 0; i < ratings.length; i++) {
                              ratings[i].classList.contains('selected')
                              ratings[i].classList.remove('selected');
                    }

                    
                    ratings[i].classList.add('selected');

                    
                    btn.addEventListener('click', () => {
                              evaluation.style.display = 'none';
                              thankyou.style.display = 'block';
                              span.innerHTML = rating;
                    })
          })
}
