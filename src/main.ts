import type { PluginContext } from '@autumnbox/sdk';

/**
 * 插件初始化入口（可选）。
 *
 * App、Card、Service 的注册由构建系统自动处理，不需要在此手动注册。
 * 此函数仅用于需要在插件加载时执行的额外初始化逻辑。
 *
 * @returns 可选的清理函数，在插件卸载时调用。
 */
export function main(context: PluginContext): (() => void) | void {
  console.log(`[${context.pluginPackageName}] 插件已加载`);

  return () => {
    console.log(`[${context.pluginPackageName}] 插件已卸载`);
  };
}
