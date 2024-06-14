
var nameList = ["Marley Kemp", "Melvin Flynn", "Dorothy Reeves", "Clark Yu", "Navy Bernal", "Eithan Mason", "Sienna Duarte", "Abdullah Lucero", "Ila Lowe", "Julius Best",
    "Lexie Peralta", "Dangelo Kim", "Gabriella Thomas", "Logan Ellis", "Ayla Wang", "Cohen Baxter", "Lara Reilly", "Alvaro Potts", "Ellison Medrano", "Arian Salgado",
    "Avalynn Bullock", "Ben Le", "Myla Tanner", "Bruno Gates", "Melina Grimes", "Harlan Zamora", "Sierra Cisneros", "Alden Blair", "Frances Chung", "Ira Pace",
    "Giana Hartman", "Baker Cordova", "Florence Blair", "Troy Glover", "Alessia Reynolds", "Vincent Shaw", "Emersyn Delgado", "Colt Burch", "Freyja Prince", "Aron Harrell",
    "Kara Moss", "Porter Houston", "Lylah Stuart", "Dion Sharp", "Camryn Barrett", "Angelo Clements", "Cara Fields", "Clayton Lester", "Averi Cano", "Terry Pennington",
    "Yareli Warner"]


export function getRandomName() {
    var finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
};


export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

