import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [number, setNumber] = useState('')
  const [selectType, setSelectType] = useState('isPrime')
  const [result, setResult] = useState(false)

  useEffect(() => {
    calculateResult()
  }, [number, selectType, result])

  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  const isFibonacci = (num, count = 1, last = 0) => {
    if (count < num) {
      return isFibonacci(num, count + last, count);
    }
    return count === num;
  };

  const onChangeNumber = (e) => {
    let numberValue = e.target.value;
    const isStringNumber = !isNaN(numberValue)
    if (!isStringNumber) {
      numberValue = 0
    }
    numberValue = numberValue < 0 ? 1 : numberValue
    numberValue = Math.round(numberValue)
    setNumber(numberValue)

    calculateResult()
  }

  const calculateResult = () => {
    if (selectType === 'isPrime') {
      setResult(isPrime(number))
    } else {
      setResult(isFibonacci(number))
    }
  }

  return (
    <div className={'container-column'}>

      <div className={'col1'}>
        <input type={'text'} name={'inputBox'} value={number}
               onChange={(e) => {
                 setNumber(e.target.value);
                 calculateResult()
               }}
               onBlur={onChangeNumber}/>
      </div>

      <div className={'col2'}>
        <select name="typeNumber" id="typeNumber" onChange={(e) => {
          setSelectType(e.target.value);
          calculateResult()
        }} value={selectType}>
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>

      <div className={'col3'}>{result.toString()}</div>

    </div>
  );
}

export default App;
