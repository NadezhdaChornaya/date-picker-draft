import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [dateOfReviewInputValue, setDateOfReviewInputValue] = useState({
    id: 'dateOfReview',
    label: `Date Of Review`,
    value: '',
    isError: false,
    isRequired: true,
    editable: true,
  })
  const setTextDataFormValue = (key, selectedValue) => {
    const dateFormatted = selectedValue ? new Date(selectedValue).toISOString() : ''
    setDateOfReviewInputValue({ ...dateOfReviewInputValue, value: dateFormatted })
  }

  const validateDate = () => {
      console.log('Nadiia')}

  return (
      <div className="App">
        <header className="App-header">
          <div
              className={`nl-intake-initiative-details__text-input-label-wrapper`}>
            <label className={`nl-custom-text-area__label`} htmlFor={'dateOfReview'}>
              {`Date Of Review`}
            </label>
            <input
                className={`nl-intake-initiative-details__date-review-input`}
                type={'date'}
                id={'dateOfReview'}
                name={'dateOfReview'}
                max={'9999-12-31'}
                min={() => new Date().toISOString().split('T')[0]}
                value={dateOfReviewInputValue?.value ? dateOfReviewInputValue.value.split('T')[0] : ''}
                onChange={e => {
                  // Necessary for correct operation of the Reset button on iOS
                  e.target.defaultValue = ''
                  setTextDataFormValue('dateOfReview', e.target.value)
                }}
                onBlur={e => {
                    // e.target.defaultValue = ''
                    validateDate()
                }}
                onFocus={e =>  e.target.defaultValue = ''}
            />
          </div>
        </header>
      </div>
  );
}

export default App;
