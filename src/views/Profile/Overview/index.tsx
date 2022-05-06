import { useEffect, useRef, useState } from 'react';
import * as am4geodata from '@amcharts/amcharts4-geodata/worldLow';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import * as am4themes from '@amcharts/amcharts4/themes/animated';

import { EyeOutlined, HeartOutlined, StarOutlined } from 'assets/svgs';
import { CustomLink, ReviewTourCard } from 'components';

import './styles.scss';

am4core.useTheme(am4themes.default);

export default function Overview() {
    const [isViewAll, setIsViewAll] = useState(false);

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
        map.chartContainer.wheelable = false;
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
        <div className="overview">
            <h2 className="h2 text-secondary">Hello Username!</h2>
            <div className="overview__action-list">
                <div className="action">
                    <EyeOutlined fill="#2E65BA" />
                    <span className="h4">2 trips</span>
                </div>
                <div className="action">
                    <HeartOutlined fill="#2E65BA" />
                    <span className="h4">1 tips</span>
                </div>
                <div className="action">
                    <StarOutlined fill="#2E65BA" />
                    <span className="h4">0 reviews</span>
                </div>
            </div>
            {!isViewAll && <div id="chartdiv"></div>}
            <div className="forget-review flex justify-between items-center">
                <h5 className="h5">Don't Forget To Review</h5>
                <CustomLink
                    to=""
                    small
                    title="View All"
                    onClick={() => setIsViewAll(true)}
                />
            </div>
            <div className="tour-card-list flex flex-col">
                <ReviewTourCard />
                <ReviewTourCard />
                {isViewAll && (
                    <>
                        <ReviewTourCard />
                        <ReviewTourCard />
                        <ReviewTourCard />
                        <ReviewTourCard />
                        <ReviewTourCard />
                        <ReviewTourCard />
                    </>
                )}
            </div>
        </div>
    );
}
