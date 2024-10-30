/**
 * @description Suey
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/onsightengine/suey
 * @version     v0.1.41
 */
var img$8 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M184.001%2c292.65l-119.111%2c-0c-13.193%2c-0 -23.889%2c-10.695 -23.889%2c-23.889l-0%2c-26.85c-0%2c-13.194 10.696%2c-23.889 23.889%2c-23.889l46.704%2c-0.001l31.681%2c0l74.967%2c0l0%2c-78.878l-0%2c-71.489c-0%2c-7.129 2.832%2c-13.965 7.872%2c-19.004c5.038%2c-5.041 11.875%2c-7.873 19.002%2c-7.873l21.767%2c0c7.127%2c0 13.964%2c2.832 19.003%2c7.873c5.04%2c5.039 7.873%2c11.875 7.873%2c19.004l0%2c150.364l150.365%2c0c7.127%2c0 13.964%2c2.833 19.004%2c7.873c5.04%2c5.041 7.872%2c11.876 7.872%2c19.002l-0%2c20.88c-0%2c7.127 -2.832%2c13.963 -7.872%2c19.003c-5.041%2c5.04 -11.877%2c7.87 -19.004%2c7.87l-72.38%2c0l0.003%2c0.003l-77.988%2c0l0%2c154.707c0%2c6.33 -2.514%2c12.4 -6.99%2c16.876c-4.476%2c4.476 -10.546%2c6.99 -16.877%2c6.99l-27.761%2c0c-6.336%2c0 -12.411%2c-2.516 -16.892%2c-6.996c-4.48%2c-4.48 -6.996%2c-10.556 -6.996%2c-16.892l-0%2c-118.1l-0%2c-36.247l-0.001%2c-0.338l-0.339%2c0.001l-33.902%2c-0Z' style='fill:%23e6e6e6%3b'/%3e%3c/svg%3e";

var img$7 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M373.189%2c648.684c-0%2c-0 -237.09%2c-138.996 -258.087%2c-117.999c-20.997%2c20.997 212.331%2c288.419 212.331%2c288.419c1.975%2c3.009 4.284%2c5.857 6.926%2c8.499c10.698%2c10.698 24.796%2c15.945 38.83%2c15.71c14.035%2c0.235 28.132%2c-5.012 38.831%2c-15.71c2.641%2c-2.642 4.95%2c-5.49 6.926%2c-8.499c-0%2c-0 423.255%2c-489.7 496.91%2c-611.246c9.004%2c-14.859 -15.991%2c-40.415 -34.446%2c-27.458c-108.024%2c75.837 -508.221%2c468.284 -508.221%2c468.284Z' style='fill:%23ebebeb%3b'/%3e%3c/svg%3e";

var img$6 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M386.576%2c386.574c-12.567%2c12.568 -33.514%2c12.568 -46.08%2c0.002l-84.496%2c-84.498l-84.497%2c84.498c-12.566%2c12.566 -33.512%2c12.566 -46.079%2c-0c-12.566%2c-12.568 -12.566%2c-33.513 0%2c-46.079l84.497%2c-84.496l-84.497%2c-84.498c-12.566%2c-12.566 -12.566%2c-33.511 0%2c-46.079c12.567%2c-12.565 33.513%2c-12.565 46.079%2c-0l84.496%2c84.498l84.497%2c-84.498c12.566%2c-12.565 33.512%2c-12.565 46.079%2c-0c12.566%2c12.568 12.566%2c33.513 0%2c46.079l-84.497%2c84.496l84.498%2c84.498c12.565%2c12.566 12.565%2c33.51 0%2c46.077Z' style='fill:white%3b'/%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M202.677%2c396c-6.857%2c0 -13.038%2c-4.13 -15.662%2c-10.465c-2.624%2c-6.335 -1.174%2c-13.626 3.674%2c-18.474c44.911%2c-44.911 130.904%2c-130.904 176.025%2c-176.025c4.906%2c-4.906 12.285%2c-6.374 18.696%2c-3.719c6.41%2c2.656 10.59%2c8.911 10.59%2c15.85c0%2c45.295 0%2c117.022 0%2c159.048c0%2c18.659 -15.126%2c33.785 -33.785%2c33.785l-159.538%2c0Z' style='fill:white%3b'/%3e%3cpath d='M303.059%2c116c6.881%2c-0 13.084%2c4.145 15.717%2c10.502c2.634%2c6.357 1.178%2c13.674 -3.687%2c18.54c-43.748%2c43.748 -126.088%2c126.087 -169.914%2c169.913c-4.888%2c4.888 -12.239%2c6.35 -18.625%2c3.705c-6.386%2c-2.645 -10.55%2c-8.877 -10.55%2c-15.789c-0%2c-43.783 -0%2c-112.154 -0%2c-152.928c-0%2c-18.746 15.197%2c-33.943 33.943%2c-33.943l153.116%2c-0Z' style='fill:white%3b'/%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M256%2c16c132.46%2c-0 240%2c107.54 240%2c240c0%2c132.46 -107.54%2c240 -240%2c240c-132.46%2c0 -240%2c-107.54 -240%2c-240c0%2c-132.46 107.54%2c-240 240%2c-240Zm0%2c57.6c-100.669%2c0 -182.4%2c81.731 -182.4%2c182.4c0%2c100.669 81.731%2c182.4 182.4%2c182.4c100.669%2c0 182.4%2c-81.731 182.4%2c-182.4c0%2c-100.669 -81.731%2c-182.4 -182.4%2c-182.4Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256.001%2c320.462c-12.011%2c-0 -21.749%2c-9.737 -21.749%2c-21.749l0%2c-9.225c0%2c-21.468 13.519%2c-40.67 33.639%2c-47.784c15.135%2c-5.352 24.887%2c-20.319 23.715%2c-36.397c-1.284%2c-17.606 -15.538%2c-31.752 -33.157%2c-32.906c-18.636%2c-1.231 -35.239%2c12.228 -37.805%2c30.616c-0.23%2c1.644 -0.346%2c3.329 -0.346%2c5.008c0%2c12.011 -9.737%2c21.749 -21.749%2c21.749c-12.012%2c-0 -21.749%2c-9.738 -21.749%2c-21.749c-0%2c-3.682 0.257%2c-7.389 0.763%2c-11.018c5.698%2c-40.84 42.476%2c-70.72 83.728%2c-68.012c39.162%2c2.565 70.846%2c34.012 73.699%2c73.149c2.593%2c35.571 -19.036%2c68.702 -52.598%2c80.57c-2.776%2c0.981 -4.641%2c3.703 -4.641%2c6.774l-0%2c9.225c-0%2c12.012 -9.738%2c21.749 -21.75%2c21.749Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256.001%2c390.135c-14.739%2c0 -26.687%2c-11.948 -26.687%2c-26.687l-0%2c-0.221c-0%2c-14.739 11.948%2c-26.688 26.687%2c-26.688c14.739%2c0 26.688%2c11.949 26.688%2c26.688l-0%2c0.221c0.001%2c14.739 -11.948%2c26.687 -26.688%2c26.687Z' style='fill:%237f7f7f%3b'/%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M256%2c16c132.46%2c0 240%2c107.54 240%2c240c0%2c132.46 -107.54%2c240 -240%2c240c-132.46%2c0 -240%2c-107.54 -240%2c-240c0%2c-132.46 107.54%2c-240 240%2c-240Zm-0%2c57.6c-100.669%2c0 -182.4%2c81.731 -182.4%2c182.4c0%2c100.669 81.731%2c182.4 182.4%2c182.4c100.669%2c0 182.4%2c-81.731 182.4%2c-182.4c-0%2c-100.669 -81.731%2c-182.4 -182.4%2c-182.4Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256%2c140.739c18.48%2c0 33.6%2c15.12 33.6%2c33.6c0%2c18.48 -15.12%2c33.6 -33.6%2c33.6c-18.48%2c0 -33.6%2c-15.12 -33.6%2c-33.6c0%2c-18.48 15.12%2c-33.6 33.6%2c-33.6Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256%2c219.364c15.464%2c0 28%2c12.536 28%2c28l0%2c100.511c-0%2c15.464 -12.536%2c28 -28%2c28l-0%2c-0c-15.464%2c-0 -28%2c-12.536 -28%2c-28l0%2c-100.511c0%2c-15.464 12.536%2c-28 28%2c-28l0%2c0Z' style='fill:%237f7f7f%3b'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M335.44%2c16c12.788%2c-0.01 25.064%2c5.091 34.08%2c14.16l112.32%2c112.32c9.069%2c9.016 14.17%2c21.292 14.16%2c34.08l-0%2c158.88c0.01%2c12.788 -5.091%2c25.064 -14.16%2c34.08l-112.32%2c112.32c-9.016%2c9.069 -21.292%2c14.17 -34.08%2c14.16l-158.88%2c-0c-12.788%2c0.01 -25.064%2c-5.091 -34.08%2c-14.16l-112.32%2c-112.32c-9.069%2c-9.016 -14.17%2c-21.292 -14.16%2c-34.08l0%2c-158.88c-0.01%2c-12.788 5.091%2c-25.064 14.16%2c-34.08l112.32%2c-112.32c9.016%2c-9.069 21.292%2c-14.17 34.08%2c-14.16l158.88%2c0Zm-259.497%2c162.155c-1.5%2c1.5 -2.343%2c3.535 -2.343%2c5.657c-0%2c19.996 -0%2c124.38 -0%2c144.376c-0%2c2.122 0.843%2c4.157 2.343%2c5.657c14.15%2c14.15 88.062%2c88.062 102.212%2c102.212c1.5%2c1.5 3.535%2c2.343 5.657%2c2.343c19.996%2c0 124.38%2c0 144.376%2c0c2.122%2c0 4.157%2c-0.843 5.657%2c-2.343c14.15%2c-14.15 88.062%2c-88.062 102.212%2c-102.212c1.5%2c-1.5 2.343%2c-3.535 2.343%2c-5.657c0%2c-19.996 0%2c-124.38 0%2c-144.376c0%2c-2.122 -0.843%2c-4.157 -2.343%2c-5.657c-14.15%2c-14.15 -88.062%2c-88.062 -102.212%2c-102.212c-1.5%2c-1.5 -3.535%2c-2.343 -5.657%2c-2.343c-19.996%2c-0 -124.38%2c-0 -144.376%2c-0c-2.122%2c-0 -4.157%2c0.843 -5.657%2c2.343c-14.15%2c14.15 -88.062%2c88.062 -102.212%2c102.212Z' style='fill:grey%3b'/%3e%3cpath d='M313.604%2c339.978c-7%2c0.022 -13.725%2c-2.762 -18.662%2c-7.726l-38.941%2c-38.928l-38.941%2c38.947c-4.948%2c4.948 -11.665%2c7.73 -18.662%2c7.73c-14.478%2c-0 -26.392%2c-11.914 -26.392%2c-26.392c0%2c-6.997 2.783%2c-13.714 7.73%2c-18.662l38.941%2c-38.947l-38.947%2c-38.941c-4.948%2c-4.948 -7.73%2c-11.665 -7.73%2c-18.662c0%2c-14.478 11.914%2c-26.392 26.392%2c-26.392c6.997%2c0 13.714%2c2.783 18.662%2c7.73l38.947%2c38.941l38.941%2c-38.947c4.948%2c-4.948 11.665%2c-7.73 18.662%2c-7.73c14.478%2c0 26.392%2c11.914 26.392%2c26.392c-0%2c6.997 -2.783%2c13.714 -7.73%2c18.662l-38.941%2c38.947l38.947%2c38.941c4.946%2c4.946 7.728%2c11.661 7.728%2c18.656c0%2c14.472 -11.909%2c26.381 -26.382%2c26.381c-0.002%2c0 -0.014%2c0 -0.014%2c0Z' style='fill:%237f7f7f%3bfill-rule:nonzero%3b'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M217.561%2c65.75c7.968%2c-13.681 22.607%2c-22.096 38.439%2c-22.096c15.832%2c-0 30.471%2c8.415 38.439%2c22.096l195.518%2c335.729c8.012%2c13.759 8.06%2c30.751 0.125%2c44.554c-7.935%2c13.804 -22.642%2c22.313 -38.564%2c22.313l-391.036%2c0c-15.922%2c0 -30.629%2c-8.509 -38.564%2c-22.313c-7.935%2c-13.803 -7.887%2c-30.795 0.125%2c-44.554l195.518%2c-335.729Zm-136.351%2c340.199c-1.08%2c1.856 -1.087%2c4.148 -0.017%2c6.01c1.071%2c1.861 3.055%2c3.009 5.202%2c3.009c52.447%2c0 286.763%2c0 339.21%2c0c2.147%2c0 4.131%2c-1.148 5.202%2c-3.009c1.07%2c-1.862 1.063%2c-4.154 -0.017%2c-6.01c-26.302%2c-45.163 -143.46%2c-246.339 -169.605%2c-291.233c-1.075%2c-1.845 -3.049%2c-2.98 -5.185%2c-2.98c-2.136%2c-0 -4.11%2c1.135 -5.185%2c2.98c-26.145%2c44.894 -143.303%2c246.07 -169.605%2c291.233Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M283.679%2c215.374l-7.778%2c93.106c-0.813%2c9.752 -8.939%2c17.298 -18.807%2c17.298c-9.868%2c-0 -17.994%2c-7.546 -18.807%2c-17.298l-7.778%2c-93.106c-1.277%2c-15.556 10.913%2c-28.907 26.585%2c-28.907c14.86%2c0 26.701%2c12.074 26.701%2c26.702c0%2c0.696 0%2c1.509 -0.116%2c2.205Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M257.093%2c385.058c-12.952%2c0 -23.549%2c-10.597 -23.549%2c-23.549c-0%2c-12.952 10.597%2c-23.549 23.549%2c-23.549c12.952%2c-0 23.549%2c10.597 23.549%2c23.549c0%2c12.952 -10.597%2c23.549 -23.549%2c23.549Z' style='fill:%237f7f7f%3b'/%3e%3c/svg%3e";

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
const PANEL_STYLES$1 = {
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
const IMAGE_ADD = img$8;
const IMAGE_CHECK = img$7;
const IMAGE_CLOSE = img$6;
const IMAGE_EMPTY = img$5;
const IMAGE_EXPAND = img$4;
const IMAGE_QUESTION = img$3;
const IMAGE_INFO = img$2;
const IMAGE_ERROR = img$1;
const IMAGE_WARNING = img;

class Css {
    static getVariable(variable, element) {
        variable = String(variable);
        if (!variable.startsWith('--')) variable = '--' + variable;
        if (element && element.isElement) element = element.dom;
        if (!element || !(element instanceof HTMLElement)) {
            element = document.querySelector(':root');
        }
        return getComputedStyle(element).getPropertyValue(variable);
    }
    static setVariable(variable, valueAsString, element) {
        variable = String(variable);
        if (!variable.startsWith('--')) variable = '--' + variable;
        if (element && element.isElement) element = element.dom;
        if (!element || !(element instanceof HTMLElement)) {
            element = document.querySelector(':root');
        }
        element.style.setProperty(variable, valueAsString);
    }
    static baseSize() {
        return parseFloat(Css.getVariable('--base-size'));
    }
    static fontSize(element = document.body) {
        if (element && element.isElement) element = element.dom;
        let size = getComputedStyle(element).fontSize;
        if (size == null || !Number.isFinite(size)) size = getComputedStyle(document.body).fontSize;
        return parseFloat(size);
    }
    static guiScale(element = document.body) {
        if (element && element.isElement) element = element.dom;
        return Css.fontSize(element) / Css.baseSize();
    }
    static getTextWidth(text, font) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = font;
        return context.measureText(text).width;
    }
    static getFontCssFromElement(element = document.body) {
        if (element && element.isElement) element = element.dom;
        const fontWeight = getComputedStyle(element).fontWeight || 'normal';
        const fontSize = getComputedStyle(element).fontSize || '16px';
        const fontFamily = getComputedStyle(element).fontFamily || 'Arial';
        return `${fontWeight} ${fontSize} ${fontFamily}`;
    }
    static parentElementWithCSS(element, cssKey, cssValueOrArrayOfPossibleValues) {
        const values = (Array.isArray(cssValueOrArrayOfPossibleValues)) ? cssValueOrArrayOfPossibleValues : [ cssValueOrArrayOfPossibleValues ];
        cssKey = cssKey.replace(/([A-Z])/g, "-$1").toLowerCase();
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            const defaultView = (parent.ownerDocument || document).defaultView;
            const computed = defaultView.getComputedStyle(parent, null);
            const property = computed.getPropertyValue(cssKey);
            if (property) {
                for (let i = 0; i < values.length; i++) {
                    const cssValue = values[i];
                    if (property == cssValue) return parent;
                }
            }
            parent = parent.parentElement;
        }
        return document.body;
    }
    static setCursor(cursor = '') {
        if (cursor === '') {
            document.body.style.cursor = '';
            document.body.classList.remove('suey-cursor-override');
        } else {
            document.body.style.cursor = cursor;
            document.body.classList.add('suey-cursor-override');
        }
    }
    static parseSize(size) {
        if (typeof size === 'string') {
            if (size.includes('%') ||
                size.includes('px') || size.includes('em') || size.includes('rem') ||
                size.includes('ch') || size.includes('ex') || size.includes('cap') ||
                size.includes('vw') || size.includes('vh') || size.includes('vmin') || size.includes('vmax'))
            {
                return size;
            } else {
                return parseFloat(size).toFixed(2) + 'px';
            }
        } else if (typeof size === 'number' && Number.isFinite(size)) {
            return parseFloat(size).toFixed(2) + 'px';
        } else {
            return '0';
        }
    }
    static toEm(pixels, element = document.body) {
        if (element && element.isElement) element = element.dom;
        const parsedSize = Css.parseSize(pixels);
        if (parsedSize.includes('px')) {
            return ((parseFloat(parsedSize) / 10.0) / Css.guiScale(element)) + 'em';
        } else if (parsedSize.includes('em')) {
            return parsedSize;
        }
        console.warn(`Css.toEm(): Could not convert to em, unit passed in: ${pixels}`);
        return size;
    }
    static toPx(size, element = document.body, dimension = 'w' ) {
        if (element && element.isElement) element = element.dom;
        const parsedSize = Css.parseSize(size);
        if (parsedSize.includes('%')) {
            if (element) {
                const parent = Css.parentElementWithCSS(element, 'position', [ 'relative', 'absolute' ]);
                if (parent) {
                    if (dimension === 'w') return (parseFloat(size) * 0.01 * parent.offsetWidth) + 'px';
                    else return (parseFloat(size) * 0.01 * parent.offsetHeight) + 'px';
                }
            }
        } else if (parsedSize.includes('px')) {
            return parsedSize;
        } else if (parsedSize.includes('rem')) {
            return parseInt((parseFloat(size) * 10.0)) + 'px';
        } else if (parsedSize.includes('em')) {
            return parseInt((parseFloat(size) * 10.0 * Css.guiScale(element))) + 'px';
        }
        console.warn(`Css.toPx(): Could not convert to pixels, unit passed in: ${size}`);
        return parseInt(parsedSize) + 'px';
    }
}

const EDGE_SPACE = 4;
const ALIGN = {
    LEFT:       'left',
    CENTER:     'center',
    MIDDLE:     'center',
    RIGHT:      'right',
};
const OVERFLOW = {
    LEFT:       'left',
    RIGHT:      'right',
};
const POSITION = {
    OVER:       'over',
    UNDER:      'under',
};
class Popper {
    static getLeft(dom) { return dom.getBoundingClientRect().left; }
    static getTop(dom) { return dom.getBoundingClientRect().top; }
    static getWidth(dom) { return dom.offsetWidth; }
    static getHeight(dom) { return dom.offsetHeight; }
    static popOver(dom, parent, align = ALIGN.LEFT, offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        return Popper.popOverUnder(dom, parent, POSITION.OVER, align, offsetX, offsetY, overflow);
    }
    static popUnder(dom, parent, align = ALIGN.LEFT, offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        return Popper.popOverUnder(dom, parent, POSITION.UNDER, align, offsetX, offsetY, overflow);
    }
    static popOverUnder(dom, parent, overUnder = POSITION.UNDER, align = ALIGN.LEFT,
                        offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        let maxRight = window.innerWidth - EDGE_SPACE;
        let maxBottom = window.innerHeight - EDGE_SPACE;
        offsetX = (offsetX) ? parseInt(Css.toPx(offsetX), 10) : 0;
        offsetY = (offsetY) ? parseInt(Css.toPx(offsetY), 10) : 0;
        let desiredLeft = Popper.getLeft(parent) + offsetX;
        if (align === ALIGN.CENTER) {
            let offset = Popper.getLeft(parent) + ((Popper.getWidth(parent) - Popper.getWidth(dom)) / 2.0);
            desiredLeft = offset + offsetX;
        } else if (align === ALIGN.RIGHT) {
            let offset = Popper.getLeft(parent) + (Popper.getWidth(parent) - Popper.getWidth(dom));
            desiredLeft = offset + offsetX;
        }
        if (overflow === OVERFLOW.LEFT) {
            maxRight = Popper.getLeft(parent) + Popper.getWidth(parent);
        }
        let rightSide = desiredLeft + Popper.getWidth(dom);
        if (rightSide > maxRight) desiredLeft -= (rightSide - maxRight);
        if (desiredLeft < EDGE_SPACE) desiredLeft = EDGE_SPACE;
        let underTop = Popper.getTop(parent) + Popper.getHeight(parent) + offsetY;
        let overTop = Popper.getTop(parent) - Popper.getHeight(dom) - offsetY;
        let bottomSide = underTop + Popper.getHeight(dom);
        if (bottomSide > maxBottom) overUnder = POSITION.OVER;
        if (overTop < EDGE_SPACE) overUnder = POSITION.UNDER;
        let desiredTop = (overUnder === POSITION.UNDER) ? underTop : overTop;
        if (overUnder === POSITION.UNDER) {
            bottomSide = desiredTop + Popper.getHeight(dom);
            if (bottomSide > maxBottom) {
                desiredTop = maxBottom - Popper.getHeight(dom);
                if (desiredTop < EDGE_SPACE) desiredTop = EDGE_SPACE;
            }
        }
        dom.style.left = Css.toPx(desiredLeft);
        dom.style.top = Css.toPx(desiredTop);
        return overUnder;
    }
}

class Dom {
    static findElementAt(className, centerX, centerY) {
        const domElements = document.elementsFromPoint(centerX, centerY);
        for (const dom of domElements) {
            if (dom.classList.contains(className)) return dom.suey ?? dom;
        }
        return null;
    }
    static childWithClass(element, className, recursive = true) {
        if (element.isElement && element.dom) element = element.dom;
        const queue = [ element ];
        while (queue.length > 0) {
            const currentElement = queue.shift();
            for (const child of currentElement.children) {
                if (child.classList.contains(className)) return child.suey ?? child;
                if (recursive) queue.push(child);
            }
        }
        return null;
    }
    static childrenWithClass(element, className, recursive = true, searchChildenOfTarget = true) {
        if (element.isElement && element.dom) element = element.dom;
        const children = [];
        const queue = [ element ];
        while (queue.length > 0) {
            const currentElement = queue.shift();
            for (const child of currentElement.children) {
                if (child.classList.contains(className)) {
                    children.push(child.suey ?? child);
                    if (recursive && searchChildenOfTarget) queue.push(child);
                } else {
                    if (recursive) queue.push(child);
                }
            }
        }
        return children;
    }
    static isChildOf(element, possibleParent) {
        if (element.isElement && element.dom) element = element.dom;
        if (possibleParent.isElement && possibleParent.dom) possibleParent = possibleParent.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.isSameNode(possibleParent)) return true;
            parent = parent.parentElement;
        }
        return false;
    }
    static isChildOfElementWithClass(element, className) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains(className)) return true;
            parent = parent.parentElement;
        }
        return false;
    }
    static parentElementWithClass(element, className) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains(className)) return parent.suey ?? parent;
            parent = parent.parentElement;
        }
        return null;
    }
    static traverse(element, applyFunction = () => {}, applyToSelf = true) {
        if (element.isElement && element.dom) element = element.dom;
        if (applyToSelf) applyFunction(element);
        for (let i = 0; i < element.children.length; i++) {
            Dom.traverse(element.children[i], applyFunction, true);
        }
    }
    static parentScroller(element) {
        if (!element) return null;
        if (element.isElement && element.dom) element = element.dom;
        if (element.scrollHeight > element.clientHeight) {
            return element;
        } else {
            return Dom.parentScroller(element.parentElement);
        }
    }
    static scrollIntoView(element) {
        const parent = Dom.parentScroller(element);
        if (parent) {
            const onePixel = parseInt(Css.toPx('0.2em'));
            if ((element.offsetTop - parent.offsetTop - onePixel) < parent.scrollTop) {
                parent.scrollTop = element.offsetTop - parent.offsetTop - onePixel;
            } else if (element.offsetTop > (parent.scrollTop + parent.clientHeight + onePixel - parent.offsetTop)) {
                parent.scrollTop = element.offsetTop - parent.clientHeight + element.offsetHeight + onePixel - parent.offsetTop;
            }
        }
    }
}

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

class Iris {
    static get NAMES() { return HTML_COLORS; }
    static get EXTENDED_NAMES() { return EXTENDED_COLORS; }
    constructor(r = 0xffffff, g, b, format = '') {
        this.isColor = true;
        this.isIris = true;
        this.type = 'Color';
        this.r = 1;
        this.g = 1;
        this.b = 1;
        this.set(r, g, b, format);
    }
    copy(colorObject) {
        return this.set(colorObject);
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b);
    }
    set(r = 0, g, b, format = '') {
        if (arguments.length === 0) {
            return this.set(0);
        } else if (r == undefined || (typeof r === 'number' && !Number.isFinite(r))) {
            if (g || b) console.warn(`Iris.set(): Invalid 'r' value ${r}`);
        } else if (g === undefined && b === undefined) {
            let value = r;
            if (typeof value === 'number' || value === 0) { return this.setHex(value);
            } else if (value && isRGB(value)) { return this.setRGBF(value.r, value.g, value.b);
            } else if (value && isHSL(value)) { return this.setHSL(value.h * 360, value.s, value.l);
            } else if (value && isRYB(value)) { return this.setRYB(value.r * 255, value.y * 255, value.b * 255);
            } else if (Array.isArray(value) && value.length > 2) {
                const offset = (g != null && typeof g === 'number' && Number.isFinite(g) && g > 0) ? g : 0;
                return this.setRGBF(value[offset], value[offset + 1], value[offset + 2])
            } else if (typeof value === 'string') {
                return this.setStyle(value);
            }
        } else {
            if (format == null || format === '') {
                if (Number.isInteger(r) && Number.isInteger(g) && Number.isInteger(b)) {
                    if (r > 1 && g > 1 && b > 1) format = 'rgb';
                }
            }
            switch (format) {
                case 'rgb': return this.setRGB(r, g, b);
                case 'hsl': return this.setHSL(r, g, b);
                case 'ryb': return this.setRYB(r, g, b);
                default:    return this.setRGBF(r, g, b);
            }
        }
        return this;
    }
    setColorName(style) {
        if (style == null || typeof style !== 'string' || style === '') return this;
        style = style.replace(/\s/g, '');
        style = style.toLowerCase();
        const hex = HTML_COLORS[style] ?? EXTENDED_COLORS[style];
        if (hex) return this.setHex(hex);
        console.warn(`Iris.setColorName(): Unknown color ${style}`);
        return this;
    }
    setHex(hexColor) {
        hexColor = Math.floor(hexColor);
        if (hexColor > 0xffffff || hexColor < 0) {
            console.warn(`Iris.setHex(): Given decimal outside of range, value was ${hexColor}`);
            hexColor = clamp(hexColor, 0, 0xffffff);
        }
        const r = (hexColor & 0xff0000) >> 16;
        const g = (hexColor & 0x00ff00) >>  8;
        const b = (hexColor & 0x0000ff);
        return this.setRGB(r, g, b);
    }
    setHSL(h, s, l) {
        h = keepInRange(h, 0, 360);
        s = clamp(s, 0, 1);
        l = clamp(l, 0, 1);
        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs((h / 60) % 2 - 1));
        let m = l - (c / 2);
        let r = 0, g = 0, b = 0;
        if                  (h <  60) { r = c; g = x; b = 0; }
        else if ( 60 <= h && h < 120) { r = x; g = c; b = 0; }
        else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
        else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
        else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
        else if (300 <= h)            { r = c; g = 0; b = x; }
        this.setRGBF(r + m, g + m, b + m);
        return this;
    }
    setRandom() {
        return this.setRGBF(Math.random(), Math.random(), Math.random());
    };
    setRGB(r, g, b) {
        return this.setRGBF(r / 255, g / 255, b / 255);
    }
    setRGBF(r, g, b) {
        this.r = clamp(r, 0, 1);
        this.g = clamp(g, 0, 1);
        this.b = clamp(b, 0, 1);
        return this;
    }
    setRYB(r, y, b) {
        const hexColor = cubicInterpolation(clamp(r, 0, 255), clamp(y, 0, 255), clamp(b, 0, 255), 255, CUBE.RYB_TO_RGB);
        return this.setHex(hexColor);
    }
    setScalar(scalar) {
        return this.setRGB(scalar, scalar, scalar);
    }
    setScalarF(scalar) {
        return this.setRGBF(scalar, scalar, scalar);
    }
    setStyle(style) {
        let m;
        if (m = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(style)) {
            let color;
            const format = m[1];
            const components = m[2];
            switch (format) {
                case 'rgb':
                case 'rgba':
                    if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        const r = Math.min(255, parseInt(color[1], 10));
                        const g = Math.min(255, parseInt(color[2], 10));
                        const b = Math.min(255, parseInt(color[3], 10));
                        return this.setRGB(r, g, b);
                    }
                    if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        const r = (Math.min(100, parseInt(color[1], 10)) / 100);
                        const g = (Math.min(100, parseInt(color[2], 10)) / 100);
                        const b = (Math.min(100, parseInt(color[3], 10)) / 100);
                        return this.setRGBF(r, g, b);
                    }
                    break;
                case 'hsl':
                case 'hsla':
                    if (color = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        const h = parseFloat(color[1]);
                        const s = parseInt(color[2], 10) / 100;
                        const l = parseInt(color[3], 10) / 100;
                        return this.setHSL(h, s, l);
                    }
                    break;
            }
        } else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
            const hex = m[1];
            const size = hex.length;
            if (size === 3) {
                const r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
                const g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
                const b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
                return this.setRGB(r, g, b);
            } else if (size === 6) {
                const r = parseInt(hex.charAt(0) + hex.charAt(1), 16);
                const g = parseInt(hex.charAt(2) + hex.charAt(3), 16);
                const b = parseInt(hex.charAt(4) + hex.charAt(5), 16);
                return this.setRGB(r, g, b);
            }
        }
        if (style && style.length > 0) {
            return this.setColorName(style);
        }
        return this;
    }
    cssString(alpha ) {
        return ('rgb(' + this.rgbString(alpha) + ')');
    }
    hex() {
        return ((this.red() << 16) + (this.green() << 8) + this.blue());
    }
    hexString(inputColorData ){
        if (inputColorData) this.set(inputColorData);
        return Iris.hexString(this.hex());
    }
    static hexString(inputColorData = 0x000000){
        _temp.set(inputColorData);
        return '#' + ('000000' + ((_temp.hex()) >>> 0).toString(16)).slice(-6);
    }
    static randomHex() {
        return _random.setRandom().hex();
    }
    rgbString(alpha) {
        const rgb = this.red() + ', ' + this.green() + ', ' + this.blue();
        return ((alpha !== undefined && alpha !== null) ? String(rgb + ', ' + alpha) : rgb);
    }
    toJSON() {
        return this.hex();
    }
    getHSL(target) {
        if (target && isHSL(target)) {
            target.h = hueF(this.hex());
            target.s = saturation(this.hex());
            target.l = lightness(this.hex());
        } else {
            return { h: hueF(this.hex()), s: saturation(this.hex()), l: lightness(this.hex()) };
        }
    }
    getRGB(target) {
        if (target && isHSL(target)) {
            target.r = this.r;
            target.g = this.g;
            target.b = this.b;
        } else {
            return { r: this.r, g: this.g, b: this.b };
        }
    }
    getRYB(target) {
        let rybAsHex = cubicInterpolation(this.r, this.g, this.b, 1.0, CUBE.RGB_TO_RYB);
        if (target && isRYB(target)) {
            target.r = redF(rybAsHex);
            target.y = greenF(rybAsHex);
            target.b = blueF(rybAsHex);
            return target;
        }
        return {
            r: redF(rybAsHex),
            y: greenF(rybAsHex),
            b: blueF(rybAsHex)
        };
    }
    toArray(array = [], offset = 0) {
        array[offset] = this.r;
        array[offset + 1] = this.g;
        array[offset + 2] = this.b;
        return array;
    }
    red() { return clamp(Math.floor(this.r * 255), 0, 255); }
    green() { return clamp(Math.floor(this.g * 255), 0, 255); }
    blue() { return clamp(Math.floor(this.b * 255), 0, 255); }
    redF() { return this.r; }
    greenF() { return this.g; }
    blueF() { return this.b; }
    hue() { return hue(this.hex()); }
    saturation() { return saturation(this.hex()); }
    lightness() { return lightness(this.hex()); }
    hueF() { return hueF(this.hex()); }
    hueRYB() {
        for (let i = 1; i < RYB_OFFSET.length; i++) {
            if (RYB_OFFSET[i] > this.hue()) return i - 2;
        }
    }
    add(color) {
        if (!color.isColor) console.warn(`Iris.add(): Missing 'color' object`);
        return this.setRGBF(this.r + color.r, this.g + color.g, this.b + color.b);
    }
    addScalar(scalar) {
        return this.setRGB(this.red() + scalar, this.green() + scalar, this.blue() + scalar);
    }
    addScalarF(scalar) {
        return this.setRGBF(this.r + scalar, this.g + scalar, this.b + scalar);
    }
    brighten(amount = 0.5  ) {
        let h = hue(this.hex());
        let s = saturation(this.hex());
        let l = lightness(this.hex());
        l = l + ((1.0 - l) * amount);
        this.setHSL(h, s, l);
        return this;
    }
    darken(amount = 0.5  ) {
        let h = hue(this.hex());
        let s = saturation(this.hex());
        let l = lightness(this.hex()) * amount;
        return this.setHSL(h, s, l);
    }
    greyscale(percent = 1.0, format = 'luminosity') { return this.grayscale(percent, format) }
    grayscale(percent = 1.0, format = 'luminosity') {
        let gray = 0;
        switch (format) {
            case 'luminosity':
                gray = (this.r * 0.21) + (this.g * 0.72) + (this.b * 0.07);
            case 'average':
            default:
                gray = (this.r + this.g + this.b) / 3;
        }
        percent = clamp(percent, 0, 1);
        const r = (this.r * (1.0 - percent)) + (percent * gray);
        const g = (this.g * (1.0 - percent)) + (percent * gray);
        const b = (this.b * (1.0 - percent)) + (percent * gray);
        return this.setRGBF(r, g, b);
    }
    hslOffset(h, s, l) {
        return this.setHSL(this.hue() + h, this.saturation() + s, this.lightness() + l);
    }
    mix(color, percent = 0.5) {
        if (!color.isColor) console.warn(`Iris.mix(): Missing 'color' object`);
        percent = clamp(percent, 0, 1);
        const r = (this.r * (1.0 - percent)) + (percent * color.r);
        const g = (this.g * (1.0 - percent)) + (percent * color.g);
        const b = (this.b * (1.0 - percent)) + (percent * color.b);
        return this.setRGBF(r, g, b);
    }
    multiply(color) {
        if (!color.isColor) console.warn(`Iris.multiply(): Missing 'color' object`);
        return this.setRGBF(this.r * color.r, this.g * color.g, this.b * color.b);
    }
    multiplyScalar(scalar) {
        return this.setRGBF(this.r * scalar, this.g * scalar, this.b * scalar);
    }
    rgbComplementary() {
        return this.rgbRotateHue(180);
    }
    rgbRotateHue(degrees = 90) {
        const newHue = keepInRange(this.hue() + degrees);
        return this.setHSL(newHue, this.saturation(), this.lightness());
    }
    rybAdjust() {
        return this.setHSL(hue(matchSpectrum(this.hue(), SPECTRUM.RYB)), this.saturation(), this.lightness());
    }
    rybComplementary() {
        return this.rybRotateHue(180);
    }
    rybRotateHue(degrees = 90) {
        const newHue = keepInRange(this.hueRYB() + degrees);
        return this.setHSL(hue(matchSpectrum(newHue, SPECTRUM.RYB)), this.saturation(), this.lightness());
    }
    subtract(color) {
        if (!color.isColor) console.warn(`Iris.subtract(): Missing 'color' object`);
        return this.setRGBF(this.r - color.r, this.g - color.g, this.b - color.b);
    }
    equals(color) {
        if (!color.isColor) console.warn(`Iris.equals(): Missing 'color' object`);
        return (fuzzy(this.r, color.r) && fuzzy(this.g, color.g) && fuzzy(this.b, color.b));
    }
    isEqual(color) {
        return this.equals(color);
    }
    isDark() {
        const h = this.hue();
        const l = this.lightness();
        return ((l < 0.60 && (h >= 210 || h <= 27)) || (l <= 0.32));
    }
    isLight() {
        return (!this.isDark());
    }
}
function isRGB(object) { return (object.r !== undefined && object.g !== undefined && object.b !== undefined); }
function isHSL(object) { return (object.h !== undefined && object.s !== undefined && object.l !== undefined); }
function isRYB(object) { return (object.r !== undefined && object.y !== undefined && object.b !== undefined); }
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
function red(hexColor) { return clamp((hexColor & 0xff0000) >> 16, 0, 255); }
function green(hexColor) { return clamp((hexColor & 0x00ff00) >> 8, 0, 255); }
function blue(hexColor) { return clamp((hexColor & 0x0000ff), 0, 255); }
function redF(hexColor) { return red(hexColor) / 255.0; }
function greenF(hexColor) { return green(hexColor) / 255.0; }
function blueF(hexColor) { return blue(hexColor) / 255.0; }
function hue(hexColor) { return hsl(hexColor, 'h'); }
function hueF(hexColor) { return hue(hexColor) / 360; }
function saturation(hexColor) { return hsl(hexColor, 's'); }
function lightness(hexColor) { return hsl(hexColor, 'l'); }
function fuzzy(a, b, tolerance = 0.0015) { return ((a < (b + tolerance)) && (a > (b - tolerance))); }
function keepInRange(value, min = 0, max = 360) {
    while (value >= max) value -= (max - min);
    while (value <  min) value += (max - min);
    return value;
}
let _hslHex, _hslH, _hslS, _hslL;
function hsl(hexColor, channel = 'h') {
    if (hexColor !== _hslHex) {
        if (hexColor === undefined || hexColor === null) return 0;
        const r = redF(hexColor), g = greenF(hexColor), b = blueF(hexColor);
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const delta = max - min;
        _hslL = (max + min) / 2;
        if (delta === 0) {
            _hslH = _hslS = 0;
        } else {
            _hslS = (_hslL <= 0.5) ? (delta / (max + min)) : (delta / (2 - max - min));
            switch (max) {
                case r: _hslH = (g - b) / delta + (g < b ? 6 : 0); break;
                case g: _hslH = (b - r) / delta + 2; break;
                case b: _hslH = (r - g) / delta + 4; break;
            }
            _hslH = Math.round(_hslH * 60);
            if (_hslH < 0) _hslH += 360;
        }
        _hslHex = hexColor;
    }
    switch (channel) {
        case 'h': return _hslH;
        case 's': return _hslS;
        case 'l': return _hslL;
        default: console.warn(`Iris.hsl(): Unknown channel (${channel})`);
    }
    return 0;
}
const _interpolate = new Iris();
const _mix1 = new Iris();
const _mix2 = new Iris();
const _random = new Iris();
const _temp = new Iris();
function matchSpectrum(matchHue, spectrum = SPECTRUM.RYB) {
    let colorDegrees = 360 / spectrum.length;
    let degreeCount = colorDegrees;
    let stopCount = 0;
    for (let i = 0; i < spectrum.length; i++) {
        if (matchHue < degreeCount) {
            let percent = (degreeCount - matchHue) / colorDegrees;
            _mix1.set(spectrum[stopCount + 1]);
            return _mix1.mix(_mix2.set(spectrum[stopCount]), percent).hex();
        } else {
            degreeCount = degreeCount + colorDegrees;
            stopCount = stopCount + 1;
        }
    }
}
function cubicInterpolation(v1, v2, v3, scale = 255, table = CUBE.RYB_TO_RGB) {
    v1 = clamp(v1 / scale, 0, 1);
    v2 = clamp(v2 / scale, 0, 1);
    v3 = clamp(v3 / scale, 0, 1);
    const f0 = table[0], f1 = table[1], f2 = table[2], f3 = table[3];
    const f4 = table[4], f5 = table[5], f6 = table[6], f7 = table[7];
    const i1 = 1.0 - v1;
    const i2 = 1.0 - v2;
    const i3 = 1.0 - v3;
    const c0 = i1 * i2 * i3;
    const c1 = i1 * i2 * v3;
    const c2 = i1 * v2 * i3;
    const c3 = v1 * i2 * i3;
    const c4 = i1 * v2 * v3;
    const c5 = v1 * i2 * v3;
    const c6 = v1 * v2 * i3;
    const v7 = v1 * v2 * v3;
    const o1 = c0*f0[0] + c1*f1[0] + c2*f2[0] + c3*f3[0] + c4*f4[0] + c5*f5[0] + c6*f6[0] + v7*f7[0];
    const o2 = c0*f0[1] + c1*f1[1] + c2*f2[1] + c3*f3[1] + c4*f4[1] + c5*f5[1] + c6*f6[1] + v7*f7[1];
    const o3 = c0*f0[2] + c1*f1[2] + c2*f2[2] + c3*f3[2] + c4*f4[2] + c5*f5[2] + c6*f6[2] + v7*f7[2];
    return _interpolate.set(o1, o2, o3, 'gl').hex();
}
const CUBE = {
    RYB_TO_RGB: [
        [ 1.000, 1.000, 1.000 ],
        [ 0.163, 0.373, 0.600 ],
        [ 1.000, 1.000, 0.000 ],
        [ 1.000, 0.000, 0.000 ],
        [ 0.000, 0.660, 0.200 ],
        [ 0.500, 0.000, 0.500 ],
        [ 1.000, 0.500, 0.000 ],
        [ 0.000, 0.000, 0.000 ]
    ],
    RGB_TO_RYB: [
        [ 1.000, 1.000, 1.000 ],
        [ 0.000, 0.000, 1.000 ],
        [ 0.000, 1.000, 0.483 ],
        [ 1.000, 0.000, 0.000 ],
        [ 0.000, 0.053, 0.210 ],
        [ 0.309, 0.000, 0.469 ],
        [ 0.000, 1.000, 0.000 ],
        [ 0.000, 0.000, 0.000 ]
    ]
};
const SPECTRUM = {
    RYB: [
        0xFF0000, 0xFF4900, 0xFF7400, 0xFF9200, 0xFFAA00, 0xFFBF00, 0xFFD300, 0xFFE800,
        0xFFFF00, 0xCCF600, 0x9FEE00, 0x67E300, 0x00CC00, 0x00AF64, 0x009999, 0x0B61A4,
        0x1240AB, 0x1B1BB3, 0x3914AF, 0x530FAD, 0x7109AA, 0xA600A6, 0xCD0074, 0xE40045,
        0xFF0000
    ]
};
const RYB_OFFSET = [
    0,   1,   2,   3,   5,   6,   7,   8,   9,  10,  11,  13,  14,  15,  16,  17,  18,  19,  19,  20,
    21,  21,  22,  23,  23,  24,  25,  25,  26,  27,  27,  28,  28,  29,  29,  30,  30,  31,  31,  32,
    32,  32,  33,  33,  34,  34,  35,  35,  35,  36,  36,  37,  37,  37,  38,  38,  38,  39,  39,  40,
    40,  40,  41,  41,  41,  42,  42,  42,  43,  43,  43,  44,  44,  44,  45,  45,  45,  46,  46,  46,
    47,  47,  47,  47,  48,  48,  48,  49,  49,  49,  50,  50,  50,  51,  51,  51,  52,  52,  52,  53,
    53,  53,  54,  54,  54,  55,  55,  55,  56,  56,  56,  57,  57,  57,  58,  58,  59,  59,  59,  60,
    60,  61,  61,  62,  63,  63,  64,  65,  65,  66,  67,  68,  68,  69,  70,  70,  71,  72,  72,  73,
    73,  74,  75,  75,  76,  77,  77,  78,  79,  79,  80,  81,  82,  82,  83,  84,  85,  86,  87,  88,
    88,  89,  90,  91,  92,  93,  95,  96,  98, 100, 102, 104, 105, 107, 109, 111, 113, 115, 116, 118,
    120, 122, 125, 127, 129, 131, 134, 136, 138, 141, 143, 145, 147, 150, 152, 154, 156, 158, 159, 161,
    163, 165, 166, 168, 170, 171, 173, 175, 177, 178, 180, 182, 184, 185, 187, 189, 191, 192, 194, 196,
    198, 199, 201, 203, 205, 206, 207, 208, 209, 210, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221,
    222, 223, 224, 226, 227, 228, 229, 230, 232, 233, 234, 235, 236, 238, 239, 240, 241, 242, 243, 244,
    245, 246, 247, 248, 249, 250, 251, 251, 252, 253, 254, 255, 256, 257, 257, 258, 259, 260, 260, 261,
    262, 263, 264, 264, 265, 266, 267, 268, 268, 269, 270, 271, 272, 273, 274, 274, 275, 276, 277, 278,
    279, 280, 282, 283, 284, 286, 287, 289, 290, 292, 293, 294, 296, 297, 299, 300, 302, 303, 305, 307,
    309, 310, 312, 314, 316, 317, 319, 321, 323, 324, 326, 327, 328, 329, 330, 331, 332, 333, 334, 336,
    337, 338, 339, 340, 341, 342, 343, 344, 345, 347, 348, 349, 350, 352, 353, 354, 355, 356, 358, 359,
    999
];
const HTML_COLORS = {
    'aliceblue': 0xf0f8ff, 'antiquewhite': 0xfaebd7, 'aqua': 0x00ffff, 'aquamarine': 0x7fffd4,
    'azure': 0xf0ffff, 'beige': 0xf5f5dc, 'bisque': 0xffe4c4, 'black': 0x000000, 'blanchedalmond': 0xffebcd,
    'blue': 0x0000ff, 'blueviolet': 0x8a2be2, 'brown': 0xa52a2a, 'burlywood': 0xdeb887, 'cadetblue': 0x5f9ea0,
    'chartreuse': 0x7fff00, 'chocolate': 0xd2691e, 'coral': 0xff7f50, 'cornflowerblue': 0x6495ed,
    'cornsilk': 0xfff8dc, 'crimson': 0xdc143c, 'cyan': 0x00ffff, 'darkblue': 0x00008b, 'darkcyan': 0x008b8b,
    'darkgoldenrod': 0xb8860b, 'darkgray': 0xa9a9a9, 'darkgreen': 0x006400, 'darkgrey': 0xa9a9a9,
    'darkkhaki': 0xbdb76b, 'darkmagenta': 0x8b008b, 'darkolivegreen': 0x556b2f, 'darkorange': 0xff8c00,
    'darkorchid': 0x9932cc, 'darkred': 0x8b0000, 'darksalmon': 0xe9967a, 'darkseagreen': 0x8fbc8f,
    'darkslateblue': 0x483d8b, 'darkslategray': 0x2f4f4f, 'darkslategrey': 0x2f4f4f, 'darkturquoise': 0x00ced1,
    'darkviolet': 0x9400d3, 'deeppink': 0xff1493, 'deepskyblue': 0x00bfff, 'dimgray': 0x696969,
    'dimgrey': 0x696969, 'dodgerblue': 0x1e90ff, 'firebrick': 0xb22222, 'floralwhite': 0xfffaf0,
    'forestgreen': 0x228b22, 'fuchsia': 0xff00ff, 'gainsboro': 0xdcdcdc, 'ghostwhite': 0xf8f8ff,
    'gold': 0xffd700, 'goldenrod': 0xdaa520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xadff2f,
    'grey': 0x808080, 'honeydew': 0xf0fff0, 'hotpink': 0xff69b4, 'indianred': 0xcd5c5c, 'indigo': 0x4b0082,
    'ivory': 0xfffff0, 'khaki': 0xf0e68c, 'lavender': 0xe6e6fa, 'lavenderblush': 0xfff0f5, 'lawngreen': 0x7cfc00,
    'lemonchiffon': 0xfffacd, 'lightblue': 0xadd8e6, 'lightcoral': 0xf08080, 'lightcyan': 0xe0ffff,
    'lightgoldenrodyellow': 0xfafad2, 'lightgray': 0xd3d3d3, 'lightgreen': 0x90ee90, 'lightgrey': 0xd3d3d3,
    'lightpink': 0xffb6c1, 'lightsalmon': 0xffa07a, 'lightseagreen': 0x20b2aa, 'lightskyblue': 0x87cefa,
    'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xb0c4de, 'lightyellow': 0xffffe0,
    'lime': 0x00ff00, 'limegreen': 0x32cd32, 'linen': 0xfaf0e6, 'magenta': 0xff00ff, 'maroon': 0x800000,
    'mediumaquamarine': 0x66cdaa, 'mediumblue': 0x0000cd, 'mediumorchid': 0xba55d3, 'mediumpurple': 0x9370db,
    'mediumseagreen': 0x3cb371, 'mediumslateblue': 0x7b68ee, 'mediumspringgreen': 0x00fa9a,
    'mediumturquoise': 0x48d1cc, 'mediumvioletred': 0xc71585, 'midnightblue': 0x191970, 'mintcream': 0xf5fffa,
    'mistyrose': 0xffe4e1, 'moccasin': 0xffe4b5, 'navajowhite': 0xffdead, 'navy': 0x000080, 'oldlace': 0xfdf5e6,
    'olive': 0x808000, 'olivedrab': 0x6b8e23, 'orange': 0xffa500, 'orangered': 0xff4500, 'orchid': 0xda70d6,
    'palegoldenrod': 0xeee8aa, 'palegreen': 0x98fb98, 'paleturquoise': 0xafeeee, 'palevioletred': 0xdb7093,
    'papayawhip': 0xffefd5, 'peachpuff': 0xffdab9, 'peru': 0xcd853f, 'pink': 0xffc0cb, 'plum': 0xdda0dd,
    'powderblue': 0xb0e0e6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xff0000,
    'rosybrown': 0xbc8f8f, 'royalblue': 0x4169e1, 'saddlebrown': 0x8b4513, 'salmon': 0xfa8072,
    'sandybrown': 0xf4a460, 'seagreen': 0x2e8b57, 'seashell': 0xfff5ee, 'sienna': 0xa0522d, 'silver': 0xc0c0c0,
    'skyblue': 0x87ceeb, 'slateblue': 0x6a5acd, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xfffafa,
    'springgreen': 0x00ff7f, 'steelblue': 0x4682b4, 'tan': 0xd2b48c, 'teal': 0x008080, 'thistle': 0xd8bfd8,
    'tomato': 0xff6347, 'turquoise': 0x40e0d0, 'transparent': 0x000000, 'violet': 0xee82ee, 'wheat': 0xf5deb3,
    'white': 0xffffff, 'whitesmoke': 0xf5f5f5, 'yellow': 0xffff00, 'yellowgreen': 0x9acd32
};
const EXTENDED_COLORS = {
    'black': 0x000000, 'charcoal': 0x36454f, 'darkgreen': 0x023020, 'darkpurple': 0x301934, 'jetblack': 0x343434,
    'licorice': 0x1b1212, 'matteblack': 0x28282b, 'midnightblue': 0x191970, 'onyx': 0x353935,
    'aqua': 0x00ffff, 'azure': 0xf0ffff, 'babyblue': 0x89cff0, 'blue': 0x0000ff, 'bluegray': 0x7393b3,
    'bluegreen': 0x088f8f, 'brightblue': 0x0096ff, 'cadetblue': 0x5f9ea0, 'cobaltblue': 0x0047ab,
    'cornflowerblue': 0x6495ed, 'cyan': 0x00ffff, 'darkblue': 0x00008b, 'denim': 0x6f8faf, 'egyptianblue': 0x1434a4,
    'electricblue': 0x7df9ff, 'glaucous': 0x6082b6, 'jade': 0x00a36c, 'indigo': 0x3f00ff, 'iris': 0x5d3fd3,
    'lightblue': 0xadd8e6, 'midnightblue': 0x191970, 'navyblue': 0x000080, 'neonblue': 0x1f51ff,
    'pastelblue': 0xa7c7e7, 'periwinkle': 0xccccff, 'powderblue': 0xb6d0e2, 'robineggblue': 0x96ded1,
    'royalblue': 0x4169e1, 'sapphireblue': 0x0f52ba, 'seafoamgreen': 0x9fe2bf, 'skyblue': 0x87ceeb,
    'steelblue': 0x4682b4, 'teal': 0x008080, 'turquoise': 0x40e0d0, 'ultramarine': 0x0437f2, 'verdigris': 0x40b5ad,
    'zaffre': 0x0818a8,
    'almond': 0xeaddca, 'brass': 0xe1c16e, 'bronze': 0xcd7f32, 'brown': 0xa52a2a, 'buff': 0xdaa06d,
    'burgundy': 0x800020, 'burntsienna': 0xe97451, 'burntumber': 0x6e260e, 'camel': 0xc19a6b, 'chestnut': 0x954535,
    'chocolate': 0x7b3f00, 'cinnamon': 0xd27d2d, 'coffee': 0x6f4e37, 'cognac': 0x834333, 'copper': 0xb87333,
    'cordovan': 0x814141, 'darkbrown': 0x5c4033, 'darkred': 0x8b0000, 'darktan': 0x988558, 'ecru': 0xc2b280,
    'fallow': 0xc19a6b, 'fawn': 0xe5aa70, 'garnet': 0x9a2a2a, 'goldenbrown': 0x966919, 'khaki': 0xf0e68c,
    'lightbrown': 0xc4a484, 'mahogany': 0xc04000, 'maroon': 0x800000, 'mocha': 0x967969, 'nude': 0xf2d2bd,
    'ochre': 0xcc7722, 'olivegreen': 0x808000, 'oxblood': 0x4a0404, 'puce': 0xa95c68, 'redbrown': 0xa52a2a,
    'redochre': 0x913831, 'russet': 0x80461b, 'saddlebrown': 0x8b4513, 'sand': 0xc2b280, 'sienna': 0xa0522d,
    'tan': 0xd2b48c, 'taupe': 0x483c32, 'tuscanred': 0x7c3030, 'wheat': 0xf5deb3, 'wine': 0x722f37,
    'ashgray': 0xb2beb5, 'bluegray': 0x7393b3, 'charcoal': 0x36454f, 'darkgray': 0xa9a9a9, 'glaucous': 0x6082b6,
    'gray': 0x808080, 'gunmetalgray': 0x818589, 'lightgray': 0xd3d3d3, 'pewter': 0x899499, 'platinum': 0xe5e4e2,
    'sagegreen': 0x8a9a5b, 'silver': 0xc0c0c0, 'slategray': 0x708090, 'smoke': 0x848884, 'steelgray': 0x71797e,
    'aqua': 0x00ffff, 'aquamarine': 0x7fffd4, 'armygreen': 0x454b1b, 'bluegreen': 0x088f8f, 'brightgreen': 0xaaff00,
    'cadetblue': 0x5f9ea0, 'cadmiumgreen': 0x097969, 'celadon': 0xafe1af, 'chartreuse': 0xdfff00, 'citrine': 0xe4d00a,
    'cyan': 0x00ffff, 'darkgreen': 0x023020, 'electricblue': 0x7df9ff, 'emeraldgreen': 0x50c878, 'eucalyptus': 0x5f8575,
    'ferngreen': 0x4f7942, 'forestgreen': 0x228b22, 'grassgreen': 0x7cfc00, 'green': 0x008000, 'huntergreen': 0x355e3b,
    'jade': 0x00a36c, 'junglegreen': 0x2aaa8a, 'kellygreen': 0x4cbb17, 'lightgreen': 0x90ee90, 'limegreen': 0x32cd32,
    'lincolngreen': 0x478778, 'malachite': 0x0bda51, 'mintgreen': 0x98fb98, 'mossgreen': 0x8a9a5b,
    'neongreen': 0x0fff50, 'nyanza': 0xecffdc, 'olivegreen': 0x808000, 'pastelgreen': 0xc1e1c1, 'pear': 0xc9cc3f,
    'peridot': 0xb4c424, 'pistachio': 0x93c572, 'robineggblue': 0x96ded1, 'sagegreen': 0x8a9a5b,
    'seagreen': 0x2e8b57, 'seafoamgreen': 0x9fe2bf, 'shamrockgreen': 0x009e60, 'springgreen': 0x00ff7f,
    'teal': 0x008080, 'turquoise': 0x40e0d0, 'vegasgold': 0xc4b454, 'verdigris': 0x40b5ad, 'viridian': 0x40826d,
    'amber': 0xffbf00, 'apricot': 0xfbceb1, 'bisque': 0xf2d2bd, 'brightorange': 0xffac1c, 'bronze': 0xcd7f32,
    'buff': 0xdaa06d, 'burntorange': 0xcc5500, 'burntsienna': 0xe97451, 'butterscotch': 0xe3963e,
    'cadmiumorange': 0xf28c28, 'cinnamon': 0xd27d2d, 'copper': 0xb87333, 'coral': 0xff7f50, 'coralpink': 0xf88379,
    'darkorange': 0x8b4000, 'desert': 0xfad5a5, 'gamboge': 0xe49b0f, 'goldenyellow': 0xffc000, 'goldenrod': 0xdaa520,
    'lightorange': 0xffd580, 'mahogany': 0xc04000, 'mango': 0xf4bb44, 'navajowhite': 0xffdead, 'neonorange': 0xff5f1f,
    'ochre': 0xcc7722, 'orange': 0xffa500, 'pastelorange': 0xfac898, 'peach': 0xffe5b4, 'persimmon': 0xec5800,
    'pinkorange': 0xf89880, 'poppy': 0xe35335, 'pumpkinorange': 0xff7518, 'redorange': 0xff4433, 'safetyorange': 0xff5f15,
    'salmon': 0xfa8072, 'seashell': 0xfff5ee, 'sienna': 0xa0522d, 'sunsetorange': 0xfa5f55, 'tangerine': 0xf08000,
    'terracotta': 0xe3735e, 'yelloworange': 0xffaa33,
    'amaranth': 0x9f2b68, 'bisque': 0xf2d2bd, 'cerise': 0xde3163, 'claret': 0x811331, 'coral': 0xff7f50,
    'coralpink': 0xf88379, 'crimson': 0xdc143c, 'darkpink': 0xaa336a, 'dustyrose': 0xc9a9a6,
    'fuchsia': 0xff00ff, 'hotpink': 0xff69b4, 'lightpink': 0xffb6c1, 'magenta': 0xff00ff, 'millennialpink': 0xf3cfc6,
    'mulberry': 0x770737, 'neonpink': 0xff10f0, 'orchid': 0xda70d6, 'pastelpink': 0xf8c8dc, 'pastelred': 0xfaa0a0,
    'pink': 0xffc0cb, 'pinkorange': 0xf89880, 'plum': 0x673147, 'puce': 0xa95c68, 'purple': 0x800080,
    'raspberry': 0xe30b5c, 'redpurple': 0x953553, 'rose': 0xf33a6a, 'rosegold': 0xe0bfb8, 'rosered': 0xc21e56,
    'rubyred': 0xe0115f, 'salmon': 0xfa8072, 'seashell': 0xfff5ee, 'thistle': 0xd8bfd8, 'watermelonpink': 0xe37383,
    'amaranth': 0x9f2b68, 'brightpurple': 0xbf40bf, 'burgundy': 0x800020, 'byzantium': 0x702963, 'darkpink': 0xaa336a,
    'darkpurple': 0x301934, 'eggplant': 0x483248, 'iris': 0x5d3fd3, 'lavender': 0xe6e6fa, 'lightpurple': 0xcbc3e3,
    'lightviolet': 0xcf9fff, 'lilac': 0xaa98a9, 'mauve': 0xe0b0ff, 'mauvetaupe': 0x915f6d, 'mulberry': 0x770737,
    'orchid': 0xda70d6, 'pastelpurple': 0xc3b1e1, 'periwinkle': 0xccccff, 'plum': 0x673147, 'puce': 0xa95c68,
    'purple': 0x800080, 'quartz': 0x51414f, 'redpurple': 0x953553, 'thistle': 0xd8bfd8, 'tyrianpurple': 0x630330,
    'violet': 0x7f00ff, 'wine': 0x722f37, 'wisteria': 0xbdb5d5,
    'bloodred': 0x880808, 'brickred': 0xaa4a44, 'brightred': 0xee4b2b, 'brown': 0xa52a2a, 'burgundy': 0x800020,
    'burntumber': 0x6e260e, 'burntorange': 0xcc5500, 'burntsienna': 0xe97451, 'byzantium': 0x702963,
    'cadmiumred': 0xd22b2b, 'cardinalred': 0xc41e3a, 'carmine': 0xd70040, 'cerise': 0xde3163, 'cherry': 0xd2042d,
    'chestnut': 0x954535, 'claret': 0x811331, 'coralpink': 0xf88379, 'cordovan': 0x814141, 'crimson': 0xdc143c,
    'darkred': 0x8b0000, 'falured': 0x7b1818, 'garnet': 0x9a2a2a, 'mahogany': 0xc04000, 'maroon': 0x800000,
    'marsala': 0x986868, 'mulberry': 0x770737, 'neonred': 0xff3131, 'oxblood': 0x4a0404, 'pastelred': 0xfaa0a0,
    'persimmon': 0xec5800, 'poppy': 0xe35335, 'puce': 0xa95c68, 'raspberry': 0xe30b5c, 'red': 0xff0000,
    'redbrown': 0xa52a2a, 'redochre': 0x913831, 'redorange': 0xff4433, 'redpurple': 0x953553, 'rosered': 0xc21e56,
    'rubyred': 0xe0115f, 'russet': 0x80461b, 'salmon': 0xfa8072, 'scarlet': 0xff2400, 'sunsetorange': 0xfa5f55,
    'terracotta': 0xe3735e, 'tuscanred': 0x7c3030, 'tyrianpurple': 0x630330, 'venetianred': 0xa42a04,
    'vermillion': 0xe34234, 'wine': 0x722f37,
    'alabaster': 0xedeade, 'beige': 0xf5f5dc, 'bonewhite': 0xf9f6ee, 'cornsilk': 0xfff8dc, 'cream': 0xfffdd0,
    'eggshell': 0xf0ead6, 'ivory': 0xfffff0, 'linen': 0xe9dcc9, 'navajowhite': 0xffdead, 'offwhite': 0xfaf9f6,
    'parchment': 0xfcf5e5, 'peach': 0xffe5b4, 'pearl': 0xe2dfd2, 'seashell': 0xfff5ee, 'vanilla': 0xf3e5ab,
    'white': 0xffffff,
    'almond': 0xeaddca, 'amber': 0xffbf00, 'apricot': 0xfbceb1, 'beige': 0xf5f5dc, 'brass': 0xe1c16e,
    'brightyellow': 0xffea00, 'cadmiumyellow': 0xfdda0d, 'canaryyellow': 0xffff8f, 'chartreuse': 0xdfff00,
    'citrine': 0xe4d00a, 'cornsilk': 0xfff8dc, 'cream': 0xfffdd0, 'darkyellow': 0x8b8000, 'desert': 0xfad5a5,
    'ecru': 0xc2b280, 'flax': 0xeedc82, 'gamboge': 0xe49b0f, 'gold': 0xffd700, 'goldenyellow': 0xffc000,
    'goldenrod': 0xdaa520, 'icterine': 0xfcf55f, 'ivory': 0xfffff0, 'jasmine': 0xf8de7e, 'khaki': 0xf0e68c,
    'lemonyellow': 0xfafa33, 'maize': 0xfbec5d, 'mango': 0xf4bb44, 'mustardyellow': 0xffdb58, 'naplesyellow': 0xfada5e,
    'navajowhite': 0xffdead, 'nyanza': 0xecffdc, 'pastelyellow': 0xfffaa0, 'peach': 0xffe5b4, 'pear': 0xc9cc3f,
    'peridot': 0xb4c424, 'pistachio': 0x93c572, 'saffron': 0xf4c430, 'vanilla': 0xf3e5ab, 'vegasgold': 0xc4b454,
    'wheat': 0xf5deb3, 'yellow': 0xffff00, 'yelloworange': 0xffaa33,
};

const _clr$5 = new Iris();
class Button extends Element {
    constructor(buttonText = ' ', closesMenus = true) {
        super(document.createElement('button'));
        const self = this;
        this.setClass('suey-button');
        this.allowMouseFocus();
        this.dom.textContent = buttonText ?? ' ';
        this.attachedMenu = undefined;
        this.menuOffsetX = 0;
        this.menuOffsetY = 0;
        this.alignMenu = ALIGN.LEFT;
        this.overflowMenu = OVERFLOW.RIGHT;
        this.closesMenus = closesMenus;
        Object.defineProperty(this, 'disabled', {
            get: function() { return (this.dom) ? this.dom.disabled : true; },
            set: function(isDisabled) { if (this.dom) this.dom.disabled = isDisabled; }
        });
        function onPointerDown(event) {
            const hideEvent = new Event('hidetooltip', { bubbles: true });
            self.dom.dispatchEvent(hideEvent);
            event.preventDefault();
        }
        this.on('pointerdown', onPointerDown);
        this.on('destroy', () => {
            if (self.attachedMenu) self.detachMenu();
        });
    }
    setColor(color) {
        if (typeof color === 'string' && Object.values(TRAIT).includes(color)) color = `var(--${color})`;
        else color = _clr$5.set(color).rgbString();
        this.setStyle('background-image', `linear-gradient(to bottom, rgba(${color}, 0.9), rgba(${color}, 0.65))`);
        return this;
    }
    attachMenu(menuElement, popupStyle = false) {
        const self = this;
        if (popupStyle) menuElement.addClass('suey-popup-menu');
        function buttonPointerDown(event) {
            event.stopPropagation();
            event.preventDefault();
            if (self.hasClass('suey-selected') === false) {
                self.addClass('suey-selected');
                popMenu();
                setTimeout(() => {
                    if (!self.dom) return;
                    menuElement.showMenu(self.dom, true );
                }, 0);
            }
            document.dispatchEvent(new Event('closemenu'));
        }
        function popMenu() {
            const popped = Popper.popUnder(menuElement.dom, self.dom, self.alignMenu, self.menuOffsetX, self.menuOffsetY, self.overflowMenu);
            menuElement.removeClass('suey-slide-up');
            menuElement.removeClass('suey-slide-down');
            menuElement.addClass((popped === POSITION.UNDER) ? 'suey-slide-down' : 'suey-slide-up');
        }
        if (menuElement.hasClass('suey-menu') === false) return this;
        this.addClass('suey-menu-button');
        this.attachedMenu = menuElement;
        document.body.appendChild(menuElement.dom);
        this.on('pointerdown', buttonPointerDown);
        const observer = new MutationObserver((mutations, observer) => {
            if (document.contains(this.dom)) {
                popMenu();
                observer.disconnect();
            }
        });
        observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
        window.addEventListener('resize', popMenu);
        this.detachMenu = function() {
            if (self.hasClass('suey-menu-button') === false) return;
            self.removeClass('suey-menu-button');
            window.removeEventListener('resize', popMenu);
            self.dom.removeEventListener('pointerdown', buttonPointerDown);
            self.attachedMenu.destroy();
            document.body.removeChild(self.attachedMenu.dom);
            self.attachedMenu = undefined;
        };
    }
    on(event, callback, options = {}) {
        if (event === 'click' || event === 'select') {
            console.warn('Button.on(): Click event for this Element is meant to be used with onPress()');
        }
        super.on(event, callback, options);
        return this;
    }
    onPress(callback) {
        if (typeof callback !== 'function') return;
        const self = this;
        callback = callback.bind(self);
        const eventHandler = function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!self.hasClass('suey-disabled')) {
                callback(event);
                if (self.closesMenus) document.dispatchEvent(new Event('closemenu'));
            }
        };
        super.on('click', eventHandler);
        return self;
    }
}

class Div extends Element {
    constructor(innerHtml) {
        super(document.createElement('div'));
        this.setInnerHtml(innerHtml);
    }
}

class Color$1 {
    constructor(r, g, b) {
        this.set(r, g, b);
    }
    toString() {
        return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
    }
    set(r, g, b) {
        this.r = this.clamp(r);
        this.g = this.clamp(g);
        this.b = this.clamp(b);
    }
    hueRotate(angle = 0) {
        angle = angle / 180 * Math.PI;
        let sin = Math.sin(angle);
        let cos = Math.cos(angle);
        this.multiply([
            0.213 + cos * 0.787 - sin * 0.213, 0.715 - cos * 0.715 - sin * 0.715, 0.072 - cos * 0.072 + sin * 0.928,
            0.213 - cos * 0.213 + sin * 0.143, 0.715 + cos * 0.285 + sin * 0.140, 0.072 - cos * 0.072 - sin * 0.283,
            0.213 - cos * 0.213 - sin * 0.787, 0.715 - cos * 0.715 + sin * 0.715, 0.072 + cos * 0.928 + sin * 0.072
        ]);
    }
    grayscale(value = 1) {
        this.multiply([
            0.2126 + 0.7874 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 - 0.0722 * (1 - value),
            0.2126 - 0.2126 * (1 - value), 0.7152 + 0.2848 * (1 - value), 0.0722 - 0.0722 * (1 - value),
            0.2126 - 0.2126 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 + 0.9278 * (1 - value)
        ]);
    }
    sepia(value = 1) {
        this.multiply([
            0.393 + 0.607 * (1 - value), 0.769 - 0.769 * (1 - value), 0.189 - 0.189 * (1 - value),
            0.349 - 0.349 * (1 - value), 0.686 + 0.314 * (1 - value), 0.168 - 0.168 * (1 - value),
            0.272 - 0.272 * (1 - value), 0.534 - 0.534 * (1 - value), 0.131 + 0.869 * (1 - value)
        ]);
    }
    saturate(value = 1) {
        this.multiply([
            0.213 + 0.787 * value, 0.715 - 0.715 * value, 0.072 - 0.072 * value,
            0.213 - 0.213 * value, 0.715 + 0.285 * value, 0.072 - 0.072 * value,
            0.213 - 0.213 * value, 0.715 - 0.715 * value, 0.072 + 0.928 * value
        ]);
    }
    multiply(matrix) {
        let newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
        let newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
        let newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
        this.r = newR; this.g = newG; this.b = newB;
    }
    brightness(value = 1) {
        this.linear(value);
    }
    contrast(value = 1) {
        this.linear(value, - (0.5 * value) + 0.5);
    }
    linear(slope = 1, intercept = 0) {
        this.r = this.clamp(this.r * slope + intercept * 255);
        this.g = this.clamp(this.g * slope + intercept * 255);
        this.b = this.clamp(this.b * slope + intercept * 255);
    }
    invert(value = 1) {
        this.r = this.clamp((value + this.r / 255 * (1 - 2 * value)) * 255);
        this.g = this.clamp((value + this.g / 255 * (1 - 2 * value)) * 255);
        this.b = this.clamp((value + this.b / 255 * (1 - 2 * value)) * 255);
    }
    hsl() {
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;
        let h, s, l = (max + min) / 2;
        if (delta === 0) {
            h = s = 0;
        } else {
            s = (l <= 0.5) ? (delta / (max + min)) : (delta / (2 - max - min));
            switch (max) {
                case r: h = (g - b) / delta + (g < b ? 6 : 0); break;
                case g: h = (b - r) / delta + 2; break;
                case b: h = (r - g) / delta + 4; break;
            }
            h /= 6;
        }
        return {
            h: h * 100,
            s: s * 100,
            l: l * 100,
        };
    }
    clamp(value) {
        if (value > 255) {
            value = 255;
        } else if (value < 0) {
            value = 0;
        }
        return value;
    }
}
class Solver {
    constructor() {
        this.target = new Color$1(0, 0, 0);
        this.targetHSL = { h: 0, s: 0, l: 0 };
        this.reusedColor = new Color$1(0, 0, 0);
    }
    setTarget(r, g, b) {
        this.target.set(r, g, b);
        this.targetHSL = this.target.hsl();
        this.reusedColor.set(0, 0, 0);
    }
    solve(toBlack = true) {
        const result = this.solveNarrow(this.solveWide());
        return {
            values: result.values,
            loss: result.loss,
            filter: this.css(result.values, toBlack),
        };
    }
    solveWide() {
        const A = 5;
        const c = 15;
        const a = [60, 180, 18000, 600, 1.2, 1.2];
        let best = { loss: Infinity };
        for (let i = 0; best.loss > 25 && i < 3; i++) {
            const initial = [50, 20, 3750, 50, 100, 100];
            const result = this.spsa(A, a, c, initial, 1000);
            if (result.loss < best.loss) {
                best = result;
            }
        }
        return best;
    }
    solveNarrow(wide) {
        const A = wide.loss;
        const c = 2;
        const A1 = A + 1;
        const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
        return this.spsa(A, a, c, wide.values, 500);
    }
    spsa(A, a, c, values, iters) {
        const alpha = 1;
        const gamma = 0.16666666666666666;
        let best = null;
        let bestLoss = Infinity;
        const deltas = new Array(6);
        const highArgs = new Array(6);
        const lowArgs = new Array(6);
        for (let k = 0; k < iters; k++) {
            const ck = c / Math.pow(k + 1, gamma);
            for (let i = 0; i < 6; i++) {
                deltas[i] = Math.random() > 0.5 ? 1 : -1;
                highArgs[i] = values[i] + ck * deltas[i];
                lowArgs[i] = values[i] - ck * deltas[i];
            }
            const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
            for (let i = 0; i < 6; i++) {
                const g = lossDiff / (2 * ck) * deltas[i];
                const ak = a[i] / Math.pow(A + k + 1, alpha);
                values[i] = fix(values[i] - ak * g, i);
            }
            const loss = this.loss(values);
            if (loss < bestLoss) {
                best = values.slice(0);
                bestLoss = loss;
            }
        }
        return { values: best, loss: bestLoss };
        function fix(value, idx) {
            let max = 100;
            if (idx === 2 ) {
                max = 7500;
            } else if (idx === 4  || idx === 5 ) {
                max = 200;
            }
            if (idx === 3 ) {
                if (value > max) {
                    value %= max;
                } else if (value < 0) {
                    value = max + value % max;
                }
            } else if (value < 0) {
                value = 0;
            } else if (value > max) {
                value = max;
            }
            return value;
        }
    }
    loss(filters) {
        const color = this.reusedColor;
        color.set(0, 0, 0);
        color.invert(filters[0] / 100);
        color.sepia(filters[1] / 100);
        color.saturate(filters[2] / 100);
        color.hueRotate(filters[3] * 3.6);
        color.brightness(filters[4] / 100);
        color.contrast(filters[5] / 100);
        const colorHSL = color.hsl();
        return (
            Math.abs(color.r - this.target.r) +
            Math.abs(color.g - this.target.g) +
            Math.abs(color.b - this.target.b) +
            Math.abs(colorHSL.h - this.targetHSL.h) +
            Math.abs(colorHSL.s - this.targetHSL.s) +
            Math.abs(colorHSL.l - this.targetHSL.l)
        );
    }
    css(filters, toBlack = true) {
        function fmt(idx, multiplier = 1) {
            return Math.round(filters[idx] * multiplier);
        }
        const convertToBlack = toBlack ? 'brightness(0) saturate(100%)' : '';
        return `${convertToBlack} invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%)`;
    }
}
const _color$4 = new Iris();
const _solver = new Solver();
class ColorizeFilter {
    static fromColor(...colorData) {
        _color$4.set(...colorData);
        _solver.setTarget(_color$4.red(), _color$4.green(), _color$4.blue());
        const result = _solver.solve(true );
        return result.filter;
    }
}

class Image extends Element {
    constructor(imageUrl, width = null, height = null, draggable = false) {
        const imageDom = document.createElement('img');
        imageDom.onerror = () => imageDom.style.visibility = 'hidden';
        if (!draggable) imageDom.ondragstart = () => { return false };
        if (width != null) imageDom.style.width = Css.parseSize(width);
        if (height != null) imageDom.style.height = Css.parseSize(height);
        super(imageDom);
        this.setClass('suey-image');
        this.setImage(imageUrl);
    }
    setImage(image) {
        if (typeof image === 'string' && image.toLowerCase().includes('<svg')) {
            const blob = new Blob([ image ], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            this.dom.src = url;
            this.dom.addEventListener('load', () => URL.revokeObjectURL(url), { once: true });
        } else {
            this.dom.src = image;
        }
        return this;
    }
    setColor(color) {
        if (typeof color === 'string' && Object.values(TRAIT).includes(color)) {
            this.setStyle('filter', `var(--tint-${color})`);
        } else {
            this.setStyle('filter', ColorizeFilter.fromColor(color));
        }
        return this;
    }
}

class VectorBox extends Div {
    constructor() {
        super();
        this.setClass('suey-vector-box');
        this.img = undefined;
        if (arguments.length === 0) return this.addImage(IMAGE_EMPTY);
        const images = Array.isArray(arguments[0]) ? arguments[0] : [...arguments];
        for (const image of images) {
            this.addImage(image);
        }
    }
    setColor(color) {
        this.firstImage()?.setColor(color);
        return this;
    }
    firstImage() {
        for (const child of this.contents().children) {
            if (!child || !child.isElement) continue;
            if (child.hasClass('suey-image')) return child;
        }
    }
    addImage(imageUrl = IMAGE_EMPTY) {
        const stretchX = '100%';
        const stretchY = '100%';
        const newImage = new Image(imageUrl, stretchX, stretchY, false );
        if (!this.img) this.img = newImage;
        this.add(newImage);
        return this;
    }
    enableDragging() {
        if (this.dom) this.dom.draggable = true;
        for (const child of this.contents().children) {
            if (child.isElement && child.dom) child.dom.ondragstart = () => {};
        }
        return this;
    }
    setImage(imageUrl) {
        return this.img.setImage(imageUrl);
    }
}

class ShadowBox extends Div {
    constructor() {
        super();
        this.setClass('suey-shadow-box');
        this.addClass('suey-drop-shadow');
        if (arguments.length === 0) return;
        const elements = Array.isArray(arguments[0]) ? arguments[0] : [...arguments];
        for (const element of elements) {
            this.add((element && element.isElement) ? element : new VectorBox(element));
        }
    }
    setColor(color) {
        this.firstImage()?.setColor(color);
        return this;
    }
    firstImage() {
        for (const child of this.contents().children) {
            if (!child || !child.isElement) continue;
            if (child.hasClass('suey-image')) return child;
            if (child.hasClass('suey-vector-box')) return child.firstImage();
        }
    }
    fullSize() {
        this.addClass('suey-full-size');
        return this;
    }
    dropShadow() {
        this.addClass('suey-drop-shadow');
        this.removeClass('suey-even-shadow');
        return this;
    }
    evenShadow() {
        this.removeClass('suey-drop-shadow');
        this.addClass('suey-even-shadow');
        return this;
    }
    noShadow() {
        this.removeClass('suey-drop-shadow');
        this.removeClass('suey-even-shadow');
        return this;
    }
}

class Interaction {
    static addCloseButton(element, closeSide = CLOSE_SIDES.BOTH, offset = 0, scale = 1.3) {
        Interaction.addCornerButton(CORNER_BUTTONS.CLOSE, element, closeSide, offset, scale);
    }
    static addMaxButton(element, closeSide = CLOSE_SIDES.BOTH, offset = 0, scale = 1.3) {
        Interaction.addCornerButton(CORNER_BUTTONS.MAX, element, closeSide, offset, scale);
    }
    static addCornerButton(type = CORNER_BUTTONS.CLOSE, element, closeSide, offset = 0, scale = 1.3) {
        if (!element || !element.isElement) return console.warn(`Interaction.addCornerButton(): Missing element argument`);
        const button = new Button();
        button.setClass('suey-corner-button');
        button.addClass('suey-panel-button');
        let cornerImage, buttonTooltip, buttonOffset;
        switch (type) {
            case CORNER_BUTTONS.CLOSE:
                button.setStyle('background-color', '#e24c4b');
                cornerImage = IMAGE_CLOSE;
                buttonTooltip = 'Close Panel';
                buttonOffset = 0;
                break;
            case CORNER_BUTTONS.MAX:
                button.setStyle('background-color', '#2bc840');
                cornerImage = IMAGE_EXPAND;
                buttonTooltip = 'Toggle Panel';
                buttonOffset = 1.2;
                break;
        }
        const imageBox = new ShadowBox(cornerImage).evenShadow().fullSize().addClass('suey-corner-image');
        button.add(imageBox);
        button.setAttribute('tooltip', buttonTooltip);
        button.setStyle('min-height', `${scale}em`, 'min-width', `${scale}em`);
        const sideways = `${0.8 - ((scale + 0.28571) / 2) + offset + (buttonOffset * scale)}em`;
        button.setStyle('top', `${0.8 - ((scale + 0.28571) / 2)}em`);
        button.setStyle((closeSide === CLOSE_SIDES.LEFT) ? 'left' : 'right', sideways);
        if (closeSide === CLOSE_SIDES.BOTH) {
            let lastSide = CLOSE_SIDES.RIGHT;
            element.on('pointermove', function(event) {
                const rect = element.dom.getBoundingClientRect();
                const middle = rect.left + (rect.width / 2);
                const x = event.pageX;
                let changeSide = CLOSE_SIDES.NONE;
                if (x > middle && lastSide !== CLOSE_SIDES.RIGHT) changeSide = CLOSE_SIDES.RIGHT;
                else if (x < middle && lastSide !== CLOSE_SIDES.LEFT) changeSide = CLOSE_SIDES.LEFT;
                if (changeSide !== CLOSE_SIDES.NONE) {
                    button.addClass('suey-item-hidden');
                    setTimeout(() => {
                        button.dom.style.removeProperty('left');
                        button.dom.style.removeProperty('right');
                        button.setStyle(changeSide, sideways);
                        button.removeClass('suey-item-hidden');
                    }, 100);
                    lastSide = changeSide;
                }
            });
        }
        switch (type) {
            case CORNER_BUTTONS.CLOSE:
                button.onPress(() => {
                    if (element.hasClass('suey-dock') && element.tabCount() > 0) {
                        element.removeFloater(element.selectedID, true );
                    } else {
                        element.removeSelf();
                    }
                });
                break;
            case CORNER_BUTTONS.MAX:
                button.onPress(() => {
                    if (typeof element.toggleMinMax === 'function') {
                        element.toggleMinMax();
                    }
                });
                break;
        }
        element.on('pointerenter', () => button.addClass('suey-item-shown'));
        element.on('pointerleave', () => button.removeClass('suey-item-shown'));
        element.addToSelf(button);
    }
    static makeDraggable(element, parent = element, limitToWindow = false, onDown, onMove, onUp) {
        const eventElement = (element && element.isElement) ? element.dom : element;
        const dragElement = (parent && parent.isElement) ? parent.dom : parent;
        let downX, downY, rect = {}, startingRect = {};
        let lastX, lastY;
        let minDistance = 0;
        let moreThanSlop = false;
        function roundNearest(decimal, increment = GRID_SIZE) {
            if (!element.snapToGrid) return decimal;
            return Math.round(decimal / increment) * increment;
        }
        function dragPointerDown(event) {
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            eventElement.focus();
            eventElement.setPointerCapture(event.pointerId);
            minDistance = 0;
            downX = event.pageX;
            downY = event.pageY;
            lastX = event.pageX;
            lastY = event.pageY;
            const computed = getComputedStyle(dragElement);
            startingRect.left = rect.left = parseFloat(computed.left);
            startingRect.top = rect.top = parseFloat(computed.top);
            startingRect.width = rect.width = parseFloat(computed.width);
            startingRect.height = rect.height = parseFloat(computed.height);
            document.addEventListener('pointermove', dragPointerMove);
            document.addEventListener('pointerup', dragPointerUp);
            document.dispatchEvent(new Event('closemenu'));
            moreThanSlop = false;
            if (typeof onDown === 'function') onDown();
        }
        function dragPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.isTrusted) {
                lastX = event.pageX;
                lastY = event.pageY;
            }
            const computed = getComputedStyle(dragElement);
            rect.width = parseFloat(computed.width);
            rect.height = parseFloat(computed.height);
            const xDiff = (startingRect.width - rect.width) / 2;
            const yDiff = 0;
            minDistance = Math.max(minDistance, Math.abs(downX - lastX));
            minDistance = Math.max(minDistance, Math.abs(downY - lastY));
            if (!moreThanSlop && minDistance < MOUSE_SLOP_SMALL) return;
            moreThanSlop = true;
            eventElement.style.cursor = 'move';
            const scale = ((element && element.getScale) ? element.getScale() : 1);
            const diffX = (lastX - downX + xDiff) * (1 / scale);
            const diffY = (lastY - downY + yDiff) * (1 / scale);
            let newLeft = roundNearest(rect.left + diffX);
            let newTop = roundNearest(rect.top + diffY);
            if (limitToWindow) {
                const titleHeight = parseInt(Css.toPx('3em'));
                newLeft = Math.min(window.innerWidth - (rect.width / 2), newLeft);
                newTop = Math.min(window.innerHeight - titleHeight, newTop);
                newLeft = Math.max(- (rect.width / 2), newLeft);
                newTop = Math.max(0, newTop);
            }
            if (dragElement.suey) {
                dragElement.suey.setStyle('left', `${newLeft}px`, 'top', `${newTop}px`);
            } else {
                dragElement.style.left = `${newLeft}px`;
                dragElement.style.top = `${newTop}px`;
            }
            if (parent.isWindow) {
                const parentRect = parent.dom.parentElement.getBoundingClientRect();
                if (event.clientX < parentRect.left + 50) parent.dockLeft();
                else if (event.clientX > parentRect.right - 50) parent.dockRight();
                else if (event.clientY < parentRect.top) parent.dockTop();
                else if (event.clientY > parentRect.bottom - 50) parent.dockBottom();
                else parent.undock();
            }
            if (typeof onMove === 'function') onMove(diffX, diffY);
        }
        function dragPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            eventElement.releasePointerCapture(event.pointerId);
            document.removeEventListener('pointermove', dragPointerMove);
            document.removeEventListener('pointerup', dragPointerUp);
            eventElement.style.cursor = 'inherit';
            if (typeof onUp === 'function') onUp();
        }
        eventElement.addEventListener('pointerdown', dragPointerDown);
        eventElement.addEventListener('destroy', () => { eventElement.removeEventListener('pointerdown', dragPointerDown); }, { once: true });
    }
    static makeResizeable(addToElement, onDown, onMove, onUp) {
        if (!addToElement || !addToElement.isElement) return console.warning('Interaction.makeResizeable(): AddToElement not defined');
        function createResizer(className) {
            const resizer = new Div().addClass('suey-resizer', className);
            let downX, downY, lastX, lastY;
            let isDown = false;
            function resizePointerDown(event) {
                if (event.button !== 0) return;
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.setPointerCapture(event.pointerId);
                isDown = true;
                downX = event.pageX;
                downY = event.pageY;
                lastX = event.pageX;
                lastY = event.pageY;
                document.addEventListener('pointerup', resizePointerUp);
                document.dispatchEvent(new Event('closemenu'));
                if (typeof onDown === 'function') onDown();
            }
            function resizePointerMove(event) {
                if (!isDown) return;
                event.stopPropagation();
                event.preventDefault();
                if (event.isTrusted ) {
                    lastX = event.pageX;
                    lastY = event.pageY;
                }
                const diffX = lastX - downX;
                const diffY = lastY - downY;
                if (typeof onMove === 'function') onMove(resizer, diffX, diffY);
            }
            function resizePointerUp(event) {
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.releasePointerCapture(event.pointerId);
                isDown = false;
                document.removeEventListener('pointerup', resizePointerUp);
                if (typeof onUp === 'function') onUp();
            }
            resizer.on('pointerdown', resizePointerDown);
            resizer.on('pointermove', resizePointerMove);
            return resizer;
        }
        addToElement.addResizers = function(resizers = []) {
            if (!resizers.includes(RESIZERS.TOP_LEFT) && (resizers.includes(RESIZERS.LEFT) && resizers.includes(RESIZERS.TOP))) resizers.push(RESIZERS.TOP_LEFT);
            if (!resizers.includes(RESIZERS.TOP_RIGHT) && (resizers.includes(RESIZERS.RIGHT) && resizers.includes(RESIZERS.TOP))) resizers.push(RESIZERS.TOP_RIGHT);
            if (!resizers.includes(RESIZERS.BOTTOM_LEFT) && (resizers.includes(RESIZERS.LEFT) && resizers.includes(RESIZERS.BOTTOM))) resizers.push(RESIZERS.BOTTOM_LEFT);
            if (!resizers.includes(RESIZERS.BOTTOM_RIGHT) && (resizers.includes(RESIZERS.RIGHT) && resizers.includes(RESIZERS.BOTTOM))) resizers.push(RESIZERS.BOTTOM_RIGHT);
            for (const key in RESIZERS) {
                const resizerName = RESIZERS[key];
                if (resizers === 'all' || (Array.isArray(resizers) && resizers.includes(resizerName))) {
                    const className = `suey-resizer-${resizerName}`;
                    const existingResizer = addToElement.children.find(child => child.hasClass(className));
                    if (!existingResizer) addToElement.addToSelf(createResizer(className));
                }
            }
        };
        addToElement.clearResizers = function() {
            const resizers = [];
            for (const child of addToElement.children) {
                if (child.hasClass('suey-resizer')) resizers.push(child);
            }
            addToElement.remove(...resizers);
        };
        return addToElement;
    }
}

class Strings {
    static addSpaces(string) {
        if (typeof string !== 'string') string = String(string);
        string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
        string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
        return string.trim();
    }
    static capitalize(string) {
        const words = String(string).split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
        return words.join(' ');
    }
    static countDigits(number) {
        return parseFloat(number).toString().length;
    }
    static escapeHTML(html) {
        if (html == undefined) return html;
        return html
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    static nameFromUrl(url, capitalize = true) {
        let imageName = new String(url.replace(/^.*[\\\/]/, ''));
        imageName = imageName.replace(/\.[^/.]+$/, "");
        if (capitalize) imageName = Strings.capitalize(imageName);
        return imageName;
    }
    static prettyTitle(string) {
        return Strings.addSpaces(Strings.capitalize(string));
    }
}

const DEVICE_TYPE = {
    POINTER: 1,
    TOUCH: 2,
};
let _showTimer;
class Tooltipper {
    constructor() {
        const tooltip = new Div().setClass('suey-tooltip');
        tooltip.setInnerHtml('');
        document.body.appendChild(tooltip.dom);
        let deviceType = DEVICE_TYPE.POINTER;
        document.addEventListener('touchstart', () => deviceType = DEVICE_TYPE.TOUCH, { capture: true, passive: true });
        document.addEventListener('mousemove', () => deviceType = DEVICE_TYPE.POINTER, { capture: true, passive: true });
        document.addEventListener('mouseenter', showTooltip, { capture: true, passive: true });
        document.addEventListener('mouseleave', hideTooltip, { capture: true, passive: true });
        document.addEventListener('dragleave', hideTooltip, { capture: true, passive: true });
        document.addEventListener('blur', hideTooltip, { capture: true, passive: true });
        document.addEventListener('hidetooltip', () => { hideTooltip(); }, { capture: true, passive: true });
        function showTooltip(event) {
            const element = event.target;
            if (!element || !(element instanceof HTMLElement)) return;
            if (!element.getAttribute('tooltip')) return;
            if (event instanceof FocusEvent && deviceType !== DEVICE_TYPE.POINTER) return;
            if (('TouchEvent' in window) && event instanceof TouchEvent) return;
            let text = element.getAttribute('tooltip');
            if (!text.length) return;
            clearTimeout(_showTimer);
            tooltip.removeClass('suey-updated');
            _showTimer = setTimeout(() => {
                tooltip.setInnerHtml(text);
                Popper.popUnder(tooltip.dom, element, ALIGN.CENTER, null, TOOLTIP_Y_OFFSET);
                tooltip.addClass('suey-updated');
            }, parseInt(Css.getVariable('--tooltip-delay')));
        }
        function hideTooltip(event) {
            if (event) {
                const element = event.target;
                if (!element || !(element instanceof HTMLElement)) return;
                if (!element.getAttribute('tooltip')) return;
            }
            clearTimeout(_showTimer);
            tooltip.removeClass('suey-updated');
        }
    }
}
const tooltipper = new Tooltipper();

const _clr$4 = new Iris();
const _icon = new Iris();
const _icon_light = new Iris();
const _icon_dark = new Iris();
const _complement = new Iris();
const _triadic1 = new Iris();
const _triadic2 = new Iris();
const _triadic3 = new Iris();
const _triadic4 = new Iris();
const _triadic5 = new Iris();
const _triadic6 = new Iris();
const DEFAULT_CLR = 0x00b4af;
let _background = BACKGROUNDS.DARK;
let _color$3 = DEFAULT_CLR;
let _tint = 0.0;
let _saturation = 0.0;
class ColorScheme {
    static changeBackground(background) {
        if (background === undefined || background === null) return;
        _background = background;
        ColorScheme.updateCSS();
    }
    static changeColor(color, tint, saturation) {
        if (color === undefined || color === null) return;
        _color$3 = _clr$4.set(color).hex();
        _tint = (tint !== undefined) ? tint : _tint;
        _saturation = (saturation !== undefined) ? saturation : _saturation;
        _icon.set(color);
        _icon_light.copy(_icon).brighten();
        _icon_dark.copy(_icon).darken();
        _complement.copy(_icon).rybRotateHue(180).brighten(0.2);
        _triadic1.copy(_icon).rybRotateHue(120).brighten(0.2);
        _triadic2.copy(_complement).rybRotateHue(120).brighten(0.2);
        _triadic3.copy(_icon).rybRotateHue(90).brighten(0.2);
        _triadic4.copy(_complement).rybRotateHue(90).brighten(0.2);
        _triadic5.copy(_icon).rybRotateHue(60).brighten(0.2);
        _triadic6.copy(_complement).rybRotateHue(60).brighten(0.2);
        ColorScheme.updateCSS();
    }
    static updateCSS() {
        for (const key in TRAIT) {
            const guiColor = TRAIT[key];
            Css.setVariable(`--${guiColor}`, _clr$4.set(ColorScheme.color(guiColor)).rgbString());
        }
        Css.setVariable('--tint-icon', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.ICON)));
        Css.setVariable('--tint-complement', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.COMPLEMENT)));
        Css.setVariable('--tint-triadic1', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC1)));
        Css.setVariable('--tint-triadic2', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC2)));
        Css.setVariable('--tint-triadic3', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC3)));
        Css.setVariable('--tint-triadic4', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC4)));
        Css.setVariable('--tint-triadic5', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC5)));
        Css.setVariable('--tint-triadic6', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC6)));
        Css.setVariable('--tint-text', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TEXT)));
        Css.setVariable('--bright', (_background == BACKGROUNDS.LIGHT) ? '0' : '1');
        const startHue = _clr$4.set(DEFAULT_CLR).hue();
        const newHue = _clr$4.set(ColorScheme.color(TRAIT.ICON, true )).hue();
        const diffHue = `${newHue - startHue}deg`;
        Css.setVariable('--rotate-hue', diffHue);
    }
    static toString() {
        const COLUMN_LENGTH = 20;
        let output = '';
        for (const key in TRAIT) {
            const guiColor = TRAIT[key];
            _clr$4.set(ColorScheme.color(guiColor));
            output += `${guiColor}`.padEnd(COLUMN_LENGTH, ' ');
            output += `${_clr$4.rgbString()}`.padEnd(COLUMN_LENGTH, ' ');
            output += `${_clr$4.hexString()}\n`;
        }
        return output;
    }
    static color(guiColor, ignoreSaturation = false) {
        _clr$4.set(0);
        if (guiColor == null) return _clr$4.hex();
        if (Object.values(TRAIT).includes(guiColor) === false) return _clr$4.set(guiColor).hex();
        let tint = _tint;
        let saturation = _saturation;
        let darkness = 0;
        let lightness = 0;
        switch (_background) {
            case BACKGROUNDS.DARK:      break;
            case BACKGROUNDS.MID:       tint *= 0.2;    lightness = 0.2;    break;
            case BACKGROUNDS.LIGHT:     break;
            case BACKGROUNDS.FADED:     tint *= 0.1;    lightness = 0.4;    break;
        }
        if (_background == BACKGROUNDS.LIGHT) {
            switch (guiColor) {
                case TRAIT.SHADOW:              _clr$4.set(140, 140, 140, 'rgb'); break;
                case TRAIT.BACKGROUND_DARK:     _clr$4.set(180, 180, 180, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr$4.set(190, 190, 190, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr$4.set(200, 200, 200, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr$4.set(210, 210, 210, 'rgb'); break;
                case TRAIT.TEXT_DARK:           _clr$4.set( 80,  80,  80, 'rgb'); break;
                case TRAIT.TEXT:                _clr$4.set( 50,  50,  50, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr$4.set( 25,  25,  25, 'rgb'); break;
                case TRAIT.BLACKLIGHT:          _clr$4.set(255, 255, 255, 'rgb'); break;
                case TRAIT.DARKLIGHT:           _clr$4.set(200, 200, 200, 'rgb'); break;
                case TRAIT.MIDLIGHT:            _clr$4.set(220, 220, 220, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr$4.set(  0,   0,   0, 'rgb'); break;
            }
        } else {
            switch (guiColor) {
                case TRAIT.SHADOW:              _clr$4.set(  0,   0,   0, 'rgb'); tint = 0; break;
                case TRAIT.BACKGROUND_DARK:     _clr$4.set( 24,  24,  24, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr$4.set( 32,  32,  32, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr$4.set( 40,  40,  40, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr$4.set( 60,  60,  60, 'rgb'); break;
                case TRAIT.TEXT_DARK:           _clr$4.set(100, 100, 100, 'rgb'); break;
                case TRAIT.TEXT:                _clr$4.set(190, 190, 190, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr$4.set(225, 225, 225, 'rgb'); break;
                case TRAIT.BLACKLIGHT:          _clr$4.set(  0,   0,   0, 'rgb'); lightness = 0; break;
                case TRAIT.DARKLIGHT:           _clr$4.set(  8,   8,   8, 'rgb'); lightness = 0; break;
                case TRAIT.MIDLIGHT:            _clr$4.set( 85,  85,  85, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr$4.set(255, 255, 255, 'rgb'); break;
            }
            if (_background == BACKGROUNDS.MID && guiColor == TRAIT.DARKLIGHT) {
                _clr$4.set( 64,  64,  64, 'rgb');
            }
        }
        if (guiColor === TRAIT.DARKNESS) {
            switch (_background) {
                case BACKGROUNDS.DARK:      _clr$4.set(  0,   0,   0, 'rgb');     break;
                case BACKGROUNDS.MID:       _clr$4.set( 64,  64,  64, 'rgb');     break;
                case BACKGROUNDS.LIGHT:     _clr$4.set(128, 128, 128, 'rgb');     break;
                case BACKGROUNDS.FADED:     _clr$4.set(  0,   0,   0, 'rgb');     break;
            }
        }
        switch (guiColor) {
            case TRAIT.ICON_DARK:   _clr$4.copy(_icon_dark);  break;
            case TRAIT.ICON:        _clr$4.copy(_icon);       break;
            case TRAIT.ICON_LIGHT:  _clr$4.copy(_icon_light); break;
            case TRAIT.COMPLEMENT:  _clr$4.copy(_complement); break;
            case TRAIT.TRIADIC1:    _clr$4.copy(_triadic1);   break;
            case TRAIT.TRIADIC2:    _clr$4.copy(_triadic2);   break;
            case TRAIT.TRIADIC3:    _clr$4.copy(_triadic3);   break;
            case TRAIT.TRIADIC4:    _clr$4.copy(_triadic4);   break;
            case TRAIT.TRIADIC5:    _clr$4.copy(_triadic5);   break;
            case TRAIT.TRIADIC6:    _clr$4.copy(_triadic6);   break;
        }
        switch (guiColor) {
            case TRAIT.COMPLEMENT:
            case TRAIT.TRIADIC1:
            case TRAIT.TRIADIC2:
            case TRAIT.TRIADIC3:
            case TRAIT.TRIADIC4:
            case TRAIT.TRIADIC5:
            case TRAIT.TRIADIC6:
                saturation = 0.0;
            case TRAIT.ICON_DARK:
            case TRAIT.ICON:
            case TRAIT.ICON_LIGHT:
                tint = 0;
                lightness = 0;
                break;
        }
        if (tint !== 0) _clr$4.mix(_icon, tint);
        if (lightness !== 0) _clr$4.brighten(lightness);
        if (darkness !== 0) _clr$4.darken(darkness);
        if (saturation !== 0 && !ignoreSaturation) _clr$4.hslOffset(0, saturation, 0);
        return _clr$4.hex();
    }
}
ColorScheme.changeColor(THEMES.CLASSIC, 0, 0);

class Span extends Element {
    constructor(innerHtml) {
        super(document.createElement('span'));
        this.setInnerHtml(innerHtml);
    }
}

class FlexSpacer extends Span {
    constructor() {
        super();
        this.addClass('suey-flex-spacer');
        this.setStyle('flex', '1 1 auto');
        this.setStyle('minHeight', '0.01em');
    }
}

class Row extends Div {
    constructor() {
        super();
        this.addClass('suey-row');
    }
}

class Text extends Span {
    constructor(innerHtml) {
        super(innerHtml);
        this.setClass('suey-text');
        this.setStyle('cursor', 'default');
    }
}

class PropertyList extends Div {
    constructor(leftPropertyWidth = '50%', leftPropertySpacing = LEFT_SPACING.TABS) {
        super();
        this.addClass('suey-property-list');
        this.setStyle('display', 'block');
        this.leftPropertyWidth = leftPropertyWidth;
        this.leftPropertySpacing = leftPropertySpacing;
    }
    setLeftPropertyWidth(width = '50%') {
        this.leftPropertyWidth = width;
        return this;
    }
    #safeWidth() {
        let width = this.leftPropertyWidth ?? '50%';
        if (typeof this.leftPropertyWidth === 'string') {
            width = parseInt(this.leftPropertyWidth);
        } else if (typeof this.leftPropertyWidth === 'number') {
            width = parseFloat(this.leftPropertyWidth) * 100;
        }
        if (!Number.isFinite(width)) width = 50;
        width = Math.max(width, 0);
        width = Math.min(width, 100);
        return width;
    }
    #leftWidth() {
        return `${this.#safeWidth()}%`;
    }
    #rightWidth() {
        return `${(100 - this.#safeWidth())}%`;
    }
    addHeader(text = '', iconUrl, arrow = 'left') {
        const header = this.createHeader(text, iconUrl, arrow);
        this.add(header);
        return header;
    }
    addRow(title = '', ...controls) {
        const row = this.createRow(title, ...controls);
        this.add(row);
        return row;
    }
    addRowWithoutTitle(...controls) {
        const row = this.createRowWithoutTitle(...controls);
        this.add(row);
        return row;
    }
    createHeader(text = '', iconUrl, arrow = 'left') {
        const header = new Div().setClass('suey-property-header-title');
        const icon = new VectorBox(iconUrl);
        const iconHolder = new Span().setClass('suey-property-header-icon').add(icon);
        const textHolder = new Span().setClass('suey-property-header-text').setTextContent(text);
        if (arrow === 'left') {
            const arrowSpacer = new Span().setStyle('width', '1.35em');
            header.add(arrowSpacer);
        }
        header.add(iconHolder, textHolder);
        return header;
    }
    createRow(title = '', ...controls) {
        const rightWidget = this.createControls(...controls);
        const leftWidget = new Text(title).selectable(false).addClass('suey-property-left');
        if (this.leftPropertySpacing === LEFT_SPACING.TABS) leftWidget.addClass('suey-left-tab-spacing');
        Css.setVariable('--left-property-width', this.#leftWidth(), leftWidget);
        Css.setVariable('--right-property-width', this.#rightWidth(), rightWidget);
        const row = new Row().addClass('suey-property-row').add(leftWidget, rightWidget);
        row.leftWidget = leftWidget;
        row.rightWidget = rightWidget;
        return row;
    }
    createRowWithoutTitle(...controls) {
        const widgets = this.createControls(...controls);
        widgets.removeClass('suey-property-right').addClass('suey-property-full');
        const row = new Row().addClass('suey-property-row').add(widgets);
        row.leftWidget = widgets;
        row.rightWidget = widgets;
        return row;
    }
    createControls() {
        const rightRow = new Row().setStyle('margin', '0', 'padding', '0').addClass('suey-property-right');
        let args = arguments;
        if (arguments.length === 1 && Array.isArray(arguments[0])) args = arguments[0];
        for (let i = 0; i < args.length; i++) {
            const argument = args[i];
            if (argument instanceof Element && argument.isElement) {
                rightRow.add(argument);
                if ((i < args.length - 1) && argument.dom.style.display !== 'none') {
                    rightRow.add(new Span().addClass('suey-property-space'));
                }
            } else {
                console.warn('PropertyList.createControls(): ', argument, ' is not an instance of Element');
            }
        }
        return rightRow;
    }
    disableInputs(disable = true) {
        const inputs = [ 'suey-button', 'suey-checkbox', 'suey-checkbox-input', 'suey-number', 'suey-slider', 'suey-tick-marks', 'suey-text-area', 'suey-text-box' ];
        for (let i = 0; i < inputs.length; i++) {
            const elements = this.dom.getElementsByClassName(inputs[i]);
            for (let j = 0; j < elements.length; j++) {
                if (disable) {
                    elements[j].classList.add('suey-disabled');
                    elements[j].disabled = true;
                } else {
                    elements[j].classList.remove('suey-disabled');
                    elements[j].disabled = false;
                }
            }
        }
    }
}

class Panel extends Div {
    constructor({
        style = PANEL_STYLES$1.NONE,
    } = {}) {
        super();
        this.setClass('suey-panel');
        this.contents = function() { return this; };
        if (style === PANEL_STYLES$1.SIMPLE) {
            this.addClass('suey-panel-simple');
        } else if (style === PANEL_STYLES$1.FANCY) {
            this.addClass('suey-panel-fancy');
            const outerBox =  new Panel().setClass('suey-panel-fancy-outer');
            const borderBox = new Panel().setClass('suey-panel-fancy-border');
            const insideBox = new Panel().setClass('suey-panel-fancy-inside');
            borderBox.add(insideBox);
            outerBox.add(borderBox);
            this.add(outerBox);
            this.contents = function() { return insideBox; };
        }
        this.on('contextmenu', (event) => { event.preventDefault(); });
    }
}

class Resizeable extends Panel {
    #startWidth = null;
    #startHeight = null;
    #minWidth = 0;
    #maxWidth = Infinity;
    #minHeight = 0;
    #maxHeight = Infinity;
    constructor({
        style = PANEL_STYLES$1.FANCY,
        resizers = [],
        startWidth = null,
        startHeight = null,
        minWidth = 0,
        maxWidth = Infinity,
        minHeight = 0,
        maxHeight = Infinity,
    } = {}) {
        super({ style });
        const self = this;
        this.addClass('suey-resizeable');
        this.#startWidth = parseFloat(startWidth);
        this.#minWidth = minWidth;
        this.#maxWidth = maxWidth;
        this.#startHeight = parseFloat(startHeight);
        this.#minHeight = minHeight;
        this.#maxHeight = maxHeight;
        const rect = {};
        function resizerDown() {
            rect.width = self.getWidth();
            rect.height = self.getHeight();
            document.dispatchEvent(new Event('closemenu'));
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('left')) self.changeWidth(rect.width - diffX);
            if (resizer.hasClassWithString('right')) self.changeWidth(rect.width + diffX);
            if (resizer.hasClassWithString('top')) self.changeHeight(rect.height - diffY);
            if (resizer.hasClassWithString('bottom')) self.changeHeight(rect.height + diffY);
        }
        Interaction.makeResizeable(this, resizerDown, resizerMove).addResizers(resizers);
        if (startWidth != null) this.changeWidth(startWidth);
        if (startHeight != null) this.changeHeight(startHeight);
    }
    changeWidth(width) {
        if (typeof width !== 'number' || !Number.isFinite(width)) width = this.#startWidth;
        if (width == null) {
            this.dom.style.removeProperty('width');
            return null;
        }
        const scaledMinWidth = this.#minWidth * Css.guiScale(this.dom);
        const scaledMaxWidth = Number.isFinite(this.#maxWidth) ? this.#maxWidth * Css.guiScale(this.dom) : Infinity;
        width = Math.min(scaledMaxWidth, Math.max(scaledMinWidth, parseFloat(width))).toFixed(1);
        this.setStyle('width', Css.toEm(width, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return width;
    }
    changeHeight(height) {
        if (typeof height !== 'number' || !Number.isFinite(height)) height = this.#startHeight;
        if (height == null) {
            this.dom.style.removeProperty('height');
            return null;
        }
        const scaledMinHeight = this.#minHeight * Css.guiScale(this.dom);
        const scaledMaxHeight = Number.isFinite(this.#maxHeight) ? this.#maxHeight * Css.guiScale(this.dom) : Infinity;
        height = Math.min(scaledMaxHeight, Math.max(scaledMinHeight, parseFloat(height))).toFixed(1);
        this.setStyle('height', Css.toEm(height, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return height;
    }
}

class Shrinkable extends Panel {
    constructor({
        title = '',
        icon = '',
        arrow = 'left',
        border = true,
        expanded = true,
        shrink = false,
        radius = 0,
    } = {}) {
        super();
        const self = this;
        this.addClass('suey-shrinkable');
        if (!border) this.addClass('suey-borderless-panel');
        if (expanded) this.addClass('suey-expanded');
        this.isExpanded = expanded;
        this.titleDiv = undefined;
        this.bodyDiv = undefined;
        const titleDiv = new Div().setClass('suey-shrink-title');
        const titleArrow = new Span().setClass('suey-shrink-arrow');
        const arrowClicker = new Div().addClass('suey-shrink-arrow-clicker');
        titleArrow.add(arrowClicker);
        const titleText = new Span().setClass('suey-shrink-text').setInnerHtml(title);
        const titleIcon = new Span().setClass('suey-shrink-icon');
        if (icon) titleIcon.addClass('suey-has-icon');
        const iconBox = new VectorBox(icon);
        titleIcon.add(iconBox);
        if (shrink === true) {
            shrink = 0.7;
        } else if (typeof shrink === 'string') {
            shrink = parseFloat(shrink) / (shrink.includes('%') ? 100 : 1);
        }
        if (shrink && iconBox.img && typeof shrink === 'number' && !isNaN(parseFloat(shrink))) {
            iconBox.img.setStyle('position', 'absolute');
            iconBox.img.setStyle('left', '0', 'right', '0', 'top', '0', 'bottom', '0');
            iconBox.img.setStyle('margin', 'auto');
            iconBox.img.setStyle('width', `${shrink * 100}%`);
            iconBox.img.setStyle('height', `${shrink * 100}%`);
        }
        if (radius !== 0 && iconBox.img) {
            iconBox.img.setStyle('border-radius', Css.parseSize(radius));
        }
        if (arrow === 'right') {
            titleDiv.add(titleIcon, titleText, titleArrow);
        } else {
            titleDiv.add(titleArrow, titleIcon, titleText);
        }
        const body = new Div().setClass('suey-shrink-body');
        this.add(titleDiv);
        this.add(body);
        this.titleDiv = titleDiv;
        this.bodyDiv = body;
        this.contents = function() { return self.bodyDiv };
        function expandCollapse() {
            self.toggle();
        }
        titleDiv.on('pointerdown', expandCollapse);
    }
    setExpanded(expand = true, dispatchEvent = true) {
        expand = Boolean(expand);
        this.isExpanded = expand;
        this.wantsClass('suey-expanded', expand);
        if (dispatchEvent) this.dom.dispatchEvent(new Event('expand'));
        return this;
    }
    sort() {
        const items = this.contents().children;
        items.sort((a, b) => {
            const nameA = String(a.name).toLowerCase();
            const nameB = String(b.name).toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return  1;
            return 0;
        });
        for (let i = 0; i < items.length; i++) {
            items[i].setStyle('order', i);
        }
        return this;
    }
    toggle() {
        this.setExpanded(!this.isExpanded);
        return this;
    }
}

class Titled extends Panel {
    constructor({
        title,
        collapsible = false,
    } = {}) {
        super();
        const self = this;
        this.addClass('suey-titled');
        this.addClass('suey-expanded');
        this.isExpanded = true;
        title = (title && typeof title === 'string' && title !== '') ? Strings.capitalize(title) : '';
        const tabTitle = new Div().addClass('suey-tab-title');
        tabTitle.add(new Text(title).addClass('suey-tab-title-text'));
        this.add(tabTitle);
        this.tabTitle = tabTitle;
        if (collapsible) {
            this.tabTitle.setStyle('pointer-events', 'all');
            const arrowClicker = new Div().setClass('suey-title-arrow-click');
            arrowClicker.add(new Div().setClass('suey-title-arrow'));
            this.tabTitle.add(arrowClicker);
            arrowClicker.on('click', () => { self.toggle(); });
        }
        this.scroller = new Div().addClass('suey-scroller');
        this.add(this.scroller);
        this.contents = function() { return this.scroller; };
    }
    setExpanded(expand = true) {
        this.isExpanded = expand;
        if (expand) {
            this.addClass('suey-expanded');
            this.scroller.setStyle('display', '');
        } else {
            this.removeClass('suey-expanded');
            this.scroller.setStyle('display', 'none');
        }
    }
    setTitle(title = '') {
        title = (title && typeof title === 'string' && title !== '') ? Strings.capitalize(title) : '';
        const titleTextElement = this.dom.querySelector('.suey-tab-title-text');
        if (titleTextElement) {
            titleTextElement.textContent = title;
            this.tabTitle.setStyle('display', '');
        }
    }
    toggle() {
        this.setExpanded(!this.isExpanded);
    }
}

class Checkbox extends Element {
    constructor(boolean) {
        super(document.createElement('label'));
        this.setClass('suey-checkbox');
        this.checkbox = new Element(document.createElement('input'));
        this.checkbox.setClass('suey-input');
        this.checkbox.addClass('suey-checkbox-input');
        this.checkbox.dom.type = 'checkbox';
        this.checkbox.dom.name = 'Checkbox';
        this.button = new Div().addClass('suey-checkbox-button');
        this.add(this.checkbox, this.button);
        this.setValue(boolean);
    }
    getValue() {
        if (!this.checkbox.dom) return undefined;
        return this.checkbox.dom.checked;
    }
    setValue(value) {
        if (!this.checkbox.dom) return this;
        this.checkbox.dom.checked = Boolean(value) ? true : false;
        return this;
    }
}

const _color$2 = new Iris();
class Color extends Button {
    constructor() {
        super();
        const self = this;
        this.addClass('suey-color-button');
        this.addClass('suey-drop-arrow');
        const colorBox = new Element(document.createElement('input'));
        colorBox.allowFocus();
        colorBox.setClass('suey-input', 'suey-color-input-button');
        colorBox.setAttribute('autocomplete', 'off');
        try { colorBox.dom.type = 'color'; } catch(exception) {}
        this.add(colorBox);
        const colorBackground = new Div().addClass('suey-drop-color');
        colorBackground.setStyle('backgroundColor', colorBox.dom.value);
        this.add(colorBackground);
        let selected = false;
        function colorBoxClick(event) {
            if (selected === false) {
                self.addClass('suey-selected');
                selected = true;
                colorBox.focus();
            } else {
                event.stopPropagation();
                event.preventDefault();
                colorBox.blur();
            }
        }
        function colorBoxInput() {
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.setAttribute('tooltip', colorBox.dom.value);
        }
        function colorBoxKeyUp(event) {
            if (event.key === 'Escape') {
                self.removeClass('suey-selected');
                selected = false;
            }
        }
        function colorBoxBlur() {
            self.removeClass('suey-selected');
            selected = false;
        }
        colorBox.on('click', colorBoxClick);
        colorBox.on('input', colorBoxInput);
        colorBox.on('keyup', colorBoxKeyUp);
        colorBox.on('focusout', colorBoxBlur);
        this.getValue = function() {
            if (!colorBox.dom) return 0;
            return colorBox.dom.value;
        };
        this.getHexValue = function() {
            if (!colorBox.dom) return 0;
            _color$2.set(colorBox.dom.value);
            return _color$2.hex();
        };
        this.setValue = function(value) {
            if (!colorBox.dom) return this;
            _color$2.set(value);
            colorBox.dom.value = _color$2.hexString();
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.setAttribute('tooltip', colorBox.dom.value);
            return this;
        };
        this.setValue(0xffffff);
    }
}

class MenuSeparator extends Div {
    constructor() {
    super();
        this.setClass('suey-menu-separator');
    }
}

const TRIANGLE_SIZE = 3.0;
const _clr$3 = new Iris();
class Menu extends Div {
    #addedTo = false;
    constructor() {
        super();
        this.setClass('suey-menu');
        this.mouseSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.mouseSvg.setAttribute('class', 'suey-menu-mouse-triangle');
        this.mouseSvg.setAttribute('pointer-events', 'none');
        this.mouseSvg.setAttribute('version', '1.1');
        this.mouseArea = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        this.mouseArea.setAttribute('fill', _clr$3.setRandom().hexString());
        this.mouseArea.setAttribute('opacity', '0.0');
        this.mouseArea.setAttribute('pointer-events', 'fill');
        this.mouseSvg.appendChild(this.mouseArea);
        this.menuParentDom = undefined;
    }
    add() {
        if (!this.#addedTo && this.children) {
            let menuItems = this.children;
            if (menuItems.length > 0) {
                const lastItem = menuItems[menuItems.length - 1];
                if (lastItem.constructor.name !== 'MenuSeparator') {
                    super.add(new MenuSeparator());
                }
            }
        }
        if (arguments && arguments.length > 0) {
            this.#addedTo = true;
            super.add(...arguments);
        }
        return this;
    }
    newCategory() {
        this.#addedTo = false;
    }
    closeMenu(applyToSelf = true, dontCloseChildrenOf = undefined) {
        this.traverse((child) => {
            if (dontCloseChildrenOf && Dom.isChildOf(child.dom, dontCloseChildrenOf)) {
            } else {
                child.removeClass('suey-menu-show', 'suey-selected');
                if (child.attachedMenu && typeof child.attachedMenu.closeMenu === 'function') {
                    child.attachedMenu.closeMenu(true);
                }
                if (child.dom && typeof child.dom.blur === 'function') child.dom.blur();
            }
        }, applyToSelf);
        if (applyToSelf) {
            let parent = this.menuParentDom;
            while (parent) {
                if (this.menuParentDom.classList.contains('suey-menu-button')) {
                    parent.classList.remove('suey-selected');
                    parent = undefined;
                } else {
                    parent = parent.parentElement;
                }
            }
            if (typeof this.removeHandlers === 'function') this.removeHandlers();
            document.dispatchEvent(new Event('nofocus'));
        }
    }
    isShown() {
        return this.hasClass('suey-menu-show');
    }
    showMenu(parentDom) {
        const self = this;
        this.menuParentDom = parentDom;
        this.addClass('suey-menu-show');
        this.focus();
        if (Dom.isChildOfElementWithClass(this.dom, 'suey-menu')) {
            this.mouseArea.setAttribute('pointer-events', 'none');
            this.contents().dom.insertBefore(this.mouseSvg, this.contents().dom.firstChild);
            this.updateMouseArea();
            const timeFloat = parseFloat(Css.getVariable('--menu-timing')) * 1000.0;
            setTimeout(() => this.updateMouseArea(), timeFloat);
        }
        function onCloseMenu() {
            self.closeMenu();
        }
        function menuKeyDown(event) {
            if (event.key === 'Escape') {
                self.closeMenu();
            }
        }
        function menuPointerDown(event) {
            if (self.dom.contains(event.target)) {
            } else {
                self.closeMenu();
            }
        }
        document.addEventListener('closemenu', onCloseMenu);
        document.addEventListener('keydown', menuKeyDown);
        document.addEventListener('pointerdown', menuPointerDown);
        this.removeHandlers = function() {
            document.removeEventListener('closemenu', onCloseMenu);
            document.removeEventListener('keydown', menuKeyDown);
            document.removeEventListener('pointerdown', menuPointerDown);
        };
        this.on('destroy', function() {
            self.removeHandlers();
        });
        return this;
    }
    updateMouseArea() {
        const parentRect = this.dom.parentElement.getBoundingClientRect();
        const myRect = this.dom.getBoundingClientRect();
        if (!this.hasClass('suey-menu-under')) {
            const middle = (parentRect.top - myRect.top) + (parentRect.height / 2);
            const middle1 = middle - (parentRect.height / 2);
            const middle2 = middle + (parentRect.height / 2);
            const leftSide = parentRect.width / TRIANGLE_SIZE;
            const topSides = 10;
            this.mouseSvg.style['left'] = `-${leftSide}px`;
            this.mouseSvg.style['top'] = `-${topSides}px`;
            this.mouseSvg.setAttribute('width', `${myRect.width + leftSide}px`);
            this.mouseSvg.setAttribute('height', `${myRect.height + topSides*2}px`);
            const point1 = `${leftSide},0`;
            const point2 = `0,${topSides + middle1}`;
            const point3 = `0,${topSides + middle2}`;
            const point4 = `${leftSide},${myRect.height + topSides*2}`;
            const point5 = `${leftSide + myRect.width},${myRect.height + topSides*2}`;
            const point6 = `${leftSide + myRect.width},0`;
            this.mouseArea.setAttributeNS(null, 'points', `${point1} ${point2} ${point3} ${point4} ${point5} ${point6}`);
            this.mouseArea.setAttribute('pointer-events', 'fill');
        } else {
            const middle = myRect.width / 2;
            const middle1 = middle - (parentRect.width / 2);
            const middle2 = middle + (parentRect.width / 2);
            const topSides = parentRect.height / 1.5;
            this.mouseSvg.style['left'] = '0';
            this.mouseSvg.style['top'] = `-${topSides}px`;
            this.mouseSvg.setAttribute('width', `${myRect.width}px`);
            this.mouseSvg.setAttribute('height', `${myRect.height + topSides}px`);
            const point1 = `${middle1},0`;
            const point2 = `0,${topSides}`;
            const point3 = `0,${myRect.height + topSides}`;
            const point4 = `${myRect.width},${myRect.height + topSides}`;
            const point5 = `${myRect.width},${topSides}`;
            const point6 = `${middle2},0`;
            this.mouseArea.setAttributeNS(null, 'points', `${point1} ${point2} ${point3} ${point4} ${point5} ${point6}`);
            this.mouseArea.setAttribute('pointer-events', 'fill');
        }
        return this;
    }
}

class MenuShortcut extends Div {
    constructor(text = undefined) {
        super();
        this.setClass('suey-menu-shortcut');
        if (text) this.setShortcutText(text);
    }
    setShortcutText(text) {
        if (!text) return this;
        this.text = text;
        this.clearContents();
        for (let i = 0; i < text.length; i++) {
            let letter = new Div().setClass('suey-menu-shortcut-character');
            let subString = text[i];
            while (i + 1 < text.length && text[i+1] === text[i+1].toLowerCase()) {
                subString += text[i+1];
                i++;
            }
            if (subString.length === 1) {
                letter.setStyle('width', '1em');
            } else {
                letter.setStyle('paddingLeft', '0.15em');
                letter.setStyle('paddingRight', '0.15em');
            }
            letter.dom.textContent = subString;
            this.add(letter);
        }
        return this;
    }
}

class MenuItem extends Div {
    constructor(text = undefined, icon = undefined, shortcutText = undefined) {
        super();
        const self = this;
        this.setClass('suey-menu-item');
        this.name = text;
        this.divIcon = new VectorBox(icon);
        this.divIconHolder = new Div().add(this.divIcon).setClass('suey-menu-icon');
        this.divText = new Div().setClass('suey-menu-text');
        this.divSpacer = new Div().setStyle('flex', '1 1 auto');
        this.divShortcut = new MenuShortcut(shortcutText);
        this.row = new Row().add(this.divIconHolder, this.divText, this.divSpacer, this.divShortcut);
        this.add(this.row);
        this.checked = false;
        this.disabled = false;
        this.subMenu = undefined;
        function menuContextMenu(event) {
            event.preventDefault();
        }
        function hideSubMenus(dontCloseChildrenOf = undefined) {
            let parentMenu = self.parent;
            while (parentMenu && (parentMenu.hasClass('suey-menu') === false)) parentMenu = parentMenu.parent;
            if (parentMenu && typeof parentMenu.closeMenu === 'function') {
                parentMenu.closeMenu(false, dontCloseChildrenOf);
            }
        }
        function menuPointerEnter() {
            let parentMenu = self.parent;
            while (parentMenu && (parentMenu.hasClass('suey-menu') === false)) parentMenu = parentMenu.parent;
            if (!parentMenu.hasClass('suey-invisible-menu')) {
                const hideEvent = new Event('hidetooltip', { bubbles: true });
                self.dom.dispatchEvent(hideEvent);
            }
            hideSubMenus(self.dom);
            if (self.subMenu) self.subMenu.showMenu(self.dom);
        }
        function menuPointerLeave() {
            hideSubMenus();
        }
        let pointerDown = false;
        function menuPointerDown(event) {
            event.stopPropagation();
            event.preventDefault();
            self.dom.dispatchEvent(new Event('select'));
            pointerDown = true;
        }
        function menuPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            if (pointerDown !== true) {
                self.dom.dispatchEvent(new Event('select'));
            }
            pointerDown = false;
        }
        this.on('contextmenu', menuContextMenu);
        this.on('pointerenter', menuPointerEnter);
        this.on('pointerleave', menuPointerLeave);
        this.on('pointerdown', menuPointerDown);
        this.on('pointerup', menuPointerUp);
        this.setText(text);
        this.selectable(false);
    }
    on(event, callback, options = {}) {
        if (event === 'click' || event === 'select') {
            console.warn('MenuItem.on: Click event for this Element is meant to be used with onSelect()');
        }
        super.on(event, callback, options);
        return this;
    }
    onSelect(callback) {
        if (typeof callback !== 'function') return;
        const self = this;
        callback = callback.bind(self);
        const eventHandler = function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!self.hasClass('suey-disabled')) {
                callback(event);
                if (!self.hasClass('suey-keep-open')) {
                    document.dispatchEvent(new Event('closemenu'));
                }
            }
        };
        super.on('click', eventHandler);
        return self;
    }
    isChecked() {
        return this.checked;
    }
    isDisabled() {
        return this.disabled;
    }
    keepOpen() {
        this.addClass('suey-keep-open');
        return this;
    }
    setChecked(checked) {
        const imageUrl = (checked) ? IMAGE_CHECK : IMAGE_EMPTY;
        this.divIcon.wantsClass('suey-icon-colorize', checked);
        this.setImage(imageUrl);
        this.checked = checked;
        return this;
    }
    setDisabled(disabled) {
        this.wantsClass('suey-disabled', disabled);
        this.disabled = disabled;
        return this;
    }
    setImage(imageUrl) {
        this.divIcon.setImage(imageUrl);
        return this;
    }
    setText(text) {
        this.divText.dom.textContent = text ?? ' ';
        return this;
    }
    attachSubMenu(menuElement) {
        if (menuElement.hasClass('suey-menu') === false) return this;
        menuElement.addClass('suey-slide-down');
        this.removeSubMenu();
        this.addClass('suey-sub-menu-item');
        this.add(menuElement);
        this.subMenu = menuElement;
        return this;
    }
    hasSubMenu() {
        return this.hasClass('suey-sub-menu-item');
    }
    removeSubMenu() {
        this.removeClass('suey-sub-menu-item');
        const menuElement = this.subMenu;
        this.subMenu = undefined;
        for (let i = this.contents().dom.children.length - 1; i >= 0; i--) {
            let child = this.contents().dom.children[i];
            if (child.classList.contains('suey-menu')) this.remove(child);
        }
        return menuElement;
    }
}

class Dropdown extends Button {
    constructor(buttonText) {
        super(buttonText);
        const self = this;
        this.items = [];
        this.currentIndex = -1;
        this.value = undefined;
        this.menuOffsetX = 0;
        this.menuOffsetY = 5;
        this.addClass('suey-dropdown');
        this.addClass('suey-drop-arrow');
        function dropWheel(event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.deltaY < 0) {
                if (self.currentIndex > 0) {
                    self.setIndex(self.currentIndex - 1);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }
            } else {
                if (self.currentIndex < (self.items.length - 1)) {
                    self.setIndex(self.currentIndex + 1);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }
            }
        }
        this.on('wheel', dropWheel);
    }
    getItemByKey(key) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].value === key) return this.items[i];
        }
        return undefined;
    }
    getIndex() {
        return this.currentIndex;
    }
    getValue() {
        return this.value;
    }
    setIndex(index = 0) {
        if (index < 0 || index >= this.items.length || index === this.currentIndex) return;
        const item = this.items[index];
        for (let i = 0; i < this.items.length; i++) this.items[i].setChecked(false);
        item.setChecked(true);
        this.currentIndex = index;
        this.value = item.value;
        if (this.dom) this.dom.textContent = item.dom.textContent;
        return this;
    }
    setValue(value) {
        value = String(value);
        if (this.value !== value) {
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                if (item.value === value) {
                    for (let i = 0; i < this.items.length; i++) this.items[i].setChecked(false);
                    item.setChecked(true);
                    this.currentIndex = i;
                    this.value = value;
                    if (this.dom) this.dom.textContent = item.dom.textContent;
                    return this;
                }
            }
        }
        return this;
    }
    setOptions(options) {
        const self = this;
        if (this.detachMenu) this.detachMenu();
        this.items.length = 0;
        for (const key in options) {
            const item = new MenuItem(options[key]);
            item.value = key;
            item.onSelect(() => {
                self.setValue(item.value);
                if (self.dom) self.dom.dispatchEvent(new Event('change'));
            });
            this.items.push(item);
        }
        const menu = new Menu();
        for (let i = 0; i < this.items.length; i++) {
            menu.add(this.items[i]);
        }
        this.attachMenu(menu);
        menu.addClass('suey-select-menu');
        return this;
    }
}

class DualSlider extends Div {
    constructor({
        min = 0,
        max = 100,
        initialMin = 25,
        initialMax = 75,
        step = 1,
        precision = 0
    } = {}) {
        super();
        this.setClass('suey-dual-slider-container');
        step = Number(step);
        if (isNaN(step)) step = 1;
        if (!isFinite(step)) step = 1;
        this.min = min;
        this.max = max;
        this.step = step;
        this.precision = precision;
        this.currentMin = Math.max(this.min, Math.min(initialMin, initialMax, this.max));
        this.currentMax = Math.min(this.max, Math.max(initialMin, initialMax, this.min));
        this.track = new Div().addClass('suey-dual-slider-track');
        this.add(this.track);
        this.knobs = new Div().addClass('suey-dual-slider-knob-holder');
        this.range = new Div().addClass('suey-dual-slider-range');
        this.knobMin = new Div().addClass('suey-dual-slider-knob');
        this.knobMax = new Div().addClass('suey-dual-slider-knob');
        this.knobs.add(this.range, this.knobMin, this.knobMax);
        this.add(this.knobs);
        this._bindEvents();
        this.updatePositions();
    }
    _bindEvents() {
        this.knobMin.on('mousedown', (e) => this._onDragStart(e, 'min'));
        this.knobMin.on('touchstart', (e) => this._onDragStart(e, 'min'));
        this.knobMax.on('mousedown', (e) => this._onDragStart(e, 'max'));
        this.knobMax.on('touchstart', (e) => this._onDragStart(e, 'max'));
    }
    _onDragStart(event, knobType) {
        event.preventDefault();
        this.dragging = knobType;
        document.addEventListener('mousemove', this._onDragMove);
        document.addEventListener('mouseup', this._onDragEnd);
        document.addEventListener('touchmove', this._onDragMove);
        document.addEventListener('touchend', this._onDragEnd);
    }
    _onDragMove = (event) => {
        if (!this.dragging) return;
        let clientX;
        if (event.type.startsWith('mouse')) {
            clientX = event.clientX;
        } else if (event.type.startsWith('touch')) {
            clientX = event.touches[0].clientX;
        }
        const rect = this.track.dom.getBoundingClientRect();
        const percentage = ((clientX - rect.left) / rect.width) * 100;
        const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
        const value = this.min + ((clampedPercentage / 100) * (this.max - this.min));
        const steppedValue = this._applyStep(value);
        if (this.dragging === 'min') {
            if (steppedValue > this.currentMax - this.step) {
                this.currentMin = this.currentMax;
            } else {
                this.currentMin = Math.max(this.min, steppedValue);
            }
        } else if (this.dragging === 'max') {
            if (steppedValue < this.currentMin + this.step) {
                this.currentMax = this.currentMin;
            } else {
                this.currentMax = Math.min(this.max, steppedValue);
            }
        }
        this.updatePositions();
        this.dom.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    }
    _onDragEnd = () => {
        this.dragging = null;
        document.removeEventListener('mousemove', this._onDragMove);
        document.removeEventListener('mouseup', this._onDragEnd);
        document.removeEventListener('touchmove', this._onDragMove);
        document.removeEventListener('touchend', this._onDragEnd);
    }
    _applyStep(value) {
        const steppedValue = Math.round((value - this.min) / this.step) * this.step + this.min;
        return parseFloat(steppedValue.toFixed(this.precision));
    }
    updatePositions() {
        const range = this.max - this.min;
        const minPercentage = ((this.currentMin - this.min) / range) * 100;
        const maxPercentage = ((this.currentMax - this.min) / range) * 100;
        this.knobMin.dom.style.left = `${minPercentage}%`;
        this.knobMax.dom.style.left = `${maxPercentage}%`;
        this.range.dom.style.left = `${minPercentage}%`;
        this.range.dom.style.width = `${maxPercentage - minPercentage}%`;
        return this;
    }
    getRange() {
        return {
            min: this.currentMin,
            max: this.currentMax
        };
    }
    setRange({ min, max }, events = true) {
        if (min != undefined) this.currentMin = Math.max(this.min, Math.min(min, this.currentMax));
        if (max != undefined) this.currentMax = Math.min(this.max, Math.max(max, this.currentMin));
        this.updatePositions();
        if (events) this.dom.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
        return this;
    }
    setStep(step) {
        step = Number(step);
        if (isNaN(step) || !isFinite(step)) step = 1;
        this.step = step;
        this.setRange({ min: this.currentMin, max: this.currentMax }, false );
        return this;
    }
    setPrecision(precision) {
        this.precision = precision;
        this.setRange({ min: this.currentMin, max: this.currentMax }, false );
        return this;
    }
    setMinMax(min, max) {
        if (isNaN(min) || !isFinite(min)) min = 0;
        if (isNaN(max) || !isFinite(max)) max = 0;
        this.min = min;
        this.max = max;
        this.currentMin = Math.max(this.min, Math.min(this.currentMin, this.max - this.step));
        this.currentMax = Math.min(this.max, Math.max(this.currentMax, this.min + this.step));
        this.updatePositions();
        return this;
    }
}

const _changeEvent$1 = new Event('change', { 'bubbles': true, 'cancelable': true });
class NumberBox extends Element {
    constructor(number) {
        super(document.createElement('input'));
        const self = this;
        this.setClass('suey-input');
        this.addClass('suey-number');
        this.dom.name = 'NumberBox';
        this.dom.style.cursor = 'text';
        this.dom.value = '0.00';
        this.setAttribute('autocomplete', 'off');
        this.value = 0;
        this.min = -Infinity;
        this.max = Infinity;
        this.precision = 3;
        this.step = 0.1;
        this.unit = '';
        this.nudge = 1.0;
        this.setValue(number);
        function boxChange(event) {
            if (self.dom) self.setValue(self.dom.value);
        }
        function boxKeyDown(event) {
            event.stopPropagation();
            if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                return;
            }
            switch (event.key) {
                case 'Enter':
                    if (self.dom) self.dom.style.cursor = 'text';
                    if (self.dom) self.dom.blur();
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    self.setValue(self.getValue() + self.nudge);
                    if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    self.setValue(self.getValue() - self.nudge);
                    if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
                    break;
            }
        }
        function boxKeyUp(event) {
            event.stopPropagation();
        }
        function boxWheel(event) {
            event.preventDefault();
            const upOrDown = (event.deltaY < 0) ? -1.0 : 1.0;
            const newValue = self.getValue() - (upOrDown * self.step);
            self.setValue(newValue);
            if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
        }
        this.on('keydown', boxKeyDown);
        this.on('keyup', boxKeyUp);
        this.on('wheel', boxWheel);
        this.on('change', boxChange);
    }
    getValue() {
        return parseFloat(this.value);
    }
    setValue(value) {
        let valueAsFloat = parseFloat(value);
        if (valueAsFloat === undefined || isNaN(valueAsFloat) || !isFinite(valueAsFloat)) {
            return this;
        }
        if (valueAsFloat < this.min) valueAsFloat = this.min;
        if (valueAsFloat > this.max) valueAsFloat = this.max;
        valueAsFloat = parseFloat(valueAsFloat.toFixed(this.precision));
        function countDecimals(number) {
            if (Math.floor(number.valueOf()) === number.valueOf()) return 0;
            return number.toString().split('.')[1].length || 0;
        }
        let decimals = Math.min(this.precision, countDecimals(valueAsFloat));
        valueAsFloat = valueAsFloat.toFixed(decimals);
        if (valueAsFloat !== undefined && !isNaN(valueAsFloat) && isFinite(valueAsFloat)) {
            this.value = valueAsFloat;
            if (this.dom) this.dom.value = valueAsFloat;
            if (this.dom && this.unit !== '') this.dom.value = valueAsFloat + this.unit;
        }
        return this;
    }
    setPrecision(precision) {
        this.precision = parseFloat(precision);
        return this;
    }
    setStep(step) {
        this.step = parseFloat(step);
        return this;
    }
    setNudge(nudge) {
        this.nudge = parseFloat(nudge);
        return this;
    }
    setMin(min) {
        this.min = parseFloat(min);
        return this;
    }
    setMax(max) {
        this.max = parseFloat(max);
        return this;
    }
    setRange(min, max) {
        this.setMin(min);
        this.setMax(max);
        return this;
    }
    setUnit(unit) {
        this.unit = unit;
        return this;
    }
}
class NumberScroll extends NumberBox {
    constructor(number) {
        super(number);
        const self = this;
        this.addClass('suey-number-scroll');
        this.dom.style.cursor = 'ns-resize';
        let distance = 0;
        let mouseDownValue = 0;
        const pointer = { x: 0, y: 0 };
        const prevPointer = { x: 0, y: 0 };
        function numberMouseDown(event) {
            event.preventDefault();
            distance = 0;
            mouseDownValue = self.getValue();
            prevPointer.x = event.clientX;
            prevPointer.y = event.clientY;
        }
        function numberMouseMove(event) {
            const currentValue = self.getValue();
            pointer.x = event.clientX;
            pointer.y = event.clientY;
            distance += (pointer.x - prevPointer.x) - (pointer.y - prevPointer.y);
            let value;
            value = mouseDownValue + (distance / (event.shiftKey ? 0.1 : 1)) * self.step;
            value = Math.min(self.max, Math.max(self.min, value));
            if (currentValue !== value) {
                self.setValue(value);
                if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
            }
            prevPointer.x = event.clientX;
            prevPointer.y = event.clientY;
        }
        function numberMouseUp() {
            if (Math.abs(distance) < 2) {
                if (self.dom) self.dom.focus();
            }
        }
        function numberTouchStart(event) {
            if (event.touches.length === 1) {
                distance = 0;
                mouseDownValue = self.getValue();
                prevPointer.x = event.touches[0].pageX;
                prevPointer.y = event.touches[0].pageY;
            }
        }
        function numberTouchMove(event) {
            const currentValue = self.getValue();
            pointer.x = event.touches[0].pageX;
            pointer.y = event.touches[0].pageY;
            distance += (pointer.x - prevPointer.x) - (pointer.y - prevPointer.y);
            let value;
            value = mouseDownValue + (distance / (event.shiftKey ? 5 : 50)) * self.step;
            value = Math.min(self.max, Math.max(self.min, value));
            if (currentValue !== value) {
                self.setValue(value);
                if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
            }
            prevPointer.x = event.touches[0].pageX;
            prevPointer.y = event.touches[0].pageY;
        }
        function numberTouchEnd(event) {
            if (event.touches.length === 0) {
                if (Math.abs(distance) < 2) {
                    if (self.dom) self.dom.focus();
                }
            }
        }
        function numberFocus() {
            if (self.dom) self.dom.style.cursor = '';
        }
        function numberBlur() {
            if (self.dom) self.dom.style.cursor = 'ns-resize';
        }
        this.on('mousedown', numberMouseDown);
        this.on('mousemove', numberMouseMove);
        this.on('mouseup', numberMouseUp);
        this.on('touchstart', numberTouchStart);
        this.on('touchmove', numberTouchMove);
        this.on('touchend', numberTouchEnd);
        this.on('focus', numberFocus);
        this.on('blur', numberBlur);
    }
}

const MAX_SLIDER_TICKS = 10;
class Slider extends Div {
    constructor(number = 0, min = 0, max = 100) {
        super();
        const self = this;
        this.setClass('suey-slide-container');
        this.precision = 2;
        const slider = new Element(document.createElement('input'));
        slider.setClass('suey-input');
        slider.addClass('suey-slider');
        slider.dom.type = 'range';
        slider.dom.value = number;
        slider.dom.min = min;
        slider.dom.max = max;
        const ticks = new Div(' ').addClass('suey-tick-marks');
        this.slider = slider;
        this.ticks = ticks;
        this.add(ticks, slider);
        function sliderInput() {
            if (!slider.dom) return;
            const val = parseFloat(slider.dom.value);
            const min = parseFloat(slider.dom.min);
            const max = parseFloat(slider.dom.max);
            slider.dom.style.setProperty('--middle', `${((val - min) / (max - min))}`);
        }
        function sliderWheel(event) {
            if (!slider.dom) return;
            event.preventDefault();
            const upOrDown = (event.deltaY < 0) ? -1.0 : 1.0;
            const min = parseFloat(slider.dom.min);
            const max = parseFloat(slider.dom.max);
            let step = slider.dom.step;
            if (step === 'any') {
                step = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            } else {
                step = parseFloat(step);
            }
            const newValue = self.getValue() - (upOrDown * step);
            self.setValue(newValue);
            slider.dom.dispatchEvent(new Event('change', { 'bubbles': true, 'cancelable': true }));
        }
        slider.on('input', sliderInput);
        slider.on('wheel', sliderWheel);
    }
    getValue() {
        if (!this.slider.dom) return null;
        return parseFloat(this.slider.dom.value);
    }
    setValue(value) {
        if (!this.slider.dom) return this;
        let valueAsFloat = parseFloat(value);
        if (valueAsFloat === undefined || isNaN(valueAsFloat) || !isFinite(valueAsFloat)) {
            return this;
        }
        if (valueAsFloat < this.min) valueAsFloat = this.min;
        if (valueAsFloat > this.max) valueAsFloat = this.max;
        valueAsFloat = parseFloat(valueAsFloat.toFixed(this.precision));
        function countDecimals(number) {
            if (Math.floor(number.valueOf()) === number.valueOf()) return 0;
            return number.toString().split('.')[1].length || 0;
        }
        let decimals = Math.min(this.precision, countDecimals(valueAsFloat));
        valueAsFloat = valueAsFloat.toFixed(decimals);
        if (valueAsFloat !== undefined && !isNaN(valueAsFloat) && isFinite(valueAsFloat)) {
            this.slider.dom.value = valueAsFloat;
        }
        const val = parseFloat(this.slider.dom.value);
        const min = parseFloat(this.slider.dom.min);
        const max = parseFloat(this.slider.dom.max);
        this.slider.dom.style.setProperty('--middle', `${((val - min) / (max - min))}`);
        return this;
    }
    setPrecision(precision) {
        this.precision = precision;
        return this;
    }
    setMin(min) {
        if (!this.slider.dom) return this;
        this.slider.dom.min = min;
        this.setTicks();
        return this;
    }
    setMax(max) {
        if (!this.slider.dom) return this;
        this.slider.dom.max = max;
        this.setTicks();
        return this;
    }
    setRange(min, max) {
        if (!this.slider.dom) return this;
        this.slider.dom.min = min;
        this.slider.dom.max = max;
        this.setTicks();
        return this;
    }
    setStep(step) {
        if (!this.slider.dom) return this;
        this.slider.dom.step = step;
        this.setTicks();
        return this;
    }
    setTicks() {
        if (!this.slider.dom) return this;
        const ticks = this.ticks;
        const min = parseFloat(this.slider.dom.min);
        const max = parseFloat(this.slider.dom.max);
        const step = this.slider.dom.step;
        if (step !== 'any' && Number.isFinite(min) && Number.isFinite(max)) {
            const totalSteps = parseFloat((max - min) / step);
            const maxDivsisor = MAX_SLIDER_TICKS - 1;
            let tickSteps = totalSteps;
            if (tickSteps > maxDivsisor) {
                for (let i = 1; i <= maxDivsisor; i++) {
                    if (Number.isInteger(totalSteps / i)) tickSteps = i;
                }
            }
            ticks.dom.style.setProperty('--divides', `${tickSteps}`);
            ticks.setStyle('display', '');
        } else {
            ticks.setStyle('display', 'none');
        }
    }
}

class TextBox extends Element {
    constructor(text) {
        super(document.createElement('input'));
        this.setClass('suey-input');
        this.addClass('suey-text-box');
        this.dom.type = 'text';
        this.dom.name = 'TextBox';
        this.setAttribute('autocomplete', 'off');
        this.setAttribute('spellcheck', 'false');
        this.setValue(text ?? '');
        function boxKeyDown(event) {
            event.stopPropagation();
            if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
            }
        }
        function boxKeyUp(event) {
            event.stopPropagation();
        }
        this.on('keydown', boxKeyDown);
        this.on('keyup', boxKeyUp);
    }
    getValue() {
        if (!this.dom) return null;
        return this.dom.value;
    }
    setValue(value) {
        if (!this.dom) return this;
        this.dom.value = value;
        return this;
    }
}

const _clr$2 = new Iris();
class Gooey extends Resizeable {
    constructor(title = '') {
        super({
            style: PANEL_STYLES$1.FANCY,
            resizers: [ RESIZERS.LEFT ],
            minWidth: 100,
        });
        this.addClass('suey-gooey');
        this.minWidth = 180;
        if (!title || typeof title !== 'string') title = '';
        const titlePanel = new Titled({ title, collapsible: true });
        this.add(titlePanel);
        this.contents = function() { return titlePanel.scroller; };
        if (title === '') titlePanel.tabTitle.setStyle('display', 'none');
        document.body.appendChild(this.dom);
    }
    addFolder(folderName = '', icon = '') {
        if (folderName && folderName !== '') folderName = Strings.capitalize(folderName);
        const folder = new Folder({ title: folderName, icon });
        this.add(folder);
        return folder;
    }
    color(color) {
        ColorScheme.changeColor(color);
        return this;
    }
    opacity(opacity) {
        if (opacity == null || isNaN(opacity)) return;
        opacity = Math.min(Math.max(opacity, 0.0), 1.0);
        Css.setVariable('--panel-transparency', opacity);
        return this;
    }
    scale(multiplier) {
        if (!multiplier) multiplier = 1.0;
        multiplier = parseFloat(multiplier);
        const newSize = 14  * multiplier;
        const fontSize = Math.min(Math.max(newSize, 7 ), 42 );
        Css.setVariable('--font-size', Css.toPx(fontSize, this.dom));
        return this;
    }
    updateDisplays() {
        this.traverse((child) => {
            if (child instanceof Folder) child.updateDisplays();
        }, false );
    }
    width(width) {
        if (width == null) return;
        if (width < this.minWidth * Css.guiScale(this.dom)) width = this.minWidth * Css.guiScale(this.dom);
        if (width > this.maxWidth * Css.guiScale(this.dom)) width = this.maxWidth * Css.guiScale(this.dom);
        this.setStyle('width', Css.toEm(width, this.dom));
        return this;
    }
}
class Folder extends Shrinkable {
    constructor({
        title,
        icon,
    } = {}) {
        const hasTitle = title && typeof title === 'string' && title !== '';
        super({ title, icon, border: hasTitle ? true : false });
        if (!hasTitle) this.titleDiv.setStyle('display', 'none');
        this.controllers = [];
        this.props = new PropertyList('45%', LEFT_SPACING.NORMAL);
        this.add(this.props);
        this.add = function(params, variable, a, b, c, d, e) {
            if (!params || typeof params !== 'object')  return console.warn(`Folder.add(): Params object missing or invalid`);
            if (typeof variable !== 'string') return console.warn(`Folder.add(): Variable name is expected to be a string`);
            if ((variable in params) !== true) return console.warn(`Folder.add(): Variable '${variable}' not found in params object`);
            const value = params[variable];
            if (value == undefined) {
                return null;
            } else if (typeof value === 'boolean') {
                return this.addBoolean(params, variable);
            } else if (typeof value === 'number') {
                if (Array.isArray(a) && a.length > 0) {
                    return this.addList(params, variable, a);
                } else {
                    return this.addNumber(params, variable, a, b, c, d, e);
                }
            } else if (typeof value === 'string') {
                if (Array.isArray(a) && a.length > 0) {
                    return this.addList(params, variable, a);
                } else {
                    return this.addString(params, variable);
                }
            } else if (typeof value === 'function') {
                return this.addFunction(params, variable);
            } else if (Array.isArray(value) && value.length > 0) {
                if (value.length === 2 && a === 'range') {
                    return this.addRange(params, variable, b, c, d, e);
                } else {
                    return this.addVector(params, variable, a, b, c, d);
                }
            }
        };
    }
    addBoolean(params, variable) {
        const prop = new Property();
        this.controllers.push(prop);
        const boolBox = new Checkbox();
        boolBox.on('change', () => {
            params[variable] = boolBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        prop.row = this.props.addRow(Strings.prettyTitle(variable), boolBox, new FlexSpacer());
        prop.name = function(name) { prop.row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { boolBox.setValue(params[variable]); return prop; };
        prop.updateDisplay();
        return prop;
    }
    addColor(params, variable, opacity = undefined) {
        let type;
        let value = params[variable];
        if (value == undefined) { return null; }
        else if (typeof value === 'string') { type = 'string'; }
        else if (Array.isArray(value)) { type = 'array'; }
        else if (typeof value === 'object') { type = 'object'; }
        else { type = 'number'; }
        const prop = new Property();
        this.controllers.push(prop);
        const colorButton = new Color();
        function setVariable(newValue) {
            _clr$2.set(newValue);
            switch (type) {
                case 'string': params[variable] = _clr$2.hexString(); break;
                case 'array': _clr$2.toArray(params[variable]); break;
                case 'object': _clr$2.getRGB(params[variable]); break;
                case 'number': params[variable] = _clr$2.hex(); break;
                default:
            }
        }
        colorButton.on('input', () => {
            setVariable(colorButton.getHexValue());
            if (typeof prop.change === 'function') prop.change();
        });
        colorButton.on('change', () => {
            setVariable(colorButton.getHexValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        let opacityBox = null;
        if (opacity != null && params[opacity] != null) {
            opacityBox = new NumberBox();
            opacityBox.on('change', () => {
                params[opacity] = opacityBox.getValue();
                if (typeof prop.change === 'function') prop.change();
                if (typeof prop.finishChange === 'function') prop.finishChange();
            });
            opacityBox.addClass('suey-property-tiny-row');
            opacityBox.setStyle('marginLeft', '0.14286em');
            opacityBox.setStyle('flex', '0 0 var(--min-width)');
            opacityBox.dom.style.setProperty('--min-width', `5ch`);
            opacityBox.on('wheel', (event) => event.stopPropagation());
            opacityBox.setMin(0).setMax(1).setStep(0.05).setPrecision(2);
        }
        const widgets = [ Strings.prettyTitle(variable), colorButton ];
        if (opacityBox) widgets.push(opacityBox);
        prop.row = this.props.addRow(...widgets);
        prop.name = function(name) { prop.row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() {
            colorButton.setValue(_clr$2.set(params[variable]).hex());
            if (opacityBox) opacityBox.setValue(params[opacity]);
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }
    addFunction(params, variable) {
        const prop = new Property();
        this.controllers.push(prop);
        const button = new Button(Strings.prettyTitle(variable));
        button.onPress(() => params[variable]());
        prop.row = this.props.addRow(Strings.prettyTitle(variable), button);
        prop.name = function(name, buttonText) {
            prop.row.leftWidget.setInnerHtml(name);
            if (buttonText) button.setInnerHtml(buttonText);
            return prop;
        };
        return prop;
    }
    addList(params, variable, options) {
        const prop = new Property();
        this.controllers.push(prop);
        const type = (typeof params[variable] === 'string') ? 'string' : 'number';
        const selectOptions = {};
        for (let option of options) selectOptions[option] = option;
        const selectDropDown = new Dropdown();
        selectDropDown.overflowMenu = OVERFLOW.LEFT;
        selectDropDown.setOptions(selectOptions);
        selectDropDown.on('change', () => {
            params[variable] = (type === 'string') ? selectDropDown.getValue() : selectDropDown.getIndex();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        prop.row = this.props.addRow(Strings.prettyTitle(variable), selectDropDown);
        prop.name = function(name) { prop.row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() {
            if (type === 'string') selectDropDown.setValue(params[variable]);
            else selectDropDown.setIndex(params[variable]);
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }
    addNumber(params, variable, min = -Infinity, max = Infinity, step = 'any', precision = 2, unit = '') {
        const prop = new Property();
        this.controllers.push(prop);
        const slider = new Slider();
        const slideBox = new NumberBox();
        slider.on('input', () => {
            params[variable] = slider.getValue();
            slideBox.setValue(slider.getValue());
            if (typeof prop.change === 'function') prop.change();
        });
        slider.on('change', () => {
            params[variable] = slider.getValue();
            slideBox.setValue(slider.getValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        slideBox.on('change', () => {
            params[variable] = slideBox.getValue();
            slider.setValue(slideBox.getValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        slider.on('pointerdown', (event) => event.stopPropagation());
        slider.on('wheel', (event) => event.stopPropagation());
        slideBox.on('wheel', (event) => event.stopPropagation());
        slider.setRange(min, max).setPrecision(precision);
        slideBox.setRange(min, max).setPrecision(precision);
        if (unit && unit !== '') slideBox.setUnit(unit);
        function setStep(newStep) {
            let min = slideBox.min, max = slideBox.max;
            slider.setStep(newStep);
            if (newStep === 'any') newStep = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            slideBox.setStep(newStep);
        }
        setStep(step);
        const digits = Strings.countDigits(parseInt(max)) + ((precision > 0) ? precision + 0.5 : 0);
        slideBox.dom.style.setProperty('--min-width', `${digits + 1.5}ch`);
        function checkForMinMax() {
            if (Number.isFinite(Number(slider.slider.dom.min)) && Number.isFinite(Number(slider.slider.dom.max))) {
                slideBox.addClass('suey-property-tiny-row');
                slider.setStyle('display', '');
                slideBox.setStyle('marginLeft', '0.14286em');
            } else {
                slideBox.removeClass('suey-property-tiny-row');
                slider.setStyle('display', 'none');
                slideBox.setStyle('marginLeft', '0');
            }
        }
        checkForMinMax();
        prop.row = this.props.addRow(Strings.prettyTitle(variable), slider, slideBox);
        prop.name = function(name) { prop.row.leftWidget.setInnerHtml(name); return prop; };
        prop.min = function(min) { slider.setMin(min); slideBox.setMin(min); checkForMinMax(); return prop; };
        prop.max = function(max) { slider.setMax(max); slideBox.setMax(max); checkForMinMax(); return prop; };
        prop.step = function(step) { setStep(step); return prop; };
        prop.precision = function(precision) { slider.setPrecision(precision); slideBox.setPrecision(precision); return prop; };
        prop.unit = function(unit = '') { slideBox.setUnit(unit); return prop; };
        prop.updateDisplay = function() {
            slider.setValue(params[variable]);
            slideBox.setValue(params[variable]);
            params[variable] = slider.getValue();
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }
    addRange(params, variable, min = -Infinity, max = Infinity, step = 1, precision = 2) {
        const prop = new Property();
        this.controllers.push(prop);
        const dual = new DualSlider({ min, max, initialMin: params[variable][0], initialMax: params[variable][1], step, precision });
        const minBox = new NumberBox().addClass('suey-property-tiny-row');
        const maxBox = new NumberBox().addClass('suey-property-tiny-row');
        dual.on('change', () => {
            params[variable][0] = dual.currentMin;
            params[variable][1] = dual.currentMax;
            minBox.setValue(dual.currentMin);
            maxBox.setValue(dual.currentMax);
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        minBox.on('change', () => {
            const minValue = Math.min(minBox.getValue(), params[variable][1]);
            minBox.setValue(minValue);
            params[variable][0] = minValue;
            dual.setRange({ min: params[variable][0], max: params[variable][1] }, false );
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        maxBox.on('change', () => {
            const maxValue = Math.max(maxBox.getValue(), params[variable][0]);
            maxBox.setValue(maxValue);
            params[variable][1] = maxValue;
            dual.setRange({ min: params[variable][0], max: params[variable][1] }, false );
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        dual.setMinMax(min, max).setStep(step).setPrecision(precision);
        minBox.setRange(min, max).setStep(step).setPrecision(precision);
        maxBox.setRange(min, max).setStep(step).setPrecision(precision);
        const digits = Strings.countDigits(parseInt(max)) + ((precision > 0) ? precision + 0.5 : 0);
        minBox.dom.style.setProperty('--min-width', `${digits + 1.5}ch`);
        maxBox.dom.style.setProperty('--min-width', `${digits + 1.5}ch`);
        prop.row = this.props.addRow(Strings.prettyTitle(variable), dual, minBox, maxBox);
        prop.name = function(name) { prop.row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() {
            dual.setRange({ min: params[variable][0], max: params[variable][1] }, false );
            minBox.setValue(params[variable][0]);
            maxBox.setValue(params[variable][1]);
            params[variable][0] = dual.currentMin;
            params[variable][1] = dual.currentMax;
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }
    addString(params, variable) {
        const prop = new Property();
        this.controllers.push(prop);
        const textBox = new TextBox();
        textBox.on('change', () => {
            params[variable] = textBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        prop.row = this.props.addRow(Strings.prettyTitle(variable), textBox);
        prop.name = function(name) { prop.row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { textBox.setValue(params[variable]); return prop; };
        prop.updateDisplay();
        return prop;
    }
    addVector(params, variable, min = -Infinity, max = Infinity, step = 'any', precision = 2) {
        const prop = new Property();
        this.controllers.push(prop);
        const vector = params[variable];
        prop.row = this.props.addRow(Strings.prettyTitle(variable));
        const boxes = [];
        for (let i = 0; i < vector.length; i++) {
            const box = new NumberBox();
            boxes.push(box);
            box.on('change', () => {
                vector[i] = box.getValue();
                if (typeof prop.change === 'function') prop.change();
                if (typeof prop.finishChange === 'function') prop.finishChange();
            });
            box.on('wheel', (event) => event.stopPropagation());
            box.setRange(min, max).setPrecision(precision);
            prop.row.rightWidget.add(box);
            if (i < vector.length - 1) prop.row.rightWidget.add(new Div().setStyle('min-width', '3px'));
        }
        function setStep(newStep) {
            let min = boxes[0].min, max = boxes[0].max;
            if (newStep === 'any') newStep = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            for (let i = 0; i < vector.length; i++) {
                boxes[i].setStep(newStep);
            }
        }
        setStep(step);
        prop.name = function(name) { prop.row.leftWidget.setInnerHtml(name); return prop; };
        prop.min = function(min) { for (let i = 0; i < boxes.length; i++) { boxes[i].setMin(min); } return prop; };
        prop.max = function(max) { for (let i = 0; i < boxes.length; i++) { boxes[i].setMax(max); } return prop; };
        prop.step = function(step) { for (let i = 0; i < boxes.length; i++) { boxes[i].setStep(step); } return prop; };
        prop.precision = function(precision) { for (let i = 0; i < boxes.length; i++) { boxes[i].setPrecision(precision); } return prop; };
        prop.updateDisplay = function() {
            for (let i = 0; i < vector.length; i++) {
                boxes[i].setValue(params[variable][i]);
                params[variable][i] = boxes[i].getValue();
            }
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }
    updateDisplays() {
        for (const controller of this.controllers) {
            if (controller && typeof controller.updateDisplay === 'function') {
                controller.updateDisplay();
            }
        }
    }
}
class Property {
    constructor() {
        const self = this;
        this.change = null;
        this.finishChange = null;
        this.name = function() { return self; };
        this.updateDisplay = function() { return self; };
        this.min = function() { return self; };
        this.max = function() { return self; };
        this.step = function() { return self; };
        this.precision = function() { return self; };
        this.row = null;
    }
    onChange(callback) {
        this.change = callback;
        return this;
    }
    onFinishChange(callback) {
        this.finishChange = callback;
        return this;
    }
    hide() {
        if (this.row) this.row.setStyle('display', 'none');
    }
    show() {
        if (this.row) this.row.setStyle('display', '');
    }
}

class Break extends Element {
    constructor() {
        super(document.createElement('br'));
    }
}

class Canvas extends Element {
    constructor(width = 300, height = 150) {
        const canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
        canvas.width = width;
        canvas.height = height;
        super(canvas);
        this.context = this.dom.getContext('2d');
    }
    get width() { return this.dom.width; }
    set width(x) { this.dom.width = x; }
    get height() { return this.dom.height; }
    set height(y) { this.dom.height = y; }
    ratio() {
        const rect = this.dom.getBoundingClientRect();
        return ((this.dom.width / this.dom.height) / (rect.width / rect.height));
    }
}

class TreeList extends Div {
    #shiftAdd = 0;
    #shiftTrack = [];
    #dragImage = null;
    constructor(multiSelect = false) {
        super();
        const self = this;
        this.setClass('suey-tree-list');
        this.allowFocus();
        this.multiSelect = multiSelect;
        this.options = [];
        this.selectedValue = null;
        this.selectedValues = [];
        function treeKeyDown(event) {
            if (!self.multiSelect) {
                if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                    event.preventDefault();
                    event.stopPropagation();
                    let index = self.getIndex(self.selectedValue);
                    if (index === -1) return;
                    if (event.key === 'ArrowUp') index--;
                    if (event.key === 'ArrowDown') index++;
                    if (index >= 0 && index < self.options.length) {
                        self.setValue(self.options[index].value, true);
                        self.dom.dispatchEvent(new Event('change'));
                    }
                }
            } else {
                if (!event.shiftKey) {
                    self.#shiftAdd = 0;
                    self.#shiftTrack = [];
                }
                if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                    event.preventDefault();
                    event.stopPropagation();
                    let values = [...self.selectedValues];
                    if (event.shiftKey) {
                        if (self.#shiftTrack.length === 0) self.#shiftTrack = [...values];
                        values = [...self.#shiftTrack];
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.key === 'ArrowUp' && index + self.#shiftAdd > 0) self.#shiftAdd--;
                        if (event.key === 'ArrowDown' && index + self.#shiftAdd < self.options.length - 1) self.#shiftAdd++;
                        index += self.#shiftAdd;
                        if (index < 0 || index > self.options.length - 1) return;
                        const index1 = self.getIndex(values[values.length - 1]);
                        const index2 = index;
                        if (index1 < index2) {
                            for (let i = index1; i <= index2; i++) {
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        } else {
                            for (let i = index1; i >= index2; i--) {
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        }
                        self.setValues(values, true);
                        self.dom.dispatchEvent(new Event('change'));
                    } else if (values.length > 0) {
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.key === 'ArrowUp') index--;
                        if (event.key === 'ArrowDown') index++;
                        if (index >= 0 && index < self.options.length) {
                            self.setValues([ self.options[index].value ], true);
                            self.dom.dispatchEvent(new Event('change'));
                        }
                    }
                }
            }
        }
        function treeKeyUp(event) {
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                    event.preventDefault();
                    event.stopPropagation();
                    if (!event.shiftKey) {
                        self.#shiftAdd = 0;
                        self.#shiftTrack = [];
                    }
                    break;
            }
        }
        this.on('keydown', treeKeyDown);
        this.on('keyup', treeKeyUp);
    }
    getIndex(value) {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].value == value) return i;
        }
        return -1;
    }
    getOption(value) {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].value == value) return this.options[i];
        }
        return undefined;
    }
    getValue() {
        return this.selectedValue;
    }
    setValue(value, scrollTo = false) {
        let lastElement = undefined;
        for (let i = 0; i < this.options.length; i++) {
            this.options[i].classList.remove('suey-active');
        }
        for (let i = 0; i < this.options.length; i++) {
            const element = this.options[i];
            if (element.value == value) {
                element.classList.add('suey-active');
                lastElement = element;
            }
        }
        if (lastElement && scrollTo) setTimeout(() => Dom.scrollIntoView(lastElement), 0);
        this.selectedValue = value;
        return this;
    }
    getValues() {
        return this.selectedValues;
    }
    setValues(valueArray = [], scrollTo = false) {
        let lastElement = undefined;
        for (const div of this.options) {
            div.classList.remove('suey-active');
            div.classList.remove('suey-active-top');
            div.classList.remove('suey-active-bottom');
        }
        for (const value of valueArray) {
            for (const div of this.options) {
                if (div.value == value) {
                    div.classList.add('suey-active');
                    lastElement = div;
                }
            }
        }
        for (let i = 0; i < this.options.length - 1; i++) {
            const element = this.options[i];
            const elementAfter = this.options[i + 1];
            if (element.classList.contains('suey-active') && elementAfter.classList.contains('suey-active')) {
                element.classList.add('suey-active-top');
                elementAfter.classList.add('suey-active-bottom');
            }
        }
        if (lastElement && scrollTo) setTimeout(() => { Dom.scrollIntoView(lastElement); }, 0);
        this.selectedValues = [...valueArray];
        return this;
    }
    setOptions(options) {
        const self = this;
        this.clearContents();
        function divPointerDown(event) {
            if (!event.shiftKey) {
                self.#shiftAdd = 0;
                self.#shiftTrack = [];
            }
            if (self.multiSelect) {
                let multiAllowed = false;
                multiAllowed = multiAllowed || !this.singleSelect;
                multiAllowed = multiAllowed || self.selectedValues.length < 1;
                if (self.selectedValues.length === 1) {
                    const option = self.getOption(self.selectedValues[0]);
                    if (option && option.singleSelect === true) multiAllowed = false;
                }
                let values = [...self.selectedValues];
                if (event.altKey || event.ctrlKey || event.metaKey) {
                    if (values.includes(this.value)) {
                        const index = values.indexOf(this.value);
                        values.splice(index, 1);
                    } else {
                        if (multiAllowed) values.push(this.value);
                    }
                    self.setValues(values);
                } else if (event.shiftKey && values.length > 0) {
                    if (multiAllowed) {
                        if (self.#shiftTrack.length === 0) self.#shiftTrack = [...self.selectedValues];
                        values = [...self.#shiftTrack];
                        const index1 = self.getIndex(values[values.length - 1]);
                        const index2 = self.getIndex(this.value);
                        if (index1 < index2) {
                            for (let i = index1; i <= index2; i++) {
                                if (self.options[i].singleSelect) continue;
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        } else {
                            for (let i = index1; i >= index2; i--) {
                                if (self.options[i].singleSelect) continue;
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        }
                        self.#shiftAdd = index2 - index1;
                        self.setValues(values);
                    }
                } else {
                    if (!values.includes(this.value)) {
                        self.setValues([ this.value ]);
                    }
                }
            } else {
                self.setValue(this.value);
            }
            this.addEventListener('pointerup', divPointerUp, { once: true });
            self.dom.dispatchEvent(new Event('change'));
        }
        function divPointerUp(event) {
            if (self.multiSelect) {
                if (! (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)) {
                    self.setValues([ this.value ]);
                }
            }
        }
        let currentDrag = undefined;
        function onDrag() {
            currentDrag = this;
        }
        function onDragStart(event) {
            if (self.multiSelect) {
                const divRect = this.getBoundingClientRect();
                const width = divRect.width;
                const height = divRect.height * self.selectedValues.length;
                self.#dragImage = document.createElement('div');
                self.#dragImage.classList.add('suey-tree-list');
                self.#dragImage.classList.add('suey-drag-image');
                self.#dragImage.style['width'] = `${width}px`;
                self.#dragImage.style['height'] = `${height}px`;
                self.#dragImage.style['top'] = `${height * -2}px`;
                for (let i = 0; i < self.selectedValues.length; i++) {
                    const value = self.selectedValues[i];
                    const option = self.getOption(value);
                    const optionClone = option.cloneNode(true );
                    optionClone.classList.add('suey-active-top');
                    optionClone.classList.add('suey-active-bottom');
                    self.#dragImage.appendChild(optionClone);
                }
                document.body.appendChild(self.#dragImage);
                event.dataTransfer.setDragImage(self.#dragImage, 0, 0);
                event.dataTransfer.setData('text/plain', self.selectedValues);
            } else {
                event.dataTransfer.setData('text/plain', self.selectedValue);
            }
        }
        function onDragEnd(event) {
            if (self.#dragImage instanceof HTMLElement) {
                document.body.removeChild(self.#dragImage);
                self.#dragImage = null;
            }
        }
        function onDragOver(event) {
            if (!currentDrag || this === currentDrag) return;
            const area = event.offsetY / this.clientHeight;
            if (this.dropGroup !== currentDrag.dropGroup) {
                this.classList.remove('suey-drag');
                this.classList.remove('suey-drag-top');
                this.classList.remove('suey-drag-bottom');
            } else if (this.noDirectDrop) {
                this.classList.remove('suey-drag');
                if (area < 0.5) {
                    this.classList.add('suey-drag-top');
                    this.classList.remove('suey-drag-bottom');
                } else {
                    this.classList.add('suey-drag-bottom');
                    this.classList.remove('suey-drag-top');
                }
            } else {
                if (area < 0.25) {
                    this.classList.add('suey-drag-top');
                    this.classList.remove('suey-drag');
                    this.classList.remove('suey-drag-bottom');
                } else if (area < 0.75) {
                    this.classList.add('suey-drag');
                    this.classList.remove('suey-drag-top');
                    this.classList.remove('suey-drag-bottom');
                } else {
                    this.classList.add('suey-drag-bottom');
                    this.classList.remove('suey-drag');
                    this.classList.remove('suey-drag-top');
                }
            }
        }
        function onDragLeave() {
            if (!currentDrag || this === currentDrag) return;
            this.classList.remove('suey-drag');
            this.classList.remove('suey-drag-top');
            this.classList.remove('suey-drag-bottom');
        }
        function onDrop(event) {
            event.preventDefault();
            event.stopPropagation();
            this.classList.remove('suey-drag');
            this.classList.remove('suey-drag-top');
            this.classList.remove('suey-drag-bottom');
            if (currentDrag && this !== currentDrag && this.dropGroup === currentDrag.dropGroup) {
                const data = event.dataTransfer.getData('text/plain');
                const values = data.split(',');
                if (typeof self.onDrop === 'function') {
                    self.onDrop(event, this, values);
                }
            }
            currentDrag = undefined;
        }
        self.options = [];
        for (let i = 0; i < options.length; i++) {
            const div = options[i];
            div.classList.add('suey-option');
            self.dom.appendChild(div);
            self.options.push(div);
            div.addEventListener('pointerdown', divPointerDown);
            div.addEventListener('destroy', () => div.removeEventListener('pointerdown', divPointerDown), { once: true });
            if (div.draggable) {
                div.addEventListener('drag', onDrag);
                div.addEventListener('dragstart', onDragStart);
                div.addEventListener('dragend', onDragEnd);
                div.addEventListener('dragover', onDragOver);
                div.addEventListener('dragleave', onDragLeave);
                div.addEventListener('drop', onDrop);
                div.addEventListener('destroy', () => {
                    div.removeEventListener('drag', onDrag);
                    div.removeEventListener('dragstart', onDragStart);
                    div.removeEventListener('dragend', onDragEnd);
                    div.removeEventListener('dragover', onDragOver);
                    div.removeEventListener('dragleave', onDragLeave);
                    div.removeEventListener('drop', onDrop);
                }, { once: true });
            }
        }
        return this;
    }
}

class AbstractDock extends Panel {
    constructor({
        style = PANEL_STYLES.FANCY,
    } = {}) {
        super({ style });
        this.addClass('suey-dock');
        this.selectedID = '';
    }
    addFloater(...floaters) {
        console.error(`${this.constructor.name}.addFloater(): Method must be reimplemented from AbstractDock`);
        return this;
    }
    findFloater(tabID = '') {
        console.error(`${this.constructor.name}.findFloater(): Method must be reimplemented from AbstractDock`);
        return null;
    }
    removeFloater(floater, destroy = false) {
        console.error(`${this.constructor.name}.removeFloater(): Method must be reimplemented from AbstractDock`);
        return this;
    }
    removeFloaters() {
        console.error(`${this.constructor.name}.removeFloaters(): Method must be reimplemented from AbstractDock`);
        return this;
    }
    selectFirst() {
        console.error(`${this.constructor.name}.selectFirst(): Method must be reimplemented from AbstractDock`);
        return this;
    }
    selectFloater(selectID, wasClicked = false) {
        console.error(`${this.constructor.name}.selectFloater(): Method must be reimplemented from AbstractDock`);
        return this;
    }
    tabCount() {
        console.error(`${this.constructor.name}.tabCount(): Method must be reimplemented from AbstractDock`);
        return 0;
    }
}

const _color$1 = new Iris();
class Floater extends Panel {
    constructor(id = 'unknown', options = {}) {
        super();
        this.setID(id);
        this.addClass('suey-floater', 'suey-hidden');
        this.dock = null;
        if (typeof options !== 'object') options = {};
        if (!('color' in options) || options.color == null) options.color = ColorScheme.color(TRAIT.ICON);
        if (!('alpha' in options)) options.alpha = 1.0;
        if (!('icon' in options))options.icon = IMAGE_EMPTY;
        if (!('shadow' in options)) options.shadow = 0x000000;
        if (!('shrink' in options)) options.shrink = 1;
        if (options.shrink === true) options.shrink = 0.7;
        if (typeof options.shrink === 'string') {
            options.shrink = parseFloat(options.shrink) / (options.shrink.includes('%') ? 100 : 1);
        }
        this.button = new TabButton(this, Strings.capitalize(id), options);
        if (!('titled' in options)) options.titled = true;
        if (typeof options.title !== 'string') options.title = id;
        if (options.titled) {
            const tabTitle = new Div().addClass('suey-tab-title');
            tabTitle.add(new Text(Strings.capitalize(options.title)).addClass('suey-tab-title-text'));
            this.add(tabTitle);
            this.tabTitle = tabTitle;
            this.scroller = new Div().addClass('suey-scroller');
            this.add(this.scroller);
            this.contents = function() { return this.scroller; };
        }
    }
    destroy() {
        this.button.destroy();
        super.destroy();
    }
    removeSelf() {
        if (this.dock) {
            this.dock.removeFloater(this, true);
        } else {
            super.removeSelf();
        }
    }
    setTitle(title = '') {
        title = Strings.capitalize(title);
        const titleTextElement = this.dom.querySelector('.suey-tab-title-text');
        if (titleTextElement) {
            titleTextElement.textContent = title;
        }
    }
}
class TabButton extends Div {
    constructor(tabPanel, tooltip, options = {}) {
        super();
        const self = this;
        this.setClass('suey-tab-button');
        if (options.shadow) this.addClass('suey-tab-shadow');
        this.dom.draggable = true;
        this.tabPanel = tabPanel;
        Object.defineProperty(this, 'id', {
            get: function() { return (tabPanel) ? tabPanel.id : ''; },
            set: function(value) {
                if (tabPanel) {
                    tabPanel.id = value;
                } else {
                    console.warn(`TabButton: TabPanel not found`);
                }
            },
        });
        this.iconVector = new VectorBox(options.icon);
        this.iconBorder = new Div().setClass('suey-tab-icon-border');
        this.add(this.iconVector, this.iconBorder);
        this.setTooltip = function(tooltip) { self.iconBorder.setAttribute('tooltip', tooltip); };
        this.setTooltip(tooltip);
        if (typeof options.color === 'string' && options.color.includes('var(--')) {
            this.iconVector.setStyle('background-color', `rgba(${options.color}, ${options.alpha})`);
        } else {
            _color$1.set(options.color);
            const light = `rgba(${_color$1.rgbString(options.alpha)})`;
            const dark = `rgba(${_color$1.darken(0.75).rgbString(options.alpha)})`;
            const background = `linear-gradient(to bottom left, ${light}, ${dark})`;
            this.iconVector.setStyle('background-image', background);
        }
        const shadow = options.shadow;
        if (this.iconVector.img && shadow !== false) {
            _color$1.set(shadow);
            const dropShadow = `drop-shadow(0 0 var(--pad-micro) rgba(${_color$1.rgbString()}, 0.8))`;
            this.iconVector.img.setStyle('filter', dropShadow);
        }
        const shrink = options.shrink;
        if (this.iconVector.img && !isNaN(shrink)) {
            this.iconVector.img.setStyle('transform', `scale(${shrink})`);
        }
        let downX = 0, downY = 0, downTime = 0;
        let minDistance = 0;
        let buttonClone = undefined;
        let lastUnder = undefined;
        let locationUnder = undefined;
        let wasSelected = false;
        let lastClickTime = performance.now() - 1000;
        let lastCheckTime = performance.now();
        function tabPointerDown(event) {
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            downTime = performance.now();
            minDistance = 0;
            downX = event.pageX;
            downY = event.pageY;
            document.addEventListener('pointermove', tabPointerMove);
            document.addEventListener('pointerup', tabPointerUp);
            lastCheckTime = performance.now();
        }
        function tabPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            if (performance.now() - lastCheckTime < 30) return;
            lastCheckTime = performance.now();
            minDistance = Math.max(minDistance, Math.abs(downX - event.pageX));
            minDistance = Math.max(minDistance, Math.abs(downY - event.pageY));
            if (!buttonClone) {
                if (minDistance < MOUSE_SLOP_LARGE) return;
                Css.setCursor('pointer');
                document.body.classList.add('suey-dock-drag');
                wasSelected = self.hasClass('suey-selected');
                buttonClone = self.dom.cloneNode(true);
                buttonClone.classList.add('suey-drag-tab-button');
                document.body.appendChild(buttonClone);
                document.dispatchEvent(new Event('closemenu'));
            }
            const newLeft = event.pageX - (self.getWidth() / 2);
            const newTop = event.pageY - (self.getHeight() / 2);
            buttonClone.style.left = `${newLeft}px`;
            buttonClone.style.top = `${newTop}px`;
            let elementUnder = null;
            let pastEdge = '';
            if (!elementUnder) elementUnder = Dom.findElementAt('suey-window', event.pageX, event.pageY);
            if (elementUnder) {
                if (elementUnder === self.tabPanel.dock) {
                    self.tabPanel.dock.addClass('suey-drop-target');
                } else {
                    elementUnder = null;
                }
            }
            if (!elementUnder) {
                const primary = self.tabPanel.dock?.parent?.getPrimary();
                if (primary) {
                    const primaryRect = primary.dom.getBoundingClientRect();
                    const edgeSize = parseFloat(Css.toPx('0.25em'));
                    if (event.pageX < primaryRect.left + edgeSize) pastEdge = 'left';
                    if (event.pageY < primaryRect.top + edgeSize) pastEdge = 'top';
                    if (event.pageX > primaryRect.right - edgeSize) pastEdge = 'right';
                    if (event.pageY > primaryRect.bottom - edgeSize) pastEdge = 'bottom';
                    if (pastEdge !== '') {
                        const primaries = document.body.getElementsByClassName('suey-docker-primary');
                        if (primaries) elementUnder = primaries[0].suey;
                    }
                }
                if (!elementUnder) {
                    const tabButtons = document.elementsFromPoint(event.pageX, event.pageY);
                    if (tabButtons.includes(self.parent.dom)) elementUnder = self.parent;
                    if (!elementUnder) elementUnder = Dom.findElementAt('suey-docker', event.pageX, event.pageY);
                }
            }
            if (elementUnder && elementUnder.isElement) {
                if (elementUnder.hasClass('suey-tab-buttons')) {
                    const buttonUnder = Dom.findElementAt('suey-tab-button', event.pageX, event.pageY);
                    if (buttonUnder) {
                        if (elementUnder.children.indexOf(self) === -1) {
                            if (self.tabPanel.dock) {
                                self.tabPanel.dock.removeFloater(self.tabPanel);
                            }
                            buttonUnder.tabPanel.dock.addFloater(self.tabPanel);
                            if (wasSelected) buttonUnder.tabPanel.dock.selectFloater(self.tabPanel.id);
                        }
                        buttonUnder.addClass('suey-drop-target');
                        const childrenArray = Array.from(elementUnder.dom.children);
                        const newIndex = childrenArray.indexOf(buttonUnder.dom);
                        const oldIndex = childrenArray.indexOf(self.dom);
                        if (newIndex !== oldIndex) {
                            elementUnder.dom.appendChild(self.dom);
                            elementUnder.dom.insertBefore(self.dom, elementUnder.dom.children[newIndex]);
                        }
                        elementUnder = buttonUnder;
                    }
                } else if (elementUnder.hasClass('suey-docker')) {
                    elementUnder.showDockLocations(pastEdge !== '');
                    if (pastEdge !== '') {
                        locationUnder = Dom.childWithClass(elementUnder, `suey-dock-${pastEdge}`);
                    } else {
                        locationUnder = Dom.findElementAt('suey-dock-location', event.pageX, event.pageY);
                    }
                    if (locationUnder) {
                        locationUnder.addClass('suey-dock-drop');
                        if (locationUnder.hasClass('suey-dock-middle')) {
                            locationUnder.addClass('suey-dock-self');
                            locationUnder.parent.parent.addClass('suey-dock-self');
                        }
                    }
                }
            }
            if (elementUnder !== lastUnder && lastUnder && lastUnder.isElement) {
                if (lastUnder.hasClass('suey-docker')) lastUnder.hideDockLocations();
                if (lastUnder.hasClass('suey-tab-button')) lastUnder.removeClass('suey-drop-target');
                if (lastUnder.hasClass('suey-window')) lastUnder.removeClass('suey-drop-target');
            }
            lastUnder = elementUnder;
        }
        function tabPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            if (buttonClone) {
                Css.setCursor('');
                document.body.classList.remove('suey-dock-drag');
                document.body.removeChild(buttonClone);
                if (lastUnder && lastUnder.hasClass('suey-tab-button')) {
                    lastUnder.removeClass('suey-drop-target');
                } else if (lastUnder && lastUnder.hasClass('suey-docker')) {
                    if (locationUnder) {
                        let droppedOnDock = null;
                        if (locationUnder.hasClassWithString('middle')) {
                            droppedOnDock = lastUnder.children.find(child => child.hasClass('suey-tabbed'));
                        } else if (locationUnder.hasClassWithString('top')) {
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.TOP, '25%', false).enableTabs();
                        } else if (locationUnder.hasClassWithString('bottom')) {
                            const flexBefore = (lastUnder.initialSide === 'left') || (lastUnder.initialSide === 'right');
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.BOTTOM, '25%', false).enableTabs(flexBefore);
                        } else if (locationUnder.hasClassWithString('left')) {
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.LEFT, '20%', false).enableTabs();
                        } else if (locationUnder.hasClassWithString('right')) {
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.RIGHT, '20%', false).enableTabs();
                        } else if (locationUnder.hasClassWithString('center')) {
                            const mainWindow = lastUnder.getMainWindow();
                            if (mainWindow) droppedOnDock = mainWindow.addWindow({ title: self.tabPanel.id, width: '50%', height: '70%' });
                        } else {
                            console.warn('TabButton.tabPointerUp(): Unknown dock location', locationUnder);
                        }
                        if (droppedOnDock) {
                            if (droppedOnDock !== self.tabPanel.dock) {
                                self.tabPanel.dock.removeFloater(self.tabPanel);
                            }
                            droppedOnDock.addFloater(self.tabPanel);
                            droppedOnDock.selectFloater(self.tabPanel.id);
                            droppedOnDock.focus();
                        }
                    }
                    lastUnder.hideDockLocations();
                } else if (lastUnder && lastUnder.hasClass('suey-window')) {
                    lastUnder.removeClass('suey-drop-target');
                }
                buttonClone = undefined;
                lastUnder = null;
                locationUnder = null;
            } else {
                if (performance.now() - downTime < MOUSE_CLICK) {
                    if (performance.now() - lastClickTime < MOUSE_CLICK * 1.5) {
                        if (typeof self.tabPanel.dock.toggleTabs === 'function') {
                            self.tabPanel.dock.toggleTabs();
                        }
                    } else {
                        document.dispatchEvent(new Event('closemenu'));
                        self.tabPanel.dock.selectFloater(self.tabPanel.id, true);
                    }
                }
                lastClickTime = performance.now();
            }
            document.removeEventListener('pointermove', tabPointerMove);
            document.removeEventListener('pointerup', tabPointerUp);
        }
        this.on('pointerdown', tabPointerDown);
    }
}

const MINIMUM_TABS_TO_SHOW = 1;
class Tabbed extends AbstractDock {
    constructor({
        style = PANEL_STYLES$1.FANCY,
        tabSide = TAB_SIDES.RIGHT,
        opposite = false,
        closeButton = false,
    } = {}) {
        super({ style });
        const self = this;
        this.addClass('suey-tabbed');
        this.buttons = new Div().setClass('suey-tab-buttons').setStyle('display', 'none');
        this.floaters = new Div().setClass('suey-tab-floaters');
        this.add(this.buttons, this.floaters);
        tabSide = opposite ? oppositeSide(tabSide) : tabSide;
        this.setTabSide(tabSide);
        if (closeButton) {
            const buttonSide = (tabSide === 'right') ? CLOSE_SIDES.LEFT : CLOSE_SIDES.RIGHT;
            const offset = (tabSide === 'right' || tabSide === 'left') ? 0 : 1.7;
            Interaction.addCloseButton(this, buttonSide, offset, 1.3 );
        }
    }
    focus() {
        super.focus();
        if (document.activeElement === this.dom || this.dom.contains(document.activeElement) === false) {
            const floater = this.findFloater(this.selectedID);
            if (floater) floater.dom.dispatchEvent(new Event('activate-window'));
        }
    }
    destroy() {
        this.removeFloaters();
        super.destroy();
    }
    addFloater(...floaters) {
        if (!floaters || !Array.isArray(floaters)) return this;
        let tabsAdded = 0;
        for (const floater of floaters) {
            if (!floater || !floater.hasClass('suey-floater')) continue;
            floater.dock = this;
            this.floaters.add(floater);
            this.buttons.add(floater.button);
            tabsAdded++;
            this.buttons.setStyle('display', (this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');
            this.setContentsStyle('minHeight', '');
            if (this.buttons.hasClass('suey-left-side') || this.buttons.hasClass('suey-right-side')) {
                this.setContentsStyle('minHeight', ((2.2 * this.buttons.children.length) + 0.4) + 'em');
            }
        }
        if (tabsAdded > 0) {
            if (this.tabCount() > 0) this.setStyle('display', '');
            if (this.selectedID === '') this.selectFirst();
            this.dom.dispatchEvent(new Event('tabs-changed', { bubbles: true }));
        }
        return this;
    }
    findFloater(tabID = '') {
        return this.floaters.children.find((item) => (item.id === tabID));
    }
    removeFloater(floater, destroy = false) {
        if (typeof floater === 'string') floater = this.findFloater(floater);
        if (!floater) return this;
        if (destroy) floater.destroy();
        const index = this.floaters.children.indexOf(floater);
        if (!floater || index === -1) return this;
        const button = this.buttons.children[index];
        const panel = this.floaters.children[index];
        if (button) button.removeClass('suey-selected');
        if (panel) panel.addClass('suey-hidden');
        this.buttons.detach(button);
        this.floaters.detach(panel);
        if (panel.id === this.selectedID) {
            if (index > 0) this.selectFloater(this.floaters.children[index - 1].id);
            else if (this.floaters.children.length > 0) this.selectFirst();
        }
        this.setContentsStyle('minHeight', '');
        if (this.buttons.hasClass('suey-left-side') || this.buttons.hasClass('suey-right-side')) {
            this.setContentsStyle('minHeight', ((2.2 * this.buttons.children.length) + 0.4) + 'em');
        }
        this.buttons.setStyle('display', (this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');
        this.dom.dispatchEvent(new Event('tabs-changed', { bubbles: true }));
        return this;
    }
    removeFloaters() {
        const children = [ ...this.floaters.children ];
        for (const child of children) {
            this.removeFloater(child, true );
        }
        return this;
    }
    selectFirst() {
        if (this.floaters.children.length > 0) this.selectFloater(this.floaters.children[0].id);
        return this;
    }
    selectFloater(selectID, wasClicked = false) {
        if (selectID && selectID.isElement) selectID = selectID.id;
        if (typeof selectID !== 'string') return this;
        if (wasClicked && this.parent.hasClass('suey-collapsed')) {
            this.toggleTabs();
        }
        if (this.selectedID === selectID) return this;
        const panel = this.findFloater(selectID);
        if (panel && panel.button) {
            if (!wasClicked) Css.setVariable('--tab-timing', '0');
            this.floaters.children.forEach((element) => element.hide());
            this.buttons.children.forEach((element) => element.removeClass('suey-selected'));
            panel.display();
            panel.button.addClass('suey-selected');
            this.selectedID = selectID;
            this.setStyle('display', '');
            const tabSelected = new Event('tab-selected', { bubbles: true });
            tabSelected.value = selectID;
            this.dom.dispatchEvent(tabSelected);
            setTimeout(() => Css.setVariable('--tab-timing', '200ms'), 50);
        }
        return this;
    }
    tabCount() {
        return this.floaters.children.length;
    }
    toggleTabs() {
        if (this.parent && this.parent.hasClass('suey-docker')) {
            if (this.parent.hasClass('suey-collapsed')) {
                this.parent.expandTabs();
            } else {
                this.parent.collapseTabs();
            }
        }
    }
    setTabSide(side) {
        side = String(side).toLowerCase();
        this.buttons.removeClass('suey-left-side', 'suey-right-side', 'suey-top-side', 'suey-bottom-side');
        this.buttons.addClass(`suey-${side}-side`);
    }
}
function oppositeSide(side) {
    if (side === 'left') return 'right';
    if (side === 'right') return 'left';
    if (side === 'top') return 'bottom';
    if (side === 'bottom') return 'top';
    return 'center';
}

const MINIMUM_NORMAL = 100;
class Docker extends Panel {
    #primary = false;
    constructor(primary = true) {
        super({ style: PANEL_STYLES$1.NONE });
        const self = this;
        this.addClass('suey-docker');
        this.initialSide = 'center';
        this.dockSide = 'center';
        this.minimumSize = MINIMUM_NORMAL;
        this.expandSize = null;
        this.expandSide = '';
        this.#primary = primary;
        if (primary) {
            this.addClass('suey-docker-primary');
            this.initialSide = 'center';
            function alertChildrenOfResize() {
                for (const child of self.children) {
                    child.dom.dispatchEvent(new Event('resized'));
                }
            }
            window.addEventListener('resize', alertChildrenOfResize);
            this.on('destroy', () => {
                window.removeEventListener('resize', alertChildrenOfResize);
            });
        }
    }
    getMainWindow() {
        const primary = this.getPrimary();
        if (primary) {
            const mainWindow = primary.parent;
            if (mainWindow && mainWindow.hasClass('suey-main-window')) return mainWindow;
        }
        return null;
    }
    getPrimary() {
        let primary = undefined;
        this.traverseAncestors((parent) => {
            if (!primary && parent.hasClass('suey-docker-primary')) primary = parent;
        }, true );
        return primary;
    }
    isPrimary() {
        return this.#primary;
    }
    clearDocks() {
        const self = this;
        this.remove(...this.children);
        this.contents = function() { return self; };
    }
    isVertical() { return this.hasClass('suey-docker-vertical'); }
    isHorizontal() { return this.hasClass('suey-docker-horizontal'); }
    limitSize() {
        if (this.initialSide === 'left' && this.dockSide === 'left') return true;
        if (this.initialSide === 'right' && this.dockSide === 'right') return true;
        return false;
    }
    addDock(side = DOCK_SIDES.LEFT, size = '20%', primaryContents = true) {
        if (!Object.values(DOCK_SIDES).includes(side)) {
            console.warn(`Docker.addDock(): Unkown dock side '${side}', defaulting to 'left'`);
            side = 'left';
        }
        const dock = new Docker(false );
        const twin = new Docker(false );
        if (this.hasClass('suey-collapsed')) {
            dock.addClass('suey-collapsed');
            twin.addClass('suey-collapsed');
        }
        switch (side) {
            case DOCK_SIDES.LEFT:
            case DOCK_SIDES.RIGHT:
                dock.addClass('suey-docker-vertical').setStyle('width', Css.toPx(size, this.dom, 'w'));
                twin.addClass('suey-docker-vertical');
                if (side === DOCK_SIDES.LEFT) { dock.setStyle('left', 0); twin.setStyle('right', 0); }
                if (side === DOCK_SIDES.RIGHT) { dock.setStyle('right', 0); twin.setStyle('left', 0); }
                break;
            case DOCK_SIDES.TOP:
            case DOCK_SIDES.BOTTOM:
                dock.addClass('suey-docker-horizontal').setStyle('height', Css.toPx(size, this.dom, 'h'));
                twin.addClass('suey-docker-horizontal');
                if (side === DOCK_SIDES.TOP) { dock.setStyle('top', 0); twin.setStyle('bottom', 0); }
                if (side === DOCK_SIDES.BOTTOM) { dock.setStyle('bottom', 0); twin.setStyle('top', 0); }
                break;
        }
        const childrenOf = primaryContents ? this.contents() : this;
        const children = [];
        for (const child of childrenOf.children) {
            if (child.hasClass('suey-docker') ||
                child.hasClass('suey-tabbed') ||
                child.hasClass('suey-flex-spacer')) {
                children.push(child);
                if (child.hasClass('suey-flex-spacer)')) child.addClass('suey-hidden');
            }
        }
        twin.add(...children);
        if (primaryContents) this.add(twin, dock);
        else this.addToSelf(twin, dock);
        dock.dockSide = side;
        twin.dockSide = this.dockSide;
        dock.initialSide = (this.initialSide === 'center') ? side : this.initialSide;
        twin.initialSide = this.initialSide;
        dock.addClass(`initalside-${dock.initialSide}`); dock.addClass(`dockside-${dock.dockSide}`);
        twin.addClass(`initalside-${twin.initialSide}`); twin.addClass(`dockside-${twin.dockSide}`);
        if (dock.isHorizontal()) {
            if (dock.initialSide === DOCK_SIDES.LEFT) { dock.setStyle('left', 0); twin.setStyle('left', 0); }
            if (dock.initialSide === DOCK_SIDES.RIGHT) { dock.setStyle('right', 0); twin.setStyle('right', 0); }
        } else if (dock.isVertical()) {
            if (dock.initialSide === DOCK_SIDES.TOP) { dock.setStyle('top', 0); twin.setStyle('top', 0); }
            if (dock.initialSide === DOCK_SIDES.BOTTOM) { dock.setStyle('bottom', 0); twin.setStyle('bottom', 0); }
        }
        if (primaryContents) this.contents = function() { return twin; };
        dock.on('resized', () => {
            dock.updateSize();
        });
        dock.updateSize();
        this.buildResizers();
        return dock;
    }
    getTwin() {
        const parent = this.parent;
        if (!parent || !parent.isElement || !parent.hasClass('suey-docker')) return undefined;
        const twin = parent.children.find(child => child !== this && child.hasClass('suey-docker'));
        return twin;
    }
    removeDock() {
        if (this.isPrimary()) return console.warn('Docker.removeDock(): Cannot remove the primary dock');
        const parent = this.parent;
        if (!parent || !parent.isElement || !parent.hasClass('suey-docker')) {
            return console.warn('Docker.removeDock(): Dock does not have a valid parent');
        }
        const twin = this.getTwin();
        if (!twin) {
            return console.warn('Docker.removeDock(): Could not find the twin Docker');
        }
        const children = [];
        for (const child of twin.children) {
            if (child.hasClass('suey-tabbed') ||
                child.hasClass('suey-docker') ||
                child.hasClass('suey-flex-spacer')) {
                children.push(child);
                if (child.hasClass('suey-flex-spacer')) child.removeClass('suey-hidden');
            }
        }
        const wasCollapsed = twin.hasClass('suey-collapsed');
        const primary = this.getPrimary();
        parent.addToSelf(...children);
        parent.remove(this, twin);
        parent.contents = function() { return parent; };
        if (primary.contents() === twin || primary.contents() === this) {
            primary.contents = function() { return parent; };
        }
        parent.hideDockLocations();
        parent.traverse((child) => {
            if (child.hasClass('suey-tabbed') && child.parent.hasClass('suey-docker')) {
                child.setStyle('height', child.parent.limitSize() ? 'auto' : '100%');
            }
            child.dom.dispatchEvent(new Event('resized'));
        });
        parent.buildResizers();
        if (wasCollapsed) parent.collapseTabs();
    }
    enableTabs(flexBefore = false) {
        if (this.isPrimary()) return console.warn('Docker.enableTabs(): Cannot enable tabs on the primary dock');
        let tabbed = Dom.childWithClass(this.contents(), 'suey-tabbed', false );
        if (tabbed) return tabbed;
        tabbed = new Tabbed({ tabSide: this.initialSide, opposite: true, closeButton: true });
        tabbed.setStyle('width', '100%');
        tabbed.setStyle('height', this.limitSize() ? 'auto' : '100%');
        tabbed.on('tabs-changed', () => {
            if (tabbed.tabCount() === 0 && tabbed.parent.hasClass('suey-docker')) {
                tabbed.parent.removeDock();
            }
        });
        if (flexBefore) this.add(new FlexSpacer());
        this.add(tabbed);
        this.buildResizers();
        return tabbed;
    }
    collapseTabs() {
        Css.setVariable('--tab-timing', '0');
        if (!this.isPrimary()) {
            this.addClass('suey-collapsed');
            this.dom.dispatchEvent(new Event('toggle', { bubbles: false }));
        }
        let collpaseDock = this;
        this.traverseAncestors((parent) => {
            if (!parent.hasClass('suey-docker')) return;
            let childrenCollapsed = true;
            for (const child of parent.children) {
                if (child.hasClass('suey-docker')) {
                    childrenCollapsed = childrenCollapsed && child.hasClass('suey-collapsed');
                }
            }
            if (childrenCollapsed) collpaseDock = parent;
        });
        collpaseDock.traverse((child) => {
            if (child.hasClass('suey-docker') && child.children.length > 0) {
                child.addClass('suey-collapsed');
                child.dom.dispatchEvent(new Event('toggle', { bubbles: false }));
                if (child.expandSize == null) {
                    if (child.initialSide === 'left' || child.initialSide === 'right') {
                        child.expandSize = child.dom.style.width;
                        child.expandSide = 'width';
                    } else if (child.initialSide === 'top' || child.initialSide === 'bottom') {
                        child.expandSize = child.dom.style.height;
                        child.expandSide = 'height';
                    }
                    child.setStyle(child.expandSide, '0');
                    child.minimumSize = 0;
                    child.dom.dispatchEvent(new Event('resized'));
                }
            }
        }, !this.isPrimary() );
        setTimeout(() => Css.setVariable('--tab-timing', '200ms'), 50);
    }
    expandTabs() {
        Css.setVariable('--tab-timing', '0');
        function removeCollapsed(dock) {
            if (dock && dock.hasClass('suey-docker')) {
                dock.removeClass('suey-collapsed');
                dock.dom.dispatchEvent(new Event('toggle', { bubbles: false }));
                dock.minimumSize = MINIMUM_NORMAL;
                if (dock.expandSide !== '' && !dock.isPrimary()) {
                    dock.setStyle(dock.expandSide, dock.expandSize);
                }
                dock.expandSize = null;
                dock.expandSide = '';
            }
        }
        if (this.isPrimary()) {
            this.traverse((child) => removeCollapsed(child), false );
        } else {
            this.traverseAncestors((parent) => removeCollapsed(parent), true );
        }
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => Css.setVariable('--tab-timing', '200ms'), 50);
    }
    updateSize(width, height) {
        if (width != null) this.setStyle('width', `${width}px`);
        if (height != null) this.setStyle('height', `${height}px`);
        if (!this.parent) return;
        const twin = this.getTwin();
        if (!twin) return;
        let maxSize = Infinity;
        if (twin.dom.children.length > 0) {
            const computed = getComputedStyle(twin.dom);
            if (this.isVertical()) maxSize = this.parent.getWidth() - parseFloat(computed.minWidth);
            if (this.isHorizontal()) maxSize = this.parent.getHeight() - parseFloat(computed.minHeight);
        }
        if (this.isVertical()) {
            let newSize = Math.max(this.getWidth(), this.minimumSize);
            if (Number.isFinite(maxSize)) newSize = Math.min(newSize, maxSize);
            this.setStyle('width', `${newSize}px`);
        }
        if (this.isHorizontal()) {
            let newSize = Math.max(this.getHeight(), this.minimumSize);
            if (Number.isFinite(maxSize)) newSize = Math.min(newSize, maxSize);
            this.setStyle('height', `${newSize}px`);
        }
        if (this.isVertical()) twin.setStyle('width', `${this.parent.getWidth() - this.getWidth()}px`);
        if (this.isHorizontal()) twin.setStyle('height', `${this.parent.getHeight() - this.getHeight()}px`);
        for (const child of this.children) child.dom.dispatchEvent(new Event('resized'));
        for (const child of twin.children) child.dom.dispatchEvent(new Event('resized'));
        if (width != null || height != null) this.dom.dispatchEvent(new Event('resized'));
    }
    buildResizers() {
        this.traverse((docker) => {
            const tabbedElements = docker.children.filter(child => child.hasClass('suey-tabbed'));
            for (const tabbed of tabbedElements) {
                const resizers = tabbed.children.filter(child => child.hasClass('suey-resizer'));
                tabbed.remove(...resizers);
                function createResizer(resizerClass, dock) {
                    const resizer = new Div().addClass('suey-resizer', resizerClass);
                    Css.setVariable('--resize-size', '1em', resizer);
                    Css.setVariable('--offset', '0em', resizer);
                    let downX, downY, lastX, lastY, isDown = false;
                    const rect = {};
                    function resizePointerDown(event) {
                        if (event.button !== 0) return;
                        event.stopPropagation();
                        event.preventDefault();
                        resizer.dom.setPointerCapture(event.pointerId);
                        isDown = true;
                        downX = event.pageX;
                        downY = event.pageY;
                        lastX = event.pageX;
                        lastY = event.pageY;
                        document.addEventListener('pointerup', resizePointerUp);
                        document.dispatchEvent(new Event('closemenu'));
                        rect.width = dock.getWidth();
                        rect.height = dock.getHeight();
                    }
                    function resizePointerMove(event) {
                        if (!isDown) return;
                        event.stopPropagation();
                        event.preventDefault();
                        if (event.isTrusted ) {
                            lastX = event.pageX;
                            lastY = event.pageY;
                        }
                        const diffX = lastX - downX;
                        const diffY = lastY - downY;
                        if (!dock.parent || !dock.parent.isElement) return;
                        let newWidth = null;
                        let newHeight = null;
                        if (resizer && resizer.hasClassWithString('left')) newWidth = rect.width - diffX;
                        if (resizer && resizer.hasClassWithString('right')) newWidth = rect.width + diffX;
                        if (resizer && resizer.hasClassWithString('top')) newHeight = rect.height - diffY;
                        if (resizer && resizer.hasClassWithString('bottom')) newHeight = rect.height + diffY;
                        dock.updateSize(newWidth, newHeight);
                    }
                    function resizePointerUp(event) {
                        event.stopPropagation();
                        event.preventDefault();
                        resizer.dom.releasePointerCapture(event.pointerId);
                        isDown = false;
                        document.removeEventListener('pointerup', resizePointerUp);
                    }
                    resizer.on('pointerdown', resizePointerDown);
                    resizer.on('pointermove', resizePointerMove);
                    return resizer;
                }
                const sizers = [ RESIZERS.LEFT, RESIZERS.RIGHT, RESIZERS.TOP ];
                if (tabbed.dom.style.height !== 'auto') sizers.push(RESIZERS.BOTTOM);
                const myRect = docker.dom.getBoundingClientRect();
                let parent = docker.parent;
                while (sizers.length > 0 && parent && parent.hasClass('suey-docker')) {
                    for (const child of parent.children) {
                        if (child === docker) continue;
                        if (!child.hasClass('suey-docker')) continue;
                        function addResizer(side) {
                            const twin = child.getTwin();
                            if (twin) {
                                const newResizer = createResizer(`suey-resizer-${side}`, twin);
                                tabbed.addToSelf(newResizer);
                                function listenToggle() {
                                    newResizer.setStyle('display', child.hasClass('suey-collapsed') ? 'none' : '');
                                }
                                child.dom.addEventListener('toggle', listenToggle);
                                child.dom.addEventListener('destroy', () => child.dom.removeEventListener('toggle', listenToggle), { once: true });
                                newResizer.dom.addEventListener('destroy', () => child.dom.removeEventListener('toggle', listenToggle), { once: true });
                            }
                            sizers.splice(sizers.indexOf(side), 1);
                        }
                        const childRect = child.dom.getBoundingClientRect();
                        if (sizers.includes(RESIZERS.LEFT) && childRect.right <= myRect.left) addResizer(RESIZERS.LEFT);
                        if (sizers.includes(RESIZERS.RIGHT) && childRect.left >= myRect.right) addResizer(RESIZERS.RIGHT);
                        if (sizers.includes(RESIZERS.TOP) && childRect.bottom <= myRect.top) addResizer(RESIZERS.TOP);
                        if (sizers.includes(RESIZERS.BOTTOM) && childRect.top >= myRect.bottom) addResizer(RESIZERS.BOTTOM);
                    }
                    parent = parent.parent;
                }
            }
        }, true );
    }
    hideDockLocations() {
        this.removeClass('suey-dock-self');
        if (this.dockLocations) {
            this.remove(this.dockLocations);
            this.dockLocations = undefined;
        }
    }
    showDockLocations(edgesOnly = false) {
        if (!this.dockLocations) {
            const dockLocations = new Div().addClass('suey-dock-locations');
            if (this.initialSide === 'left' || this.initialSide === 'right') {
                if (this.getHeight() > 160) {
                    const topDock = new Div().addClass('suey-dock-location', 'suey-dock-split-top');
                    const bottomDock = new Div().addClass('suey-dock-location', 'suey-dock-split-bottom');
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle', 'suey-dock-middle-horizontal');
                    dockLocations.add(topDock, bottomDock, middleDock);
                } else {
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle', 'suey-dock-middle-horizontal');
                    middleDock.setStyle('top', '0%', 'height', '100%');
                    dockLocations.add(middleDock);
                }
            } else if (this.initialSide === 'top' || this.initialSide === 'bottom') {
                if (this.getWidth() > 200) {
                    const leftDock = new Div().addClass('suey-dock-location', 'suey-dock-split-left');
                    const rightDock = new Div().addClass('suey-dock-location', 'suey-dock-split-right');
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle', 'suey-dock-middle-vertical');
                    dockLocations.add(leftDock, rightDock, middleDock);
                } else {
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle', 'suey-dock-middle-vertical');
                    middleDock.setStyle('left', '0%', 'width', '100%');
                    dockLocations.add(middleDock);
                }
            } else  {
                const leftDock = new Div().addClass('suey-dock-location', 'suey-dock-left');
                const rightDock = new Div().addClass('suey-dock-location', 'suey-dock-right');
                const topDock = new Div().addClass('suey-dock-location', 'suey-dock-top');
                const bottomDock = new Div().addClass('suey-dock-location', 'suey-dock-bottom');
                if (edgesOnly) {
                    const edgeSize = '2em';
                    leftDock.setStyle('width', edgeSize);
                    rightDock.setStyle('width', edgeSize);
                    topDock.setStyle('height', edgeSize);
                    bottomDock.setStyle('height', edgeSize);
                    dockLocations.add(leftDock, rightDock, topDock, bottomDock);
                } else {
                    if (this.getMainWindow()) {
                        topDock.setStyle('left', '20%', 'width', '60%');
                        bottomDock.setStyle('left', '20%', 'width', '60%');
                        const centerDock = new Div().addClass('suey-dock-location', 'suey-dock-center');
                        const imageBox = new ShadowBox(IMAGE_ADD).evenShadow();
                        imageBox.firstImage()?.setStyle('filter', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.COMPLEMENT)));
                        imageBox.setStyle('width', '20%', 'height', '20%');
                        centerDock.add(imageBox);
                        dockLocations.add(leftDock, rightDock, topDock, bottomDock, centerDock);
                    } else {
                        topDock.setStyle('left', '20%', 'width', '60%', 'height', '50%');
                        bottomDock.setStyle('left', '20%', 'width', '60%', 'height', '50%');
                        dockLocations.add(leftDock, rightDock, topDock, bottomDock);
                    }
                }
            }
            this.addToSelf(dockLocations);
            this.dockLocations = dockLocations;
        }
        this.removeClass('suey-dock-self');
        for (const child of this.dockLocations.children) {
            child.removeClass('suey-dock-drop');
            child.removeClass('suey-dock-self');
        }
    }
}

const MIN_W$2 = 300;
const MIN_H$2 = 150;
class Window extends AbstractDock {
    #lastKnownRect;
    constructor({
        style = PANEL_STYLES$1.FANCY,
        resizers = 'all',
        title = '',
        draggable = true,
        maxButton = true,
        closeButton = true,
        buttonSides = CLOSE_SIDES.LEFT,
        width = '60%',
        height = '60%',
        initialWidth = undefined,
        initialHeight = undefined,
        startCentered = true,
        left = 0,
        top = 0,
    } = {}) {
        super({ style });
        const self = this;
        this.addClass('suey-window', 'suey-hidden');
        this.allowFocus();
        this.isWindow = true;
        this.maximized = false;
        this.initialWidth = (initialWidth != null) ? initialWidth : width;
        this.initialHeight = (initialHeight != null) ? initialHeight : height;
        const titleBar = new TitleBar(this, title, draggable, 1.3 );
        this.addToSelf(titleBar);
        this.setTitle = function(newTitle = '') {
            titleBar.setTitle(newTitle);
        };
        if (closeButton) Interaction.addCloseButton(this, buttonSides, 1.7 );
        if (maxButton) Interaction.addMaxButton(this, buttonSides, 1.7 );
        this.buttons = new Div().setClass('suey-tab-buttons', 'suey-window-side');
        this.floaters = new Div().setClass('suey-tab-floaters');
        this.add(this.floaters);
        titleBar.add(this.buttons);
        function activeWindow() {
            if (document.activeElement === self.dom || self.dom.contains(document.activeElement) === false) {
                const floater = self.findFloater(self.selectedID);
                if (floater) floater.dom.dispatchEvent(new Event('activate-window'));
            }
            if (self.hasClass('suey-active-window')) return;
            self.addClass('suey-active-window');
            if (self.parent) {
                const windows = Dom.childrenWithClass(self.parent, 'suey-window', true, false );
                windows.forEach((element) => {
                    if (element && element.isElement) element = element.dom;
                    if (element !== self.dom) element.classList.remove('suey-active-window');
                });
                const topZ = windows.length + 200;
                Css.setVariable('--window-z-index', `${topZ}`, self);
                windows.forEach((element) => {
                    if (element === self.dom) return;
                    let currentZ = Css.getVariable('--window-z-index', element);
                    if (currentZ >= topZ) currentZ = topZ;
                    currentZ--;
                    if (currentZ < 200) currentZ = 200;
                    Css.setVariable('--window-z-index', `${currentZ}`, element);
                });
            }
        }
        this.on('focusin', () => activeWindow());
        this.on('focusout', () => self.removeClass('suey-active-window'));
        let rect = {}, parentRect = {};
        function resizerDown() {
            self.focus();
            rect = self.dom.getBoundingClientRect();
            parentRect = self.parentRect();
            self.addClass('suey-window-moving');
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('left')) {
                const newLeft = Math.max(0, Math.min(rect.right - MIN_W$2, (rect.left - parentRect.left) + diffX));
                const newWidth = (rect.right - parentRect.left) - newLeft;
                self.setStyle('left', `${newLeft}px`);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('top')) {
                const newTop = Math.max(0, Math.min(rect.bottom - MIN_H$2, (rect.top - parentRect.top) + diffY));
                const newHeight = (rect.bottom - parentRect.top) - newTop;
                self.setStyle('top', `${newTop}px`);
                self.setStyle('height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('right')) {
                const newWidth = Math.min(Math.max(MIN_W$2, rect.width + diffX), parentRect.width - (rect.left - parentRect.left));
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('bottom')) {
                const newHeight = Math.min(Math.max(MIN_H$2, rect.height + diffY), parentRect.height - (rect.top - parentRect.top));
                self.setStyle('height', `${newHeight}px`);
            }
            self.removeClass('suey-maximized');
            self.maximized = false;
            self.dom.dispatchEvent(new Event('resizer'));
        }
        function resizerUp() {
            keepInWindow();
            self.removeClass('suey-window-moving');
        }
        Interaction.makeResizeable(this, resizerDown, resizerMove, resizerUp);
        this.addResizers(resizers);
        this.setStyle(
            'left', Css.parseSize(left),
            'top', Css.parseSize(top),
            'width', Css.parseSize(width),
            'height', Css.parseSize(height),
        );
        function keepInWindow() {
            const computed = getComputedStyle(self.dom);
            const rect = {
                left: parseFloat(computed.left),
                top: parseFloat(computed.top),
                width: parseFloat(computed.width),
                height: parseFloat(computed.height),
            };
            const titleHeight = parseInt(Css.toPx('4em'));
            let newLeft = Math.min(self.parentRect().width - (rect.width / 2), rect.left);
            let newTop = Math.min(self.parentRect().height - titleHeight, rect.top);
            newLeft = Math.max(- (rect.width / 2), newLeft);
            newTop = Math.max(0, newTop);
            self.setStyle('top', `${newTop}px`);
            self.setStyle('left', `${newLeft}px`);
        }
        window.addEventListener('resize', keepInWindow);
        this.on('destroy', () => {
            window.removeEventListener('resize', keepInWindow);
        });
        this.on('displayed', () => {
            if (startCentered) self.center();
            keepInWindow();
        });
    }
    destroy() {
        this.removeFloaters();
        super.destroy();
    }
    setStyle(...styles) {
        super.setStyle(...styles);
        const self = this;
        clearTimeout(this._styleTimeout);
        this._styleTimeout = setTimeout(() => {
            const rect = self.dom.getBoundingClientRect();
            if (rect.top < parseFloat(Css.toPx('0.7em'))) {
                self.addClass('suey-shrink-tab-button');
            } else {
                self.removeClass('suey-shrink-tab-button');
            }
        }, 10);
    }
    center() {
        const parentRect = this.parentRect();
        const side = (parentRect.width - this.getWidth()) / 2;
        const top = (parentRect.height - this.getHeight()) / 2;
        this.setStyle('left', `${side}px`, 'top', `${top}px`);
    }
    parentRect() {
        if (this.parent && this.parent.isElement) return this.parent.dom.getBoundingClientRect();
        return document.body.getBoundingClientRect();
    }
    setInitialSize() {
        this.setStyle('width', Css.parseSize(this.initialWidth));
        this.setStyle('height', Css.parseSize(this.initialHeight));
        this.dom.dispatchEvent(new Event('resizer'));
    }
    showWindow() {
        this.display();
        this.focus();
    }
    toggleMinMax() {
        this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
        const parentRect = this.parentRect();
        if (!this.maximized) {
            this.addClass('suey-maximized');
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.setStyle('left', `0`);
            this.setStyle('top', `0`);
            this.setStyle('width', `${parentRect.width}px`);
            this.setStyle('height', `${parentRect.height}px`);
            this.maximized = true;
        } else {
            this.removeClass('suey-maximized');
            const newLeft = Math.max(0, Math.min(parentRect.width - this.#lastKnownRect.width, this.#lastKnownRect.left));
            const newTop = Math.max(0, Math.min(parentRect.height - this.#lastKnownRect.height, this.#lastKnownRect.top));
            this.setStyle('left', `${newLeft}px`);
            this.setStyle('top', `${newTop}px`);
            this.setStyle('width', `${this.#lastKnownRect.width}px`);
            this.setStyle('height', `${this.#lastKnownRect.height}px`);
            this.maximized = false;
        }
        this.dom.dispatchEvent(new Event('resizer'));
    }
    dockLeft() {
        if (!this.hasClass('suey-docked-left')) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
            this.addClass('suey-docked-left');
        }
        this.setStyle('left', `0`);
        this.setStyle('top', `0`);
        this.setStyle('width', `50%`);
        this.setStyle('height', `100%`);
    }
    dockRight() {
        if (!this.hasClass('suey-docked-right')) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
            this.addClass('suey-docked-right');
        }
        this.setStyle('left', `50%`);
        this.setStyle('top', `0`);
        this.setStyle('width', `50%`);
        this.setStyle('height', `100%`);
    }
    dockTop() {
        if (!this.hasClass('suey-docked-top')) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
            this.addClass('suey-docked-top');
        }
        this.setStyle('left', `0`);
        this.setStyle('top', `0`);
        this.setStyle('width', `100%`);
        this.setStyle('height', `50%`);
    }
    dockBottom() {
        if (!this.hasClass('suey-docked-bottom')) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
            this.addClass('suey-docked-bottom');
        }
        this.setStyle('left', `0`);
        this.setStyle('top', `50%`);
        this.setStyle('width', `100%`);
        this.setStyle('height', `50%`);
    }
    undock() {
        if (this.hasClass('suey-docked-right') ||
            this.hasClass('suey-docked-left') ||
            this.hasClass('suey-docked-top') ||
            this.hasClass('suey-docked-bottom')) {
            const currentRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
            if (this.#lastKnownRect) {
                const newLeft = currentRect.left + ((currentRect.width - this.#lastKnownRect.width) / 2);
                this.setStyle('left', `${newLeft}px`);
                this.setStyle('width', `${this.#lastKnownRect.width}px`);
                this.setStyle('height', `${this.#lastKnownRect.height}px`);
            }
        }
    }
    addFloater(...floaters) {
        if (!floaters || !Array.isArray(floaters)) return this;
        let tabsAdded = 0;
        for (const floater of floaters) {
            if (!floater || !floater.hasClass('suey-floater')) continue;
            floater.dock = this;
            this.floaters.add(floater);
            this.buttons.add(floater.button);
            tabsAdded++;
        }
        if (tabsAdded > 0) {
            if (this.tabCount() > 0) this.setStyle('display', '');
            if (this.selectedID === '') this.selectFirst();
            this.dom.dispatchEvent(new Event('tabs-changed', { bubbles: true }));
        }
        return this;
    }
    findFloater(tabID = '') {
        return this.floaters.children.find((item) => (item.id === tabID));
    }
    removeFloater(floater, destroy = false) {
        if (typeof floater === 'string') floater = this.findFloater(floater);
        if (!floater) return this;
        if (destroy) floater.destroy();
        const index = this.floaters.children.indexOf(floater);
        if (!floater || index === -1) return this;
        const button = this.buttons.children[index];
        const panel = this.floaters.children[index];
        if (button) button.removeClass('suey-selected');
        if (panel) panel.addClass('suey-hidden');
        this.buttons.detach(button);
        this.floaters.detach(panel);
        if (panel.id === this.selectedID) {
            if (index > 0) this.selectFloater(this.floaters.children[index - 1].id);
            else if (this.floaters.children.length > 0) this.selectFirst();
        }
        this.dom.dispatchEvent(new Event('tabs-changed', { bubbles: true }));
        if (this.tabCount() === 0) this.removeSelf();
        return this;
    }
    removeFloaters() {
        const children = [ ...this.floaters.children ];
        for (const child of children) {
            this.removeFloater(child, true );
        }
        return this;
    }
    selectFirst() {
        if (this.floaters.children.length > 0) this.selectFloater(this.floaters.children[0].id);
        return this;
    }
    selectFloater(selectID, wasClicked = false) {
        if (selectID && selectID.isElement) selectID = selectID.id;
        if (typeof selectID !== 'string') return this;
        if (this.selectedID === selectID) return this;
        const panel = this.findFloater(selectID);
        if (panel && panel.button) {
            this.floaters.children.forEach((element) => element.hide());
            this.buttons.children.forEach((element) => element.removeClass('suey-selected'));
            panel.display();
            panel.button.addClass('suey-selected');
            this.selectedID = selectID;
            this.setTitle(selectID);
            const tabSelected = new Event('tab-selected', { bubbles: true });
            tabSelected.value = selectID;
            this.dom.dispatchEvent(tabSelected);
            this.setStyle('display', '');
        }
        return this;
    }
    tabCount() {
        return this.floaters.children.length;
    }
}
class TitleBar extends Div {
    constructor(window, title = '', draggable = false, scale = 1.3) {
        if (!window || !window.isElement) return console.warn(`TitleBar: Missing window element`);
        super();
        this.setClass('suey-title-bar', 'suey-panel-button');
        this.setStyle('height', `${scale}em`, 'width', `${scale * 6}em`);
        this.setStyle('top', `${0.8 - ((scale + 0.28571 + 0.071) / 2)}em`);
        if (title && typeof title === 'string' && title != '') this.setTitle(title);
        function titleDown() {
            if (window) {
                if (typeof window.focus === 'function') window.focus();
                window.addClass('suey-window-moving');
            }
        }
        function titleUp() {
            if (window) window.removeClass('suey-dragging-window');
        }
        function titleDoubleClick() {
            if (window && window.isElement) {
                if (typeof window.setInitialSize === 'function') window.setInitialSize();
                if (typeof window.center === 'function') window.center();
                window.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
                window.removeClass('suey-maximized');
                window.maximized = false;
                window.dom.dispatchEvent(new Event('resize'));
            }
        }
        if (draggable) Interaction.makeDraggable(this, window, true , titleDown, null, titleUp);
        this.on('dblclick', titleDoubleClick);
    }
    setTitle(title = '') {
        title = Strings.capitalize(title);
        const titleTextElement = this.dom.querySelector('.suey-window-title-text');
        if (titleTextElement) {
            titleTextElement.textContent = title;
        } else {
            const titleText = new Span(title);
            titleText.addClass('suey-window-title-text');
            titleText.setStyle('user-select', 'none');
            this.add(titleText);
        }
        let width = parseFloat(Css.getTextWidth(title, Css.getFontCssFromElement(this.dom)));
        width += parseFloat(Css.toPx('4em'));
        Css.setVariable('--title-width', `${width}px`, this);
        this.setStyle('width', Css.toEm(`${width}px`));
    }
}

class MainWindow extends Panel {
    constructor() {
        super({ style: PANEL_STYLES$1.NONE });
        this.addClass('suey-main-window');
        this.isMainWindow = true;
        const docker = new Docker();
        this.add(docker);
        this.docker = docker;
        const windows = new Div().addClass('suey-window-holder');
        windows.getPrimary = function() { return docker; };
        this.add(windows);
        this.windows = windows;
    }
    getPrimary() {
        return this.docker;
    }
    clearDocks() {
        this.docker.clearDocks();
    }
    addWindow(options) {
        let window = undefined;
        if (options && options.isElement && options.hasClass('suey-window')) {
            window = options;
        } else {
            window = new Window(options);
        }
        this.windows.addToSelf(window);
        window.display();
        return window;
    }
    clearWindows() {
        this.windows.clearContents();
    }
    clearFloaters() {
        this.clearDocks();
        this.clearWindows();
    }
    floaters() {
        return Dom.childrenWithClass(this, 'suey-floater', true , false );
    }
    getFloaterByID(id) {
        if (id == undefined || id === '' || typeof id !== 'string') return undefined;
        return this.floaters().find((floater) => (floater.id === id));
    }
}

const _clr$1 = new Iris();
class Question extends Panel {
    static buttonByValue(value) {
        for (const key in BUTTON_TYPES) {
            if (BUTTON_TYPES[key].value === value) return key;
        }
        return 'unknown';
    }
    constructor({
        icon = QUESTION_ICONS.INFO,
        color,
        text = '',
        buttons = [ BUTTON_TYPES.OKAY ],
        defaultButton = BUTTON_TYPES.OKAY,
    } = {}) {
        super({ style: PANEL_STYLES$1.FANCY });
        const self = this;
        this.addClass('suey-question');
        this.allowFocus();
        if (arguments.length > 0 && typeof arguments[0] === 'string') {
            text = arguments[0];
        }
        this.blackout = new Div().addClass('suey-screen-blackout');
        this.setContentsStyle(
            'flex-direction', 'row',
            'background-color', 'rgba(var(--background-light), 1.0)',
        );
        const divLeft = new Div().addClass('suey-question-left');
        const divRight = new Div().addClass('suey-question-right');
        this.add(divLeft, divRight);
        const divTop = new Div().addClass('suey-question-top');
        const divBottom = new Div().addClass('suey-question-bottom');
        divRight.add(divTop, divBottom);
        if (color == null) {
            if (icon === QUESTION_ICONS.INFO) color = 'icon';
            if (icon === QUESTION_ICONS.QUESTION) color = 'triadic2';
            if (icon === QUESTION_ICONS.WARNING) color = 'complement';
            if (icon === QUESTION_ICONS.ERROR) color = 'triadic1';
        }
        if (Object.values(TRAIT).includes(color)) _clr$1.set(ColorScheme.color(color));
        else _clr$1.set(color);
        const fancyBorder = Dom.childWithClass(this, 'suey-panel-fancy-border');
        if (fancyBorder) fancyBorder.setStyle('border-color', _clr$1.cssString());
        if (icon === QUESTION_ICONS.INFO) icon = IMAGE_INFO;
        else if (icon === QUESTION_ICONS.QUESTION) icon = IMAGE_QUESTION;
        else if (icon === QUESTION_ICONS.WARNING) icon = IMAGE_WARNING;
        else if (icon === QUESTION_ICONS.ERROR) icon = IMAGE_ERROR;
        if (icon) divLeft.add(new ShadowBox(icon).setColor(color));
        divTop.add(new Span(text).setStyle('margin', 'auto 0'));
        buttons = Array.isArray(buttons) ? buttons : [];
        if (buttons.length === 0) buttons.push(BUTTON_TYPES.OKAY);
        divBottom.add(new FlexSpacer());
        let focusedButton = null, lastButton = null;
        for (const buttonInfo of buttons) {
            const value = buttonInfo.value ?? 0;
            const button = new Button(buttonInfo.text ?? '???');
            button.setColor(color);
            button.setStyle('margin', '0.1em');
            button.allowFocus();
            button.onPress(() => { self.answered(value); });
            button.dom.buttonValue = value;
            divBottom.add(button);
            if (defaultButton && defaultButton.value === value) focusedButton = button;
            lastButton = button;
        }
        if (!focusedButton) focusedButton = lastButton;
        this.focusedButton = focusedButton;
    }
    destroy() {
        this.blackout.destroy();
        super.destroy();
    }
    alert(callback = (value) => {}) {
        this.callback = callback;
        document.body.appendChild(this.blackout.dom);
        document.body.appendChild(this.dom);
        this.display();
        this.focus();
        this.focusedButton.focus();
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
    answered(value) {
        document.body.removeChild(this.dom);
        document.body.removeChild(this.blackout.dom);
        if (this.callback && typeof this.callback === 'function') {
            this.callback(value);
        }
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
        this.callback = null;
        this.removeSelf();
    }
    handleKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            const buttons = Array.from(this.contents().dom.querySelectorAll('button'));
            if (buttons.length > 0) {
                const currentIndex = buttons.findIndex(button => button === document.activeElement);
                const nextIndex = (currentIndex + 1) % buttons.length;
                buttons[nextIndex].focus();
            }
        }
        if (event.key === 'Escape') {
            event.preventDefault();
            const buttons = Array.from(this.contents().dom.querySelectorAll('button'));
            if (buttons.length > 0) {
                for (const button of buttons) if (button.buttonValue === BUTTON_TYPES.CANCEL.value) return this.answered(BUTTON_TYPES.CANCEL.value);
                for (const button of buttons) if (button.buttonValue === BUTTON_TYPES.NO.value) return this.answered(BUTTON_TYPES.NO.value);
                for (const button of buttons) if (button.buttonValue === BUTTON_TYPES.OKAY.value) return this.answered(BUTTON_TYPES.OKAY.value);
            }
        }
    }
}

const _changeEvent = new Event('change', { 'bubbles': true, 'cancelable': true });
class SliderBox extends Div {
    constructor(number, min = -Infinity, max = Infinity, step = 'any', precision = 2, unit = '') {
        super();
        const self = this;
        this.setClass('suey-slider-box');
        this.value = 0;
        this.min = -Infinity;
        this.max = Infinity;
        this.precision = 1;
        this.step = 0.1;
        this.unit = '';
        const slider = new Slider().setStyle('flex', '1 1 auto');
        const spacer = new Span().addClass('suey-property-space');
        const numberBox = new NumberBox().addClass('suey-property-tiny-row');
        this.add(slider, spacer, numberBox);
        this.slider = slider;
        this.numberBox = numberBox;
        this.checkForMinMax = function() {
            if (Number.isFinite(Number(slider.slider.dom.min)) && Number.isFinite(Number(slider.slider.dom.max))) {
                numberBox.addClass('suey-property-tiny-row');
                slider.setStyle('display', '');
                numberBox.setStyle('marginLeft', '0.14286em');
                spacer.addClass('suey-property-space');
            } else {
                numberBox.removeClass('suey-property-tiny-row');
                slider.setStyle('display', 'none');
                numberBox.setStyle('marginLeft', '0');
                spacer.removeClass('suey-property-space');
            }
        };
        slider.on('input', () => {
            self.value = slider.getValue();
            numberBox.setValue(slider.getValue());
            self.dom.dispatchEvent(_changeEvent);
        });
        slider.on('change', () => {
            self.value = slider.getValue();
            numberBox.setValue(slider.getValue());
            self.dom.dispatchEvent(_changeEvent);
        });
        numberBox.on('change', () => {
            self.value = numberBox.getValue();
            slider.setValue(numberBox.getValue());
            self.dom.dispatchEvent(_changeEvent);
        });
        slider.on('pointerdown', (event) => event.stopPropagation());
        slider.on('wheel', (event) => event.stopPropagation());
        numberBox.on('wheel', (event) => event.stopPropagation());
        this.setRange(min, max);
        this.setPrecision(precision);
        this.setStep(step);
        this.setUnit(unit);
        this.setValue(number);
    }
    getValue() {
        return parseFloat(this.value);
    }
    setValue(value) {
        this.slider.setValue(value);
        this.numberBox.setValue(value);
        return this;
    }
    setPrecision(precision) {
        this.precision = parseFloat(precision);
        this.slider.setPrecision(precision);
        this.numberBox.setPrecision(precision);
        return this;
    }
    setStep(step = 'any') {
        this.step = step;
        this.slider.setStep(step);
        const min = this.numberBox.min;
        const max = this.numberBox.max;
        if (step === 'any') step = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
        this.numberBox.setStep(step);
        return this;
    }
    setMin(min) {
        this.min = parseFloat(min);
        this.slider.setMin(min);
        this.numberBox.setMin(min);
        this.checkForMinMax();
        return this;
    }
    setMax(max) {
        this.max = parseFloat(max);
        this.slider.setMax(max);
        this.numberBox.setMax(max);
        const digits = Strings.countDigits(parseInt(max)) + ((this.precision > 0) ? this.precision + 0.5 : 0);
        this.numberBox.dom.style.setProperty('--min-width', `${digits + 1.5}ch`);
        this.checkForMinMax();
        return this;
    }
    setRange(min, max) {
        this.setMin(min);
        this.setMax(max);
        return this;
    }
    setUnit(unit = '') {
        this.unit = unit;
        if (unit && unit !== '') this.numberBox.setUnit(unit);
        return this;
    }
}

class TextArea extends Element {
    constructor() {
        super(document.createElement('textarea'));
        const self = this;
        this.setClass('suey-text-area');
        this.dom.spellcheck = false;
        this.setAttribute('autocomplete', 'off');
        function textKeyDown(event) {
            event.stopPropagation();
            if (event.key === 'Tab') {
                event.preventDefault();
                const cursor = self.dom.selectionStart;
                self.dom.value = self.dom.value.substring(0, cursor) + '\t' + self.dom.value.substring(cursor);
                self.dom.selectionStart = cursor + 1;
                self.dom.selectionEnd = self.dom.selectionStart;
            }
        }
        this.on('keydown', textKeyDown);
    }
    getValue() {
        if (!this.dom) return null;
        return this.dom.value;
    }
    setValue(value) {
        if (!this.dom) return this;
        this.dom.value = value;
        return this;
    }
}

class AbsoluteBox extends Div {
    constructor() {
        super();
        this.setClass('suey-absolute-box');
    }
}

class AssetBox extends Div {
    constructor(title = '', view = 'icon', isMini = true) {
        super();
        this.setClass('suey-asset-box');
        this.allowFocus();
        if (!title || typeof title !== 'string' || title === '') title = 'No Name';
        this.setAttribute('tooltip', title);
        this.name = title;
        const assetImageHolder = new ShadowBox();
        assetImageHolder.dom.draggable = true;
        if (view == 'icon') {
            if (isMini) {
                this.addClass('suey-asset-box-mini');
                this.addClass('suey-asset-box-selectable');
            }
            this.add(assetImageHolder);
        } else if (view == 'text') {
            if (isMini) {
                this.addClass('suey-asset-box-mini');
                this.addClass('suey-asset-box-combo');
                this.addClass('suey-asset-box-selectable');
            }
            assetImageHolder.setStyle('transform', 'translate(-50%, -65%) scale(0.8)');
            this.add(assetImageHolder);
            const label = new Div(title).setClass('suey-asset-box-label');
            this.add(label);
        } else {
            this.addClass('suey-asset-box-row');
            this.addClass('suey-asset-box-selectable');
            const spanIcon = new Span().setClass('suey-asset-box-icon').add(assetImageHolder);
            const spanText = new Span(title).setClass('suey-asset-box-text');
            this.add(spanIcon, spanText);
            this.assetText = spanText;
        }
        this.contents = function() { return assetImageHolder };
    }
}

class FlexBox extends Element {
    constructor() {
        super(document.createElement('div'));
        this.addClass('suey-flex-box');
    }
}

const _clr = new Iris();
class ToolbarButton extends Button {
    constructor(buttonText = '', position = 'none' ) {
        super(buttonText, true );
        this.setClass('suey-toolbar-button');
        this.setStyle('pointerEvents', 'all');
        switch (position) {
            case 'left': this.addClass('suey-button-left'); break;
            case 'middle': this.addClass('suey-button-middle'); break;
            case 'right': this.addClass('suey-button-right'); break;
        }
        const buttonBackground = new Div().addClass('suey-button-background');
        this.add(buttonBackground);
        this.buttonBackground = buttonBackground;
        const buttonImageHolder = new ShadowBox().setStyle('pointer-events', 'none');
        this.add(buttonImageHolder);
        this.contents = function() { return buttonImageHolder };
        this.on('pointerdown', (event) => { event.stopPropagation(); });
        this.on('pointerup', (event) => { event.stopPropagation(); });
    }
    setColor(color) {
        if (typeof color === 'string' && Object.values(TRAIT).includes(color)) color = `var(--${color})`;
        else color = _clr.set(color).rgbString();
        this.buttonBackground.setStyle('background-image', `linear-gradient(to bottom, rgba(${color}, 0.9), rgba(${color}, 0.65))`);
        return this;
    }
}

class ToolbarSeparator extends Element {
    constructor() {
        super(document.createElement('div'));
        this.setClass('suey-toolbar-separator');
    }
}

class ToolbarSpacer extends Element {
    constructor(width = 1) {
        super(document.createElement('div'));
        this.setClass('suey-toolbar-spacer');
        this.setStyle('width', `calc(var(--button-size) * ${width})`);
    }
}

const MIN_W$1 = 100;
const MIN_H$1 = 100;
const MAP_BUFFER = 100;
const MIN_MAP_SIZE = 1200;
const ANIMATE_INTERVAL = 4;
const ZOOM_MAX = 4;
const ZOOM_MIN = 0.1;
const _color = new Iris();
class Graph extends Panel {
    #scale = 1;
    #offset = { x: 0, y: 0 };
    #previous = { x: 0, y: 0 };
    #drawWidth = 0;
    #drawHeight = 0;
    constructor({
        snapToGrid = true,
        curveType = GRAPH_LINE_TYPES.CURVE,
        gridType = GRAPH_GRID_TYPES.LINES,
    } = {}) {
        super();
        const self = this;
        this.activeItem = undefined;
        this.connectItem = undefined;
        this.activePoint = { x: 0, y: 0 };
        this.curveType = curveType;
        this.gridType = gridType;
        this.snapToGrid = snapToGrid;
        this.input = new Div().setClass('suey-graph-input');
        this.grid = new Div().setClass('suey-graph-grid');
        this.nodes = new Div().setClass('suey-graph-nodes');
        this.lines = new Canvas(2048, 2048).setClass('suey-graph-lines');
        this.bandbox = new Div().setClass('suey-graph-band-box');
        this.minimap = new Div().setClass('suey-mini-map');
        this.add(this.input, this.grid, this.lines, this.nodes, this.bandbox, this.minimap);
        this.mapCanvas = new Canvas(1024, 1024).setClass('suey-mini-map-canvas');
        const mapResizers = new Div().addClass('suey-mini-map-resizers');
        this.minimap.add(this.mapCanvas, mapResizers);
        this.changeGridType(gridType);
        function graphMouseZoom(event) {
            event.preventDefault();
            const delta = (event.deltaY * 0.001);
            self.stopAnimation();
            self.zoomTo(self.#scale - delta, event.clientX, event.clientY);
        };
        this.on('wheel', graphMouseZoom);
        function onWindowResize() {
            self.stopAnimation();
            self.zoomTo();
        }
        window.addEventListener('resize', onWindowResize);
        this.on('destroy', () => {
            window.removeEventListener('resize', onWindowResize);
        });
        let grabbing = false, selecting = false;
        let spaceKey = false;
        function graphKeyDown(event) {
            if (self.isHidden()) return;
            if (event.key === ' ') {
                spaceKey = true;
                self.dom.style.cursor = (grabbing) ? 'grabbing' : 'grab';
                self.input.setStyle('z-index', '100');
            }
        }
        function graphKeyUp(event) {
            if (self.isHidden()) return;
            if (event.key === ' ') {
                spaceKey = false;
                self.dom.style.cursor = 'auto';
                self.input.setStyle('z-index', '-1');
            }
        }
        document.addEventListener('keydown', graphKeyDown);
        document.addEventListener('keyup', graphKeyUp);
        let offset = { x: 0, y: 0 };
        let startPoint = { x: 0, y: 0 };
        function inputPointerDown(event) {
            self.stopAnimation();
            startPoint.x = event.clientX;
            startPoint.y = event.clientY;
            if (event.button === 2 || (event.button === 0 && spaceKey)) {
                grabbing = true;
                self.dom.style.cursor = 'grabbing';
                offset.x = self.#offset.x;
                offset.y = self.#offset.y;
            } else if (event.button === 0) {
                selecting = true;
                const selected = document.querySelectorAll(`.suey-node-selected`);
                selected.forEach(el => el.classList.remove('suey-node-selected'));
                self.bandbox.setStyle('display', 'block');
                updateRubberbandBox(event.clientX, event.clientY);
            }
            if (grabbing || selecting) {
                self.dom.setPointerCapture(event.pointerId);
                document.addEventListener('pointermove', inputPointerMove);
                document.addEventListener('pointerup', inputPointerUp);
            }
        }
        function inputPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            self.dom.releasePointerCapture(event.pointerId);
            if (grabbing) {
                self.dom.style.cursor = (spaceKey) ? 'grab' : 'auto';
                grabbing = false;
            }
            if (selecting) {
                self.dom.dispatchEvent(new Event('selected'));
                self.bandbox.setStyle('display', 'none');
                selecting = false;
            }
            document.removeEventListener('pointermove', inputPointerMove);
            document.removeEventListener('pointerup', inputPointerUp);
        }
        function inputPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            if (grabbing) {
                const diffX = (event.clientX - startPoint.x) * (1 / self.#scale);
                const diffY = (event.clientY - startPoint.y) * (1 / self.#scale);
                self.#offset.x = (offset.x + diffX);
                self.#offset.y = (offset.y + diffY);
                self.zoomTo(null, null, null, false );
            } else if (selecting) {
                updateRubberbandBox(event.clientX, event.clientY);
            }
        }
        function updateRubberbandBox(toX, toY) {
            const inputRect = self.input.dom.getBoundingClientRect();
            const left = Math.min(startPoint.x, toX) - inputRect.left;
            const top = Math.min(startPoint.y, toY) - inputRect.top;
            const width = Math.abs(startPoint.x - toX);
            const height = Math.abs(startPoint.y - toY);
            self.bandbox.setStyle(
                'left', `${left}px`,
                'top', `${top}px`,
                'width', `${width}px`,
                'height', `${height}px`,
            );
            const rect = self.dom.getBoundingClientRect();
            const centerX = rect.left + ((rect.right - rect.left) / 2);
            const centerY = rect.top + ((rect.bottom - rect.top) / 2);
            const percentX = (centerX - left) / centerX;
            const percentY = (centerY - top) / centerY;
            const xMin = (centerX - (((rect.width / self.#scale) / 2) * percentX)) - self.#offset.x;
            const yMin = (centerY - (((rect.height / self.#scale) / 2) * percentY)) - self.#offset.y;
            const xMax = xMin + (width / self.#scale);
            const yMax = yMin + (height / self.#scale);
            function rubberbandIntersect(node) {
                return xMax >= node.left && xMin <= node.right && yMin <= node.bottom && yMax >= node.top;
            }
            const selected = [];
            const nodes = self.getNodes();
            nodes.forEach((node) => { if (rubberbandIntersect(node)) selected.push(node); });
            nodes.forEach((node) => { node.wantsClass('suey-node-selected', selected.includes(node)); });
        }
        this.input.on('pointerdown', inputPointerDown);
        let rect = {};
        function resizerDown() {
            rect = self.minimap.dom.getBoundingClientRect();
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('left')) {
                const newLeft = Math.max(0, Math.min(rect.right - MIN_W$1, rect.left + diffX));
                const newWidth = rect.right - newLeft;
                self.minimap.setStyle('left', `${newLeft}px`);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('top')) {
                const newTop = Math.max(0, Math.min(rect.bottom - MIN_H$1, rect.top + diffY));
                const newHeight = rect.bottom - newTop;
                self.minimap.setStyle('top', `${newTop}px`);
                self.minimap.setStyle('height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('right')) {
                const newWidth = Math.min(Math.max(MIN_W$1, rect.width + diffX), window.innerWidth - rect.left);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('bottom')) {
                const newHeight = Math.min(Math.max(MIN_H$1, rect.height + diffY), window.innerHeight - rect.top);
                self.minimap.setStyle('height', `${newHeight}px`);
            }
            self.drawMiniMap();
            self.drawLines();
        }
        Interaction.makeResizeable(mapResizers, resizerDown, resizerMove).addResizers([ RESIZERS.LEFT, RESIZERS.TOP ]);
        let translating = false;
        function calculateOffset(clientX, clientY) {
            const mapRect = self.minimap.dom.getBoundingClientRect();
            const nodesRect = self.nodes.dom.getBoundingClientRect();
            const percentX = ((mapRect.width / 2) - (clientX - mapRect.left)) / (mapRect.width / 2);
            const percentY = ((mapRect.height / 2) - (clientY - mapRect.top)) / (mapRect.height / 2);
            const bounds = self.nodeBounds(MAP_BUFFER, self.nodes.children, MIN_MAP_SIZE);
            if (!bounds.isFinite) return;
            if (self.#drawWidth > self.#drawHeight) {
                const ratio = (self.#drawWidth / self.#drawHeight);
                const x = bounds.center().x - ((bounds.width() / 2) * percentX);
                const y = bounds.center().y - ((bounds.height() / 2) * ratio * percentY);
                self.#offset.x = ((nodesRect.width / 2) / self.#scale) - x;
                self.#offset.y = ((nodesRect.height / 2) / self.#scale) - y;
            } else {
                const ratio = (self.#drawHeight / self.#drawWidth);
                const x = bounds.center().x - ((bounds.width() / 2) * ratio * percentX);
                const y = bounds.center().y - ((bounds.height() / 2) * percentY);
                self.#offset.x = ((nodesRect.width / 2) / self.#scale) - x;
                self.#offset.y = ((nodesRect.height / 2) / self.#scale) - y;
            }
            self.zoomTo(null, null, null, false );
        }
        function mapPointerDown(event) {
            self.stopAnimation();
            self.minimap.dom.setPointerCapture(event.pointerId);
            self.minimap.setStyle('cursor', 'grabbing');
            calculateOffset(event.clientX, event.clientY);
            translating = true;
        }
        function mapPointerUp(event) {
            self.minimap.dom.releasePointerCapture(event.pointerId);
            self.minimap.setStyle('cursor', 'grab');
            translating = false;
        }
        function mapPointerMove(event) {
            if (!translating) return;
            calculateOffset(event.clientX, event.clientY);
        }
        this.minimap.on('pointerdown', mapPointerDown);
        this.minimap.on('pointerup', mapPointerUp);
        this.minimap.on('pointermove', mapPointerMove);
    }
    getScale() {
        return this.#scale;
    }
    addNode() {
        for (let i = 0, l = arguments.length; i < l; i++) {
            const node = arguments[i];
            if (this.nodes) {
                node.graph = this;
                this.nodes.add(node);
                node.setStyle('zIndex', this.nodes.children.length);
            }
        }
        this.drawMiniMap();
        this.drawLines();
    }
    getNodes() {
        return this.nodes.children;
    }
    removeNode(nodeToRemove) {
        if (!nodeToRemove || !nodeToRemove.isElement) return;
        const currentZ = nodeToRemove.zIndex;
        const lengthBefore = this.nodes.children.length;
        this.nodes.remove(nodeToRemove);
        const lengthAfter = this.nodes.children.length;
        if (lengthBefore === lengthAfter) return;
        this.nodes.children.forEach((node) => {
            if (node.zIndex > currentZ) node.setStyle('zIndex', `${node.zIndex - 1}`);
        });
        this.drawMiniMap();
        this.drawLines();
    }
    nodeBounds(buffer = 0, nodes = this.nodes.children, minSize = undefined) {
        const bounds = {
            x: { min: Infinity, max: -Infinity },
            y: { min: Infinity, max: -Infinity },
            isFinite: false,
            center: function() { return { x: 0, y: 0 }; },
        };
        nodes.forEach((node) => {
            bounds.x.min = Math.min(bounds.x.min, node.left);
            bounds.x.max = Math.max(bounds.x.max, node.right);
            bounds.y.min = Math.min(bounds.y.min, node.top);
            bounds.y.max = Math.max(bounds.y.max, node.bottom);
        });
        if ((bounds.x.max > bounds.x.min) && (bounds.y.max > bounds.y.min)) {
            bounds.isFinite = true;
            bounds.center = function() {
                const x = bounds.x.min + ((bounds.x.max - bounds.x.min) / 2);
                const y = bounds.y.min + ((bounds.y.max - bounds.y.min) / 2);
                return { x, y };
            };
            bounds.width = () => { return (bounds.x.max - bounds.x.min); };
            bounds.height = () => { return (bounds.y.max - bounds.y.min); };
            bounds.x.min -= buffer; bounds.x.max += buffer;
            bounds.y.min -= buffer; bounds.y.max += buffer;
            if (minSize) {
                if (bounds.width() < minSize) {
                    const addX = (minSize - bounds.width()) / 2;
                    bounds.x.min -= addX;
                    bounds.x.max += addX;
                }
                if (bounds.height() < minSize) {
                    const addY = (minSize - bounds.height()) / 2;
                    bounds.y.min -= addY;
                    bounds.y.max += addY;
                }
            }
        }
        return bounds;
    }
    traverseNodes(callback) {
        if (typeof callback !== 'function') return;
        if (!this.nodes) return;
        const nodes = this.nodes.children;
        nodes.sort((x, y) => x.zIndex - y.zIndex);
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node && node.isNode) callback(node);
        }
    }
    changeGridType(type = GRAPH_GRID_TYPES.LINES) {
        const SIZE = GRID_SIZE * 4;
        const HALF = SIZE / 2;
        const BORDER = 0;
        const B2 = BORDER * 2;
        this.gridType = type;
        if (type === GRAPH_GRID_TYPES.LINES) {
            const squares = new Canvas(SIZE, SIZE);
            const context = squares.context;
            context.clearRect(0, 0, squares.width, squares.height);
            context.globalAlpha = 0.55;
            context.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            context.fillRect(0 + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
            context.fillRect(HALF + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
            context.globalAlpha = 0.45;
            context.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            context.fillRect(HALF + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
            context.fillRect(0 + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
            context.globalAlpha = 1;
            context.lineWidth = 0;
            context.strokeStyle = _color.set(ColorScheme.color(TRAIT.BACKGROUND_LIGHT)).cssString();
            context.strokeRect(0, 0, HALF, HALF);
            context.strokeRect(HALF, HALF, HALF, HALF);
            context.strokeRect(HALF, 0, HALF, HALF);
            context.strokeRect(0, HALF, HALF, HALF);
            this.grid.setStyle('background-image', `url('${squares.dom.toDataURL()}')`);
            this.grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        } else if (type === GRAPH_GRID_TYPES.DOTS) {
            const radius = SIZE / 25;
            const dots = new Canvas(SIZE, SIZE);
            const context = dots.context;
            context.globalAlpha = 0.5;
            context.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            context.fillRect(0, 0, dots.width, dots.height);
            context.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    context.beginPath();
                    context.ellipse(HALF * i, HALF * j, radius, radius, 0, 0, Math.PI * 2);
                    context.fill();
                }
            }
            this.grid.setStyle('background-image', `url('${dots.dom.toDataURL()}')`);
            this.grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        }
    }
    connect() {
        if (this.activeItem && this.connectItem) {
            const active = this.activeItem;
            const connect = this.connectItem;
            if (active.type === NODE_TYPES.OUTPUT) {
                active.connect(connect);
            } else if (connect.type === NODE_TYPES.OUTPUT) {
                connect.connect(active);
            }
        }
        this.activeItem = undefined;
        this.connectItem = undefined;
        this.drawLines();
    }
    disconnect(item) {
        this.traverseNodes((node) => {
            node.outputList.children.forEach((output) => {
                const index = output.connections.indexOf(item);
                if (index > -1) {
                    output.connections.splice(index, 1);
                    item.reduceIncoming();
                }
                if (output.connections.length === 0) {
                    output.removeClass('suey-item-connected');
                }
            });
        });
    }
    drawLines() {
        if (!this.lines) return;
        if (this.isHidden()) return;
        const LINE_THICKNESS = 4;
        const self = this;
        const lines = this.lines;
        const linesRect = lines.dom.getBoundingClientRect();
        const xMin = linesRect.left;
        const xMax = linesRect.right;
        const yMin = linesRect.top;
        const yMax = linesRect.bottom;
        const context = lines.context;
        context.clearRect(0, 0, lines.width, lines.height);
        function scaleX(x) { return (x / linesRect.width) * lines.width; }
        function scaleY(y) { return (y / linesRect.height) * lines.height; }
        function drawLine(x1, y1, x2, y2, color1, color2 = color1) {
            if (!Number.isFinite(x1) || Number.isNaN(x1)) return;
            if (!Number.isFinite(x2) || Number.isNaN(x2)) return;
            if (!Number.isFinite(y1) || Number.isNaN(y1)) return;
            if (!Number.isFinite(y2) || Number.isNaN(y2)) return;
            context.strokeStyle = color1;
            if (color2 != null && color1 !== color2) {
                const gradient = context.createLinearGradient(x1, y1, x2, y2);
                gradient.addColorStop(0, color1);
                gradient.addColorStop(1, color2);
                context.strokeStyle = gradient;
            }
            context.lineWidth = LINE_THICKNESS * self.#scale;
            context.beginPath();
            context.moveTo(x1, y1);
            switch (self.curveType) {
                case GRAPH_LINE_TYPES.STRAIGHT:
                    context.lineTo(x2, y2);
                    break;
                case GRAPH_LINE_TYPES.ZIGZAG:
                    const xOffset = Math.abs((x2 - x1) * 0.25);
                    context.lineTo(x1 + xOffset, y1);
                    context.lineTo(x2 - xOffset, y2);
                    context.lineTo(x2, y2);
                    break;
                case GRAPH_LINE_TYPES.CURVE:
                default:
                    const curveOffset = Math.abs((x2 - x1) * 0.5);
                    context.bezierCurveTo(x1 + curveOffset, y1, x2 - curveOffset, y2, x2, y2);
                    break;
            }
            context.stroke();
        }
        function drawConnection(x1, y1, x2, y2, radius = 10, color1 = '#ffffff', color2 = color1, drawPoints = false) {
            const left = (x1 < x2) ? x1 : x2;
            const right = (x1 < x2) ? x2 : x1;
            const top = (y1 < y2) ? y1 : y2;
            const bottom = (y1 < y2) ? y2 : y1;
            if (! (xMax >= left && xMin <= right && yMin <= bottom && yMax >= top)) return;
            x1 = scaleX(x1);
            y1 = scaleY(y1);
            x2 = scaleX(x2);
            y2 = scaleY(y2);
            context.globalAlpha = 1.0;
            if (drawPoints) {
                const radiusX = scaleX(radius);
                const radiusY = scaleY(radius);
                context.fillStyle = color1;
                context.beginPath();
                context.ellipse(x1, y1, radiusX, radiusY, 0 , 0, 2 * Math.PI);
                context.fill();
                context.fillStyle = color2;
                context.beginPath();
                context.ellipse(x2, y2, radiusX, radiusY, 0 , 0, 2 * Math.PI);
                context.fill();
            }
            drawLine(x1, y1, x2, y2, color1, color2);
        }
        const pointSize = parseFloat(Css.toPx('0.21429em', this.dom)) * this.#scale;
        this.traverseNodes((node) => {
            if (!node.outputList) return;
            node.outputList.children.forEach((item) => {
                const rectOut = item.point.dom.getBoundingClientRect();
                const x1 = rectOut.left + (rectOut.width / 2);
                const y1 = rectOut.top + (rectOut.height / 2);
                const color1 = item.node.colorString();
                item.connections.forEach((input) => {
                    const rectIn = input.point.dom.getBoundingClientRect();
                    const x2 = rectIn.left + (rectIn.width / 2);
                    const y2 = rectIn.top + (rectIn.height / 2);
                    const color2 = input.node.colorString();
                    drawConnection(x1, y1, x2, y2, pointSize, color1, color2);
                });
            });
        });
        if (this.activeItem) {
            const rect = this.activeItem.point.dom.getBoundingClientRect();
            const x1 = rect.left + (rect.width / 2);
            const y1 = rect.top + (rect.height / 2);
            const x2 = this.activePoint.x;
            const y2 = this.activePoint.y;
            const color = this.activeItem.node.colorString();
            const forward = this.activeItem.type === NODE_TYPES.OUTPUT;
            const drawPoints = !this.connectItem;
            if (forward) drawConnection(x1, y1, x2, y2, pointSize, color, color, drawPoints);
            else drawConnection(x2, y2, x1, y1, pointSize, color, color, drawPoints);
        }
    }
    drawMiniMap() {
        if (!this.mapCanvas) return;
        if (this.isHidden()) return;
        const map = this.mapCanvas;
        const context = map.context;
        context.clearRect(0, 0, map.width, map.height);
        const bounds = this.nodeBounds(MAP_BUFFER, this.nodes.children, MIN_MAP_SIZE);
        if (!bounds.isFinite) return;
        this.#drawWidth = map.width;
        this.#drawHeight = map.height;
        let adjustX = 0, adjustY = 0;
        const ratioX = map.width / bounds.width();
        const ratioY = (map.height / bounds.height()) * this.mapCanvas.ratio();
        if (ratioX > ratioY) {
            this.#drawWidth *= (ratioY / ratioX);
            adjustX = (this.#drawWidth - map.width) / 2;
        } else {
            this.#drawHeight *= (ratioX / ratioY);
            adjustY = (this.#drawHeight - map.height) / 2;
        }
        const rect = this.dom.getBoundingClientRect();
        const scaled = {};
        const centerX = rect.left + ((rect.right - rect.left) / 2);
        const centerY = rect.top + ((rect.bottom - rect.top) / 2);
        scaled.left = (centerX - ((rect.width / this.#scale) / 2)) - this.#offset.x;
        scaled.top = (centerY - ((rect.height / this.#scale) / 2)) - this.#offset.y;
        scaled.width = rect.width / this.#scale;
        scaled.height = rect.height / this.#scale;
        const x = (this.#drawWidth * ((scaled.left - bounds.x.min) / bounds.width())) - adjustX;
        const y = (this.#drawHeight * ((scaled.top - bounds.y.min) / bounds.height())) - adjustY;
        const w = this.#drawWidth * (scaled.width / bounds.width());
        const h = this.#drawHeight * (scaled.height / bounds.height());
        context.globalAlpha = 0.5;
        context.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
        context.fillRect(x, y, w, h);
        const widthScale = this.minimap.getWidth() / this.mapCanvas.width;
        const heightScale = this.minimap.getHeight() / this.mapCanvas.height;
        context.globalAlpha = 0.75;
        context.strokeStyle = _color.set(ColorScheme.color(TRAIT.TEXT)).cssString();
        context.lineWidth = 2 / widthScale;
        context.beginPath(); context.moveTo(x + 0, y); context.lineTo(x + 0, y + h); context.stroke();
        context.beginPath(); context.moveTo(x + w, y); context.lineTo(x + w, y + h); context.stroke();
        context.lineWidth = 2 / heightScale;
        context.beginPath(); context.moveTo(x, y + 0); context.lineTo(x + w, y + 0); context.stroke();
        context.beginPath(); context.moveTo(x, y + h); context.lineTo(x + w, y + h); context.stroke();
        context.globalAlpha = 0.5;
        context.globalAlpha = 0.75;
        this.traverseNodes((node) => {
            context.fillStyle = node.colorString();
            const x = this.#drawWidth * ((node.left - bounds.x.min) / bounds.width());
            const w = this.#drawWidth * (node.width / bounds.width());
            const y = this.#drawHeight * ((node.top - bounds.y.min) / bounds.height());
            const h = this.#drawHeight * (node.height / bounds.height());
            context.beginPath();
            context.roundRect(x - adjustX, y - adjustY, w, h, 0);
            context.fill();
        });
    }
    centerView(resetZoom = true, animate = true) {
        const selected = [];
        this.traverseNodes((node) => { if (node.hasClass('suey-node-selected')) selected.push(node); });
        const bounds = this.nodeBounds(0, (selected.length > 0) ? selected : this.nodes.children);
        this.focusView(bounds.center().x, bounds.center().y, resetZoom, animate);
    }
    focusView(targetX, targetY, resetZoom = false, animate = true) {
        if (targetX == null || targetY == null) return;
        const rect = this.nodes.dom.getBoundingClientRect();
        this.#targetX = ((rect.width / 2) / this.#scale) - targetX;
        this.#targetY = ((rect.height / 2) / this.#scale) - targetY;
        this.#targetZoom = ((resetZoom) ? 1.0 : this.#scale) * 1000;
        if (animate) {
            const self = this;
            this.#animateStart = performance.now();
            this.#animateLast = performance.now();
            this.#startZoom = this.#scale * 1000;
            this.#animateTimer = setInterval(() => {
                this.#animating = true;
                function damp(x, y, lambda, dt) { return lerp(x, y, 1 - Math.exp(- lambda * dt)); }
                function lerp(x, y, t) { return (1 - t) * x + t * y; }
                const elapsed = (performance.now() - self.#animateStart) / 1000;
                const dt = (performance.now() - self.#animateLast) / 1000;
                self.#offset.x = damp(self.#offset.x, self.#targetX, 15, dt);
                self.#offset.y = damp(self.#offset.y, self.#targetY, 15, dt);
                self.#startZoom = damp(self.#startZoom, self.#targetZoom, 15 * (elapsed + 0.5), dt);
                const diffX = Math.abs(self.#offset.x - self.#targetX);
                const diffY = Math.abs(self.#offset.y - self.#targetY);
                const diffZ = Math.abs(self.#startZoom - self.#targetZoom);
                if (diffX < 0.5 && diffY < 0.5 && diffZ < 0.01) self.stopAnimation();
                if (elapsed > 2.5) self.stopAnimation();
                self.zoomTo(self.#startZoom / 1000);
                self.#animateLast = performance.now();
            }, ANIMATE_INTERVAL);
        } else {
            this.#offset.x = this.#targetX;
            this.#offset.y = this.#targetY;
            this.zoomTo(this.#targetZoom / 1000);
        }
    }
    #animating = false;
    #animateTimer = undefined;
    #animateStart = 0;
    #animateLast = 0;
    #targetX = 0;
    #targetY = 0;
    #startZoom = 0;
    #targetZoom = 0;
    stopAnimation() {
        clearInterval(this.#animateTimer);
        if (this.#animating) {
            this.#animating = false;
            this.#offset.x = this.#targetX;
            this.#offset.y = this.#targetY;
            this.zoomTo(this.#targetZoom / 1000);
        }
    }
    zoomTo(zoom, clientX, clientY, drawLines = true) {
        if (zoom == undefined) zoom = this.#scale;
        zoom = Math.round(Math.min(Math.max(zoom, ZOOM_MIN), ZOOM_MAX) * 100) / 100;
        const nodes = this.nodes;
        const grid = this.grid;
        if (clientX != undefined && clientY != undefined) {
            const before = nodes.dom.getBoundingClientRect();
            nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
            const after = nodes.dom.getBoundingClientRect();
            clientX -= before.left;
            clientY -= before.top;
            const shiftW = after.left - before.left;
            const shiftH = after.top - before.top;
            const dw = clientX - ((clientX / this.#scale) * zoom);
            const dh = clientY - ((clientY / this.#scale) * zoom);
            this.#offset.x -= ((shiftW - dw) / zoom);
            this.#offset.y -= ((shiftH - dh) / zoom);
        }
        nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
        this.#scale = zoom;
        this.#previous.x = this.#offset.x;
        this.#previous.y = this.#offset.y;
        const rect = this.dom.getBoundingClientRect();
        const diffX = (rect.width - (rect.width * zoom)) / 2;
        const diffY = (rect.height - (rect.height * zoom)) / 2;
        const ox = this.#offset.x * zoom;
        const oy = this.#offset.y * zoom;
        grid.setStyle('background-position', `left ${diffX + ox}px top ${diffY + oy}px`);
        grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        grid.setStyle('opacity', (this.#scale < 1) ? (this.#scale * this.#scale) : '1');
        const resizeables = document.querySelectorAll(`.suey-node`);
        resizeables.forEach(el => {
            if (zoom < 0.5) el.classList.add('suey-too-small');
            else el.classList.remove('suey-too-small');
        });
        this.drawMiniMap();
        if (drawLines) this.drawLines();
    }
}

const MIN_W = 200;
const MIN_H = 100;
const _color1 = new Iris();
const _color2 = new Iris();
class Node extends Div {
    #color = new Iris();
    #style = {};
    #needsUpdate = true;
    #startPosition = { x: 0, y: 0 };
    constructor({
        width = 200,
        height = 150,
        x = 0,
        y = 0,
        color = 0x888888,
        resizers = [ RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT ],
    } = {}) {
        super();
        const self = this;
        this.addClass('suey-node');
        this.allowMouseFocus();
        this.isNode = true;
        this.graph = undefined;
        this.#color.set(color);
        const panel = new Div().addClass('suey-node-panel');
        const border = new Div().addClass('suey-node-border');
        const sizers = new Div().addClass('suey-node-resizers');
        this.addToSelf(sizers, panel, border);
        this.contents = function() { return panel; };
        this.header = new Div().setClass('suey-node-header-title').setStyle('display', 'none');
        const lists = new Div().setClass('suey-node-interior');
        this.inputList = new Div().setClass('suey-node-item-list');
        this.outputList = new Div().setClass('suey-node-item-list');
        lists.add(this.inputList, this.outputList);
        this.add(this.header, lists);
        this.on('focusout', () => self.removeClass('suey-active-node'));
        this.on('focusin', () => self.activeNode());
        this.on('displayed', () => self.activeNode());
        this.on('pointerdown', () => self.activeNode());
        this.on('contextmenu', (event) => { event.preventDefault(); });
        let rect = {};
        function resizerDown() {
            rect.left = self.left;
            rect.top = self.top;
            rect.width = self.width;
            rect.height = self.height;
            nodePointerDown();
        }
        function resizerMove(resizer, diffX, diffY) {
            const scale = self.getScale();
            diffX *= (1 / scale);
            diffY *= (1 / scale);
            if (resizer.hasClassWithString('left')) {
                const newWidth = Math.max(self.roundNearest(rect.width - diffX), MIN_W);
                const newLeft = rect.left + (rect.width - newWidth);
                self.setStyle('left', `${newLeft}px`, 'width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('top')) {
                const newHeight = Math.max(self.roundNearest(rect.height - diffY), MIN_H);
                const newTop = rect.top + (rect.height - newHeight);
                self.setStyle('top', `${newTop}px`, 'height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('right')) {
                const newWidth = Math.max(self.roundNearest(rect.width + diffX), MIN_W);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('bottom')) {
                const newHeight = Math.max(self.roundNearest(rect.height + diffY), MIN_H);
                self.setStyle('height', `${newHeight}px`);
            }
        }
        Interaction.makeResizeable(sizers, resizerDown, resizerMove).addResizers(resizers);
        let styleTimeout = undefined;
        const observer = new MutationObserver(() => {
            self.needsUpdate = true;
            clearTimeout(styleTimeout);
            styleTimeout = setTimeout(() => self.#updateSizes(), 4);
        });
        observer.observe(this.dom, { attributes: true, attributeFilter: [ 'style', 'class' ] });
        this.setStyle(
            'left', `${this.roundNearest(parseFloat(x))}px`,
            'top', `${this.roundNearest(parseFloat(y))}px`,
            'width', `${parseFloat(width)}px`,
            'height', `${parseFloat(height)}px`,
        );
        let clickCount = 0;
        let watchForSingleClick = false;
        let singleClickTimer;
        function dragDown() {
            if (!self.graph) return;
            self.graph.getNodes().forEach((node) => node.setStartPosition(node.left, node.top));
        }
        function dragMove(diffX, diffY) {
            watchForSingleClick = false;
            clickCount = 0;
            if (!self.graph) return;
            self.graph.getNodes().forEach((node) => {
                if (node.hasClass('suey-node-selected')) {
                    node.setStyle('left', `${self.roundNearest(node.getStartPosition().x + diffX)}px`);
                    node.setStyle('top', `${self.roundNearest(node.getStartPosition().y + diffY)}px`);
                }
            });
        }
        function dragUp() {
            if (!self.graph) return;
            self.dom.dispatchEvent(new Event('dragged'));
        }
        Interaction.makeDraggable(self, self, false , dragDown, dragMove, dragUp);
        function nodePointerDown(event) {
            clickCount++;
            if (event && event.button !== 0) {
                if (self.graph) setTimeout(() => self.graph.input.dom.dispatchEvent(event), 0);
                return;
            }
            if (self.graph) {
                const nodes = self.graph.getNodes();
                if (self.zIndex !== nodes.length) {
                    nodes.forEach(node => node.setStyle('zIndex', `${node.zIndex - 1}`));
                    self.setStyle('zIndex', nodes.length);
                }
            }
            const selected = document.querySelectorAll(`.suey-node-selected`);
            if (!self.hasClass('suey-node-selected')) {
                selected.forEach(el => { if (el !== self.dom) el.classList.remove('suey-node-selected'); });
                self.addClass('suey-node-selected');
                if (self.graph) self.graph.dom.dispatchEvent(new Event('selected'));
                watchForSingleClick = false;
            } else if (selected.length > 1) {
                watchForSingleClick = true;
            }
            document.addEventListener('pointerup', nodePointerUp);
        }
        function nodePointerUp() {
            clearTimeout(singleClickTimer);
            singleClickTimer = setTimeout(() => {
                if (watchForSingleClick && clickCount === 1) {
                    const selected = document.querySelectorAll(`.suey-node-selected`);
                    selected.forEach(el => { if (el !== self.dom) el.classList.remove('suey-node-selected'); });
                    self.addClass('suey-node-selected');
                    if (self.graph) self.graph.dom.dispatchEvent(new Event('selected'));
                }
                clickCount = 0;
                watchForSingleClick = false;
            }, 250);
            document.removeEventListener('pointerup', nodePointerUp);
        }
        this.on('pointerdown', nodePointerDown);
        function nodeDoubleClick() {
            if (!self.graph) return;
            self.graph.centerView(false , true );
        }
        this.on('dblclick', nodeDoubleClick);
        this.on('destroy', () => {
            if (observer) observer.disconnect();
        });
    }
    get needsUpdate() { return this.#needsUpdate; }
    set needsUpdate(update) { this.#needsUpdate = update; }
    #updateSizes() {
        if (!this.#needsUpdate) return;
        const computed = getComputedStyle(this.dom);
        const style = this.#style;
        style.left = parseFloat(computed.left);
        style.top = parseFloat(computed.top);
        style.width = parseFloat(computed.width);
        style.height = parseFloat(computed.height);
        style.right = style.left + style.width;
        style.bottom = style.top + style.height;
        style.zIndex = parseInt(computed.zIndex);
        this.#needsUpdate = false;
        const self = this;
        if (this.graph) setTimeout(() => {
            self.graph.drawMiniMap();
            self.graph.drawLines();
        }, 20);
    }
    get left()   { this.#updateSizes(); return this.#style.left; }
    get top()    { this.#updateSizes(); return this.#style.top; }
    get width()  { this.#updateSizes(); return this.#style.width; }
    get height() { this.#updateSizes(); return this.#style.height; }
    get right()  { this.#updateSizes(); return this.#style.right; }
    get bottom() { this.#updateSizes(); return this.#style.bottom; }
    get zIndex() { this.#updateSizes(); return this.#style.zIndex; }
    roundNearest(decimal, increment = GRID_SIZE) {
        if (!this.graph || !this.graph.snapToGrid) return decimal;
        return Math.round(decimal / increment) * increment;
    }
    getScale() {
        return (this.graph ? this.graph.getScale() : 1.0);
    }
    getStartPosition() { return this.#startPosition; }
    setStartPosition(x = 0, y = 0) { this.#startPosition.x = x; this.#startPosition.y = y; }
    addItem(item) {
        item.node = this;
        switch (item.type) {
            case NODE_TYPES.INPUT: this.inputList.add(item); break;
            case NODE_TYPES.OUTPUT: this.outputList.add(item); break;
        }
    }
    createHeader(text = '', iconUrl) {
        if (this.header.children.length > 0) return;
        const icon = new VectorBox(iconUrl);
        const iconHolder = new Span().setClass('suey-node-header-icon').add(icon);
        const textHolder = new Span().setClass('suey-node-header-text').setTextContent(text);
        this.header.add(iconHolder, textHolder);
        this.header.setStyle('display', '');
        this.applyColor();
        this.name = text;
    }
    activeNode(withClass = 'suey-node') {
        const activeNode = this.dom;
        const panels = document.querySelectorAll(`.${withClass}`);
        panels.forEach(el => { if (el !== activeNode) el.classList.remove('suey-active-node'); });
        activeNode.classList.add('suey-active-node');
    }
    applyColor(color) {
        if (color !== undefined) this.#color.set(color);
        const colorLight = _color2.set(this.#color).darken(1.3).rgbString();
        const colorDark = _color1.set(this.#color).darken(0.7).rgbString();
        if (this.header) this.header.setStyle('background-image', `linear-gradient(to bottom, rgba(${colorLight}, 0.75), rgba(${colorDark}, 0.75))`);
        Css.setVariable('--node-color', _color1.set(this.#color).rgbString(), this.dom);
    }
    colorString() {
        return this.#color.cssString();
    }
}

class NodeItem extends Div {
    constructor({
        quantity = 1,
        type = NODE_TYPES.INPUT,
        title = '',
    } = {}) {
        super(title);
        const self = this;
        this.addClass('suey-node-item');
        const disconnect = new VectorBox(IMAGE_CLOSE);
        this.point = new Div().addClass('suey-node-item-point');
        this.unhook = new Div().addClass('suey-node-item-unhook').add(disconnect);
        this.add(this.point, this.unhook);
        this.connections = [];
        this.incoming = 0;
        this.quantity = quantity;
        this.type = type;
        this.node = this;
        switch (type) {
            case NODE_TYPES.INPUT: this.addClass('suey-node-left'); break;
            case NODE_TYPES.OUTPUT: this.addClass('suey-node-right'); break;
        }
        this.graph = () => { return (self.node && self.node.graph) ? self.node.graph : undefined; };
        function pointPointerDown(event) {
            if (event.button !== 0) return;
            if (!self.graph()) return;
            event.stopPropagation();
            event.preventDefault();
            document.addEventListener('pointermove', pointPointerMove);
            document.addEventListener('pointerup', pointPointerUp);
            self.point.addClass('suey-active-item');
            self.graph().activeItem = self;
            self.graph().activePoint.x = event.clientX;
            self.graph().activePoint.y = event.clientY;
            self.graph().drawLines();
        }
        function pointPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            self.point.removeClass('suey-active-item');
            self.graph().connect();
            document.removeEventListener('pointermove', pointPointerMove);
            document.removeEventListener('pointerup', pointPointerUp);
        }
        function pointPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            self.graph().activePoint.x = event.clientX;
            self.graph().activePoint.y = event.clientY;
            self.graph().drawLines();
        }
        function pointPointerEnter(event) {
            if (self.graph() && self.graph().activeItem) {
                if (self.type !== self.graph().activeItem.type) {
                    self.graph().connectItem = self;
                    if (self.graph().activeItem) self.point.addClass('suey-active-item');
                    self.point.addClass('suey-hover-point');
                }
            } else {
                self.point.addClass('suey-hover-point');
            }
        }
        function pointPointerLeave(event) {
            if (self.graph()) {
                self.graph().connectItem = undefined;
                if (self.graph().activeItem !== self) self.point.removeClass('suey-active-item');
            }
            self.point.removeClass('suey-hover-point');
        }
        this.point.on('pointerdown', pointPointerDown);
        this.point.on('pointerenter', pointPointerEnter);
        this.point.on('pointerleave', pointPointerLeave);
        function breakPointerDown(event) {
            if (!self.hasClass('suey-item-connected')) return;
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            self.disconnect();
        }
        this.unhook.on('pointerdown', breakPointerDown);
    }
    connect(item) {
        if (item === this) return;
        if (!this.connections.includes(item)) {
            if (this.connections.length >= this.quantity) {
                this.connections[this.connections.length - 1].reduceIncoming();
                this.connections.length = Math.max(0, this.connections.length - 1);
            }
            if (this.connections.length < this.quantity) {
                item.increaseIncoming();
                this.connections.push(item);
            }
        }
        this.wantsClass('suey-item-connected', this.connections.length > 0);
    }
    disconnect() {
        switch (this.type) {
            case NODE_TYPES.OUTPUT:
                for (let i = 0; i < this.connections.length; i++) {
                    this.connections[i].reduceIncoming();
                }
                this.connections.length = 0;
                break;
            case NODE_TYPES.INPUT:
                if (this.graph()) this.graph().disconnect(this);
                break;
        }
        this.removeClass('suey-item-connected');
        if (this.graph()) this.graph().drawLines();
    }
    increaseIncoming() {
        this.incoming++;
        this.addClass('suey-item-connected');
    }
    reduceIncoming() {
        if (this.incoming > 0) this.incoming--;
        if (this.incoming === 0) this.removeClass('suey-item-connected');
    }
}

class Scrollable extends Panel {
    constructor({
        style = PANEL_STYLES$1.NONE,
    } = {}) {
        super(style);
        this.addClass('suey-scroller');
    }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') { return; }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$d = "/**\n * Units\n *  px      Pixels\n *  %       Percentage relative to the parent element\n *  em      Relative to the font-size of the element (2em means 2 times the size of the current font)\n *  rem     Relative to the font-size of the root element\n *  ch      Relative to the width of the character '0' of the current font\n *  ex      Relative to the height of a lowercase letter ('x') of the current font\n *  cap     Relative to the height of a capital letter of the current font\n *  vw      Relative to 1% of the width of the viewport (browser window)\n *  vh      Relative to 1% of the width of the viewport (browser window)\n *  vmin    Relative to 1% of viewport's (browser window's) smaller dimension\n *  vmax    Relative to 1% of viewport's (browser window's) larger dimension\n */\n\n:root {\n    color-scheme: light dark;\n\n    /* Scheme Colors */\n    --shadow:                 0,   0,   0;      /* black for dark theme, white for light theme */\n    --darkness:               0,   0,   0;      /* lightens as theme lightens */\n\n    --background-dark:       24,  24,  24;\n    --background-light:      32,  32,  32;\n    --button-dark:           40,  40,  40;\n    --button-light:          60,  60,  60;\n\n    --text-dark:            100, 100, 100;\n    --text:                 190, 190, 190;\n    --text-light:           225, 225, 225;\n\n    --blacklight:             0,   0,   0;\n    --darklight:              8,   8,   8;\n    --midlight:              85,  85,  85;\n    --highlight:            255, 255, 255;\n\n    --icon-dark:              0,  85, 102;      /* icon darkened            dark classic aqua   #005566 */\n    --icon:                   0, 170, 204;      /* icon color               classic aqua        #00aacc */\n    --icon-light:           101, 229, 255;      /* icon brightened          light clasic aqua   #65e5ff */\n\n    --complement:           255, 132,  10;      /* icon shifted 180°        orange              #ff840a */\n    --triadic1:             255,  10,  67;      /* icon shifted 120°        red                 #ff0a43 */\n    --triadic2:             157, 255,  59;      /* complement shifted 120°  lime green          #9dff3b */\n    --triadic3:             255,  10, 238;      /* icon shifted 90°         pink                #ff0aee */\n    --triadic4:             232, 255,  59;      /* complement shifted 90°   pale yellow         #e8ff3b */\n    --triadic5:             116,  10, 255;      /* icon shifted 60°         purple              #740aff */\n    --triadic6:             255, 228,  59;      /* complement shifted 60°   yellow              #ffe43b */\n\n    /* Theme Multiplier */\n    --bright:               1;                  /* 1: Mid/Dark, 0: Light */\n\n    /* Basic Colors */\n    --white:                255, 255, 255;\n    --gray:                 128, 128, 128;\n    --black:                  0,   0,   0;\n\n    /* Input Colors */\n    --valid:                131, 242,  13;      /* green */\n    --invalid:              242,  51,  13;      /* red */\n    --warning:              242, 204,  13;      /* yellow */\n    --info:                  13,  51, 242;      /* blue */\n\n    /* Hue Rotation for Icon Color */\n    --rotate-hue:           0deg;               /* Programatically changes to degree offset icon color is from Aqua */\n\n    /* Transparency */\n    --panel-transparency:   0.85;\n\n    /* Font */\n    font-size:              10px;               /* 10px or 62.5% (62% of 16px (browser root default) === 10px) */\n    --base-size:            10px;               /* Gui designed to scale from this original font size */\n    --font-size:            14px;               /* Current font size, NOTE: 1em = 14px (i.e. 10px * 1.4)  */\n    --font-family:          'Roboto', Helvetica, Arial, sans-serif;\n\n    /* Sizes */\n    --pixel:                0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --minus:               -0.07143em;          /*  1px @ font size 1.4em (14px) */\n\n    --border-micro:         0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --border-small:         0.14286em;          /*  2px @ font size 1.4em (14px) */\n\n    --radius-small:         0.28571em;          /*  4px @ font size 1.4em (14px) */\n    --radius-large:         0.42857em;          /*  6px @ font size 1.4em (14px) */\n\n    --pad-micro:            0.07143em;          /*  1px @ font size 1.4em (14px), i.e. 1px = 1 / 14 */\n    --pad-x-small:          0.14286em;          /*  2px; */\n    --pad-small:            0.21429em;          /*  3px; */\n    --pad-smallish:         0.28571em;          /*  4px; */\n    --pad-medium:           0.35714em;          /*  5px; */\n    --pad-large:            0.71429em;          /* 10px; */\n\n    --arrow-size:           0.4em;              /* Dropdown arrow */\n    --asset-size:           3.45em;             /* AssetBox size */\n    --button-size:          2.65em;             /* Toolbar button size */\n    --scroll-size:          0.57143em;          /* 8px, scrollbar thickness */\n    --resize-size:          1.0em;              /* 14px, panel resizer thickness */\n    --row-height:           1.7em;              /* min row height (Asset Box, Property List, Tree List, etc.) */\n    --tab-size:             2.25em;             /* Tab button diameter */\n    --tab-timing:           200ms;              /* Tab animation time */\n\n    /* Timing */\n    --menu-timing:          0.2s;               /* Various gui related time delays (in seconds) */\n    --tooltip-delay:        500ms;              /* Time that passes before tooltips are shown */\n\n    /* Box Shadows:         'inner-glow', 'pop-out-shadow', 'sunk-in-shadow' */\n\n    /* Filters */\n    --drop-shadow:          drop-shadow(0 0 var(--pad-x-small) black);\n    --tint-icon:            none;\n    --tint-complement:      none;\n    --tint-triadic1:        none;\n    --tint-triadic2:        none;\n    --tint-triadic3:        none;\n    --tint-triadic4:        none;\n    --tint-triadic5:        none;\n    --tint-triadic6:        none;\n    --tint-text:            none;\n\n}\n";
var stylesheet$d="/**\n * Units\n *  px      Pixels\n *  %       Percentage relative to the parent element\n *  em      Relative to the font-size of the element (2em means 2 times the size of the current font)\n *  rem     Relative to the font-size of the root element\n *  ch      Relative to the width of the character '0' of the current font\n *  ex      Relative to the height of a lowercase letter ('x') of the current font\n *  cap     Relative to the height of a capital letter of the current font\n *  vw      Relative to 1% of the width of the viewport (browser window)\n *  vh      Relative to 1% of the width of the viewport (browser window)\n *  vmin    Relative to 1% of viewport's (browser window's) smaller dimension\n *  vmax    Relative to 1% of viewport's (browser window's) larger dimension\n */\n\n:root {\n    color-scheme: light dark;\n\n    /* Scheme Colors */\n    --shadow:                 0,   0,   0;      /* black for dark theme, white for light theme */\n    --darkness:               0,   0,   0;      /* lightens as theme lightens */\n\n    --background-dark:       24,  24,  24;\n    --background-light:      32,  32,  32;\n    --button-dark:           40,  40,  40;\n    --button-light:          60,  60,  60;\n\n    --text-dark:            100, 100, 100;\n    --text:                 190, 190, 190;\n    --text-light:           225, 225, 225;\n\n    --blacklight:             0,   0,   0;\n    --darklight:              8,   8,   8;\n    --midlight:              85,  85,  85;\n    --highlight:            255, 255, 255;\n\n    --icon-dark:              0,  85, 102;      /* icon darkened            dark classic aqua   #005566 */\n    --icon:                   0, 170, 204;      /* icon color               classic aqua        #00aacc */\n    --icon-light:           101, 229, 255;      /* icon brightened          light clasic aqua   #65e5ff */\n\n    --complement:           255, 132,  10;      /* icon shifted 180°        orange              #ff840a */\n    --triadic1:             255,  10,  67;      /* icon shifted 120°        red                 #ff0a43 */\n    --triadic2:             157, 255,  59;      /* complement shifted 120°  lime green          #9dff3b */\n    --triadic3:             255,  10, 238;      /* icon shifted 90°         pink                #ff0aee */\n    --triadic4:             232, 255,  59;      /* complement shifted 90°   pale yellow         #e8ff3b */\n    --triadic5:             116,  10, 255;      /* icon shifted 60°         purple              #740aff */\n    --triadic6:             255, 228,  59;      /* complement shifted 60°   yellow              #ffe43b */\n\n    /* Theme Multiplier */\n    --bright:               1;                  /* 1: Mid/Dark, 0: Light */\n\n    /* Basic Colors */\n    --white:                255, 255, 255;\n    --gray:                 128, 128, 128;\n    --black:                  0,   0,   0;\n\n    /* Input Colors */\n    --valid:                131, 242,  13;      /* green */\n    --invalid:              242,  51,  13;      /* red */\n    --warning:              242, 204,  13;      /* yellow */\n    --info:                  13,  51, 242;      /* blue */\n\n    /* Hue Rotation for Icon Color */\n    --rotate-hue:           0deg;               /* Programatically changes to degree offset icon color is from Aqua */\n\n    /* Transparency */\n    --panel-transparency:   0.85;\n\n    /* Font */\n    font-size:              10px;               /* 10px or 62.5% (62% of 16px (browser root default) === 10px) */\n    --base-size:            10px;               /* Gui designed to scale from this original font size */\n    --font-size:            14px;               /* Current font size, NOTE: 1em = 14px (i.e. 10px * 1.4)  */\n    --font-family:          'Roboto', Helvetica, Arial, sans-serif;\n\n    /* Sizes */\n    --pixel:                0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --minus:               -0.07143em;          /*  1px @ font size 1.4em (14px) */\n\n    --border-micro:         0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --border-small:         0.14286em;          /*  2px @ font size 1.4em (14px) */\n\n    --radius-small:         0.28571em;          /*  4px @ font size 1.4em (14px) */\n    --radius-large:         0.42857em;          /*  6px @ font size 1.4em (14px) */\n\n    --pad-micro:            0.07143em;          /*  1px @ font size 1.4em (14px), i.e. 1px = 1 / 14 */\n    --pad-x-small:          0.14286em;          /*  2px; */\n    --pad-small:            0.21429em;          /*  3px; */\n    --pad-smallish:         0.28571em;          /*  4px; */\n    --pad-medium:           0.35714em;          /*  5px; */\n    --pad-large:            0.71429em;          /* 10px; */\n\n    --arrow-size:           0.4em;              /* Dropdown arrow */\n    --asset-size:           3.45em;             /* AssetBox size */\n    --button-size:          2.65em;             /* Toolbar button size */\n    --scroll-size:          0.57143em;          /* 8px, scrollbar thickness */\n    --resize-size:          1.0em;              /* 14px, panel resizer thickness */\n    --row-height:           1.7em;              /* min row height (Asset Box, Property List, Tree List, etc.) */\n    --tab-size:             2.25em;             /* Tab button diameter */\n    --tab-timing:           200ms;              /* Tab animation time */\n\n    /* Timing */\n    --menu-timing:          0.2s;               /* Various gui related time delays (in seconds) */\n    --tooltip-delay:        500ms;              /* Time that passes before tooltips are shown */\n\n    /* Box Shadows:         'inner-glow', 'pop-out-shadow', 'sunk-in-shadow' */\n\n    /* Filters */\n    --drop-shadow:          drop-shadow(0 0 var(--pad-x-small) black);\n    --tint-icon:            none;\n    --tint-complement:      none;\n    --tint-triadic1:        none;\n    --tint-triadic2:        none;\n    --tint-triadic3:        none;\n    --tint-triadic4:        none;\n    --tint-triadic5:        none;\n    --tint-triadic6:        none;\n    --tint-text:            none;\n\n}\n";
styleInject(css_248z$d);

var css_248z$c = "/********** Base Styling **********/\n\n*:not(.suey-custom-font *) {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\nhtml *, html *::before, html *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n\n    /* Color main text and background */\n    color: rgba(var(--text-light), 0.75);\n    background-color: rgb(var(--background-dark));\n}\n\nimage {\n    image-rendering: smooth;\n}\n\n.suey-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: var(--pad-micro);\n}\n\n/********** Scrollbars **********/\n\ndiv::-webkit-scrollbar {\n    height: var(--scroll-size);\n    width: var(--scroll-size);\n    background: rgba(var(--shadow), 0.35);\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n/********** SVG **********/\n\n@media all {\n    svg {\n        shape-rendering: auto;\n    }\n}\n";
var stylesheet$c="/********** Base Styling **********/\n\n*:not(.suey-custom-font *) {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\nhtml *, html *::before, html *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n\n    /* Color main text and background */\n    color: rgba(var(--text-light), 0.75);\n    background-color: rgb(var(--background-dark));\n}\n\nimage {\n    image-rendering: smooth;\n}\n\n.suey-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: var(--pad-micro);\n}\n\n/********** Scrollbars **********/\n\ndiv::-webkit-scrollbar {\n    height: var(--scroll-size);\n    width: var(--scroll-size);\n    background: rgba(var(--shadow), 0.35);\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n/********** SVG **********/\n\n@media all {\n    svg {\n        shape-rendering: auto;\n    }\n}\n";
styleInject(css_248z$c);

var css_248z$b = "/********** ELEMENT: <input> (number, text, etc) **********/\n\n.suey-input {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.35);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-small);\n    outline: var(--border-micro) solid rgba(var(--shadow), 0.0);\n    padding: var(--pad-x-small) var(--pad-smallish);\n    vertical-align: middle;\n    min-width: 1em;\n    text-align: left;\n}\n\n.suey-input:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-input:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-input.suey-valid-type {\n    color: rgba(var(--text), 1);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    padding-left: var(--pad-medium);\n    text-align: left !important;\n}\n\n.suey-input.suey-invalid-type {\n    color: rgba(var(--text), 0.35);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-yes-drop {\n    color: rgba(var(--valid), 1);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--valid));\n    /* outline: var(--border-micro) solid rgb(var(--valid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-no-drop {\n    color: rgba(var(--invalid), 1.0);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--invalid));\n    /* outline: var(--border-micro) solid rgb(var(--invalid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5);\n    text-align: center !important;\n}\n\n/** Hide Arrow Spinners - Chrome, Safari, Edge, Opera */\n.suey-input::-webkit-outer-spin-button,\n.suey-input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/********** ELEMENT: <button> Button **********/\n\n.suey-button {\n    /* display: flex; */\n    position: relative;\n\n    cursor: pointer;\n    pointer-events: all;\n\n    color: rgba(var(--text-light), 1);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n    outline: var(--border-micro) solid rgba(var(--darklight), 0.0);\n\n    background-color: rgba(var(--button-dark), 0.75);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    font-size: var(--font-size);\n    margin: 0;\n    padding: var(--pad-x-small) var(--pad-medium);\n\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.suey-button:not(.suey-selected):enabled:hover {\n    filter: brightness(1.25);\n}\n\n.suey-button:not(.suey-selected):focus {\n    outline: var(--border-micro) solid rgba(var(--highlight), 0.5);\n}\n\n.suey-button:not(.suey-selected):enabled:active {\n    color: rgba(var(--text-dark), 1);\n    background-color: rgba(var(--background-dark), 0.5);\n    background-image: none;\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button.suey-selected {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom left, rgba(var(--icon-light), 0.20), rgba(var(--icon), 0.20));\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button:disabled {\n    pointer-events: none;\n}\n\n.suey-button:disabled {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Little borderless buttons */\n.suey-borderless-button {\n    user-select: none;\n    border: none;\n    border-radius: var(--radius-large);\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n\n    min-height: 1.5em;\n    min-width: 1.5em;\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:hover {\n    background-image: linear-gradient(to bottom, rgba(var(--white), 0.1), rgba(var(--white), 0.2));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.25);\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:active {\n    background-image: linear-gradient(to bottom, rgba(var(--black), 0.2), rgba(var(--black), 0.1));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--black), 0.5),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.5);\n}\n\n/********** ELEMENT: <input> Checkbox **********/\n\n/* Container */\n.suey-checkbox {\n    background: transparent;\n    display: inline-block;\n    position: relative;\n    justify-content: left;\n    cursor: pointer;\n    margin-left: 0.1em;\n}\n\n/* Native Element (holds checkbox value) */\n.suey-checkbox-input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* Visible Background: Unchecked */\n.suey-checkbox-button {\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    color: rgba(var(--text), 1);\n    background-image: none;\n    background-color: rgba(var(--background-dark), 0.5);\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.35); /* sunk-in-shadow */\n    left: 0;\n    top: 50%;\n    width: 2.0em;\n    height: 1.20em;\n    border-radius: 1.0em;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    transform: translateY(-50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Visible Background: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button {\n    --bg-color-light: var(--icon-light);\n    --bg-color-dark: var(--icon-dark);\n    background-color: rgba(var(--highlight), 0.2);\n    background-image: linear-gradient(to bottom, rgba(var(--bg-color-light), 0.7), rgba(var(--bg-color-dark), 0.7));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Visible Background: Checked & Hover */\n.suey-checkbox-input:checked:hover + .suey-checkbox-button {\n    background-color: rgba(var(--highlight), 0.5);\n}\n\n/* Button: Unchecked */\n.suey-checkbox-button:before {\n    content: '';\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    left: 0.2em;\n    top: 50%;\n    width: 0.65em;\n    height: 0.65em;\n    background-color: rgba(var(--text-light), 0.8);\n    border-radius: 1em;\n    transform: translate(0, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button:before {\n    /* background-color: rgba(var(--highlight), 0.7); */\n    box-shadow: 0px 0px 3px 2px rgba(var(--shadow), 0.5); /* drop shadow */\n    transform: translate(0.75em, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Hover, Unchecked */\n.suey-checkbox-input:hover + .suey-checkbox-button:before {\n    background-color: rgba(var(--highlight), 0.9);\n}\n\n/********** CLASS: Drop down buttons and menus **********/\n\n/** Buttons that drop down a 'select' option list  */\n.suey-dropdown.suey-selected, .suey-dropdown:not(.suey-selected):enabled:active {\n    background-color: rgba(var(--darklight), 1);\n    background-image: none;\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-small) solid rgb(var(--darklight));\n    border-radius: 0;\n}\n\n/** Color input attached to Button */\n.suey-color-input-button {\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.0;\n}\n\n/** Div used for a Dropdown Color Button */\n.suey-drop-color {\n    pointer-events: none;\n    background-color: #ff0000;\n    width: calc(100% - 0.5em);\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n}\n\n/********** CLASS: Drop Arrow (adds a little down arrow on right side of element) **********/\n\n.suey-drop-arrow {\n    padding-right: 1.4em;\n}\n.suey-drop-arrow::after {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    right: 0.65em;\n    top: 50%;\n    transform: translateY(-25%);\n    z-index: 101; /* Drop Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text-light)) transparent transparent transparent;\n    transition: all var(--menu-timing);\n}\n.suey-drop-arrow:hover::after, .suey-drop-arrow.suey-selected::after {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-drop-arrow.suey-selected::after {\n    transform: translateY(-75%) scale(1.0, -1.0);\n}\n\n/********** CLASS: <input> Number **********/\n\n/** Hide Arrow Spinners - Firefox (input[type=number] {}) */\n.suey-number {\n    -moz-appearance: textfield;\n}\n\n.suey-number {\n    font-size: 100%;\n}\n\n.suey-number-holder {\n    position: relative;\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n.suey-number-label-box {\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    padding: 0 var(--pad-smallish);\n    color: rgba(var(--text-dark), 1);\n}\n\n/********** ELEMENT: <input> Slider **********/\n\n.suey-slide-container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n}\n\n.suey-tick-marks {\n    --divides: 10; /* (max - min) / step */\n\n    position: absolute;\n    pointer-events: none;\n\n    width: calc(100% - (var(--pad-large) * 2));\n    height: 0.2em;\n    left: var(--pad-large);\n    top: 1.2em;\n    padding: 0;\n    margin: 0;\n\n    background-image: repeating-linear-gradient(to right,\n        rgba(var(--icon), 0.75) 0 1px, transparent 1px calc((100% - var(--pad-micro)) / var(--divides)));\n}\n\n.suey-slider {\n    --middle: 0.5; /* (value - min) / (max - min) */\n\n    -webkit-appearance: none;\n    position: absolute;\n    width: 98%;\n    padding: 0;\n    height: 0.375em;\n    top: calc(50% - 0.375em);\n\n    background: linear-gradient(to right,\n        rgba(var(--icon), 0.65) 0%, rgba(var(--icon), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--background-dark), 0.5) calc(var(--middle) * 100%), rgba(var(--background-dark), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n\n    cursor: pointer;\n}\n\n.suey-slider:hover, .suey-slider:focus, .suey-slider:active {\n    background: linear-gradient(to right,\n        rgba(var(--icon-light), 0.65) 0%, rgba(var(--icon-light), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--darklight), 0.5) calc(var(--middle) * 100%), rgba(var(--darklight), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n}\n.suey-slider:active {\n    cursor: ew-resize;\n}\n\n/* Safari / Chrome Thumb */\n.suey-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-webkit-slider-thumb:hover, .suey-slider::-webkit-slider-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-webkit-slider-thumb:active { cursor: ew-resize; }\n\n/* Firefox thumb */\n.suey-slider::-moz-range-thumb {\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-moz-range-thumb:hover, .suey-slider::-moz-range-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-moz-range-thumb:active { cursor: ew-resize; }\n\n/********** ELEMENT: <div> SliderBox **********/\n\n.suey-slider-box {\n    display: flex;\n}\n\n/********** ELEMENT <div> Dual / Range Slider *********/\n\n.suey-dual-slider-container {\n    position: relative;\n    overflow: visible;\n    width: 100%;\n    user-select: none;\n}\n\n/* Slider Track */\n.suey-dual-slider-track {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: calc(100% - (var(--pad-x-small) * 2));\n    height: 0.375em;\n    transform: translateY(-50%);\n\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n\n    background: rgba(var(--shadow), 0.35);\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: none;\n}\n\n/* Range Highlight */\n.suey-dual-slider-range {\n    position: absolute;\n    top: 50%;\n    height: 0.24em;\n    background-color: rgba(var(--icon), 0.55);\n    transform: translateY(-50%);\n    border: none;\n    border-radius: 0;\n    outline: none;\n}\n\n/* Slider Knobs */\n.suey-dual-slider-knob-holder {\n    position: absolute;\n    left: calc(var(--pixel) * 8);\n    width: calc(100% - (var(--pixel) * 16));\n    height: 100%;\n    background: transparent;\n    border: none;\n    outline: none;\n    user-select: none;\n}\n.suey-dual-slider-knob {\n    position: absolute;\n    top: 50%;\n    width: 1.1em;\n    height: 1.1em;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 100%;\n    cursor: pointer;\n    transform: translate(-50%, -50%);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    z-index: 1;\n}\n.suey-dual-slider-knob:hover,\n.suey-dual-slider-knob:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n    border-color: rgba(var(--shadow), 1.0);\n    z-index: 2;\n}\n.suey-dual-slider-knob:active {\n    z-index: 3;\n}\n\n/********** ELEMENT: <textarea> Text Area **********/\n\n.suey-text-area {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    border: var(--pixel) solid rgba(var(--shadow), 1);\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    padding: var(--pad-x-small) var(--pad-smallish);\n    tab-size: 4;\n    white-space: pre;\n    word-wrap: normal;\n    vertical-align: top;\n}\n\n.suey-text-area:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-text-area:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-text-area::-webkit-scrollbar {\n    height: 0.4em;\n    width: 0.4em;\n    background: rgba(var(--shadow), 0.35);\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n.suey-text-area.success {\n    border-color: #8b8 !important;\n}\n\n.suey-text-area.fail {\n    border-color: #f00 !important;\n    background-color: rgba(255, 0, 0, 0.05);\n}\n\n/********** ELEMENT: <input> Text Box **********/\n\n.suey-text-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.suey-text-box::selection {\n    color: rgba(var(--blacklight), 1);\n    background-color: rgba(var(--icon), 1);\n}\n";
var stylesheet$b="/********** ELEMENT: <input> (number, text, etc) **********/\n\n.suey-input {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.35);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-small);\n    outline: var(--border-micro) solid rgba(var(--shadow), 0.0);\n    padding: var(--pad-x-small) var(--pad-smallish);\n    vertical-align: middle;\n    min-width: 1em;\n    text-align: left;\n}\n\n.suey-input:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-input:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-input.suey-valid-type {\n    color: rgba(var(--text), 1);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    padding-left: var(--pad-medium);\n    text-align: left !important;\n}\n\n.suey-input.suey-invalid-type {\n    color: rgba(var(--text), 0.35);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-yes-drop {\n    color: rgba(var(--valid), 1);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--valid));\n    /* outline: var(--border-micro) solid rgb(var(--valid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-no-drop {\n    color: rgba(var(--invalid), 1.0);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--invalid));\n    /* outline: var(--border-micro) solid rgb(var(--invalid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5);\n    text-align: center !important;\n}\n\n/** Hide Arrow Spinners - Chrome, Safari, Edge, Opera */\n.suey-input::-webkit-outer-spin-button,\n.suey-input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/********** ELEMENT: <button> Button **********/\n\n.suey-button {\n    /* display: flex; */\n    position: relative;\n\n    cursor: pointer;\n    pointer-events: all;\n\n    color: rgba(var(--text-light), 1);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n    outline: var(--border-micro) solid rgba(var(--darklight), 0.0);\n\n    background-color: rgba(var(--button-dark), 0.75);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    font-size: var(--font-size);\n    margin: 0;\n    padding: var(--pad-x-small) var(--pad-medium);\n\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.suey-button:not(.suey-selected):enabled:hover {\n    filter: brightness(1.25);\n}\n\n.suey-button:not(.suey-selected):focus {\n    outline: var(--border-micro) solid rgba(var(--highlight), 0.5);\n}\n\n.suey-button:not(.suey-selected):enabled:active {\n    color: rgba(var(--text-dark), 1);\n    background-color: rgba(var(--background-dark), 0.5);\n    background-image: none;\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button.suey-selected {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom left, rgba(var(--icon-light), 0.20), rgba(var(--icon), 0.20));\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button:disabled {\n    pointer-events: none;\n}\n\n.suey-button:disabled {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Little borderless buttons */\n.suey-borderless-button {\n    user-select: none;\n    border: none;\n    border-radius: var(--radius-large);\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n\n    min-height: 1.5em;\n    min-width: 1.5em;\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:hover {\n    background-image: linear-gradient(to bottom, rgba(var(--white), 0.1), rgba(var(--white), 0.2));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.25);\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:active {\n    background-image: linear-gradient(to bottom, rgba(var(--black), 0.2), rgba(var(--black), 0.1));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--black), 0.5),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.5);\n}\n\n/********** ELEMENT: <input> Checkbox **********/\n\n/* Container */\n.suey-checkbox {\n    background: transparent;\n    display: inline-block;\n    position: relative;\n    justify-content: left;\n    cursor: pointer;\n    margin-left: 0.1em;\n}\n\n/* Native Element (holds checkbox value) */\n.suey-checkbox-input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* Visible Background: Unchecked */\n.suey-checkbox-button {\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    color: rgba(var(--text), 1);\n    background-image: none;\n    background-color: rgba(var(--background-dark), 0.5);\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.35); /* sunk-in-shadow */\n    left: 0;\n    top: 50%;\n    width: 2.0em;\n    height: 1.20em;\n    border-radius: 1.0em;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    transform: translateY(-50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Visible Background: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button {\n    --bg-color-light: var(--icon-light);\n    --bg-color-dark: var(--icon-dark);\n    background-color: rgba(var(--highlight), 0.2);\n    background-image: linear-gradient(to bottom, rgba(var(--bg-color-light), 0.7), rgba(var(--bg-color-dark), 0.7));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Visible Background: Checked & Hover */\n.suey-checkbox-input:checked:hover + .suey-checkbox-button {\n    background-color: rgba(var(--highlight), 0.5);\n}\n\n/* Button: Unchecked */\n.suey-checkbox-button:before {\n    content: '';\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    left: 0.2em;\n    top: 50%;\n    width: 0.65em;\n    height: 0.65em;\n    background-color: rgba(var(--text-light), 0.8);\n    border-radius: 1em;\n    transform: translate(0, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button:before {\n    /* background-color: rgba(var(--highlight), 0.7); */\n    box-shadow: 0px 0px 3px 2px rgba(var(--shadow), 0.5); /* drop shadow */\n    transform: translate(0.75em, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Hover, Unchecked */\n.suey-checkbox-input:hover + .suey-checkbox-button:before {\n    background-color: rgba(var(--highlight), 0.9);\n}\n\n/********** CLASS: Drop down buttons and menus **********/\n\n/** Buttons that drop down a 'select' option list  */\n.suey-dropdown.suey-selected, .suey-dropdown:not(.suey-selected):enabled:active {\n    background-color: rgba(var(--darklight), 1);\n    background-image: none;\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-small) solid rgb(var(--darklight));\n    border-radius: 0;\n}\n\n/** Color input attached to Button */\n.suey-color-input-button {\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.0;\n}\n\n/** Div used for a Dropdown Color Button */\n.suey-drop-color {\n    pointer-events: none;\n    background-color: #ff0000;\n    width: calc(100% - 0.5em);\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n}\n\n/********** CLASS: Drop Arrow (adds a little down arrow on right side of element) **********/\n\n.suey-drop-arrow {\n    padding-right: 1.4em;\n}\n.suey-drop-arrow::after {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    right: 0.65em;\n    top: 50%;\n    transform: translateY(-25%);\n    z-index: 101; /* Drop Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text-light)) transparent transparent transparent;\n    transition: all var(--menu-timing);\n}\n.suey-drop-arrow:hover::after, .suey-drop-arrow.suey-selected::after {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-drop-arrow.suey-selected::after {\n    transform: translateY(-75%) scale(1.0, -1.0);\n}\n\n/********** CLASS: <input> Number **********/\n\n/** Hide Arrow Spinners - Firefox (input[type=number] {}) */\n.suey-number {\n    -moz-appearance: textfield;\n}\n\n.suey-number {\n    font-size: 100%;\n}\n\n.suey-number-holder {\n    position: relative;\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n.suey-number-label-box {\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    padding: 0 var(--pad-smallish);\n    color: rgba(var(--text-dark), 1);\n}\n\n/********** ELEMENT: <input> Slider **********/\n\n.suey-slide-container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n}\n\n.suey-tick-marks {\n    --divides: 10; /* (max - min) / step */\n\n    position: absolute;\n    pointer-events: none;\n\n    width: calc(100% - (var(--pad-large) * 2));\n    height: 0.2em;\n    left: var(--pad-large);\n    top: 1.2em;\n    padding: 0;\n    margin: 0;\n\n    background-image: repeating-linear-gradient(to right,\n        rgba(var(--icon), 0.75) 0 1px, transparent 1px calc((100% - var(--pad-micro)) / var(--divides)));\n}\n\n.suey-slider {\n    --middle: 0.5; /* (value - min) / (max - min) */\n\n    -webkit-appearance: none;\n    position: absolute;\n    width: 98%;\n    padding: 0;\n    height: 0.375em;\n    top: calc(50% - 0.375em);\n\n    background: linear-gradient(to right,\n        rgba(var(--icon), 0.65) 0%, rgba(var(--icon), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--background-dark), 0.5) calc(var(--middle) * 100%), rgba(var(--background-dark), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n\n    cursor: pointer;\n}\n\n.suey-slider:hover, .suey-slider:focus, .suey-slider:active {\n    background: linear-gradient(to right,\n        rgba(var(--icon-light), 0.65) 0%, rgba(var(--icon-light), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--darklight), 0.5) calc(var(--middle) * 100%), rgba(var(--darklight), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n}\n.suey-slider:active {\n    cursor: ew-resize;\n}\n\n/* Safari / Chrome Thumb */\n.suey-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-webkit-slider-thumb:hover, .suey-slider::-webkit-slider-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-webkit-slider-thumb:active { cursor: ew-resize; }\n\n/* Firefox thumb */\n.suey-slider::-moz-range-thumb {\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-moz-range-thumb:hover, .suey-slider::-moz-range-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-moz-range-thumb:active { cursor: ew-resize; }\n\n/********** ELEMENT: <div> SliderBox **********/\n\n.suey-slider-box {\n    display: flex;\n}\n\n/********** ELEMENT <div> Dual / Range Slider *********/\n\n.suey-dual-slider-container {\n    position: relative;\n    overflow: visible;\n    width: 100%;\n    user-select: none;\n}\n\n/* Slider Track */\n.suey-dual-slider-track {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: calc(100% - (var(--pad-x-small) * 2));\n    height: 0.375em;\n    transform: translateY(-50%);\n\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n\n    background: rgba(var(--shadow), 0.35);\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: none;\n}\n\n/* Range Highlight */\n.suey-dual-slider-range {\n    position: absolute;\n    top: 50%;\n    height: 0.24em;\n    background-color: rgba(var(--icon), 0.55);\n    transform: translateY(-50%);\n    border: none;\n    border-radius: 0;\n    outline: none;\n}\n\n/* Slider Knobs */\n.suey-dual-slider-knob-holder {\n    position: absolute;\n    left: calc(var(--pixel) * 8);\n    width: calc(100% - (var(--pixel) * 16));\n    height: 100%;\n    background: transparent;\n    border: none;\n    outline: none;\n    user-select: none;\n}\n.suey-dual-slider-knob {\n    position: absolute;\n    top: 50%;\n    width: 1.1em;\n    height: 1.1em;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 100%;\n    cursor: pointer;\n    transform: translate(-50%, -50%);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    z-index: 1;\n}\n.suey-dual-slider-knob:hover,\n.suey-dual-slider-knob:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n    border-color: rgba(var(--shadow), 1.0);\n    z-index: 2;\n}\n.suey-dual-slider-knob:active {\n    z-index: 3;\n}\n\n/********** ELEMENT: <textarea> Text Area **********/\n\n.suey-text-area {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    border: var(--pixel) solid rgba(var(--shadow), 1);\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    padding: var(--pad-x-small) var(--pad-smallish);\n    tab-size: 4;\n    white-space: pre;\n    word-wrap: normal;\n    vertical-align: top;\n}\n\n.suey-text-area:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-text-area:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-text-area::-webkit-scrollbar {\n    height: 0.4em;\n    width: 0.4em;\n    background: rgba(var(--shadow), 0.35);\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n.suey-text-area.success {\n    border-color: #8b8 !important;\n}\n\n.suey-text-area.fail {\n    border-color: #f00 !important;\n    background-color: rgba(255, 0, 0, 0.05);\n}\n\n/********** ELEMENT: <input> Text Box **********/\n\n.suey-text-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.suey-text-box::selection {\n    color: rgba(var(--blacklight), 1);\n    background-color: rgba(var(--icon), 1);\n}\n";
styleInject(css_248z$b);

var css_248z$a = "/********** Absolute Box **********/\n\n.suey-absolute-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n    justify-content: center;\n    text-align: center;\n}\n\n/********** Asset Box / Asset Box Icon Only **********/\n\n.suey-asset-box {\n    position: relative;\n    display: flex;\n    cursor: pointer;\n\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    margin: var(--pad-x-small);\n    vertical-align: middle;\n\n    outline: none; /* for macos */\n}\n\n.suey-asset-box-selectable:hover {\n    background-color: rgba(var(--highlight), 0.15);\n    border: var(--border-small) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n}\n\n.suey-asset-box-selectable:active, .suey-asset-box-selectable:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    border: var(--border-small) solid rgba(var(--icon-light), 1);\n    border-radius: 0;\n}\n\n.suey-asset-box-selectable:focus > *, .suey-asset-box-selectable:active > * {\n    filter: brightness(100%);\n}\n\n.suey-asset-box-selectable:hover > * {\n    filter: brightness(150%);\n}\n\n.suey-asset-box-mini {\n    /* Minimum Icon Size: */\n    min-width: var(--asset-size);\n    min-height: var(--asset-size);\n}\n\n.suey-asset-box-row {\n    width: 100%;\n    min-height: 2em;\n    padding: var(--pad-x-small);\n}\n\n.suey-asset-box-icon {\n    position: relative;\n    min-width: var(--row-height);\n    height: 100%;\n}\n\n.suey-asset-box-text {\n    position: relative;\n    width: calc(100% - var(--row-height));\n    margin: auto;\n    margin-left: 0.25em;\n    white-space: nowrap;\n}\n\n.suey-asset-box-combo {\n    overflow: hidden;\n    position: relative;\n}\n.suey-asset-box-combo:hover {\n    overflow: visible;\n}\n.suey-asset-box-label {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%) scale(75%);\n}\n\n/********** Flex Box **********/\n\n.suey-flex-box {\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/********** Row **********/\n\n.suey-row {\n    padding: var(--pad-micro) var(--border-small);\n    margin: 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    vertical-align: middle;\n}\n\n/********** Shadow Box **********/\n\n.suey-shadow-box { /* affects Toolbar icons! */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n    height: 80%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n\n.suey-shadow-box.suey-full-size {\n    width: 100%;\n    height: 100%;\n}\n\n.suey-shadow-box.suey-drop-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-shadow-box.suey-even-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n/********** Vector Box **********/\n\n.suey-vector-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n";
var stylesheet$a="/********** Absolute Box **********/\n\n.suey-absolute-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n    justify-content: center;\n    text-align: center;\n}\n\n/********** Asset Box / Asset Box Icon Only **********/\n\n.suey-asset-box {\n    position: relative;\n    display: flex;\n    cursor: pointer;\n\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    margin: var(--pad-x-small);\n    vertical-align: middle;\n\n    outline: none; /* for macos */\n}\n\n.suey-asset-box-selectable:hover {\n    background-color: rgba(var(--highlight), 0.15);\n    border: var(--border-small) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n}\n\n.suey-asset-box-selectable:active, .suey-asset-box-selectable:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    border: var(--border-small) solid rgba(var(--icon-light), 1);\n    border-radius: 0;\n}\n\n.suey-asset-box-selectable:focus > *, .suey-asset-box-selectable:active > * {\n    filter: brightness(100%);\n}\n\n.suey-asset-box-selectable:hover > * {\n    filter: brightness(150%);\n}\n\n.suey-asset-box-mini {\n    /* Minimum Icon Size: */\n    min-width: var(--asset-size);\n    min-height: var(--asset-size);\n}\n\n.suey-asset-box-row {\n    width: 100%;\n    min-height: 2em;\n    padding: var(--pad-x-small);\n}\n\n.suey-asset-box-icon {\n    position: relative;\n    min-width: var(--row-height);\n    height: 100%;\n}\n\n.suey-asset-box-text {\n    position: relative;\n    width: calc(100% - var(--row-height));\n    margin: auto;\n    margin-left: 0.25em;\n    white-space: nowrap;\n}\n\n.suey-asset-box-combo {\n    overflow: hidden;\n    position: relative;\n}\n.suey-asset-box-combo:hover {\n    overflow: visible;\n}\n.suey-asset-box-label {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%) scale(75%);\n}\n\n/********** Flex Box **********/\n\n.suey-flex-box {\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/********** Row **********/\n\n.suey-row {\n    padding: var(--pad-micro) var(--border-small);\n    margin: 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    vertical-align: middle;\n}\n\n/********** Shadow Box **********/\n\n.suey-shadow-box { /* affects Toolbar icons! */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n    height: 80%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n\n.suey-shadow-box.suey-full-size {\n    width: 100%;\n    height: 100%;\n}\n\n.suey-shadow-box.suey-drop-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-shadow-box.suey-even-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n/********** Vector Box **********/\n\n.suey-vector-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n";
styleInject(css_248z$a);

var css_248z$9 = "/********** Menu Show (Show menu that was previously hidden) **********/\n\n.suey-menu.suey-menu-show {\n    pointer-events: auto;\n    opacity: 1.0;\n    transform: translate(0, 0) scale(1.0, 1.0);\n}\n\n.suey-menu.suey-menu-show.suey-menu-under {\n    left: 50%;\n    top: 100%;\n    transform: translate(-50%, 0) scale(1.0, 1.0);\n}\n\n/********** Menu **********/\n\n/* Normal Menu Styling */\n.suey-menu {\n    position: absolute;\n    display: block;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-light), 1);\n    box-shadow:\n        inset 0px 1px 2px 0px rgba(var(--midlight), 1.0),\n             -2px 2px 2px 0px rgba(var(--shadow), 0.5),\n              2px 0px 2px 0px rgba(var(--shadow), 0.5);\n    /* border: 1px solid rgba(var(--shadow), 1.0); */\n    border: 2px solid rgba(var(--icon), 1.0);\n    border-radius: var(--radius-large);\n    /* outline: 1px solid rgba(var(--background-light), calc(var(--panel-transparency) * 0.5)); */\n    outline: none;\n\n    min-width: 1.0em;\n    z-index: 1000; /* Menu */\n    opacity: 0;\n    padding: var(--pad-x-small);\n    margin: 0;\n    pointer-events: none;\n\n    transform: translate(0, 0) scale(1.0, 0.0);\n\n    /* To enable menu transitions use menu timing variable */\n    transition: all 0s; /* var(--menu-timing) */\n}\n\n.suey-border-icon {\n    border: 2px solid rgba(var(--complement), 1.0);\n}\n\n.suey-menu-under {\n    transition: opacity 0.2s ease-in-out;\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-down {\n    transform: translate(0, -50%) scale(1.0, 0.0);\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-up {\n    transform: translate(0, 50%) scale(1.0, 0.0);\n}\n\n/* Dropdown Menu Styling */\n.suey-select-menu, .suey-popup-menu {\n    box-shadow: none;\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: 1px solid rgb(var(--icon));\n    border-radius: 0px;\n    outline: 2px solid rgb(var(--darklight));\n    z-index: 1000; /* Select Menu */\n}\n\n/* Menu Item */\n.suey-menu-item {\n    position: relative;\n    display: block;\n\n    color: rgba(var(--text), 1);\n    cursor: pointer;\n\n    border: 1px solid transparent;\n    border-radius: calc(var(--radius-small) * 0.75);\n\n    margin: var(--pad-x-small);\n    white-space: nowrap;\n}\n\n/* Hover Item */\n.suey-menu:not(.suey-invisible-menu) .suey-menu-item:not(.suey-disabled):hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--icon-light), 0.1);\n    border: 1px solid rgba(var(--icon-light), 0.3);\n    border-radius: calc(var(--radius-small) * 0.75);\n}\n\n/* Image */\n.suey-menu-icon {\n    --menu-icon-size:   1.45em;\n\n    position: relative;\n    flex: 0 0 auto;\n    height: var(--menu-icon-size);\n    width: var(--menu-icon-size);\n    filter: var(--drop-shadow);\n    overflow: hidden;\n}\n\n/* Text */\n.suey-menu-text {\n    user-select: none;\n    margin-left: 7px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* Shortcut Key */\n.suey-menu-shortcut {\n    /*\n    System Font Info:\n    https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage\n    https://furbo.org/2018/03/28/system-fonts-in-css/\n    https://css-tricks.com/snippets/css/system-font-stack/\n    */\n    display: flex;\n    filter: contrast(75%) grayscale(100%);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    opacity: 0.5;\n    padding-left: 2.0em;\n}\n\n.suey-menu-shortcut-character {\n    /* background-color: blueviolet; */\n    /* border: solid 1px; */\n    text-align: center;\n    margin: auto;\n}\n\n/* Separator */\n.suey-menu-separator {\n    pointer-events: none;\n    border-top: 1px solid rgba(var(--midlight), 0.5);\n    border-radius: 1px;\n    height: 1px;\n    margin: var(--pad-medium) var(--pad-large);\n}\n\n/* Little Arrow */\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item::after {\n    content: '';\n    position: absolute;\n    right: 0.50em;\n    top: 50%;\n    transform: translateY(-50%);\n    border: var(--arrow-size) solid transparent;\n    border-left-color: rgba(var(--text), 1.0);\n}\n\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item:hover::after {\n    border-left-color: rgba(var(--highlight), 1.0);\n}\n\n/* Sub Menu */\n.suey-menu-item .suey-menu {\n    top:  0px;\n    left: 101%;\n}\n\n/* Sub Menu Mouse Triangle */\n.suey-menu-mouse-triangle {\n    position: absolute;\n}\n\n/***** Invisible Hover Menu *****/\n\n.suey-invisible-menu, .suey-invisible-menu-item {\n    color: transparent;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n}\n\n.suey-invisible-menu-item {\n    margin: 0;\n}\n\n/************ Toolbar Button **********/\n\n.suey-toolbar-button {\n    display: flex;\n    cursor: pointer;\n    background-color: transparent !important;\n    border: none;\n    border-radius: var(--radius-large);\n    outline: none;\n    position: relative;\n    height: var(--button-size);\n    width: var(--button-size);\n    min-height: var(--button-size);\n    min-width: var(--button-size);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    opacity: 1.0;\n    overflow: hidden;\n}\n\n/* Background */\n.suey-button-background {\n    pointer-events: none;\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: 0;\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.6), rgba(var(--icon), 0.6));\n    border-radius: var(--radius-large);\n    border: none;\n    outline: none;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n    z-index: -1;\n}\n\n/* Hover */\n.suey-toolbar-button:not(.suey-selected):enabled:hover > .suey-button-background {\n    filter: brightness(125%);\n    box-shadow: /* pop-out-shadow */\n        inset var(--pixel) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.15);\n}\n\n/* Active / Selected */\n.suey-toolbar-button:not(.suey-selected):enabled:active,\n.suey-toolbar-button.suey-selected:enabled {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5); /* sunk-in-shadow */\n}\n.suey-toolbar-button:not(.suey-selected):enabled:active > .suey-button-background,\n.suey-toolbar-button.suey-selected:enabled > .suey-button-background {\n    filter: brightness(50%) grayscale(20%);\n}\n\n/* Hover Active */\n.suey-hover-active {\n    overflow: visible;\n}\n.suey-hover-active:hover, .suey-hover-active:active {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5) !important; /* sunk-in-shadow */\n}\n.suey-hover-active:hover > .suey-button-background,\n.suey-hover-active:active > .suey-button-background {\n    filter: brightness(50%) grayscale(20%) !important;\n}\n\n/* Disabled Button */\n.suey-toolbar-button:disabled {\n    background-color: rgba(var(--button-dark), var(--panel-transparency));\n    box-shadow: none;\n}\n.suey-toolbar-button:disabled {\n    filter: none;\n}\n.suey-toolbar-button:disabled > * {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Left / Middle / Right */\n.suey-button-left, .suey-button-left > .suey-button-background {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    margin-right: 0;\n}\n.suey-button-middle, .suey-button-middle > .suey-button-background {\n    border-radius: 0;\n    margin-right: 0;\n    margin-left: 0;\n}\n.suey-button-right, .suey-button-right > .suey-button-background {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n}\n\n.suey-button-left > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n}\n.suey-button-middle > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n.suey-button-right > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n\n/********** Toolbar Separator / Toolbar Spacer **********/\n\n.suey-toolbar-separator {\n    border-left: solid var(--border-micro) rgba(var(--shadow), 0.50);\n    border-right: solid var(--border-micro) rgba(var(--shadow), 0.15);\n    border-top: 0;\n    border-bottom: 0;\n    width: var(--pad-micro);\n    height: calc(var(--button-size) - 1.25ch);\n    margin-left: var(--pad-medium);\n    margin-right: var(--pad-medium);\n    margin-top: var(--pad-small);\n}\n\n.suey-toolbar-spacer {\n    pointer-events: none;\n    border: none;\n    margin: none;\n    width: 1em;\n    height: var(--button-size);\n}\n\n.suey-toolbar-spacer.vertical {\n    width: var(--button-size);\n    height: 1em;\n}\n";
var stylesheet$9="/********** Menu Show (Show menu that was previously hidden) **********/\n\n.suey-menu.suey-menu-show {\n    pointer-events: auto;\n    opacity: 1.0;\n    transform: translate(0, 0) scale(1.0, 1.0);\n}\n\n.suey-menu.suey-menu-show.suey-menu-under {\n    left: 50%;\n    top: 100%;\n    transform: translate(-50%, 0) scale(1.0, 1.0);\n}\n\n/********** Menu **********/\n\n/* Normal Menu Styling */\n.suey-menu {\n    position: absolute;\n    display: block;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-light), 1);\n    box-shadow:\n        inset 0px 1px 2px 0px rgba(var(--midlight), 1.0),\n             -2px 2px 2px 0px rgba(var(--shadow), 0.5),\n              2px 0px 2px 0px rgba(var(--shadow), 0.5);\n    /* border: 1px solid rgba(var(--shadow), 1.0); */\n    border: 2px solid rgba(var(--icon), 1.0);\n    border-radius: var(--radius-large);\n    /* outline: 1px solid rgba(var(--background-light), calc(var(--panel-transparency) * 0.5)); */\n    outline: none;\n\n    min-width: 1.0em;\n    z-index: 1000; /* Menu */\n    opacity: 0;\n    padding: var(--pad-x-small);\n    margin: 0;\n    pointer-events: none;\n\n    transform: translate(0, 0) scale(1.0, 0.0);\n\n    /* To enable menu transitions use menu timing variable */\n    transition: all 0s; /* var(--menu-timing) */\n}\n\n.suey-border-icon {\n    border: 2px solid rgba(var(--complement), 1.0);\n}\n\n.suey-menu-under {\n    transition: opacity 0.2s ease-in-out;\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-down {\n    transform: translate(0, -50%) scale(1.0, 0.0);\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-up {\n    transform: translate(0, 50%) scale(1.0, 0.0);\n}\n\n/* Dropdown Menu Styling */\n.suey-select-menu, .suey-popup-menu {\n    box-shadow: none;\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: 1px solid rgb(var(--icon));\n    border-radius: 0px;\n    outline: 2px solid rgb(var(--darklight));\n    z-index: 1000; /* Select Menu */\n}\n\n/* Menu Item */\n.suey-menu-item {\n    position: relative;\n    display: block;\n\n    color: rgba(var(--text), 1);\n    cursor: pointer;\n\n    border: 1px solid transparent;\n    border-radius: calc(var(--radius-small) * 0.75);\n\n    margin: var(--pad-x-small);\n    white-space: nowrap;\n}\n\n/* Hover Item */\n.suey-menu:not(.suey-invisible-menu) .suey-menu-item:not(.suey-disabled):hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--icon-light), 0.1);\n    border: 1px solid rgba(var(--icon-light), 0.3);\n    border-radius: calc(var(--radius-small) * 0.75);\n}\n\n/* Image */\n.suey-menu-icon {\n    --menu-icon-size:   1.45em;\n\n    position: relative;\n    flex: 0 0 auto;\n    height: var(--menu-icon-size);\n    width: var(--menu-icon-size);\n    filter: var(--drop-shadow);\n    overflow: hidden;\n}\n\n/* Text */\n.suey-menu-text {\n    user-select: none;\n    margin-left: 7px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* Shortcut Key */\n.suey-menu-shortcut {\n    /*\n    System Font Info:\n    https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage\n    https://furbo.org/2018/03/28/system-fonts-in-css/\n    https://css-tricks.com/snippets/css/system-font-stack/\n    */\n    display: flex;\n    filter: contrast(75%) grayscale(100%);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    opacity: 0.5;\n    padding-left: 2.0em;\n}\n\n.suey-menu-shortcut-character {\n    /* background-color: blueviolet; */\n    /* border: solid 1px; */\n    text-align: center;\n    margin: auto;\n}\n\n/* Separator */\n.suey-menu-separator {\n    pointer-events: none;\n    border-top: 1px solid rgba(var(--midlight), 0.5);\n    border-radius: 1px;\n    height: 1px;\n    margin: var(--pad-medium) var(--pad-large);\n}\n\n/* Little Arrow */\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item::after {\n    content: '';\n    position: absolute;\n    right: 0.50em;\n    top: 50%;\n    transform: translateY(-50%);\n    border: var(--arrow-size) solid transparent;\n    border-left-color: rgba(var(--text), 1.0);\n}\n\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item:hover::after {\n    border-left-color: rgba(var(--highlight), 1.0);\n}\n\n/* Sub Menu */\n.suey-menu-item .suey-menu {\n    top:  0px;\n    left: 101%;\n}\n\n/* Sub Menu Mouse Triangle */\n.suey-menu-mouse-triangle {\n    position: absolute;\n}\n\n/***** Invisible Hover Menu *****/\n\n.suey-invisible-menu, .suey-invisible-menu-item {\n    color: transparent;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n}\n\n.suey-invisible-menu-item {\n    margin: 0;\n}\n\n/************ Toolbar Button **********/\n\n.suey-toolbar-button {\n    display: flex;\n    cursor: pointer;\n    background-color: transparent !important;\n    border: none;\n    border-radius: var(--radius-large);\n    outline: none;\n    position: relative;\n    height: var(--button-size);\n    width: var(--button-size);\n    min-height: var(--button-size);\n    min-width: var(--button-size);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    opacity: 1.0;\n    overflow: hidden;\n}\n\n/* Background */\n.suey-button-background {\n    pointer-events: none;\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: 0;\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.6), rgba(var(--icon), 0.6));\n    border-radius: var(--radius-large);\n    border: none;\n    outline: none;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n    z-index: -1;\n}\n\n/* Hover */\n.suey-toolbar-button:not(.suey-selected):enabled:hover > .suey-button-background {\n    filter: brightness(125%);\n    box-shadow: /* pop-out-shadow */\n        inset var(--pixel) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.15);\n}\n\n/* Active / Selected */\n.suey-toolbar-button:not(.suey-selected):enabled:active,\n.suey-toolbar-button.suey-selected:enabled {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5); /* sunk-in-shadow */\n}\n.suey-toolbar-button:not(.suey-selected):enabled:active > .suey-button-background,\n.suey-toolbar-button.suey-selected:enabled > .suey-button-background {\n    filter: brightness(50%) grayscale(20%);\n}\n\n/* Hover Active */\n.suey-hover-active {\n    overflow: visible;\n}\n.suey-hover-active:hover, .suey-hover-active:active {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5) !important; /* sunk-in-shadow */\n}\n.suey-hover-active:hover > .suey-button-background,\n.suey-hover-active:active > .suey-button-background {\n    filter: brightness(50%) grayscale(20%) !important;\n}\n\n/* Disabled Button */\n.suey-toolbar-button:disabled {\n    background-color: rgba(var(--button-dark), var(--panel-transparency));\n    box-shadow: none;\n}\n.suey-toolbar-button:disabled {\n    filter: none;\n}\n.suey-toolbar-button:disabled > * {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Left / Middle / Right */\n.suey-button-left, .suey-button-left > .suey-button-background {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    margin-right: 0;\n}\n.suey-button-middle, .suey-button-middle > .suey-button-background {\n    border-radius: 0;\n    margin-right: 0;\n    margin-left: 0;\n}\n.suey-button-right, .suey-button-right > .suey-button-background {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n}\n\n.suey-button-left > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n}\n.suey-button-middle > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n.suey-button-right > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n\n/********** Toolbar Separator / Toolbar Spacer **********/\n\n.suey-toolbar-separator {\n    border-left: solid var(--border-micro) rgba(var(--shadow), 0.50);\n    border-right: solid var(--border-micro) rgba(var(--shadow), 0.15);\n    border-top: 0;\n    border-bottom: 0;\n    width: var(--pad-micro);\n    height: calc(var(--button-size) - 1.25ch);\n    margin-left: var(--pad-medium);\n    margin-right: var(--pad-medium);\n    margin-top: var(--pad-small);\n}\n\n.suey-toolbar-spacer {\n    pointer-events: none;\n    border: none;\n    margin: none;\n    width: 1em;\n    height: var(--button-size);\n}\n\n.suey-toolbar-spacer.vertical {\n    width: var(--button-size);\n    height: 1em;\n}\n";
styleInject(css_248z$9);

var css_248z$8 = "/********** Panel (simple / fancy) **********/\n\n.suey-panel {\n    pointer-events: auto;\n    position: relative;\n    overflow: visible;\n    outline: none; /* for macos */\n    z-index: 0; /* Panel */\n}\n\n.suey-panel-simple {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    margin: calc(var(--edge-thickness) + var(--pad-x-small));\n}\n\n.suey-panel-fancy-outer {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n    --border-radius-outer:  0.71429em;      /* 10px @ font size 1.4em (14px) */\n\n    height: 100%;\n\n    background-color: rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n    border-radius: var(--border-radius-outer);\n    box-shadow: 0px 0px 5px 1px rgba(var(--shadow), 0.25);\n    padding: var(--edge-thickness); /* outside of border padding */\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.suey-panel-fancy-border {\n    height: 100%;\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    padding: var(--pad-x-small);\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.suey-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--button-light));\n}\n.suey-window.suey-active-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--icon));\n}\n\n.suey-panel-fancy-inside {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(var(--icon-light), calc(var(--panel-transparency) * 0.05));\n    border-radius: var(--radius-small);\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/********** Scroller ********/\n\n.suey-scroller {\n    overflow: auto;\n}\n\n/********** Shrinkable **********/\n\n.suey-shrinkable {\n    background-color: transparent;\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-large);\n    margin: var(--pad-micro);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    overflow: visible;\n}\n.suey-shrinkable.suey-borderless-panel {\n    border: solid var(--border-small) transparent;\n    border-top: none;\n    margin-bottom: 0;\n    padding-top: 0.1em;\n    box-shadow: none;\n}\n\n/* Shrinkable Title Div */\n.suey-shrink-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    min-height: calc(var(--row-height));\n    overflow: hidden;\n\n    cursor: default;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border-bottom: solid var(--border-micro) transparent;\n    border-top: solid var(--border-micro) transparent;\n    border-top-left-radius: var(--radius-small);\n    border-top-right-radius: var(--radius-small);\n    padding: 0 var(--pad-medium); /* vertical horizontal */\n}\n.suey-shrink-title:hover {\n    color: rgba(var(--highlight), 1.0)\n}\n.suey-shrinkable:not(.suey-expanded) .suey-shrink-title {\n    border-radius: var(--radius-small);\n}\n.suey-shrinkable.suey-borderless-panel .suey-shrink-title {\n    outline: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n\n/* Title Icon */\n.suey-shrink-icon > * {\n    filter: var(--drop-shadow);\n}\n.suey-shrink-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n}\n.suey-shrink-icon.suey-has-icon {\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n/* Title Text */\n.suey-shrink-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    padding-left: 0.2em;\n}\n\n/* Title Arrow */\n.suey-shrink-arrow {\n    flex-grow: 0;\n    flex-shrink: 1;\n\n    position: relative;\n    content: '';\n    margin: 0 0.35em; /* vertical horizontal */\n    width: 0;\n    height: 0;\n    transform: translateX(25%);\n    z-index: 101; /* Shrink Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: transparent transparent transparent rgba(var(--text));\n    transition: transform var(--menu-timing);\n}\n.suey-shrink-arrow-clicker {\n    position: absolute;\n    content: '';\n    width: 1.7em;\n    height: 1.7em;\n    left: calc(1.7em * -0.5);\n    top: calc(1.7em * -0.5);\n    cursor: pointer;\n}\n.suey-shrinkable.suey-expanded .suey-shrink-title .suey-shrink-arrow {\n    transform: rotate(90deg) translateX(25%);\n}\n.suey-shrink-title:hover .suey-shrink-arrow {\n    border-color: transparent transparent transparent rgba(var(--highlight));\n}\n\n/* Shrinkable Body Div */\n.suey-shrink-body {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    border-bottom-left-radius: var(--radius-small);\n    border-bottom-right-radius: var(--radius-small);\n    padding: var(--pad-small) 0;\n    overflow: hidden;\n    pointer-events: auto;\n}\n.suey-shrinkable.suey-borderless-panel .suey-shrink-body {\n    padding-bottom: 0;\n}\n.suey-shrinkable:not(.suey-expanded) .suey-shrink-body {\n    pointer-events: none;\n    display: none;\n}\n.suey-shrinkable.suey-expanded:not(.suey-borderless-panel) .suey-shrink-body {\n    border-top: solid var(--border-small) rgba(var(--shadow), 0.25);\n}\n\n/********** Titled **********/\n\n.suey-titled {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n}\n\n.suey-title-arrow {\n    position: absolute;\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    transform: translateY(-25%) scale(1.0, -1.0);\n    border: 0.5em solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform var(--menu-timing);\n}\n.suey-title-arrow-click {\n    position: absolute;\n    cursor: pointer;\n    content: '';\n    pointer-events: all;\n    width: 2em;\n    height: 2em;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0.25em;\n    z-index: 101; /* Title Arrow */\n}\n.suey-title-arrow-click:hover .suey-title-arrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-titled.suey-expanded .suey-tab-title .suey-title-arrow {\n    transform: translateY(25%);\n}\n\n/* Title Bar Class for top of Title Panel */\n.suey-tab-title {\n    --font-size-increase:   1.3;\n\n    position: relative;\n    display: flex;\n    flex-shrink: 0; /* don't allow title to shrink */\n    color: rgba(var(--text-light), 1);\n    background-color: transparent;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border: 0;\n    border-radius: calc(var(--radius-small) / var(--font-size-increase));\n    outline: solid calc(var(--border-small) / var(--font-size-increase)) rgba(var(--shadow), 0.25);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: calc(var(--minus) * var(--font-size-increase)) calc(var(--pixel) * var(--font-size-increase)) rgba(var(--shadow), 0.5);\n    text-align: center;\n    overflow: hidden;\n\n    font-size: calc(100% * var(--font-size-increase));\n    margin: var(--pad-x-small);\n    justify-content: center;\n    align-items: center;\n    min-height: 1.867em;\n}\n.suey-tab-title-text {\n    user-select: none;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    font-size: 100%;\n}\n.suey-tab-title-text::selection {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--blacklight), 1);\n}\n";
var stylesheet$8="/********** Panel (simple / fancy) **********/\n\n.suey-panel {\n    pointer-events: auto;\n    position: relative;\n    overflow: visible;\n    outline: none; /* for macos */\n    z-index: 0; /* Panel */\n}\n\n.suey-panel-simple {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    margin: calc(var(--edge-thickness) + var(--pad-x-small));\n}\n\n.suey-panel-fancy-outer {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n    --border-radius-outer:  0.71429em;      /* 10px @ font size 1.4em (14px) */\n\n    height: 100%;\n\n    background-color: rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n    border-radius: var(--border-radius-outer);\n    box-shadow: 0px 0px 5px 1px rgba(var(--shadow), 0.25);\n    padding: var(--edge-thickness); /* outside of border padding */\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.suey-panel-fancy-border {\n    height: 100%;\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    padding: var(--pad-x-small);\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.suey-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--button-light));\n}\n.suey-window.suey-active-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--icon));\n}\n\n.suey-panel-fancy-inside {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(var(--icon-light), calc(var(--panel-transparency) * 0.05));\n    border-radius: var(--radius-small);\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/********** Scroller ********/\n\n.suey-scroller {\n    overflow: auto;\n}\n\n/********** Shrinkable **********/\n\n.suey-shrinkable {\n    background-color: transparent;\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-large);\n    margin: var(--pad-micro);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    overflow: visible;\n}\n.suey-shrinkable.suey-borderless-panel {\n    border: solid var(--border-small) transparent;\n    border-top: none;\n    margin-bottom: 0;\n    padding-top: 0.1em;\n    box-shadow: none;\n}\n\n/* Shrinkable Title Div */\n.suey-shrink-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    min-height: calc(var(--row-height));\n    overflow: hidden;\n\n    cursor: default;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border-bottom: solid var(--border-micro) transparent;\n    border-top: solid var(--border-micro) transparent;\n    border-top-left-radius: var(--radius-small);\n    border-top-right-radius: var(--radius-small);\n    padding: 0 var(--pad-medium); /* vertical horizontal */\n}\n.suey-shrink-title:hover {\n    color: rgba(var(--highlight), 1.0)\n}\n.suey-shrinkable:not(.suey-expanded) .suey-shrink-title {\n    border-radius: var(--radius-small);\n}\n.suey-shrinkable.suey-borderless-panel .suey-shrink-title {\n    outline: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n\n/* Title Icon */\n.suey-shrink-icon > * {\n    filter: var(--drop-shadow);\n}\n.suey-shrink-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n}\n.suey-shrink-icon.suey-has-icon {\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n/* Title Text */\n.suey-shrink-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    padding-left: 0.2em;\n}\n\n/* Title Arrow */\n.suey-shrink-arrow {\n    flex-grow: 0;\n    flex-shrink: 1;\n\n    position: relative;\n    content: '';\n    margin: 0 0.35em; /* vertical horizontal */\n    width: 0;\n    height: 0;\n    transform: translateX(25%);\n    z-index: 101; /* Shrink Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: transparent transparent transparent rgba(var(--text));\n    transition: transform var(--menu-timing);\n}\n.suey-shrink-arrow-clicker {\n    position: absolute;\n    content: '';\n    width: 1.7em;\n    height: 1.7em;\n    left: calc(1.7em * -0.5);\n    top: calc(1.7em * -0.5);\n    cursor: pointer;\n}\n.suey-shrinkable.suey-expanded .suey-shrink-title .suey-shrink-arrow {\n    transform: rotate(90deg) translateX(25%);\n}\n.suey-shrink-title:hover .suey-shrink-arrow {\n    border-color: transparent transparent transparent rgba(var(--highlight));\n}\n\n/* Shrinkable Body Div */\n.suey-shrink-body {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    border-bottom-left-radius: var(--radius-small);\n    border-bottom-right-radius: var(--radius-small);\n    padding: var(--pad-small) 0;\n    overflow: hidden;\n    pointer-events: auto;\n}\n.suey-shrinkable.suey-borderless-panel .suey-shrink-body {\n    padding-bottom: 0;\n}\n.suey-shrinkable:not(.suey-expanded) .suey-shrink-body {\n    pointer-events: none;\n    display: none;\n}\n.suey-shrinkable.suey-expanded:not(.suey-borderless-panel) .suey-shrink-body {\n    border-top: solid var(--border-small) rgba(var(--shadow), 0.25);\n}\n\n/********** Titled **********/\n\n.suey-titled {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n}\n\n.suey-title-arrow {\n    position: absolute;\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    transform: translateY(-25%) scale(1.0, -1.0);\n    border: 0.5em solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform var(--menu-timing);\n}\n.suey-title-arrow-click {\n    position: absolute;\n    cursor: pointer;\n    content: '';\n    pointer-events: all;\n    width: 2em;\n    height: 2em;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0.25em;\n    z-index: 101; /* Title Arrow */\n}\n.suey-title-arrow-click:hover .suey-title-arrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-titled.suey-expanded .suey-tab-title .suey-title-arrow {\n    transform: translateY(25%);\n}\n\n/* Title Bar Class for top of Title Panel */\n.suey-tab-title {\n    --font-size-increase:   1.3;\n\n    position: relative;\n    display: flex;\n    flex-shrink: 0; /* don't allow title to shrink */\n    color: rgba(var(--text-light), 1);\n    background-color: transparent;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border: 0;\n    border-radius: calc(var(--radius-small) / var(--font-size-increase));\n    outline: solid calc(var(--border-small) / var(--font-size-increase)) rgba(var(--shadow), 0.25);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: calc(var(--minus) * var(--font-size-increase)) calc(var(--pixel) * var(--font-size-increase)) rgba(var(--shadow), 0.5);\n    text-align: center;\n    overflow: hidden;\n\n    font-size: calc(100% * var(--font-size-increase));\n    margin: var(--pad-x-small);\n    justify-content: center;\n    align-items: center;\n    min-height: 1.867em;\n}\n.suey-tab-title-text {\n    user-select: none;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    font-size: 100%;\n}\n.suey-tab-title-text::selection {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--blacklight), 1);\n}\n";
styleInject(css_248z$8);

var css_248z$7 = "/***** Question *****/\n\n.suey-question {\n    position: fixed;\n    display: flex;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 100001; /* question */\n}\n\n.suey-screen-blackout {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(var(--background-dark), 0.75);\n    z-index: 100000; /* blackout */\n}\n\n.suey-question-left {\n    user-select: none;\n    position: relative;\n    width: 5em;\n    min-height: 5em;\n    margin: 1.5em;\n}\n\n.suey-question-right {\n    position: relative;\n    flex-direction: column;\n    display: flex;\n    min-width: 16em;\n    min-height: 5em;\n}\n\n.suey-question-top {\n    position: relative;\n    display: flex;\n    flex: 1 1 auto;\n    min-height: 3em;\n    margin-top: 0.5em;\n    text-align: center;\n}\n\n.suey-question-bottom {\n    position: relative;\n    display: flex;\n    height: 2em;\n    margin: 0.5em;\n}\n";
var stylesheet$7="/***** Question *****/\n\n.suey-question {\n    position: fixed;\n    display: flex;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 100001; /* question */\n}\n\n.suey-screen-blackout {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(var(--background-dark), 0.75);\n    z-index: 100000; /* blackout */\n}\n\n.suey-question-left {\n    user-select: none;\n    position: relative;\n    width: 5em;\n    min-height: 5em;\n    margin: 1.5em;\n}\n\n.suey-question-right {\n    position: relative;\n    flex-direction: column;\n    display: flex;\n    min-width: 16em;\n    min-height: 5em;\n}\n\n.suey-question-top {\n    position: relative;\n    display: flex;\n    flex: 1 1 auto;\n    min-height: 3em;\n    margin-top: 0.5em;\n    text-align: center;\n}\n\n.suey-question-bottom {\n    position: relative;\n    display: flex;\n    height: 2em;\n    margin: 0.5em;\n}\n";
styleInject(css_248z$7);

var css_248z$6 = "/********** Main Window **********/\n\n.suey-main-window {\n    user-select: none;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.suey-window-holder {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    pointer-events: none;\n}\n\n/********** Abstract Dock **********/\n\n.suey-dock {\n    position: relative;\n}\n\n/********** Docker **********/\n\n.suey-docker {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    min-width: 8em;\n    min-height: 8em;\n    max-width: 100%;\n    max-height: 100%;\n    pointer-events: none;\n}\n\n.suey-docker.suey-docker-primary {\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    overflow: visible;\n}\n\n.suey-docker-vertical {\n    height: 100%;\n}\n\n.suey-docker-horizontal {\n    width: 100%;\n}\n\n.suey-dock-drag .suey-docker {\n    pointer-events: all !important;\n}\n\n/***** Collapsed Docks */\n\n.suey-docker.suey-collapsed {\n    min-width: calc(var(--tab-size) * 1) !important;\n    min-height: calc(var(--tab-size) * 1) !important;\n}\n\n.suey-collapsed .suey-corner-button {\n    display: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-panel-simple,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-outer,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-border,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-inside {\n    background-color: transparent !important;\n    border-color: transparent !important;\n    outline: none !important;\n    box-shadow: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-tab-floaters * {\n    opacity: 0 !important;\n    user-select: none !important;\n    pointer-events: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-left-side { top: 0; right: 0; left: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-right-side { top: 0; left: 0; right: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-top-side { left: 0; bottom: 0; top: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-bottom-side { left: 0; top: 0; bottom: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-button {\n    margin: 0 !important;\n}\n\n.suey-collapsed .suey-tabbed .suey-resizer {\n    pointer-events: none !important;\n    display: none !important;\n}\n\n/***** Dock Locations */\n\n.suey-dock-locations {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.suey-dock-location {\n    --size: 2em;\n    position: absolute;\n    opacity: 0.0;\n}\n.suey-dock-left   { left:  0; top:    0; width:  20%; height: 100%; }\n.suey-dock-right  { right: 0; top:    0; width:  20%; height: 100%; }\n.suey-dock-top    { left:  0; top:    0; width: 100%; height:  25%; }\n.suey-dock-bottom { left:  0; bottom: 0; width: 100%; height:  25%; }\n.suey-dock-center { left: 20%; top: 20%; width:  60%; height:  60%; }\n\n.suey-dock-middle-vertical   { left: var(--size); top:   0; height: 100%; width:  calc(100% - (var(--size) * 2)); }\n.suey-dock-middle-horizontal { left:   0; top: var(--size); width:  100%; height: calc(100% - (var(--size) * 2)); }\n.suey-dock-split-left   { left:  0; top:    0; width:  var(--size); height: 100%; }\n.suey-dock-split-right  { right: 0; top:    0; width:  var(--size); height: 100%; }\n.suey-dock-split-top    { left:  0; top:    0; width: 100%; height:  var(--size); }\n.suey-dock-split-bottom { left:  0; bottom: 0; width: 100%; height:  var(--size); }\n\n.suey-dock-location.suey-dock-drop {\n    background-color: transparent;\n    opacity: 1.0;\n}\n.suey-dock-location.suey-dock-drop:not(.suey-dock-self)::before {\n    --shrink: 0.57143em;\n    content: '';\n    position: absolute;\n    left: var(--shrink);\n    right: var(--shrink);\n    top: var(--shrink);\n    bottom: var(--shrink);\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--complement));\n    border-radius: var(--radius-large);\n    outline: var(--radius-large) solid rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n}\n\n.suey-docker.suey-dock-self .suey-panel-simple,\n.suey-docker.suey-dock-self .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--complement)) !important;\n}\n\n/********** Floater **********/\n\n.suey-floater {\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n    pointer-events: auto;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n}\n\n/********** Tabbed **********/\n\n.suey-tabbed {\n    pointer-events: all;\n    max-height: 100%;\n    padding: var(--pad-small);\n}\n\n/***** TabPanels */\n\n/* Child of Tabbed that holds multiple 'Floater' */\n.suey-tab-floaters {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/***** TabButtons */\n\n/* Child of Tabbed that holds multiple 'TabButton' */\n.suey-tab-buttons {\n    pointer-events: none;\n    position: absolute;\n    display: flex;\n    z-index: 101; /* Tabs */\n    min-width: var(--tab-size);\n    min-height: var(--tab-size);\n    margin: 0;\n}\n\n.suey-dock-drag .suey-tab-buttons {\n    pointer-events: all;\n}\n\n.suey-tab-buttons.suey-left-side,\n.suey-tab-buttons.suey-right-side {\n    flex-direction: column;\n    top: 1em;\n}\n\n.suey-tab-buttons.suey-top-side,\n.suey-tab-buttons.suey-bottom-side {\n    flex-direction: row;\n    left: 1em;\n}\n\n.suey-tab-buttons.suey-top-side { top: calc((var(--tab-size) / -2.0) + 0.52em); }\n.suey-tab-buttons.suey-bottom-side { bottom: calc((var(--tab-size) / -2.0) + 0.52em); }\n\n.suey-tab-buttons.suey-left-side { left: calc((var(--tab-size) / -2.0) + 0.52em); }\n.suey-tab-buttons.suey-right-side { right: calc((var(--tab-size) / -2.0) + 0.52em); }\n\n/***** TabButton *****/\n\n.suey-tab-button {\n    pointer-events: all;\n    width: var(--tab-size);\n    height: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: transparent;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    margin: var(--pad-x-small);\n    transform: scale(70%);\n    transition: margin var(--tab-timing) ease-in-out, transform var(--tab-timing) ease-in-out;\n}\n\n.suey-window .suey-tab-button {\n    transition: 0s;\n}\n\n.suey-tab-buttons.suey-top-side .suey-tab-button:not(.suey-selected),\n.suey-tab-buttons.suey-bottom-side .suey-tab-button:not(.suey-selected) {\n    margin-left: calc(-1 * var(--pad-x-small));\n    margin-right: calc(-1 * var(--pad-x-small));\n}\n\n.suey-tab-buttons.suey-left-side .suey-tab-button:not(.suey-selected),\n.suey-tab-buttons.suey-right-side .suey-tab-button:not(.suey-selected) {\n    margin-top: calc(-1 * var(--pad-x-small));\n    margin-bottom: calc(-1 * var(--pad-x-small));\n}\n\n.suey-drag-tab-button {\n    position: absolute;\n    z-index: 10000;\n    pointer-events: none;\n    opacity: 0.8;\n    transform: scale(100%);\n}\n.suey-drag-tab-button .suey-tab-icon-border {\n    border-width: var(--border-small);\n}\n\n:not(.suey-collapsed) > .suey-dock .suey-tab-button.suey-selected {\n    color: rgba(var(--highlight), 1.0);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    transform: scale(100%);\n}\n\n/* Tab Image */\n.suey-tab-button .suey-vector-box {\n    position: absolute;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    filter: contrast(75%) grayscale(100%) brightness(75%);\n}\n\n:not(.suey-collapsed) > .suey-dock .suey-tab-button.suey-selected .suey-vector-box {\n    filter: none;\n}\n\n.suey-tab-button:hover .suey-vector-box,\n.suey-tab-button:active .suey-vector-box {\n    filter: brightness(120%) !important;\n}\n\n.suey-tab-button:active .suey-vector-box .suey-image {\n    transform: translate(0, var(--pixel));\n}\n\n/* Tab Image Border / Shadow */\n.suey-tab-icon-border {\n    cursor: pointer;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: var(--pad-small) solid rgba(var(--icon));\n    border-radius: calc(var(--tab-size) * 0.7);\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: scale(1.05);\n}\n\n.suey-tab-button.suey-drop-target .suey-tab-icon-border {\n    border-color: rgba(var(--complement)) !important;\n}\n\n.suey-tab-button:hover .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.50),\n        inset 0 var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n.suey-tab-button:active .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n:not(.suey-collapsed) > .suey-tabbed .suey-tab-button.suey-selected .suey-tab-icon-border {\n    border: 0.15em solid rgb(var(--icon));\n}\n\n/********** Window **********/\n\n.suey-window {\n    --window-z-index: 200;\n\n    position: absolute;\n    padding: var(--pad-small);\n    opacity: calc(90% + (10% * var(--panel-transparency)));\n    z-index: var(--window-z-index); /* Window */\n}\n\n.suey-window.suey-drop-target .suey-panel-simple,\n.suey-window.suey-drop-target .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--complement)) !important;\n}\n\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n.suey-panel-button.suey-title-bar {\n    --title-width: 0;\n    color: rgba(var(--highlight), 0.5);\n    border: var(--border-small) solid rgb(var(--button-light));\n    border-radius: var(--radius-large);\n    background-color: rgba(var(--background-dark), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--background-light), 0.5), rgba(var(--background-dark), 0.5));\n    box-shadow: none;\n    text-shadow: none;\n    text-align: center;\n    left: 0;\n    right: 0;\n    min-width: 6em;\n    min-height: 1.6em;\n    margin-left: auto;\n    margin-right: auto;\n    overflow: visible;\n}\n\n.suey-active-window .suey-panel-button.suey-title-bar {\n    color: rgba(var(--highlight), 1);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon), 0.5));\n    border: var(--border-small) solid rgb(var(--icon));\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n/* Window Tab Buttons */\n\n.suey-tab-buttons.suey-window-side {\n    flex-direction: row;\n    top: calc((var(--tab-size) / -2.0) + 0.4em);\n}\n.suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    border: var(--border-small) solid rgba(var(--icon));\n}\n.suey-window-moving .suey-tab-buttons.suey-window-side {\n    transition: transform 0.15s;\n}\n.suey-window-moving .suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    transition: border 0.15s;\n}\n\n.suey-shrink-tab-button .suey-tab-buttons.suey-window-side {\n    top: calc((var(--tab-size) / -2.0) + 0.5em); /* 42857em);*/\n    transform: scale(65%);\n}\n.suey-shrink-tab-button .suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    border: 0.24em solid rgba(var(--icon));\n}\n\n.suey-panel-button.suey-title-bar .suey-tab-buttons {\n    left: 110%;\n    margin-left: 0.5em;\n}\n\n.suey-window:not(.suey-active-window) .suey-tab-icon-border {\n    border-color: rgba(var(--button-light)) !important;\n}\n\n/* Window Floaters */\n.suey-window .suey-panel-fancy-outer,\n.suey-window .suey-panel-fancy-border,\n.suey-window .suey-panel-fancy-inside,\n.suey-window .suey-tab-floaters,\n.suey-window .suey-floater,\n.suey-window .suey-titled {\n    overflow: visible;\n}\n\n.suey-window .suey-floater {\n    z-index: 101; /* window floater */\n}\n\n.suey-window .suey-tab-floaters {\n    margin-top: 1em;\n    height: calc(100% - 1em);\n}\n\n/* Window Tab Title Buttons */\n.suey-window .suey-tab-title {\n    pointer-events: none;\n    position: absolute;\n    top: -1.8em;\n    left: 0;\n    right: 0;\n    width: 75%;\n    margin: auto;\n    min-height: 1.9em;\n    background: transparent;\n    background-image: none;\n    box-shadow: none;\n    outline: none;\n    color: transparent;\n    text-shadow: none;\n    overflow: visible;\n}\n.suey-window .suey-tab-title .suey-borderless-button {\n    pointer-events: all;\n    position: relative;\n    pointer-events: all;\n    background: rgb(var(--button-dark)) !important;\n    border: solid var(--border-small) rgb(var(--icon));\n    overflow: visible;\n}\n.suey-window:not(.suey-active-window) .suey-tab-title .suey-borderless-button {\n    border: solid var(--border-small) rgb(var(--button-light));\n}\n";
var stylesheet$6="/********** Main Window **********/\n\n.suey-main-window {\n    user-select: none;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.suey-window-holder {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    pointer-events: none;\n}\n\n/********** Abstract Dock **********/\n\n.suey-dock {\n    position: relative;\n}\n\n/********** Docker **********/\n\n.suey-docker {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    min-width: 8em;\n    min-height: 8em;\n    max-width: 100%;\n    max-height: 100%;\n    pointer-events: none;\n}\n\n.suey-docker.suey-docker-primary {\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    overflow: visible;\n}\n\n.suey-docker-vertical {\n    height: 100%;\n}\n\n.suey-docker-horizontal {\n    width: 100%;\n}\n\n.suey-dock-drag .suey-docker {\n    pointer-events: all !important;\n}\n\n/***** Collapsed Docks */\n\n.suey-docker.suey-collapsed {\n    min-width: calc(var(--tab-size) * 1) !important;\n    min-height: calc(var(--tab-size) * 1) !important;\n}\n\n.suey-collapsed .suey-corner-button {\n    display: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-panel-simple,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-outer,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-border,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-inside {\n    background-color: transparent !important;\n    border-color: transparent !important;\n    outline: none !important;\n    box-shadow: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-tab-floaters * {\n    opacity: 0 !important;\n    user-select: none !important;\n    pointer-events: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-left-side { top: 0; right: 0; left: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-right-side { top: 0; left: 0; right: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-top-side { left: 0; bottom: 0; top: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-bottom-side { left: 0; top: 0; bottom: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-button {\n    margin: 0 !important;\n}\n\n.suey-collapsed .suey-tabbed .suey-resizer {\n    pointer-events: none !important;\n    display: none !important;\n}\n\n/***** Dock Locations */\n\n.suey-dock-locations {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.suey-dock-location {\n    --size: 2em;\n    position: absolute;\n    opacity: 0.0;\n}\n.suey-dock-left   { left:  0; top:    0; width:  20%; height: 100%; }\n.suey-dock-right  { right: 0; top:    0; width:  20%; height: 100%; }\n.suey-dock-top    { left:  0; top:    0; width: 100%; height:  25%; }\n.suey-dock-bottom { left:  0; bottom: 0; width: 100%; height:  25%; }\n.suey-dock-center { left: 20%; top: 20%; width:  60%; height:  60%; }\n\n.suey-dock-middle-vertical   { left: var(--size); top:   0; height: 100%; width:  calc(100% - (var(--size) * 2)); }\n.suey-dock-middle-horizontal { left:   0; top: var(--size); width:  100%; height: calc(100% - (var(--size) * 2)); }\n.suey-dock-split-left   { left:  0; top:    0; width:  var(--size); height: 100%; }\n.suey-dock-split-right  { right: 0; top:    0; width:  var(--size); height: 100%; }\n.suey-dock-split-top    { left:  0; top:    0; width: 100%; height:  var(--size); }\n.suey-dock-split-bottom { left:  0; bottom: 0; width: 100%; height:  var(--size); }\n\n.suey-dock-location.suey-dock-drop {\n    background-color: transparent;\n    opacity: 1.0;\n}\n.suey-dock-location.suey-dock-drop:not(.suey-dock-self)::before {\n    --shrink: 0.57143em;\n    content: '';\n    position: absolute;\n    left: var(--shrink);\n    right: var(--shrink);\n    top: var(--shrink);\n    bottom: var(--shrink);\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--complement));\n    border-radius: var(--radius-large);\n    outline: var(--radius-large) solid rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n}\n\n.suey-docker.suey-dock-self .suey-panel-simple,\n.suey-docker.suey-dock-self .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--complement)) !important;\n}\n\n/********** Floater **********/\n\n.suey-floater {\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n    pointer-events: auto;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n}\n\n/********** Tabbed **********/\n\n.suey-tabbed {\n    pointer-events: all;\n    max-height: 100%;\n    padding: var(--pad-small);\n}\n\n/***** TabPanels */\n\n/* Child of Tabbed that holds multiple 'Floater' */\n.suey-tab-floaters {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/***** TabButtons */\n\n/* Child of Tabbed that holds multiple 'TabButton' */\n.suey-tab-buttons {\n    pointer-events: none;\n    position: absolute;\n    display: flex;\n    z-index: 101; /* Tabs */\n    min-width: var(--tab-size);\n    min-height: var(--tab-size);\n    margin: 0;\n}\n\n.suey-dock-drag .suey-tab-buttons {\n    pointer-events: all;\n}\n\n.suey-tab-buttons.suey-left-side,\n.suey-tab-buttons.suey-right-side {\n    flex-direction: column;\n    top: 1em;\n}\n\n.suey-tab-buttons.suey-top-side,\n.suey-tab-buttons.suey-bottom-side {\n    flex-direction: row;\n    left: 1em;\n}\n\n.suey-tab-buttons.suey-top-side { top: calc((var(--tab-size) / -2.0) + 0.52em); }\n.suey-tab-buttons.suey-bottom-side { bottom: calc((var(--tab-size) / -2.0) + 0.52em); }\n\n.suey-tab-buttons.suey-left-side { left: calc((var(--tab-size) / -2.0) + 0.52em); }\n.suey-tab-buttons.suey-right-side { right: calc((var(--tab-size) / -2.0) + 0.52em); }\n\n/***** TabButton *****/\n\n.suey-tab-button {\n    pointer-events: all;\n    width: var(--tab-size);\n    height: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: transparent;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    margin: var(--pad-x-small);\n    transform: scale(70%);\n    transition: margin var(--tab-timing) ease-in-out, transform var(--tab-timing) ease-in-out;\n}\n\n.suey-window .suey-tab-button {\n    transition: 0s;\n}\n\n.suey-tab-buttons.suey-top-side .suey-tab-button:not(.suey-selected),\n.suey-tab-buttons.suey-bottom-side .suey-tab-button:not(.suey-selected) {\n    margin-left: calc(-1 * var(--pad-x-small));\n    margin-right: calc(-1 * var(--pad-x-small));\n}\n\n.suey-tab-buttons.suey-left-side .suey-tab-button:not(.suey-selected),\n.suey-tab-buttons.suey-right-side .suey-tab-button:not(.suey-selected) {\n    margin-top: calc(-1 * var(--pad-x-small));\n    margin-bottom: calc(-1 * var(--pad-x-small));\n}\n\n.suey-drag-tab-button {\n    position: absolute;\n    z-index: 10000;\n    pointer-events: none;\n    opacity: 0.8;\n    transform: scale(100%);\n}\n.suey-drag-tab-button .suey-tab-icon-border {\n    border-width: var(--border-small);\n}\n\n:not(.suey-collapsed) > .suey-dock .suey-tab-button.suey-selected {\n    color: rgba(var(--highlight), 1.0);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    transform: scale(100%);\n}\n\n/* Tab Image */\n.suey-tab-button .suey-vector-box {\n    position: absolute;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    filter: contrast(75%) grayscale(100%) brightness(75%);\n}\n\n:not(.suey-collapsed) > .suey-dock .suey-tab-button.suey-selected .suey-vector-box {\n    filter: none;\n}\n\n.suey-tab-button:hover .suey-vector-box,\n.suey-tab-button:active .suey-vector-box {\n    filter: brightness(120%) !important;\n}\n\n.suey-tab-button:active .suey-vector-box .suey-image {\n    transform: translate(0, var(--pixel));\n}\n\n/* Tab Image Border / Shadow */\n.suey-tab-icon-border {\n    cursor: pointer;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: var(--pad-small) solid rgba(var(--icon));\n    border-radius: calc(var(--tab-size) * 0.7);\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: scale(1.05);\n}\n\n.suey-tab-button.suey-drop-target .suey-tab-icon-border {\n    border-color: rgba(var(--complement)) !important;\n}\n\n.suey-tab-button:hover .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.50),\n        inset 0 var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n.suey-tab-button:active .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n:not(.suey-collapsed) > .suey-tabbed .suey-tab-button.suey-selected .suey-tab-icon-border {\n    border: 0.15em solid rgb(var(--icon));\n}\n\n/********** Window **********/\n\n.suey-window {\n    --window-z-index: 200;\n\n    position: absolute;\n    padding: var(--pad-small);\n    opacity: calc(90% + (10% * var(--panel-transparency)));\n    z-index: var(--window-z-index); /* Window */\n}\n\n.suey-window.suey-drop-target .suey-panel-simple,\n.suey-window.suey-drop-target .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--complement)) !important;\n}\n\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n.suey-panel-button.suey-title-bar {\n    --title-width: 0;\n    color: rgba(var(--highlight), 0.5);\n    border: var(--border-small) solid rgb(var(--button-light));\n    border-radius: var(--radius-large);\n    background-color: rgba(var(--background-dark), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--background-light), 0.5), rgba(var(--background-dark), 0.5));\n    box-shadow: none;\n    text-shadow: none;\n    text-align: center;\n    left: 0;\n    right: 0;\n    min-width: 6em;\n    min-height: 1.6em;\n    margin-left: auto;\n    margin-right: auto;\n    overflow: visible;\n}\n\n.suey-active-window .suey-panel-button.suey-title-bar {\n    color: rgba(var(--highlight), 1);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon), 0.5));\n    border: var(--border-small) solid rgb(var(--icon));\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n/* Window Tab Buttons */\n\n.suey-tab-buttons.suey-window-side {\n    flex-direction: row;\n    top: calc((var(--tab-size) / -2.0) + 0.4em);\n}\n.suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    border: var(--border-small) solid rgba(var(--icon));\n}\n.suey-window-moving .suey-tab-buttons.suey-window-side {\n    transition: transform 0.15s;\n}\n.suey-window-moving .suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    transition: border 0.15s;\n}\n\n.suey-shrink-tab-button .suey-tab-buttons.suey-window-side {\n    top: calc((var(--tab-size) / -2.0) + 0.5em); /* 42857em);*/\n    transform: scale(65%);\n}\n.suey-shrink-tab-button .suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    border: 0.24em solid rgba(var(--icon));\n}\n\n.suey-panel-button.suey-title-bar .suey-tab-buttons {\n    left: 110%;\n    margin-left: 0.5em;\n}\n\n.suey-window:not(.suey-active-window) .suey-tab-icon-border {\n    border-color: rgba(var(--button-light)) !important;\n}\n\n/* Window Floaters */\n.suey-window .suey-panel-fancy-outer,\n.suey-window .suey-panel-fancy-border,\n.suey-window .suey-panel-fancy-inside,\n.suey-window .suey-tab-floaters,\n.suey-window .suey-floater,\n.suey-window .suey-titled {\n    overflow: visible;\n}\n\n.suey-window .suey-floater {\n    z-index: 101; /* window floater */\n}\n\n.suey-window .suey-tab-floaters {\n    margin-top: 1em;\n    height: calc(100% - 1em);\n}\n\n/* Window Tab Title Buttons */\n.suey-window .suey-tab-title {\n    pointer-events: none;\n    position: absolute;\n    top: -1.8em;\n    left: 0;\n    right: 0;\n    width: 75%;\n    margin: auto;\n    min-height: 1.9em;\n    background: transparent;\n    background-image: none;\n    box-shadow: none;\n    outline: none;\n    color: transparent;\n    text-shadow: none;\n    overflow: visible;\n}\n.suey-window .suey-tab-title .suey-borderless-button {\n    pointer-events: all;\n    position: relative;\n    pointer-events: all;\n    background: rgb(var(--button-dark)) !important;\n    border: solid var(--border-small) rgb(var(--icon));\n    overflow: visible;\n}\n.suey-window:not(.suey-active-window) .suey-tab-title .suey-borderless-button {\n    border: solid var(--border-small) rgb(var(--button-light));\n}\n";
styleInject(css_248z$6);

var css_248z$5 = "/********** Gooey Panel **********/\n\n.suey-gooey {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 21em;\n    max-height: 100%;\n    z-index: 1; /* Gooey */\n}\n";
var stylesheet$5="/********** Gooey Panel **********/\n\n.suey-gooey {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 21em;\n    max-height: 100%;\n    z-index: 1; /* Gooey */\n}\n";
styleInject(css_248z$5);

var css_248z$4 = "/********** Property List **********/\n\n.suey-property-list {\n    width: 100%;\n}\n\n/***** Property Header */\n\n.suey-property-header-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    min-height: calc(var(--row-height));\n    overflow: hidden;\n\n    cursor: default;\n    background-color: rgba(var(--icon), 0.1); /* transparent; */\n    border-top: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-bottom: solid var(--border-small) rgba(var(--shadow), 0.25);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    margin: var(--pad-micro) 0;\n    padding: 0;\n    padding-left: 0.425em;\n    padding-top: var(--pad-micro);\n    padding-bottom: var(--pad-micro);\n}\n\n.suey-shrinkable.suey-borderless-panel .suey-property-header-title {\n    border-radius: var(--radius-small);\n}\n\n.suey-property-header-icon > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-property-header-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n.suey-property-header-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.25em;\n}\n\n/***** Property Row */\n\n.suey-property-row {\n    position: relative;\n    min-height: var(--row-height);\n}\n\n.suey-property-row:hover .suey-property-left {\n    color: rgba(var(--highlight), 0.8);\n}\n\n.suey-property-row:hover .suey-property-left .suey-image {\n    filter: brightness(250%);\n}\n\n.suey-property-space {\n    flex: 0 0 auto;\n    min-width: 0.2em;\n}\n\n.suey-property-left {\n    --left-property-width: 50%;\n\n    width: var(--left-property-width) !important;\n\n    position: relative;\n    flex-shrink: 0;\n    margin: 0;\n    padding-left: var(--pad-medium);\n    height: 100%;\n    min-height: var(--row-height);\n    text-align: left;\n    text-transform: capitalize;\n}\n.suey-left-tab-spacing {\n    padding-left: 0.85em;\n}\n\n.suey-property-right {\n    --right-property-width: 50%;\n\n    width: calc(var(--right-property-width) - var(--pad-small)) !important;\n\n    flex-shrink: 0;\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: left;\n    text-align: left;\n    height: 100%;\n    min-height: var(--row-height);\n}\n\n.suey-property-full {\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: center;\n    text-align: center;\n    height: 100%;\n    min-height: var(--row-height);\n    width: calc(100% - var(--pad-small)) !important;\n}\n\n.suey-property-full > *:not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    height: 100%;\n}\n\n/***** Right side of Property Row */\n\n.suey-property-right .suey-number:not(.suey-property-tiny-row),\n.suey-property-right > *:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    text-align: left;\n    height: 100%;\n}\n\n.suey-property-right > .suey-button:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-menu-button) {\n    text-align: center;\n}\n\n/* Right side of Property Box flex fill when using multiple controls */\n.suey-property-tiny-row {\n    --min-width: 2em;\n\n    flex: 2 2 var(--min-width);\n    min-height: var(--row-height);\n    min-width: var(--min-width);\n    height: 100%;\n}\n\n/***** Property Button */\n\n/* Button appearing in right column of Property List, fixed size */\n.suey-property-button {\n    position: relative;\n    min-height: var(--row-height);\n    min-width: 2.1em;\n}\n\n/* Button appearing in right column of Property List, flex box */\n.suey-property-button-flex {\n    flex: 1 1 auto;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0 0.05em;\n    padding: 0 0.1em;\n    height: var(--row-height);\n    white-space: nowrap;\n}\n\n/********** Tree List **********/\n\n.suey-tree-list {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: left;\n    overflow: hidden;\n    margin: var(--pad-small);\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-dark), 0.25);\n    border: 0;\n    border-radius: var(--radius-small);\n    outline: solid var(--border-small) rgba(var(--shadow), 0.35);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n\n    cursor: default;\n}\n\n/********** Tree List Option **********/\n\n.suey-tree-list .suey-option {\n    position: relative;\n    text-align: left;\n    border: var(--border-small) solid transparent;\n    padding: var(--pad-x-small);\n    width: 100%;\n    white-space: nowrap;\n}\n.suey-tree-list .suey-option:hover:not(.suey-no-select) {\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--background-dark), 0.2);\n}\n\n.suey-tree-list .suey-option.suey-active:not(.suey-no-select) {\n    color: rgba(var(--highlight), 1.0);\n    background-color: rgba(var(--icon-light), 0.4);\n    border-top: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-bottom: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-active-top:not(.suey-no-select) {\n    border-bottom: var(--border-small) solid transparent;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.suey-tree-list .suey-option.suey-active-bottom:not(.suey-no-select) {\n    border-top: var(--border-small) solid transparent;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.suey-tree-list .suey-option.suey-drag:not(.suey-active) {\n    border: var(--border-small) solid rgba(var(--icon-light), 1.0);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-drag-top:not(.suey-active) {\n    border-top: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n.suey-tree-list .suey-option.suey-drag-bottom:not(.suey-active) {\n    border-bottom: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n\n/********** Tree List Opener **********/\n\n.suey-tree-list .suey-opener {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    margin: 0 0.25em;\n\n    vertical-align: top;\n    text-align: center;\n}\n\n.suey-tree-list .suey-opener.suey-is-open:after {\n    content: '-';\n}\n\n.suey-tree-list .suey-opener.suey-is-closed:after {\n    content: '+';\n}\n\n/********** Drag Image **********/\n\n.suey-drag-image {\n    display: flex;\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    left: 0;\n    top: 0;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    border-radius: var(--radius-small);\n    z-index: 100000; /* Drag Clone */\n}\n";
var stylesheet$4="/********** Property List **********/\n\n.suey-property-list {\n    width: 100%;\n}\n\n/***** Property Header */\n\n.suey-property-header-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    min-height: calc(var(--row-height));\n    overflow: hidden;\n\n    cursor: default;\n    background-color: rgba(var(--icon), 0.1); /* transparent; */\n    border-top: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-bottom: solid var(--border-small) rgba(var(--shadow), 0.25);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    margin: var(--pad-micro) 0;\n    padding: 0;\n    padding-left: 0.425em;\n    padding-top: var(--pad-micro);\n    padding-bottom: var(--pad-micro);\n}\n\n.suey-shrinkable.suey-borderless-panel .suey-property-header-title {\n    border-radius: var(--radius-small);\n}\n\n.suey-property-header-icon > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-property-header-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n.suey-property-header-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.25em;\n}\n\n/***** Property Row */\n\n.suey-property-row {\n    position: relative;\n    min-height: var(--row-height);\n}\n\n.suey-property-row:hover .suey-property-left {\n    color: rgba(var(--highlight), 0.8);\n}\n\n.suey-property-row:hover .suey-property-left .suey-image {\n    filter: brightness(250%);\n}\n\n.suey-property-space {\n    flex: 0 0 auto;\n    min-width: 0.2em;\n}\n\n.suey-property-left {\n    --left-property-width: 50%;\n\n    width: var(--left-property-width) !important;\n\n    position: relative;\n    flex-shrink: 0;\n    margin: 0;\n    padding-left: var(--pad-medium);\n    height: 100%;\n    min-height: var(--row-height);\n    text-align: left;\n    text-transform: capitalize;\n}\n.suey-left-tab-spacing {\n    padding-left: 0.85em;\n}\n\n.suey-property-right {\n    --right-property-width: 50%;\n\n    width: calc(var(--right-property-width) - var(--pad-small)) !important;\n\n    flex-shrink: 0;\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: left;\n    text-align: left;\n    height: 100%;\n    min-height: var(--row-height);\n}\n\n.suey-property-full {\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: center;\n    text-align: center;\n    height: 100%;\n    min-height: var(--row-height);\n    width: calc(100% - var(--pad-small)) !important;\n}\n\n.suey-property-full > *:not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    height: 100%;\n}\n\n/***** Right side of Property Row */\n\n.suey-property-right .suey-number:not(.suey-property-tiny-row),\n.suey-property-right > *:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    text-align: left;\n    height: 100%;\n}\n\n.suey-property-right > .suey-button:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-menu-button) {\n    text-align: center;\n}\n\n/* Right side of Property Box flex fill when using multiple controls */\n.suey-property-tiny-row {\n    --min-width: 2em;\n\n    flex: 2 2 var(--min-width);\n    min-height: var(--row-height);\n    min-width: var(--min-width);\n    height: 100%;\n}\n\n/***** Property Button */\n\n/* Button appearing in right column of Property List, fixed size */\n.suey-property-button {\n    position: relative;\n    min-height: var(--row-height);\n    min-width: 2.1em;\n}\n\n/* Button appearing in right column of Property List, flex box */\n.suey-property-button-flex {\n    flex: 1 1 auto;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0 0.05em;\n    padding: 0 0.1em;\n    height: var(--row-height);\n    white-space: nowrap;\n}\n\n/********** Tree List **********/\n\n.suey-tree-list {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: left;\n    overflow: hidden;\n    margin: var(--pad-small);\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-dark), 0.25);\n    border: 0;\n    border-radius: var(--radius-small);\n    outline: solid var(--border-small) rgba(var(--shadow), 0.35);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n\n    cursor: default;\n}\n\n/********** Tree List Option **********/\n\n.suey-tree-list .suey-option {\n    position: relative;\n    text-align: left;\n    border: var(--border-small) solid transparent;\n    padding: var(--pad-x-small);\n    width: 100%;\n    white-space: nowrap;\n}\n.suey-tree-list .suey-option:hover:not(.suey-no-select) {\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--background-dark), 0.2);\n}\n\n.suey-tree-list .suey-option.suey-active:not(.suey-no-select) {\n    color: rgba(var(--highlight), 1.0);\n    background-color: rgba(var(--icon-light), 0.4);\n    border-top: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-bottom: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-active-top:not(.suey-no-select) {\n    border-bottom: var(--border-small) solid transparent;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.suey-tree-list .suey-option.suey-active-bottom:not(.suey-no-select) {\n    border-top: var(--border-small) solid transparent;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.suey-tree-list .suey-option.suey-drag:not(.suey-active) {\n    border: var(--border-small) solid rgba(var(--icon-light), 1.0);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-drag-top:not(.suey-active) {\n    border-top: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n.suey-tree-list .suey-option.suey-drag-bottom:not(.suey-active) {\n    border-bottom: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n\n/********** Tree List Opener **********/\n\n.suey-tree-list .suey-opener {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    margin: 0 0.25em;\n\n    vertical-align: top;\n    text-align: center;\n}\n\n.suey-tree-list .suey-opener.suey-is-open:after {\n    content: '-';\n}\n\n.suey-tree-list .suey-opener.suey-is-closed:after {\n    content: '+';\n}\n\n/********** Drag Image **********/\n\n.suey-drag-image {\n    display: flex;\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    left: 0;\n    top: 0;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    border-radius: var(--radius-small);\n    z-index: 100000; /* Drag Clone */\n}\n";
styleInject(css_248z$4);

var css_248z$3 = "/********** Graph **********/\n\n.suey-graph-input, .suey-graph-grid, .suey-graph-nodes, .suey-graph-lines {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n/* Div used for processing user input */\n.suey-graph-input {\n    background: transparent;\n    z-index: -1; /* Graph Input */\n}\n\n/* Background div that holds tiled grid */\n.suey-graph-grid {\n    pointer-events: none;\n    background-color: rgb(var(--darkness));\n    background-repeat: repeat;\n    transition: none;\n}\n\n/* Scalable div to hold nodes */\n.suey-graph-nodes {\n    pointer-events: none;\n    background-color: transparent;\n    transition: none;\n}\n\n/* Canvas where lines are drawn */\n.suey-graph-lines {\n    pointer-events: none;\n}\n\n/* Shows rubberband box */\n.suey-graph-band-box {\n    position: absolute;\n    display: none;\n    background-color: rgba(var(--icon), 0.2);\n    border: solid var(--border-small) rgba(var(--icon), 0.75);\n}\n\n/***** Graph Minimap */\n\n.suey-mini-map {\n    position: absolute;\n    background-color: rgba(var(--background-dark), 0.5);\n    border: var(--border-small) solid rgba(var(--icon), 0.75);\n    border-radius: var(--radius-large);\n    bottom: var(--pad-large);\n    right: var(--pad-large);\n    width: 20%;\n    height: 20%;\n    z-index: 101; /* GraphMap */\n    cursor: grab;\n}\n\n.suey-mini-map-canvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    outline: none;\n}\n\n.suey-mini-map-resizers {\n    position: absolute;\n    width: calc(100% + var(--resize-size));\n    height: calc(100% + var(--resize-size));\n    margin: calc(var(--resize-size) / -2);\n    outline: none;\n}\n\n/********** Node **********/\n\n.suey-node {\n    --node-color:       255, 0, 0;\n\n    pointer-events: all;\n    position: absolute;\n    background-color: transparent;\n    border-radius: var(--radius-large);\n    border: none;\n    outline: solid var(--pad-micro) rgb(var(--black), 0.5);\n    margin: 0;\n    cursor: inherit;\n    overflow: visible;\n    z-index: 0; /* Node */\n}\n\n.suey-active-node {\n    z-index: 1; /* Active Node */\n}\n\n.suey-node:hover, .suey-node.suey-node-selected {\n    filter: brightness(120%);\n}\n\n.suey-node.suey-too-small .suey-resizer {\n    pointer-events: none;\n}\n\n.suey-node-panel {\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: 0;\n    padding: 0;\n    cursor: inherit;\n    overflow: visible;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n\n.suey-node-border {\n    pointer-events: none;\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--border-small) * -0.5);\n    padding: 0;\n}\n\n.suey-node.suey-node-displayed .suey-node-border {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n\n.suey-node.suey-node-selected .suey-node-border {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node.suey-node-selected,\n.suey-node.suey-node-displayed {\n    outline: solid var(--pad-small) rgb(var(--black), 0.5);\n}\n.suey-node.suey-node-selected .suey-node-border {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n/* .suey-node.suey-node-selected.suey-node.suey-node-displayed {\n    outline: solid var(--pad-small) rgb(var(--icon), 1);\n} */\n/* .suey-node.suey-node-selected.suey-node.suey-node-displayed .suey-node-border {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n} */\n\n.suey-node-resizers {\n    pointer-events: all;\n    position: absolute;\n    opacity: 0;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--resize-size) / -2);\n    padding: 0;\n}\n\n/***** Node Header */\n\n.suey-node-header-title {\n    pointer-events: none;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border-top-right-radius: var(--radius-large);\n    border-top-left-radius: var(--radius-large);\n    width: 100%;\n    height: 1.82em;\n    margin: 0;\n    padding: var(--pad-x-small) 0.5em; /* vertical | horizontal */\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.2);\n}\n\n.suey-node-header-icon .suey-vector-box {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 85%;\n    height: 85%;\n    filter: drop-shadow(0 0 var(--pad-micro) rgba(var(--shadow), 0.8));\n}\n\n.suey-node-header-icon .suey-image {\n    filter: brightness(calc(10 * var(--bright))) opacity(0.9);\n}\n\n.suey-node-displayed .suey-node-header-icon .suey-image {\n    filter: var(--tint-complement);\n}\n\n.suey-node-header-icon {\n    pointer-events: none;\n    position: absolute;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: 0.25em;\n    left: 0.2em;\n    top: 0.2em;\n    width: 1.65em;\n    height: 1.35em;\n    opacity: 1;\n    box-shadow: inset 0 0 var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.suey-node-header-text {\n    pointer-events: none;\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n.suey-node-displayed .suey-node-header-text {\n    color: rgba(var(--complement), 1);\n    text-shadow: 0 0 0.15em rgba(var(--shadow), 1);\n}\n\n/***** Node Item */\n\n.suey-node-interior {\n    pointer-events: none;\n    display: flex;\n    flex-direction: row;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    min-width: 100px;\n    min-height: 25px;\n}\n\n.suey-node-item-list {\n    pointer-events: none;\n    display: block;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    width: 50%;\n    min-height: 25px;\n}\n\n/* Item */\n.suey-node-item {\n    pointer-events: none;\n    position: relative;\n    background-color: transparent;\n    color: var(--text);\n    font-size: 85%;\n    width: 100%;\n    padding: var(--pad-medium);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    vertical-align: middle;\n}\n\n.suey-node-displayed .suey-node-item {\n    color: rgba(var(--complement), 1);\n}\n\n.suey-node-left {\n    text-align: left;\n    padding-left: 1.2em;\n}\n\n.suey-node-right {\n    text-align: right;\n    padding-right: 1.2em;\n}\n\n/* Item point */\n.suey-node-item-point {\n    pointer-events: all;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    background-color: rgba(var(--background-dark), 1);\n    border: var(--border-small) solid rgba(var(--button-light), 1);\n    border-radius: 0.3em;\n    outline: none;\n    top: 50%;\n    overflow: visible;\n    z-index: 100; /* Node Item Point */\n}\n\n.suey-node-left .suey-node-item-point {\n    left: 0;\n    transform: translate(-50%, -50%);\n}\n.suey-node-right .suey-node-item-point {\n    right: 0;\n    transform: translate( 50%, -50%);\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-point::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n/* Inner square */\n.suey-node-item.suey-item-connected .suey-node-item-point::after,\n.suey-node-item .suey-node-item-point.suey-active-item::after {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: var(--pad-x-small);\n    background-color: rgb(var(--node-color));\n    border-radius: 0.08em;\n}\n\n/* Item point highlight border */\n.suey-node.suey-node-displayed .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n.suey-node.suey-node-selected .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node-item-point.suey-hover-point, .suey-node.suey-node-selected .suey-node-item-point.suey-hover-point,\n.suey-node-item-point.suey-active-item, .suey-node.suey-node-selected .suey-node-item-point.suey-active-item {\n    border: var(--border-small) solid rgba(var(--highlight), 1);\n    width: 1.2em;\n    height: 1.2em;\n}\n\n/* Item Unhooker (little 'X') */\n.suey-node-item-unhook {\n    pointer-events: none;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    top: 10%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    overflow: visible;\n    filter: brightness(50%);\n    transform: translateY(-50%);\n    opacity: 0;\n}\n\n.suey-node-right .suey-node-item-unhook {\n    left: calc(100% + 0.7em);\n}\n.suey-node-left .suey-node-item-unhook {\n    left: calc(0em - var(--row-height));\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-unhook::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-unhook {\n    pointer-events: all;\n}\n\n.suey-node-item.suey-item-connected:hover .suey-node-item-unhook {\n    opacity: 1;\n}\n\n.suey-node-item-unhook .suey-image {\n    filter: var(--drop-shadow);\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-unhook:hover {\n    filter: brightness(100%);\n}\n";
var stylesheet$3="/********** Graph **********/\n\n.suey-graph-input, .suey-graph-grid, .suey-graph-nodes, .suey-graph-lines {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n/* Div used for processing user input */\n.suey-graph-input {\n    background: transparent;\n    z-index: -1; /* Graph Input */\n}\n\n/* Background div that holds tiled grid */\n.suey-graph-grid {\n    pointer-events: none;\n    background-color: rgb(var(--darkness));\n    background-repeat: repeat;\n    transition: none;\n}\n\n/* Scalable div to hold nodes */\n.suey-graph-nodes {\n    pointer-events: none;\n    background-color: transparent;\n    transition: none;\n}\n\n/* Canvas where lines are drawn */\n.suey-graph-lines {\n    pointer-events: none;\n}\n\n/* Shows rubberband box */\n.suey-graph-band-box {\n    position: absolute;\n    display: none;\n    background-color: rgba(var(--icon), 0.2);\n    border: solid var(--border-small) rgba(var(--icon), 0.75);\n}\n\n/***** Graph Minimap */\n\n.suey-mini-map {\n    position: absolute;\n    background-color: rgba(var(--background-dark), 0.5);\n    border: var(--border-small) solid rgba(var(--icon), 0.75);\n    border-radius: var(--radius-large);\n    bottom: var(--pad-large);\n    right: var(--pad-large);\n    width: 20%;\n    height: 20%;\n    z-index: 101; /* GraphMap */\n    cursor: grab;\n}\n\n.suey-mini-map-canvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    outline: none;\n}\n\n.suey-mini-map-resizers {\n    position: absolute;\n    width: calc(100% + var(--resize-size));\n    height: calc(100% + var(--resize-size));\n    margin: calc(var(--resize-size) / -2);\n    outline: none;\n}\n\n/********** Node **********/\n\n.suey-node {\n    --node-color:       255, 0, 0;\n\n    pointer-events: all;\n    position: absolute;\n    background-color: transparent;\n    border-radius: var(--radius-large);\n    border: none;\n    outline: solid var(--pad-micro) rgb(var(--black), 0.5);\n    margin: 0;\n    cursor: inherit;\n    overflow: visible;\n    z-index: 0; /* Node */\n}\n\n.suey-active-node {\n    z-index: 1; /* Active Node */\n}\n\n.suey-node:hover, .suey-node.suey-node-selected {\n    filter: brightness(120%);\n}\n\n.suey-node.suey-too-small .suey-resizer {\n    pointer-events: none;\n}\n\n.suey-node-panel {\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: 0;\n    padding: 0;\n    cursor: inherit;\n    overflow: visible;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n\n.suey-node-border {\n    pointer-events: none;\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--border-small) * -0.5);\n    padding: 0;\n}\n\n.suey-node.suey-node-displayed .suey-node-border {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n\n.suey-node.suey-node-selected .suey-node-border {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node.suey-node-selected,\n.suey-node.suey-node-displayed {\n    outline: solid var(--pad-small) rgb(var(--black), 0.5);\n}\n.suey-node.suey-node-selected .suey-node-border {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n/* .suey-node.suey-node-selected.suey-node.suey-node-displayed {\n    outline: solid var(--pad-small) rgb(var(--icon), 1);\n} */\n/* .suey-node.suey-node-selected.suey-node.suey-node-displayed .suey-node-border {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n} */\n\n.suey-node-resizers {\n    pointer-events: all;\n    position: absolute;\n    opacity: 0;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--resize-size) / -2);\n    padding: 0;\n}\n\n/***** Node Header */\n\n.suey-node-header-title {\n    pointer-events: none;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border-top-right-radius: var(--radius-large);\n    border-top-left-radius: var(--radius-large);\n    width: 100%;\n    height: 1.82em;\n    margin: 0;\n    padding: var(--pad-x-small) 0.5em; /* vertical | horizontal */\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.2);\n}\n\n.suey-node-header-icon .suey-vector-box {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 85%;\n    height: 85%;\n    filter: drop-shadow(0 0 var(--pad-micro) rgba(var(--shadow), 0.8));\n}\n\n.suey-node-header-icon .suey-image {\n    filter: brightness(calc(10 * var(--bright))) opacity(0.9);\n}\n\n.suey-node-displayed .suey-node-header-icon .suey-image {\n    filter: var(--tint-complement);\n}\n\n.suey-node-header-icon {\n    pointer-events: none;\n    position: absolute;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: 0.25em;\n    left: 0.2em;\n    top: 0.2em;\n    width: 1.65em;\n    height: 1.35em;\n    opacity: 1;\n    box-shadow: inset 0 0 var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.suey-node-header-text {\n    pointer-events: none;\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n.suey-node-displayed .suey-node-header-text {\n    color: rgba(var(--complement), 1);\n    text-shadow: 0 0 0.15em rgba(var(--shadow), 1);\n}\n\n/***** Node Item */\n\n.suey-node-interior {\n    pointer-events: none;\n    display: flex;\n    flex-direction: row;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    min-width: 100px;\n    min-height: 25px;\n}\n\n.suey-node-item-list {\n    pointer-events: none;\n    display: block;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    width: 50%;\n    min-height: 25px;\n}\n\n/* Item */\n.suey-node-item {\n    pointer-events: none;\n    position: relative;\n    background-color: transparent;\n    color: var(--text);\n    font-size: 85%;\n    width: 100%;\n    padding: var(--pad-medium);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    vertical-align: middle;\n}\n\n.suey-node-displayed .suey-node-item {\n    color: rgba(var(--complement), 1);\n}\n\n.suey-node-left {\n    text-align: left;\n    padding-left: 1.2em;\n}\n\n.suey-node-right {\n    text-align: right;\n    padding-right: 1.2em;\n}\n\n/* Item point */\n.suey-node-item-point {\n    pointer-events: all;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    background-color: rgba(var(--background-dark), 1);\n    border: var(--border-small) solid rgba(var(--button-light), 1);\n    border-radius: 0.3em;\n    outline: none;\n    top: 50%;\n    overflow: visible;\n    z-index: 100; /* Node Item Point */\n}\n\n.suey-node-left .suey-node-item-point {\n    left: 0;\n    transform: translate(-50%, -50%);\n}\n.suey-node-right .suey-node-item-point {\n    right: 0;\n    transform: translate( 50%, -50%);\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-point::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n/* Inner square */\n.suey-node-item.suey-item-connected .suey-node-item-point::after,\n.suey-node-item .suey-node-item-point.suey-active-item::after {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: var(--pad-x-small);\n    background-color: rgb(var(--node-color));\n    border-radius: 0.08em;\n}\n\n/* Item point highlight border */\n.suey-node.suey-node-displayed .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n.suey-node.suey-node-selected .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node-item-point.suey-hover-point, .suey-node.suey-node-selected .suey-node-item-point.suey-hover-point,\n.suey-node-item-point.suey-active-item, .suey-node.suey-node-selected .suey-node-item-point.suey-active-item {\n    border: var(--border-small) solid rgba(var(--highlight), 1);\n    width: 1.2em;\n    height: 1.2em;\n}\n\n/* Item Unhooker (little 'X') */\n.suey-node-item-unhook {\n    pointer-events: none;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    top: 10%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    overflow: visible;\n    filter: brightness(50%);\n    transform: translateY(-50%);\n    opacity: 0;\n}\n\n.suey-node-right .suey-node-item-unhook {\n    left: calc(100% + 0.7em);\n}\n.suey-node-left .suey-node-item-unhook {\n    left: calc(0em - var(--row-height));\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-unhook::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-unhook {\n    pointer-events: all;\n}\n\n.suey-node-item.suey-item-connected:hover .suey-node-item-unhook {\n    opacity: 1;\n}\n\n.suey-node-item-unhook .suey-image {\n    filter: var(--drop-shadow);\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-unhook:hover {\n    filter: brightness(100%);\n}\n";
styleInject(css_248z$3);

var css_248z$2 = "/********** Panel Button **********/\n\n.suey-panel-button {\n    pointer-events: all;\n    border: var(--border-small) solid rgb(var(--icon));\n    outline: solid var(--border-small) rgba(var(--shadow), 0.2);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    filter: none;\n    z-index: 1001; /* Panel Button */\n}\n\n.suey-panel-button:hover {\n    opacity: 1.0;\n    filter: brightness(125%);\n    transition: opacity 0.1s;\n}\n\n.suey-panel-button:active {\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n    filter: brightness(100%);\n}\n\n/********** Corner Buttons **********/\n\n.suey-corner-button {\n    cursor: pointer;\n    border-radius: 50%;\n    outline: none;\n    opacity: 0;\n    overflow: visible;\n    transition: background-color 0.1s, opacity 0.25s ease-in-out;\n}\n\n/* Enlarge button click area */\n.suey-corner-button:before {\n    position: absolute;\n    content: '';\n    top: -0.25em;\n    right: -0.25em;\n    left: -0.25em;\n    bottom: -0.25em;\n    outline: none;\n}\n\n.suey-corner-button.suey-item-shown {\n    opacity: 1.0;\n    filter: brightness(100%);\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button.suey-item-hidden {\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-image {\n    outline: none;\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button:hover .suey-corner-image {\n    opacity: 1.0;\n}\n\n/********** Resizeable **********/\n\n.suey-resizer {\n    --height: 100%;\n    --width: 100%;\n    --offset: 0em;\n    position: absolute;\n    pointer-events: all;\n    margin: 0;\n    opacity: 0;                             /* NOTE: Change to > 0.0 to see 'Resizers' */\n    z-index: 0; /* Resizer */\n}\n\n.suey-resizer-left {\n    background-color: rgb(255, 0, 0);\n    width: var(--resize-size);\n    height: calc(var(--height) - (var(--offset) * 2));\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: col-resize;\n}\n\n.suey-resizer-right {\n    background-color: rgb(0, 0, 255);\n    width: var(--resize-size);\n    height: calc(var(--height) - (var(--offset) * 2));\n    right: 0;\n    top: 0;\n    margin-right: var(--offset);\n    margin-top: var(--offset);\n    cursor: col-resize;\n}\n\n.suey-resizer-top {\n    background-color: rgb(0, 255, 0);\n    width: calc(var(--width) - (var(--offset) * 2));\n    height: var(--resize-size);\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: row-resize;\n}\n\n.suey-resizer-bottom {\n    background-color: rgb(255, 255, 255);\n    width: calc(var(--width) - (var(--offset) * 2));\n    height: var(--resize-size);\n    left: 0;\n    bottom: 0;\n    margin-left: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: row-resize;\n}\n\n.suey-resizer-top-left {\n    background-color: rgb(255, 255, 0);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-top-right {\n    background-color: rgb(0, 255, 255);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    right: 0;\n    top: 0;\n    margin-right: var(--offset);\n    margin-top: var(--offset);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-bottom-right {\n    background-color: rgb(255, 0, 255);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    right: 0;\n    bottom: 0;\n    margin-right: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-bottom-left {\n    background-color: rgb(0, 0, 0);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    left: 0;\n    bottom: 0;\n    margin-left: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n";
var stylesheet$2="/********** Panel Button **********/\n\n.suey-panel-button {\n    pointer-events: all;\n    border: var(--border-small) solid rgb(var(--icon));\n    outline: solid var(--border-small) rgba(var(--shadow), 0.2);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    filter: none;\n    z-index: 1001; /* Panel Button */\n}\n\n.suey-panel-button:hover {\n    opacity: 1.0;\n    filter: brightness(125%);\n    transition: opacity 0.1s;\n}\n\n.suey-panel-button:active {\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n    filter: brightness(100%);\n}\n\n/********** Corner Buttons **********/\n\n.suey-corner-button {\n    cursor: pointer;\n    border-radius: 50%;\n    outline: none;\n    opacity: 0;\n    overflow: visible;\n    transition: background-color 0.1s, opacity 0.25s ease-in-out;\n}\n\n/* Enlarge button click area */\n.suey-corner-button:before {\n    position: absolute;\n    content: '';\n    top: -0.25em;\n    right: -0.25em;\n    left: -0.25em;\n    bottom: -0.25em;\n    outline: none;\n}\n\n.suey-corner-button.suey-item-shown {\n    opacity: 1.0;\n    filter: brightness(100%);\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button.suey-item-hidden {\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-image {\n    outline: none;\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button:hover .suey-corner-image {\n    opacity: 1.0;\n}\n\n/********** Resizeable **********/\n\n.suey-resizer {\n    --height: 100%;\n    --width: 100%;\n    --offset: 0em;\n    position: absolute;\n    pointer-events: all;\n    margin: 0;\n    opacity: 0;                             /* NOTE: Change to > 0.0 to see 'Resizers' */\n    z-index: 0; /* Resizer */\n}\n\n.suey-resizer-left {\n    background-color: rgb(255, 0, 0);\n    width: var(--resize-size);\n    height: calc(var(--height) - (var(--offset) * 2));\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: col-resize;\n}\n\n.suey-resizer-right {\n    background-color: rgb(0, 0, 255);\n    width: var(--resize-size);\n    height: calc(var(--height) - (var(--offset) * 2));\n    right: 0;\n    top: 0;\n    margin-right: var(--offset);\n    margin-top: var(--offset);\n    cursor: col-resize;\n}\n\n.suey-resizer-top {\n    background-color: rgb(0, 255, 0);\n    width: calc(var(--width) - (var(--offset) * 2));\n    height: var(--resize-size);\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: row-resize;\n}\n\n.suey-resizer-bottom {\n    background-color: rgb(255, 255, 255);\n    width: calc(var(--width) - (var(--offset) * 2));\n    height: var(--resize-size);\n    left: 0;\n    bottom: 0;\n    margin-left: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: row-resize;\n}\n\n.suey-resizer-top-left {\n    background-color: rgb(255, 255, 0);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-top-right {\n    background-color: rgb(0, 255, 255);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    right: 0;\n    top: 0;\n    margin-right: var(--offset);\n    margin-top: var(--offset);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-bottom-right {\n    background-color: rgb(255, 0, 255);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    right: 0;\n    bottom: 0;\n    margin-right: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-bottom-left {\n    background-color: rgb(0, 0, 0);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    left: 0;\n    bottom: 0;\n    margin-left: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n";
styleInject(css_248z$2);

var css_248z$1 = ".suey-tooltip, .suey-info-box {\n    display: inline-block;\n    color: rgba(var(--highlight), 1);\n\n    /* NEW: Dark, Flat Box */\n    background-color: rgba(var(--background-dark), 1.0);\n    border: solid var(--border-small) rgba(var(--icon), 1);\n\n    /* OLD: Raised Icon Color Button\n    background-color: transparent;\n    background-image: linear-gradient(to top, rgba(var(--icon-dark), 1.0), rgba(var(--icon-light), 1.0));\n    border-radius: var(--radius-large);\n    */\n\n    border-radius: var(--radius-large);\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.75),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    padding: 0.3em 1.1em;\n    pointer-events: none;\n\n    white-space: nowrap;\n    z-index: 1001; /* Tooltip, InfoBox */\n}\n\n.suey-tooltip {\n    position: absolute;\n    opacity: 0;\n    transform: scale(0.25);\n    transform-origin: center;\n    transition: opacity 0.2s, transform 0.2s;\n    transition-delay: 0ms;\n}\n\n.suey-tooltip.suey-updated {\n    opacity: 1.0;\n    transform: scale(1.0);\n    transition-delay: var(--tooltip-delay);\n}\n\n.suey-info-box {\n    margin: 0;\n    position: absolute;\n    opacity: 0;\n    transition: opacity 1.0s ease-in;\n}\n\n.suey-info-box.suey-updated {\n    opacity: 1.0;\n    transition: opacity 0.0s ease-in;\n}\n";
var stylesheet$1=".suey-tooltip, .suey-info-box {\n    display: inline-block;\n    color: rgba(var(--highlight), 1);\n\n    /* NEW: Dark, Flat Box */\n    background-color: rgba(var(--background-dark), 1.0);\n    border: solid var(--border-small) rgba(var(--icon), 1);\n\n    /* OLD: Raised Icon Color Button\n    background-color: transparent;\n    background-image: linear-gradient(to top, rgba(var(--icon-dark), 1.0), rgba(var(--icon-light), 1.0));\n    border-radius: var(--radius-large);\n    */\n\n    border-radius: var(--radius-large);\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.75),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    padding: 0.3em 1.1em;\n    pointer-events: none;\n\n    white-space: nowrap;\n    z-index: 1001; /* Tooltip, InfoBox */\n}\n\n.suey-tooltip {\n    position: absolute;\n    opacity: 0;\n    transform: scale(0.25);\n    transform-origin: center;\n    transition: opacity 0.2s, transform 0.2s;\n    transition-delay: 0ms;\n}\n\n.suey-tooltip.suey-updated {\n    opacity: 1.0;\n    transform: scale(1.0);\n    transition-delay: var(--tooltip-delay);\n}\n\n.suey-info-box {\n    margin: 0;\n    position: absolute;\n    opacity: 0;\n    transition: opacity 1.0s ease-in;\n}\n\n.suey-info-box.suey-updated {\n    opacity: 1.0;\n    transition: opacity 0.0s ease-in;\n}\n";
styleInject(css_248z$1);

var css_248z = "/********** Disabled **********/\n\n.suey-hidden {\n    display: none !important;\n    pointer-events: none !important;\n}\n\n/** Grayscale filter for disabled items */\n.suey-disabled {\n    filter: contrast(75%) grayscale(100%) !important;\n    opacity: 0.7 !important;\n    cursor: default !important;\n    /* pointer-events: none !important; */\n}\n\n/** Element becomes 'unselectable', https://developer.mozilla.org/en-US/docs/Web/CSS/user-select */\n.suey-unselectable {\n    user-select: none;\n}\n\n/********** Coloring **********/\n\n.suey-icon-colorize /* aqua */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 160deg));\n}\n\n.suey-complement-colorize /* orange */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 0deg));\n}\n\n.suey-match-scheme {\n    filter: saturate(125%) hue-rotate(var(--rotate-hue));\n}\n\n.suey-match-complement {\n    filter: saturate(125%) hue-rotate(calc(var(--rotate-hue) + 180deg));\n}\n\n.suey-black-or-white {\n    filter: brightness(calc(1 * var(--bright)));\n}\n\n.suey-black-or-white.suey-highlight {\n    filter: brightness(calc((2 * var(--bright)) + 0.35));\n}\n\n.suey-black-or-white.suey-drop-shadow {\n    filter: brightness(calc(10 * var(--bright))) var(--drop-shadow);\n}\n\n/********** Menu **********/\n\n.suey-keep-open {\n    /* keeps menu open on click, handled in Menu */\n}\n\n/********** Mouse Cursor **********/\n\n.suey-cursor-override {\n    /** global cursor override */\n}\n\n.suey-cursor-override * {\n    cursor: inherit !important;\n}\n\n/********** Tree List **********/\n\n.suey-no-select {\n    /* disables tree list option, handled in Tree List */\n}\n";
var stylesheet="/********** Disabled **********/\n\n.suey-hidden {\n    display: none !important;\n    pointer-events: none !important;\n}\n\n/** Grayscale filter for disabled items */\n.suey-disabled {\n    filter: contrast(75%) grayscale(100%) !important;\n    opacity: 0.7 !important;\n    cursor: default !important;\n    /* pointer-events: none !important; */\n}\n\n/** Element becomes 'unselectable', https://developer.mozilla.org/en-US/docs/Web/CSS/user-select */\n.suey-unselectable {\n    user-select: none;\n}\n\n/********** Coloring **********/\n\n.suey-icon-colorize /* aqua */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 160deg));\n}\n\n.suey-complement-colorize /* orange */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 0deg));\n}\n\n.suey-match-scheme {\n    filter: saturate(125%) hue-rotate(var(--rotate-hue));\n}\n\n.suey-match-complement {\n    filter: saturate(125%) hue-rotate(calc(var(--rotate-hue) + 180deg));\n}\n\n.suey-black-or-white {\n    filter: brightness(calc(1 * var(--bright)));\n}\n\n.suey-black-or-white.suey-highlight {\n    filter: brightness(calc((2 * var(--bright)) + 0.35));\n}\n\n.suey-black-or-white.suey-drop-shadow {\n    filter: brightness(calc(10 * var(--bright))) var(--drop-shadow);\n}\n\n/********** Menu **********/\n\n.suey-keep-open {\n    /* keeps menu open on click, handled in Menu */\n}\n\n/********** Mouse Cursor **********/\n\n.suey-cursor-override {\n    /** global cursor override */\n}\n\n.suey-cursor-override * {\n    cursor: inherit !important;\n}\n\n/********** Tree List **********/\n\n.suey-no-select {\n    /* disables tree list option, handled in Tree List */\n}\n";
styleInject(css_248z);

export { ALIGN, AbsoluteBox, AssetBox, BACKGROUNDS, BUTTON_TYPES, Break, Button, CLOSE_SIDES, CORNER_BUTTONS, Canvas, Checkbox, Color, ColorScheme, ColorizeFilter, Css, DOCK_SIDES, Div, Docker, Dom, Dropdown, DualSlider, Element, FlexBox, FlexSpacer, Floater, GRAPH_GRID_TYPES, GRAPH_LINE_TYPES, GRID_SIZE, Gooey, Graph, IMAGE_ADD, IMAGE_CHECK, IMAGE_CLOSE, IMAGE_EMPTY, IMAGE_ERROR, IMAGE_EXPAND, IMAGE_INFO, IMAGE_QUESTION, IMAGE_WARNING, Image, Interaction, Iris, LEFT_SPACING, MOUSE_CLICK, MOUSE_SLOP_LARGE, MOUSE_SLOP_SMALL, MainWindow, Menu, MenuItem, MenuSeparator, MenuShortcut, NODE_TYPES, Node, NodeItem, NumberBox, NumberScroll, OVERFLOW, PANEL_STYLES$1 as PANEL_STYLES, POSITION, Panel, Popper, PropertyList, QUESTION_COLORS, QUESTION_ICONS, Question, RESIZERS, Resizeable, Row, Scrollable, ShadowBox, Shrinkable, Signal, SignalBinding, Slider, SliderBox, Span, Strings, TAB_SIDES, THEMES, TOOLTIP_Y_OFFSET, TRAIT, Tabbed, Text, TextArea, TextBox, Titled, ToolbarButton, ToolbarSeparator, ToolbarSpacer, TreeList, VectorBox, Window, tooltipper };
