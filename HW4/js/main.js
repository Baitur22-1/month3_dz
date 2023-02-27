const btn = document.querySelector("button");
const wrapper = document.querySelector(".wrapper");

btn.addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-Type", "application.json");
    request.send();

    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        data.forEach((i) => {
            console.log(i);
            const card = document.createElement("div");
            card.innerHTML = `
            <div class="dog">
                <img class="dog-img" src="${i.photo}" alt="dog">
                <p>${i.name}</p>
                <span>${i.price}</span>
            </div>
            `

            wrapper.append(card)
        });
    });
});