import NextAuth from "next-auth";
import Providers from "next-auth/react";

export default NextAuth({
    providers:[
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Providers.Yandex({
            clientId: process.env.YANDEX_CLIENT_ID,
            clientSecret: process.env.YANDEX_CLIENT_SECRET
        })
    ]
})