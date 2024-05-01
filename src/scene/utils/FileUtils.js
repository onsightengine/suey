class FileUtils {

    read(fname, onLoad, onError) {
        const file = new XMLHttpRequest();
        file.overrideMimeType("text/plain");
        file.open("GET", fname, true);
        if (typeof onLoad === 'function') file.onload = function() { onLoad(file.response); };
        if (typeof onError === 'function') file.onerror = onError;
        file.send(null);
    }

    write(fname, data) {
        const blob = new Blob([data], { type: 'octet/stream' });
        const download = document.createElement('a');
        download.download = fname;
        download.href = window.URL.createObjectURL(blob);
        download.style.display = 'none';
        download.onclick = function() {
            document.body.removeChild(this);
        };
        document.body.appendChild(download);
        download.click();
    }

    select(onLoad, filter) {
        const chooser = document.createElement('input');
        chooser.type = 'file';
        chooser.style.display = 'none';
        document.body.appendChild(chooser);
        if (filter) chooser.accept = filter;
        chooser.onchange = function(event) {
            if (typeof onLoad === 'function') onLoad(chooser.files);
            document.body.removeChild(chooser);
        };
        chooser.click();
    }

}

export { FileUtils };
