export const Attributes = (props) => {
	if(!props) {return {}}
	let atts = {}
	atts.style = props.style ? props.style : null
	atts.class = props.class ? props.class : null
	atts.target = props.target ? props.target : null
	atts.ref = props.ref ? props.ref : null
	atts.alt = props.alt ? props.alt : null
	atts.width = props.width ? props.width : null
	atts.height = props.height ? props.height : null
	return atts
}
