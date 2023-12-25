class HomePage extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    static get styles(){
        return /* css */`
        .container {
            background-color: #adf2f2;
        }
        `;
    }

    render(){
        this.shadowRoot.innerHTML = /* html */`
            <style>${HomePage.styles}</style>
            <div class='container'>
                <h1>Home Page</h1>
                <p>Welcome to my page</p>
                <img width="200px" src="https://us.123rf.com/450wm/hermandesign2015/hermandesign20151607/hermandesign2015160700257/60915437-pato-de-dibujos-animados-lindo-beb%C3%A9.jpg" alt="Patito feo en la web">
            </div>
        `;
    }

    disconnectedCallback(){
        console.log("Se desconectó home");
    }
};
customElements.define('home-page', HomePage);