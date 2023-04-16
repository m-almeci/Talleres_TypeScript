import { Serie } from './serie.js';
import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="series"
const avgSeasonsDiv: HTMLElement = document.getElementById('avgseasons')!;

renderSeriesInTable(series);
displayAvgSeasons();

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td style="font-weight:bold;">${serie.id}</td>
                             <td>${serie.name}</td>
                             <td>${serie.channel}</td>
                             <td>${serie.seasons}</td>`;
      seriesTbody.appendChild(trElement);
    });
}

function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    let avgSeasons: number = totalSeasons/(series.length);
    return avgSeasons;
}

function displayAvgSeasons(): void {
    let p = document.createElement("p");
    p.textContent = "Seasons average: " + getAverageSeasons(series);
    avgSeasonsDiv.appendChild(p);
}