import { useEffect, useRef } from "react";
import check from "../assets/lotties/heart.json";
import Lottie  from "lottie-react";
interface Animal{
feel:string
}
export const Heart = ({feel}:Animal) => {
    const lottieRef = useRef<any>(null);
    useEffect(() => {
 lottieRef.current.goToAndStop(0,0);
        if (feel === 'full') {
            lottieRef.current.goToAndStop(15,16);
        }
        if (feel === 'hungry') {
            lottieRef.current.goToAndStop(8, 9.5);
        }
        if (feel === 'urgent') {
            lottieRef.current.goToAndStop(0, 1);
        }
    }, [feel]);
    return (
        <div >
            <Lottie
                animationData={check}
                loop={false}
                autoPlay={false}
                lottieRef={lottieRef}
             className="animalContainer___FoodStatusContainer___heart"
            />
        </div>
    );
};
