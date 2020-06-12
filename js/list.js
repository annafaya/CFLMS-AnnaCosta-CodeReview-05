let info = {
    "About": [{
            "Title": "5x Chico - O Velho e Suas Histórias",
            "Directorcall": "Directed by:",
            "Director": "Ana Rieper, Camilo Cavalcante, Eduardo Goldenstein, Eduardo Nunes e Gustavo Spolidoro",
            "Descriptioncall": "About the movie:",
            "Description": "A journey through one of the largest rivers in Brazil and the states where it passes. A spectacular documentary covering local histories and cultures.",
        },
        {
            "Title": "Unicórnio",
            "Directorcall": "Directed by:",
            "Director": "Eduardo Nunes",
            "Descriptioncall": "About the movie:",
            "Description": "A film for those who like cinema in its essence. Mother and daughter live in isolation, living the calmest life that can be had until a man appears to destabilize the balance between the two.",
        },
        {
            "Title": "Cidade de Deus",
            "Directorcall": "Directed by:",
            "Director": "Fernando Meirelles e Kátia Lund",
            "Descriptioncall": "About the movie:",
            "Description": "A dive into the reality of the favelas of Rio de Janeiro, which despite having changed since the time portrayed in the film, has not changed that much. One of the best Brazilian films of all time.",
        },
        {
            "Title": "Lisbela e o Prisioneiro",
            "Directorcall": "Directed by:",
            "Director": "Guel Arraes",
            "Descriptioncall": "About the movie:",
            "Description": "Lisbela is from a wealthy family and is engaged when Leléu arrives in the city where she lives and they fall in love. A comedy with the face of the interior of Brazil and its everyday characters.",
        },
        {
            "Title": "O Auto da Compadecida",
            "Directorcall": "Directed by:",
            "Director": "Guel Arraes",
            "Descriptioncall": "About the movie:",
            "Description": "Based on the award-winning play by Ariano Suassuna, a spectacular film. The film shows the adventures of João Grilo and Chicó. They are always deceiving the people of a small village in the Paraíba hinterland, until they mess with the wrong person!",
        },
        {
            "Title": "Bacurau",
            "Directorcall": "Directed by:",
            "Director": "Juliano Dornelles e Kleber Mendonça Filho",
            "Descriptioncall": "About the movie:",
            "Description": "Strange things and deaths start to happen in the small town of Bacurau. A lot of blood is coming and you will cheer for the city residents.",
        }
    ]
};


$(document).ready(function() {
    let i = 0;
    for (i = 0; i < info.About.length; i++) {

        $(".info:eq(" + i + ")").append("<h3>" + info.About[i].Title + "</h3>" + "<br>");
        $(".info:eq(" + i + ")").append("<h4>" + info.About[i].Descriptioncall + "</h4>" + "<p>" + info.About[i].Description + "</p>" + "<br>");
        $(".info:eq(" + i + ")").append("<h4>" + info.About[i].Directorcall + "</h4>" + "<p>" + info.About[i].Director + "</p>");
       // $(".info:eq(" + i + ")").append("<p>" + info.About[i].Director + "</p>" + "<br>");
    }
});

//-----------------end of list part------------------
//-----------------starting js for the like button-----------------------

