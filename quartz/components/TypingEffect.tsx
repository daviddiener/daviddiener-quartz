// @ts-ignore
import typingEffectScript from "./scripts/typingEffect.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const TypingEffect: QuartzComponent = (_props: QuartzComponentProps) => {
  return null
}

TypingEffect.beforeDOMLoaded = typingEffectScript

export default (() => TypingEffect) satisfies QuartzComponentConstructor
