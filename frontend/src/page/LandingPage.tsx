
import FileUpload from "../Components/pdf/FileUpload";

const LandingPage = () => {
  return (
    <div className=" ">
      <div className="flex flex-col items-center pt-20 ">
        <h1 className="font-bold text-5xl">PDF to JSON in seconds</h1>
        <p className="mt-2 text-sm font-serif">
          How to convert your PDF files to JSON online for free
        </p>
      </div>
      <div className=" flex justify-center pt-10 ">
        <FileUpload />
      </div>
    </div>
  );
};

export default LandingPage;
