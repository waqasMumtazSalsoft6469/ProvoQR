import { vw } from "./Units";
const backgroundWidth = 110*vw
const backgroundFactor = 0.75
const backgroundHeight = backgroundWidth * backgroundFactor
const Measurements = {
    backgroundWidth:backgroundWidth,
    backgroundHeight:backgroundHeight,
    backgroundLeft:-5*vw,
    backgroundTop:-backgroundHeight/2.1,
    marginLeft:5*vw
}
export default Measurements;