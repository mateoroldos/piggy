export const getImageAsBase64 = (file: File): Promise<string> => {
	return new Promise<string>((resolve) => {
		const reader = new FileReader();
		reader.addEventListener('loadend', () => {
			const base64String = reader.result as string;
			const base64Image = base64String.split(',')[1];
			resolve(base64Image);
		});
		reader.readAsDataURL(file);
	});
};
