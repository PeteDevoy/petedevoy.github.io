class Navigation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        fetch('/components/navigation.html')
            .then(response => response.text())
            .then(html => {
                this.shadowRoot.innerHTML = html;
            });
    }
}

customElements.define('pd-nav', Navigation);

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        fetch('/components/header.html')
            .then(response => response.text())
            .then(html => {
                this.shadowRoot.innerHTML = html;
            });
    }
}

customElements.define('pd-header', Header);