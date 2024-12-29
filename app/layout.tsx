import type { Metadata } from "next";

import { ThemeProvider } from "../components/ThemeProvider";
import AcessibilityPlugin from "@/components/AcessibilityPlugin";

import "./globals.css";

export const metadata: Metadata = {
    title: "Accessibility NextJS Starter Kit",
    description: "This is a template of a plugin of Accessibility",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <AcessibilityPlugin />
                </ThemeProvider>
            </body>
        </html>
    );
}
