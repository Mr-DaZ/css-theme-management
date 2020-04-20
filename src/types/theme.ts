import ThemeProperty from './theme_property';

type Theme = {
    primaryFontColor: ThemeProperty;
    secondaryFontColor: ThemeProperty;
    primaryBackgroundColor: ThemeProperty;
    secondaryBackgroundColor: ThemeProperty;
    primaryAppBarColor: ThemeProperty;
    [index: string]: ThemeProperty;
}

export default Theme;
