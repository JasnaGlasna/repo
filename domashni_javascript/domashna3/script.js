//Zadaca 1

let Topchoices = ['blue', 'red', 'teal', 'pink'];
console.log(Topchoices);

console.log('My #1 choice is ' + Topchoices[0]);
console.log('My #2 choice is ' + Topchoices[1]);
console.log('My #3 choice is ' + Topchoices[2]);
console.log('My #4 choice is ' + Topchoices[3]);

//bonus

let MyFavcolors = ["orange", "red", "green", "yellow", "purple"];

for (let i = 0; i < MyFavcolors.length; i++) {
    let Mynumber = i + 1;
    let choiceSuffix;

    if (Mynumber == 1) {
        choiceSuffix = "st";
    } else if (Mynumber == 2) {
        choiceSuffix = "nd";
    } else if (Mynumber == 3) {
        choiceSuffix = "rd";
    } else if (Mynumber == 4) {
        choiceSuffix = "th";
    } else if (Mynumber == 5) {
        choiceSuffix = "th";
    }

    console.log("My " + Mynumber + choiceSuffix + " choice is " + MyFavcolors[i]);
}

// Zadaca 2
let programLanguages = [
    {
        language: 'Javascript',
        founder: {
            programmer: 'Brendan Eich',
            email: 'brendaneich@gmail.com'
        },
        founded: 1995
    },
    {
        language: 'PHP',
        founder: {
            programmer: 'Rasmus Lerdorf',
            email: 'rasmuslerdorf@gmail.com'
        },
        founded: 1994
    },
    {
        language: 'C#',
        founder: {
            programmer: 'Anders Hejlsberg',
            email: 'andershejlsberg@gmail.com'
        },
        founded: 2000
    }
];

console.log(programLanguages);
console.log(programLanguages[0]);
console.log(programLanguages[1].founder.email);

programLanguages.unshift({
    language: 'Java',
    founder: {
        programmer: 'James Gosling',
        email: 'jamesgosling@gmail.com',
        year: 1995
    }
});

programLanguages.push({
    language: 'React',
    founder: {
        programmer: 'Jordan Walke',
        email: 'jordanwalke@gmail.com',
        year: 2013
    }
});

console.log(programLanguages);
