import { useEffect, useRef } from 'react';
import ReactSlick, { Settings } from 'react-slick';
import * as am4geodata from '@amcharts/amcharts4-geodata/worldLow';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import * as am4themes from '@amcharts/amcharts4/themes/animated';

import { BANNER, PLAY, PLAYER } from 'assets/images';
import { Button, TourCard, UserRanking } from 'components';

import './styles.scss';

const mockData = [
  { rank: 2, likes: 202, status: 'up' },
  { rank: 3, likes: 6342, status: 'down' },
  { rank: 5, likes: 162, status: 'up' },
  { rank: 6, likes: 152, status: 'down' },
  { rank: 10, likes: 202, status: 'up' },
  { rank: 32, likes: 1232, status: 'up' },
  { rank: 12, likes: 2152, status: 'up' },
  { rank: 315, likes: 323, status: 'down' },
  { rank: 112, likes: 532, status: 'up' },
  { rank: 21, likes: 571, status: 'down' },
  { rank: 51, likes: 2321, status: 'up' },
];

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  draggable: true,
};

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
      <section className="chart">
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
      {/* New tour section */}
      <section className="new text-white">
        <div className="container">
          <h3 className="h3 text-secondary">New Tour</h3>
          <div className="flex card-groups">
            <TourCard />
            <TourCard />
            <TourCard />
          </div>
        </div>
      </section>

      <section className="leaderboard">
        <div className="container">
          <h3 className="h3 text-secondary">Leaders Board</h3>
          <div className="flex justify-center user-ranking-groups">
            <UserRanking
              className="self-end"
              size="large"
              data={{
                likes: 2013,
                status: 'up',
                rank: 2,
              }}
            />
            <UserRanking
              className="self-baseline"
              size="large"
              data={{
                likes: 2013,
                status: 'up',
                rank: 1,
              }}
            />
            <UserRanking
              className="self-end"
              size="large"
              data={{
                likes: 2013,
                status: 'down',
                rank: 3,
              }}
            />
          </div>
        </div>
        <ReactSlick className="slider" {...settings}>
          {mockData.map((x, idx) => (
            <div key={idx}>
              <UserRanking data={x as any} />
            </div>
          ))}
        </ReactSlick>
      </section>
      <section className="about">
        <div className="container flex">
          <div className="about__heading">
            <div className="flex flex-col heading">
              <span>
                <span className="text-secondary">HERE</span>{' '}
                <span className="text-gray-4">CAN BE</span>
              </span>
              <span>
                <span className="text-gray-4">ANY</span>
                <span className="text-secondary">WHERE!</span>
              </span>
            </div>
            <Button>ABOUT US</Button>
          </div>
          <div className="about__video relative">
            <div className="relative player-wrapper">
              <img className="player" src={PLAYER} alt="" />
              <img className="play" src={PLAY} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
