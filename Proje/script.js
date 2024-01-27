// script.js

const map = L.map('map').setView([39.9334, 32.8597], 6);
// Harita stil özelleştirmeleri
map.getContainer().style.border = '1px solid #ddd'; // Harita etrafına çerçeve ekleme
map.getContainer().style.borderRadius = '8px'; // Haritanın köşelerini yuvarlama

// Harita katmanı ekleme
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const cities = [
    { name: 'Adana', coordinates: [37.0000, 35.3213] },
    { name: 'Adıyaman', coordinates: [37.7648, 38.2766] },
    { name: 'Afyonkarahisar', coordinates: [38.7568, 30.5433] },
    { name: 'Ağrı', coordinates: [39.7191, 43.0503] },
    { name: 'Amasya', coordinates: [40.6500, 35.8333] },
    { name: 'Ankara', coordinates: [39.9334, 32.8597] },
    { name: 'Antalya', coordinates: [36.8841, 30.7056] },
    { name: 'Artvin', coordinates: [41.1834, 41.8183] },
    { name: 'Aydın', coordinates: [37.8444, 27.8458] },
    { name: 'Balıkesir', coordinates: [39.6484, 27.8826] },
    { name: 'Bilecik', coordinates: [40.1500, 29.9833] },
    { name: 'Bingöl', coordinates: [38.8854, 40.4981] },
    { name: 'Bitlis', coordinates: [38.4004, 42.1090] },
    { name: 'Bolu', coordinates: [40.6667, 29.3833] },
    { name: 'Burdur', coordinates: [37.7167, 30.2833] },
    { name: 'Bursa', coordinates: [40.1824, 29.0670] },
    { name: 'Çanakkale', coordinates: [40.1553, 26.4142] },
    { name: 'Çankırı', coordinates: [40.6000, 33.6167] },
    { name: 'Çorum', coordinates: [40.5506, 34.9530] },
    { name: 'Denizli', coordinates: [37.7765, 29.0864] },
    { name: 'Diyarbakır', coordinates: [37.9144, 40.2306] },
    { name: 'Edirne', coordinates: [41.6756, 26.5587] },
    { name: 'Elazığ', coordinates: [38.6810, 39.2264] },
    { name: 'Erzincan', coordinates: [39.7500, 39.5000] },
    { name: 'Erzurum', coordinates: [39.9046, 41.2900] },
    { name: 'Eskişehir', coordinates: [39.7667, 30.5256] },
    { name: 'Gaziantep', coordinates: [37.0662, 37.3833] },
    { name: 'Giresun', coordinates: [40.9128, 38.3895] },
    { name: 'Gümüşhane', coordinates: [40.4608, 39.4828] },
    { name: 'Hakkâri', coordinates: [37.5744, 43.7408] },
    { name: 'Hatay', coordinates: [36.4018, 36.3498] },
    { name: 'Isparta', coordinates: [37.7667, 30.5667] },
    { name: 'Mersin', coordinates: [36.8000, 34.6333] },
    { name: 'İstanbul', coordinates: [41.0082, 28.9784] },
    { name: 'İzmir', coordinates: [38.4192, 27.1287] },
    { name: 'Kars', coordinates: [40.6167, 43.1000] },
    { name: 'Kastamonu', coordinates: [41.3887, 33.7827] },
    { name: 'Kayseri', coordinates: [38.7312, 35.4787] },
    { name: 'Kırklareli', coordinates: [41.7333, 27.2167] },
    { name: 'Kırşehir', coordinates: [39.1425, 34.1709] },
    { name: 'Kocaeli', coordinates: [40.8533, 29.8815] },
    { name: 'Konya', coordinates: [37.8714, 32.5022] },
    { name: 'Kütahya', coordinates: [39.4167, 29.9833] },
    { name: 'Malatya', coordinates: [38.3552, 38.3095] },
    { name: 'Manisa', coordinates: [38.6191, 27.4289] },
    { name: 'Kahramanmaraş', coordinates: [37.5744, 36.9370] },
    { name: 'Mardin', coordinates: [37.3212, 40.7248] },
    { name: 'Muğla', coordinates: [37.2153, 28.3636] },
    { name: 'Muş', coordinates: [38.9462, 41.7539] },
    { name: 'Nevşehir', coordinates: [38.6939, 34.6857] },
    { name: 'Niğde', coordinates: [37.9667, 34.6833] },
    { name: 'Ordu', coordinates: [40.9833, 37.8833] },
    { name: 'Rize', coordinates: [41.0201, 40.5234] },
    { name: 'Sakarya', coordinates: [40.7569, 30.3782] },
    { name: 'Samsun', coordinates: [41.2867, 36.3300] },
    { name: 'Siirt', coordinates: [37.9278, 41.9400] },
    { name: 'Sinop', coordinates: [42.0265, 35.1551] },
    { name: 'Sivas', coordinates: [39.7477, 37.0169] },
    { name: 'Tekirdağ', coordinates: [40.9833, 27.5167] },
    { name: 'Tokat', coordinates: [40.3167, 36.5500] },
    { name: 'Trabzon', coordinates: [41.0050, 39.7269] },
    { name: 'Tunceli', coordinates: [39.1067, 39.5481] },
    { name: 'Şanlıurfa', coordinates: [37.1591, 38.7969] },
    { name: 'Uşak', coordinates: [38.6823, 29.4082] },
    { name: 'Van', coordinates: [38.4891, 43.4089] },
    { name: 'Yozgat', coordinates: [39.8191, 34.8147] },
    { name: 'Zonguldak', coordinates: [41.4564, 31.7987] },
    { name: 'Aksaray', coordinates: [38.3687, 34.0370] },
    { name: 'Bayburt', coordinates: [40.2552, 40.2249] },
    { name: 'Karaman', coordinates: [37.1759, 33.2287] },
    { name: 'Kırıkkale', coordinates: [39.8500, 33.5167] },
    { name: 'Batman', coordinates: [37.8812, 41.1351] },
    { name: 'Şırnak', coordinates: [37.4167, 42.0667] },
    { name: 'Bartın', coordinates: [41.6367, 32.3375] },
    { name: 'Ardahan', coordinates: [41.1114, 42.7022] },
    { name: 'Iğdır', coordinates: [39.8875, 44.0397] },
    { name: 'Yalova', coordinates: [40.6500, 29.2667] },
    { name: 'Karabük', coordinates: [41.0833, 32.6333] },
    { name: 'Kilis', coordinates: [36.7167, 37.1167] },
    { name: 'Osmaniye', coordinates: [37.2519, 36.2361] },
    { name: 'Düzce', coordinates: [40.8438, 31.1565] }
];

