const Events = {
    PUSHSTATE: 'pushstate',
    POPSTATE: 'popstate'
}

export const navigate = (href) => {
    window.history.pushState({}, '', href);
    const navigationEvent = new Event(Events.PUSHSTATE);
    window.dispatchEvent(navigationEvent);
}

export const locationOnChange = (e) => {
    e.preventDefault();
    window.currentPath = window.location.pathname;
    window.currentPage();
}


export const activeRouter = () => {
    window.addEventListener(Events.PUSHSTATE, locationOnChange);
    window.addEventListener(Events.POPSTATE, locationOnChange);
}