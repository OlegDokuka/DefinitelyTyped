import * as React from 'react';
import DatePicker, { registerLocale, setDefaultLocale, getDefaultLocale } from 'react-datepicker';
import enUS from 'date-fns/locale/en-US';

registerLocale('en-GB', { options: { weekStartsOn: 1 } });
setDefaultLocale('en-GB');
const defaultLocale = getDefaultLocale();

<DatePicker
    adjustDateOnChange
    allowSameDay
    autoComplete=""
    autoFocus
    calendarClassName=""
    calendarContainer={props => <div />}
    className=""
    clearButtonTitle=""
    customInput={<input />}
    customInputRef=""
    dateFormat=""
    dateFormatCalendar=""
    dayClassName={date => ''}
    disabled
    disabledKeyboardNavigation
    dropdownMode="scroll"
    endDate={new Date()}
    excludeDates={[new Date()]}
    excludeTimes={[new Date()]}
    filterDate={date => true}
    fixedHeight
    forceShowMonthNavigation
    formatWeekDay={formattedDate => formattedDate[0]}
    formatWeekNumber={date => 0}
    highlightDates={[{ someClassName: [new Date()] }]}
    id=""
    includeDates={[new Date()]}
    includeTimes={[new Date()]}
    injectTimes={[new Date()]}
    inline
    isClearable
    locale=""
    maxDate={new Date()}
    maxTime={new Date()}
    minDate={new Date()}
    minTime={new Date()}
    monthsShown={1}
    name=""
    nextMonthButtonLabel=""
    nextYearButtonLabel=""
    onBlur={event => null}
    onChange={(date: Date | null) => {}}
    onChangeRaw={event => null}
    onClickOutside={event => null}
    onFocus={event => null}
    onInputClick={() => null}
    onInputError={err => err.code + err.msg}
    onKeyDown={event => null}
    onMonthChange={date => null}
    onSelect={(date, event) => null}
    onWeekSelect={(firstDayOfWeek, weekNumber, event) => null}
    onYearChange={(date: Date) => {}}
    open
    openToDate={new Date()}
    peekNextMonth
    placeholderText=""
    popperClassName=""
    popperContainer={props => <div />}
    popperModifiers={{
        flip: {
            enabled: false,
        },
    }}
    popperPlacement=""
    popperProps={{}}
    preventOpenOnFocus
    previousMonthButtonLabel=""
    previousYearButtonLabel=""
    readOnly
    ref={handleRef}
    renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
    }) => <div />}
    renderDayContents={(dayOfMonth, date) => <div />}
    required
    scrollableMonthYearDropdown
    scrollableYearDropdown
    selected={new Date()}
    selectsEnd
    selectsStart
    shouldCloseOnSelect
    showDisabledMonthNavigation
    showMonthDropdown
    showMonthYearDropdown
    showMonthYearPicker
    showPopperArrow
    showTimeSelect
    showTimeSelectOnly
    showWeekNumbers
    showYearDropdown
    startDate={new Date()}
    startOpen
    tabIndex={1}
    timeCaption=""
    timeFormat=""
    timeIntervals={1}
    title=""
    todayButton={<div />}
    useShortMonthInDropdown
    useWeekdaysShort
    value=""
    weekLabel=""
    withPortal
    wrapperClassName=""
    yearDropdownItemNumber={1}
    timeInputLabel=""
    inlineFocusSelectedMonth={false}
    onDayMouseEnter={(date: Date) => {}}
    onMonthMouseLeave={() => {}}
>
    <div />
    <span />
</DatePicker>;

<DatePicker minDate={null} maxDate={null} startDate={null} endDate={null} locale={enUS} onChange={() => null} />;

function handleRef(ref: DatePicker | null) {
    if (ref) {
        ref.setBlur();
        ref.setFocus();
        if (ref.isCalendarOpen()) {
            ref.setOpen(false);
        }
    }
}
