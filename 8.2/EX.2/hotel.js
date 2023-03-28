export class Hotel {
    constructor(name, numRooms, numFloors, totalArea) {
      this._name = name;
      this._numRooms = numRooms;
      this._numFloors = numFloors;
      this._totalArea = totalArea;
    }

    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  
    get numRooms() {
      return this._numRooms;
    }
  
    set numRooms(newNumRooms) {
      this._numRooms = newNumRooms;
    }
  
    get numFloors() {
      return this._numFloors;
    }
  
    set numFloors(newNumFloors) {
      this._numFloors = newNumFloors;
    }
  
    get totalArea() {
      return this._totalArea;
    }
  
    set totalArea(newTotalArea) {
      this._totalArea = newTotalArea;
    }
  
  }