require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10,
          center: [-90, 38]
        });


        /********************
         * Add feature layer
         ********************/

        // COVID-19 cases per 100,000 throughout the St. Louis.
        var featureLayer_1 = new FeatureLayer({
  url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/STL_Neighborhood/FeatureServer"
});

map.add(featureLayer_1);

var featureLayer_2 = new FeatureLayer({
  url: "https://services8.arcgis.com/judPKWn4qwnKEdZl/arcgis/rest/services/COVID19_Case_Rate_Per_100k_in_STL/FeatureServer"
});

map.add(featureLayer_2);

        map.add(featureLayer);
      });
