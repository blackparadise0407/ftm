import { useEffect, useRef } from 'react';
import * as am4geodata from '@amcharts/amcharts4-geodata/worldLow';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from '@amcharts/amcharts4/maps';
import * as am4themes from '@amcharts/amcharts4/themes/animated';

import './styles.scss';
import { BANNER, FOOTER_IMG } from 'assets/images';
import { Button, TourCard } from 'components';

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
      {/* Map section */}
      <section>
        <div id="chartdiv"></div>
      </section>
      {/* Featured tour section */}
      <section className="feature text-white">
        <h3 className="h3 text-secondary">Featured Tour</h3>
        <div
          className="image-container"
          style={{
            background: `url(${BANNER}) center no-repeat`,
            backgroundSize: 'cover',
          }}
        >
          <div className="container">
            <h2 className="h2 title">Lorem Ipsum</h2>
            <p className="text-lg description">
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
            <Button className="img-button">More fun</Button>
            <div className="flex tour-card-groups">
              <TourCard transparent />
              <div className="flex-grow"></div>
              <TourCard transparent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
