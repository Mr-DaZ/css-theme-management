import ThemeManagement from '../theme_management';
import Theme from '../types/theme';
import loadProperty from './property_loader';

export const themeLoader: ThemeManagement.IThemeLoader = (theme: Theme) => {
    const themeProperties: string[] = Object.keys(theme);
    const rootStyle = getRootStyle();
    themeProperties.forEach((element: string) => {
        loadProperty(theme[element], rootStyle);
    });
}

export const getRootStyle: ThemeManagement.IRootFetcher = () => {
    return document.documentElement.style;
}

export default themeLoader;
