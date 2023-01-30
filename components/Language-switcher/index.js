import React from 'react';
import { useRouter } from 'next/router';

export const LanguageSwitcher = () => {
    const router = useRouter();
    var { pathname, asPath, query } = router;
    const handleLang = (e) => {
        let val = e.target.value;
        router.push({ pathname, query },asPath, { locale: val })
    }

    return (
            <select onChange={handleLang} name="languages" id="languages" className="border-none outline-none p-2 bg-[#FF588A] text-white">
                <option value="en" className="border-none h-[20px] text-white">ENG</option>
                <option value="ko" className="border-none h-[20px] text-white">KOR</option>
                <option value="kk" className="border-none h-[20px] text-white">KZT</option>
                <option value="ru" className="border-none h-[20px] text-white">RUS</option> 
            </select> 
    )
    //     <ul class="menus bg-[#f2f2f2] absolute left-0 right-0 invisible -translate-y-4">
    //         <li><a href="#">Home</a></li>
    //         <li>
    //             <button
    //             className='w-full border-none bg-transparent cursor-pointer'
    //                 type="button"
    //                 aria-haspopup="true"
    //                 aria-expanded="true"
    //                 aria-controls="dropdown1"
    //             >
    //                 Services<span class="arrow"></span>
    //             </button>
    //             <ul class="dropdown" id="dropdown1">
    //                 <li><a href="#" className='py-[14px] px-4'>Web design</a></li>
    //                 <li><a href="#" className='py-[14px] px-4'>Web dev</a></li>
    //                 <li><a href="#" className='py-[14px] px-4'>Web</a></li>
    //             </ul>
    //         </li>
    //     </ul>
    // );
};

 {/* {locales.map((locale) => {
                const { pathname, query, asPath } = router;
                return (
                    <option className="border-none p-3 m-3" key={locale}>
                        <Link
                            href={{ pathname, query }}
                            as={asPath}
                            locale={locale}
                            legacyBehavior
                            >
                            {locale}
                        </Link>
                    </option>
                )
})} */}
