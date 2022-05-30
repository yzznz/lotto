import { useEffect, useState } from "react";
import NumberCreate from "../components/NumberCreate";

const Home = () => {
  const getData = async () => {
    const res = await fetch("http://localhost:5000/lottos/last").then((res) =>
      res.json()
    );
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const [number, setNumber] = useState();
  return (
    <div>
      <h3>SiteName</h3>
      <div className="Notice">
        <h1>공지사항</h1>
        <div className="List"></div>
      </div>
      <div className="WinNumber">
        <h1>당첨번호</h1>
      </div>
      <div className="LottoCreate">
        <h1>로또 번호 생성기</h1>
        <NumberCreate />
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
