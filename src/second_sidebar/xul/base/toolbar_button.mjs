import { XULElement } from "./xul_element.mjs";

export class ToolbarButton extends XULElement {
  /**
   *
   * @param {object} params
   * @param {string?} params.id
   * @param {Array<string>} params.classList
   */
  constructor({ id = null, classList = [] } = {}) {
    super("toolbarbutton", { id, classList });
  }

  /**
   *
   * @param {string} url
   * @returns {ToolbarButton}
   */
  setIcon(url) {
    return this.setAttribute("image", url);
  }

  /**
   *
   * @returns {string}
   */
  getIcon() {
    return this.getAttribute("image");
  }

  /**
   *
   * @param {string} text
   * @returns {ToolbarButton}
   */
  setLabel(text) {
    this.setAttribute("label", text);
    return this;
  }

  /**
   *
   * @param {string} value
   * @returns {ToolbarButton}
   */
  setBadged(value) {
    return this.setAttribute("badged", value);
  }

  /**
   *
   * @param {string} value
   * @returns {ToolbarButton}
   */
  setType(value) {
    return this.setAttribute("type", value);
  }

  /**
   *
   * @param {string} value
   * @returns {ToolbarButton}
   */
  setTooltipText(text) {
    return this.setAttribute("tooltiptext", text);
  }

  /**
   *
   * @param {boolean} value
   * @returns {ToolbarButton}
   */
  setDisabled(value) {
    if (value) {
      this.setAttribute("disabled", true);
    } else {
      this.removeAttribute("disabled");
    }
    return true;
  }

  /**
   *
   * @returns {boolean}
   */
  isDisabled() {
    return this.getAttribute("disabled") === "true";
  }

  /**
   *
   * @param {boolean} value
   * @returns {ToolbarButton}
   */
  setChecked(value) {
    if (value) {
      this.setAttribute("checked", true);
    } else {
      this.removeAttribute("checked");
    }
    return true;
  }

  /**
   *
   * @returns {boolean}
   */
  isChecked() {
    return this.getAttribute("checked") === "true";
  }
}