const apiKey = ''; // AQICN'den  API anahtarı


// Renk stratejisi için arayüz
class ColorStrategy {
    getColor(aqiValue) {}
}

// Yeşil renk stratejisi
class GreenColorStrategy extends ColorStrategy {
    getColor(aqiValue) {
        return aqiValue <= 50 ? '#00ff00' : null;
    }
}

// Sarı renk stratejisi
class YellowColorStrategy extends ColorStrategy {
    getColor(aqiValue) {
        return aqiValue > 50 && aqiValue <= 100 ? '#ffff00' : null;
    }
}

// Turuncu renk stratejisi
class OrangeColorStrategy extends ColorStrategy {
    getColor(aqiValue) {
        return aqiValue > 100 && aqiValue <= 150 ? '#ffa500' : null;
    }
}


// Kırmızı renk strateji

class RedColorStrategy extends ColorStrategy {
    getColor(aqiValue) {
        return aqiValue > 150 && aqiValue <= 200 ? '#ff0000' : null;
    }
}
// kahvrengi renk stratejisi
class BrownColorStrategy extends ColorStrategy {
    getColor(aqiValue) {
        return aqiValue > 200 && aqiValue <= 300 ? '#8b4513' : null;
    }
}
 // mor renk stratejisi
class PurpleColorStrategy extends ColorStrategy {
    getColor(aqiValue) {
        return aqiValue > 300 ? '#800080' : null;
    }
}


// Renk stratejisi yöneticisi
class ColorStrategyManager {
    constructor() {
        this.strategies = [
            new GreenColorStrategy(),
            new YellowColorStrategy(),
            new OrangeColorStrategy(),
            new RedColorStrategy (),
            new PurpleColorStrategy()
        ];
    }

    getColor(aqiValue) {
        for (const strategy of this.strategies) {
            const color = strategy.getColor(aqiValue);
            if (color) {
                return color;
            }
        }
        // Varsayılan renk, örneğin mor
        return '#800080';
    }
}

