import { useEffect } from "react";

//set the title of the document
//we want the document title to reflect the count from "basic counter"
//take in current count from basic counter and set title thusly
//no need to return as we're just setting title

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = count;
  }, [count]);
}

export default useDocumentTitle;
