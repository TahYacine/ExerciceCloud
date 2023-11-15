import {
  Chart,
  Colors,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend
} from './chartjsdist/chart.js';
Chart.register(
  Colors,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend
);

let diagrammeCourant = null;

function datasetsTemperatures(t, couleurs) {
  let tabVilles = t.villes;
  let tabTmp = [];
  let i=0;
    for (let v of tabVilles) {
      let caseTab = { label: v.ville, data: v.temperatures,borderColor: couleurs[i]};
      tabTmp.push(caseTab);
      i=i+1;
    }
  return tabTmp;
}

function diagrammeTemperatures(t, couleurs, canevas)
{

  if(diagrammeCourant){
    diagrammeCourant.destroy();
  }

  let diagramme = new Chart(canevas, {
  type:"line",
  data:{
  labels:t.mois,
 datasets:datasetsTemperatures(t,couleurs)
 },
 options:{
 title: { display: true, text: "description" },
 datasets: { line: { lineTension:0, fill: false }},
 responsive: false
 }
});
  return diagramme;
}

export function afficherDiagrammeTemperatures(t, couleurs, id)
{
  let canv = document.getElementById(id);
  return diagrammeTemperatures(t,couleurs,canv);
}