var radius = 5;
var points_total = 0;
var points_inside = 0;

while (1) {
  points_total++;

  var x = getPosition(radius)
  var y = getPosition(radius)
  
  if (Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(radius, 2))
    points_inside++;

  if (points_total % 40000 == 0){
    process.stdout.clear()
    process.stdout.write(
      points_inside +
        "/" +
        points_total +
        " pi == " +
        (4 * points_inside) / points_total
    );
  }
}

const getPosition = (radius) => {
  return Math.random() * radius * 2 - radius
}