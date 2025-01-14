'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface AccessibilityContextType {
    fontSize: boolean
    contrast: 'normal' | 'high'
    lineHeight: number
    letterSpacing: number
    saturation: number
    colorsPage: 'normal' | 'dark'
    highlightedLetters: boolean
    toggleFontSize: () => void
    toggleContrast: () => void
    toggleLineHeight: () => void
    toggleLetterSpacing: () => void
    toggleSaturation: () => void
    toggleColorsPage: () => void
    toggleHighlightedLetters: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [fontSize, setFontSize] = useState(false)
    const [contrast, setContrast] = useState<'normal' | 'high'>('normal')
    const [lineHeight, setLineHeight] = useState(1.5)
    const [letterSpacing, setLetterSpacing] = useState(0)
    const [saturation, setSaturation] = useState(100)
    const [colorsPage, setColorsPage] = useState<'normal' | 'dark'>('normal')
    const [highlightedLetters, setHighlightedLetters] = useState(false)

    const toggleFontSize = () => setFontSize(prev => !prev)
    const toggleContrast = () => setContrast(prev => prev === 'normal' ? 'high' : 'normal')
    const toggleLineHeight = () => setLineHeight(prev => prev === 1.5 ? 2 : 1.5)
    const toggleLetterSpacing = () => setLetterSpacing(prev => prev === 0 ? 1 : 0)
    const toggleSaturation = () => setSaturation(prev => prev === 100 ? 0 : 100)
    const toggleColorsPage = () => setColorsPage(prev => prev === 'normal' ? 'dark' : 'normal')
    const toggleHighlightedLetters = () => setHighlightedLetters(prev => !prev)

    useEffect(() => {
        document.documentElement.style.setProperty('--a11y-font-size', fontSize ? '120%' : '100%')
        document.documentElement.style.setProperty('--a11y-line-height', `${lineHeight}`)
        document.documentElement.style.setProperty('--a11y-letter-spacing', `${letterSpacing}px`)
        document.documentElement.style.setProperty('--a11y-saturation', `${saturation}%`)
        document.documentElement.style.setProperty('--a11y-contrast', contrast === 'high' ? '150%' : '100%')
        document.documentElement.classList.toggle('dark', colorsPage === 'dark')
        document.documentElement.classList.toggle('a11y-highlighted-letters', highlightedLetters)
    }, [fontSize, contrast, lineHeight, letterSpacing, saturation, colorsPage, highlightedLetters])

    return (
        <AccessibilityContext.Provider
            value={{
                fontSize,
                contrast,
                lineHeight,
                letterSpacing,
                saturation,
                colorsPage,
                highlightedLetters,
                toggleFontSize,
                toggleContrast,
                toggleLineHeight,
                toggleLetterSpacing,
                toggleSaturation,
                toggleColorsPage,
                toggleHighlightedLetters,
            }}
        >
            {children}
        </AccessibilityContext.Provider>
    )
}

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext)
    if (context === undefined) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider')
    }
    return context
}

