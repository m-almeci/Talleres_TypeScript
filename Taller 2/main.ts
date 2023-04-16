import { Serie } from './serie.js';
import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonsDiv: HTMLElement = document.getElementById('avgseasons')!;
const infoCardDiv: HTMLElement = document.getElementById('infocard')!;

var seriesBotones: HTMLElement[] = [];

renderSeriesInTable(series);
displayAvgSeasons();
displayInfo(series[0]);

series.forEach((s) => {
    let serieId: string = "serieBoton" + s.id;
    const serieBoton: HTMLElement = document.getElementById(serieId)!;
    serieBoton.addEventListener('click', () => {
        infoCardDiv.removeChild(infoCardDiv.firstChild!);
        displayInfo(series[s.id - 1]);
    });
    seriesBotones.push(serieBoton);
});

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td style="font-weight:bold;">${serie.id}</td>
                             <td> <button class="btn btn-link" id="serieBoton${(serie.id).toString()}" style="padding: 0;">${serie.name}</button></td>
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

function displayInfo(serie: Serie): void {
    console.log("Mostrando informacion adicional para serie #" + serie.id);
    let card = document.createElement("div");
    card.innerHTML = `<div class="card" style="width: 18rem; margin-left: -50px;">
                        <img src="${serie.image}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${serie.name}</h5>
                            <p class="card-text">${serie.description}</p>
                            <a href="${serie.link}">${serie.link}</a>
                        </div>
                      </div>`;
    infoCardDiv.appendChild(card);
}