// Kullanım
const colorStrategyManager = new ColorStrategyManager();
cities.forEach(city => {
    const apiUrl = `https://api.waqi.info/feed/geo:${city.coordinates[0]};${city.coordinates[1]}/?token=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const aqiValue = data.data.aqi;
            const marker = L.marker(city.coordinates).addTo(map);

            // Hava kalitesine göre markör rengini değiştirme
           // Renk stratejisi yöneticisini kullanarak renk alma
           const markerColor = colorStrategyManager.getColor(aqiValue);

           marker.setIcon(createColoredIcon(markerColor));

           // Açılır pencereyi oluştur
           const aqiMarker = L.marker(city.coordinates).addTo(map);
           //const aqiMarker = L.marker(city.coordinates).addTo(map);
            aqiMarker.bindPopup(`${city.name} - Hava Kalitesi İndeksi (AQI): ${aqiValue}`).openPopup();
        })
        .catch(error => {
            console.error(`Hava kalitesi verilerini çekerken bir hata oluştu (${city.name}):`, error);
        });
});

function createColoredIcon(color) {
    return L.divIcon({
        className: 'custom-marker',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        popupAnchor: [0, -10],
        html: `<div style="background-color: ${color}; border-radius: 50%; width: 20px; height: 20px;"></div>`
    });
}
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const userCoordinates = [position.coords.latitude, position.coords.longitude];
                displayUserLocation(userCoordinates);
            },
            error => {
                console.error('Konum bilgisi alınamadı:', error.message);
            }
        );
    } else {
        console.error('Tarayıcı konum bilgisini desteklemiyor.');
    }
}

function displayUserLocation(coordinates) {
    const userMarker = L.marker(coordinates).addTo(map);
    userMarker.bindPopup(`Sizin Konumunuz - Hava Kalitesi Bilgisi`).openPopup();

    const apiUrl = `https://api.waqi.info/feed/geo:${coordinates[0]};${coordinates[1]}/?token=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const aqiValue = data.data.aqi;
            userMarker.bindPopup(`Sizin Konumunuz - Hava Kalitesi İndeksi (AQI): ${aqiValue}`).openPopup();
        })
        .catch(error => {
            console.error('Hava kalitesi verilerini çekerken bir hata oluştu (Kullanıcı Konumu):', error);
        });
}
// Locate Button özelleştirmeleri
const locateBtn = document.getElementById('locateBtn');
locateBtn.style.backgroundColor = '#3498db';
locateBtn.style.color = '#fff';
locateBtn.style.borderRadius = '5px';

locateBtn.addEventListener('mouseover', function () {
    locateBtn.style.backgroundColor = '#2980b9';
});

locateBtn.addEventListener('mouseout', function () {
    locateBtn.style.backgroundColor = '#3498db';
});

// Düğmeye tıklanınca kullanıcının konumunu almaya yönelik olay dinleyicisi
document.getElementById('locateBtn').addEventListener('click', getUserLocation);



// Verileri tutacak değişken
let fileContent = '';

// Şehirler üzerinde döngü ile hava kalitesi bilgileri alınıyor ve dosyaya ekleniyor
cities.forEach(city => {
    const apiUrl = `https://api.waqi.info/feed/geo:${city.coordinates[0]};${city.coordinates[1]}/?token=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const aqiValue = data.data.aqi;
            const aqiMarker = L.marker(city.coordinates).addTo(map);
            aqiMarker.bindPopup(`${city.name} - Hava Kalitesi İndeksi (AQI): ${aqiValue}`).openPopup();

            // Veriyi dosyaya ekle
            fileContent += `${city.name} - AQI: ${aqiValue}\n`;
        })
        .catch(error => {
            console.error(`Hava kalitesi verilerini çekerken bir hata oluştu (${city.name}):`, error);
        });
});
//Dosyayı kaydetme fonksiyonu
function saveToFile(data) {
    const blob = new Blob([data], { type: 'text/plain' });
    const link = document.createElement('a');

    link.href = window.URL.createObjectURL(blob);
    link.download = 'hava_kalitesi_verileri.txt';
    link.click();
}

// İndirme butonuna tıklanınca çalışacak fonksiyon
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Dosyayı indir
    saveToFile(fileContent);
});


