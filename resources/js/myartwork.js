
function gallery(){
    const highlight = document.querySelector(".highlight");
    const previews = document.querySelectorAll(".preview img");
  
    previews.forEach(preview =>{
      preview.addEventListener("click", function(){
        const smallsrc = this.src;
        const bigsrc = smallsrc.replace("small", "big");
        highlight.src = bigsrc;
        previews.forEach(preview => preview.classList.remove("active"));
        preview.classList.add("active");
      });
    });
  }
  gallery();

 