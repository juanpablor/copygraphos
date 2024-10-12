import * as React from "react";
import { useState } from "react";
import ClickIcon from "./click";

interface CollapsibleSectionProps {
  title: string;
  content: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-[40rem] mx-auto">
      <h3 className={`${styles.subtitle} cursor-pointer `} onClick={toggleOpen}>
        <div className="leading-4"> {title}  </div>
        <div className={styles.clickicon}>
            <ClickIcon fillColour="#5da418" />
        </div>
      </h3>
      {isOpen && <p className={styles.paragraph}>{content}</p>}
    </div>
  );
};

export default CollapsibleSection;

const styles = {
  subtitle: "flex flex-row justify-between font-bold text-md text-semidark",
  clickicon: "flex w-6 h-6 ml-2 self-center",
  paragraph: "text-sm text-semidark text-center mt-3",
};
