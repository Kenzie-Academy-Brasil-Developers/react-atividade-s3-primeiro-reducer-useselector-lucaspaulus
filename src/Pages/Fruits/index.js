//importando useSelector do react-redux
import { useSelector } from "react-redux";
import * as S from "./style.js"


import { ReactComponent as Banana } from "../../assets/Banana.svg"
import { ReactComponent as Maca } from "../../assets/Maca.svg"
import { ReactComponent as Morango  } from "../../assets/Morango.svg"
const FruitsPage = () => {
	//acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <S.Container>
      {fruits.map((fruit, index) => (
          <S.FruitCard key={index}>
                {fruit === "Banana" 
                    ?
                    <>
                        <Banana/>
                        <p key={index}>{fruit}</p>
                    </>
                    :
                    fruit === "Maçã"
                    ?
                    <>
                        <Maca/>
                        <p key={index}>{fruit}</p>
                    </>
                    :
                    <>
                        <Morango/>
                        <p key={index}>{fruit}</p>
                    </>

                }
                
          </S.FruitCard>
        
      ))}
    </S.Container>
  );
}

export default FruitsPage;