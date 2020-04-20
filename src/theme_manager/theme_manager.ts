import Theming from '../types/index';
import { ThemeManagement } from './theme_management';
import { themeLoader } from './theme_loader/theme_loader';


export class ThemeManager implements ThemeManagement.IThemeManager {
    private _themes: Theming.Themes;
    private _themeStorageKeyword: string;

    constructor(themes: Theming.Themes, themeStorageKeyword: string) {
        this._themes = themes;
        this._themeStorageKeyword = themeStorageKeyword;
    }

    loadTheme(theme: string, cacheSelection: boolean) {
        themeLoader(this._themes[theme]);
        if (cacheSelection) {
            this.cacheSelection(theme);
        }
    }

    cacheSelection(theme: string) {
        localStorage.setItem(this._themeStorageKeyword, theme);
    }

    loadCache() {
        return localStorage.getItem(this._themeStorageKeyword);
    }
}

export default ThemeManager;
