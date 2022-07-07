declare module "*.svg" {
  type SVGComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default SVGComponent
}
