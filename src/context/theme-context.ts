import * as React from 'react';

export const themes = {
    dark: {
        background: '#eeeeee',
        foreground: '#000000',
    },
    light: {
        background: '#222222',
        foreground: '#ffffff',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // 默认值
);