import React from 'react';
import DatePicker from '../../../DatePicker';

const DatePickerReadOnlyDate = () => (
  <DatePicker
    name="date-input"
    selectedDate="2017-04-01"
    inputAttributes={{ readOnly: true }}
  />
);

export default DatePickerReadOnlyDate;
