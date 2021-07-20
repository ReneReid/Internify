import RadioButtonsGroup from "./RadioButtonsGroup";

function LengthSubHeader(props) {
  const jobData = props.jobData;
  const data = ["4 months", "8 months", "12 months", "16 months", "24 months"];

  return (
    <div>
      <div>
        <h3>Length</h3>
        <RadioButtonsGroup
          jobData={jobData}
          property={"length"}
          data={data}
          keysList={props.keysList}
        />
      </div>
    </div>
  );
}

export default LengthSubHeader;
