const input = document.getElementById("searchInput");
const btn = document.getElementById("search_btn");
const luckyBtn  = document.getElementById("feeling_lucky");

luckyBtn.addEventListener("click" , ()=>{
    window.location.href = `https://doodles.google/`;
})

btn.addEventListener("click" , ()=>{
  const value = input.value.trim();
  if(value !== ""){
    input.value = "";
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(value)}`;
  }
})

document.addEventListener("keydown" , (event)=>{
  const value = input.value.trim();
  if(event.key === "Enter"){
    input.value = "";
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(value)}`;
  }
})
