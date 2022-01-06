
    const searchText = document.querySelector(".searchText");
    const searchBtn = document.querySelector(".btn");
    const displayResults = document.querySelector(".displayResult");
    const resultDiv = document.querySelector(".result");
  

    document.addEventListener("DOMContentLoaded",function() {
        searchText.value="";
    });


    searchBtn.addEventListener("click", function () {
        if(searchText.value===""){
            resultDiv.Hidden=true;
            alert("enter any text here to search");
        }
        else if(searchText.value!=""){
     const ApiURL = "https://api.jikan.moe/v3/search/anime?q="+`${searchText.value}`;


     function renderResult(result) {
      const resultDiv = document.createElement("div");
      resultDiv.className = "card";
      resultDiv.innerHTML = `
        <h2>${result.title}</h2>
        <img src="${result.image_url}" class="result-photo" />
        <p>Synopsis - ${result.synopsis}</p>
        <p>Episodes - ${result.episodes}</p>
        <p>Score - ${result.score}</p>
        <p>Rated - ${result.rated}</p>
        <p>IMAGE -${result.image_url}<?p>
        `;
      displayResults.appendChild(resultDiv);
    }

    function renderAll(results) {
      displayResults.innerHTML = "";
      resultDiv.hidden = false;
      let count=0;
      for(let result of results){
          if(result.rated==="PG-13"){ 
            renderResult(result);
             count++;
           if(count===20)break;
          }
      }
    }
    
   
    let func = async function(ApiURL){
        try{
        const response = await fetch(ApiURL);
        var result = await response.json();
        renderAll(result.results);
        }
        catch(error){
          console.log(error.message);
          alert("try to be more specific")
        }
    }
    
    func(ApiURL);
    }
});



































