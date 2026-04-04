import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import style from "./styles/photoGallery.scss"
import { Date, getDate } from "./Date"
import { GlobalConfiguration } from "../cfg"
import { classNames } from "../util/lang"

interface Options {
  filter: (f: QuartzPluginData) => boolean
  sort: (f1: QuartzPluginData, f2: QuartzPluginData) => number
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  filter: (f) => f.slug !== "index" && !f.slug?.startsWith("tags/") && !f.slug?.startsWith("Assets/"),
  sort: byDateAndAlphabetical(cfg),
})

export default ((userOpts?: Partial<Options>) => {
  const PhotoGallery: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    const pages = allFiles.filter(opts.filter).sort(opts.sort)
    
    return (
      <div class={classNames(displayClass, "photo-gallery")}>
        {pages.map((page) => {
          const title = page.frontmatter?.title ?? "Untitled"
          const cover = page.frontmatter?.cover as string | undefined
          
          // Determine cover image URL
          let coverUrl = ""
          if (cover) {
            // resolve relative to the current page (index)
            coverUrl = resolveRelative(fileData.slug!, cover as FullSlug)
          }

          // Extract category from folder (slug is like "Game-Development/Gem-Z")
          const slugParts = page.slug?.split("/") ?? []
          let category = "Note"
          if (slugParts.length > 1) {
             // Take the parent folder name and format it
             category = slugParts[0].replace(/-/g, ' ')
          }

          return (
            <a href={resolveRelative(fileData.slug!, page.slug!)} class="gallery-card internal">
              {coverUrl && (
                <img src={coverUrl} alt={title} class="cover-image" />
              )}
              <div class="card-content">
                <h3>{title}</h3>
                {page.dates && (
                  <p class="meta">
                    <Date date={getDate(cfg, page)!} locale={cfg.locale} />
                  </p>
                )}
                <span class="category-badge">{category}</span>
              </div>
            </a>
          )
        })}
      </div>
    )
  }

  PhotoGallery.css = style
  return PhotoGallery
}) satisfies QuartzComponentConstructor
