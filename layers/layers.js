var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_KotaMalang_1 = new ol.format.GeoJSON();
var features_KotaMalang_1 = format_KotaMalang_1.readFeatures(json_KotaMalang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaMalang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMalang_1.addFeatures(features_KotaMalang_1);
var lyr_KotaMalang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaMalang_1, 
                style: style_KotaMalang_1,
                popuplayertitle: "Kota Malang",
                interactive: true,
    title: 'Kota Malang<br />\
    <img src="styles/legend/KotaMalang_1_0.png" /> Kota Batu<br />\
    <img src="styles/legend/KotaMalang_1_1.png" /> Kota Malang<br />\
    <img src="styles/legend/KotaMalang_1_2.png" /> Malang<br />\
    <img src="styles/legend/KotaMalang_1_3.png" /> <br />'
        });
var format_Keterjangkauan1500_2 = new ol.format.GeoJSON();
var features_Keterjangkauan1500_2 = format_Keterjangkauan1500_2.readFeatures(json_Keterjangkauan1500_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keterjangkauan1500_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keterjangkauan1500_2.addFeatures(features_Keterjangkauan1500_2);
var lyr_Keterjangkauan1500_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Keterjangkauan1500_2, 
                style: style_Keterjangkauan1500_2,
                popuplayertitle: "Keterjangkauan (1500)",
                interactive: true,
                title: '<img src="styles/legend/Keterjangkauan1500_2.png" /> Keterjangkauan (1500)'
            });
var format_Keterjangkauan500_3 = new ol.format.GeoJSON();
var features_Keterjangkauan500_3 = format_Keterjangkauan500_3.readFeatures(json_Keterjangkauan500_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keterjangkauan500_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keterjangkauan500_3.addFeatures(features_Keterjangkauan500_3);
var lyr_Keterjangkauan500_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Keterjangkauan500_3, 
                style: style_Keterjangkauan500_3,
                popuplayertitle: "Keterjangkauan (500)",
                interactive: true,
                title: '<img src="styles/legend/Keterjangkauan500_3.png" /> Keterjangkauan (500)'
            });
var format_KeterjangkauanTerminaldiKotaMalang_4 = new ol.format.GeoJSON();
var features_KeterjangkauanTerminaldiKotaMalang_4 = format_KeterjangkauanTerminaldiKotaMalang_4.readFeatures(json_KeterjangkauanTerminaldiKotaMalang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeterjangkauanTerminaldiKotaMalang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeterjangkauanTerminaldiKotaMalang_4.addFeatures(features_KeterjangkauanTerminaldiKotaMalang_4);
var lyr_KeterjangkauanTerminaldiKotaMalang_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeterjangkauanTerminaldiKotaMalang_4, 
                style: style_KeterjangkauanTerminaldiKotaMalang_4,
                popuplayertitle: "Keterjangkauan Terminal di Kota Malang",
                interactive: true,
                title: '<img src="styles/legend/KeterjangkauanTerminaldiKotaMalang_4.png" /> Keterjangkauan Terminal di Kota Malang'
            });

