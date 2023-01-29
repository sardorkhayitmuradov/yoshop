import React, { useState } from 'react';
import { useRouter } from 'next/router';

export const LanguageSwitcher = () => {
    const [lang , setLang] = useState("eng");
    const router = useRouter()
    const handleClick = ( e ) => {
        console.log(router.locale);
        // console.log(e.target.value)
    }
    
    return (
        <select onChange={handleClick} name="languages" id="languages" className="border-none bg-transparent outline-none">
            <option value="eng" className="border-none p-3 m-3">ENG</option>
            <option value="kr" className="border-none p-3 m-3">KOR</option>
            <option value="kk" className="border-none p-3 m-3">KZT</option>
            <option value="ru" className="border-none p-3 m-3">RUS</option>
        </select>
    );
};
