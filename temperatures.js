export function afficherTemperatures(t,id){
	document.getElementById(id).innerHTML=temperaturesFromTable(t);
}

function ligneMoisHTML(t)
{
	var tmp="";
	t.mois.forEach((element) => 
		tmp+=("<th>"+element+"</th>")
		);
	return tmp;
}

function ligneVilleHTML(tville)
{
	var tmp="";
	tville.temperatures.forEach((element) => 
		tmp+=("<td>"+element+"</td>")
		);
	return tmp;
}

function temperaturesFromTable(t)
{
	var tmp=`<table><caption> ${t.description} </caption><thead><tr><td></td> ${ligneMoisHTML(t)} </tr></thead><tbody>`;
	t.villes.forEach((element) => 
		tmp+=`<tr><th>${element.ville}</th>${ligneVilleHTML(element)}</tr>`
		);
	tmp+=`</tbody></table>`;
	return tmp;
}
