const startBtn = document.querySelector(".container__start_button");
const cleanBtn = document.querySelector(".container__clean_button");
const gallery = document.querySelector(".gallery");
const errorMessage = document.getElementById("messages__errorMessage");
async function getImage(){
    try {
        document.getElementById("messages__loader").style.display = "block";
        console.log('Показан лоадер');
        const res = await fetch("https://dog.ceo/api/breeds/image/random/20");
        console.log('загрузка выполнена');
        if(!res.ok){
             throw new Error("Ошибка загрузки. Повторите позже");
        }
        const data = await res.json();
        console.log('Данные получены', data);
        if(data){
            displayImage(data.message)
        }
    }
    catch (e){
        console.error(e.message);
        errorMessage.textContent = e.message;
        errorMessage.style.display = "block";
    }
    finally{
        document.getElementById("messages__loader").style.display = "none";
    }
}
function displayImage(urls){
    gallery.innerHTML = "";
urls.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    gallery.appendChild(img);
});
}

startBtn.addEventListener("click", getImage);
cleanBtn.addEventListener('click', () => {
    gallery.innerHTML = ''; 
    errorMessage.style.display = 'none'; 
});

const link = document.getElementById("fakeLink");

linkBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    console.log("Ссылка не откроется");
});
