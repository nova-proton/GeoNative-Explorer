
// =====================================
// GEONATIVE EXPLORER
// MAIN JAVASCRIPT
// =====================================


// 1. LANGUAGE SYSTEM

const translations = {

    en: {
        platform: "Web GIS Platform",
        tools: "MAP TOOLS",
        explorer: "Map Explorer",
        explorerDesc: "Navigate the map",
        location: "Location Info",
        locationDesc: "View coordinates",
        measurement: "Measurement",
        measurementDesc: "Distance and area",
        drawing: "Drawing Tools",
        drawingDesc: "Draw on the map",
        layers: "MAP LAYERS",
        street: "Street Map",
        satellite: "Satellite Imagery",
        topographic: "Topographic Map",
        project: "PROJECT INFORMATION",
        projectNameLabel: "Project",
        version: "Version",
        mapEngine: "Map Engine",
        worldMap: "World Map",
        mapDescription: "Interactive geographic visualization",
        mapReady: "Map is ready",
        footerText: "Interactive Web GIS",
        activeLayer: "Active layer: ",
        lat: "Lat",
        lon: "Lon",
        

        searchPlaceholder: "Search for a city, country or place...",
        searchButton: "Search",
        searchEmpty: "Please enter a place to search.",
        searching: "Searching...",
        searchNoResults: "No results found. Try another search.",
        searchError: "Search could not be completed.",
        searchWait: "Please wait before searching again.",
        searchSelect: "Select a result to view it on the map.",

        measureTitle: "MEASUREMENT TOOLS",
        distanceMode: "Measure Distance",
        areaMode: "Measure Area",
        measureInstruction: "Select a measurement mode.",
        distanceInstruction: "Click on the map to add points.",
        areaInstruction: "Click on the map to create a polygon.",
        measurementResult: "Result",
        finish: "Finish",
        clear: "Clear",
        needTwoPoints: "At least two points are required.",
        needThreePoints: "At least three points are required.",
        measurementFinished: "Measurement completed.",
        measurementCleared: "Measurement cleared.",

        locationTitle: "LOCATION INFORMATION",
        latitude: "Latitude",
        longitude: "Longitude",
        dmsCoordinates: "DMS Coordinates",
        copyCoordinates: "Copy Coordinates",
        coordinatesCopied: "Coordinates copied.",
        copyError: "Could not copy coordinates.",

        drawingTitle: "DRAWING TOOLS",
        drawPoint: "Draw Points",
        drawLine: "Draw Line",
        drawPolygon: "Draw Polygon",
        drawingInstruction: "Select a drawing mode.",
        pointInstruction: "Click on the map to add points.",
        lineInstruction: "Click on the map to draw a line.",
        polygonInstruction: "Click on the map to draw a polygon.",
        undo: "Undo",
        exportGeoJSON: "Export GeoJSON",
        drawingFinished: "Drawing completed.",
        drawingCleared: "Drawing cleared.",
        needMorePoints: "Not enough points to finish.",
        importGeoJSON: "Import GeoJSON",
        geoJSONLoaded: "GeoJSON file loaded successfully.",
        geoJSONInvalid: "Invalid GeoJSON file.",
        geoJSONEmpty: "No geographic data found.",
        geoJSONTooLarge: "File is too large. Maximum size is 10 MB."

    },

    tr: {
        platform: "Web CBS Platformu",
        tools: "HARİTA ARAÇLARI",
        explorer: "Harita Gezgini",
        explorerDesc: "Haritada gezin",
        location: "Konum Bilgisi",
        locationDesc: "Koordinatları görüntüle",
        measurement: "Ölçüm",
        measurementDesc: "Mesafe ve alan",
        drawing: "Çizim Araçları",
        drawingDesc: "Haritada çizim yap",
        layers: "HARİTA KATMANLARI",
        street: "Sokak Haritası",
        satellite: "Uydu Görüntüsü",
        topographic: "Topoğrafik Harita",
        project: "PROJE BİLGİSİ",
        projectNameLabel: "Proje",
        version: "Sürüm",
        mapEngine: "Harita Altyapısı",
        worldMap: "Dünya Haritası",
        mapDescription: "İnteraktif coğrafi görüntüleme",
        mapReady: "Harita hazır",
        footerText: "İnteraktif Web CBS",
        activeLayer: "Aktif katman: ",
        lat: "Enlem",
        lon: "Boylam",

        searchPlaceholder: "Şehir, ülke veya konum ara...",
        searchButton: "Ara",
        searchEmpty: "Lütfen bir konum yazın.",
        searching: "Aranıyor...",
        searchNoResults: "Sonuç bulunamadı.",
        searchError: "Arama yapılamadı.",
        searchWait: "Yeniden arama yapmadan önce bekleyin.",
        searchSelect: "Haritada görüntülemek için bir sonuç seçin.",

        measureTitle: "ÖLÇÜM ARAÇLARI",
        distanceMode: "Mesafe Ölç",
        areaMode: "Alan Ölç",
        measureInstruction: "Bir ölçüm modu seçin.",
        distanceInstruction: "Nokta eklemek için haritaya tıklayın.",
        areaInstruction: "Poligon oluşturmak için haritaya tıklayın.",
        measurementResult: "Sonuç",
        finish: "Bitir",
        clear: "Temizle",
        needTwoPoints: "En az iki nokta gereklidir.",
        needThreePoints: "En az üç nokta gereklidir.",
        measurementFinished: "Ölçüm tamamlandı.",
        measurementCleared: "Ölçüm temizlendi.",

        locationTitle: "KONUM BİLGİSİ",
        latitude: "Enlem",
        longitude: "Boylam",
        dmsCoordinates: "DMS Koordinatları",
        copyCoordinates: "Koordinatları Kopyala",
        coordinatesCopied: "Koordinatlar kopyalandı.",
        copyError: "Koordinatlar kopyalanamadı.",

        drawingTitle: "ÇİZİM ARAÇLARI",
        drawPoint: "Nokta Çiz",
        drawLine: "Çizgi Çiz",
        drawPolygon: "Poligon Çiz",
        drawingInstruction: "Bir çizim modu seçin.",
        pointInstruction: "Nokta eklemek için haritaya tıklayın.",
        lineInstruction: "Çizgi çizmek için haritaya tıklayın.",
        polygonInstruction: "Poligon çizmek için haritaya tıklayın.",
        undo: "Geri Al",
        exportGeoJSON: "GeoJSON Dışa Aktar",
        drawingFinished: "Çizim tamamlandı.",
        drawingCleared: "Çizim temizlendi.",
        needMorePoints: "Tamamlamak için yeterli nokta yok.",
        importGeoJSON: "GeoJSON Yükle",
        geoJSONLoaded: "GeoJSON dosyası başarıyla yüklendi.",
        geoJSONInvalid: "Geçersiz GeoJSON dosyası.",
        geoJSONEmpty: "Dosyada coğrafi veri bulunamadı.",
        geoJSONTooLarge: "Dosya çok büyük. Maksimum boyut 10 MB."

    }

};


