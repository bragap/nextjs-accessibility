import type { Metadata } from "next";
import { montserrat } from '@/app/ui/fonts';
import { ThemeProvider } from "@/components/ThemeProvider";
import AccessibilityPlugin from "@/components/AccessibilityPlugin";
import "@/app/globals.css";
import { PluginLanguageProvider } from "@/contexts/PluginLanguageContext";
import { AccessibilityWrapper } from "@/components/AccessibilityWrapper";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";

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
            <AccessibilityProvider>
                <body className={`${montserrat.className} antialiased`}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
                        <PluginLanguageProvider>
                            <AccessibilityWrapper>
                                {children}
                                <AccessibilityPlugin />
                            </AccessibilityWrapper>
                        </PluginLanguageProvider>
                    </ThemeProvider>
                </body>
            </AccessibilityProvider>
        </html >
    );
}
