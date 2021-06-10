
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// 		Validation - composants connexes
	//

	
	var rasterMitakaCC228Zone1 = new ol.layer.Tile({
		title: "Mitaka - cc p=228 zone 1 - fusion moy ponderee 15",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_res_zone1_moypond15_p228'}
		})
	});
	rasterMitakaCC228Zone1.setVisible(false);
		
		
	var vecteurMitakaCC228PicZone1 = new ol.layer.Tile({
		title: "Mitaka - pic cc p=228 zone 1 - fusion moy ponderee 15",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_pic_zone1_moypond15_p228'}
		})
	});
	vecteurMitakaCC228PicZone1.setVisible(false);
		

	
	
