import Image from "next/image";
import mobileLicense from "../../public/images/mobileLicenseImg.png";
import mobileLicense2 from "../../public/images/mobileImg2.png";

const ProductModal = ({setOpenModal}) => {
  return (
    <>
        <div
        className="z-10 fixed top-[-50px] w-full h-[120vh] opacity-50 bg-[#D9D9D9] hidden">
        </div>
        <div
            className="buyProductModalInfo ease-linear  duration-[300ms] hidden shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] fixed z-20 bg-[#13131C] py-[50px] pb-[138px] px-[40px] min-h-[300px] w-[728px] right-0 top-[130px] rounded-[10px] border-y border-x border-solid border-[#fff]"
            
        >
            <div className="modalInfoWrapp relative flex  justify-between">
            <button
                className="text-[30px] font-[200] text-[#fff] absolute right-[-30px] top-[-65px] py-3 px-3"

                onClick={() => {
                  if (modalWindowBg.current.classList.contains("block")) {
                    modalWindowBg.current.classList.remove("block");
                    modalWindowBg.current.classList.add("hidden");
                    modalWindowInfo.current.classList.remove("block");
                    modalWindowInfo.current.classList.add("hidden");
                  }
                }}
            > 
                x
            </button>
            <div className="modalRightInfoWrapp max-w-[370px]">
                <h3 className="infooTitle text-[16px] font-[700] text-[#fff] ">
                My Cart
                </h3>

                <div className="licenseWrapp border-y border-solid border-[#fff] flex items-center py-[10px]">
                <div className="mobileLicenseImgWrapp flex items-center relative">
                    <Image src={mobileLicense} alt="mobile-license " />
                    <Image
                    src={mobileLicense2}
                    alt="mobile-license "
                    className="absolute left-[20px]"
                    />
                </div>

                <h2 className="licenseTitle text-[16px] font-[700] text-[#fff] ml-4 ">
                    YoShop Mobile Lisence
                </h2>
                </div>
            </div>
            <div className="modalLeftInfoWrapp w-[255px]">
                <div className="orderModalinfo ">
                <h3 className="infooTitle text-[16px] font-[700] text-[#fff] ">
                    Order Summary
                </h3>
                <div className="modalTotalInfoProduct border-y border-solid border-[#fff] pt-[15px] pb-[7px]">
                    <div className="modalInfotexts flex items-center justify-between ">
                    <p className="priceName text-[14px] font-[400] text-[#fff] leading-[25px]">
                        Subtotal
                    </p>
                    <p className="priceInfo text-[14px] font-[400] text-[#fff] leading-[25px]">
                        ₸ 3 000
                    </p>
                    </div>
                    <div className="modalInfotexts flex items-center justify-between ">
                    <p className="priceName text-[14px] font-[400] text-[#fff] leading-[25px]">
                        Period
                    </p>
                    <p className="priceInfo text-[14px] font-[400] text-[#fff] leading-[25px]">
                        Monthly
                    </p>
                    </div>
                    <div className="modalInfotexts flex items-center justify-between ">
                    <p className="priceName text-[14px] font-[400] text-[#fff] leading-[25px]">
                        Amount
                    </p>
                    <p className="priceInfo text-[14px] font-[400] text-[#fff] leading-[25px]">
                        1
                    </p>
                    </div>
                </div>
                <div className="modalInfotexts flex items-center justify-between ">
                    <p className="priceName text-[14px] font-[400] text-[#fff] leading-[25px]">
                    Total
                    </p>
                    <p className="priceInfo text-[14px] font-[400] text-[#fff] leading-[25px]">
                    Total
                    </p>
                </div>

                <button className="modalCheckoutBtn bg-[#fff] text-[#000] py-[9px] w-[100%] rounded-[10px] text-[14px] font-[400] mt-[46px]">
                    Checkout
                </button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default ProductModal