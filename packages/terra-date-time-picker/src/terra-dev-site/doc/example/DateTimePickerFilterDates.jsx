import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-unresolved, import/extensions
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';

const propTypes = {
  /**
   * The current entered date time. Use for the selected date message.
   */
  value: PropTypes.node,
};

const defaultProps = {
  value: '',
};

class DateTimePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dateTime: this.props.value };
    this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
  }

  handleDateTimeChange(event, dateTime) {
    this.setState({ dateTime });
  }

  render() {
    return (
      <div>
        <p>
Selected ISO Date Time:
          {this.state.dateTime}
        </p>
        <Field label="Enter Date/Time" htmlFor="filter-dates">
          <DateTimePicker
            name="date-time-picker-example"
            dateInputAttributes={{ id: 'filter-dates' }}
            onChange={this.handleDateTimeChange}
            {...this.props}
          />
        </Field>
      </div>
    );
  }
}

DateTimePickerExample.propTypes = propTypes;
DateTimePickerExample.defualtProps = defaultProps;

const isWeekday = (date) => {
  const momentDate = moment(date);

  if (momentDate && momentDate.isValid()) {
    const day = momentDate.day();
    return day !== 0 && day !== 6;
  }

  return true;
};

const DateTimePickerExampleFilterDates = () => (
  <DateTimePickerExample filterDate={isWeekday} />
);

export default DateTimePickerExampleFilterDates;
