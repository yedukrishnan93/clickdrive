import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:""}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="Date Of Birth"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: null,
          dateInput: {
            marginLeft: 8
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}