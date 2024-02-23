export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/", "/Films/:path*", "/Gallery/:path*", "/PreWedding/:path*", "/Wedding/:path*", "/Users/:path*"]
};