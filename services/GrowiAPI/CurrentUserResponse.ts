export default interface CurrentUserResponse {
	currentUser: {
		"_id": string,
		"imageUrlCached": string,
		"isGravatarEnabled": boolean,
		"isEmailPublished": boolean,
		"name": string,
		"username": string,
		"lang": string,
		"status": number,
		"lastLoginAt": string,
		"admin": boolean,
		"readOnly": boolean,
		"isInvitationEmailSended": boolean,
		"isQuestionnaireEnabled": true,
		"createdAt": string,
		"updatedAt": string,
		"__v": number,
		"imageAttachment": string,
		"email": string,
		"apiToken": string;
	};
}