import { useEffect, useRef } from 'react';
import * as am4geodata from '@amcharts/amcharts4-geodata/worldLow';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from '@amcharts/amcharts4/maps';
import * as am4themes from '@amcharts/amcharts4/themes/animated';

import './styles.scss';

am4core.useTheme(am4themes.default);

export default function Landing() {
  const chart = useRef<any>(null);
  useEffect(() => {
    let map = am4core.create('chartdiv', am4maps.MapChart);

    // Set map data
    map.geodata = am4geodata.default;
    // Set map projection
    map.projection = new am4maps.projections.Miller();
    // Create map polygon series
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.strokeWidth = 3;
    polygonTemplate.fill = am4core.color('#3C63B4');

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#6c85b8');

    map.zoomControl = new am4maps.ZoomControl();
    map.homeZoomLevel = 5;
    map.homeGeoPoint = {
      latitude: 20,
      longitude: 110,
    };
    chart.current = map;

    return () => {
      map.dispose();
    };
  }, []);

  return (
    <div className="landing">
      <div id="chartdiv" style={{ width: '1670px', height: '812px' }}></div>
      Landing page
    </div>
  );
}
