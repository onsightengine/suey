/**
 * @description Suey
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/suey
 * @version     v0.1.27
 */
var img$9 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M184.001%2c292.65l-119.111%2c-0c-13.193%2c-0 -23.889%2c-10.695 -23.889%2c-23.889l-0%2c-26.85c-0%2c-13.194 10.696%2c-23.889 23.889%2c-23.889l46.704%2c-0.001l31.681%2c0l74.967%2c0l0%2c-78.878l-0%2c-71.489c-0%2c-7.129 2.832%2c-13.965 7.872%2c-19.004c5.038%2c-5.041 11.875%2c-7.873 19.002%2c-7.873l21.767%2c0c7.127%2c0 13.964%2c2.832 19.003%2c7.873c5.04%2c5.039 7.873%2c11.875 7.873%2c19.004l0%2c150.364l150.365%2c0c7.127%2c0 13.964%2c2.833 19.004%2c7.873c5.04%2c5.041 7.872%2c11.876 7.872%2c19.002l-0%2c20.88c-0%2c7.127 -2.832%2c13.963 -7.872%2c19.003c-5.041%2c5.04 -11.877%2c7.87 -19.004%2c7.87l-72.38%2c0l0.003%2c0.003l-77.988%2c0l0%2c154.707c0%2c6.33 -2.514%2c12.4 -6.99%2c16.876c-4.476%2c4.476 -10.546%2c6.99 -16.877%2c6.99l-27.761%2c0c-6.336%2c0 -12.411%2c-2.516 -16.892%2c-6.996c-4.48%2c-4.48 -6.996%2c-10.556 -6.996%2c-16.892l-0%2c-118.1l-0%2c-36.247l-0.001%2c-0.338l-0.339%2c0.001l-33.902%2c-0Z' style='fill:%23e6e6e6%3b'/%3e%3c/svg%3e";

var img$8 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M373.189%2c648.684c-0%2c-0 -237.09%2c-138.996 -258.087%2c-117.999c-20.997%2c20.997 212.331%2c288.419 212.331%2c288.419c1.975%2c3.009 4.284%2c5.857 6.926%2c8.499c10.698%2c10.698 24.796%2c15.945 38.83%2c15.71c14.035%2c0.235 28.132%2c-5.012 38.831%2c-15.71c2.641%2c-2.642 4.95%2c-5.49 6.926%2c-8.499c-0%2c-0 423.255%2c-489.7 496.91%2c-611.246c9.004%2c-14.859 -15.991%2c-40.415 -34.446%2c-27.458c-108.024%2c75.837 -508.221%2c468.284 -508.221%2c468.284Z' style='fill:%23ebebeb%3b'/%3e%3c/svg%3e";

var img$7 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M386.576%2c386.574c-12.567%2c12.568 -33.514%2c12.568 -46.08%2c0.002l-84.496%2c-84.498l-84.497%2c84.498c-12.566%2c12.566 -33.512%2c12.566 -46.079%2c-0c-12.566%2c-12.568 -12.566%2c-33.513 0%2c-46.079l84.497%2c-84.496l-84.497%2c-84.498c-12.566%2c-12.566 -12.566%2c-33.511 0%2c-46.079c12.567%2c-12.565 33.513%2c-12.565 46.079%2c-0l84.496%2c84.498l84.497%2c-84.498c12.566%2c-12.565 33.512%2c-12.565 46.079%2c-0c12.566%2c12.568 12.566%2c33.513 0%2c46.079l-84.497%2c84.496l84.498%2c84.498c12.565%2c12.566 12.565%2c33.51 0%2c46.077Z' style='fill:white%3b'/%3e%3c/svg%3e";

var img$6 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M202.677%2c396c-6.857%2c0 -13.038%2c-4.13 -15.662%2c-10.465c-2.624%2c-6.335 -1.174%2c-13.626 3.674%2c-18.474c44.911%2c-44.911 130.904%2c-130.904 176.025%2c-176.025c4.906%2c-4.906 12.285%2c-6.374 18.696%2c-3.719c6.41%2c2.656 10.59%2c8.911 10.59%2c15.85c0%2c45.295 0%2c117.022 0%2c159.048c0%2c18.659 -15.126%2c33.785 -33.785%2c33.785l-159.538%2c0Z' style='fill:white%3b'/%3e%3cpath d='M303.059%2c116c6.881%2c-0 13.084%2c4.145 15.717%2c10.502c2.634%2c6.357 1.178%2c13.674 -3.687%2c18.54c-43.748%2c43.748 -126.088%2c126.087 -169.914%2c169.913c-4.888%2c4.888 -12.239%2c6.35 -18.625%2c3.705c-6.386%2c-2.645 -10.55%2c-8.877 -10.55%2c-15.789c-0%2c-43.783 -0%2c-112.154 -0%2c-152.928c-0%2c-18.746 15.197%2c-33.943 33.943%2c-33.943l153.116%2c-0Z' style='fill:white%3b'/%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M256%2c16c132.46%2c-0 240%2c107.54 240%2c240c0%2c132.46 -107.54%2c240 -240%2c240c-132.46%2c0 -240%2c-107.54 -240%2c-240c0%2c-132.46 107.54%2c-240 240%2c-240Zm0%2c57.6c-100.669%2c0 -182.4%2c81.731 -182.4%2c182.4c0%2c100.669 81.731%2c182.4 182.4%2c182.4c100.669%2c0 182.4%2c-81.731 182.4%2c-182.4c0%2c-100.669 -81.731%2c-182.4 -182.4%2c-182.4Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256.001%2c320.462c-12.011%2c-0 -21.749%2c-9.737 -21.749%2c-21.749l0%2c-9.225c0%2c-21.468 13.519%2c-40.67 33.639%2c-47.784c15.135%2c-5.352 24.887%2c-20.319 23.715%2c-36.397c-1.284%2c-17.606 -15.538%2c-31.752 -33.157%2c-32.906c-18.636%2c-1.231 -35.239%2c12.228 -37.805%2c30.616c-0.23%2c1.644 -0.346%2c3.329 -0.346%2c5.008c0%2c12.011 -9.737%2c21.749 -21.749%2c21.749c-12.012%2c-0 -21.749%2c-9.738 -21.749%2c-21.749c-0%2c-3.682 0.257%2c-7.389 0.763%2c-11.018c5.698%2c-40.84 42.476%2c-70.72 83.728%2c-68.012c39.162%2c2.565 70.846%2c34.012 73.699%2c73.149c2.593%2c35.571 -19.036%2c68.702 -52.598%2c80.57c-2.776%2c0.981 -4.641%2c3.703 -4.641%2c6.774l-0%2c9.225c-0%2c12.012 -9.738%2c21.749 -21.75%2c21.749Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256.001%2c390.135c-14.739%2c0 -26.687%2c-11.948 -26.687%2c-26.687l-0%2c-0.221c-0%2c-14.739 11.948%2c-26.688 26.687%2c-26.688c14.739%2c0 26.688%2c11.949 26.688%2c26.688l-0%2c0.221c0.001%2c14.739 -11.948%2c26.687 -26.688%2c26.687Z' style='fill:%237f7f7f%3b'/%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M256%2c16c132.46%2c0 240%2c107.54 240%2c240c0%2c132.46 -107.54%2c240 -240%2c240c-132.46%2c0 -240%2c-107.54 -240%2c-240c0%2c-132.46 107.54%2c-240 240%2c-240Zm-0%2c57.6c-100.669%2c0 -182.4%2c81.731 -182.4%2c182.4c0%2c100.669 81.731%2c182.4 182.4%2c182.4c100.669%2c0 182.4%2c-81.731 182.4%2c-182.4c-0%2c-100.669 -81.731%2c-182.4 -182.4%2c-182.4Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256%2c140.739c18.48%2c0 33.6%2c15.12 33.6%2c33.6c0%2c18.48 -15.12%2c33.6 -33.6%2c33.6c-18.48%2c0 -33.6%2c-15.12 -33.6%2c-33.6c0%2c-18.48 15.12%2c-33.6 33.6%2c-33.6Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256%2c219.364c15.464%2c0 28%2c12.536 28%2c28l0%2c100.511c-0%2c15.464 -12.536%2c28 -28%2c28l-0%2c-0c-15.464%2c-0 -28%2c-12.536 -28%2c-28l0%2c-100.511c0%2c-15.464 12.536%2c-28 28%2c-28l0%2c0Z' style='fill:%237f7f7f%3b'/%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M335.44%2c16c12.788%2c-0.01 25.064%2c5.091 34.08%2c14.16l112.32%2c112.32c9.069%2c9.016 14.17%2c21.292 14.16%2c34.08l-0%2c158.88c0.01%2c12.788 -5.091%2c25.064 -14.16%2c34.08l-112.32%2c112.32c-9.016%2c9.069 -21.292%2c14.17 -34.08%2c14.16l-158.88%2c-0c-12.788%2c0.01 -25.064%2c-5.091 -34.08%2c-14.16l-112.32%2c-112.32c-9.069%2c-9.016 -14.17%2c-21.292 -14.16%2c-34.08l0%2c-158.88c-0.01%2c-12.788 5.091%2c-25.064 14.16%2c-34.08l112.32%2c-112.32c9.016%2c-9.069 21.292%2c-14.17 34.08%2c-14.16l158.88%2c0Zm-259.497%2c162.155c-1.5%2c1.5 -2.343%2c3.535 -2.343%2c5.657c-0%2c19.996 -0%2c124.38 -0%2c144.376c-0%2c2.122 0.843%2c4.157 2.343%2c5.657c14.15%2c14.15 88.062%2c88.062 102.212%2c102.212c1.5%2c1.5 3.535%2c2.343 5.657%2c2.343c19.996%2c0 124.38%2c0 144.376%2c0c2.122%2c0 4.157%2c-0.843 5.657%2c-2.343c14.15%2c-14.15 88.062%2c-88.062 102.212%2c-102.212c1.5%2c-1.5 2.343%2c-3.535 2.343%2c-5.657c0%2c-19.996 0%2c-124.38 0%2c-144.376c0%2c-2.122 -0.843%2c-4.157 -2.343%2c-5.657c-14.15%2c-14.15 -88.062%2c-88.062 -102.212%2c-102.212c-1.5%2c-1.5 -3.535%2c-2.343 -5.657%2c-2.343c-19.996%2c-0 -124.38%2c-0 -144.376%2c-0c-2.122%2c-0 -4.157%2c0.843 -5.657%2c2.343c-14.15%2c14.15 -88.062%2c88.062 -102.212%2c102.212Z' style='fill:grey%3b'/%3e%3cpath d='M313.604%2c339.978c-7%2c0.022 -13.725%2c-2.762 -18.662%2c-7.726l-38.941%2c-38.928l-38.941%2c38.947c-4.948%2c4.948 -11.665%2c7.73 -18.662%2c7.73c-14.478%2c-0 -26.392%2c-11.914 -26.392%2c-26.392c0%2c-6.997 2.783%2c-13.714 7.73%2c-18.662l38.941%2c-38.947l-38.947%2c-38.941c-4.948%2c-4.948 -7.73%2c-11.665 -7.73%2c-18.662c0%2c-14.478 11.914%2c-26.392 26.392%2c-26.392c6.997%2c0 13.714%2c2.783 18.662%2c7.73l38.947%2c38.941l38.941%2c-38.947c4.948%2c-4.948 11.665%2c-7.73 18.662%2c-7.73c14.478%2c0 26.392%2c11.914 26.392%2c26.392c-0%2c6.997 -2.783%2c13.714 -7.73%2c18.662l-38.941%2c38.947l38.947%2c38.941c4.946%2c4.946 7.728%2c11.661 7.728%2c18.656c0%2c14.472 -11.909%2c26.381 -26.382%2c26.381c-0.002%2c0 -0.014%2c0 -0.014%2c0Z' style='fill:%237f7f7f%3bfill-rule:nonzero%3b'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M217.561%2c65.75c7.968%2c-13.681 22.607%2c-22.096 38.439%2c-22.096c15.832%2c-0 30.471%2c8.415 38.439%2c22.096l195.518%2c335.729c8.012%2c13.759 8.06%2c30.751 0.125%2c44.554c-7.935%2c13.804 -22.642%2c22.313 -38.564%2c22.313l-391.036%2c0c-15.922%2c0 -30.629%2c-8.509 -38.564%2c-22.313c-7.935%2c-13.803 -7.887%2c-30.795 0.125%2c-44.554l195.518%2c-335.729Zm-136.351%2c340.199c-1.08%2c1.856 -1.087%2c4.148 -0.017%2c6.01c1.071%2c1.861 3.055%2c3.009 5.202%2c3.009c52.447%2c0 286.763%2c0 339.21%2c0c2.147%2c0 4.131%2c-1.148 5.202%2c-3.009c1.07%2c-1.862 1.063%2c-4.154 -0.017%2c-6.01c-26.302%2c-45.163 -143.46%2c-246.339 -169.605%2c-291.233c-1.075%2c-1.845 -3.049%2c-2.98 -5.185%2c-2.98c-2.136%2c-0 -4.11%2c1.135 -5.185%2c2.98c-26.145%2c44.894 -143.303%2c246.07 -169.605%2c291.233Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M283.679%2c215.374l-7.778%2c93.106c-0.813%2c9.752 -8.939%2c17.298 -18.807%2c17.298c-9.868%2c-0 -17.994%2c-7.546 -18.807%2c-17.298l-7.778%2c-93.106c-1.277%2c-15.556 10.913%2c-28.907 26.585%2c-28.907c14.86%2c0 26.701%2c12.074 26.701%2c26.702c0%2c0.696 0%2c1.509 -0.116%2c2.205Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M257.093%2c385.058c-12.952%2c0 -23.549%2c-10.597 -23.549%2c-23.549c-0%2c-12.952 10.597%2c-23.549 23.549%2c-23.549c12.952%2c-0 23.549%2c10.597 23.549%2c23.549c0%2c12.952 -10.597%2c23.549 -23.549%2c23.549Z' style='fill:%237f7f7f%3b'/%3e%3c/svg%3e";

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9klEQVRYhe2W3ZGbMBSFD5m8Sx1AB5AK5A5IB2wHuAO8DcSTCiiBpAK5A+EKoAM5FZx9sKQlNllkvDPOg+/MnTFYuucT92eUkEzwQPvySPEnwBPgvwD4umJPCqAGUFy8PwH4DeAXgD+xwZIb58APAFsA6Psep9Mp/CGlRFEUHuQVwM+oiCSTSO9IsmkapmlKAFeepim7rqOzfUzcWABNkmVZzgpfel3XHuLlMwB2/uReQCnFYRg4tWEYWNd1WNO2LUlaksW9ANRah8D7/T5oOjjvHckAIYTwkN09AAVJKqUIgFVVLeW3Jck8zy9TIdcCvJAMp3cnsjMBMyduSLJtWwJgnucewPBcRzu3NuxdmgNqHMfwkGUZABxw3eftOI4bv9a35/F4xOFwANzM2Gw2G5zb9L1FF76Anubf2W5mnbHWhk8/564oSfL7LSnohmEIQYwx/yoq+RHERPyqLZcAtiQphCAANk3jA8211izER+IxABn5PgOEELTW+oDbJYgl8RiAhGRrrQ3jN01Tnwpvhn/XhXTvFsVjASRJa4wJEEIIVlXFpmmotfZC8mLPdkk8FsAPpGGuyCZ1ERPnymMvJEcA36SUfd/30FqjLEsopfxsWG83EkuX71CJzvTaL3DOwzpTk989brgFTe0egE+xh19KnwBPgDcgcTvPHOiirwAAAABJRU5ErkJggg==";

