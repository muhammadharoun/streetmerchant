import {Config} from '../config';
import sendEmail from './email';
import sendSlaskMessage from './slack';

export default function sendNotification(cartUrl: string) {
	if (Config.notifications.email.username && Config.notifications.email.password) {
		sendEmail(cartUrl);
	}

	if (Config.notifications.slack.channel && Config.notifications.slack.token) {
		sendSlaskMessage(cartUrl);
	}
}