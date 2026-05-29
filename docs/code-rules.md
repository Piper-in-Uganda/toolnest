# ToolNest 代码规范

## 文档说明

本文档约定 ToolNest 项目的编码风格、文件组织、TypeScript 用法与 Next.js 最佳实践，便于团队协作与长期维护。

---

## 总则

1. **可读性优先**：代码应自解释，复杂逻辑才写注释
2. **最小改动**：只修改与任务相关的文件，避免无关重构
3. **类型安全**：充分利用 TypeScript，避免 `any`
4. **复用优先**：重复 UI 提取到 `components/`，重复逻辑提取到 `lib/`
5. **单一数据源**：工具列表、导航、SEO 路径等避免多处硬编码

---

## 技术约定

### 语言与框架

- 使用 **TypeScript**（`.ts` / `.tsx`），启用 `strict` 模式
- 使用 **Next.js App Router**，不引入 Pages Router
- 样式仅使用 **Tailwind CSS**，不写内联 `style`（特殊情况除外）
- 路径别名：使用 `@/` 引用项目根目录文件

```typescript
import { tools } from '@/lib/tools'
import { ToolCard } from '@/components/ui/tool-card'
```

### React 组件

| 类型 | 约定 |
|------|------|
| 服务端组件 | 默认；用于静态内容、Metadata、数据获取 |
| 客户端组件 | 文件顶部声明 `'use client'`；用于 `useState`、`useMemo`、事件处理 |
| 组件命名 | PascalCase，文件名与默认导出一致（如 `ToolCard` → `tool-card.tsx`） |
| Props | 使用 `type` 定义，命名 `XxxProps` |

```typescript
type ToolCardProps = {
  href: string
  title: string
  description: string
}

export function ToolCard({ href, title, description }: ToolCardProps) {
  // ...
}
```

### Client Component 的 Metadata

客户端页面**不能**导出 `metadata`。做法：

- 在 `app/tools/[tool-name]/layout.tsx` 中导出 `metadata`
- 页面逻辑保留在 `page.tsx`（Client Component）

---

## 目录与文件命名

| 类型 | 约定 | 示例 |
|------|------|------|
| 路由页面 | `page.tsx` | `app/tools/word-counter/page.tsx` |
| 布局 | `layout.tsx` | `app/layout.tsx` |
| UI 组件 | kebab-case | `components/ui/stat-card.tsx` |
| 逻辑模块 | kebab-case | `lib/text-diff.ts` |
| 类型定义 | 与模块同文件或 `lib/` 集中 | `export type Tool = { ... }` |

### 新增工具的标准步骤

1. 在 `lib/tools.ts` 的 `tools` 数组中注册工具
2. 创建 `app/tools/[slug]/page.tsx`（交互逻辑）
3. 创建 `app/tools/[slug]/layout.tsx`（SEO Metadata）
4. 在 `lib/seo.ts` 添加 `xxxSeo` 配置
5. 在 `app/sitemap.ts` 的索引列表中加入该页面 SEO 配置
6. 复用 `PageContainer`、`StatCard` 等 UI 组件

---

## TypeScript 规范

### 推荐

```typescript
// 使用 const 对象 + as const 表示不可变配置
export const siteConfig = {
  name: 'ToolNest',
  locale: 'en_US',
} as const

// 使用显式返回类型（公共 API / lib 函数）
export function compareTexts(left: string, right: string): TextComparison {
  // ...
}

// 使用 satisfies 校验数组元素形状（可选）
export const tools = [...] satisfies Tool[]
```

### 避免

```typescript
// ❌ 避免 any
function parse(data: any) {}

// ❌ 避免非空断言滥用
const value = arr.shift()!

// ❌ 避免在组件中写大段算法，应抽到 lib/
```

---

## 样式规范

- 使用 Tailwind 工具类组合，不创建过多自定义 class
- 动态 class 使用映射对象，避免模板字符串拼接（利于 JIT 扫描）

```typescript
const maxWidthClasses: Record<'5xl' | '6xl', string> = {
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
}
```

- 响应式：移动端优先，逐步添加 `sm:`、`lg:` 前缀

---

## 状态与性能

- 工具页实时计算使用 `useMemo`，依赖项完整声明
- 避免在 render 中创建新函数/对象导致子组件无效重渲染（必要时 `useCallback`）
- 文本 Diff 等重计算逻辑放在 `lib/`，便于测试与复用

---

## SEO 与 Metadata

- 全站默认 Metadata：`app/layout.tsx` 引用 `rootMetadata`
- 各页独立配置：通过 `lib/seo.ts` 的 `createPageMetadata`
- 新增页面必须更新：`lib/seo.ts`、`app/sitemap.ts`、必要时 `layout.tsx`
- 生产环境必须配置 `NEXT_PUBLIC_SITE_URL`

---

## 注释规范

- **不写**显而易见的注释（如 `// 设置 state`）
- **要写**非显而易见的业务规则或算法说明

```typescript
// 阅读时间按 200 字/分钟估算，最少 1 分钟
const readingTimeMinutes = words > 0 ? Math.max(1, Math.ceil(words / 200)) : 0
```

- 公共 `lib` 函数可加 JSDoc（复杂 API）

---

## Git 提交规范

建议格式：

```text
<type>: <简短描述>

feat     新功能
fix      修复
docs     文档
style    格式（不影响逻辑）
refactor 重构
chore    构建/依赖
```

示例：

```text
feat: 新增文本对比工具页
docs: 补充设计系统色彩说明
fix: 修正 sitemap 缺少工具页路径
```

---

## 代码检查

提交前建议执行：

```bash
npm run lint
npm run build
```

- ESLint 使用 `eslint-config-next`
- 构建失败不得合并至主分支

---

## 安全与隐私

- 不在仓库提交 `.env`、密钥、Token
- 工具默认在浏览器端处理文本，不向服务器发送用户内容（当前架构）
- 新增外部 API 调用需评估隐私与 CORS

---

## 禁止事项

- ❌ 不要绕过 `lib/tools.ts` 单独硬编码导航链接
- ❌ 不要在 `app/` 外放置路由页面
- ❌ 不要为单个工具复制粘贴整页 UI，应扩展现有组件
- ❌ 不要提交 `node_modules`、`.next` 到 Git
- ❌ 不要在不读 `node_modules/next/dist/docs/` 的情况下假设 Next.js API（本项目使用 Next.js 16，可能有破坏性变更）

---

## 相关文档

- [项目概览](./project-overview.md)
- [设计系统](./design-system.md)
- [工具路线图](./tool-roadmap.md)

*最后更新：2026 年 5 月*
