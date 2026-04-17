# 秋之盒插件模板

基于 convention-based auto-discovery 的插件开发模板。包含示例 App、Card 和 Service。

## 快速开始

```bash
git clone https://github.com/zsh2401/AutumnBoxPluginTemplate.git my-plugin
cd my-plugin
pnpm install
pnpm run build      # 构建插件，产出 .atmb 文件
```

## 项目结构

```
src/
├── apps/
│   └── ExampleApp.tsx        ← App：标签页应用
├── cards/
│   └── ExampleCard.tsx       ← Card：首页卡片
├── services/
│   └── ExampleService.ts     ← Service：共享服务
├── main.ts                   ← 可选：插件初始化
resources/
└── lang/
    ├── zh-CN.json            ← 中文 i18n + 插件元数据
    └── en-US.json            ← 英文 i18n + 插件元数据
```

## 约定

| 目录 | 导出模式 | 自动行为 |
|------|----------|----------|
| `src/apps/` | `export const *App: AutumnApp` | 注册为标签页应用 |
| `src/cards/` | `export const *Card: AutumnCard` | 注册为首页卡片 |
| `src/services/` | `export class *Service` | 注册到 IoC 容器 |
| `src/main.ts` | `export function main(ctx)` | 插件初始化（可选） |

构建时 SDK 自动扫描这三个目录，生成注册代码到 `src/__entry__.ts`。**不需要手动注册。**

## 插件元数据

`resources/lang/*.json` 中的特殊键会在打包时自动转换为命名空间键：

| 键 | 用途 |
|---|---|
| `<name>` | 插件显示名称 |
| `<description>` | 插件描述（支持 Markdown） |
| `<author>` | 作者名称 |

## 构建与打包

```bash
pnpm run build       # 构建 → dist/index.js + .atmb 文件
pnpm run typecheck   # 类型检查
pnpm run clean       # 清理构建产物
```

产出的 `.atmb` 文件复制到秋之盒 `builtin-plugins/` 目录即可加载。

## 开始开发

1. 修改 `package.json` 中的 `name` 为你的插件包名
2. 修改 `resources/lang/*.json` 中的 `<name>`、`<description>`、`<author>`
3. 删除示例文件，创建你自己的 App、Card、Service
4. `pnpm run build` 构建并测试

## SDK 导入路径

| 导入路径 | 内容 |
|---|---|
| `@autumnbox/sdk` | `AutumnApp`、`AutumnCard`、`PluginContext` 等核心类型 |
| `@autumnbox/sdk/app` | `useService`、`useServiceState`、`useT` 等 hooks |
| `@autumnbox/sdk/common` | `createReadonlyState`、`ServiceContainer` 等基础设施 |
| `@autumnbox/sdk/core` | `DevicesService`、`ShellService` 等核心服务类 |
| `@autumnbox/sdk/types` | `IAdbDriver`、`AdbDeviceHandle` 等接口类型 |

## 文档

- [插件开发文档](https://www.atmb.top/dev/sdk2/)
