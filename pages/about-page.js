class AboutMe extends HTMLElement{
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
            background-color: #b6b63b;
        }
        `;
    }

    render(){
        this.shadowRoot.innerHTML = /* html */`
            <style>${AboutMe.styles}</style>
            <div class='container'>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat corporis porro voluptatibus temporibus est beatae debitis consequuntur, excepturi vel ab nostrum, nisi delectus vitae cum! Sunt numquam odit earum?</p>
            </div>
        `;
    }

    disconnectedCallback(){
        console.log("Se desconectó about");
    }
};
customElements.define('about-page', AboutMe);