const IMAGE_ADD = img$9;
const IMAGE_CHECK = img$8;
const IMAGE_CLOSE = img$7;
const IMAGE_EMPTY = img$6;
const IMAGE_EXPAND = img$5;
const IMAGE_QUESTION = img$4;
const IMAGE_INFO = img$3;
const IMAGE_ERROR = img$2;
const IMAGE_WARNING = img$1;
const CURSOR_ROTATE = img;
const GRID_SIZE = 25;
const MOUSE_CLICK = 500;
const MOUSE_SLOP_SMALL = 2;
const MOUSE_SLOP_LARGE = 5;
const TOOLTIP_Y_OFFSET = '0.3em';
const BACKGROUNDS = {
    DARK:               0,
    MID:                1,
    LIGHT:              2,
    FADED:              3,
};
const THEMES = {
    CLASSIC:            0x00aacc,
    STEEL:              0x00c8c3,
    NAVY:               0x1a48cf,
    GRAPE:              0x960ef4,
    FLAMINGO:           0xff13ed,
    RUST:               0xaf1c19,
    CARROT:             0xfe7700,
    COFFEE:             0xb16f1b,
    GOLDEN:             0xd1d855,
    EMERALD:            0x1aca22,
    RANDOM:             -1,
};
const TRAIT = {
    SHADOW:             'shadow',
    DARKNESS:           'darkness',
    BACKGROUND_DARK:    'background-dark',
    BACKGROUND_LIGHT:   'background-light',
    BUTTON_DARK:        'button-dark',
    BUTTON_LIGHT:       'button-light',
    TEXT_DARK:          'text-dark',
    TEXT:               'text',
    TEXT_LIGHT:         'text-light',
    BLACKLIGHT:         'blacklight',
    DARKLIGHT:          'darklight',
    MIDLIGHT:           'midlight',
    HIGHLIGHT:          'highlight',
    ICON_DARK:          'icon-dark',
    ICON:               'icon',
    ICON_LIGHT:         'icon-light',
    COMPLEMENT:         'complement',
    TRIADIC1:           'triadic1',
    TRIADIC2:           'triadic2',
    TRIADIC3:           'triadic3',
    TRIADIC4:           'triadic4',
    TRIADIC5:           'triadic5',
    TRIADIC6:           'triadic6',
};
const PANEL_STYLES = {
    NONE:           'none',
    SIMPLE:         'simple',
    FANCY:          'fancy',
};
const LEFT_SPACING = {
    TABS:           'tabs',
    NORMAL:         'normal',
};
const CLOSE_SIDES = {
    LEFT:           'left',
    RIGHT:          'right',
    BOTH:           'both',
    NONE:           'none',
};
const CORNER_BUTTONS = {
    CLOSE:          'close',
    MAX:            'max',
};
const DOCK_SIDES = {
    LEFT:           'left',
    RIGHT:          'right',
    TOP:            'top',
    BOTTOM:         'bottom',
};
const RESIZERS = {
    TOP:            'top',
    BOTTOM:         'bottom',
    LEFT:           'left',
    RIGHT:          'right',
    TOP_LEFT:       'top-left',
    TOP_RIGHT:      'top-right',
    BOTTOM_LEFT:    'bottom-left',
    BOTTOM_RIGHT:   'bottom-right',
};
const TAB_SIDES = {
    LEFT:           'left',
    RIGHT:          'right',
    TOP:            'top',
    BOTTOM:         'bottom',
};
const QUESTION_ICONS = {
    QUESTION:       'question',
    INFO:           'info',
    ERROR:          'error',
    WARNING:        'warning',
};
const QUESTION_COLORS = {
    ICON:           'icon',
    COMPLEMENT:     'complement',
    TRIADIC1:       'triadic1',
    TRIADIC2:       'triadic2',
    TRIADIC3:       'triadic3',
    TRIADIC4:       'triadic4',
    BLUE:           'blue',
    RED:            'red',
    GREEN:          'green',
    YELLOW:         'yellow',
};
const BUTTON_TYPES = {
    OKAY:           { text: 'Okay',     value: 0 },
    YES:            { text: 'Yes',      value: 1 },
    NO:             { text: 'No',       value: 2 },
    CANCEL:         { text: 'Cancel',   value: 3 },
};
const GRAPH_LINE_TYPES = {
    STRAIGHT:       'straight',
    CURVE:          'curve',
    ZIGZAG:         'zigzag',
};
const GRAPH_GRID_TYPES = {
    LINES:          'lines',
    DOTS:           'dots',
};
const NODE_TYPES = {
    INPUT:          'input',
    OUTPUT:         'output',
};

class SignalBinding {
    active = true;
    params = null;
    onceOnly = false;
    constructor(signal, listener, onceOnly, priority = 0) {
        this.listener = listener;
        this.onceOnly = onceOnly;
        this.signal = signal;
        this.priority = priority;
    }
    execute(paramsArr) {
        let handlerReturn;
        let params;
        if (this.active && !!this.listener) {
            params = this.params ? this.params.concat(paramsArr) : paramsArr;
            handlerReturn = this.listener.apply(null, params);
            if (this.onceOnly) this.detach();
        }
        return handlerReturn;
    }
    detach() {
        return this.isBound() ? this.signal.remove(this.listener) : null;
    }
    isBound() {
        return (!!this.signal && !!this.listener);
    }
    isOnce() {
        return this.onceOnly;
    }
    getListener() {
        return this.listener;
    }
    getSignal() {
        return this.signal;
    }
    destroy() {
        delete this.signal;
        delete this.listener;
    }
    toString() {
        return '[SignalBinding onceOnly:' + this.onceOnly +', isBound:'+ this.isBound() +', active:' + this.active + ']';
    }
}
const _enabled = [];
const _missed = {};
let _time = 0;
class Signal {
    VERSION = '1.0.2';
    active = true;
    memorize = false;
    shouldPropagate = true;
    static disableSignals() {
        if (_enabled.length === 0) {
            for (const key in _missed) { if (_missed.hasOwnProperty(key)) delete _missed[key]; }
            _time = 0;
        }
        _enabled.push('false');
    }
    static enableSignals() {
        _enabled.pop();
        return (_enabled.length > 0) ? {} : Object.fromEntries(Object.entries(_missed).sort(([, a], [, b]) => a.time - b.time));
    }
    constructor(moniker) {
        this._bindings = [];
        this._prevParams = null;
        this.moniker = moniker;
    }
    #registerListener(listener, onceOnly, priority) {
        let prevIndex = this.#indexOfListener(listener);
        let binding;
        if (prevIndex !== -1) {
            binding = this._bindings[prevIndex];
            if (binding.isOnce() !== onceOnly) {
                throw new Error('You cannot add' + (onceOnly ? '' : 'Once') +'() then add'+ (!onceOnly ? '' : 'Once') +'() the same listener without removing the relationship first');
            }
        } else {
            binding = new SignalBinding(this, listener, onceOnly, priority);
            let n = this._bindings.length;
            do { --n; } while (this._bindings[n] && binding.priority <= this._bindings[n].priority);
            this._bindings.splice(n + 1, 0, binding);
        }
        if (this.memorize && this._prevParams){
            binding.execute(this._prevParams);
        }
        return binding;
    }
    #indexOfListener(listener) {
        let n = this._bindings.length;
        let cur;
        while (n--) {
            cur = this._bindings[n];
            if (cur.listener === listener) return n;
        }
        return -1;
    }
    has(listener) {
        return this.#indexOfListener(listener) !== -1;
    }
    add(listener, priority) {
        validateListener(listener, 'add');
        return this.#registerListener(listener, false, priority);
    }
    addOnce(listener, priority) {
        validateListener(listener, 'addOnce');
        return this.#registerListener(listener, true, priority);
    }
    remove(listener) {
        validateListener(listener, 'remove');
        const index = this.#indexOfListener(listener);
        if (index !== -1) {
            this._bindings[index].destroy();
            this._bindings.splice(index, 1);
        }
        return listener;
    }
    removeAll() {
        let n = this._bindings.length;
        while (n--) this._bindings[n].destroy();
        this._bindings.length = 0;
    }
    getNumListeners() {
        return this._bindings.length;
    }
    halt() {
        this.shouldPropagate = false;
    }
    dispatch() {
        if (!this.active) return;
        if (_enabled.length > 0) {
            if (!(this.moniker in _missed)) _missed[this.moniker] = { time: 0, args: [] };
            _missed[this.moniker].args.push([ ...arguments ]);
            _missed[this.moniker].time = _time++;
            return;
        }
        let paramsArr = [ ...arguments ];
        let n = this._bindings.length;
        if (this.memorize) this._prevParams = paramsArr;
        if (!n) return;
        const bindings = [ ...this._bindings ];
        this.shouldPropagate = true;
        do { n--; } while (bindings[n] && this.shouldPropagate && bindings[n].execute(paramsArr) !== false);
    }
    forget() {
        this._prevParams = null;
    }
    dispose() {
        this.removeAll();
        delete this._bindings;
        delete this._prevParams;
    }
    toString() {
        return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
    }
}
function validateListener(listener, fnName) {
    if (typeof listener !== 'function') {
        throw new Error(`'listener' is a required param of ${fnName}() and should be a Function!`);
    }
}

