'use babel';

export default {
  statuses: [
    'modified',
    'added',
    'ignored',
    'removed',
    'renamed'],

  activate(state) {
    let classes = this.statuses.map(s => `status-${s}`);
    const removeClasses = () => {
      console.log('fired');
      let selector = classes.map(c => `.${c}`).join(', ');
      console.log(`selector: ${selector}`);
      let elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.classList.remove(...classes);
      });
    };
    let rootElement = document.querySelector('ol.tree-view-root');
    var observer = new MutationObserver(mutations => {
      removeClasses();
    });
    observer.observe(rootElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
    removeClasses();
  },

  deactivate() {
  },

  serialize() {
    return {};
  },
};
