'use strict';

const months = ['January','February','March','April','May','May','June','july','August','September','October','November','December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElvevation = document.querySelector('.form__input--elevation');

let map, mapEvent; 

class App{
    #map;
    #mapEvent;

    constructor(){
        this._getPosition();
    }

    _getPosition(){
        if (navigator.geolocation) 
         navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
             alert('Could not get your loction.')
            });
        }
            
    _loadMap(position){
            const {latitude} =  position.coords;
            const {longitude} =  position.coords;
            console.log(`https://www.google.com/maps/place/${latitude},${longitude} `);
    
            const coords = [latitude, longitude]
    
            this.#map = L.map('map').setView(coords, 13);
    
            L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);
                
                //handeling clicks on map
                this.#map.on('click',function (mapE) {
                   mapEvent = mapE;
                    form.classList.remove('hidden');
                    inputDistance.focus();
                });
            }
             
        

       
    
        
        _showForm(){}
        
        _toggleElevationField(){}

        _newWorkout(){}
    }

    const app = new App();
    
    


                
        form.addEventListener('submit',function (e) {
            e.preventDefault();

            //clear input fields
            inputDistance.value = inputDuration.value = inputCadence.value = inputElvevation.value = '';
            //display marker on the map
            console.log(mapEvent)
            const{lat, lng} = mapEvent.latlng;
            
            L.marker([lat,lng])
            .addTo(map)
            .bindPopup(
                L.popup({
                maxWidth:250,
                minWidth:100,
                autoClose: false,
                closeOnClick:false,
                className:'running-popup',
                
            })
            )
            .setPopupContent('Workout')
            .openPopup();
        });

        inputType.addEventListener('change',function(){
            inputElvevation.closest('.form__row').classList.toggle('form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
        })
        
        
        