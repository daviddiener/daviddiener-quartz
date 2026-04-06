import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const SocialLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    return (
      <div class={classNames(displayClass, "social-links")}>
        {Object.entries(links).map(([text, link]) => {
          const icon = text.toLowerCase() === "github" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          ) : text.toLowerCase() === "linkedin" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          ) : null

          return (
            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
              {icon}
              <span>{text}</span>
            </a>
          )
        })}
      </div>
    )
  }

  SocialLinks.css = `
  .social-links {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 1.5rem 0;
    flex-wrap: wrap;
  }
  
  .social-links a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none !important;
    color: var(--darkgray) !important;
    font-weight: 500;
    transition: all 0.2s ease;
    padding: 0.4rem 1rem;
    border-radius: 6px;
    background: var(--lightgray);
    font-size: 0.9rem;
  }
  
  .social-links a:hover {
    color: var(--secondary) !important;
    background: var(--highlight);
    transform: translateY(-2px);
  }
  
  .social-links a svg {
    stroke: currentColor;
  }
  `

  return SocialLinks
}) satisfies QuartzComponentConstructor
