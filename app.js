const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c','b','c','b','a'];
const emojis = ['✔️','✨','👀','😭','👎','🚀'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const touteslesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
     // console.log(document.querySelector('input[name=Q1]:checked').value);

    for(i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)  
    }
    // console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats) {

    for(let a = 0; a < 5; a++){

        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }

    // console.log(verifTableau);
    afficherResultats(verifTableau);
    
    verifTableau = [];
}

    
 
function afficherResultats(tabCheck) {

    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);
 
    switch(nbDeFautes) { 

        case 0:
            titreResultat.innerText = `🚀 Bravo! 🚀 to the moon !!`
            aideResultat.innerText = ' 01000001 01101101 01101111 01110101 01110010 00001101 00001010 '
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titreResultat.innerText = ` presque ! `
            aideResultat.innerText = 'presque presque  '
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = ` Encore un effort ... 👀`
            aideResultat.innerText = 'Ne lache rien !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'vas y essaye encore  !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭  LOL ! 😭`
            aideResultat.innerText = ' Serieux ?'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `GG`
            aideResultat.innerText =  "tu as cherche , tu as trouver, BRAVO" 
            noteResultat.innerHTML = '<a href="bravo.html">click</a>'

        break;

        default:
            'Wops, cas innatendu.';
    }
        
    
    
    
    
}






     
