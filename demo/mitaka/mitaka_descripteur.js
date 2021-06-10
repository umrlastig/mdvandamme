
	// ---------------------------------------------------------------------------------------
	// LAYER DESCRIPTEUR
	
	
	// ---------------------------------------------------------------------------------------
	// v2 - aout 2018
	var rasterMitakaOrientationSmooth = new ol.layer.Tile({
		title: "Mitaka - orientation après correction",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_dominant_orientation_smooth'}
		})
	});
	rasterMitakaOrientationSmooth.setVisible(false);
	
	
	var rasterMitakaAverageSpeedSmooth = new ol.layer.Tile({
		title: "Mitaka - vitesse moyenne après correction",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_average_speed_smooth'}
		})
	});
	rasterMitakaAverageSpeedSmooth.setVisible(true);
	
	
	var rasterMitakaAverageAccelerationSmooth = new ol.layer.Tile({
		title: "Mitaka - acceleration moyenne après correction",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_average_acceleration_smooth'}
		})
	});
	rasterMitakaAverageAccelerationSmooth.setVisible(false);
	
	
	var rasterMitakaStopPointSumSmooth = new ol.layer.Tile({
		title: "Mitaka - somme points stop après correction",
		source: new ol.source.TileWMS({
			url: 'http://82.165.253.86/geoserver/mitaka/wms',
			params: {'LAYERS': 'mitaka:mitaka_sum_stop_point'}
		})
	});
	rasterMitakaStopPointSumSmooth.setVisible(false);

		
	
	// ---------------------------------------------------------------------------------------
	// v1 - étudiants
	
	var rasterMitakaOrientation = new ol.layer.Tile({
		title: "Mitaka - orientation",
		source: new ol.source.TileWMS({
				url: 'http://172.16.2.142:8084/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_dominant_orientation'}
			})
	});
	rasterMitakaOrientation.setVisible(false);
	
	
		
		
		// +++++++  
		
		var rasterMitakaAverageSpeed = new ol.layer.Tile({
			title: "Mitaka - vitesse moyenne",
			source: new ol.source.TileWMS({
				url: 'http://172.16.2.142:8084/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_average_speed'}
			})
		});
		rasterMitakaAverageSpeed.setVisible(false);
		
		
		
		// +++++++   
		
		var rasterMitakaAverageAcceleration = new ol.layer.Tile({
			title: "Mitaka - acceleration moyenne",
			source: new ol.source.TileWMS({
				url: 'http://172.16.2.142:8084/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_average_acceleration'}
			})
		});
		rasterMitakaAverageAcceleration.setVisible(false);
		
		
		
		// +++++++	 32654
		
		var rasterMitakaStopPointSum = new ol.layer.Tile({
			title: "Mitaka - somme points stop",
			source: new ol.source.TileWMS({
				url: 'http://172.16.2.142:8084/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_sum_stop_point'}
			})
		});
		rasterMitakaStopPointSum.setVisible(false);
		
			
		// +++++++	
		
		var rasterMitakaSpeedStDeviation = new ol.layer.Tile({
			title: "Mitaka - vitesse écart-type",
			source: new ol.source.TileWMS({
				url: 'http://172.16.2.142:8084/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_st_deviation_speed'}
			})
		});
		rasterMitakaSpeedStDeviation.setVisible(false);
		
		// +++++++
		
		var rasterMitakaSpeedVariance = new ol.layer.Tile({
			title: "Mitaka - vitesse variance",
			source: new ol.source.TileWMS({
				url: 'http://172.16.2.142:8084/geoserver/mitaka/wms',
				params: {'LAYERS': 'mitaka:mitaka_variance_speed'}
			})
		});
		rasterMitakaSpeedVariance.setVisible(false);
	