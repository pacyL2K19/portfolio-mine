interface Colors {

    /**
     * @constant Colors 
     * required
     */

    main: string,
    mainText: string,
    secondaryText: string

    /**
     * @constant Colors 
     * unrequired
     */

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
    items: string[],
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

type Buttons = {
    title: string | undefined
}

type Project = {
    imgUrl: string,
    title: string,
    description?: string,
    techs?: string[],
    id: number
}
