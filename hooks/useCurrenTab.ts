import { useState } from "react";

export const useCurrentTab = () => {
  const [currentTab, setCurrentTab] = useState("Action");

  const handleCurrentTab = (genre: string) => {
    setCurrentTab(genre);
  };

  return { currentTab, handleCurrentTab };
};