class Element {
    constructor(domElement) {
        if (domElement == null) {
            console.trace('Element.constructor: No HTMLElement provided!');
            domElement = document.createElement('div');
        }
        this.isElement = true;
        let dom = domElement;
        let suey = this;
        this.parent = undefined;
        this.children = [];
        this.slots = [];
        this.contents = function() { return suey; };
        Object.defineProperties(this, {
            dom: {
                get: function() { return dom; },
                set: function(value) { dom = value; },
            },
            id: {
                configurable: true,
                get: function() { return dom.id; },
                set: function(value) { dom.id = value; },
            },
            name: {
                get: function() { return dom.name ?? '???'; },
                set: function(value) { dom.name = String(value); } ,
            },
        });
        Object.defineProperties(dom, {
            suey: {
                get: function() { return suey; },
            },
        });
        this.on('destroy', () => {
            for (const slot of suey.slots) {
                if (typeof slot.detach === 'function') slot.detach();
                if (typeof slot.destroy === 'function') slot.destroy();
            }
            suey.slots.length = 0;
        });
    }
    setID(id) {
        this.id = id;
        return this;
    }
    addSlot(slot) {
        if (slot instanceof SignalBinding) {
            this.slots.push(slot);
        } else {
            console.warn(`Element.addSlot(): ID: '${this.id}' / NAME: '${this.name}' failed to add slot`, slot);
        }
    }
    add(...elements) {
        for (const element of elements) {
            addToParent(this.contents(), element);
        }
        return this;
    }
    addToSelf(...elements) {
        for (const element of elements) {
            addToParent(this, element);
        }
        return this;
    }
    clearContents() {
        destroyChildren(this.contents(), false );
        return this;
    }
    destroy() {
        destroyChildren(this, true );
        return this;
    }
    detach(...elements) {
        const removedElements = [];
        for (const element of elements) {
            let removed = removeFromParent(this.contents(), element, false );
            if (!removed) removed = removeFromParent(this, element, false );
            if (!removed) {  }
            removedElements.push(removed);
        }
        if (removedElements.length === 0) return undefined;
        if (removedElements.length === 1) return removedElements[0];
        return removedElements;
    }
    remove(...elements) {
        const removedElements = [];
        for (const element of elements) {
            let removed = removeFromParent(this.contents(), element, true );
            if (!removed) removed = removeFromParent(this, element, true );
            if (!removed) {  }
            removedElements.push(removed);
        }
        if (removedElements.length === 0) return undefined;
        if (removedElements.length === 1) return removedElements[0];
        return removedElements;
    }
    removeSelf() {
        this.destroy();
        const parent = this.parent ?? this.dom?.parentElement;
        removeFromParent(parent, this, false );
        return this;
    }
    setClass(...classNames) {
        this.dom.className = '';
        return this.addClass(...classNames);
    }
    addClass(...classNames) {
        for (const className of classNames) {
            if (className && typeof className === 'string' && className != '') {
                this.dom.classList.add(className);
            }
        }
        return this;
    }
    hasClass(className) {
        return this.dom.classList.contains(className);
    }
    hasClassWithString(substring) {
        substring = String(substring).toLowerCase();
        const classArray = [ ...this.dom.classList ];
        for (let i = 0; i < classArray.length; i++) {
            const className = classArray[i];
            if (className.toLowerCase().includes(substring)) return true;
        }
        return false;
    }
    removeClass(...classNames) {
        for (const className of classNames) {
            this.dom.classList.remove(className);
        }
        return this;
    }
    toggleClass(className) {
        if (className != null && typeof className === 'string' && className !== '') {
            if (this.hasClass(className)) this.removeClass(className);
            else this.addClass(className);
        }
        return this;
    }
    wantsClass(className, wants = true) {
        if (className && className != '') {
            if (wants) this.addClass(className);
            else this.removeClass(className);
        }
        return this;
    }
    setAttribute(attrib, value) {
        this.dom.setAttribute(attrib, value);
    }
    setDisabled(value = true) {
        if (value) this.addClass('suey-disabled');
        else this.removeClass('suey-disabled');
        this.dom.disabled = value;
        return this;
    }
    selectable(allowSelection) {
        if (allowSelection) this.removeClass('suey-unselectable');
        else this.addClass('suey-unselectable');
        return this;
    }
    hide(dispatchEvent = true) {
        if (this.isHidden()) return;
        if (dispatchEvent) this.dom.dispatchEvent(new Event('hidden'));
        this.addClass('suey-hidden');
        this.setStyle('display', 'none');
    }
    display(dispatchEvent = true) {
        if (this.isDisplayed() && this.hasClass('suey-hidden') === false) return;
        this.removeClass('suey-hidden');
        this.setStyle('display', '');
        if (dispatchEvent) this.dom.dispatchEvent(new Event('displayed'));
    }
    isDisplayed() {
        return getComputedStyle(this.dom).display != 'none';
    }
    isHidden() {
        return getComputedStyle(this.dom).display == 'none';
    }
    allowFocus() {
        this.dom.tabIndex = 0;
    }
    allowMouseFocus() {
        this.dom.tabIndex = -1;
    }
    focus() {
        this.dom.focus();
    }
    blur() {
        this.dom.blur();
    }
    setTextContent(value) {
        if (value != undefined) this.contents().dom.textContent = value;
        return this;
    }
    getTextContent() {
        return this.contents().dom.textContent;
    }
    setInnerText(value) {
        if (value != undefined) this.contents().dom.innerText = value;
        return this;
    }
    getInnerText() {
        return this.contents().dom.innerText;
    }
    setInnerHtml(value) {
        if (value === undefined || value === null) value = '';
        if (typeof this.contents().dom.setHTML === 'function') {
            this.contents().dom.setHTML(value);
        } else {
            this.contents().dom.innerHTML = value;
        }
        return this;
    }
    getInnerHtml() {
        return this.contents().dom.innerHTML;
    }
    setStyle() {
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.dom.style[style] = value;
        }
        return this;
    }
    setContentsStyle() {
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.contents().dom.style[style] = value;
        }
        return this;
    }
    setColor() {
        console.error(`${this.constructor.name}.setColor(): Method must be reimplemented from Element`);
        return this;
    }
    getLeft() {
        return this.dom.getBoundingClientRect().left;
    }
    getTop() {
        return this.dom.getBoundingClientRect().top;
    }
    getWidth() {
        return this.dom.getBoundingClientRect().width;
    }
    getHeight() {
        return this.dom.getBoundingClientRect().height;
    }
    getRelativePosition() {
        const rect = this.dom.getBoundingClientRect();
        let offsetParent = this.dom.offsetParent;
        while (offsetParent && getComputedStyle(offsetParent).position === 'static') {
            offsetParent = offsetParent.offsetParent;
        }
        if (!offsetParent) {
            return { left: rect.left, top: rect.top };
        }
        const parentRect = offsetParent.getBoundingClientRect();
        const relativeLeft = rect.left - parentRect.left;
        const relativeTop = rect.top - parentRect.top;
        return { left: relativeLeft, top: relativeTop };
    }
    traverse(callback, applyToSelf = true) {
        if (applyToSelf) callback(this);
        if (this.children) {
            for (const child of this.children) {
                child.traverse(callback, true);
            }
        }
    }
    traverseAncestors(callback, applyToSelf = true) {
        if (applyToSelf) callback(this);
        if (this.parent) this.parent.traverseAncestors(callback, true);
    }
    on(event, callback, options = {}) {
        if (typeof options !== 'object') options = {};
        if (typeof callback !== 'function') {
            console.warn(`Element.on(): No callback function provided for '${event}'`);
        } else {
            const eventName = event.toLowerCase();
            const eventHandler = callback.bind(this);
            const dom = this.dom;
            if (options.once || eventName === 'destroy') {
                options.once = true;
                dom.addEventListener(eventName, eventHandler, options);
            } else {
                dom.addEventListener(eventName, eventHandler, options);
                dom.addEventListener('destroy', () => dom.removeEventListener(eventName, eventHandler, options), { once: true });
            }
        }
        return this;
    }
}
function addToParent(parent, element) {
    if (!parent || !element) return;
    if (element.isElement) {
        if (parent.isElement && element.parent === parent) return;
        if (element.parent && element.parent.isElement) {
            removeFromParent(element.parent, element, false);
        }
    }
    const parentDom = parent.isElement ? parent.dom : parent;
    const elementDom = element.isElement ? element.dom : element;
    try { if (parentDom) parentDom.appendChild(elementDom); }
    catch (error) {  }
    if (element.isElement) {
        let hasIt = false;
        for (const child of parent.children) {
            if (child.dom.isSameNode(element.dom)) { hasIt = true; break; }
        }
        if (!hasIt) parent.children.push(element);
        element.parent = parent;
    }
    if (elementDom instanceof HTMLElement) {
        elementDom.dispatchEvent(new Event('parent-changed'));
    }
}
function destroyChildren(element, destroySelf = true) {
    if (!element) return;
    const dom = element.isElement ? element.dom : element;
    if (!(dom instanceof HTMLElement)) return;
    if (destroySelf) {
        if (!dom.wasDestroyed) {
            dom.dispatchEvent(new Event('destroy'));
            dom.wasDestroyed = true;
        }
    }
    for (let i = dom.children.length - 1; i >= 0; i--) {
        const child = dom.children[i];
        destroyChildren(child, true );
        try { dom.removeChild(child); } catch (error) {  }
    }
    if (dom.suey && dom.suey.isElement) dom.suey.children.length = 0;
}
function removeFromParent(parent, element, destroy = true) {
    if (!parent || !element) return undefined;
    if (destroy) destroyChildren(element, true );
    if (element.isElement && parent.isElement) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i];
            if (child.dom.isSameNode(element.dom)) {
                parent.children.splice(i, 1);
                element.parent = undefined;
            }
        }
    }
    try {
        if (parent.isElement) parent = parent.dom;
        if (parent instanceof HTMLElement) {
            const removed = parent.removeChild(element.isElement ? element.dom : element);
            return (removed && removed.suey) ? removed.suey : removed;
        }
    } catch (error) {  }
}