lyr_Positron_0.setVisible(true);lyr_KotaMalang_1.setVisible(true);lyr_Keterjangkauan1500_2.setVisible(true);lyr_Keterjangkauan500_3.setVisible(true);lyr_KeterjangkauanTerminaldiKotaMalang_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_KotaMalang_1,lyr_Keterjangkauan1500_2,lyr_Keterjangkauan500_3,lyr_KeterjangkauanTerminaldiKotaMalang_4];
lyr_KotaMalang_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Keterjangkauan1500_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KODTRM': 'KODTRM', 'MGTTRM': 'MGTTRM', 'STATRM': 'STATRM', 'KATTRM': 'KATTRM', 'TIPTRM': 'TIPTRM', 'LUAS': 'LUAS', 'THBTRM': 'THBTRM', 'THOTRM': 'THOTRM', 'THSTRM': 'THSTRM', 'KONKON': 'KONKON', 'JLBTRM': 'JLBTRM', 'KEBTRM': 'KEBTRM', 'JLDTRM': 'JLDTRM', 'KEDTRM': 'KEDTRM', 'PARTRM': 'PARTRM', 'KEPTRM': 'KEPTRM', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'type': 'type', 'start': 'start', });
lyr_Keterjangkauan500_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KODTRM': 'KODTRM', 'MGTTRM': 'MGTTRM', 'STATRM': 'STATRM', 'KATTRM': 'KATTRM', 'TIPTRM': 'TIPTRM', 'LUAS': 'LUAS', 'THBTRM': 'THBTRM', 'THOTRM': 'THOTRM', 'THSTRM': 'THSTRM', 'KONKON': 'KONKON', 'JLBTRM': 'JLBTRM', 'KEBTRM': 'KEBTRM', 'JLDTRM': 'JLDTRM', 'KEDTRM': 'KEDTRM', 'PARTRM': 'PARTRM', 'KEPTRM': 'KEPTRM', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'type': 'type', 'start': 'start', });
lyr_KeterjangkauanTerminaldiKotaMalang_4.set('fieldAliases', {'REMARK': 'REMARK', 'Nama': 'Nama', 'Lokasi': 'Lokasi', 'Foto': 'Foto', });
lyr_KotaMalang_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Keterjangkauan1500_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KODTRM': 'TextEdit', 'MGTTRM': 'TextEdit', 'STATRM': 'TextEdit', 'KATTRM': 'TextEdit', 'TIPTRM': 'TextEdit', 'LUAS': 'TextEdit', 'THBTRM': 'TextEdit', 'THOTRM': 'TextEdit', 'THSTRM': 'TextEdit', 'KONKON': 'TextEdit', 'JLBTRM': 'TextEdit', 'KEBTRM': 'TextEdit', 'JLDTRM': 'TextEdit', 'KEDTRM': 'TextEdit', 'PARTRM': 'TextEdit', 'KEPTRM': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Keterjangkauan500_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KODTRM': 'TextEdit', 'MGTTRM': 'TextEdit', 'STATRM': 'TextEdit', 'KATTRM': 'TextEdit', 'TIPTRM': 'TextEdit', 'LUAS': 'TextEdit', 'THBTRM': 'TextEdit', 'THOTRM': 'TextEdit', 'THSTRM': 'TextEdit', 'KONKON': 'TextEdit', 'JLBTRM': 'TextEdit', 'KEBTRM': 'TextEdit', 'JLDTRM': 'TextEdit', 'KEDTRM': 'TextEdit', 'PARTRM': 'TextEdit', 'KEPTRM': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_KeterjangkauanTerminaldiKotaMalang_4.set('fieldImages', {'REMARK': 'TextEdit', 'Nama': 'TextEdit', 'Lokasi': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_KotaMalang_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Keterjangkauan1500_2.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'KODTRM': 'no label', 'MGTTRM': 'no label', 'STATRM': 'no label', 'KATTRM': 'no label', 'TIPTRM': 'no label', 'LUAS': 'no label', 'THBTRM': 'no label', 'THOTRM': 'no label', 'THSTRM': 'no label', 'KONKON': 'no label', 'JLBTRM': 'no label', 'KEBTRM': 'no label', 'JLDTRM': 'no label', 'KEDTRM': 'no label', 'PARTRM': 'no label', 'KEPTRM': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Keterjangkauan500_3.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'KODTRM': 'no label', 'MGTTRM': 'no label', 'STATRM': 'no label', 'KATTRM': 'no label', 'TIPTRM': 'no label', 'LUAS': 'no label', 'THBTRM': 'no label', 'THOTRM': 'no label', 'THSTRM': 'no label', 'KONKON': 'no label', 'JLBTRM': 'no label', 'KEBTRM': 'no label', 'JLDTRM': 'no label', 'KEDTRM': 'no label', 'PARTRM': 'no label', 'KEPTRM': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_KeterjangkauanTerminaldiKotaMalang_4.set('fieldLabels', {'REMARK': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_KeterjangkauanTerminaldiKotaMalang_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});