import ThemeManagement from '../theme_management';
import ThemeProperty from '../../types/theme_property';

export const loadProperty: ThemeManagement.IPropertyLoader = (property: ThemeProperty, rootStyle: CSSStyleDeclaration) => {
    rootStyle.setProperty(property.properyName, property.properyValue);
}

export default loadProperty;