let currentLanguage = "en";


function setLanguage(language) {

    if (!translations[language]) return;

    currentLanguage = language;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        if (translations[language][key]) {
            element.placeholder = translations[language][key];
        }

    });

    document.getElementById("langEN").classList.toggle(
        "active", language === "en"
    );

    document.getElementById("langTR").classList.toggle(
        "active", language === "tr"
    );

    const activeLayer = document.querySelector(
        'input[name="mapLayer"]:checked'
    );

    if (activeLayer) {
        updateLayerStatus(activeLayer.value);
    }

    updateCoordinates();

    if (measurementMode === "distance") {
        measurementStatus.textContent =
            translations[language].distanceInstruction;
    } else if (measurementMode === "area") {
        measurementStatus.textContent =
            translations[language].areaInstruction;
    }

    try {
        localStorage.setItem("geonative_language", language);
    } catch (error) {
        console.warn("Language preference could not be saved.");
    }

}


document.getElementById("langEN").addEventListener(
    "click", () => setLanguage("en")
);

document.getElementById("langTR").addEventListener(
    "click", () => setLanguage("tr")
);


// =====================================
// 2. WORLD MAP
// =====================================

const map = L.map("map", {
    zoomControl: true,
    minZoom: 2,
    worldCopyJump: true
}).setView([25, 0], 2);


// =====================================
// 3. MAP LAYERS
// =====================================

