import { mappings } from "@aemforms/af-react-components";
import RichText from "../components/richtext";
import Slider from "../components/slider";

const customMappings: any = {
  'custom:slider': Slider,
  "custom:rich-text": RichText,
  ...mappings
};

export default customMappings;