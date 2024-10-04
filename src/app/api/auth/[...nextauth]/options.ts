import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as any,
            clientSecret: process.env.GITHUB_SECRET as any,
        }),
        // ...add more providers here
    ],
}

