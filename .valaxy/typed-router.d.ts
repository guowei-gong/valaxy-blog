/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/404': RouteRecordInfo<'/404', '/404', Record<never, never>, Record<never, never>>,
    '/about/': RouteRecordInfo<'/about/', '/about', Record<never, never>, Record<never, never>>,
    '/about/site': RouteRecordInfo<'/about/site', '/about/site', Record<never, never>, Record<never, never>>,
    '/archives/': RouteRecordInfo<'/archives/', '/archives', Record<never, never>, Record<never, never>>,
    '/categories/': RouteRecordInfo<'/categories/', '/categories', Record<never, never>, Record<never, never>>,
    '/links/': RouteRecordInfo<'/links/', '/links', Record<never, never>, Record<never, never>>,
    '/page/[page]': RouteRecordInfo<'/page/[page]', '/page/:page', { page: ParamValue<true> }, { page: ParamValue<false> }>,
    '/posts/2022-summary-and-2023-plans': RouteRecordInfo<'/posts/2022-summary-and-2023-plans', '/posts/2022-summary-and-2023-plans', Record<never, never>, Record<never, never>>,
    '/posts/can-not-draw-SSR': RouteRecordInfo<'/posts/can-not-draw-SSR', '/posts/can-not-draw-SSR', Record<never, never>, Record<never, never>>,
    '/posts/change-struct-performace-directly': RouteRecordInfo<'/posts/change-struct-performace-directly', '/posts/change-struct-performace-directly', Record<never, never>, Record<never, never>>,
    '/posts/cisc-risc': RouteRecordInfo<'/posts/cisc-risc', '/posts/cisc-risc', Record<never, never>, Record<never, never>>,
    '/posts/compilation-booklet/1': RouteRecordInfo<'/posts/compilation-booklet/1', '/posts/compilation-booklet/1', Record<never, never>, Record<never, never>>,
    '/posts/compilation-booklet/2': RouteRecordInfo<'/posts/compilation-booklet/2', '/posts/compilation-booklet/2', Record<never, never>, Record<never, never>>,
    '/posts/compilation-booklet/3': RouteRecordInfo<'/posts/compilation-booklet/3', '/posts/compilation-booklet/3', Record<never, never>, Record<never, never>>,
    '/posts/compilation-booklet/4': RouteRecordInfo<'/posts/compilation-booklet/4', '/posts/compilation-booklet/4', Record<never, never>, Record<never, never>>,
    '/posts/compilation-booklet/5': RouteRecordInfo<'/posts/compilation-booklet/5', '/posts/compilation-booklet/5', Record<never, never>, Record<never, never>>,
    '/posts/compilation-booklet/6': RouteRecordInfo<'/posts/compilation-booklet/6', '/posts/compilation-booklet/6', Record<never, never>, Record<never, never>>,
    '/posts/compilation-booklet/7': RouteRecordInfo<'/posts/compilation-booklet/7', '/posts/compilation-booklet/7', Record<never, never>, Record<never, never>>,
    '/posts/compilation-booklet/8': RouteRecordInfo<'/posts/compilation-booklet/8', '/posts/compilation-booklet/8', Record<never, never>, Record<never, never>>,
    '/posts/compilation-booklet/9': RouteRecordInfo<'/posts/compilation-booklet/9', '/posts/compilation-booklet/9', Record<never, never>, Record<never, never>>,
    '/posts/compilation-booklet/preamble': RouteRecordInfo<'/posts/compilation-booklet/preamble', '/posts/compilation-booklet/preamble', Record<never, never>, Record<never, never>>,
    '/posts/design-an-index-module-for-db': RouteRecordInfo<'/posts/design-an-index-module-for-db', '/posts/design-an-index-module-for-db', Record<never, never>, Record<never, never>>,
    '/posts/finish-first-then-perfect': RouteRecordInfo<'/posts/finish-first-then-perfect', '/posts/finish-first-then-perfect', Record<never, never>, Record<never, never>>,
    '/posts/game-login-system': RouteRecordInfo<'/posts/game-login-system', '/posts/game-login-system', Record<never, never>, Record<never, never>>,
    '/posts/game-server-compared-game-client': RouteRecordInfo<'/posts/game-server-compared-game-client', '/posts/game-server-compared-game-client', Record<never, never>, Record<never, never>>,
    '/posts/get-start-with-network-architecture': RouteRecordInfo<'/posts/get-start-with-network-architecture', '/posts/get-start-with-network-architecture', Record<never, never>, Record<never, never>>,
    '/posts/http-content-negotiation': RouteRecordInfo<'/posts/http-content-negotiation', '/posts/http-content-negotiation', Record<never, never>, Record<never, never>>,
    '/posts/missing-out-on-a-whole-life': RouteRecordInfo<'/posts/missing-out-on-a-whole-life', '/posts/missing-out-on-a-whole-life', Record<never, never>, Record<never, never>>,
    '/posts/multiplayer-frame-sync': RouteRecordInfo<'/posts/multiplayer-frame-sync', '/posts/multiplayer-frame-sync', Record<never, never>, Record<never, never>>,
    '/posts/pay-for-a-traffic-accident': RouteRecordInfo<'/posts/pay-for-a-traffic-accident', '/posts/pay-for-a-traffic-accident', Record<never, never>, Record<never, never>>,
    '/posts/redis-booklet/object/1': RouteRecordInfo<'/posts/redis-booklet/object/1', '/posts/redis-booklet/object/1', Record<never, never>, Record<never, never>>,
    '/posts/redis-booklet/object/2': RouteRecordInfo<'/posts/redis-booklet/object/2', '/posts/redis-booklet/object/2', Record<never, never>, Record<never, never>>,
    '/posts/redis-booklet/object/3': RouteRecordInfo<'/posts/redis-booklet/object/3', '/posts/redis-booklet/object/3', Record<never, never>, Record<never, never>>,
    '/posts/redis-booklet/object/4': RouteRecordInfo<'/posts/redis-booklet/object/4', '/posts/redis-booklet/object/4', Record<never, never>, Record<never, never>>,
    '/posts/redis-data-structure-selection': RouteRecordInfo<'/posts/redis-data-structure-selection', '/posts/redis-data-structure-selection', Record<never, never>, Record<never, never>>,
    '/posts/remote-party-closed-the-ws-conn-without': RouteRecordInfo<'/posts/remote-party-closed-the-ws-conn-without', '/posts/remote-party-closed-the-ws-conn-without', Record<never, never>, Record<never, never>>,
    '/tags/': RouteRecordInfo<'/tags/', '/tags', Record<never, never>, Record<never, never>>,
  }
}