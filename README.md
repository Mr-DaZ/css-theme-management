# css-theme-management

This package is intended to ease the implementation of multiple themes in your app.

## How to use

1. Create an interface which extends the **Theming.Theme** interface
2. Add the properties, **Theming.ThemeProperty** have a a value a css property and a name, the name is used in your css to load the value via the ```var()``` function.
3. Create an extansion to the **Theming.Themes** interface, add your theme names here.
4. Create implementations of the interfaces.
5. Provide the themes object to the **ThemeManager** in the ctor.
6. Choose a storage key for the local storage, pass it to the **ThemeManager** in the ctor.
7. To load a theme provide the theme name to the loadTheme method of the **ThemeManager**.

### Example 
```ts
//theme.ts
import { Theming } from 'css-theme-management';

export interface Theme extends Theming.Theme {
    fontColor: Theming.ThemeProperty;
    backgroundColor: Theming.ThemeProperty;  
}
```

```ts
//themes.ts
import { Theming } from 'css-theme-management';

interface Themes extends Theming.Themes {
    Light: Theming.Theme
}

export default Themes;
```

```ts
//light_theme.ts
import Theme from './theme.ts'

export const LightTheme: Theme = {
    fontColor: {
        propertyName: '--font-color',
        propertyValue: 'black'
    },
    backgroundColor: {
        propertyName: '--background-color',
        propertyValue: 'white'
    }
}
```

```ts
//app_themes.ts
import Themes from './themes.ts'
import LightTheme from './light_theme.ts'

const AppThemes: Themes = {
    Light: LightTheme
}

export default AppThemes;
```

```ts
//Where you handle changing themes.
import { ThemeManager } from 'css-theme-management';

const themeManager = new ThemeManager(Themes, THEME_STORAGE_KEYWORD);
themeManager.loadTheme('Light')
```

```css
/*Your css*/
.your-class{
    color: var(--font-color);
    background: var(--background-color);
}
```