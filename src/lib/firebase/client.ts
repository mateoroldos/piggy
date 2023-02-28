import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, inMemoryPersistence, setPersistence } from 'firebase/auth';
import { env } from '$env/dynamic/public';

if (
	!env.PUBLIC_FIREBASE_API_KEY ||
	!env.PUBLIC_FIREBASE_AUTH_DOMAIN ||
	!env.PUBLIC_FIREBASE_PROJECT_ID
) {
	throw new Error('Missing Firebase client enviroment variables');
}
const firebaseConfig = {
	apiKey: env.PUBLIC_FIREBASE_API_KEY,
	authDomain: env.PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: env.PUBLIC_FIREBASE_PROJECT_ID
};

export const getClientApp = () => {
	if (getApps().length) return getApp();

	const app = initializeApp(firebaseConfig);

	const auth = getAuth(app);
	setPersistence(auth, inMemoryPersistence);

	return app;
};
