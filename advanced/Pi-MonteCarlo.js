var r = 5;
var points_total = 0;
var points_inside = 0;

while (1) {
  points_total++;

  var x = Math.random() * r * 2 - r;
  var y = Math.random() * r * 2 - r;
  
  if (Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(r, 2))
    points_inside++;

  if (points_total % 10000 == 0)
    console.log(points_inside + "/" + points_total + " pi == " + (4 * points_inside / points_total));
}