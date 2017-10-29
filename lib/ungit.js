'use babel';

export default {
  statuses: [
    'modified',
    'added',
    'ignored',
    'removed',
    'renamed'],

  activate(state) {
    const classes = this.statuses.map(s => `status-${s}`);
    const removeClasses = () => {
      const selector = classes.map(c => `.${c}`).join(', ');
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.classList.remove(...classes);
      });
    };
    const rootElement = document.querySelector('body'); // ol.tree-view-root
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
