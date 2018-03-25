
//定义一个数组
var stations = [
  ['陕西南路','黄陂南路','人民广场','新闸路'],
  ['龙华中路','大木桥路','嘉善路','陕西南路'],
  ['龙华','漕溪路','宜山路','虹桥路'],
  ['南浦大桥','西藏南路','鲁班路','大木桥路']
];

function getStation(){
  // var line = $('#line');  //选中线路的下拉菜单
  // var station = $('#station');//选中站点的下拉菜单
  var line = document.metro.line;
  var station = document.metro.station;
  var arrStations = stations[line.selectedIndex-1];  //得到对应线路的站点数组
  station.length = 1; //把站点全部清零，只留第一行

  for(var i=0;i<arrStations.length;i++){
    station[i+1] = new Option(arrStations[i]);
  }
}
