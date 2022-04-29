import { useRef, useState } from 'react';
import clsx from 'clsx';
import { format, isValid } from 'date-fns';
import { DayPicker } from 'react-day-picker';

import { CALENDAR } from 'assets/svgs';
import Input from 'components/Input';
import { useOnClickOutside } from 'hooks';

import 'react-day-picker/dist/style.css';
import './styles.scss';

interface DatePickerProps {
  value?: Date | string;
  onChange?: (v: Date) => void;
}

export default function DatePicker({ value }: DatePickerProps) {
  const [selected, setSelected] = useState<Date | undefined>(() => {
    if (typeof value === 'string' && isValid(new Date(value)))
      return new Date(value);
    return value as Date | undefined;
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(pickerRef, () => {
    isOpen && setIsOpen(false);
  });

  const handleDaySelect = (date: Date | undefined) => {
    setSelected(date);
    if (date) {
      if (inputRef.current) inputRef.current.value = format(date, 'dd/MM/yyyy');
      setIsOpen(false);
    } else {
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div className="relative date-picker">
      <Input
        inputProps={{
          readOnly: true,
          placeholder: 'DD/MM/YYYY',
        }}
        iconOnClick={() => {
          setIsOpen((prev) => !prev);
        }}
        icon={<img src={CALENDAR} alt="icon" />}
        ref={inputRef}
      />
      <div
        ref={pickerRef}
        className={clsx(
          'absolute date-picker__picker',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <DayPicker
          initialFocus={isOpen}
          mode="single"
          defaultMonth={selected}
          selected={selected}
          onSelect={handleDaySelect}
        />
      </div>
    </div>
  );
}