class Vector2 {
    constructor(x, y) {
        if (typeof x === 'object') {
            this.x = x.x;
            this.y = x.y;
        } else {
            this.x = x || 0;
            this.y = y || 0;
        }
    }
    set(x, y) {
        if (typeof x === 'object') return this.copy(x);
        this.x = x;
        this.y = y;
        return this;
    }
    setScalar(scalar) {
        this.x = scalar;
        this.y = scalar;
        return this;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    copy(vec, y) {
        if (typeof vec === 'object') {
            this.x = vec.x;
            this.y = vec.y;
        } else {
            this.x = vec;
            this.y = y;
        }
        return this;
    }
    add(x, y) {
        if (typeof x === 'object') {
            this.x += x.x;
            this.y += x.y;
        } else {
            this.x += x;
            this.y += y;
        }
        return this;
    }
    addScalar(scalar) {
        this.x += scalar;
        this.y += scalar;
        return this;
    }
    addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this;
    }
    addScaledVector(vec, scale) {
        this.x += vec.x * scale;
        this.y += vec.y * scale;
        return this;
    }
    sub(x, y) {
        if (typeof x === 'object') {
            this.x -= x.x;
            this.y -= x.y;
        } else {
            this.x -= x;
            this.y -= y;
        }
        return this;
    }
    subScalar(scalar) {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    }
    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this;
    }
    multiply(x, y) {
        if (typeof x === 'object') {
            this.x *= x.x;
            this.y *= x.y;
        } else {
            this.x *= x;
            this.y *= y;
        }
        return this;
    }
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    divide(x, y) {
        if (typeof x === 'object') {
            this.x /= x.x;
            this.y /= x.y;
        } else {
            this.x /= x;
            this.y /= y;
        }
        return this;
    }
    divideScalar(scalar) {
        return this.multiplyScalar(1 / scalar);
    }
    min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        return this;
    }
    max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        return this;
    }
    clamp(minv, maxv) {
        this.x = Math.max(minv.x, Math.min(maxv.x, this.x));
        this.y = Math.max(minv.y, Math.min(maxv.y, this.y));
        return this;
    }
    clampScalar(minVal, maxVal) {
        this.x = Math.max(minVal, Math.min(maxVal, this.x));
        this.y = Math.max(minVal, Math.min(maxVal, this.y));
        return this;
    }
    clampLength(min, max) {
        const length = this.length();
        return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
    }
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    cross(v) {
        return this.x * v.y - this.y * v.x;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    angle(forcePositive) {
        let angle = Math.atan2(this.y, this.x);
        if (forcePositive && angle < 0) angle += 2 * Math.PI;
        return angle;
    }
    angleBetween(v) {
        const dot = this.dot(v);
        const magnitudes = this.length() * v.length();
        const clampedDot = Math.min(Math.max(dot / magnitudes, -1), 1);
        return Math.acos(clampedDot);
    }
    rotateAround(center, angle) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const x = this.x - center.x;
        const y = this.y - center.y;
        this.x = x * c - y * s + center.x;
        this.y = x * s + y * c + center.y;
    }
    distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return dx * dx + dy * dy;
    }
    manhattanDistanceTo(v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
    }
    setLength(length) {
        return this.normalize().multiplyScalar(length);
    }
    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        return this;
    }
    equals(v) {
        return ((v.x === this.x) && (v.y === this.y));
    }
    toArray() {
        return [ this.x, this.y ];
    }
    fromArray(array) {
        this.set(array[0], array[1]);
        return this;
    }
}

class Matrix2 {
    constructor(values) {
        if (Array.isArray(values)) this.m = [ ...values ];
        else this.identity();
    }
    copy(mat) {
        this.m = [ ...mat.m ];
        return this;
    }
    clone() {
        return new Matrix2([ ...this.m ]);
    }
    identity() {
        this.m = [ 1, 0, 0, 1, 0, 0 ];
        return this;
    }
    multiply(mat) {
        const m0 = this.m[0] * mat.m[0] + this.m[2] * mat.m[1];
        const m1 = this.m[1] * mat.m[0] + this.m[3] * mat.m[1];
        const m2 = this.m[0] * mat.m[2] + this.m[2] * mat.m[3];
        const m3 = this.m[1] * mat.m[2] + this.m[3] * mat.m[3];
        const m4 = this.m[0] * mat.m[4] + this.m[2] * mat.m[5] + this.m[4];
        const m5 = this.m[1] * mat.m[4] + this.m[3] * mat.m[5] + this.m[5];
        this.m = [ m0, m1, m2, m3, m4, m5 ];
        return this;
    }
    premultiply(mat) {
        const m0 = mat.m[0] * this.m[0] + mat.m[2] * this.m[1];
        const m1 = mat.m[1] * this.m[0] + mat.m[3] * this.m[1];
        const m2 = mat.m[0] * this.m[2] + mat.m[2] * this.m[3];
        const m3 = mat.m[1] * this.m[2] + mat.m[3] * this.m[3];
        const m4 = mat.m[0] * this.m[4] + mat.m[2] * this.m[5] + mat.m[4];
        const m5 = mat.m[1] * this.m[4] + mat.m[3] * this.m[5] + mat.m[5];
        this.m = [ m0, m1, m2, m3, m4, m5 ];
    }
    compose(px, py, sx, sy, ox, oy, rot) {
        this.m = [ 1, 0, 0, 1, px, py ];
        if (rot !== 0) {
            const c = Math.cos(rot);
            const s = Math.sin(rot);
            this.multiply(new Matrix2([ c, s, -s, c, 0, 0 ]));
        }
        if (sx !== 1 || sy !== 1) this.scale(sx, sy);
        if (ox !== 0 || oy !== 0) this.multiply(new Matrix2([ 1, 0, 0, 1, -ox, -oy ]));
        return this;
    }
    translate(x, y) {
        this.m[4] += this.m[0] * x + this.m[2] * y;
        this.m[5] += this.m[1] * x + this.m[3] * y;
        return this;
    }
    rotate(rad) {
        const c = Math.cos(rad);
        const s = Math.sin(rad);
        const m11 = this.m[0] * c + this.m[2] * s;
        const m12 = this.m[1] * c + this.m[3] * s;
        const m21 = this.m[0] * -s + this.m[2] * c;
        const m22 = this.m[1] * -s + this.m[3] * c;
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        return this;
    }
    scale(sx, sy) {
        this.m[0] *= sx;
        this.m[1] *= sx;
        this.m[2] *= sy;
        this.m[3] *= sy;
        return this;
    }
    setPosition(x, y) {
        this.m[4] = x;
        this.m[5] = y;
        return this;
    }
    getScale() {
        return new Vector2(this.m[0], this.m[3]);
    }
    getPosition() {
        return new Vector2(this.m[4], this.m[5]);
    }
    getRotation() {
        return Math.atan2(this.m[1], this.m[0]);
    }
    skew(radianX, radianY) {
        return this.multiply(new Matrix2([ 1, Math.tan(radianY), Math.tan(radianX), 1, 0, 0 ]));
    }
    determinant() {
        return 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
    }
    getInverse() {
        const d = this.determinant();
        return new Matrix2([ this.m[3] * d, -this.m[1] * d, -this.m[2] * d, this.m[0] * d, d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]) ]);
    }
    transformPoint(x, y) {
        let px, py;
        if (typeof x === 'object') {
            px = x.x * this.m[0] + x.y * this.m[2] + this.m[4];
            py = x.x * this.m[1] + x.y * this.m[3] + this.m[5];
        } else {
            px = x * this.m[0] + y * this.m[2] + this.m[4];
            py = x * this.m[1] + y * this.m[3] + this.m[5];
        }
        return new Vector2(px, py);
    }
    setContextTransform(context) {
        context.setTransform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
        return this;
    }
    tranformContext(context) {
        context.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
        return this;
    }
    cssTransform() {
        return 'matrix(' + this.m[0] + ',' + this.m[1] + ',' + this.m[2] + ',' + this.m[3] + ',' + this.m[4] + ',' + this.m[5] + ')';
    }
}

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];
class MathUtils {
    static generateUUID() {
        if (window.crypto && window.crypto.randomUUID) return crypto.randomUUID();
        const d0 = Math.random() * 0xffffffff | 0;
        const d1 = Math.random() * 0xffffffff | 0;
        const d2 = Math.random() * 0xffffffff | 0;
        const d3 = Math.random() * 0xffffffff | 0;
        const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
            _lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
            _lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
            _lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];
        return uuid.toLowerCase();
    }
}

class Camera2D {
    constructor() {
        this.uuid = MathUtils.generateUUID();
        this.position = new Vector2(0, 0);
        this.scale = 1.0;
        this.rotation = 0.0;
        this.matrix = new Matrix2();
        this.inverseMatrix = new Matrix2();
        this.matrixNeedsUpdate = true;
    }
    updateMatrix(offsetX, offsetY) {
        if (!this.matrixNeedsUpdate) return;
        this.matrix.identity();
        this.matrix.multiply(new Matrix2([ 1, 0, 0, 1, +offsetX, +offsetY ]));
        const c = Math.cos(this.rotation);
        const s = Math.sin(this.rotation);
        this.matrix.multiply(new Matrix2([ c, s, -s, c, 0, 0 ]));
        this.matrix.multiply(new Matrix2([ 1, 0, 0, 1, -offsetX, -offsetY ]));
        this.matrix.multiply(new Matrix2([ 1, 0, 0, 1, this.position.x, this.position.y ]));
        this.matrix.multiply(new Matrix2([ this.scale, 0, 0, this.scale, 0, 0 ]));
        this.inverseMatrix = this.matrix.getInverse();
        this.matrixNeedsUpdate = false;
    }
    lerpPosition(v1, v2, t) {
        this.position.x = (v1.x * (1 - t)) + (v2.x * t);
        this.position.y = (v1.y * (1 - t)) + (v2.y * t);
        this.matrixNeedsUpdate = true;
    }
}

