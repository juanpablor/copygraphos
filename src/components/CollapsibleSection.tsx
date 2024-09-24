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
        <div className="text-center"> {title}  </div>
        <div className={styles.clickicon}>
            <ClickIcon fillColour="#ADB5BD" />
        </div>
      </h3>
      {isOpen && <p className={styles.paragraph}>{content}</p>}
    </div>
  );
};

export default CollapsibleSection;

const styles = {
  subtitle: "flex flex-row justify-center font-bold text-xl my-2",
  clickicon: "flex w-6 h-6 ml-2 self-center",
  paragraph: "text-lg text-center",
};
