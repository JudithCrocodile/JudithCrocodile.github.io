import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["stylelint"]?: typeof import("@nuxtjs/stylelint-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/stylelint-module", Exclude<NuxtConfig["stylelint"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["stylelint"]?: typeof import("@nuxtjs/stylelint-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/stylelint-module", Exclude<NuxtConfig["stylelint"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },
  }
  interface PublicRuntimeConfig {

  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }