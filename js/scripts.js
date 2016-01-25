function Places(destination,season) {
  this.destination = destination;
  this.season= season;
  this.landmarks = [];
  this.activites= [];

}

Places.prototype.vacation = function () {
  return this.destination + " " + this.season;
}

Landmarks.prototype.fullLandmark = function () {
  return this.beach + ", " + this.restaurant;
}

Activites.prototype.fullActivity = function () {
  return this.outdoor + ", " + this.indoor;
}

function Landmarks(beach, restaurant) {
  this.beach = beach;
  this.restaurant = restaurant;
}

function Activites(outdoor,indoor) {
  this.outdoor= outdoor;
  this.indoor= indoor;
}
