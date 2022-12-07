import { useEffect } from "react";

function useDocumentTitle(newtitle) {
  useEffect(() => {
    document.title = newtitle;
  });
}

export default useDocumentTitle;
