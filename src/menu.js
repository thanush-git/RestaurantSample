function contentMenu() {
    let content = document.querySelector("#content");
    content.innerHTML = ''; //Clears the content body first

    const menuBody = `
    <div class="menu-body">
        <table>
            <tr>
                <td>Pasta</td>
                <td class="price">$1.99</td>
            </tr>
             <tr>
                <td>Pizza</td>
                <td class="price">$2.99</td>
            </tr>
             <tr>
                <td>Salad</td>
                <td class="price">$1.99</td>
            </tr>
             <tr>
                <td>Wine</td>
                <td class="price">$2.99</td>
            </tr>
        </table>
    </div>
    `
    content.innerHTML = menuBody;
}

export {contentMenu}