const layers = {

    street: L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors",
            maxZoom: 19,
            noWrap: true
        }
    ),

    satellite: L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "Tiles &copy; Esri",
            maxZoom: 19
        }
    ),

    topographic: L.tileLayer(
        "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenTopoMap contributors",
            maxZoom: 17,
            noWrap: true
        }
    ),

    esriStreet: L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "Tiles &copy; Esri",
            maxZoom: 19
        }
    ),

    esriTopo: L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "Tiles &copy; Esri",
            maxZoom: 19
        }
    ),

    esriTerrain: L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "Sources: Esri, USGS, NOAA",
            maxZoom: 13
        }
    ),

    esriNatGeo: L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "Tiles &copy; Esri, National Geographic",
            maxZoom: 16
        }
    )

};


let currentLayer = layers.street;

currentLayer.addTo(map);


// =====================================
// 4. LAYER SWITCHING
// =====================================

function updateLayerStatus(layerKey) {

    const layerName = translations[currentLanguage][layerKey];

    document.getElementById("mapStatus").textContent =
        translations[currentLanguage].activeLayer + layerName;

}


document.querySelectorAll(
    'input[name="mapLayer"]'
).forEach(input => {

    input.addEventListener("change", function () {

        if (currentLayer) {
            map.removeLayer(currentLayer);
        }

        currentLayer = layers[this.value];

        currentLayer.addTo(map);

        updateLayerStatus(this.value);
        updateAttribution(this.value);

    });

});


// =====================================
// 5. MAP ATTRIBUTION
// =====================================

function updateAttribution(layerKey) {

    const sources = {
        street: "© OpenStreetMap",
        satellite: "Tiles © Esri",
        topographic: "© OpenTopoMap"
    };

    document.getElementById("mapSource").textContent =
        sources[layerKey];

}


// =====================================
// 6. COORDINATES
// =====================================

let selectedCoordinates = null;


function updateCoordinates() {

    const element = document.getElementById("coordinates");
    const t = translations[currentLanguage];

    if (!selectedCoordinates) {

        element.textContent =
            `${t.lat}: -- | ${t.lon}: --`;

        return;

    }

    element.textContent =
        `${t.lat}: ${selectedCoordinates.lat} | ${t.lon}: ${selectedCoordinates.lng}`;

}


// =====================================
// LOCATION INFORMATION
// =====================================

const locationTool = document.getElementById("locationTool");
const locationPanel = document.getElementById("locationPanel");

const infoLatitude = document.getElementById("infoLatitude");
const infoLongitude = document.getElementById("infoLongitude");
const infoDMS = document.getElementById("infoDMS");

locationTool.addEventListener("click", function () {

    locationPanel.hidden = !locationPanel.hidden;

    locationTool.classList.toggle("active", !locationPanel.hidden);

    if (!locationPanel.hidden) {
        map.invalidateSize();
    }

});


function toDMS(value, isLatitude) {

    const absolute = Math.abs(value);

    const degrees = Math.floor(absolute);
    const minutesFloat = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesFloat);
    const seconds = ((minutesFloat - minutes) * 60).toFixed(2);

    let direction;

    if (isLatitude) {
        direction = value >= 0 ? "N" : "S";
    } else {
        direction = value >= 0 ? "E" : "W";
    }

    return `${degrees}° ${minutes}' ${seconds}" ${direction}`;

}


function updateLocationInfo(lat, lng) {

    infoLatitude.textContent = lat.toFixed(6);
    infoLongitude.textContent = lng.toFixed(6);

    infoDMS.textContent =
        `${toDMS(lat, true)} | ${toDMS(lng, false)}`;

}


document.getElementById("copyCoordinates").addEventListener(
    "click",
    async function () {

        const t = translations[currentLanguage];

        if (!selectedCoordinates) {
            return;
        }

        const text =
            `${selectedCoordinates.lat}, ${selectedCoordinates.lng}`;

        try {

            await navigator.clipboard.writeText(text);

            this.textContent = t.coordinatesCopied;

        } catch (error) {

            console.error("Clipboard error:", error);

            this.textContent = t.copyError;

        }

    }
);



// =====================================
// 7. LOCATION SEARCH
// =====================================

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchMessage = document.getElementById("searchMessage");
const searchResults = document.getElementById("searchResults");

let searchMarker = null;
let lastSearchTime = 0;


searchForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const query = searchInput.value.trim();
    const t = translations[currentLanguage];

    if (!query) {
        searchMessage.textContent = t.searchEmpty;
        searchResults.classList.remove("visible");
        return;
    }

    const now = Date.now();

    if (now - lastSearchTime < 1000) {
        searchMessage.textContent = t.searchWait;
        return;
    }

    lastSearchTime = now;

    searchButton.disabled = true;
    searchMessage.textContent = t.searching;

    searchResults.innerHTML = "";
    searchResults.classList.remove("visible");

    try {

        const url =
            "https://nominatim.openstreetmap.org/search?" +
            new URLSearchParams({
                q: query,
                format: "jsonv2",
                limit: "5",
                addressdetails: "1",
                "accept-language": currentLanguage
            });

        const response = await fetch(url, {
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Search request failed");
        }

        const results = await response.json();

        if (!results.length) {
            searchMessage.textContent = t.searchNoResults;
            return;
        }

        searchMessage.textContent = t.searchSelect;

        displaySearchResults(results);

    } catch (error) {

        console.error("Location search error:", error);
        searchMessage.textContent = t.searchError;

    } finally {

        searchButton.disabled = false;

    }

});


function displaySearchResults(results) {

    searchResults.innerHTML = "";

    results.forEach(result => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "search-result";
        button.textContent = result.display_name;

        button.addEventListener("click", function () {
            selectSearchResult(result);
        });

        searchResults.appendChild(button);

    });

    searchResults.classList.add("visible");

}


function selectSearchResult(result) {

    const latitude = Number(result.lat);
    const longitude = Number(result.lon);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
        return;
    }

    if (searchMarker) {
        map.removeLayer(searchMarker);
    }

    searchMarker = L.marker([latitude, longitude]).addTo(map);

    const popupContent = document.createElement("div");
    popupContent.textContent = result.display_name;

    searchMarker.bindPopup(popupContent).openPopup();

    map.flyTo(
        [latitude, longitude],
        13,
        { duration: 1.5 }
    );

    selectedCoordinates = {
        lat: latitude.toFixed(6),
        lng: longitude.toFixed(6)
    };

    updateCoordinates();

    searchMessage.textContent = result.display_name;
    searchResults.classList.remove("visible");

}


// =====================================
// 8. MEASUREMENT SYSTEM
// =====================================

const measurementTool =
    document.getElementById("measurementTool");

const measurementPanel =
    document.getElementById("measurementPanel");

const distanceModeButton =
    document.getElementById("distanceMode");

const areaModeButton =
    document.getElementById("areaMode");

const finishMeasurementButton =
    document.getElementById("finishMeasurement");

const clearMeasurementButton =
    document.getElementById("clearMeasurement");

const measurementStatus =
    document.getElementById("measurementStatus");

const measurementValue =
    document.getElementById("measurementValue");


let measurementMode = null;
let measurementPoints = [];
let measurementLayer = null;
let measurementFinished = false;


// OPEN / CLOSE MEASUREMENT PANEL

measurementTool.addEventListener("click", function () {

    const isHidden = measurementPanel.hidden;

    measurementPanel.hidden = !isHidden;

    measurementTool.classList.toggle("active", isHidden);

    if (isHidden) {
        map.invalidateSize();
    }

});


// START DISTANCE MODE

distanceModeButton.addEventListener("click", function () {

    startMeasurement("distance");

});


// START AREA MODE

areaModeButton.addEventListener("click", function () {

    startMeasurement("area");

});


function startMeasurement(mode) {

    clearMeasurement(false);

    measurementMode = mode;
    measurementFinished = false;

    distanceModeButton.classList.toggle(
        "active", mode === "distance"
    );

    areaModeButton.classList.toggle(
        "active", mode === "area"
    );

    const t = translations[currentLanguage];

    measurementStatus.textContent =
        mode === "distance"
            ? t.distanceInstruction
            : t.areaInstruction;

    map.getContainer().style.cursor = "crosshair";

}


// MAP CLICK EVENT


// MAP CLICK EVENT

