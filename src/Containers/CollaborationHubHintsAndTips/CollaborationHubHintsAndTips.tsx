import classes from "./CollaborationHubHintsAndTips.module.css";

const CollaborationHubHintsAndTips = () => {
  // Utils
  const hintsAndTips = [
    "Make sure that your code is in the following format: (Eg. ABC123XY). Anything else besides your team code will cause an error.",
    "Can't find our Allocation Bot? We have an article to help you out.",
    "If you are experiencing any technical issue, kindly read through the Discord guide or Contact Support",
  ];
  return (
    <div className={classes.container}>
      <h4>Hints and Tips</h4>
      <ol>
        {hintsAndTips.map((data, i) => {
          return <li key={i}>{data}</li>;
        })}
      </ol>
    </div>
  );
};

export default CollaborationHubHintsAndTips;
