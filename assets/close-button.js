class closeButton extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({
      mode: "open",
    })
  }
  connectedCallback() {
    this.template = document.createElement("template")

    this.template.innerHTML = `
    <p><button type="submit" class="btn-close">x</button></p>
      `

    this.styles = document.createElement("style")
    this.styles.innerHTML = `
        .btn-close {
          width: 20px;
          display: block;
          height: 20px;
        }
      `
    this.shadowRoot.appendChild(this.styles)
    this.shadowRoot.appendChild(this.template.content)
    window.addEventListener("deteleEvent", (e) => {
      console.log(e.detail.id)
      this.shadowRoot.querySelector(".btn-close").textContent = e.detail.id
    })
  }
}
customElements.define("close-button", closeButton)
// export default closeButton
