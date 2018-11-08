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
      text: 'Source: <a href="https://www.statista.com/statistics/726518/number-craft-breweries-state/" target="_blank" >Number of craft beer breweries in the United States in 2017, by state</a>'
  },

  mapNavigation: {
      enabled: true,
      buttonOptions: {
          verticalAlign: 'bottom'
      }
  },

  colorAxis: {
      min: 0,
      max: 400,
      tickInterval: 100,
      stops: [[0, '#96d83f'], [0.65, '#306a8e'], [1, '#471366']],
      labels: {
          format: '{value}'
          }
  },

  series: [{
      data: totalBrew,
      name: 'Craft Breweries',
      states: {
          hover: {
              color: '#d1e11b'
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
        text: 'States With Over 10 Ski Areas'
    },
    subtitle: {
        text: 'Source: <a href="https://www.statista.com/statistics/206519/number-of-ski-areas-operating-in-the-us-per-state/">Number of ski areas operating per state in the U.S. during the 2017/2018 season</a>'
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
            text: 'Ski Areas'
        }
    },
    legend: {
        enabled: true
    },
    tooltip: {
        pointFormat: 'Ski areas in 2017/2018 season: <b>{point.y}</b>'
    },
    series: [{
        name: 'Ski Areas in 2017',
        data: [
            ['New York', 51],
            ['Michigan', 42],
            ['Wisconsin', 31],
            ['New Hampshire', 30],
            ['Colorado', 30],
            ['California', 27],
            ['Pennsylvania', 26],
            ['Vermont', 26],
            ['Maine', 20],
            ['Minnesota', 19],
            ['Idaho', 17],
            ['Washington', 15],
            ['Utah', 14],
            ['Montana', 14],
            ['Massachusetts', 13],
            ['Oregon', 11]
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
