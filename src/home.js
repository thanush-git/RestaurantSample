import homeImg from "../assets/restaurant.jpg"

function contentHome() {
    let content = document.querySelector("#content");
    content.innerHTML = ''; //Clears the content body first
    const bodyContent = 
    `
<img class="img" src="${homeImg}" alt="home-img">
        <div class="home-content">
            <div class="home-heading">
                <h2><i>Fork Yeah, it's Tasty!</i></h2>
            </div>
            <div class="home-body">
                <p>Come hungry, leave in a food coma. That’s our motto.</p>
            </div>
        </div>
`;
content.innerHTML = bodyContent;
}

export{contentHome};
