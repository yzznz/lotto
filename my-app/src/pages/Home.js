import { useState } from "react";
import NumberCreate from "../components/NumberCreate";
import WinNumber from "../components/WinNumber";

const Home = () => {
  const [number, setNumber] = useState(NumberCreate);

  return (
    <div>
      <div className="sitename">
        <h2>로또 시뮬레이션</h2>
      </div>
      <div className="notice"></div>
      <div className="second">
        <div className="article">
          <h1>당첨번호</h1>
          <WinNumber />
        </div>
        <div className="article">
          <h1>번호별 당첨확률</h1>
        </div>
      </div>
      <div className="lotto_create">
        <h1>번호 생성기</h1>
        {number}
        {/* 제외할 번호 */}
        <input
          type="button"
          value="다시뽑기"
          onClick={() => {
            setNumber(<NumberCreate />);
          }}
        ></input>
      </div>
    </div>
  );
};
export default Home;
