import Theming from '../types/index';

export namespace ThemeManagement {
    export type IThemeLoader = (theme: Theming.Theme) => void;

    export type IPropertyLoader = (property: Theming.ThemeProperty, rootStyle: CSSStyleDeclaration) => void;

    export type IRootFetcher = () => CSSStyleDeclaration;

    export interface IThemeManager {
        loadTheme: (theme: string, cacheSelection: boolean) => void;
        cacheSelection: (themeName: string) => void;
        loadCache: () => string | null;
    }
}

export default ThemeManagement;
