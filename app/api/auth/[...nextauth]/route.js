import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prismadb";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {

                const { email, password } = credentials;

                try {

                    const fetchUser = await prisma.user.findUnique({
                        where: {
                            email,
                        },
                    });

                    if (!fetchUser) {
                        return null;
                    }

                    const PassMatch = await bcrypt.compare(password, fetchUser.password);

                    if (!PassMatch) {
                        return null;
                    }

                    return fetchUser;
                } catch (error) {
                    return NextResponse.json({ message: "SignIn UnSuccessfull?" }, { status: 500 });
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
        jwt: true
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/SignIn",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };