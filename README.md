# Portfolio Template for Devs

<!-- <p align="center">
<a href="https://linkedin.com/in/pacifique-linjanja/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-pacifiquelinjanja-blue?style=flat-square&logo=linkedin"></a>
<a href="https://www.instagram.com/linjanjapacifique/"><img alt="Instagram" src="https://img.shields.io/badge/Instagram-linjanjapacifique__-blue?style=flat-square&logo=instagram"></a>
<a href="mailto:pacilinja2@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-pacilinja2@gmail.com-blue?style=flat-square&logo=Microsoft%20outlook"></a>
</p> -->

> This is a Template based project with the  AIM to help developer to crate professional template for free and in a time records without dealing with deep codes

## Description
### Tech Stack 
This project is based in these main tech stacks : 
- ReactJS 
- Typescript
- React Bootstrap
- Material UI 
- NodeJS
- [EmailJS](https://www.emailjs.com/docs/sdk/installation/)

## Prerequisite

- To use the template, you need a basic understanding of Javascript 
- To contribute, please make sure you follow best practices in the tech stacks specified before
- To run the project locally you need [NodeJs](https://nodejs.org/en/) and [Typescript](https://www.typescriptlang.org/docs/) installed globaly in you computer
## Get Started

> These steps are required to make you own copy of the project and get started, of contribution it is highly important to follow all of these steps and make sure you are following a correct Git flow workflow

1. Clone [Prefered] or fork the project to get a copy of it, by preference, clone it using 
```
$ git clone https://github.com/pacyL2K19/portfolio-mine.git
```
2. Go to the directory 
```
cd portfolio-mine
```
3. Install the packages 
```
$ npm install 
```
4. Setup your `config.js` file by following the `config.sample.js` file template
5. Run the project
```
$ npm run start
```
At this point you should be able to get a the project running in the default web browser, if not please make sure you folowed all the steps or open a well detailed issue
## Customization

1. Favicon : Feel free to change the actual `favicon.ico` file 
2. Update the content : 
> - In the `helper/` folder, change couple of word by yours
> > - `header.json`: the content of the header section, feel free to change the name and the description 
> > - In the same file, you can change the items of the navbar, the way they are named for example from `Portfolio` to `Home`
> - In the `projects.json` file : Customize the list of featured projects 
> > - Images are url links, feel free to use any platform of choice to store them, for my case I used [Cloudinary](https://cloudinary.com/) but Goole Drive or any cloud plateform can be used
> > - Add `live links` (if available) and `Github links` if not availbale, just put the default one `#` 
> > - In globlal, this is the schema of each project: :down
```
// src/types.d.ts

type Project = {
    imgUrl: string,
    title: string,
    description?: string,
    techs?: string[],
    id: number,
    github_link?: string
}

```
:warning Some of them are required, make sure all the projects contains required fields or you face errors on the running
3. In the `social.json` file: An array of `Social` object following this schema below, fell free to put a number of social media you want in the actual array
```
// src/types.d.ts

type Social = {
    key: int,
    for: string,
    class: string,
    link: string
}

// in the helper, the object should follow : 

social : Social[] // just a representation

```
4. In the `about.json` file: customize text, add most used `languages`, `frameworks` and `tools` in corresponding arrays
## Contributing