class Box2 {
    constructor(min, max) {
        this.min = new Vector2(+Infinity, +Infinity);
        this.max = new Vector2(-Infinity, -Infinity);
        if (typeof min === 'object') this.min.copy(min);
        if (typeof max === 'object') this.max.copy(max);
    }
    set(min, max) {
        this.min.copy(min);
        this.max.copy(max);
        return this;
    }
    setFromPoints(...points) {
        if (points.length > 0 && Array.isArray(points[0])) points = points[0];
        this.min = new Vector2(+Infinity, +Infinity);
        this.max = new Vector2(-Infinity, -Infinity);
        for (const point of points) {
            this.expandByPoint(point);
        }
        return this;
    }
    setFromCenterAndSize(center, size) {
        const halfSize = new Vector2().copy(size).multiplyScalar(0.5);
        this.min.copy(center).sub(halfSize);
        this.max.copy(center).add(halfSize);
        return this;
    }
    clone() {
        return new Box2().copy(this);
    }
    copy(box) {
        this.min.copy(box.min);
        this.max.copy(box.max);
        return this;
    }
    isEmpty() {
        return (this.max.x < this.min.x) || (this.max.y < this.min.y);
    }
    getCenter(target) {
        target = target ?? new Vector2();
        this.isEmpty() ? target.set(0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
        return target;
    }
    getSize(target) {
        target = target ?? new Vector2();
        this.isEmpty() ? target.set(0, 0) : target.subVectors(this.max, this.min);
        return target;
    }
    expandByPoint(point) {
        this.min.min(point);
        this.max.max(point);
        return this;
    }
    expandByVector(vector) {
        this.min.sub(vector);
        this.max.add(vector);
        return this;
    }
    expandByScalar(scalar) {
        this.min.addScalar(-scalar);
        this.max.addScalar(scalar);
        return this;
    }
    containsPoint(point) {
        return !(point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y);
    }
    containsBox(box) {
        return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y;
    }
    intersectsBox(box) {
        return !(box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y);
    }
    distanceToPoint(point) {
        let v = new Vector2();
        let clampedPoint = v.copy(point).clamp(this.min, this.max);
        return clampedPoint.sub(point).length();
    }
    intersect(box) {
        this.min.max(box.min);
        this.max.min(box.max);
        return this;
    }
    union(box) {
        this.min.min(box.min);
        this.max.max(box.max);
        return this;
    }
    translate(offset) {
        this.min.add(offset);
        this.max.add(offset);
        return this;
    }
    equals(box) {
        return box.min.equals(this.min) && box.max.equals(this.max);
    }
    toArray() {
        return [ this.min.x, this.min.y, this.max.x, this.max.y ];
    }
    fromArray(array) {
        this.min.set(array[0], array[1]);
        this.max.set(array[2], array[3]);
        return this;
    }
}

class Key {
    static DOWN = -1;
    static UP = 1;
    static RESET = 0;
    constructor() {
        this.pressed = false;
        this.justPressed = false;
        this.justReleased = false;
    }
    update(action) {
        this.justPressed = false;
        this.justReleased = false;
        if (action === Key.DOWN) {
            if (this.pressed === false) this.justPressed = true;
            this.pressed = true;
        } else if(action === Key.UP) {
            if (this.pressed) this.justReleased = true;
            this.pressed = false;
        } else if(action === Key.RESET) {
            this.justReleased = false;
            this.justPressed = false;
        }
    }
    set(justPressed, pressed, justReleased) {
        this.justPressed = justPressed;
        this.pressed = pressed;
        this.justReleased = justReleased;
    }
    reset() {
        this.justPressed = false;
        this.pressed = false;
        this.justReleased = false;
    }
}

class Pointer {
    static LEFT = 0;
    static MIDDLE = 1;
    static RIGHT = 2;
    static BACK = 3;
    static FORWARD = 4;
    constructor(element, disableContextMenu = true) {
        if (!element || !element.isElement) {
            console.error(`Pointer: No Suey Element was provided`);
            return;
        }
        const self = this;
        this._keys = new Array(5);
        this._position = new Vector2(0, 0);
        this._positionUpdated = false;
        this._delta = new Vector2(0, 0);
        this._wheel = 0;
        this._wheelUpdated = false;
        this._doubleClicked = new Array(5);
        this.keys = new Array(5);
        this.position = new Vector2(0, 0);
        this.delta = new Vector2(0, 0);
        this.wheel = 0;
        this.doubleClicked = new Array(5);
        this.pointerInside = false;
        for (let i = 0; i < 5; i++) {
            this._doubleClicked[i] = false;
            this.doubleClicked[i] = false;
            this._keys[i] = new Key();
            this.keys[i] = new Key();
        }
        function updatePosition(x, y, xDiff, yDiff) {
            if (element && element.dom) {
                const rect = element.dom.getBoundingClientRect();
                x -= rect.left;
                y -= rect.top;
            }
            self._position.set(x, y);
            self._delta.x += xDiff;
            self._delta.y += yDiff;
            self._positionUpdated = true;
        }
        function updateKey(button, action) {
            if (button >= 0) self._keys[button].update(action);
        }
        if (disableContextMenu) {
            element.on('contextmenu', (event) => {
                event.preventDefault();
                event.stopPropagation();
            });
        }
        element.on('pointermove', (event) => {
            updatePosition(event.clientX, event.clientY, event.movementX, event.movementY);
        });
        element.on('pointerdown',  (event) => {
            event.preventDefault();
            event.stopPropagation();
            element.dom.setPointerCapture(event.pointerId);
            updateKey(event.button, Key.DOWN);
        });
        element.on('pointerup', (event) => {
            element.dom.releasePointerCapture(event.pointerId);
            updateKey(event.button, Key.UP);
        });
        element.on('pointerenter', () => { self.pointerInside = true; });
        element.on('pointerleave', () => { self.pointerInside = false; });
        element.on('wheel', (event) => {
            updatePosition(event.clientX, event.clientY, event.movementX, event.movementY);
            self._wheel = event.deltaY;
            self._wheelUpdated = true;
        });
        element.on('dragstart', (event) => { updateKey(event.button, Key.UP); });
        element.on('dblclick', (event) => { self._doubleClicked[event.button] = true; });
    }
    buttonPressed(button)       { return this.keys[button].pressed; }
    buttonDoubleClicked(button) { return this.doubleClicked[button] }
    buttonJustPressed(button)   { return this.keys[button].justPressed; }
    buttonJustReleased(button)  { return this.keys[button].justReleased; }
    insideDom() {
        return this.pointerInside;
    }
    update() {
        for (let i = 0; i < 5; i++) {
            if (this._keys[i].justPressed && this.keys[i].justPressed) this._keys[i].justPressed = false;
            if (this._keys[i].justReleased && this.keys[i].justReleased) this._keys[i].justReleased = false;
            this.keys[i].set(this._keys[i].justPressed, this._keys[i].pressed, this._keys[i].justReleased);
            if (this._doubleClicked[i] === true) {
                this.doubleClicked[i] = true;
                this._doubleClicked[i] = false;
            } else {
                this.doubleClicked[i] = false;
            }
        }
        if (this._wheelUpdated) {
            this.wheel = this._wheel;
            this._wheelUpdated = false;
        } else {
            this.wheel = 0;
        }
        if (this._positionUpdated) {
            this.delta.copy(this._delta);
            this.position.copy(this._position);
            this._delta.set(0,0);
            this._positionUpdated = false;
        } else {
            this.delta.x = 0;
            this.delta.y = 0;
        }
    }
}

class Object2D {
    constructor() {
        this.type = 'Object2D';
        this.uuid = MathUtils.generateUUID();
        this.children = [];
        this.parent = null;
        this.visible = true;
        this.layer = 0;
        this.level = 0;
        this.opacity = 1;
        this.globalOpacity = 1;
        this.position = new Vector2(0, 0);
        this.scale = new Vector2(1, 1);
        this.rotation = 0.0;
        this.origin = new Vector2(0, 0);
        this.matrix = new Matrix2();
        this.globalMatrix = new Matrix2();
        this.inverseGlobalMatrix = new Matrix2();
        this.matrixAutoUpdate = true;
        this.matrixNeedsUpdate = true;
        this.boundingBox = new Box2();
        this.masks = [];
        this.pointerEvents = true;
        this.draggable = false;
        this.focusable = true;
        this.selectable = true;
        this.pointerInside = false;
        this.inViewport = true;
        this.isSelected = false;
    }
    add(...objects) {
        if (objects.length > 0 && Array.isArray(objects[0])) objects = objects[0];
        for (const object of objects) {
            const index = this.children.indexOf(object);
            if (index === -1) {
                object.parent = this;
                object.level = this.level + 1;
                object.traverse(function(child) {
                    if (typeof child.onAdd === 'function') child.onAdd(this);
                });
                this.children.push(object);
            }
        }
        return this;
    }
    remove(object) {
        const index = this.children.indexOf(object);
        if (index === -1) return undefined;
        const child = this.children[index];
        child.parent = null;
        child.level = 0;
        child.traverse(function(child) {
            if (typeof child.onRemove === 'function') child.onRemove(this);
        });
        this.children.splice(index, 1);
        return child;
    }
    getChildByUUID(uuid) {
        return this.getEntityByProperty('uuid', uuid);
    }
    getChildByProperty(property, value) {
        if (this[property] === value) return this;
        for (const child of this.children) {
            const object = child.getChildByProperty(property, value);
            if (object) return object;
        }
        return undefined;
    }
    traverse(callback) {
        if (typeof callback === 'function' && callback(this)) return true;
        for (const child of this.children) {
            if (child.traverse(callback)) return true;
        }
        return false;
    }
    destroy() {
        if (this.parent) this.parent.remove(this);
    }
    computeBoundingBox() {
        return this.boundingBox;
    }
    isInside(point) {
        return false;
    }
    isWorldPointInside(worldPoint, recursive = false) {
        const localPoint = this.inverseGlobalMatrix.transformPoint(worldPoint);
        if (this.isInside(localPoint)) return true;
        if (recursive) {
            for (const child of this.children) {
                if (child.isWorldPointInside(worldPoint, true)) return true;
            }
        }
        return false;
    }
    getWorldPointIntersections(worldPoint, list = []) {
        list = Array.isArray(list) ? list : [];
        const localPoint = this.inverseGlobalMatrix.transformPoint(worldPoint);
        if (this.isInside(localPoint)) list.push(this);
        for (const child of this.children) child.getWorldPointIntersections(worldPoint, list);
        return list;
    }
    getWorldBoundingBox() {
        const box = this.boundingBox;
        const topLeftWorld = this.globalMatrix.transformPoint(box.min);
        const topRightWorld = this.globalMatrix.transformPoint(new Vector2(box.max.x, box.min.y));
        const bottomLeftWorld = this.globalMatrix.transformPoint(new Vector2(box.min.x, box.max.y));
        const bottomRightWorld = this.globalMatrix.transformPoint(box.max);
        return new Box2().setFromPoints(topLeftWorld, topRightWorld, bottomLeftWorld, bottomRightWorld);
    }
    setPosition(x, y) {
        if (typeof x === 'object' && x.x && x.y) this.position.copy(x);
        else this.position.set(x, y);
        return this;
    }
    updateMatrix(force = false) {
        if (force || this.matrixAutoUpdate || this.matrixNeedsUpdate) {
            this.globalOpacity = this.opacity * ((this.parent) ? this.parent.globalOpacity : 1);
            this.matrix.compose(this.position.x, this.position.y, this.scale.x, this.scale.y, this.origin.x, this.origin.y, this.rotation);
            this.globalMatrix.copy(this.matrix);
            if (this.parent) this.globalMatrix.premultiply(this.parent.globalMatrix);
            this.inverseGlobalMatrix = this.globalMatrix.getInverse();
            this.matrixNeedsUpdate = false;
        }
    }
    transform(context, camera, canvas, renderer) {
        this.globalMatrix.tranformContext(context);
    }
    onPointerDrag(pointer, camera) {
        const pointerStart = pointer.position.clone();
        const pointerEnd = pointer.position.clone().sub(pointer.delta);
        const parent = this.parent ?? this;
        const worldPositionStart = camera.inverseMatrix.transformPoint(pointerStart);
        const localPositionStart = parent.inverseGlobalMatrix.transformPoint(worldPositionStart);
        const worldPositionEnd = camera.inverseMatrix.transformPoint(pointerEnd);
        const localPositionEnd = parent.inverseGlobalMatrix.transformPoint(worldPositionEnd);
        const delta = localPositionStart.clone().sub(localPositionEnd);
        const mouseSlopThreshold = 2;
        if (pointer.buttonJustPressed(Pointer.LEFT)) {
            this.dragStartPosition = pointer.position.clone();
        } else if (pointer.buttonPressed(Pointer.LEFT)) {
            const manhattanDistance = this.dragStartPosition.manhattanDistanceTo(pointerEnd);
            if (manhattanDistance >= mouseSlopThreshold) {
                this.position.add(delta);
                this.matrixNeedsUpdate = true;
            }
        }
    }
}

class Keyboard {
    constructor(element) {
        if (!element || !element.isElement) {
            console.error(`Keyboard: No Suey Element was provided`);
            return;
        }
        const self = this;
        this._keys = {};
        this.keys = {};
        function updateKey(keyCode, action) {
            if (!(keyCode in self._keys)) {
            self._keys[keyCode] = new Key();
            self.keys[keyCode] = new Key();
            }
            self._keys[keyCode].update(action);
        }
        element.on('keydown', (event) => { updateKey(event.keyCode, Key.DOWN); });
        element.on('keyup', (event) => { updateKey(event.keyCode, Key.UP); });
    }
    keyPressed(keyCode) {
        return keyCode in this.keys && this.keys[keyCode].pressed;
    }
    keyJustPressed(keyCode) {
        return keyCode in this.keys && this.keys[keyCode].justPressed;
    }
    keyJustReleased(keyCode) {
        return keyCode in this.keys && this.keys[keyCode].justReleased;
    }
    update() {
        for (const keyCode in this._keys) {
            if (this._keys[keyCode].justPressed && this.keys[keyCode].justPressed) {
                this._keys[keyCode].justPressed = false;
            }
            if (this._keys[keyCode].justReleased && this.keys[keyCode].justReleased) {
                this._keys[keyCode].justReleased = false;
            }
            this.keys[keyCode].set(
                this._keys[keyCode].justPressed,
                this._keys[keyCode].pressed,
                this._keys[keyCode].justReleased
            );
        }
    }
}

class Viewport {
    constructor(context, camera) {
        const canvas = context.canvas;
        const topLeft = new Vector2(0, 0);
        const bottomRight = new Vector2(canvas.width, canvas.height);
        this.box = new Box2(topLeft, bottomRight);
    }
    intersectsBox(camera, box) {
        const topLeft = camera.matrix.transformPoint(box.min);
        const topRight = camera.matrix.transformPoint(new Vector2(box.max.x, box.min.y));
        const bottomLeft = camera.matrix.transformPoint(new Vector2(box.min.x, box.max.y));
        const bottomRight = camera.matrix.transformPoint(box.max);
        const actualBox = new Box2().setFromPoints(topLeft, topRight, bottomLeft, bottomRight);
        return this.box.intersectsBox(actualBox);
    }
}

class Renderer extends Element {
    constructor({
        alpha = true,
        disableContextMenu = true,
        imageSmoothingEnabled = true,
        imageSmoothingQuality = 'medium',
        globalCompositeOperation = 'source-over',
        width = 1000,
        height = 1000,
    } = {}) {
        const canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        super(canvas);
        this.context = this.dom.getContext('2d', { alpha });
        this.context.imageSmoothingEnabled = imageSmoothingEnabled;
        this.context.imageSmoothingQuality = imageSmoothingQuality;
        this.context.globalCompositeOperation = globalCompositeOperation;
        this.pointer = new Pointer(this, disableContextMenu);
        this.keyboard = new Keyboard(this);
        this.autoClear = true;
        this.updatable = [ this.pointer, this.keyboard ];
        this.selection = [];
        const renderer = this;
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                canvas.width = entry.contentRect.width;
                canvas.height = entry.contentRect.height;
                if (renderer.running) renderer.render();
            }
        });
        resizeObserver.observe(canvas);
        this.on('destroy', () => {
            resizeObserver.unobserve(canvas);
        });
        this.running = false;
        this.frame = -1;
        this.scene = null;
        this.camera = null;
        this.beingDragged = null;
    }
    get width() { return this.dom.width; }
    set width(x) { this.dom.width = x; }
    get height() { return this.dom.height; }
    set height(y) { this.dom.height = y; }
    ratio() {
        const rect = this.dom.getBoundingClientRect();
        return ((this.width / this.height) / (rect.width / rect.height));
    }
    onUpdate(object) {
        if (this.updatable.includes(object) === false) {
            this.updatable.push(object);
        }
    }
    start(scene, camera) {
        if (this.running) return;
        this.running = true;
        const renderer = this;
        function loop() {
            for (const object of renderer.updatable) {
                if (typeof object.update === 'function') object.update();
            }
            camera.updateMatrix(renderer.width / 2.0, renderer.height / 2.0);
            renderer.render(scene, camera);
            if (renderer.running) renderer.frame = requestAnimationFrame(loop);
        }
        loop();
    }
    stop() {
        this.running = false;
        cancelAnimationFrame(this.frame);
    }
    render(scene, camera) {
        if (scene) this.scene = scene; else scene = this.scene;
        if (camera) this.camera = camera; else camera = this.camera;
        if (!scene || !camera) return;
        const pointer = this.pointer;
        const context = this.context;
        const objects = [];
        scene.traverse(function(child) { if (child.visible) objects.push(child); });
        objects.sort(function(a, b) {
            if (b.layer === a.layer) return b.level - a.level;
            return b.layer - a.layer;
        });
        const viewport = new Viewport(context, camera);
        const isVisible = {};
        for (const object of objects) {
            isVisible[object.uuid] = viewport.intersectsBox(camera, object.getWorldBoundingBox());
        }
        const cameraPoint = camera.inverseMatrix.transformPoint(pointer.position);
        if (pointer.buttonJustPressed(Pointer.LEFT)) {
            for (const object of this.selection) object.isSelected = false;
            this.selection = [];
            const selectedObjects = scene.getWorldPointIntersections(cameraPoint);
            if (selectedObjects.length > 0) {
                for (const object of selectedObjects) {
                    if (object.selectable) {
                        object.isSelected = true;
                        this.selection.push(object);
                    }
                }
            }
        }
        let currentCursor = null;
        for (const object of objects) {
            if (object.pointerEvents && isVisible[object.uuid]) {
                const localPoint = object.inverseGlobalMatrix.transformPoint(cameraPoint);
                const isInside = object.isInside(localPoint);
                if (!currentCursor && (isInside || this.beingDragged === object) && object.cursor) {
                    if (typeof object.cursor === 'function') currentCursor = object.cursor(camera);
                    else currentCursor = object.cursor;
                }
                if (isInside) {
                    if (this.beingDragged == null) {
                        if (!object.pointerInside && typeof object.onPointerEnter === 'function') object.onPointerEnter(pointer, camera);
                        if (typeof object.onPointerOver === 'function') object.onPointerOver(pointer, camera);
                        if (pointer.buttonDoubleClicked(Pointer.LEFT) && typeof object.onDoubleClick === 'function') object.onDoubleClick(pointer, camera);
                        if (pointer.buttonPressed(Pointer.LEFT) && typeof object.onButtonPressed === 'function') object.onButtonPressed(pointer, camera);
                        if (pointer.buttonJustReleased(Pointer.LEFT) && typeof object.onButtonUp === 'function') object.onButtonUp(pointer, camera);
                        if (pointer.buttonJustPressed(Pointer.LEFT)) {
                            if (typeof object.onButtonDown === 'function') object.onButtonDown(pointer, camera);
                            if (object.draggable) {
                                this.beingDragged = object;
                                if (typeof object.onPointerDragStart === 'function') object.onPointerDragStart(pointer, camera);
                            }
                        }
                    }
                    object.pointerInside = true;
                } else if (this.beingDragged !== object && object.pointerInside) {
                    if (typeof object.onPointerLeave === 'function') object.onPointerLeave(pointer, camera);
                    object.pointerInside = false;
                }
            }
            if (this.beingDragged === object) {
                if (pointer.buttonJustReleased(Pointer.LEFT)) {
                    if (object.pointerEvents && typeof object.onPointerDragEnd === 'function') {
                        object.onPointerDragEnd(pointer, camera);
                    }
                    this.beingDragged = null;
                } else if (object.pointerEvents && typeof object.onPointerDrag === 'function') {
                    object.onPointerDrag(pointer, camera);
                }
            }
        }
        document.body.style.cursor = currentCursor ?? 'default';
        scene.traverse(function(child) {
            child.updateMatrix();
            if (typeof child.onUpdate === 'function') child.onUpdate(context, camera);
        });
        context.setTransform(1, 0, 0, 1, 0, 0);
        if (this.autoClear) context.clearRect(0, 0, this.width, this.height);
        for (let i = objects.length - 1; i >= 0; i--) {
            const object = objects[i];
            if (object.isMask) continue;
            if (isVisible[object.uuid] !== true) {
                continue;
            }
            for (const mask of object.masks) {
                camera.matrix.setContextTransform(context);
                mask.transform(context, camera, this.dom, this);
                mask.clip(context, camera, this.dom);
            }
            camera.matrix.setContextTransform(context);
            object.transform(context, camera, this.dom, this);
            context.globalAlpha = object.globalOpacity;
            if (typeof object.style === 'function') object.style(context, camera, this.dom, this);
            if (typeof object.draw === 'function') object.draw(context, camera, this.dom, this);
            if (object.isSelected) {
                camera.matrix.setContextTransform(context);
                context.globalAlpha = 1;
                context.strokeStyle = '#00aacc';
                context.lineWidth = 2 / camera.scale;
                const box = object.boundingBox;
                const topLeft = object.globalMatrix.transformPoint(box.min);
                const topRight = object.globalMatrix.transformPoint(new Vector2(box.max.x, box.min.y));
                const bottomLeft = object.globalMatrix.transformPoint(new Vector2(box.min.x, box.max.y));
                const bottomRight = object.globalMatrix.transformPoint(box.max);
                context.beginPath();
                context.moveTo(topLeft.x, topLeft.y);
                context.lineTo(topRight.x, topRight.y);
                context.lineTo(bottomRight.x, bottomRight.y);
                context.lineTo(bottomLeft.x, bottomLeft.y);
                context.closePath();
                context.stroke();
            }
        }
    }
}

