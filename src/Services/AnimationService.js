class AnimationService {
  animationText() {
    document.querySelector("quote__text").style.opacity = 0
    setTimeout(
      document.querySelector("quote__text").style.opacity = 1,
      1000
    )
  }
}

export default AnimationService