map.on("click", function (event) {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    selectedCoordinates = {
        lat: lat.toFixed(6),
        lng: lng.toFixed(6)
    };

    updateCoordinates();

    // Update Location Info panel.
    updateLocationInfo(lat, lng);

    // Measurement mode has priority.
    if (measurementMode && !measurementFinished) {
        measurementPoints.push(event.latlng);
        updateMeasurement();
        return;
    }

    // Drawing mode.
    if (drawingMode && !drawingFinished) {
        addDrawingPoint(event.latlng);
    }

});



// UPDATE MEASUREMENT DRAWING

function updateMeasurement() {

    if (measurementLayer) {
        map.removeLayer(measurementLayer);
    }

    const points = measurementPoints;

    if (measurementMode === "distance") {

        measurementLayer = L.polyline(points, {
            color: "#38bdf8",
            weight: 4,
            opacity: 0.9
        }).addTo(map);

        updateDistanceResult();

    }

    if (measurementMode === "area") {

        if (points.length >= 3) {

            measurementLayer = L.polygon(points, {
                color: "#38bdf8",
                weight: 3,
                fillColor: "#0284c7",
                fillOpacity: 0.25
            }).addTo(map);

        } else if (points.length > 0) {

            measurementLayer = L.polyline(points, {
                color: "#38bdf8",
                weight: 3,
                dashArray: "5, 5"
            }).addTo(map);

        }

        updateAreaResult();

    }

}


// DISTANCE CALCULATION

function updateDistanceResult() {

    let totalDistance = 0;

    for (let i = 1; i < measurementPoints.length; i++) {

        totalDistance += map.distance(
            measurementPoints[i - 1],
            measurementPoints[i]
        );

    }

    measurementValue.textContent =
        formatDistance(totalDistance);

}


// FORMAT DISTANCE

function formatDistance(meters) {

    if (meters >= 1000) {
        return `${(meters / 1000).toFixed(3)} km`;
    }

    return `${meters.toFixed(2)} m`;

}


// AREA CALCULATION
// Spherical polygon area formula.

function calculatePolygonArea(points) {

    if (points.length < 3) {
        return 0;
    }

    const earthRadius = 6378137;
    let total = 0;

    for (let i = 0; i < points.length; i++) {

        const current = points[i];
        const next = points[(i + 1) % points.length];

        const lat1 = current.lat * Math.PI / 180;
        const lat2 = next.lat * Math.PI / 180;

        const lon1 = current.lng * Math.PI / 180;
        const lon2 = next.lng * Math.PI / 180;

        total += (lon2 - lon1) *
            (2 + Math.sin(lat1) + Math.sin(lat2));

    }

    return Math.abs(total * earthRadius * earthRadius / 2);

}


// UPDATE AREA RESULT

function updateAreaResult() {

    if (measurementPoints.length < 3) {

        measurementValue.textContent = "--";
        return;

    }

    const area = calculatePolygonArea(measurementPoints);

    if (area >= 1000000) {

        measurementValue.textContent =
            `${(area / 1000000).toFixed(3)} km²`;

    } else if (area >= 10000) {

        measurementValue.textContent =
            `${(area / 10000).toFixed(3)} ha`;

    } else {

        measurementValue.textContent =
            `${area.toFixed(2)} m²`;

    }

}


// FINISH MEASUREMENT

finishMeasurementButton.addEventListener("click", function () {

    const t = translations[currentLanguage];

    if (!measurementMode) {
        return;
    }

    if (
        measurementMode === "distance" &&
        measurementPoints.length < 2
    ) {
        measurementStatus.textContent = t.needTwoPoints;
        return;
    }

    if (
        measurementMode === "area" &&
        measurementPoints.length < 3
    ) {
        measurementStatus.textContent = t.needThreePoints;
        return;
    }

    measurementFinished = true;
    measurementMode = null;

    map.getContainer().style.cursor = "";

    distanceModeButton.classList.remove("active");
    areaModeButton.classList.remove("active");

    measurementStatus.textContent = t.measurementFinished;

});


// CLEAR MEASUREMENT

clearMeasurementButton.addEventListener("click", function () {

    clearMeasurement(true);

});


function clearMeasurement(showMessage = true) {

    if (measurementLayer) {
        map.removeLayer(measurementLayer);
        measurementLayer = null;
    }

    measurementPoints = [];
    measurementMode = null;
    measurementFinished = false;

    measurementValue.textContent = "--";

    distanceModeButton.classList.remove("active");
    areaModeButton.classList.remove("active");

    map.getContainer().style.cursor = "";

    if (showMessage) {
        measurementStatus.textContent =
            translations[currentLanguage].measurementCleared;
    } else {
        measurementStatus.textContent =
            translations[currentLanguage].measureInstruction;
    }

}


