import AnimateAppears from "../MotionComponents/AnimateAppears";

const DefaultPageComponent = ({ header, body }: any) => {
  return (
    <AnimateAppears>
      <div className="flex w-full flex-col space-y-10 ">
        <div>{header}</div>
        <div>{body}</div>
      </div>
    </AnimateAppears>
  );
};

export default DefaultPageComponent;
