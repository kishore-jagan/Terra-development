import { Component, OnInit, Renderer2 } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import Map from 'ol/Map';
import View from 'ol/View';
import { Circle as CircleStyle, Fill, Text, Stroke, Style, Icon } from 'ol/style';
import { Feature } from 'ol';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource, XYZ } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// import { PointerEvent } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Point, Circle, LineString } from 'ol/geom';
import { LayoutComponent } from '../layout/layout.component';
import { getDistance, offset } from 'ol/sphere';
import { SensorData, StationConfigs, SensorData2 } from '../../model/config.model';
import { ConfigDataService } from '../config-data.service';
import { HttpClientModule } from '@angular/common/http';
import { config } from 'process';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ConfigDataService]
})
export class HomeComponent implements OnInit {
  popupVisible = false;
  popupContent = '';
  popupPosition: [number, number] = [0, 0];
  map!: Map;
  center:[number, number] = fromLonLat([80.197876, 14.589438]) as [number, number];
  buoy2:[number, number] = fromLonLat([80.178118, 14.607975]) as [number, number];
  radius = 180;
  wrange = 80;
  bouy1wrange!:number;
  buoy2wrange!:number;
  buoy1danger!:number;
  buoy2danger!:number;
  vectorLayer!: VectorLayer;
  currentLayer!: TileLayer;
  showPaths:boolean = false;
  stationCOnfig: StationConfigs[]=[];
  sensorsliveData:SensorData[]=[];
  sensorsliveData2:SensorData2[]=[];
  stationName1!:string;
  stationName2!:string;
  livelocationbuoy1!:[number,  number];
  livelocationbuoy2!:[number,  number];
  selectedBuoy!:string;
  trackpath1:[number, number][]=[this.center];
  trackpath2:[number, number][]=[this.buoy2];
  showTrackPath: boolean = false;


 
  mapUrl = 'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=c30d4b0044414082b818c93c793707a4';
mapChange(name:String){
  
  switch (name) {
    case 'OpenCycleMap':
      this.mapUrl = 'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=c30d4b0044414082b818c93c793707a4';
     
      break;
      case 'Transport':
        this.mapUrl = 'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=c30d4b0044414082b818c93c793707a4';
        break;
        case 'Landscape':
          this.mapUrl = 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=c30d4b0044414082b818c93c793707a4';
          break;
          case 'Outdoors':
            this.mapUrl = 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=c30d4b0044414082b818c93c793707a4';
            break;
            case 'TransportDark':
              this.mapUrl = 'https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=c30d4b0044414082b818c93c793707a4';
              break;
              case 'Spinal Map':
                this.mapUrl = 'https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=c30d4b0044414082b818c93c793707a4';
                break;
      
    default:
      this.mapUrl = 'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=c30d4b0044414082b818c93c793707a4';
      break;
  }
this.updateMapLayer();
}
updateMapLayer() {
  const tileLayer = this.map.getLayers().getArray().find(layer => layer instanceof TileLayer) as TileLayer;
  if (tileLayer) {
    const newSource = new XYZ({
      url: this.mapUrl,
    });
    tileLayer.setSource(newSource);
  }
}

ngOnInit(): void {
  console.log("init called");
  forkJoin([
    this.data.getSensorLiveData('2024-01-01', '2024-10-30'),
    this.data.getStationNames()
  ]).subscribe(([sensors, configs]) => {
    this.sensorsliveData = sensors.buoy1;
    this.sensorsliveData2 = sensors.buoy2;

    this.livelocationbuoy1 = fromLonLat([this.sensorsliveData[0].LONG, this.sensorsliveData[0].LAT]) as [number, number];
    this.livelocationbuoy2 = fromLonLat([this.sensorsliveData2[0].LONG, this.sensorsliveData2[0].LAT]) as [number, number];

    this.bouy1wrange = configs[0].warning_circle;
    this.buoy2wrange = configs[1].warning_circle;
    this.buoy1danger = configs[0].danger_circle;
    this.buoy2danger = configs[1].danger_circle;

    const status = this.coordassign(configs);
    if (status && !this.map) {
      this.MapInit();
    }
  });
}

traveledPath: [number, number][] = [
  // this.livelocationbuoy1,
  fromLonLat([72.808716, 18.999682]) as [number, number],
  fromLonLat([72.809211, 18.997958]) as [number, number],
  fromLonLat([72.809304, 18.997888]) as [number, number],

  fromLonLat([72.809203, 18.997802]) as [number, number],
  fromLonLat([72.809050, 18.997865]) as [number, number],
  fromLonLat([72.808994, 18.997960]) as [number, number],
  fromLonLat([72.809103, 18.998111]) as [number, number],
  // fromLonLat([80.199560, 14.589617]) as [number, number],
];

traveledPath2: [number, number][] = [
  // this.livelocationbuoy2,
  fromLonLat([80.178118, 14.607975]) as [number, number],
  fromLonLat([80.185170, 14.619721]) as [number, number],
  fromLonLat([80.182909, 14.617035]) as [number, number],
  fromLonLat([80.191029, 14.616439]) as [number, number],
  fromLonLat([80.194832, 14.621610]) as [number, number],
];


coordassign(configs: StationConfigs[]): boolean {
  // Ensure there are at least two configurations in the array to avoid errors
  if (configs.length < 2) {
    console.error("Insufficient station configurations provided.");
    return false;
  }

  // Assign station names
  this.stationName1 = configs[0].station_name;
  this.stationName2 = configs[1].station_name;

  // Function to convert DMS to Decimal Degrees
  const convertDMSToDD = (deg: number, min: number, sec: number): number => {
    return deg + (min / 60) + (sec / 3600);
  };

  // Helper function to assign locations based on geo_format
  const assignLocation = (config: StationConfigs): [number, number] => {
    if (config.geo_format === "DMS") {
      return fromLonLat([
        convertDMSToDD(config.longitude_deg, config.longitude_min, config.longitude_sec),
        convertDMSToDD(config.latitude_deg, config.latitude_min, config.latitude_sec)
      ]) as [number, number];
    } else if (config.geo_format === "DD") {
      return fromLonLat([
        config.longitude_deg,
        config.latitude_deg
      ]) as [number, number];
    } else {
      console.error("Unknown geo_format encountered:", config.geo_format);
      return [0, 0]; // Return a default value or handle as needed
    }
  };

  // Assign buoy locations
  this.livelocationbuoy1 = assignLocation(configs[0]);
  this.buoy2 = assignLocation(configs[1]);

  // Log buoy locations for debugging
  console.log("buoy 1 location:", this.livelocationbuoy1);
  console.log("buoy 2 location:", this.buoy2);

  // If all went well, return true
  return true;
}






