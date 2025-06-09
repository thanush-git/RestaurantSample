const content = document.querySelector("#content");

content = ''; //Clears the content body first

const contentBody = ```
<img class="img" src="home-img" alt="home-img">
        <div class="home-content">
            <div class="home-heading">
                <h2><i>Fork Yeah, it's Tasty!</i></h2>
            </div>
            <div class="home-body">
                <p>Come hungry, leave in a food coma. That’s our motto.</p>
            </div>
        </div>
```
content.innerHTML = contentBody;