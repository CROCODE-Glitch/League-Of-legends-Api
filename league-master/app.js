const championsUrl = 'http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion.json';
const getChampionUrl = (champion) => `http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion/${champion}.json`;


function getRandomValue(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

async function getChampions(){
    const response = await fetch(championsUrl);
    const json = await response.json();
    return Object.keys(json.data);
}


async function getChampionSkins(champion){
    const championUrl = getChampionUrl(champion);
    const response = await fetch(championUrl);
    const json = await response.json();
    return {
        champion,
        skins: json.data[champion].skins,
    };
}


function displayChampionSkin(info){
    const skin = getRandomValue(info.skins);
    const skinUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${info.champion}_${skin.num}.jpg`;
    const skinImage = new Image();
    skinImage.src = skinUrl;
    document.body.appendChild(skinImage);
    console.log(info.champion, skin);
}




getChampions()
    .then(getRandomValue)
    .then(getChampionSkins)   
    .then(displayChampionSkin);