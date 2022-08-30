// évenement : 

// var vina = {
//     sexe : "male",
//     pointure : 39
// }
// console.log(vina.pointure);

var profil = {
    profession : "Web Developer",
    nomEtPrenom : "ANDRIANARISOA Vina",
    age : 23 + " " + "ans",
    adresse : "LOT IVP 144 Ankadifotsy",
    dateDeNaissance : "21 Juillet 1999",
    tel : "0341062433",
    image : "./vina.jpg",
    experiences : [
        {
            "Poste": "dev",
            "Duree": "3 ans",
            "Entreprise": "Bocasay",
        }
    ],
    skills : [
        {
            "un" : "Web Design",
            "deux" : "Web Development",
            "trois" : "Front-end Development",
        }
    ] 
}

// var listItem = ""

// for (let i = 0; i < profil.skills.length; i++) {
//     // console.log(profil.experiences[i]);
//     listItem += "<li>" + profil.skills[i].un + "</li>" + "<br>" + "<li>" + profil.skills[i].deux + "</li>" + "<br>" + "<li>" + profil.skills[i].trois + "</li>"
// }


// document.getElementById("list_skills").innerHTML = listItem;

var profession = document.getElementById("paragraphe0");
var titre = document.querySelector("h1");
var age = document.getElementById("paragraphe1");
var adresse = document.getElementById("paragraphe2");
var dateDeNaissance = document.getElementById("paragraphe3");
var tel = document.getElementById("paragraphe4");
var image = document.querySelector("img");

// document.querySelector('.container').innerHTML = myprofil;
document.querySelector('img').setAttribute("src", profil.image);

profession.innerText = profil.profession;
titre.innerText = profil.nomEtPrenom;
// age.innerText = profil.age;
// adresse.innerText = profil.adresse;
// dateDeNaissance.innerText = profil.dateDeNaissance;
// tel.innerText = profil.tel;

var listItemExperience = ""

for (let i = 0; i < profil.experiences.length; i++) {
    // console.log(profil.experiences[i]);
    listItemExperience += profil.experiences[i].Poste + "<br>" + profil.experiences[i].Duree + "<br>" + profil.experiences[i].Entreprise
}


document.getElementById("list_experiences").innerHTML = listItemExperience;