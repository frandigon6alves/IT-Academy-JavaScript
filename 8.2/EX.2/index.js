import {Hotel} from './hotel.js'

const createHotelButton = document.getElementById('createHotel');
const arrayHotel = [];

createHotelButton.addEventListener('click', (e) => {
  const name = document.getElementById('name').value;
  const numRooms = Number(document.getElementById('numRooms').value);
  const numFloors = Number(document.getElementById('numFloors').value);
  const totalArea = Number(document.getElementById('totalArea').value);
    
  const newHotel = new Hotel(name, numRooms, numFloors, totalArea);
  
  arrayHotel.push(newHotel);
  console.log(arrayHotel);
});
