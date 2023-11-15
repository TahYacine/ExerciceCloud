export function nouvellesCouleurs(n)
{
	const tab=[];
	for(let i=0;i<n;i++)
	{
		const tmp=i*360/n;
		tab.push(`hsl(${tmp},97%,42%)`);
	}
	return tab;
}

