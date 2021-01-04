const core = require("@actions/core");
const { default: axios } = require("axios");

const env = process.env;

const messageFromInput = core.getInput("message");

const messageToSend =
	`${messageFromInput}\n\n` +
	`Repository: ${env.GITHUB_REPOSITORY}\n` +
	`Workflow name: ${env.GITHUB_WORKFLOW}\n` +
	`Job name: ${env.GITHUB_JOB}`;

const WHATSAPP_NUMBER = "<Recipient Number>";

(async () => {
	try {
		await axios({
			method: "post",
			url: "https://messages-sandbox.nexmo.com/v0.1/messages",
			auth: {
				username: "<API Key>",
				password: "<Password>",
			},
			data: {
				from: {
					type: "whatsapp",
					number: "<Vonage WhatsApp Number>",
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
