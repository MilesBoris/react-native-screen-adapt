import {Dimensions, PixelRatio} from 'react-native';

const BASE_WIN_HEIGHT = 667;
const BASE_WIN_WIDTH = 375;
const pixelRatio = PixelRatio.get();      // 返回设备的像素密度
const pixelRatio6 = 2;      // 返回iPhone6的像素密度
const fontScale = PixelRatio.getFontScale();  // 字体大小缩放比例


const adapt = {

    // 根据实际屏幕尺寸转换对应的像素高度
    getHeight: function (h) {
        if(!this.height) {
            const {height, width} = Dimensions.get('window');
            this.height = height;
            this.width = width;
        }
        return h / pixelRatio * (this.height / BASE_WIN_HEIGHT);
    },

    // 根据实际屏幕尺寸转换对应的像素宽度
    getWidth: function (w) {
        if(!this.width) {
            const {height, width} = Dimensions.get('window');
            this.height = height;
            this.width = width;
        }
        return w / pixelRatio * (this.width / BASE_WIN_WIDTH);
    },

    // 根据实际屏幕尺寸转换对应的字体大小
    setFontSize: function (val) {
        const {height, width} = Dimensions.get('window');
        const scale = Math.min(height / BASE_WIN_HEIGHT, width / BASE_WIN_WIDTH);
        val = (val * scale) * pixelRatio / fontScale;
        return val / pixelRatio6;
    }

}


export default adapt;