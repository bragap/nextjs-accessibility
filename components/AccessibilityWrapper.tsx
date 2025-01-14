'use client'

import React from 'react'
import { useAccessibilitySettings } from '@/hooks/useAccessibilitySettings'

export const AccessibilityWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const {
        fontSize,
        contrast,
        lineHeight,
        letterSpacing,
        saturation,
        colorsPage,
        highlightedLetters,
    } = useAccessibilitySettings()

    const styles: React.CSSProperties = {
        fontSize: fontSize ? '120%' : '100%',
        lineHeight: lineHeight.toString(),
        letterSpacing: `${letterSpacing}px`,
        filter: `saturate(${saturation}%)`,
        backgroundColor: colorsPage === 'dark' ? '#000' : '#fff',
        color: colorsPage === 'dark' ? '#fff' : '#000',
    }

    if (contrast === 'high') {
        styles.filter += ' contrast(150%)'
    }

    if (highlightedLetters) {
        styles.fontWeight = 'bold'
    }

    return <div style={styles}>{children}</div>
}

