import React from 'react';
const SearchForm = ({
    searchTerm,
    onSearchInput,
    onSearchSubmit,
  }) => (
    <form onSubmit={onSearchSubmit} className="search-form">
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>
  
      <button
        type="submit"
        disabled={!searchTerm}
        className="button button_large"
      >
        Submit
      </button>
    </form>
  );
  
  const InputWithLabel = ({
    id,
    value,
    type = 'text',
    onInputChange,
    isFocused,
    children,
  }) => {
    const inputRef = React.useRef();
  
    React.useEffect(() => {
      if (isFocused) {
        inputRef.current.focus();
      }
    }, [isFocused]);
  
    return (
      <>
        <label htmlFor={id} className="label">
          {children}
        </label>
        &nbsp;
        <input
          ref={inputRef}
          id={id}
          type={type}
          value={value}
          onChange={onInputChange}
          className="input"
        />
      </>
    );
  };
  export default SearchForm;