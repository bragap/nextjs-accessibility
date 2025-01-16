"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import { useModalLanguage } from "@/contexts/AccessibilityContexts/PluginLanguageContext"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const { t } = useModalLanguage()

    console.log(theme, "theme")
    return (
        <Button
            variant="outline"
            className="h-auto"
            onClick={() =>
                setTheme((prev) => {
                    const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    if (prev === "dark" || (prev === "system" && systemIsDark)) {
                        return "light";
                    }
                    return "dark";
                })
            }
        >
            <div className="flex flex-wrap items-center gap-2 text-left w-full">
                <div className="block w-full">
                    {theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                        <Moon className="h-[3rem] w-[3rem]" />
                    ) : (
                        <Sun className="h-[3rem] w-[3rem]" />
                    )}
                </div>
                <div className="block w-full">{t("colorPage")}</div>
                <div>
                    <span className="text-xs text-acc-blue">
                        {theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
                            ? t("darkMode")
                            : t("lightMode")}
                    </span>
                </div>
            </div>
        </Button>


    )
}
