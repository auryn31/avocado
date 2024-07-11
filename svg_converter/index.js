import { createInterpolator } from "svg-path-interpolator";
const svgString = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="792px" height="612px" viewBox="0 0 792 612" enable-background="new 0 0 792 612" xml:space="preserve">
    <g>
        <path id="path3789" d="M287.168,442.411
        c-8.65,0-15.652,7.003-15.652,15.653
        c0,8.65,7.003,15.69,15.652,15.69
        s15.653-7.04,15.653-15.69
        "/>
    </g>
</svg>
`;
const run = async () => {
  const config = {
    joinPathData: false,
    minDistance: 0.5,
    roundToNearest: 0.25,
    sampleFrequency: 0.001,
  };
  const interpolator = await createInterpolator(
    config,
    "../node_modules/svg-path-interpolator/sax-wasm.wasm",
  );
  const pathData = interpolator.processSVG(svgString);
  console.log(pathData);
};

run();
