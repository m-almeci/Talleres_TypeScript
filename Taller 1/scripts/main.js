import { series } from './data.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
var avgSeasonsDiv = document.getElementById('avgseasons');
renderSeriesInTable(series);
displayAvgSeasons();
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight:bold;\">".concat(serie.id, "</td>\n                             <td>").concat(serie.name, "</td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    var avgSeasons = totalSeasons / (series.length);
    return avgSeasons;
}
function displayAvgSeasons() {
    var p = document.createElement("p");
    p.textContent = "Seasons average: " + getAverageSeasons(series);
    avgSeasonsDiv.appendChild(p);
}
