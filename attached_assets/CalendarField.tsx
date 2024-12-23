import { formatDateToLocale } from '@/utils/date_formatter';
import { enUS } from 'date-fns/locale';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IComponent } from '../IComponent';
import { calenderIcon } from './Icons';

export interface CalendarFieldProps extends IComponent {
  type?: 'date';
  label: string;
  errors?: string[] | null;
  valueCallback?: (value: string) => void;
  onKeydownCallback?: (key: string) => void;
  maxWidth?: number;
  isSuffixNeeded?: boolean;
  highlightError?: boolean;
  onFocusCallback?: () => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
}
export const CalendarField = ({
  label,
  errors = [],
  onFocusCallback,
  isSuffixNeeded = false,
  type = 'date',
  className = '',
  minDate,
  maxDate,
  valueCallback,
  disabled,
}: CalendarFieldProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const datePickerRef = useRef<DatePicker>(null);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const focusCalender = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const CalenderIndicator = () => {
    return (
      <div className="flex flex-row items-center relative inline-block">
        <div className="separator"></div>
        <div>
          <Image src={calenderIcon} className="icon" alt="calenderIcon" />
        </div>
      </div>
    );
  };

  const SuffixIcon = ({ type }: { type: 'date'; errors?: string[] | null }) => {
    if (type === 'date') {
      return <CalenderIndicator />;
    }
    return null;
  };

  const customLocale = {
    ...enUS,
    localize: {
      ...enUS.localize,
      day: (n: number) => ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][n],
    },
  };
  registerLocale('customLocale', customLocale);

  // Function to format the input as MM/DD/YYYY
  const formatInputValue = (value: string) => {
    value = value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length > 8) value = value.slice(0, 8); // Limit to 8 digits

    // Add slashes for MM/DD/YYYY
    if (value.length >= 5) {
      return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
    } else if (value.length >= 3) {
      return `${value.slice(0, 2)}/${value.slice(2)}`;
    } else if (value.length >= 1) {
      return `${value.slice(0, 2)}`;
    }
    return value;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const formattedValue = formatInputValue(e.target.value);
      setInputValue(formattedValue);

      if (formattedValue.length == 0) {
        setError('');
      }

      // Set date when the input is fully filled
      if (formattedValue.length === 10) {
        const [month, day, year] = formattedValue.split('/');
        const newDate = new Date(`${year}-${month}-${day}`);
        if (!newDate.getMonth()) {
          throw 'Invalid Date';
        }
        // Checks whether date is in given ranges
        if (minDate) {
          if (newDate < minDate) {
            setError('Date is out of allowed range');
            return;
          }
        }

        if (maxDate) {
          if (newDate > maxDate) {
            setError('Date is out of allowed range');
            return;
          }
        }

        if (newDate.getFullYear() < 1900) {
          setError('Year must be greater than 1900');
        } else {
          console.log('Date Log', formattedValue);
          setSelectedDate(newDate);
          valueCallback?.call(this, formattedValue);
          setError(''); // Clear error
        }
      }
    } catch (err) {
      setError('Invalid Date!');
    }
  };

  // Sync inputValue with selectedDate
  useEffect(() => {
    if (selectedDate) {
      setInputValue(formatDateToLocale(selectedDate));
    }
  }, [selectedDate]);

  return (
    <div
      ref={inputRef}
      className={`flex flex-col relative inline-block w-full text-field ${error ? 'border-red-500' : ''}`}
    >
      <p className="mb-1">{label}</p>

      <div
        className={`flex flex-row items-center input relative w-full left-0 top-full ${className} ${
          focus ? 'input-focus' : ''
        } ${error ? 'border !border-red-500' : ''}`}
      >
        <input
          aria-label={label}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={`mt-2 ${error ? 'border-red-500' : ''}`}
          placeholder="__  / __  /  ____"
          maxLength={10} // Max length for MM/DD/YYYY
          onFocus={() => {
            setFocus(true);
            onFocusCallback?.();
          }}
          onBlur={() => setFocus(false)}
          disabled={disabled}
        />
        <div className="cursor-pointer" onMouseDown={focusCalender}>
          {isSuffixNeeded && <SuffixIcon errors={errors} type={type} />}
        </div>
      </div>

      {error && <div className="text-red-500 mt-1">{error}</div>}

      <div className="w-full">
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => {
            if (date) {
              valueCallback?.call(this, formatDateToLocale(date));
            }
            setSelectedDate(date);
            setInputValue(date ? formatDateToLocale(date) : ''); // Sync input with date picker
            setError('');
          }}
          locale="customLocale"
          ref={datePickerRef}
          calendarClassName="custom-calender-width"
          className="hidden"
          minDate={minDate}
          maxDate={maxDate}
          popperClassName="react-datepicker-custom-popper"
          disabled={disabled}
        />
      </div>
    </div>
  );
};
