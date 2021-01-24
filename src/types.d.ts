interface Colors {
    // requiered colors
    main: string,
    mainText: string,
    secondaryText: string
    // unrequiered 
    background?: string,
    navBgcol: string,
    activeBtn?: string,
    clickBtn?: string,
    disabledBtn?: string,
    titleText?: string,
    menuLinks?: string
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
        subtitle: Fonts,
        secondary: Fonts
    },
    colors?: Colors
}

type Nav = {
    items: String[],
    // theme: Theme
}