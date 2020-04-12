function anchorLinkHandler(e) {
    e.preventDefault();
    const targetID = this.href.slice(this.href.indexOf("#"));
    const element = document.querySelector(targetID);
    const originalTop = element.getBoundingClientRect().top;
    const originalLeft = element.getBoundingClientRect().left;

    window.scrollBy({
        top: originalTop,
        left: originalLeft,
        behavior: "smooth"
    });

    const checkIfDone = setInterval(function() {
        currentTop = element.getBoundingClientRect().top;
        currentLeft = element.getBoundingClientRect().left;
        if (Math.floor(currentTop) === 0 && Math.floor(currentLeft) === 0) {
            element.tabIndex = "-1";
            element.focus();
            clearInterval(checkIfDone);
        }
    }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));
