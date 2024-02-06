
import check from "../assets/lotties/loading.json";
import Lottie  from "lottie-react";

   

export const Loading = () => {

  
        return (
            <section className="loadingContainer" >
                <Lottie
                    animationData={check}
                    loop={true}
                    autoPlay={true}
                 className="animation"
    
                />
            </section>
        );
    };
    
    