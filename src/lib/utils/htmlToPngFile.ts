import html2canvas from 'html2canvas';

export const htmlToPngFile = async (element: HTMLElement, name: string) => {
	const canvas = await html2canvas(element);
	const pngDataUrl = canvas.toDataURL('image/png');

	// Convert data URL to Blob
	const blob = await fetch(pngDataUrl).then((res) => res.blob());

	// Create File from Blob
	const file = new File([blob], name, { type: 'image/png' });

	return file;
};
