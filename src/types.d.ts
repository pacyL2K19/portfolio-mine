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
    fontFamilly: string,
    fontSize: string,
    fontWeight: string
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

type Home = {
    main: string,
    title: string,
    intro: string
}

type Texts = {
    color: string | undefined,
    fontSize: string | undefined,
    fontFamilly: string | undefined
}