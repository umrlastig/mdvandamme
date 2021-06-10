
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// 		Resultat
	//
	
	
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// 		Moyenne simple
	//
	var rasterMitakaResult1Zone1 = new ol.layer.Tile({
		title: "Mitaka - resultat zone 1 - fusion moy simple",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_res_zone1_moysimple '}
		})
	});
	rasterMitakaResult1Zone1.setVisible(true);
	
	
	var rasterMitakaResult1Zone2 = new ol.layer.Tile({
		title: "Mitaka - resultat zone 2 - fusion moy simple",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_res_zone2_moysimple '}
		})
	});
	rasterMitakaResult1Zone2.setVisible(true);

	
	var rasterMitakaResult1Zone3 = new ol.layer.Tile({
		title: "Mitaka - resultat zone 3 - fusion moy simple",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_res_zone3_moysimple '}
		})
	});
	rasterMitakaResult1Zone3.setVisible(true);

	
	var rasterMitakaResult1Zone4 = new ol.layer.Tile({
		title: "Mitaka - resultat zone 4 - fusion moy simple",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_res_zone4_moysimple '}
		})
	});
	rasterMitakaResult1Zone4.setVisible(true);
	

	var rasterMitakaResult1Zone5 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 5 - fusion moy simple",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone5_moysimple '}
			})
		});
		rasterMitakaResult1Zone5.setVisible(true);
		var rasterMitakaResult1Zone6 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 6 - fusion moy simple",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone6_moysimple '}
			})
		});
		rasterMitakaResult1Zone6.setVisible(true);
		var rasterMitakaResult1Zone7 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 7 - fusion moy simple",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone7_moysimple '}
			})
		});
		rasterMitakaResult1Zone7.setVisible(true);
	
	
	var rasterMitakaResult1Zone8 = new ol.layer.Tile({
		title: "Mitaka - resultat zone 8 - fusion moy simple",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_res_zone8_moysimple '}
		})
	});
	rasterMitakaResult1Zone8.setVisible(true);
	
	
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// 		Moyenne pondérée 15
	//
	var rasterMitakaResult2Zone1 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 1 - fusion moy ponderee 15",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone1_moypond15'}
			})
		});
		rasterMitakaResult2Zone1.setVisible(false);
		
		var rasterMitakaResult2Zone2 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 2 - fusion moy ponderee 15",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone2_moypond15'}
			})
		});
		rasterMitakaResult2Zone2.setVisible(false);
		
		var rasterMitakaResult2Zone3 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 3 - fusion moy ponderee 15",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone3_moypond15'}
			})
		});
		rasterMitakaResult2Zone3.setVisible(false);
		
		var rasterMitakaResult2Zone4 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 4 - fusion moy ponderee 15",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone4_moypond15'}
			})
		});
		rasterMitakaResult2Zone4.setVisible(false);
		
	var rasterMitakaResult2Zone5 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 5 - fusion moy ponderee 15",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone5_moypond15'}
			})
		});
		rasterMitakaResult2Zone5.setVisible(false);
		
		var rasterMitakaResult2Zone6 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 6 - fusion moy ponderee 15",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone6_moypond15'}
			})
		});
		rasterMitakaResult2Zone6.setVisible(false);
		
		var rasterMitakaResult2Zone7 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 7 - fusion moy ponderee 15",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone7_moypond15'}
			})
		});
		rasterMitakaResult2Zone7.setVisible(false);
		
	
	var rasterMitakaResult2Zone8 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 8 - fusion moy ponderee 15",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone8_moypond15'}
			})
		});
	rasterMitakaResult2Zone8.setVisible(false);

	
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// 		Moyenne pondérée 30
	//
	var rasterMitakaResult3Zone1 = new ol.layer.Tile({
		title: "Mitaka - resultat zone 1 - fusion moy ponderee 30",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_res_zone1_moypond30'}
		})
	});
	rasterMitakaResult3Zone1.setVisible(false);
		
	
	var rasterMitakaResult3Zone2 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 2 - fusion moy ponderee 30",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone2_moypond30'}
			})
		});
		rasterMitakaResult3Zone2.setVisible(false);
		
		var rasterMitakaResult3Zone3 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 3 - fusion moy ponderee 30",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone3_moypond30'}
			})
		});
		rasterMitakaResult3Zone3.setVisible(false);
		
		var rasterMitakaResult3Zone4 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 4 - fusion moy ponderee 30",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone4_moypond30'}
			})
		});
		rasterMitakaResult3Zone4.setVisible(false);
		
		var rasterMitakaResult3Zone5 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 5 - fusion moy ponderee 30",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone5_moypond30'}
			})
		});
		rasterMitakaResult3Zone5.setVisible(false);
		
		var rasterMitakaResult3Zone6 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 6 - fusion moy ponderee 30",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone6_moypond30'}
			})
		});
		rasterMitakaResult3Zone6.setVisible(false);
		
		var rasterMitakaResult3Zone7 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 7 - fusion moy ponderee 30",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone7_moypond30'}
			})
		});
		rasterMitakaResult3Zone7.setVisible(false);
		
		var rasterMitakaResult3Zone8 = new ol.layer.Tile({
			title: "Mitaka - resultat zone 8 - fusion moy ponderee 30",
			source: new ol.source.TileWMS({
				url: 'http://82.165.253.86/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_res_zone8_moypond30'}
			})
		});
		rasterMitakaResult3Zone8.setVisible(false);
	
	
	
	