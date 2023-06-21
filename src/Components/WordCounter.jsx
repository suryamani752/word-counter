import React from "react";

const WordCounter = () => {
  const [state, setState] = React.useState({
    wordCount: 0,
  });

  const handleKeyPress = (e) => {
    const count = e.target.value;

    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, "");
        count = count.replace(/[ ]{2,}/gi, " ");
        count = count.replace(/\n /, "\n");
        return count.split(" ").length;
      }
    };

    setState({
      wordCount: countWords(count),
    });
  };
  return (
    <div id="container">
      <textarea placeholder="Enter sentence" onChange={handleKeyPress}></textarea>
      <h1>
        Word Count:
        <span className="number"> {state.wordCount}</span>
      </h1>
    </div>
  );
};

export default WordCounter;
