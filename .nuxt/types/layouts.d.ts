import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default"
declare module "../../node_modules/.pnpm/nuxt@3.12.3_@opentelemetry+api@1.9.0_@parcel+watcher@2.4.1_@types+node@20.14.9_eslint@8.57.0__4ecnx3d3omcuta74ssg47dugd4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}