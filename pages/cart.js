import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Input from '../components/Input/Input';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from '../components/Button/Button';
import Checkbox from '../components/Checkbox';
import CancelButton from '../public/assets/images/cart-cancel.svg';
import { CalculatorProduct } from '../components/CalculatorProduct';
import { useTranslation } from 'next-i18next';
import Accordion from '../components/CartAccordion/CartAccordion';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    },
  };
}
const Cart = () => {
  let cart = useSelector((store) => store.carts.cart);
  const { t } = useTranslation();

  const onChecked = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
  };

  return (
    <>
      <section className='min-h-[90vh] pt-[170px] mb-[250px] text-[#111827] max-[450px]:py-[50px]'>
        <div className='max-w-xl mx-auto max-[450px]:px-6'>
          <h1 className='font-bold text-[32px] leading-[140%] mb-7 max-[450px]:text-[20px] max-[450px]:mb-5'>
            {t('common:cart')}
          </h1>
          <div className='mb-5 items-center justify-between max-[450px]:flex hidden'>
            <p className='font-bold text-[16px] leading-[140%] cursor-pointer'>
              Products
            </p>
            <div className='flex items-center gap-x-5'>
              <p className='font-bold text-[12px] leading-[180%] text-[#FF588A] cursor-pointer'>
                Delete All
              </p>
              <p className='font-bold text-[12px] leading-[180%] text-[#FF588A] cursor-pointer'>
                Select All
              </p>
            </div>
          </div>
          <div className='w-full max-[450px]:hidden'>
            {cart?.quantity > 0 ? (
              <>
                {' '}
                <div className='border-y border-[#CBD5E1] flex items-center py-4 justify-between mb-2'>
                  <div className='flex items-center max-w-[590px] w-full justify-between pl-[95px]'>
                    <p>{t('common:products')}</p>
                    <p>{t('common:qty')}</p>
                  </div>
                  <div className='max-w-[500px] w-full'>
                    <p>{t('common:order_summary')}</p>
                  </div>
                </div>
                <p className='text-[#FF588A] mb-5 leading-[180%] cursor-pointer'>
                  {t('common:select_all')}
                </p>
                <ul className='mb-16'>
                  {cart.licenses.length > 0
                    ? cart.licenses.map((license) => {
                        return (
                          <li
                            className='py-5 border-b borderb-[#cbd5e1]'
                            key={license.id}
                          >
                            <Checkbox
                              id={2}
                              value={'pos'}
                              onGetValue={onChecked}
                              checkboxClass={'checkbox'}
                            />
                            <div className='flex justify-between items-center mb-6'>
                              <div className='max-w-[600px] w-full flex justify-between items-center'>
                                <div className='py-[5px] pl-[47px] flex items-center justify-between'>
                                  <Image
                                    src={CancelButton}
                                    width={23}
                                    height={23}
                                    alt='cancel-btn'
                                    className='mr-[25px]'
                                  />
                                  <h3 className='text-[20px] font-bold leading-[140%] mr-[25px]'>
                                    {license.name || license.title}
                                  </h3>
                                  <Link
                                    href={'/licenses'}
                                    className='text-[#FF588A] text-[12px] leading-[140%] border-b border-[#ff588a] pb-1'
                                  >
                                    {t('common:edit')}
                                  </Link>
                                </div>
                                <p className='text-[20px] leading-[140%] font-bold'>
                                  x{license.qty}
                                </p>
                              </div>
                              <div className='max-w-[500px] w-full text-[20px] leading-[180%]'>
                                <div className='flex items-center justify-between w-full mb-5'>
                                  <p>{t('common:period')}</p>
                                  <p className='font-bold'>{license.period}</p>
                                </div>

                                <div className='flex items-center justify-between w-full mb-5'>
                                  <p>{t('common:users')}</p>

                                  <div className='flex items-center justify-between w-full max-w-[200px]'>
                                    <p>
                                      +
                                      {license.cashier.qty >= license.qty * 2
                                        ? license.cashier.qty - license.qty * 2
                                        : license.cashier.qty}
                                    </p>
                                    <p>₸ {license.cashier.price}</p>
                                  </div>
                                </div>
                                <div className='w-full'>
                                  <p className='mb-[10px]'>
                                    {t('header:equipment')}
                                  </p>
                                  {license.products.length > 0
                                    ? license.products.map((product) => {
                                        return (
                                          <div
                                            className='flex items-center justify-between mb-3'
                                            key={product.id}
                                          >
                                            <div className='flex items-center'>
                                              <Image
                                                src={product.image}
                                                width={50}
                                                height={50}
                                                alt='product'
                                                className='mr-[3px]'
                                              />
                                              <h3 className='text-[20px] leading-[140%]'>
                                                {product.name || product.title}
                                              </h3>
                                            </div>
                                            <div className='flex items-center justify-between w-full max-w-[200px]'>
                                              <p>x{product.qty}</p>
                                              <p>₸ {product.price}</p>
                                            </div>
                                          </div>
                                        );
                                      })
                                    : ''}
                                </div>
                              </div>
                            </div>
                            <p className='text-right text-[20px] leading-[140%] font-bold'>
                              {t('common:sub_total')}{' '}
                              <span className='ml-[30px]'>
                                ₸ {license.subTotal}
                              </span>
                            </p>
                          </li>
                        );
                      })
                    : ''}
                  {cart.products.length > 0
                    ? cart.products.map((product) => {
                        return (
                          <li
                            className='py-5 border-b border-b-[#cbd5e1]'
                            key={product.id}
                          >
                            <Checkbox
                              id={1}
                              value={'pos'}
                              onGetValue={onChecked}
                              checkboxClass={'checkbox'}
                            />
                            <div className='flex justify-between items-center mb-6'>
                              <div className='max-w-[800px] w-full flex justify-between items-center'>
                                <div className='py-[5px] pl-[47px] flex items-center justify-between'>
                                  <Image
                                    src={CancelButton}
                                    width={23}
                                    height={23}
                                    alt='cancel-btn'
                                    className='mr-[25px]'
                                  />
                                  <Image
                                    src={product.image}
                                    width={50}
                                    height={50}
                                    alt='product'
                                  />
                                  <h3 className='text-[20px] font-bold leading-[140%] mr-[25px] font-PoppinsRegular'>
                                    {product.name || product.title}
                                  </h3>
                                  <p className='text-[20px] leading-[140%] font-bold'>
                                    x {product.qty}
                                  </p>
                                </div>
                                <CalculatorProduct
                                  quantity={product.qty || 0}
                                />
                              </div>

                              <p className='text-right text-[20px] leading-[140%] font-bold'>
                                {t('common:sub_total')}{' '}
                                <span className='ml-[30px]'>
                                  ₸ {product.price}
                                </span>
                              </p>
                            </div>
                          </li>
                        );
                      })
                    : ''}
                </ul>
                <div className='w-full flex items-center text-[20px] leading-[180%] justify-end font-bold'>
                  <div className='w-full max-w-[500px]'>
                    <div className='flex items-center justify-between mb-5'>
                      <div className='flex items-center'>
                        <p>{t('common:discount')}</p>
                        <p className='text-[12px] text-[#FF588A] ml-3'>
                          (Your promo code applied)
                        </p>
                      </div>
                      <p className='text-[#ff588a]'>₸ 1000</p>
                    </div>

                    <p className='mb-3'>{t('common:promo_code')}</p>

                    <div className='flex items-center justify-between mb-10'>
                      <Input
                        inputType={'text'}
                        wrapperClassName={'max-w-[307px] w-full'}
                        inputClassName={
                          'text-[#9CA3AF] w-full py-[11px] pl-[14px] placeholder:text-[#9CA3AF] placeholder:text-[16px] placeholder:leading-[25px] outline-none rounded-[6px] border-[#94A3B8] border border-solid'
                        }
                        placeholder={'TALGATXOXO'}
                        value={'TALGATXOXO'}
                        onGetValue={(value) => setTown(value)}
                      />

                      <Button
                        className={
                          'cursor-pointer font-bold max-w-[185px] w-full text-white text-[20px] flex justify-center items-center bg-[#FF588A] py-[12px] px-[22px] rounded-[10px]'
                        }
                      >
                        {t('common:apply')}
                      </Button>
                    </div>

                    <div className='flex items-center justify-between mb-5 text-[32px]'>
                      <p>{t('common:total')}</p>
                      <p>₸ 193 000</p>
                    </div>

                    <Link
                      href={'/checkout'}
                      className={
                        'cursor-pointer font-bold w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] py-[12px] px-[22px] rounded-[10px]'
                      }
                    >
                      {t('common:checkout')}
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className='max-w-[510px] w-full mx-auto mt-[250px]'>
                <p className='font-bold leading-[140%] text-[44px] text-center text-[#E5E7EB] mb-[21px]'>
                  {t('common:empty')}
                </p>
                <Link href={'/'}>
                  <Button
                    className={
                      'cursor-pointer font-bold max-w-[507px] w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] border-solid border-x border-y border-[#fff] py-[13px] px-[22px] rounded-[10px]'
                    }
                  >
                    {t('common:main')}
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <Accordion
            // subTotal={foundProd?.subTotal || 0}
            accordionClassName={`mb-[11px]`}
            accordionBodyClassname={'py-[20px]'}
            accordionHeaderClassName={'py-[10px] px-[34px] max-[450px]:px-0'}
            title={
              <div className='flex items-center max-w-[830px] max-[450px]:mb-[10px]'>
                <ul className='flex flex-col w-full'>
                  <li className='flex items-center justify-between'>
                    <Image
                      src={CancelButton}
                      width={18}
                      height={18}
                      alt='cancel-btn'
                      className='mr-[14px]'
                    />
                    <div className='max-[450px]:max-w-[207px] flex items-center justify-between'>
                      <h2 className='text-[14px] mr-7 leading-[140%] text-[#111827]'>
                        YoShop Mobile License
                      </h2>
                      <p>x 1</p>
                    </div>
                    <Checkbox
                      id={6}
                      value={'pos'}
                      onGetValue={onChecked}
                      checkboxClass={'checkbox'}
                    />
                  </li>
                  <li className='flex items-center ml-auto max-w-[250px] w-full mb-3'>
                    <Link
                      href={'/licenses'}
                      className='text-[#FF588A] text-[12px] leading-[140%] border-b border-[#ff588a] pb-1'
                    >
                      {t('common:edit')}
                    </Link>
                  </li>
                  <li className='flex items-center ml-auto max-w-[250px] justify-between w-full'>
                    <h4
                      className='text-[12px] leading-[140%] font-bold'
                    >
                      Subtotal:
                    </h4>
                    <p className='text-[12px] leading-[140%] font-bold'>₸ 164 500</p>
                  </li>
                </ul>
              </div>
            }
          >
            <div className='flex w-full'>
              <h2 className='text-[14px] leading-[140%] font-bold'>Order summary:</h2>
            </div>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Cart;
