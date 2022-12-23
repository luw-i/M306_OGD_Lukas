<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta content="Lukas Wildeisen" name="author">
    <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
    <meta content="Bootstrap V4.3.1 Template für IMS Frauenfeld" name="description">
    <link href="css/css.css" rel="stylesheet">
    <link href="js/js.js" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
    <title>Nutzungsflächen Thurgau</title>
</head>

<body>

    <h1 id="titel">Nutzungsflächen Thurgau</h1>
    <img src="img/ktTGWappen.png" alt="Wappen des Kanton Thurgau" id="titleimage">
    <h2 id="info">Vorwort</h2>
    <p id="vorwort">Diese Website wurde für das Modul 306 erstellt. Es geht darum in der Gruppe ein kleines Projekt zu erstellen.
        Die Verantwortung über dieses Projekt lag bei den jeweiligen 4er oder 5er Gruppen.
        Das Ziel dieser Webseite ist es die Nutzungsflächen des Kantons Thurgau darzustellen.
        Die Daten beinhaltet die landwirtschaftlich genutzten Flächen gemäss landwirtschaftlicher Begriffsverordnung (LBV) und Direktzahlungsverordnung (DZV).
        Sie werden von dem Amt für Geoinformationen des Kanton Thurgau kostenlos zur verfügung gestellt.
    </p>
    <br>
    <br>
    <br>
    <h2 id="info">Karte</h2>
    <div id="map"></div>
    <br>
    <br>
    <br>

    <h2 id="nachwort">Nachwort</h2>
    <p id="fo_infos">Diese Seite wurde von ©<a href="https://github.com/luw-i">Lukas Wildeisen</a> erstellt. Dies Geschah unter der Leitung von <a href="https://github.com/jpmou">Jean-Pierre Mouret</a>.
        Weiter wurde das Projekt mit der Hilfe von dem Repository <a href="https://github.com/Yeshush/m306-OGD">Yeshush/m306-OGD</a> erstellt. Es wurde Als Informationsquelle für das Auslesen von WMS-Daten verwendet.
        Es wurde die Daten von <a href="https://opendata.swiss/de/dataset/nutzungsflachen">opendata.swiss
        </a> verwendet.
    </p>

    <script type="text/javascript" src="js/myjs.js" charset="UTF-8"></script>
    <script src="js/js.js"></script>
</body>
<footer>
    <hr noshade>
    <h2>Impressum</h2>
    <ul id="Liste">
        <li>Source-Code: <a href="https://github.com/luw-i/M306_OGD_Lukas/tree/master">Githubrepository</a></li>
        <li>Datenquelle: <a href="https://opendata.swiss/de/dataset/nutzungsflachen">opendata.swiss</a></li>
        <li>Leaflet JS: <a href="https://leafletjs.com/"> Leaflet.js</a></li>
        <li>Hilfsrepository vosn Yeshush: <a href="https://github.com/Yeshush/m306-OGD">Githubrepository
            </a>
        </li>
    </ul>
</footer>

</html>