document.addEventListener("DOMContentLoaded", () => {
    const jokeElement = document.getElementById("joke");
    const getJokeButton = document.getElementById("getJoke");

    getJokeButton.addEventListener("click", () => {
        // Realiza una solicitud a la API
        fetch("https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=nsfw,racist,sexist,explicit")
            .then((response) => response.json())
            .then((data) => {
                if (data.type === "single") {
                    jokeElement.textContent = data.joke;
                } else if (data.type === "twopart") {
                    jokeElement.textContent = `${data.setup} ${data.delivery}`;
                } else {
                    jokeElement.textContent = "No se pudo obtener un chiste en este momento. Inténtalo de nuevo más tarde.";
                }
            })
            .catch((error) => {
                console.error("Error al obtener el chiste:", error);
                jokeElement.textContent = "Se produjo un error al obtener el chiste. Inténtalo de nuevo más tarde.";
            });
    });
});
