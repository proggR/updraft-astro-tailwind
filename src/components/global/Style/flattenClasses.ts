export const flattenClasses = (keys, structure, style, props) => {
    let wrap = "", classes={}    
    wrap += structure && structure.class ? ' '+structure.class : ''
    wrap += style && style.class ? ' '+style.class : ''
    wrap += props && props.class ? ' '+props.class : ''
    for (const key of keys) {
        if(!classes[key]) classes[key] = ""
        classes[key] += structure && structure[key] && structure[key].class ? ' '+structure[key].class : ''
        classes[key] += style && style[key] && style[key].class ? ' '+style[key].class : ''

        if(props.atts && props.atts[key]){
            classes[key] += props.atts[key].class ? ' '+props.atts[key].class 
            : ' '+props.atts[key] 
        }        

        classes[key] = uniqueTokenString(classes[key].split(" "))
    }
    classes.class=uniqueTokenString(wrap.split(" "))
    // classes.class=wrap
    return classes
}

const uniqueTokenString = (tokens) => {
    return uniqueTailwindClass(Array.from(new Set(tokens))).join(' ');
}

const uniqueTailwindClass = (tokens) => {
    const basisRE = /basis-(\d\/\d)/
    let basis = false
    const length = tokens.length
    tokens = tokens.reverse().filter( (token) => {
            let basisMatch = token.match(basisRE)
            if(basisMatch && !basis){ basis = true }
            else if(basisMatch) { return false } //there can be only 1!
            return true
        }
    ).reverse()
    return tokens
}