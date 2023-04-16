import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var avgSeasonsDiv = document.getElementById('avgseasons');
var infoCardDiv = document.getElementById('infocard');
var seriesBotones = [];
renderSeriesInTable(series);
displayAvgSeasons();
displayInfo(series[0]);
series.forEach(function (s) {
    var serieId = "serieBoton" + s.id;
    var serieBoton = document.getElementById(serieId);
    serieBoton.addEventListener('click', function () {
        infoCardDiv.removeChild(infoCardDiv.firstChild);
        displayInfo(series[s.id - 1]);
    });
    seriesBotones.push(serieBoton);
});
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight:bold;\">".concat(serie.id, "</td>\n                             <td> <button class=\"btn btn-link\" id=\"serieBoton").concat((serie.id).toString(), "\" style=\"padding: 0;\">").concat(serie.name, "</button></td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.seasons, "</td>");
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
function displayInfo(serie) {
    console.log("Mostrando informacion adicional para serie #" + serie.id);
    var card = document.createElement("div");
    card.innerHTML = "<div class=\"card\" style=\"width: 18rem; margin-left: -50px;\">\n                        <img src=\"".concat(serie.image, "\" class=\"card-img-top\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                            <p class=\"card-text\">").concat(serie.description, "</p>\n                            <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n                        </div>\n                      </div>");
    infoCardDiv.appendChild(card);
}
