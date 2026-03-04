"use strict";
alert("Welcome to the Adventure Realm! Let's create your hero!");
const characterName = prompt("What is your character's name?", "Name");
const pet = prompt(`What kind of pet does ${characterName} have? (dragon, wolf, robot, unicorn, phoenix, etc.)`, "Pet");
const superpower = prompt(`What is ${characterName}'s special superpower?`, "Superpower");
const likesFighting = confirm(
    `Does ${characterName} like fighting monsters? 
    ✅ Click OK for YES
    ❌ Click Cancel for NO`
    );
alert(`Gathering magic for ${characterName}... almost ready!`);
alert(
    `Your Adventure Hero
    ====================================
    Name: ${characterName}
    Pet: ${pet}
    Superpower: ${superpower}
    Monster fighter? ${likesFighting ? "Yes " : "No "}
    In the faraway land of Kansas, ${characterName} and their pet ${pet},
    wielding the incredible power of ${superpower} fight for piece!
    The realm awaits your ${likesFighting ? "fierce" : "diplomatic"} legend...`
    );
const storyHead = `Name: ${characterName}`;
const storyPet = `Pet: ${pet}`;
const storyPower = `Superpower: ${superpower}`;
const storyFight = `Monster fighter? ${likesFighting ? "Yes " : "No "}`
const story = `In the faraway land of Kansas, ${characterName} and their pet ${pet},
    wielding the incredible power of ${superpower} fight for piece!
    The realm awaits your ${likesFighting ? "fierce" : "diplomatic"} legend...`;
function display() {
    console.log(storyHead);
    document.getElementById("storyHead").textContent = storyHead;
    document.getElementById("storyPet").textContent = storyPet;
    document.getElementById("storyPower").textContent = storyPower;
    document.getElementById("storyFight").textContent = storyFight;
    document.getElementById("story").textContent = story;
}
display();