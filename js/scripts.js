$(function(){
  console.log('scripts loaded');

var url= 'js/breweries.json';
var breweries = '';

$.ajax({
type: 'GET',
url: url,
data: breweries,
async: true,
dataType: 'json',
success: function(breweries){
  console.log(breweries);

  var chart = new Taucharts.Chart({

                data: breweries,
                type: 'scatterplot',
                x: 'Craft Breweries Per Million',
                y: 'Ski Areas Per Million',
                color: 'Average Snowfall',
                size: 'State Population',
                plugins: [Taucharts.api.plugins.get('tooltip')(),
                Taucharts.api.plugins.get('legend')()],
                  //fields: ['State', 'Craft Breweries', 'Ski Areas', 'State Population', 'Craft Breweries Per Million', 'Ski Areas Per Million']
                  guide: {
                    x: {label:'Craft Breweries Per Million People'},  // custom label for X axis
                    y: {label:'Ski Areas Per Million People'},    // custom label for Y axis
                    padding: {b:40,l:40,t:10,r:10}   // chart paddings
                  },
});// close Taucharts
            chart.renderTo('#brewVsSki');
} // close success

}); //close ajax

// HIGHMAP ----------------------------
var data = [
  ['us-ma', 0],
  ['us-wa', 1],
  ['us-ca', 2],
  ['us-or', 3],
  ['us-wi', 4],
  ['us-me', 5],
  ['us-mi', 6],
  ['us-nv', 7],
  ['us-nm', 8],
  ['us-co', 9],
  ['us-wy', 10],
  ['us-ks', 11],
  ['us-ne', 12],
  ['us-ok', 13],
  ['us-mo', 14],
  ['us-il', 15],
  ['us-in', 16],
  ['us-vt', 17],
  ['us-ar', 18],
  ['us-tx', 19],
  ['us-ri', 20],
  ['us-al', 21],
  ['us-ms', 22],
  ['us-nc', 23],
  ['us-va', 24],
  ['us-ia', 25],
  ['us-md', 26],
  ['us-de', 27],
  ['us-pa', 28],
  ['us-nj', 29],
  ['us-ny', 30],
  ['us-id', 31],
  ['us-sd', 32],
  ['us-ct', 33],
  ['us-nh', 34],
  ['us-ky', 35],
  ['us-oh', 36],
  ['us-tn', 37],
  ['us-wv', 38],
  ['us-dc', 39],
  ['us-la', 40],
  ['us-fl', 41],
  ['us-ga', 42],
  ['us-sc', 43],
  ['us-mn', 44],
  ['us-mt', 45],
  ['us-nd', 46],
  ['us-az', 47],
  ['us-ut', 48],
  ['us-hi', 49],
  ['us-ak', 50],
  ['undefined', 51]
];

// Create the chart
Highcharts.mapChart('map-states', {
  chart: {
      map: 'countries/us/us-all'
  },

  title: {
      text: 'Craft Breweries by State'
  },

  subtitle: {
      text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-all.js">United States of America</a>'
  },

  mapNavigation: {
      enabled: true,
      buttonOptions: {
          verticalAlign: 'bottom'
      }
  },

  colorAxis: {
      min: 0
  },

  series: [{
      data: data,
      name: 'Random data',
      states: {
          hover: {
              color: '#d3d3d3'
          }
      },
      dataLabels: {
          enabled: true,
          format: '{point.name}'
      }
  }, {
      name: 'Separators',
      type: 'mapline',
      data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
      color: 'silver',
      showInLegend: false,
      enableMouseTracking: false
  }]
}); // END highmap

// Highcharts
Highcharts.chart('topSki', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Most Ski Areas by State'
    },
    subtitle: {
        text: 'Source: <a href="http://www.nsaa.org/media/303993/1617_Areas_per_state.pdf">www.nsaa.org</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['Shanghai', 24.2],
            ['Beijing', 20.8],
            ['Karachi', 14.9],
            ['Shenzhen', 13.7],
            ['Guangzhou', 13.1],
            ['Istanbul', 12.7],
            ['Mumbai', 12.4],
            ['Moscow', 12.2],
            ['São Paulo', 12.0],
            ['Delhi', 11.7],
            ['Kinshasa', 11.5],
            ['Tianjin', 11.2]
        ],
        dataLabels: {
            enabled: false,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
}); //END Highcharts

// responsive menu
// function displayMenu() {
  //  var x = document.getElementById("myTopnav");
    //if (x.className === "topnav") {
      //  x.className += " responsive";
//    } else {
  //      x.className = "topnav";
    //}
// } end resp menu

}); //function ready
