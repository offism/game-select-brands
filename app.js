let icons = [
    { title: 'Facebook', url: './icons/facebook.png' },
    { title: 'Gmail', url: './icons/gmail.png' },
    { title: 'Google Maps', url: './icons/google-maps.png' },
    { title: 'Instagram', url: './icons/instagram.png' },
    { title: 'LinkedIn', url: './icons/linkedin.png' },
    { title: 'Odnoklassniki', url: './icons/odnoklassniki.png' },
    { title: 'Paypal', url: './icons/paypal.png' },
    { title: 'Pinterest', url: './icons/pinterest.png' },
    { title: 'Google', url: './icons/search.png' },
    { title: 'Skype', url: './icons/skype.png' },
    { title: 'Snapchat', url: './icons/snapchat.png' },
    { title: 'Telegram', url: './icons/telegram.png' },
    { title: 'Tik-Tok', url: './icons/tik-tok.png' },
    { title: 'Tumblr', url: './icons/tumblr.png' },
    { title: 'Twitter', url: './icons/twitter.png' },
    { title: 'Viber', url: './icons/viber.png' },
    { title: 'Vimeo', url: './icons/vimeo.png' },
    { title: 'Whatsapp', url: './icons/whatsapp.png' },
    { title: 'Yahoo', url: './icons/yahoo.png' },
    { title: 'Yandex', url: './icons/yandex.png' },
    { title: 'Youtube', url: './icons/youtube.png' },
]
let body = document.getElementById('mbody');
// Rendering Imgs
renderingImgs();
function renderingImgs(){
    for (let elem of icons) {
        let creatImg = document.createElement('img');
        creatImg.setAttribute('src', `${elem.url}`);
        creatImg.setAttribute('class', 'socialMIcons');
        creatImg.setAttribute('alt', `${elem.title}`);
        creatImg.style.top = Math.floor(Math.random() * 450) + 'px';
        creatImg.style.left = Math.floor(Math.random() * 1000) + 'px';
        body.appendChild(creatImg);
    }
}

let arr = [];
for (let i = 0; i <= 20; i++)
arr.push(i);

// Placing numbers randomly
function shuffle(arr) {
    return arr.map(function (val, i) {
        return [Math.random(), i];
    }).sort().map(function (val) {
        return val[1];
    });
}
let retunedArray=shuffle(arr);

let iconsName = [
    { id: 0, title: 'Facebook' },
    { id: 1, title: 'Gmail' },
    { id: 2, title: 'Google Maps' },
    { id: 3, title: 'Instagram' },
    { id: 4, title: 'LinkedIn' },
    { id: 5, title: 'Odnoklassniki' },
    { id: 6, title: 'Paypal' },
    { id: 7, title: 'Pinterest' },
    { id: 8, title: 'Google' },
    { id: 9, title: 'Skype' },
    { id: 10, title: 'Snapchat' },
    { id: 11, title: 'Telegram' },
    { id: 12, title: 'Tik-Tok' },
    { id: 13, title: 'Tumblr' },
    { id: 14, title: 'Twitter' },
    { id: 15, title: 'Viber' },
    { id: 16, title: 'Vimeo' },
    { id: 17, title: 'Whatsapp' },
    { id: 18, title: 'Yahoo' },
    { id: 19, title: 'Yandex' },
    { id: 20, title: 'Youtube' }
]





// Find Icons
findIcons();
function findIcons(){
    
    let socialMediaIcons = document.querySelectorAll('.socialMIcons');
    let infoAlert=document.querySelector('.alert');
    
    let randomId;
    randomId = Math.floor(Math.random() * 20);
    iconsName.filter((elemss) => {
        if (elemss.id == randomId) {
            input.value = elemss.title;
        }
    });
    
    
    let indexOfNumber=retunedArray.indexOf(randomId);
    retunedArray.splice(indexOfNumber,1);


    for (let icon of socialMediaIcons) {
        icon.onclick = (e) => {
            if (e.target.alt == input.value) {
                

                let removedItem = e.target;
                removedItem.remove();
                infoAlert.innerText='Good Job !'
                infoAlert.style.color='#fff';
                infoAlert.style.backgroundColor='#28a745';
                infoAlert.style.opacity='1';
                setTimeout(()=>{
                    infoAlert.style.opacity='0';
                },800)
                

                let shiftNumber=retunedArray.shift();
                console.log(retunedArray);
                if(shiftNumber==undefined){
                    let img=document.createElement('img');
                    let alertion;
                    alertion=document.createElement('div');
                    alertion.setAttribute('class','won-alertion')
                    img.setAttribute('src','https://i.pinimg.com/originals/ca/a0/fe/caa0fef590a31845d39eb9d6ae60d0e9.gif');
                    let p=document.createElement('p');
                    p.innerText='You Won The Game';
                    alertion.appendChild(img);
                    alertion.appendChild(p);
                    inputName.appendChild(alertion)
                    input.value=null;
                }
                

                for(let key of iconsName){
                    if(key.id==shiftNumber){
                        input.value=key.title;
                    }
                }
                
            }
            else{
                infoAlert.innerText='No No.. !'
                infoAlert.style.color='#fff';
                infoAlert.style.backgroundColor='#dc3545';
                infoAlert.style.opacity='1';
                setTimeout(()=>{
                    infoAlert.style.opacity='0';
                },800)
            }
        }
    }
    
}


newBtn.onclick=()=>{
    body.innerHTML=null;
    alertion.innerHTML=null;
    renderingImgs();
    findIcons();
}



