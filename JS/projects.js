async function getPosts() {
    try {
        const res = await fetch('./json/projects.json');
        const data = await res.json();
        console.log(data);
        data.forEach(element => {
            const div = document.createElement("div");
            div.classList.add("project-card");
            div.classList.add("light-big");
            const grid = document.getElementById("projectGrid");
            grid.appendChild(div);
            div.innerHTML += `
                    <img src="${element.img}" alt="${element.title}">
                    <h3 class="allcaps-headline">${element.title}</h2>
                    <p>${element.text}</p>
                    <p class="date">${element.date}</p>
                    <p class="date">${element.skills}</p>
                    <a href="${element.link}">Webseite besichtigen --></a>`
        });
    } catch (error) {
        console.error(error);
    }
}

getPosts();