$(function(){
  console.log('scripts loaded');

  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos)  {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

// HIGHMAP ----------------------------
var totalBrew = [
  ['us-ma', 129],
  ['us-wa', 369],
  ['us-ca', 764],
  ['us-or', 266],
  ['us-wi', 160],
  ['us-me', 99],
  ['us-mi', 330],
  ['us-nv', 40],
  ['us-nm', 67],
  ['us-co', 348],
  ['us-wy', 24],
  ['us-ks', 36],
  ['us-ne', 49],
  ['us-ok', 27],
  ['us-mo', 91],
  ['us-il', 200],
  ['us-in', 137],
  ['us-vt', 55],
  ['us-ar', 35],
  ['us-tx', 251],
  ['us-ri', 17],
  ['us-al', 34],
  ['us-ms', 12],
  ['us-nc', 257],
  ['us-va', 190],
  ['us-ia', 76],
  ['us-md', 73],
  ['us-de', 21],
  ['us-pa', 282],
  ['us-nj', 90],
  ['us-ny', 329],
  ['us-id', 54],
  ['us-sd', 16],
  ['us-ct', 60],
  ['us-nh', 58],
  ['us-ky', 52],
  ['us-oh', 225],
  ['us-tn', 82],
  ['us-wv', 23],
  ['us-dc', 12],
  ['us-la', 33],
  ['us-fl', 243],
  ['us-ga', 69],
  ['us-sc', 61],
  ['us-mn', 158],
  ['us-mt', 75],
  ['us-nd', 12],
  ['us-az', 96],
  ['us-ut', 30],
  ['us-hi', 18],
  ['us-ak', 36],
  //['undefined', 51]
];

// Create the chart
var mapChart = Highcharts.mapChart('map-states', {
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
      min: 0,
      max: 775
  },

  series: [{
      data: totalBrew,
      name: 'Craft Breweries',
      states: {
          hover: {
              color: '#2daa4b'
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
var skiChart = Highcharts.chart('topSki', {
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