// =====================================
// DRAWING TOOLS
// =====================================

const drawingTool = document.getElementById("drawingTool");
const drawingPanel = document.getElementById("drawingPanel");
const drawingStatus = document.getElementById("drawingStatus");

const drawPointButton = document.getElementById("drawPoint");
const drawLineButton = document.getElementById("drawLine");
const drawPolygonButton = document.getElementById("drawPolygon");

const undoDrawingButton = document.getElementById("undoDrawing");
const finishDrawingButton = document.getElementById("finishDrawing");
const clearDrawingButton = document.getElementById("clearDrawing");
const exportDrawingButton = document.getElementById("exportDrawing");

let drawingMode = null;
let drawingPoints = [];
let drawingFinished = false;
let drawingType = null;

const drawingLayers = L.featureGroup().addTo(map);


// OPEN / CLOSE DRAWING PANEL

drawingTool.addEventListener("click", function () {

    drawingPanel.hidden = !drawingPanel.hidden;

    drawingTool.classList.toggle("active", !drawingPanel.hidden);

    if (!drawingPanel.hidden) {
        map.invalidateSize();
    }

});


// START DRAWING MODES

drawPointButton.addEventListener("click", () => {
    startDrawing("point");
});

drawLineButton.addEventListener("click", () => {
    startDrawing("line");
});

drawPolygonButton.addEventListener("click", () => {
    startDrawing("polygon");
});


function startDrawing(mode) {

    clearDrawing(false);

    // Measurement and drawing are mutually exclusive.
    if (typeof clearMeasurement === "function") {
        clearMeasurement(false);
    }

    measurementPanel.hidden = true;
    measurementTool.classList.remove("active");

    drawingMode = mode;
    drawingType = mode;
    drawingFinished = false;

    drawPointButton.classList.toggle("active", mode === "point");
    drawLineButton.classList.toggle("active", mode === "line");
    drawPolygonButton.classList.toggle("active", mode === "polygon");

    const t = translations[currentLanguage];

    const instructions = {
        point: t.pointInstruction,
        line: t.lineInstruction,
        polygon: t.polygonInstruction
    };

    drawingStatus.textContent = instructions[mode];

    map.getContainer().style.cursor = "crosshair";

}


// DRAWING MAP CLICK

function addDrawingPoint(latlng) {

    if (!drawingMode || drawingFinished) {
        return;
    }

    drawingPoints.push(latlng);

    renderDrawing();

}


// RENDER DRAWING


function renderDrawing() {

    drawingLayers.clearLayers();

    if (drawingType === "point") {

        drawingPoints.forEach(point => {

            L.circleMarker(point, {
                radius: 7,
                color: "#ffffff",
                weight: 2,
                fillColor: "#38bdf8",
                fillOpacity: 1
            }).addTo(drawingLayers);

        });

    }

    if (drawingType === "line" && drawingPoints.length >= 2) {

        L.polyline(drawingPoints, {
            color: "#f59e0b",
            weight: 4
        }).addTo(drawingLayers);

    }

    if (drawingType === "polygon") {

        if (drawingPoints.length >= 3) {

            L.polygon(drawingPoints, {
                color: "#a78bfa",
                weight: 3,
                fillColor: "#8b5cf6",
                fillOpacity: 0.25
            }).addTo(drawingLayers);

        } else if (drawingPoints.length >= 2) {

            L.polyline(drawingPoints, {
                color: "#a78bfa",
                weight: 3
            }).addTo(drawingLayers);

        }

    }

}



// UNDO LAST POINT

undoDrawingButton.addEventListener("click", function () {

    if (!drawingPoints.length || drawingFinished) {
        return;
    }

    drawingPoints.pop();

    renderDrawing();

});


// FINISH DRAWING

