var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_IndicedeVegetacion_1 = new ol.format.GeoJSON();
var features_IndicedeVegetacion_1 = format_IndicedeVegetacion_1.readFeatures(json_IndicedeVegetacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacion_1.addFeatures(features_IndicedeVegetacion_1);
var lyr_IndicedeVegetacion_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacion_1, 
                style: style_IndicedeVegetacion_1,
                interactive: false,
    title: 'Indice de Vegetacion<br />\
    <img src="styles/legend/IndicedeVegetacion_1_0.png" /> 0,13 - 0,20<br />\
    <img src="styles/legend/IndicedeVegetacion_1_1.png" /> 0,20 - 0,27<br />\
    <img src="styles/legend/IndicedeVegetacion_1_2.png" /> 0,27 - 0,34<br />\
    <img src="styles/legend/IndicedeVegetacion_1_3.png" /> 0,34 - 0,41<br />\
    <img src="styles/legend/IndicedeVegetacion_1_4.png" /> 0,41 - 0,48<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_IndicedeVegetacion_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_IndicedeVegetacion_1];
lyr_IndicedeVegetacion_1.set('fieldAliases', {'NDVI': '', });
lyr_IndicedeVegetacion_1.set('fieldImages', {'NDVI': '', });
lyr_IndicedeVegetacion_1.set('fieldLabels', {'NDVI': 'no label', });
lyr_IndicedeVegetacion_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});