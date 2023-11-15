import { afficherTemperatures } from "./temperatures.js"  
import { temp } from "./exempletemperatures.js"
import { nouvellesCouleurs } from "./couleurs.js"
import {afficherDiagrammeTemperatures} from './diagrammetemperatures.js';

var couleurs=[];

var boutonCharger = document.getElementById("charger");
var boutonDiagramme = document.getElementById("diagramme");
var boutonFichier = document.getElementById("fichier-temperatures");

var temperatures = {
  "description":"",
  "mois":[],
  "villes":[]
};

boutonFichier.addEventListener("click",onFichierChange);
boutonCharger.addEventListener("click",onLireFichier);
boutonDiagramme.addEventListener("click",onDiagramme);


function onLireFichier() {
  boutonDiagramme.disabled=false;
 var fichier = boutonFichier.files[0];
  const reader = new FileReader();
  reader.onload = function() {
  	temperatures=JSON.parse(reader.result);
  afficherTemperatures(temperatures,"tableau-temperatures");
  couleurs=nouvellesCouleurs(temperatures.villes.length);
  };
  reader.readAsText(fichier);
}


function onFichierChange()
{
	boutonCharger.disabled=false;
}

function onDiagramme()
{
  afficherDiagrammeTemperatures(temperatures,couleurs,"canvas-temperatures");
}

function onCharger()
{
}


function init()
{
	boutonCharger.disabled=true;
	boutonDiagramme.disabled=true;
}

window.addEventListener('load', init,false);