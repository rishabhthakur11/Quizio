import React, { FC } from "react";
import Button from "./Button";

const ModalContainer =
  "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-4";

const ModalContent = "w-96 p-8 bg-white rounded-lg flex flex-col items-center";

const ModalTitle = "text-3xl font-bold text-themeColor mt-6 mb-4";

const ModalSubtitle =
  "text-lg font-medium text-primaryText text-center leading-6 mb-6";

interface ModalWrapperProps {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  buttonTitle: string;
  onClick: () => void;
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  title,
  subtitle,
  icon,
  buttonTitle,
  onClick,
}) => {
  return (
    <div className={ModalContainer}>
      <div className={ModalContent}>
        {icon}
        <h6 className={ModalTitle}>{title}</h6>
        <p className={ModalSubtitle}>{subtitle}</p>
        <Button title={buttonTitle} onClick={onClick} />
      </div>
    </div>
  );
};

export default ModalWrapper;
