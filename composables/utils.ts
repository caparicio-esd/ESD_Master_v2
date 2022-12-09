import slugify from "slugify"

export const utilsSlugify = (input: string): string =>
  slugify(input).toLowerCase()
