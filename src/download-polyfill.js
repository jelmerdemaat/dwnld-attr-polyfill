if (typeof window.navigator.msSaveBlob !== 'undefined') {
    document.addEventListener('click', (evt) => {
        const { target } = evt;
        const { tagName, href } = target;
        const fileName = new URL(href).pathname.split('/').pop();

        if (tagName === 'A' && target.hasAttribute('download')) {
            evt.preventDefault();

            fetch(href).then((res) => {
                res.blob().then((blob) => {
                    window.navigator.msSaveBlob(blob, fileName);
                });
            });
        }
    });
}