class CameraControls {
    constructor(renderer, camera) {
        const self = this;
        this.renderer = renderer;
        this.camera = camera;
        this.allowDrag = true;
        this.allowScale = true;
        this.allowRotation = true;
        this.dragButton = Pointer.RIGHT;
        this.rotateButton = Pointer.MIDDLE;
        this.rotationPoint = new Vector2(0, 0);
        this.rotationInitial = 0;
        renderer.on('dblclick', (event) => {
            if (!renderer.scene || !renderer.camera) return;
            const point = new Vector2(event.clientX, event.clientY);
            const worldPoint = renderer.camera.inverseMatrix.transformPoint(point);
            const objects = renderer.scene.getWorldPointIntersections(worldPoint);
            for (const object of objects) if (object.focusable) return self.focusCamera(object, false );
            return self.focusCamera(renderer.scene, true );
        });
    }
    update() {
        const camera = this.camera;
        const pointer = this.renderer.pointer;
        if (this.allowScale && pointer.wheel !== 0) {
            const scaleFactor = pointer.wheel * 0.001 * camera.scale;
            const pointerPos = camera.inverseMatrix.transformPoint(pointer.position);
            camera.scale -= scaleFactor;
            camera.position.add(pointerPos.multiplyScalar(scaleFactor));
            camera.matrixNeedsUpdate = true;
        }
        if (this.allowRotation) {
            if (pointer.buttonJustPressed(this.rotateButton)) {
                this.rotationPoint.copy(pointer.position);
                this.rotationInitial = camera.rotation;
            } else if (pointer.buttonPressed(this.rotateButton)) {
                const point = pointer.position.clone().sub(this.rotationPoint);
                camera.rotation = this.rotationInitial + (point.x * 0.01);
                camera.matrixNeedsUpdate = true;
            }
        }
        if (this.allowDrag && pointer.buttonPressed(this.dragButton)) {
            const currentPointerPos = camera.inverseMatrix.transformPoint(pointer.position.clone());
            const lastPointerPos = camera.inverseMatrix.transformPoint(pointer.position.clone().sub(pointer.delta));
            const delta = currentPointerPos.clone().sub(lastPointerPos).multiplyScalar(camera.scale);
            camera.position.add(delta);
            camera.matrixNeedsUpdate = true;
        }
    }
    focusCamera(object, isScene = false, animationDuration = 200 ) {
        const renderer = this.renderer;
        let targetScale, targetPosition;
        if (isScene) {
            const sceneBounds = new Box2();
            object.traverse((child) => { sceneBounds.union(child.getWorldBoundingBox()); });
            targetScale = 0.5 * Math.min(renderer.width / sceneBounds.getSize().x, renderer.height / sceneBounds.getSize().y);
            targetPosition = sceneBounds.getCenter();
            targetPosition.multiplyScalar(-targetScale);
            targetPosition.add(new Vector2(renderer.width / 2.0, renderer.height / 2.0));
        } else {
            const worldBox = object.getWorldBoundingBox();
            const worldSize = worldBox.getSize();
            const worldCenter = worldBox.getCenter();
            targetScale = 0.1 * Math.min(renderer.width / worldSize.x, renderer.height / worldSize.y);
            targetPosition = worldCenter;
            targetPosition.multiplyScalar(-targetScale);
            targetPosition.add(new Vector2(renderer.width / 2.0, renderer.height / 2.0));
        }
        targetScale = Math.abs(targetScale);
        const camera = renderer.camera;
        const startTime = performance.now();
        const startPosition = camera.position.clone();
        const startScale = camera.scale;
        const animate = () => {
            const elapsedTime = performance.now() - startTime;
            const t = Math.min(elapsedTime / animationDuration, 1);
            camera.lerpPosition(startPosition, targetPosition, t);
            camera.scale = startScale + (targetScale - startScale) * t;
            if (t < 1) requestAnimationFrame(animate);
        };
        animate();
    }
}

class DragControls {
    constructor(renderer) {
        this.renderer = renderer;
    }
    update() {
    }
}

class Style {
    static extractColor(color, context) {
        function extractCSSVariableName(str) {
            const regex = /--[a-zA-Z0-9-_]+/;
            const match = str.match(regex);
            return match ? match[0] : null;
        }
        if (typeof color === 'string' && context) {
            const cssVariable = extractCSSVariableName(color, context);
            if (cssVariable) {
                const canvas = context.canvas;
                const computedStyle = getComputedStyle(canvas);
                const computedColor = computedStyle.getPropertyValue(cssVariable);
                return `rgb(${computedColor})`;
            }
        }
        return color;
    }
    constructor() {
        this.cache = null;
        this.needsUpdate = true;
    }
    get(context) {}
}

