import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
interface ConversionProgressProps {
  isProcessing: boolean;
}
const ConversionProgress: React.FC<ConversionProgressProps> = ({
  isProcessing,
}) => {
  //https://lottie.host/7acbddb8-b16f-4bbc-8c7e-2e0a4b038cbf/SquHGSDo06.json
   return (
    <div className="w-full">
      <div>
        {isProcessing?(

            <div className="flex flex-col text-center">
          <Player
            src="https://lottie.host/7acbddb8-b16f-4bbc-8c7e-2e0a4b038cbf/SquHGSDo06.json"
            background="transparent"
            speed={1}
            loop
            autoplay
            className="w-40 mx-auto"
            />
          <h1 className="text-gray-400 items-center">ConversionProgress...</h1>
        </div>
        ):(
            ""
        )}
      </div>
    </div>
  );
};

export default ConversionProgress;
