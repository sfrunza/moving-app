import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Divider
} from '@material-ui/core';
import deepPurple from '@material-ui/core/colors/deepPurple';

class MovingResult extends Component {
  constructor(props) {
    super(props);
        this.state = {
          origin: this.props.origin,
          destination: this.props.destination,
          submittedOrigin: '',
          submittedDestination: ''
        }

        this.handleResult = this.handleResult.bind(this)
        this.returnFunction = this.returnFunction.bind(this)

  }


    handleResult(moveFrom, moveTo, sizeMove){
      let arr4 = [];
          arr4['elevator building'] = [];
          arr4['1st/Ground floor'] = [];
          arr4['2nd floor'] = [];
          arr4['3rd floor'] = [];
          arr4['4th floor'] = [];
          arr4['private house'] = [];
          arr4['storage unit'] = [];

          arr4['elevator building']['elevator building'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['elevator building']['1st/Ground floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['elevator building']['2nd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['elevator building']['3rd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['elevator building']['4th floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['elevator building']['private house'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['elevator building']['storage unit'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]

          arr4['1st/Ground floor']['elevator building'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['1st/Ground floor']['1st/Ground floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['1st/Ground floor']['2nd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['1st/Ground floor']['3rd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['1st/Ground floor']['4th floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['1st/Ground floor']['private house'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['1st/Ground floor']['storage unit'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]

          arr4['2nd floor']['elevator building'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['2nd floor']['1st/Ground floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['2nd floor']['2nd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['2nd floor']['3rd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['2nd floor']['4th floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['2nd floor']['private house'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['2nd floor']['storage unit'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]

          arr4['3rd floor']['elevator building'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['3rd floor']['1st/Ground floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['3rd floor']['2nd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['3rd floor']['3rd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['3rd floor']['4th floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['3rd floor']['private house'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['3rd floor']['storage unit'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]

          arr4['4th floor']['elevator building'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['4th floor']['1st/Ground floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['4th floor']['2nd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['4th floor']['3rd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['4th floor']['4th floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['4th floor']['private house'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['4th floor']['storage unit'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]

          arr4['private house']['elevator building'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['private house']['1st/Ground floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['private house']['2nd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['private house']['3rd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['private house']['4th floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['private house']['private house'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['private house']['storage unit'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]

          arr4['storage unit']['elevator building'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['storage unit']['1st/Ground floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['storage unit']['2nd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['storage unit']['3rd floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['storage unit']['4th floor'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['storage unit']['private house'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]
          arr4['storage unit']['storage unit'] = [('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')]


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
         arr4['3rd floor']['1st/Ground floor']['1 Bedroom apartment'] = this.returnFunction('3', 120, '3 - 5')
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
         arr4['4th floor']['2nd floor']['2 Bedroom apartment'] = this.returnFunction('4', 160, '5 - 7')
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
        <Table>
          {arr4[moveFrom][moveTo][sizeMove]}
        </Table>
      )
  }

  returnFunction(movers, rate, time){
    return(

      <TableBody>
        <TableRow>
          <TableCell>Moving Date: </TableCell>
          <TableCell style={{fontWeight: 'bold'}}>
            {this.props.job.job.pick_up_date}
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Moving From: </TableCell>
          <TableCell>
            <Box>{this.props.job.origin.address}</Box>
            <Box component="div" display="inline" style={{fontWeight: 'bold'}}>*{this.props.job.origin.house_type}</Box>
            <Box component="div" display="inline" ml={2}>Apt#{(this.props.job.origin.apt_number === "") ? ' unknown' : " "+this.props.job.origin.apt_number}</Box>
          </TableCell>
        </TableRow>
        <TableRow >
          <TableCell>Moving To:</TableCell>
          <TableCell>
            <Box>{this.props.job.destination.address}</Box>
            <Box component="div" display="inline" style={{fontWeight: 'bold'}}>*{this.props.job.destination.house_type}</Box>
            <Box component="div" display="inline" ml={2}>Apt#{(this.props.job.destination.apt_number === "") ? ' unknown' : " "+this.props.job.destination.apt_number}</Box>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{padding: '0px'}}><Divider /></TableCell>
          <TableCell style={{padding: '0px'}}><Divider /></TableCell>
        </TableRow>

        <TableRow >
          <TableCell>Moving Type:</TableCell>
          <TableCell>
            {this.props.job.job.move_type}
          </TableCell>
        </TableRow>
        <TableRow >
          <TableCell>Moving Size:</TableCell>
          <TableCell style={{fontWeight: 600}}>
            {this.props.job.job.move_size}
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{padding: '0px'}}><Divider /></TableCell>
          <TableCell style={{padding: '0px'}}><Divider /></TableCell>
        </TableRow>

        <TableRow>
          <TableCell >Crew:</TableCell>
          <TableCell style={{fontWeight: 600}}>
            {movers} Movers
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell >Rate:</TableCell>
          <TableCell style={{color: deepPurple['A200'], fontSize: '18px', fontWeight: 'bold'}}>
            <label >$ {rate}</label> / hr <label style={{color: 'grey', fontSize: '12px', fontStyle: 'italic', fontWeight: 'normal'}}> - billed in 15 minutes increment</label>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell >Estimated Time:</TableCell>
          <TableCell style={{color: '#FD7013', fontSize: '18px', fontWeight: 'bold'}}>
            <label>{time}</label> hours*
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell >Travel Time:</TableCell>
          <TableCell>
            <label>{this.props.travelTime} (from/to HQ)</label>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell >Estimated Quote:</TableCell>
          <TableCell style={{fontWeight: 600, fontSize: '18px'}}>
            <label>${time[0]*rate}</label> - <label>${time.slice(4)*rate}</label>
          </TableCell>
        </TableRow>
      </TableBody>
    )
  }

  render() {
    return (
      <div className="render-div" style={{padding: '0em 1em'}}>
          {this.handleResult(this.props.typeFrom, this.props.typeTo, this.props.movingSize)}
      </div>
    )
  }
}

export default MovingResult
