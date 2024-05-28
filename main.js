const generateMmemeBtn= document.querySelector{
    "meme-generator .generate-meme-btn"
}
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails =(ulr,title,author) =>{
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML =author;
}
const generateMeme = () => {
    
       fetch(
        ("https://github.com/sajana4403/MEME-GENERATOR.git).then(response) =>
         response.json().then(data => {
            updateDetails(data.url, data.title, data.author);
         });


        
        
}
generateMmemeBtn.addEventListener("click",generateMeme);