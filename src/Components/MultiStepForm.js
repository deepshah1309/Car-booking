const MultiStepForm = (props) => {
    return (
      <div>
        {props.step < props.children.length ? (
          <div>{props.children[props.step]}</div>
        ) : (
          <h1>No more step</h1>
        )}
      </div>
    );
  };
  
  export default MultiStepForm;