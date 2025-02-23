import { useEffect } from "react";

const pageTitle = (pageTitle: string) => {
  useEffect(() => {
    document.title = `Vardevs - ${pageTitle}`;
  }, [pageTitle]);
};

export default pageTitle;
