let center = [59.937738, 30.309158];
let placemarkCoordinates = [59.938575, 30.313233];

function init(){
    let myMap = new ymaps.Map("map", {
        center: center,
        zoom: 16
    });

    let placemark = new ymaps.Placemark(placemarkCoordinates, {},{
        iconLayout: 'default#image',
        iconImageHref: '../images/sec5-map_pin.webp',
        iconImageSize: [113, 106],
        iconImageOffset: [0, 0]
    });

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    myMap.geoObjects.add(placemark);
}
ymaps.ready(init);