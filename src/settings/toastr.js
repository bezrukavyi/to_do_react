export const toastrDefaultOptions = (Component) => {
  return {
    timeOut: 3000,
    showCloseButton: true,
    preventDuplicates: true,
    position: "top-right",
    transitionIn: "fadeIn",
    transitionOut: "fadeOut",
    component: Component,
  }
}
