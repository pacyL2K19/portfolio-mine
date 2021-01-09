interface Colors {
    // requiered colors
    main: String,
    mainText: String,
    secondaryText: String
    // unrequiered 
    background?: String,
    navBgcol: String,
    activeBtn?: String,
    clickBtn?: String,
    disabledBtn?: String,
    titleText?: String,
}

interface Fonts {
    fontFamilly: String,
    fontSize: String,
    fontWeight: String
}

interface Theme {
    fonts?: {
        title: Fonts,
        primary: Fonts,
        secondary: Fonts
    },
    colors?: Colors
}

type Nav = {
    items: String[],
    theme: Theme
}