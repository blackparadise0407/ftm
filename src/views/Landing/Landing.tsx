import { MutableRefObject, useEffect } from "react";
import * as am4themes from "@amcharts/amcharts4/themes/animated";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4geodata from "@amcharts/amcharts4-geodata/worldLow";

import { useRef } from "react";

import "./styles.scss";

am4core.useTheme(am4themes.default);

export default function Landing() {
  const chart = useRef<any>(null);
  useEffect(() => {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata;
    map.projection = new am4maps.projections.Mercator();
    map.zoomControl = new am4maps.ZoomControl();
    chart.current = map;

    return () => {
      map.dispose();
    };
  }, []);

  return (
    <div className="landing">
      <div id="chartdiv" style={{ width: "1670px", height: "812px" }}></div>
      Landing page
    </div>
  );
}
