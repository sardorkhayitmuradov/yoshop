import Image from "next/image";
import React from "react";
import PlusIcon from "../../public/assets/images/plusIcon.svg";
import PlusXira from "../../public/assets/images/plus.svg";
import MinusIcon from "../../public/assets/images/minus.svg";
import PlusAdded from "../../public/assets/images/plusAdded.svg";
import MinusBlack from "../../public/assets/images/minusBlack.svg";

export const CalculatorProduct = ({
  incrementItem,
  decrementItem,
  quantity,
  wrapClass,
  opacity,
}) => {
  return (
    <div
      className={`flex items-center justify-between max-w-[157px] mx-auto w-full ${wrapClass}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={opacity ? MinusIcon : quantity == 0 ? MinusIcon : MinusBlack}
        className={`${quantity} cursor-pointer py-[10px]`}
        alt="minus icon"
        width={24}
        height={24}
        onClick={decrementItem}
      />
      <div
        className={`max-w-[70px] w-full flex items-center justify-center border-[2px] border-solid rounded-[10px] ${
          quantity > 0
            ? opacity
              ? "border-[#E5E7EB]"
              : "border-[#FF588A]"
            : "border-[#E5E7EB]"
        } py-[3px] text-[20px] leading-[140%] font-PoppinsBold text-[#111827]`}
      >
        {quantity}
      </div>
      <Image
        src={opacity ? PlusXira : quantity == 0 ? PlusIcon : PlusAdded}
        className="cursor-pointer py-[10px]"
        alt="plus icon"
        width={24}
        height={24}
        onClick={incrementItem}
      />
    </div>
  );
};
