import { flattenClasses } from '../Style'

export const flattenMenu = (structure, style, props) => {
    let button = {}, svg = {}, links = {}, menu = {}
    let structureButton = {}, structureSvg = {}, structureLinks = {}, structureMenu = {}
    let styleButton = {}, styleSvg = {}, styleLinks = {}, styleMenu = {}
    let propsButton = {}, propsSvg = {}, propsLinks = {}, propsMenu = {}
    // let links = {}, menu = {}, brand = {}

    if(structure.button){
        if(structure.button.svg){
            structureSvg = structure.button.svg
        }
        structureButton = structure.button
    }

    if(style.button){
        if(style.button.svg){
            styleButton = style.button.svg
        }
        styleButton = style.button
    }

    if(structure.menu){
        if(structure.menu.links){
            structureLinks = structure.menu.links
        }
        structureMenu = structure.menu
    }

    if(style.menu){
        if(style.menu.links){
            styleLinks = style.menu.links
        }
        styleMenu = style.menu
    }

    button = flattenClasses(["svg","wrap"],structureButton,styleButton,propsButton)
    svg = flattenClasses(["hid"],structureSvg,styleSvg,propsSvg)
    links = flattenClasses(["active"],structureLinks,styleLinks,propsLinks)
    menu = flattenClasses(["wrap"],structureMenu,styleMenu,propsMenu)
    return { button, svg, links, menu }
}