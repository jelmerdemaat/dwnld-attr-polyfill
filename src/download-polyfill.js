const isBrowser = typeof window !== 'undefined';
const downloadAttributeSupport =
	isBrowser && 'download' in document.createElement('a');
const msSaveBlob =
	isBrowser && typeof window.navigator.msSaveBlob !== 'undefined';

if (!downloadAttributeSupport && msSaveBlob) {
	document.addEventListener('click', evt => {
		const target = evt.target;
		const tagName = target.tagName;

		if (tagName === 'A' && target.hasAttribute('download')) {
			evt.preventDefault();

			const href = target.href;
			const download = target.getAttribute('download');
			const fileName = download || href.split('/').pop();

			const xhr = new XMLHttpRequest();

			xhr.open('GET', href);

			xhr.responseType = 'blob';

			xhr.onreadystatechange = () => {
				if (xhr.readyState !== 4) {
					return;
				}

				if (xhr.status === 200) {
					window.navigator.msSaveBlob(xhr.response, fileName);
				} else {
					console.error(
						'download-attribute-polyfill:',
						xhr.status,
						xhr.statusText
					);
				}
			};

			xhr.send();
		}
	});
}
