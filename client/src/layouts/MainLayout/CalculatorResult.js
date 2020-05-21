import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";

class CalculatorResult extends Component {
  constructor(props) {
    super(props);
        this.state = {
          origin: this.props.origin,
          destination: this.props.destination,
          submittedOrigin: '',
          submittedDestination: '',
          apiKey: "AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ"
        }
        this.renderMap = this.renderMap.bind(this)
        this.findDsitance = this.findDsitance.bind(this)
        this.handleResult = this.handleResult.bind(this)
        this.findTravelTime = this.findTravelTime.bind(this)
        this.getAddress = this.getAddress.bind(this)
        this.returnFunction = this.returnFunction.bind(this)
        this.reloadPage = this.reloadPage.bind(this)


  }
  reloadPage(e){
    e.preventDefault();
	   location.reload();
  }


  getAddress(zipcode, id){
    let geocoder = new google.maps.Geocoder()
    geocoder.geocode( { 'address': zipcode}, function(results, status) {
      let outputCytiOrigin = document.getElementById(id);
      let city_name = results[0].formatted_address
      return outputCytiOrigin.innerHTML = `${city_name}`
    });

  }

  findTravelTime(){
    let officeHome = "Boston, MA";
    let service = new google.maps.DistanceMatrixService;
    service.getDistanceMatrix({
      origins: [officeHome],
      destinations: [this.state.origin, this.state.destination],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    }, function(response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        let outputTime = document.getElementById('travelTime');
        let timeTo = ''
        let timeFrom = ''
          let results = response.rows[0].elements;
            if(response.rows[0].elements[0].status !== "ZERO_RESULTS" && response.rows[0].elements[1].status !== "ZERO_RESULTS"){
              if(results[0].distance.value < 38000){
                timeTo = '20 mins'
              }
                else {
                timeTo = results[0].duration.text
              }
              if(results[1].distance.value < 38000 ){
               timeFrom = '20 mins'
             }
                else {
               timeFrom = results[1].duration.text
             }

              return outputTime.innerHTML =`${timeTo} / ${timeFrom}`
              }
      }
    });

  }

   findDsitance() {
      let bounds = new google.maps.LatLngBounds;
      let geocoder = new google.maps.Geocoder;
      let service = new google.maps.DistanceMatrixService;
      service.getDistanceMatrix({
        origins: [this.state.origin],
        destinations: [this.state.destination],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
      }, function(response, status) {
        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {
          let outputDiv = document.getElementById('output');
            let results = response.rows[0].elements;
              if(response.rows[0].elements[0].status !== "ZERO_RESULTS"){
                  outputDiv.innerHTML =` distance: ${results[0].distance.text}les`
                }
        }
      });
    }
    renderMap(){
        let origin = this.state.origin
        let destination = this.state.destination
        const MapWithADirectionsRenderer = compose(
          withProps({
            googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}&v=3.exp&libraries=geometry,drawing,places`,
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `300px`, width: `50%`, marginLeft: `25%` }} />,
            mapElement: <div style={{ height: `100%` }} />,
          }),
          withScriptjs,
          withGoogleMap,
          lifecycle({
            componentDidMount() {
              const DirectionsService = new google.maps.DirectionsService();
              let origin_point = origin
              let destination_poin = destination
              DirectionsService.route({
                origin: origin_point,
                destination: destination_poin,
                travelMode: google.maps.TravelMode.DRIVING,
              }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                  this.setState({
                    directions: result,
                  });
                }
              });
            }
          })
        )(props =>
          <GoogleMap
            defaultZoom={7}
            defaultCenter={new google.maps.LatLng(42.5659907, -72.2317007)}
          >
            {props.directions && <DirectionsRenderer directions={props.directions} />}
          </GoogleMap>
        );
        return(
          <MapWithADirectionsRenderer />
        )
    }

    handleResult(moveFrom, moveTo, sizeMove){
      let sizeArray = this.props.arraySize
      let typeArray = this.props.arrayType

      let arr = [];
      sizeArray.map(item => {
            if(item.value.length !=0 || item.value != ''){
              arr.push(item.value)
            }

      })
      let arr2 = []
      typeArray.map(item => {
        if(item.value.length !=0 || item.value != ''){
          arr2.push(item.value)
        }
      })

      let arr4 = new Array();
          arr4['elevator building'] = new Array()
          arr4['1st/Ground floor'] = new Array()
          arr4['2nd floor'] = new Array()
          arr4['3rd floor'] = new Array()
          arr4['4th floor'] = new Array()
          arr4['private house'] = new Array()
          arr4['storage unit'] = new Array()

          arr4['elevator building']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['elevator building']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['elevator building']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['elevator building']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['elevator building']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['elevator building']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['elevator building']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

          arr4['1st/Ground floor']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['1st/Ground floor']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['1st/Ground floor']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['1st/Ground floor']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['1st/Ground floor']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['1st/Ground floor']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['1st/Ground floor']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

          arr4['2nd floor']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['2nd floor']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['2nd floor']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['2nd floor']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['2nd floor']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['2nd floor']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['2nd floor']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

          arr4['3rd floor']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['3rd floor']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['3rd floor']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['3rd floor']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['3rd floor']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['3rd floor']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['3rd floor']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

          arr4['4th floor']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['4th floor']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['4th floor']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['4th floor']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['4th floor']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['4th floor']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['4th floor']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

          arr4['private house']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['private house']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['private house']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['private house']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['private house']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['private house']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['private house']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

          arr4['storage unit']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['storage unit']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['storage unit']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['storage unit']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['storage unit']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['storage unit']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
          arr4['storage unit']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')


         arr4['elevator building']['elevator building']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['elevator building']['1st/Ground floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['elevator building']['2nd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['elevator building']['3rd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['elevator building']['4th floor']['Room or less (partial move)'] = this.returnFunction('3', 120, '3 - 5')
         arr4['elevator building']['private house']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['elevator building']['storage unit']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')

         arr4['elevator building']['elevator building']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['elevator building']['1st/Ground floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['elevator building']['2nd floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['elevator building']['3rd floor']['Studio apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['elevator building']['4th floor']['Studio apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['elevator building']['private house']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['elevator building']['storage unit']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')

         arr4['elevator building']['elevator building']['1 Bedroom apartment'] = this.returnFunction('2', 80, '4 - 6')
         arr4['elevator building']['1st/Ground floor']['1 Bedroom apartment'] = this.returnFunction('2', 80, '4 - 6')
         arr4['elevator building']['2nd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['elevator building']['3rd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['elevator building']['4th floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '6 - 8')
         arr4['elevator building']['private house']['1 Bedroom apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['elevator building']['storage unit']['1 Bedroom apartment'] = this.returnFunction('3', 80, '3 - 5')

         arr4['elevator building']['elevator building']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['elevator building']['1st/Ground floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['elevator building']['2nd floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['elevator building']['3rd floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '5 - 7')
         arr4['elevator building']['4th floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['elevator building']['private house']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['elevator building']['storage unit']['2 Bedroom apartment'] = this.returnFunction('3', 80, '4 - 6')

         arr4['elevator building']['elevator building']['3+ Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['elevator building']['1st/Ground floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['elevator building']['2nd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['elevator building']['3rd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '7 - 9')
         arr4['elevator building']['4th floor']['3+ Bedroom apartment'] = this.returnFunction('5', 200, '7 - 9')
         arr4['elevator building']['private house']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['elevator building']['storage unit']['3+ Bedroom apartment'] = this.returnFunction('4', 80, '5 - 7')

         arr4['elevator building']['elevator building']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['elevator building']['1st/Ground floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '4 - 6')
         arr4['elevator building']['2nd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['elevator building']['3rd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['elevator building']['4th floor']['2 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['elevator building']['private house']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['elevator building']['storage unit']['2 Bedroom House/Townhouse'] = this.returnFunction('3', 120, '5 - 7')

         arr4['elevator building']['elevator building']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '8 - 10')
         arr4['elevator building']['1st/Ground floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['elevator building']['2nd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['elevator building']['3rd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['elevator building']['4th floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['elevator building']['private house']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['elevator building']['storage unit']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')

         arr4['elevator building']['elevator building']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['elevator building']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['elevator building']['2nd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['elevator building']['3rd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '9 - 11')
         arr4['elevator building']['4th floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '10 - 12')
         arr4['elevator building']['private house']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['elevator building']['storage unit']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')

         arr4['elevator building']['elevator building']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['elevator building']['1st/Ground floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['elevator building']['2nd floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['elevator building']['3rd floor']['Office / Commercial space'] = this.returnFunction('4', 160, '4 - 6')
         arr4['elevator building']['4th floor']['Office / Commercial space'] = this.returnFunction('4', 160, '5 - 7')
         arr4['elevator building']['private house']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['elevator building']['storage unit']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')



         arr4['1st/Ground floor']['elevator building']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['1st/Ground floor']['1st/Ground floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['1st/Ground floor']['2nd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['1st/Ground floor']['3rd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['1st/Ground floor']['4th floor']['Room or less (partial move)'] = this.returnFunction('3', 120, '3 - 5')
         arr4['1st/Ground floor']['private house']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['1st/Ground floor']['storage unit']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')

         arr4['1st/Ground floor']['elevator building']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['1st/Ground floor']['1st/Ground floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['1st/Ground floor']['2nd floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['1st/Ground floor']['3rd floor']['Studio apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['1st/Ground floor']['4th floor']['Studio apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['1st/Ground floor']['private house']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['1st/Ground floor']['storage unit']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')

         arr4['1st/Ground floor']['elevator building']['1 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['1st/Ground floor']['1st/Ground floor']['1 Bedroom apartment'] = this.returnFunction('2', 80, '4 - 6')
         arr4['1st/Ground floor']['2nd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['1st/Ground floor']['3rd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['1st/Ground floor']['4th floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '6 - 8')
         arr4['1st/Ground floor']['private house']['1 Bedroom apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['1st/Ground floor']['storage unit']['1 Bedroom apartment'] = this.returnFunction('2', 80, '3 - 5')

         arr4['1st/Ground floor']['elevator building']['2 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['1st/Ground floor']['1st/Ground floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['1st/Ground floor']['2nd floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['1st/Ground floor']['3rd floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['1st/Ground floor']['4th floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['1st/Ground floor']['private house']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['1st/Ground floor']['storage unit']['2 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')

         arr4['1st/Ground floor']['elevator building']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '8 - 10')
         arr4['1st/Ground floor']['1st/Ground floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['1st/Ground floor']['2nd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['1st/Ground floor']['3rd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '7 - 9')
         arr4['1st/Ground floor']['4th floor']['3+ Bedroom apartment'] = this.returnFunction('5', 200, '7 - 9')
         arr4['1st/Ground floor']['private house']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['1st/Ground floor']['storage unit']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')

         arr4['1st/Ground floor']['elevator building']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['1st/Ground floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '4 - 6')
         arr4['1st/Ground floor']['2nd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['1st/Ground floor']['3rd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['1st/Ground floor']['4th floor']['2 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['1st/Ground floor']['private house']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['1st/Ground floor']['storage unit']['2 Bedroom House/Townhouse'] = this.returnFunction('3', 120, '5 - 7')

         arr4['1st/Ground floor']['elevator building']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '8 - 10')
         arr4['1st/Ground floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['1st/Ground floor']['2nd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['1st/Ground floor']['3rd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['1st/Ground floor']['4th floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['1st/Ground floor']['private house']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['1st/Ground floor']['storage unit']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')

         arr4['1st/Ground floor']['elevator building']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['1st/Ground floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['1st/Ground floor']['2nd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['1st/Ground floor']['3rd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '9 - 11')
         arr4['1st/Ground floor']['4th floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '10 - 12')
         arr4['1st/Ground floor']['private house']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['1st/Ground floor']['storage unit']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')

         arr4['1st/Ground floor']['elevator building']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['1st/Ground floor']['1st/Ground floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['1st/Ground floor']['2nd floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['1st/Ground floor']['3rd floor']['Office / Commercial space'] = this.returnFunction('4', 160, '4 - 6')
         arr4['1st/Ground floor']['4th floor']['Office / Commercial space'] = this.returnFunction('4', 160, '5 - 7')
         arr4['1st/Ground floor']['private house']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['1st/Ground floor']['storage unit']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')



         arr4['2nd floor']['elevator building']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['2nd floor']['1st/Ground floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['2nd floor']['2nd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['2nd floor']['3rd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['2nd floor']['4th floor']['Room or less (partial move)'] = this.returnFunction('3', 120, '3 - 5')
         arr4['2nd floor']['private house']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['2nd floor']['storage unit']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')

         arr4['2nd floor']['elevator building']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['2nd floor']['1st/Ground floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['2nd floor']['2nd floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['2nd floor']['3rd floor']['Studio apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['2nd floor']['4th floor']['Studio apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['2nd floor']['private house']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['2nd floor']['storage unit']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')

         arr4['2nd floor']['elevator building']['1 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['2nd floor']['1st/Ground floor']['1 Bedroom apartment'] = this.returnFunction('2', 80, '4 - 6')
         arr4['2nd floor']['2nd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['2nd floor']['3rd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['2nd floor']['4th floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '6 - 8')
         arr4['2nd floor']['private house']['1 Bedroom apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['2nd floor']['storage unit']['1 Bedroom apartment'] = this.returnFunction('3', 120, '3 - 5')

         arr4['2nd floor']['elevator building']['2 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['2nd floor']['1st/Ground floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['2nd floor']['2nd floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['2nd floor']['3rd floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '5 - 7')
         arr4['2nd floor']['4th floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['2nd floor']['private house']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['2nd floor']['storage unit']['2 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')

         arr4['2nd floor']['elevator building']['3+ Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['2nd floor']['1st/Ground floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['2nd floor']['2nd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['2nd floor']['3rd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '7 - 9')
         arr4['2nd floor']['4th floor']['3+ Bedroom apartment'] = this.returnFunction('5', 200, '7 - 9')
         arr4['2nd floor']['private house']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['2nd floor']['storage unit']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '5 - 7')

         arr4['2nd floor']['elevator building']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['2nd floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '4 - 6')
         arr4['2nd floor']['2nd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['2nd floor']['3rd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['2nd floor']['4th floor']['2 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['2nd floor']['private house']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['2nd floor']['storage unit']['2 Bedroom House/Townhouse'] = this.returnFunction('3', 120, '5 - 7')

         arr4['2nd floor']['elevator building']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '8 - 10')
         arr4['2nd floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['2nd floor']['2nd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['2nd floor']['3rd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['2nd floor']['4th floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['2nd floor']['private house']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['2nd floor']['storage unit']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')

         arr4['2nd floor']['elevator building']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['2nd floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['2nd floor']['2nd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['2nd floor']['3rd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '9 - 11')
         arr4['2nd floor']['4th floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '10 - 12')
         arr4['2nd floor']['private house']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['2nd floor']['storage unit']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')

         arr4['2nd floor']['elevator building']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['2nd floor']['1st/Ground floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['2nd floor']['2nd floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['2nd floor']['3rd floor']['Office / Commercial space'] = this.returnFunction('4', 160, '4 - 6')
         arr4['2nd floor']['4th floor']['Office / Commercial space'] = this.returnFunction('4', 160, '5 - 7')
         arr4['2nd floor']['private house']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['2nd floor']['storage unit']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')



         arr4['3rd floor']['elevator building']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['3rd floor']['1st/Ground floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['3rd floor']['2nd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['3rd floor']['3rd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['3rd floor']['4th floor']['Room or less (partial move)'] = this.returnFunction('3', 120, '3 - 5')
         arr4['3rd floor']['private house']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['3rd floor']['storage unit']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')

         arr4['3rd floor']['elevator building']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['3rd floor']['1st/Ground floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['3rd floor']['2nd floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['3rd floor']['3rd floor']['Studio apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['3rd floor']['4th floor']['Studio apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['3rd floor']['private house']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['3rd floor']['storage unit']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')

         arr4['3rd floor']['elevator building']['1 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['3rd floor']['1st/Ground floor']['1 Bedroom apartment'] = this.returnFunction('2', 80, '4 - 6')
         arr4['3rd floor']['2nd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['3rd floor']['3rd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['3rd floor']['4th floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '6 - 8')
         arr4['3rd floor']['private house']['1 Bedroom apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['3rd floor']['storage unit']['1 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')

         arr4['3rd floor']['elevator building']['2 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['3rd floor']['1st/Ground floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['3rd floor']['2nd floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['3rd floor']['3rd floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '5 - 7')
         arr4['3rd floor']['4th floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['3rd floor']['private house']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['3rd floor']['storage unit']['2 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')

         arr4['3rd floor']['elevator building']['3+ Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['3rd floor']['1st/Ground floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['3rd floor']['2nd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['3rd floor']['3rd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '7 - 9')
         arr4['3rd floor']['4th floor']['3+ Bedroom apartment'] = this.returnFunction('5', 200, '7 - 9')
         arr4['3rd floor']['private house']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['3rd floor']['storage unit']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '5 - 7')

         arr4['3rd floor']['elevator building']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['3rd floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '4 - 6')
         arr4['3rd floor']['2nd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['3rd floor']['3rd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['3rd floor']['4th floor']['2 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['3rd floor']['private house']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['3rd floor']['storage unit']['2 Bedroom House/Townhouse'] = this.returnFunction('3', 120, '5 - 7')

         arr4['3rd floor']['elevator building']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '8 - 10')
         arr4['3rd floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['3rd floor']['2nd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['3rd floor']['3rd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['3rd floor']['4th floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['3rd floor']['private house']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['3rd floor']['storage unit']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')

         arr4['3rd floor']['elevator building']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['3rd floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['3rd floor']['2nd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['3rd floor']['3rd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '9 - 11')
         arr4['3rd floor']['4th floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '10 - 12')
         arr4['3rd floor']['private house']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['3rd floor']['storage unit']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')

         arr4['3rd floor']['elevator building']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['3rd floor']['1st/Ground floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['3rd floor']['2nd floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['3rd floor']['3rd floor']['Office / Commercial space'] = this.returnFunction('4', 160, '4 - 6')
         arr4['3rd floor']['4th floor']['Office / Commercial space'] = this.returnFunction('4', 160, '5 - 7')
         arr4['3rd floor']['private house']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['3rd floor']['storage unit']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')



         arr4['4th floor']['elevator building']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['4th floor']['1st/Ground floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['4th floor']['2nd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['4th floor']['3rd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['4th floor']['4th floor']['Room or less (partial move)'] = this.returnFunction('3', 120, '3 - 5')
         arr4['4th floor']['private house']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['4th floor']['storage unit']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')

         arr4['4th floor']['elevator building']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['4th floor']['1st/Ground floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['4th floor']['2nd floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['4th floor']['3rd floor']['Studio apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['4th floor']['4th floor']['Studio apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['4th floor']['private house']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['4th floor']['storage unit']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')

         arr4['4th floor']['elevator building']['1 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['4th floor']['1st/Ground floor']['1 Bedroom apartment'] = this.returnFunction('2', 80, '4 - 6')
         arr4['4th floor']['2nd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['4th floor']['3rd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['4th floor']['4th floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '6 - 8')
         arr4['4th floor']['private house']['1 Bedroom apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['4th floor']['storage unit']['1 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')

         arr4['4th floor']['elevator building']['2 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['4th floor']['1st/Ground floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['4th floor']['2nd floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['4th floor']['3rd floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '5 - 7')
         arr4['4th floor']['4th floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['4th floor']['private house']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['4th floor']['storage unit']['2 Bedroom apartment'] = this.returnFunction('4', 160, '4 - 6')

         arr4['4th floor']['elevator building']['3+ Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['4th floor']['1st/Ground floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['4th floor']['2nd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['4th floor']['3rd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '7 - 9')
         arr4['4th floor']['4th floor']['3+ Bedroom apartment'] = this.returnFunction('5', 200, '7 - 9')
         arr4['4th floor']['private house']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['4th floor']['storage unit']['3+ Bedroom apartment'] = this.returnFunction('5', 200, '7 - 9')

         arr4['4th floor']['elevator building']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['4th floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '4 - 6')
         arr4['4th floor']['2nd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['4th floor']['3rd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['4th floor']['4th floor']['2 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['4th floor']['private house']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['4th floor']['storage unit']['2 Bedroom House/Townhouse'] = this.returnFunction('3', 120, '5 - 7')

         arr4['4th floor']['elevator building']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '8 - 10')
         arr4['4th floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['4th floor']['2nd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['4th floor']['3rd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['4th floor']['4th floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['4th floor']['private house']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['4th floor']['storage unit']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')

         arr4['4th floor']['elevator building']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['4th floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['4th floor']['2nd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['4th floor']['3rd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '9 - 11')
         arr4['4th floor']['4th floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '10 - 12')
         arr4['4th floor']['private house']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['4th floor']['storage unit']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')

         arr4['4th floor']['elevator building']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['4th floor']['1st/Ground floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['4th floor']['2nd floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['4th floor']['3rd floor']['Office / Commercial space'] = this.returnFunction('4', 160, '4 - 6')
         arr4['4th floor']['4th floor']['Office / Commercial space'] = this.returnFunction('4', 160, '5 - 7')
         arr4['4th floor']['private house']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['4th floor']['storage unit']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')



         arr4['private house']['elevator building']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['private house']['1st/Ground floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['private house']['2nd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['private house']['3rd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['private house']['4th floor']['Room or less (partial move)'] = this.returnFunction('3', 120, '3 - 5')
         arr4['private house']['private house']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['private house']['storage unit']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')

         arr4['private house']['elevator building']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['private house']['1st/Ground floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['private house']['2nd floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['private house']['3rd floor']['Studio apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['private house']['4th floor']['Studio apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['private house']['private house']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['private house']['storage unit']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')

         arr4['private house']['elevator building']['1 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['private house']['1st/Ground floor']['1 Bedroom apartment'] = this.returnFunction('2', 80, '4 - 6')
         arr4['private house']['2nd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['private house']['3rd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['private house']['4th floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '6 - 8')
         arr4['private house']['private house']['1 Bedroom apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['private house']['storage unit']['1 Bedroom apartment'] = this.returnFunction('2', 80, '3 - 5')

         arr4['private house']['elevator building']['2 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['private house']['1st/Ground floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['private house']['2nd floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['private house']['3rd floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '5 - 7')
         arr4['private house']['4th floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['private house']['private house']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['private house']['storage unit']['2 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')

         arr4['private house']['elevator building']['3+ Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['private house']['1st/Ground floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['private house']['2nd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['private house']['3rd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '7 - 9')
         arr4['private house']['4th floor']['3+ Bedroom apartment'] = this.returnFunction('5', 200, '7 - 9')
         arr4['private house']['private house']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['private house']['storage unit']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '5 - 7')

         arr4['private house']['elevator building']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['private house']['1st/Ground floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '4 - 6')
         arr4['private house']['2nd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['private house']['3rd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['private house']['4th floor']['2 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['private house']['private house']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['private house']['storage unit']['2 Bedroom House/Townhouse'] = this.returnFunction('3', 120, '5 - 7')

         arr4['private house']['elevator building']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '8 - 10')
         arr4['private house']['1st/Ground floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['private house']['2nd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['private house']['3rd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['private house']['4th floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['private house']['private house']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['private house']['storage unit']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')

         arr4['private house']['elevator building']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['private house']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['private house']['2nd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['private house']['3rd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '9 - 11')
         arr4['private house']['4th floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '10 - 12')
         arr4['private house']['private house']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['private house']['storage unit']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')

         arr4['private house']['elevator building']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['private house']['1st/Ground floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['private house']['2nd floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['private house']['3rd floor']['Office / Commercial space'] = this.returnFunction('4', 160, '4 - 6')
         arr4['private house']['4th floor']['Office / Commercial space'] = this.returnFunction('4', 160, '5 - 7')
         arr4['private house']['private house']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['private house']['storage unit']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')



         arr4['storage unit']['elevator building']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['storage unit']['1st/Ground floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['storage unit']['2nd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['storage unit']['3rd floor']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['storage unit']['4th floor']['Room or less (partial move)'] = this.returnFunction('3', 120, '3 - 5')
         arr4['storage unit']['private house']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')
         arr4['storage unit']['storage unit']['Room or less (partial move)'] = this.returnFunction('2', 80, '2 - 4')

         arr4['storage unit']['elevator building']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['storage unit']['1st/Ground floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['storage unit']['2nd floor']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['storage unit']['3rd floor']['Studio apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['storage unit']['4th floor']['Studio apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['storage unit']['private house']['Studio apartment'] = this.returnFunction('2', 80, '3 - 5')
         arr4['storage unit']['storage unit']['Studio apartment'] = this.returnFunction('2', 80, '2 - 4')

         arr4['storage unit']['elevator building']['1 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['storage unit']['1st/Ground floor']['1 Bedroom apartment'] = this.returnFunction('2', 80, '4 - 6')
         arr4['storage unit']['2nd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['storage unit']['3rd floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['storage unit']['4th floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '6 - 8')
         arr4['storage unit']['private house']['1 Bedroom apartment'] = this.returnFunction('3', 120, '3 - 5')
         arr4['storage unit']['storage unit']['1 Bedroom apartment'] = this.returnFunction('2', 80, '3 - 5')

         arr4['storage unit']['elevator building']['2 Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['storage unit']['1st/Ground floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['storage unit']['2nd floor']['2 Bedroom apartment'] = this.returnFunction('3', 120, '4 - 6')
         arr4['storage unit']['3rd floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '5 - 7')
         arr4['storage unit']['4th floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['storage unit']['private house']['2 Bedroom apartment'] = this.returnFunction('3', 120, '5 - 7')
         arr4['storage unit']['storage unit']['2 Bedroom apartment'] = this.returnFunction('3', 120, '3 - 5')

         arr4['storage unit']['elevator building']['3+ Bedroom apartment'] = this.returnFunction('2', 80, '2 - 4')
         arr4['storage unit']['1st/Ground floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['storage unit']['2nd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['storage unit']['3rd floor']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '7 - 9')
         arr4['storage unit']['4th floor']['3+ Bedroom apartment'] = this.returnFunction('5', 200, '7 - 9')
         arr4['storage unit']['private house']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '6 - 8')
         arr4['storage unit']['storage unit']['3+ Bedroom apartment'] = this.returnFunction('4', 160, '5 - 7')

         arr4['storage unit']['elevator building']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['storage unit']['1st/Ground floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '4 - 6')
         arr4['storage unit']['2nd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['storage unit']['3rd floor']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['storage unit']['4th floor']['2 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['storage unit']['private house']['2 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '5 - 7')
         arr4['storage unit']['storage unit']['2 Bedroom House/Townhouse'] = this.returnFunction('3', 120, '5 - 7')

         arr4['storage unit']['elevator building']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '8 - 10')
         arr4['storage unit']['1st/Ground floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['storage unit']['2nd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '7 - 9')
         arr4['storage unit']['3rd floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['storage unit']['4th floor']['3 Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['storage unit']['private house']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')
         arr4['storage unit']['storage unit']['3 Bedroom House/Townhouse'] = this.returnFunction('4', 160, '6 - 8')

         arr4['storage unit']['elevator building']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['storage unit']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['storage unit']['2nd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '7 - 9')
         arr4['storage unit']['3rd floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '9 - 11')
         arr4['storage unit']['4th floor']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '10 - 12')
         arr4['storage unit']['private house']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')
         arr4['storage unit']['storage unit']['4+ Bedroom House/Townhouse'] = this.returnFunction('5', 200, '8 - 10')

         arr4['storage unit']['elevator building']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['storage unit']['1st/Ground floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['storage unit']['2nd floor']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['storage unit']['3rd floor']['Office / Commercial space'] = this.returnFunction('4', 160, '4 - 6')
         arr4['storage unit']['4th floor']['Office / Commercial space'] = this.returnFunction('4', 160, '5 - 7')
         arr4['storage unit']['private house']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')
         arr4['storage unit']['storage unit']['Office / Commercial space'] = this.returnFunction('3', 120, '3 - 5')

      return(
        <div className='job-info'>
          {arr4[moveFrom][moveTo][sizeMove]}
          <div className="row justify-content-md-center">
              <div className="col col-lg-2">
                <div>Travel time</div>
              </div>
              <div className="col-md-auto">
              </div>
              <div className="col col-lg-2">
                <div id="travelTime">{this.findTravelTime()}</div>
              </div>
            </div>
        </div>
      )
  }

  returnFunction(movers, rate, time){
    return(

      <div className="rate-result">
      <div className="row justify-content-md-center">
          <div className="col col-lg-2">
            <div><label>{movers}</label> Movers Crew</div>
          </div>
          <div className="col-md-auto">

          </div>
          <div className="col col-lg-2">
            <div><label>$ {rate}</label> / hour </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
            <div className="col col-lg-2">
              <div style={{marginTop: '7px'}}>Estimated job time</div>
            </div>
            <div className="col-md-auto">

            </div>
            <div className="col col-lg-2">
              <div><label>{time}</label> hours</div>
            </div>
          </div>
      </div>
    )
  }

  render() {
    return (

      <div className="form-container">
        <div className="review-form">
          <h5>Moving calculator result.</h5>
            <form className="new-article-form callout">
            <div className='result-row'>
              <div className='result-description'>Moving a {this.props.movingSize} from {this.props.typeFrom} to {this.props.typeTo},<div id="output">{this.props.submitted && this.findDsitance()},</div> should take approximately:</div>
            </div>

            <div className='result-row' style={{display: "inline-flex"}}>
              <div id='city-origin-name'>{this.getAddress(this.state.origin, 'city-origin-name')}</div>
              <div id='result-arrow' style={{padding: "0 10px"}}><i className="fas fa-long-arrow-alt-right"></i></div>
              <div id='city-destination-name'>{this.getAddress(this.state.destination, 'city-destination-name')}</div>
            </div>

            {this.handleResult(this.props.typeFrom, this.props.typeTo, this.props.movingSize)}

            <div className="row justify-content-md-center">
                <div className="col-3">
                  <button type="button" className="btn btn-outline-warning" onClick={this.reloadPage}>Back to Calculator</button>
                </div>
                <div className="col-3">
                  <button type="button" className="btn btn-outline-success">Request Moving Now</button>
                </div>
              </div>
              {/*<div>{this.props.submitted && this.renderMap()}</div> */}

            </form>
          </div>
          <div className="form-sheet"></div>
        </div>

    )
  }
}

export default GoogleApiWrapper({
  apiKey:("AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ")
})(CalculatorResult)
