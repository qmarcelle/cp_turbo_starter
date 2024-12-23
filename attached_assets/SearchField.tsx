import Image from 'next/image';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import SearchIcon from '../../../public/assets/Search.svg';

interface Props {
  onSearch: (searchTerm: string) => void;
  hint: string;
  classValue?: string;
  searchText?: string;
}

const SearchField: React.FC<Props> = ({
  onSearch,
  hint,
  classValue,
  searchText,
}) => {
  const [searchTerm, setSearchTerm] = useState(searchText ?? '');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      inputRef?.current?.focus();
    }
  }, [searchTerm]);
  const handleSubmit = () => {
    onSearch(searchTerm);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _handleKeyDown = (event: any) => {
    setSearchTerm(event.target.value);
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const [focus, setFocus] = useState(true);
  const [focusButton, setFocusButton] = useState(false);

  return (
    <div
      className={`flex flex-row items-center input ${classValue ?? ''} ${focus ? 'input-focus' : ''} `}
    >
      <input
        ref={inputRef}
        className="body-1 search-textfield"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={handleChange}
        name="search-Field"
        value={searchTerm}
        placeholder={hint}
        type="text"
        onKeyDown={_handleKeyDown}
      />
      <div className="flex flex-col items-end">
        <button
          type="submit"
          className={`flex flex-col ${focusButton ? 'buttonSearch-focus' : ''} `}
          onClick={handleSubmit}
          onFocus={() => setFocusButton(true)}
          onBlur={() => setFocusButton(false)}
        >
          <Image src={SearchIcon} className="icon searchhover " alt="Search" />
        </button>
      </div>
    </div>
  );
};

export default SearchField;
