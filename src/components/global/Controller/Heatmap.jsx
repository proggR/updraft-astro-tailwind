//const endPoint =
//"https://api.affordableaudience.com/<appid>"

const endPoint = "localhost:3001/api"

const Heatmap = (props) => {
	Notify()
}

const Notify = () => {
	fetch(endPoint, {
		body: '{"sessionid":"<sessionid>", "componentid":"<componentid>", "action":"<action>","timestamp":"<timestamp>"}',
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Token: "sfg999666t673t7t82"
		},
		method: "POST"
	})
}