  constructor(private layout: LayoutComponent, private data:ConfigDataService, private router: Router) {}
  


  
  MapInit(): void {
    
    // this.assign();
    // if(status){
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        const vectorSource = new VectorSource();
        
        this.vectorLayer = new VectorLayer({
          source: vectorSource,
        });
        
        this.createMarker(this.livelocationbuoy1, this.stationName1, vectorSource);
        this.createMarker(this.livelocationbuoy2, this.stationName2, vectorSource);
        this.createCircle(this.livelocationbuoy1, this.radius, 'red', vectorSource);
        this.createCircle(this.livelocationbuoy2, this.radius, 'red', vectorSource);
        this.createCircle(this.livelocationbuoy1, this.wrange, 'yellow', vectorSource);
        this.createCircle(this.livelocationbuoy2, this.wrange, 'yellow', vectorSource);
       
        this.map = new Map({
          view: new View({
            center: this.livelocationbuoy1,
            zoom: 15,
          }),
          layers: [
            new TileLayer({
              source: new XYZ({
                url:this.mapUrl,
              }),
            }),
            this.vectorLayer,
          ],
          target: 'ol-map',
        });
  
        this.map.on('click', (event) => {
          this.map.forEachFeatureAtPixel(event.pixel, (feature) => {
            if (feature instanceof Feature) {
              const name = feature.get('name');
              if (name) {
                // this.router.navigate(['/base', `Dashboard_${name}`]);
                this.layout.selectedBuoy = name;
                // this.layout.sensors();
                //  this.router.navigate(['/base', `Dashboard_${name}`]);
                this.layout.page = 'Dashboard';
               
                
                
                
                
              }
            }
          });
        });
        this.map.getViewport().addEventListener('pointermove', (event) => {
          const pixel = this.map.getEventPixel(event);
        
          // Reset cursor by default
          this.map.getTargetElement().style.cursor = '';
        
          // Check if a feature exists at the pixel where the pointer is hovering
          this.map.forEachFeatureAtPixel(pixel, (feature) => {
            if (feature instanceof Feature && feature.get('name')) { // 'name' or any unique property of marker
              this.map.getTargetElement().style.cursor = 'pointer';
            }
          });
        });
        this.addPathLines(this.traveledPath);
        this.addPathLines(this.traveledPath2);
   
      }
    }, 2);
      
  // }
    
  }
 
  addPathLines(coords: [number, number][]) {
    const lineString = new Feature({
      geometry: new LineString(coords),
    });

    const lineStyle = new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 2,
      }),
    });

    lineString.setStyle(lineStyle);
    this.vectorLayer.getSource()?.addFeature(lineString);
  }


  createMarker(coordinate: [number, number], name: string, vectorSource: VectorSource) {
    const markerStyle = new Style({
      image: new Icon({
        src: '../../assets/buoy.png',
        scale: 0.04,
      }),
      text: new Text({
        font: '12px Calibri,sans-serif',
        text: name,
        offsetY: -50,
        fill: new Fill({ color: '#000' }),
        stroke: new Stroke({ color: '#fff', width: 2 }),
        textAlign: 'center',
        textBaseline: 'middle',
      }),
    });

    const marker = new Feature({
      name,
      geometry: new Point(coordinate),
    });
    marker.setStyle(markerStyle);
    vectorSource.addFeature(marker);
  }

  createCircle(center: [number, number], radius: number, color: string, vectorSource: VectorSource) {
    const circleFeature = new Feature({
      geometry: new Circle(center, radius),
    });

    const circleStyle = new Style({
      stroke: new Stroke({ color, width: 2 }),
      fill: new Fill({ color: 'rgba(0, 0, 255, 0.1)' }),
    });
    circleFeature.setStyle(circleStyle);
    vectorSource.addFeature(circleFeature);
  
    setTimeout(() => {
      const newCoords = this.livelocationbuoy1;
      const newcoords2 = this.livelocationbuoy2;
      const marker = vectorSource.getFeatures().find(f => f.get('name') === 'Buoy 1');
    
      if (marker) {
        marker.setGeometry(new Point(newCoords));
      }
    
      this.checkBuoyRange(newCoords);
      this.checkBuoyRange2(newcoords2);
    }, 2000);
  }

  // Adding flags to prevent multiple identical logs
  lastBuoyRangeState ='';
  lastWarningState = '';
  
  checkBuoyRange(markerCoords: [number, number]): void {
    const distance = getDistance(this.center, markerCoords);
    const newState = distance > this.radius ? 'Buoy 1 missing or out of range' : 'Buoy 1 within range';
    if (newState !== this.lastBuoyRangeState) {
      
      this.lastBuoyRangeState = newState;
    }
  }

  checkBuoyRange2(markerCoords: [number, number]): void {
    const distance = getDistance(this.center, markerCoords);
    const newWarningState = distance > this.wrange ? 'Buoy 2 far beyond range' : 'Buoy 2 within warning range';
    if (newWarningState !== this.lastWarningState) {
      
      this.lastWarningState = newWarningState;
    }
  }
}
