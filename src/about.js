import aboutImg from "../assets/rest-about-1.jpg"


function contentAbout() {
    let content = document.querySelector("#content");
    content.innerHTML = ''; //Clears the content body first

    const aboutBody = `
   <img class="img" src="${aboutImg}" alt="home-img">
           <div class="home-content">
               <div class="home-heading">
                <h2><i>Serving Flavor, Tradition & Heart.</i></h2>
               </div>
               <div class="home-body">
                <p>At ABC Restaurant, we blend generations of family recipes with modern flair.</p>
                <p>Every dish is crafted with passion, freshness, and a love for great food.</p>
               </div>
           </div>
    `
    content.innerHTML = aboutBody;
}

export {contentAbout}