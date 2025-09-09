// Simple implementation of class-variance-authority for button variants
export type VariantProps<T> = T extends (...args: any[]) => any
  ? Parameters<T>[0]
  : never

export function cva(
  base: string,
  config?: {
    variants?: Record<string, Record<string, string>>
    defaultVariants?: Record<string, string>
  }
) {
  return (props?: Record<string, string>) => {
    let classes = base

    if (config?.variants && props) {
      Object.entries(props).forEach(([key, value]) => {
        if (config.variants?.[key]?.[value]) {
          classes += ` ${config.variants[key][value]}`
        }
      })
    }

    // Apply default variants if not provided
    if (config?.defaultVariants) {
      Object.entries(config.defaultVariants).forEach(([key, value]) => {
        if (!props?.[key] && config.variants?.[key]?.[value]) {
          classes += ` ${config.variants[key][value]}`
        }
      })
    }

    return classes
  }
}