class ColorStyle extends Style {
    constructor(color = '#000000') {
        super();
        this.color = color;
    }
    get(context) {
        if (this.needsUpdate || this.cache == null) {
            this.cache = Style.extractColor(this.color, context);
            this.needsUpdate = false;
        }
        return this.cache;
    }
}

let count = 0;
class Box extends Object2D {
    constructor() {
        super();
        this.type = 'Box';
        this.box = new Box2(new Vector2(-50, -50), new Vector2(50, 50));
        this.fillStyle = new ColorStyle('#FFFFFF');
        this.strokeStyle = new ColorStyle('#000000');
        this.lineWidth = 1;
        this.constantWidth = false;
        this._box = new Box2();
    }
    computeBoundingBox() {
        this.boundingBox.copy(this.box);
    }
    isInside(point) {
        return this.box.containsPoint(point);
    }
    draw(context, camera, canvas) {
        const width = this.box.max.x - this.box.min.x;
        const height = this.box.max.y - this.box.min.y;
        if (this.fillStyle) {
            context.fillStyle = this.fillStyle.get(context);
            context.fillRect(this.box.min.x, this.box.min.y, width, height);
        }
        if (this.strokeStyle) {
            let scaleX = 1;
            let scaleY = 1;
            if (this.constantWidth) {
                const matrix = context.getTransform();
                scaleX = Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
                scaleY = Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d);
            }
            context.lineWidth = this.lineWidth / Math.max(scaleX, scaleY);
            context.strokeStyle = this.strokeStyle.get(context);
            context.strokeRect(this.box.min.x, this.box.min.y, width, height);
        }
    }
    onUpdate(context, camera) {
        if (this.box.equals(this._box) === false) {
            this.computeBoundingBox();
            this._box.copy(this.box);
        }
    }
}

class Circle extends Object2D {
    constructor() {
        super();
        this.type = 'Circle';
        this.fillStyle = new ColorStyle('#FFFFFF');
        this.strokeStyle = new ColorStyle('#000000');
        this.lineWidth = 1;
        this.constantWidth = false;
        this._radius = 10.0;
    }
    get radius() { return this._radius; }
    set radius(value) {
        this._radius = value;
        this.computeBoundingBox();
    }
    computeBoundingBox() {
        this.boundingBox.min.set(-this._radius, -this._radius);
        this.boundingBox.max.set(+this._radius, +this._radius);
    }
    isInside(point) {
        return point.length() <= this._radius;
    }
    draw(context, camera, canvas) {
        context.beginPath();
        context.arc(0, 0, this._radius, 0, 2 * Math.PI);
        if (this.fillStyle) {
            context.fillStyle = this.fillStyle.get(context);
            context.fill();
        }
        if (this.strokeStyle) {
            let scaleX = 1;
            let scaleY = 1;
            if (this.constantWidth) {
                const matrix = context.getTransform();
                scaleX = Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
                scaleY = Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d);
            }
            context.lineWidth = this.lineWidth / Math.max(scaleX, scaleY);
            context.strokeStyle = this.strokeStyle.get(context);
            context.stroke();
        }
    }
}

class Line extends Object2D {
    constructor() {
        super();
        this.type = 'Line';
        this.from = new Vector2();
        this.to = new Vector2();
        this.strokeStyle = new ColorStyle('#ffffff');
        this.lineWidth = 5;
        this.constantWidth = false;
        this.mouseBuffer = 5;
        this.dashPattern = [];
        this.scaledLineWidth = this.lineWidth;
        this._from = new Vector2();
        this._to = new Vector2();
    }
    computeBoundingBox() {
        this.boundingBox.setFromPoints(this.from, this.to);
    }
    isInside(point) {
        const x = point.x;
        const y = point.y;
        const x1 = this.from.x;
        const y1 = this.from.y;
        const x2 = this.to.x;
        const y2 = this.to.y;
        const buffer = (this.scaledLineWidth / 2) + this.mouseBuffer;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const lengthSquared = dx * dx + dy * dy;
        if (lengthSquared === 0) {
            return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1)) <= buffer;
        }
        const t = ((x - x1) * dx + (y - y1) * dy) / lengthSquared;
        let nearestX, nearestY;
        if (t < 0) {
            nearestX = x1;
            nearestY = y1;
        } else if (t > 1) {
            nearestX = x2;
            nearestY = y2;
        } else {
            nearestX = x1 + t * dx;
            nearestY = y1 + t * dy;
        }
        const distanceSquared = (x - nearestX) * (x - nearestX) + (y - nearestY) * (y - nearestY);
        return distanceSquared <= buffer * buffer;
    }
    style(context, camera, canvas) {
        let scaleX = 1;
        let scaleY = 1;
        if (this.constantWidth) {
            const matrix = context.getTransform();
            scaleX = Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
            scaleY = Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d);
            this.scaledLineWidth = this.lineWidth / Math.max(scaleX, scaleY);
        } else {
            this.scaledLineWidth = this.lineWidth;
        }
        context.lineWidth = this.scaledLineWidth;
        context.strokeStyle = this.strokeStyle.get(context);
        context.setLineDash(this.dashPattern);
    }
    draw(context, camera, canvas) {
        context.beginPath();
        context.moveTo(this.from.x, this.from.y);
        context.lineTo(this.to.x, this.to.y);
        context.stroke();
    }
    onUpdate(context, camera) {
        if ((this.from.equals(this._from) === false) || (this.to.equals(this._to) === false)) {
            this.computeBoundingBox();
            this._from.copy(this.from);
            this._to.copy(this.to);
        }
    }
}

class GradientColorStop {
    constructor(offset, color) {
        this.offset = offset;
        this.color = color;
    }
}

class GradientStyle extends Style {
    constructor() {
        super();
        this.colors = [];
    }
    addColorStop(offset, color) {
        this.colors.push(new GradientColorStop(offset, color));
    }
}

class LinearGradientStyle extends GradientStyle {
    constructor() {
        super();
        this.start = new Vector2(-100, 0);
        this.end = new Vector2(100, 0);
    }
    get(context) {
        if (this.needsUpdate || this.cache == null) {
            const style = context.createLinearGradient(this.start.x, this.start.y, this.end.x, this.end.y);
            for (const colorStop of this.colors) {
                const finalColor = Style.extractColor(colorStop.color, context);
                style.addColorStop(colorStop.offset, finalColor);
            }
            this.cache = style;
            this.needsUpdate = false;
        }
        return this.cache;
    }
}

