class MyApp extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        window.currentPath = window.location.pathname;
        window.currentPage = () => {this.render()};
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = /* html */`
        ${
            (window.currentPath === '/spa-demo/' && '<home-page></home-page>') ||
            (window.currentPath === '/spa-demo/about/' && '<about-page></about-page>')
        }
        `;
    }

    disconnectedCallback(){
        console.log("Se desconectó my app");
    }
};
customElements.define('my-app', MyApp);