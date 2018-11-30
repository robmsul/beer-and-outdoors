$(function(){
  console.log('taucharts loaded');

var url= 'js/breweriesA.json';
var brewData = '';

$.ajax({
  type:'GET',
  url: url,
  data: brewData,
  async:true,
  dataType:'json',
  success:function(brewData){
    console.log(brewData);

      var chart = new Taucharts.Chart({
        guide: {
        x: {label: {text: 'Craft Breweries Per Million People', padding: 35}, padding: 20},
        y: {label: 'Ski Areas Per Million People', padding: 20},
        padding: {b: 70, l: 70, t: 10, r: 10},
        showGridLines: 'xy'/*,
        color: {
            brewer: ['color-red', 'color-green', 'color-blue']
        }*/
    },
        data: brewData,
        type: 'scatterplot',
        x: 'Craft Breweries Per Million People',
        y: 'Ski Areas Per Million People',
        color: 'Average Annual Snowfall',
        size: 'State Population',
        plugins: [Taucharts.api.plugins.get('tooltip')(), Taucharts.api.plugins.get('legend')()]
      }); // close Tauchart.Chart
      chart.renderTo('#scatter');
      } //close success
    }); // close ajax
});//function ready
