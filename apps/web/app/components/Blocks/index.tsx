import { CallToAction as cta } from './sections/CallToAction';
import { Image as image } from './sections/Image';
import { Content as content } from './sections/Content';

export const components = {
  content,
  cta,
  image,
} as const;

export { RenderBlocks } from './RenderBlocks';