class ResizeTool {
    static ALL = 0;
    static RESIZE = 1;
    static ROTATE = 2;
    constructor(object, scene, tools = ResizeTool.ALL, radius = 5) {
        if (!object || !scene) return console.warn(`ResizeTool(): Object or scene missing from argument list`);
        if (!object.boundingBox) return console.warn(`ResizeTool(): Object missing 'boundingBox' property`);
        function localDelta(pointer, camera) {
            const pointerStart = pointer.position.clone();
            const pointerEnd = pointer.position.clone().sub(pointer.delta);
            const worldPositionStart = camera.inverseMatrix.transformPoint(pointerStart);
            const localPositionStart = object.inverseGlobalMatrix.transformPoint(worldPositionStart);
            const worldPositionEnd = camera.inverseMatrix.transformPoint(pointerEnd);
            const localPositionEnd = object.inverseGlobalMatrix.transformPoint(worldPositionEnd);
            const delta = localPositionStart.clone().sub(localPositionEnd).multiply(object.scale);
            return delta;
        }
        const resizerContainer = new Object2D();
        resizerContainer.draggable = false;
        resizerContainer.focusable = false;
        resizerContainer.selectable = false;
        resizerContainer.pointerEvents = false;
        resizerContainer.layer = object.layer + 1;
        scene.add(resizerContainer);
        let topLeft, topRight, bottomLeft, bottomRight;
        let topResizer, rightResizer, bottomResizer, leftResizer;
        let rotater, rotateLine;
        if (tools === ResizeTool.ALL || tools === ResizeTool.RESIZE) {
            function createResizer(x, y, type = 'box', addRotation, alpha) {
                let resizer;
                switch (type) {
                    case 'circle':
                        resizer = new Circle();
                        resizer.radius = radius;
                        break;
                    case 'line':
                        resizer = new Line();
                        resizer.mouseBuffer = radius;
                        break;
                    case 'box':
                    default:
                        resizer = new Box();
                        resizer.box.set(new Vector2(-radius, -radius), new Vector2(radius, radius));
                }
                resizer.draggable = true;
                resizer.focusable = false;
                resizer.selectable = false;
                resizer.layer = object.layer + 1;
                resizer.opacity = alpha;
                resizer.constantWidth = true;
                switch (type) {
                    case 'box':
                    case 'circle':
                        resizer.fillStyle = new LinearGradientStyle();
                        resizer.fillStyle.start.set(-radius, -radius);
                        resizer.fillStyle.end.set(radius, radius);
                        resizer.fillStyle.addColorStop(0, '--icon-light');
                        resizer.fillStyle.addColorStop(1, '--icon-dark');
                        resizer.strokeStyle.color = '--highlight';
                        break;
                    case 'line':
                        resizer.strokeStyle.color = '--highlight';
                        resizer.lineWidth = 1;
                        break;
                }
                resizer.cursor = function(camera) {
                    const cursorStyles = [
                        { angle:   0, cursor: 'ew-resize' },
                        { angle:  45, cursor: 'nwse-resize' },
                        { angle:  90, cursor: 'ns-resize' },
                        { angle: 135, cursor: 'nesw-resize' },
                        { angle: 180, cursor: 'ew-resize' },
                        { angle: 225, cursor: 'nwse-resize' },
                        { angle: 270, cursor: 'ns-resize' },
                        { angle: 315, cursor: 'nesw-resize' },
                        { angle: 360, cursor: 'ew-resize' },
                    ];
                    let localScale =  object.globalMatrix.getScale();
                    let localRotation = object.globalMatrix.getRotation();
                    if (localScale.x < 0 && localScale.y > 0 || localScale.x > 0 && localScale.y < 0) {
                        localRotation -= (addRotation * (Math.PI / 180));
                    } else {
                        localRotation += (addRotation * (Math.PI / 180));
                    }
                    const rotation = (localRotation + camera.rotation) * 180 / Math.PI;
                    const normalizedRotation = (rotation + 720) % 360;
                    let closestCursor = 'default';
                    let minAngleDiff = Infinity;
                    for (const { angle, cursor } of cursorStyles) {
                        const angleDiff = Math.abs(normalizedRotation - angle);
                        if (angleDiff < minAngleDiff) {
                            minAngleDiff = angleDiff;
                            closestCursor = cursor;
                        }
                    }
                    return closestCursor;
                };
                resizer.onPointerDrag = function(pointer, camera) {
                    Object2D.prototype.onPointerDrag.call(this, pointer, camera);
                    const delta = localDelta(pointer, camera);
                    if (x === 0) delta.x = 0;
                    if (y === 0) delta.y = 0;
                    delta.multiplyScalar(0.5);
                    const size = object.boundingBox.getSize();
                    const scaleX = (x === 0) ? 0 : 2 / size.x;
                    const scaleY = (y === 0) ? 0 : 2 / size.y;
                    const scale = new Vector2(scaleX, scaleY);
                    const rotationMatrix = new Matrix2().rotate(object.rotation);
                    const rotatedDelta = rotationMatrix.transformPoint(delta);
                    object.position.add(rotatedDelta);
                    object.scale.sub(delta.multiply(x, y).multiply(scale));
                    object.matrixNeedsUpdate = true;
                };
                resizerContainer.add(resizer);
                return resizer;
            }
            bottomRight = createResizer(-1, -1, 'box', 45, 1);
            bottomLeft = createResizer(1, -1, 'box', 135, 1);
            topLeft = createResizer(1, 1, 'box', 225, 1);
            topRight = createResizer(-1, 1, 'box', 315, 1);
            rightResizer = createResizer(-1, 0, 'line', 0, 1);
            bottomResizer = createResizer(0, -1, 'line', 90, 1);
            leftResizer = createResizer(1, 0, 'line', 180, 1);
            topResizer = createResizer(0, 1, 'line', 270, 1);
        }
        if (tools === ResizeTool.ALL || tools === ResizeTool.ROTATE) {
            rotater = new Circle();
            rotater.draggable = true;
            rotater.focusable = false;
            rotater.selectable = false;
            rotater.radius = radius + 1;
            rotater.layer = object.layer + 1;
            rotater.constantWidth = true;
            rotater.fillStyle = new LinearGradientStyle();
            rotater.fillStyle.start.set(-radius, -radius);
            rotater.fillStyle.end.set(radius, radius);
            rotater.fillStyle.addColorStop(0, '--icon-light');
            rotater.fillStyle.addColorStop(1, '--icon-dark');
            rotater.strokeStyle.color = '--highlight';
            rotater.cursor = `url('${CURSOR_ROTATE}') 16 16, auto`;
            rotater.onPointerDrag = function(pointer, camera) {
                const objectCenter = object.boundingBox.getCenter();
                const pointerStart = pointer.position.clone();
                const pointerEnd = pointer.position.clone().sub(pointer.delta);
                const worldPositionStart = camera.inverseMatrix.transformPoint(pointerStart);
                const localPositionStart = object.inverseGlobalMatrix.transformPoint(worldPositionStart);
                const worldPositionEnd = camera.inverseMatrix.transformPoint(pointerEnd);
                const localPositionEnd = object.inverseGlobalMatrix.transformPoint(worldPositionEnd);
                localPositionStart.sub(objectCenter).multiply(object.scale);
                localPositionEnd.sub(objectCenter).multiply(object.scale);
                const angle = localPositionEnd.angleBetween(localPositionStart);
                const cross = localPositionEnd.cross(localPositionStart);
                const sign = Math.sign(cross);
                object.rotation += (angle * sign);
                object.updateMatrix(true);
            };
            rotateLine = new Line();
            rotateLine.lineWidth = 1;
            rotateLine.draggable = false;
            rotateLine.focusable = false;
            rotateLine.selectable = false;
            rotateLine.layer = object.layer + 1;
            rotateLine.constantWidth = true;
            rotateLine.strokeStyle.color = '--highlight';
            resizerContainer.add(rotater, rotateLine);
        }
        resizerContainer.onUpdate = function(context, camera) {
            const box = object.boundingBox;
            const center = box.getCenter();
            const handleOffset = ((radius * 4) / Math.abs(object.scale.y)) / camera.scale;
            const topCenterWorld = object.globalMatrix.transformPoint(center.x, box.min.y);
            const topCenterWorldOffset = object.globalMatrix.transformPoint(center.x, box.min.y - handleOffset);
            if (rotater) {
                rotater.position.copy(topCenterWorldOffset);
                rotater.scale.set(1 / camera.scale, 1 / camera.scale);
                rotater.updateMatrix();
            }
            if (rotateLine) {
                rotateLine.from.copy(topCenterWorldOffset);
                rotateLine.to.copy(topCenterWorld);
                rotateLine.updateMatrix();
            }
            const topLeftWorld = object.globalMatrix.transformPoint(box.min);
            const topRightWorld = object.globalMatrix.transformPoint(new Vector2(box.max.x, box.min.y));
            const bottomLeftWorld = object.globalMatrix.transformPoint(new Vector2(box.min.x, box.max.y));
            const bottomRightWorld = object.globalMatrix.transformPoint(box.max);
            function updateCornerResizer(resizer, point) {
                resizer.position.copy(point);
                resizer.scale.set(1 / camera.scale, 1 / camera.scale);
                resizer.rotation = object.rotation;
                resizer.updateMatrix();
            }
            if (topLeft) updateCornerResizer(topLeft, topLeftWorld);
            if (topRight) updateCornerResizer(topRight, topRightWorld);
            if (bottomLeft) updateCornerResizer(bottomLeft, bottomLeftWorld);
            if (bottomRight) updateCornerResizer(bottomRight, bottomRightWorld);
            const leftMiddleWorld = object.globalMatrix.transformPoint(new Vector2(box.min.x, center.y));
            const rightMiddleWorld = object.globalMatrix.transformPoint(new Vector2(box.max.x, center.y));
            const topMiddleWorld = object.globalMatrix.transformPoint(new Vector2(center.x, box.min.y));
            const bottomMiddleWorld = object.globalMatrix.transformPoint(new Vector2(center.x, box.max.y));
            const halfWidth = object.boundingBox.getSize().x / 2 * Math.abs(object.scale.x);
            const halfHeight = object.boundingBox.getSize().y / 2 * Math.abs(object.scale.y);
            if (leftResizer) {
                leftResizer.position.copy(leftMiddleWorld);
                leftResizer.rotation = object.rotation;
                if (leftResizer.type === 'Box') {
                    leftResizer.scale.set(1 / camera.scale, 1);
                    leftResizer.box.set(new Vector2(-radius, -halfHeight), new Vector2(radius, halfHeight));
                }
                if (leftResizer.type === 'Line') {
                    leftResizer.mouseBuffer = radius / camera.scale;
                    leftResizer.from.set(0, -halfHeight);
                    leftResizer.to.set(0, +halfHeight);
                }
                leftResizer.updateMatrix();
            }
            if (rightResizer) {
                rightResizer.position.copy(rightMiddleWorld);
                rightResizer.rotation = object.rotation;
                if (rightResizer.type === 'Box') {
                    rightResizer.scale.set(1 / camera.scale, 1);
                    rightResizer.box.set(new Vector2(-radius, -halfHeight), new Vector2(radius, halfHeight));
                }
                if (rightResizer.type === 'Line') {
                    rightResizer.mouseBuffer = radius / camera.scale;
                    rightResizer.from.set(0, -halfHeight);
                    rightResizer.to.set(0, +halfHeight);
                }
                rightResizer.updateMatrix();
            }
            if (topResizer) {
                topResizer.position.copy(topMiddleWorld);
                topResizer.rotation = object.rotation;
                if (topResizer.type === 'Box') {
                    topResizer.scale.set(1, 1 / camera.scale);
                    topResizer.box.set(new Vector2(-halfWidth, -radius), new Vector2(halfWidth, radius));
                }
                if (topResizer.type === 'Line') {
                    topResizer.mouseBuffer = radius / camera.scale;
                    topResizer.from.set(-halfWidth, 0);
                    topResizer.to.set(+halfWidth, 0);
                }
                topResizer.updateMatrix();
            }
            if (bottomResizer) {
                bottomResizer.position.copy(bottomMiddleWorld);
                bottomResizer.rotation = object.rotation;
                if (bottomResizer.type === 'Box') {
                    bottomResizer.scale.set(1, 1 / camera.scale);
                    bottomResizer.box.set(new Vector2(-halfWidth, -radius), new Vector2(halfWidth, radius));
                }
                if (bottomResizer.type === 'Line') {
                    bottomResizer.mouseBuffer = radius / camera.scale;
                    bottomResizer.from.set(-halfWidth, 0);
                    bottomResizer.to.set(+halfWidth, 0);
                }
                bottomResizer.updateMatrix();
            }
        };
    }
}

class Text extends Object2D {
    constructor(text = '', font = '16px Arial') {
        super();
        this.type = 'Text';
        this.text = text;
        this.font = font;
        this.strokeStyle = null;
        this.lineWidth = 1;
        this.fillStyle = new ColorStyle('#000000');
        this.textAlign = 'center';
        this.textBaseline = 'middle';
        this._font = font;
        this._text = text;
    }
    computeBoundingBox(context) {
        if (!context) return false;
        context.font = this.font;
        context.textAlign = this.textAlign;
        context.textBaseline = this.textBaseline;
        const textMetrics = context.measureText(this.text);
        const textWidth = textMetrics.width;
        const textHeight = Math.max(textMetrics.actualBoundingBoxAscent, textMetrics.actualBoundingBoxDescent) * 2.0;
        this.boundingBox.set(new Vector2(textWidth / -2, textHeight / -2), new Vector2(textWidth / 2, textHeight / 2));
        return true;
    }
    isInside(point) {
        return this.boundingBox.containsPoint(point);
    }
    draw(context, camera, canvas) {
        context.font = this.font;
        context.textAlign = this.textAlign;
        context.textBaseline = this.textBaseline;
        if (this.fillStyle) {
            context.fillStyle = this.fillStyle.get(context);
            context.fillText(this.text, 0, 0);
        }
        if (this.strokeStyle) {
            context.strokeStyle = this.strokeStyle.get(context);
            context.strokeText(this.text, 0, 0);
        }
    }
    onUpdate(context, camera) {
        if (this._font !== this.font || this._text !== this.text) {
            if (this.computeBoundingBox(context)) {
                this._font = this.font;
                this._text = this.text;
            }
        }
    }
}

class Mask extends Object2D {
    constructor() {
        super();
        this.isMask = true;
        this.type = 'Mask';
    }
    clip(context, camera, canvas) {
    }
}

class BoxMask extends Mask {
    constructor() {
        super();
        this.type = 'BoxMask';
        this.box = new Box2(new Vector2(-50, -35), new Vector2(50, 35));
        this.invert = false;
    }
    isInside(point) {
        return this.box.containsPoint(point);
    }
    clip(context, camera, canvas) {
        context.beginPath();
        const width = this.box.max.x - this.box.min.x;
        if (this.invert) {
            context.rect(this.box.min.x - 1e4, -5e3, 1e4, 1e4);
            context.rect(this.box.max.x, -5e3, 1e4, 1e4);
            context.rect(this.box.min.x, this.box.min.y - 1e4, width, 1e4);
            context.rect(this.box.min.x, this.box.max.y, width, 1e4);
        } else {
            const height = this.box.max.y - this.box.min.y;
            context.fillRect(this.box.min.x, this.box.min.y, width, height);
        }
        context.clip();
    }
}

class RadialGradientStyle extends GradientStyle {
    constructor() {
        super();
        this.start = new Vector2(0, 0);
        this.startRadius = 10;
        this.end = new Vector2(0, 0);
        this.endRadius = 50;
    }
    get(context) {
        if (this.needsUpdate || this.cache == null) {
            const style = context.createRadialGradient(this.start.x, this.start.y, this.startRadius, this.end.x, this.end.y, this.endRadius);
            for (const colorStop of this.colors) {
                style.addColorStop(colorStop.offset, colorStop.color);
            }
            this.cache = style;
            this.needsUpdate = false;
        }
        return this.cache;
    }
}

var Scene$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Camera2D: Camera2D,
  Object2D: Object2D,
  Renderer: Renderer,
  Viewport: Viewport,
  CameraControls: CameraControls,
  DragControls: DragControls,
  ResizeTool: ResizeTool,
  Key: Key,
  Keyboard: Keyboard,
  Pointer: Pointer,
  Box2: Box2,
  MathUtils: MathUtils,
  Matrix2: Matrix2,
  Vector2: Vector2,
  Box: Box,
  Circle: Circle,
  Line: Line,
  Text: Text,
  Mask: Mask,
  BoxMask: BoxMask,
  Style: Style,
  ColorStyle: ColorStyle,
  GradientStyle: GradientStyle,
  GradientColorStop: GradientColorStop,
  LinearGradientStyle: LinearGradientStyle,
  RadialGradientStyle: RadialGradientStyle
});

export { BACKGROUNDS, BUTTON_TYPES, CLOSE_SIDES, CORNER_BUTTONS, CURSOR_ROTATE, DOCK_SIDES, Element, GRAPH_GRID_TYPES, GRAPH_LINE_TYPES, GRID_SIZE, IMAGE_ADD, IMAGE_CHECK, IMAGE_CLOSE, IMAGE_EMPTY, IMAGE_ERROR, IMAGE_EXPAND, IMAGE_INFO, IMAGE_QUESTION, IMAGE_WARNING, LEFT_SPACING, MOUSE_CLICK, MOUSE_SLOP_LARGE, MOUSE_SLOP_SMALL, NODE_TYPES, PANEL_STYLES, QUESTION_COLORS, QUESTION_ICONS, RESIZERS, Scene$1 as Scene, TAB_SIDES, THEMES, TOOLTIP_Y_OFFSET, TRAIT };
