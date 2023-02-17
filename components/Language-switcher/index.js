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
                {/* <option value="ko" className="border-none h-[20px] text-white">KOR</option>
                <option value="kk" className="border-none h-[20px] text-white">KZT</option> */}
                <option value="ru" className="border-none h-[20px] text-white">RUS</option> 
            </select> 
    )

};