finishDrawingButton.addEventListener("click", function () {

    if (!drawingMode) {
        return;
    }

    const t = translations[currentLanguage];

    if (
        (drawingMode === "line" && drawingPoints.length < 2) ||
        (drawingMode === "polygon" && drawingPoints.length < 3) ||
        (drawingMode === "point" && drawingPoints.length < 1)
    ) {

        drawingStatus.textContent = t.needMorePoints;
        return;

    }

    const finishedMode = drawingMode;

    drawingFinished = true;
    drawingMode = null;

    drawPointButton.classList.remove("active");
    drawLineButton.classList.remove("active");
    drawPolygonButton.classList.remove("active");

    map.getContainer().style.cursor = "";

    // Preserve the finished drawing.
    renderDrawing();

    drawingStatus.textContent = t.drawingFinished;

});


// CLEAR DRAWING

clearDrawingButton.addEventListener("click", function () {

    clearDrawing(true);

});


function clearDrawing(showMessage = true) {

    drawingLayers.clearLayers();

    drawingPoints = [];
    drawingType = null;
    drawingMode = null;
    drawingFinished = false;

    drawPointButton.classList.remove("active");
    drawLineButton.classList.remove("active");
    drawPolygonButton.classList.remove("active");

    map.getContainer().style.cursor = "";

    if (showMessage) {
        drawingStatus.textContent =
            translations[currentLanguage].drawingCleared;
    } else {
        drawingStatus.textContent =
            translations[currentLanguage].drawingInstruction;
    }

}


// EXPORT DRAWING AS GEOJSON

exportDrawingButton.addEventListener("click", function () {

    if (drawingLayers.getLayers().length === 0) {
        return;
    }

    const geoJSON = drawingLayers.toGeoJSON();

    const blob = new Blob(
        [JSON.stringify(geoJSON, null, 2)],
        { type: "application/geo+json" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "geonative-drawing.geojson";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);

});

// =====================================
// IMPORT GEOJSON
// =====================================

const importGeoJSONButton =
    document.getElementById("importGeoJSON");

const geoJSONFileInput =
    document.getElementById("geoJSONFile");


// OPEN FILE SELECTOR

importGeoJSONButton.addEventListener("click", function () {

    geoJSONFileInput.click();

});


// LOAD SELECTED FILE

geoJSONFileInput.addEventListener("change", async function () {

    const file = this.files[0];

    if (!file) {
        return;
    }

    const t = translations[currentLanguage];

    // Maximum file size: 10 MB

    if (file.size > 10 * 1024 * 1024) {

        drawingStatus.textContent = t.geoJSONTooLarge;

        this.value = "";
        return;

    }

    try {

        const fileContent = await file.text();

        const geoJSONData = JSON.parse(fileContent);

        // Basic GeoJSON validation

        const validTypes = [
            "FeatureCollection",
            "Feature",
            "Point",
            "MultiPoint",
            "LineString",
            "MultiLineString",
            "Polygon",
            "MultiPolygon",
            "GeometryCollection"
        ];

        if (
            !geoJSONData ||
            !validTypes.includes(geoJSONData.type)
        ) {

            throw new Error("Invalid GeoJSON");

        }

        // Convert GeoJSON to Leaflet layers

        const importedLayer = L.geoJSON(geoJSONData);

        if (importedLayer.getLayers().length === 0) {

            drawingStatus.textContent = t.geoJSONEmpty;

            this.value = "";
            return;

        }

        // Add imported layers to the map drawing group

        importedLayer.eachLayer(function (layer) {

            drawingLayers.addLayer(layer);

        });

        // Zoom to imported data

        const bounds = importedLayer.getBounds();

        if (bounds.isValid()) {

            map.fitBounds(bounds, {
                padding: [40, 40],
                maxZoom: 15
            });

        }

        drawingStatus.textContent = t.geoJSONLoaded;

    } catch (error) {

        console.error("GeoJSON import error:", error);

        drawingStatus.textContent = t.geoJSONInvalid;

    }

    // Allow selecting the same file again

    this.value = "";

});

// =====================================
// 9. INITIAL SETTINGS
// =====================================

updateLayerStatus("street");
updateAttribution("street");


let savedLanguage = "en";

try {

    const saved = localStorage.getItem("geonative_language");

    if (saved === "en" || saved === "tr") {
        savedLanguage = saved;
    }

} catch (error) {
    console.warn("Saved language could not be loaded.");
}

setLanguage(savedLanguage);


console.log("GeoNative Explorer started successfully.");
