import { createReadonlyState } from '@autumnbox/sdk/common';

import type { ServiceContainer } from '@autumnbox/sdk/common';
import type { IReadonlyState } from '@autumnbox/sdk/common';

/**
 * 示例 Service —— 展示如何通过 IoC 容器注册共享服务。
 *
 * 构建时自动发现并注册，token 为 'example'（类名去掉 Service 后缀，首字母小写）。
 * 在开发你自己的插件时，请删除此文件，替换为你的业务 Service。
 */
export class ExampleService {
  /** 插件包名（响应式状态，UI 可订阅） */
  readonly packageName: IReadonlyState<string>;

  constructor(container: ServiceContainer) {
    // 从 container 中可以获取其他服务，例如：
    // const shell = container.getService(ShellService);
    const [packageName] = createReadonlyState('@autumnbox/plugin-template');
    this.packageName = packageName;
  }

  /** 获取插件信息描述 */
  getInfo(): string {
    return `当前插件: ${this.packageName.value}`;
  }
}
