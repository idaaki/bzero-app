import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import BaseInertiaMiddleware from '@adonisjs/inertia/inertia_middleware'

export default class InertiaMiddleware extends BaseInertiaMiddleware {
  async share(_ctx: HttpContext) {
    return {}
  }

  async handle(ctx: HttpContext, next: NextFn) {
    await this.init(ctx)
    await next()
    this.dispose(ctx)
  }
}
