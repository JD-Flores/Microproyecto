function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const chartWrapper = document.querySelector(".chart-wrapper");
window.addEventListener("scroll", scrollHandler);
function scrollHandler() {
  if (isElementInViewport(chartWrapper)) chartWrapper.classList.add("in-view");
}