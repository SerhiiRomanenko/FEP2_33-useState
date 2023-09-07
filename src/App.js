import './App.css';
import { useState } from 'react';
import SmileCard from "./components/SmileCard";
function App() {
    const [countFirst, setCountFirst] = useState(0);
    const [countSecond, setCountSecond] = useState(0);
    const [countThird, setCountThird] = useState(0);
    const [countFourth, setCountFourth] = useState(0);
    const [countFifth, setCountFifth] = useState(0);

    const $winners = document.querySelector(".winners");
    function handleClickFirst() {
        setCountFirst(countFirst + 1);
    }
    function handleClickSecond() {
        setCountSecond(countSecond + 1);
    }
    function handleClickThird() {
        setCountThird(countThird + 1);
    }
    function handleClickFourth() {
        setCountFourth(countFourth + 1);
    }
    function handleClickFifth() {
        setCountFifth(countFifth + 1);
    }
    function handleClickResult() {
        const maxValue = Math.max(countFirst, countSecond, countThird, countFourth, countFifth);
        if ($winners) {
            $winners.textContent = `${maxValue} лайк(и/ів) набрали: `;
            document.querySelectorAll(".smileCard").forEach(item => {
                if (+item.getAttribute("am-value") === maxValue) {
                    $winners.textContent += item.getAttribute("am-smile");
                }
            });
        } else {
            alert(`Лайкни смайл ;)`);
        }
    }
  return (
    <div className="wrapper">
        <div className="smiles">
            <SmileCard onIncrease={handleClickFirst} smile="😀" counter={countFirst}/>
            <SmileCard onIncrease={handleClickSecond} smile="😍" counter={countSecond}/>
            <SmileCard onIncrease={handleClickThird} smile="🤬" counter={countThird}/>
            <SmileCard onIncrease={handleClickFourth} smile="🥶" counter={countFourth}/>
            <SmileCard onIncrease={handleClickFifth} smile="🤖" counter={countFifth}/>
        </div>
        <button className="button" onClick={handleClickResult}>Show Results</button>
        <div className="winners"></div>
    </div>
  );
}
export default App;
