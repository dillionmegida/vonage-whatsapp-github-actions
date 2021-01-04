const core = require("@actions/core");
const { default: axios } = require("axios");

const env = process.env;

const messageFromInput = core.getInput("message");

const messageToSend =
	`${messageFromInput}\n\n` +
	`Repository: ${env.GITHUB_REPOSITORY}\n` +
	`Workflow name: ${env.GITHUB_WORKFLOW}\n` +
	`Job name: ${env.GITHUB_JOB}`;

const WHATSAPP_NUMBER = "2349079055242";

(async () => {
	try {
		await axios({
			method: "post",
			url: "https://messages-sandbox.nexmo.com/v0.1/messages",
			auth: {
				username: "efc833cb",
				password: "vuCscG7gMzC7RNEz",
			},
			data: {
				from: {
					type: "whatsapp",
					number: "14157386170",
				},
				to: {
					type: "whatsapp",
					number: WHATSAPP_NUMBER,
				},
				message: {
					content: {
						type: "text",
						text: messageToSend,
					},
				},
			},
		});
	} catch (error) {
		core.setFailed(error.message);
	}
})();
