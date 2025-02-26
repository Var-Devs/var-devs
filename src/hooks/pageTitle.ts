import { useEffect } from "react";

export const pageTitle = (pageTitle: string) => {
  useEffect(() => {
    document.title = `Vardevs - ${pageTitle}`;
  }, [pageTitle]);
};

export const getPageTitle = () => {
  return document.title
}
