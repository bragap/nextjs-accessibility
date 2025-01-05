import type { Metadata } from "next";
import { montserrat } from '@/app/ui/fonts';
import { ThemeProvider } from "@/components/ThemeProvider";
import AccessibilityPlugin from "@/components/AccessibilityPlugin";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Accessibility NextJS Starter Kit by Pedro Braga",
    description: "This is a template of a plugin of Accessibility",
};

export default function RootLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode
    params: { lang: string }
}) {
    return (
        <html lang={lang} suppressHydrationWarning>
            <body className={`${montserrat.className} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <AccessibilityPlugin params={{ lang }} />
                </ThemeProvider>
            </body>
        </html >
    );
}
