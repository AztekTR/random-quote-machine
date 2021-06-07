class ColorService {
  root = document.querySelector(":root")
  colors = [
    "#6DA8EB",
    "#FF851B",
    "#FF6F61",
    "#6B5B95",
    "#88B04B",
    "#D64E4B",
    "#92A8D1",
    "#D14DF5",
    "#0072B5",
    "#342224",
  ]

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  setRandomColor() {
    this.root.style.setProperty(
      "--main-color",
      this.colors[this.getRandomInt(0, this.colors.length)]
    )
  }
}

export default ColorService
