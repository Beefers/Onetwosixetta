import { constants } from "@metro/common";

//! This module is only found on 165.0+, under the assumption that iOS 165.0 is the same as Android 165.0.
//* In 167.1, most if not all traces of the old color modules were removed.
//* In 168.6, Discord restructured EVERYTHING again. SemanticColor on this module no longer works when passed to a stylesheet. We must now use what you see below.
//* In 173.10, Discord restructured a lot of the app. These changes included making the color module impossible to early-find.
//? To stop duplication, it is now exported in our theming code.
//? These comments are preserved for historical purposes.
// const colorModule = findByProps("colors", "meta");

//? SemanticColor and default.colors are effectively ThemeColorMap
export const semanticColors = constants?.ThemeColorMap;

//? RawColor and default.unsafe_rawColors are effectively Colors
//* Note that constants.Colors does still appear to exist on newer versions despite Discord not internally using it - what the fuck?
export const rawColors = constants?.Colors;