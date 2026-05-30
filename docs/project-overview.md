# ToolNest 项目概览

## 文档说明

本文档描述 ToolNest 的项目目标、技术选型、目录结构与协作部署流程，供团队成员与后续维护者快速了解项目全貌。

---

## 项目目标

ToolNest 是一个面向写作者、编辑者与内容团队的**在线文本工具平台**，致力于：

- 提供**快速、免费、无需注册**的浏览器端文本工具
- 以**简洁现代**的界面降低使用成本
- 通过**可扩展架构**持续增加实用工具
- 兼顾**SEO 友好**与**移动端可用性**，便于自然流量增长

### 当前已上线工具

| 工具 | 路由 | 功能摘要 |
|------|------|----------|
| 字数统计 | `/tools/word-counter` | 实时统计字数、字符、句子与阅读时间；含 SEO 指南与 FAQ |
| 文本对比 | `/tools/text-compare` | 双栏对比、差异高亮、相似度与差异指标 |
| 去除重复行 | `/tools/remove-duplicate-lines` | 按行去重、保留顺序、统计与复制 |
| 去除空行 | `/tools/remove-empty-lines` | 删除空白行与仅含空格的行、保留顺序 |
| 大小写转换 | `/tools/case-converter` | 7 种大小写格式、实时转换、逐项复制 |

### 产品定位

- **短期**：打磨核心文本工具体验，建立品牌与搜索可见性
- **中期**：扩展工具矩阵，形成「写作工具箱」类产品闭环
- **长期**：成为可维护、可迭代的 SaaS 风格工具站，支持更多语言与场景

---

## 技术栈

| 类别 | 技术 | 版本（参考） | 用途 |
|------|------|--------------|------|
| 框架 | [Next.js](https://nextjs.org/) | 16.x | App Router、SSR/SSG、路由与 Metadata API |
| UI | [React](https://react.dev/) | 19.x | 组件化界面与客户端交互 |
| 语言 | [TypeScript](https://www.typescriptlang.org/) | 5.x | 类型安全与可维护性 |
| 样式 | [Tailwind CSS](https://tailwindcss.com/) | 4.x | 原子化 CSS、响应式布局 |
| 字体 | Geist Sans / Geist Mono | — | 通过 `next/font` 加载 |
| 代码质量 | ESLint + eslint-config-next | 9.x | 静态检查 |
| 部署 | [Vercel](https://vercel.com/) | — | 托管、预览环境与 CI 集成 |

### 架构特点

- **App Router**：页面与布局按文件系统组织，SEO 相关逻辑集中在 `layout.tsx` 与 `lib/seo.ts`
- **服务端 + 客户端分离**：营销页与 Metadata 在服务端；需交互的工具页使用 `'use client'`，Metadata 通过同级 `layout.tsx` 导出
- **无后端数据库**：工具逻辑在浏览器端完成，降低运维复杂度

---

## 目录结构

```
toolnest/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # 根布局（Navbar、Footer、全局 Metadata）
│   ├── page.tsx                  # 首页（Hero、工具列表、优势介绍）
│   ├── globals.css               # 全局样式与 Tailwind 入口
│   ├── robots.ts                 # robots.txt 生成
│   ├── sitemap.ts                # sitemap.xml 生成
│   └── tools/                    # 工具页面目录
│       ├── word-counter/
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   ├── word-counter-tool.tsx
│       │   └── word-counter-seo-content.tsx
│       ├── text-compare/
│       ├── remove-duplicate-lines/
│       ├── remove-empty-lines/
│       └── case-converter/
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── tools/
│   │   └── tool-seo-section.tsx  # 工具页 SEO 内容区块
│   └── ui/
│       ├── button.tsx
│       ├── tool-page-layout.tsx
│       ├── section-title.tsx
│       ├── stats-card.tsx
│       ├── stats-grid.tsx
│       ├── page-container.tsx
│       └── tool-card.tsx
├── lib/
│   ├── tools.ts
│   ├── seo.ts
│   ├── site.ts
│   ├── text-diff.ts
│   ├── remove-duplicate-lines.ts
│   ├── remove-empty-lines.ts
│   └── case-converter.ts
├── docs/                         # 项目文档
│   ├── project-overview.md       # 中文
│   ├── design-system.md
│   ├── code-rules.md
│   ├── tool-roadmap.md
│   ├── seo-progress.md           # English
│   ├── development-log.md
│   ├── feature-backlog.md
│   └── current-status.md
├── public/                       # 静态资源
├── next.config.ts
├── tsconfig.json                 # 路径别名 @/* → 项目根目录
├── package.json
└── .env.example                  # 环境变量示例（站点 URL 等）
```

### 关键文件职责

- **`lib/tools.ts`**：工具元数据唯一来源，驱动首页卡片、导航栏与页脚链接
- **`lib/seo.ts`**：各页面 title、description、Open Graph、Twitter 配置
- **`lib/site.ts`**：解析 `NEXT_PUBLIC_SITE_URL`，供 sitemap、canonical 使用

---

## 环境变量

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `NEXT_PUBLIC_SITE_URL` | 生产环境站点根 URL | `https://toolnest.example.com` |

本地开发未设置时，默认回退为 `http://localhost:3000`；部署在 Vercel 时可自动使用 `VERCEL_URL`。

---

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 本地预览生产构建
npm run start

# 代码检查
npm run lint
```

开发地址默认为：`http://localhost:3000`

---

## Git + GitHub + Vercel 工作流

### 1. 版本控制（Git）

- 使用 **功能分支** 开发：`feature/工具名` 或 `fix/问题描述`
- `main`（或 `master`）分支保持可部署状态
- 提交信息建议采用简洁中文或英文，说明「做了什么」与「为什么」

示例：

```text
feat: 添加文本对比工具页
fix: 修复字数统计句子计数边界情况
docs: 更新工具路线图
```

### 2. 远程仓库（GitHub）

1. 在 GitHub 创建仓库并关联本地项目
2. 推送分支：`git push -u origin feature/xxx`
3. 通过 **Pull Request** 合并至主分支，便于 Code Review
4. 可选：配置分支保护规则，要求 PR 通过检查后再合并

### 3. 部署（Vercel）

1. 使用 GitHub 账号登录 [Vercel](https://vercel.com/)
2. **Import Project**，选择 ToolNest 仓库
3. 框架预设选择 **Next.js**，构建命令 `npm run build`，输出目录由 Next.js 自动处理
4. 在 Vercel 项目设置中添加环境变量：`NEXT_PUBLIC_SITE_URL` = 生产域名
5. 推送至 `main` 分支 → 自动触发生产部署；其他分支 / PR → 生成**预览 URL**

### 推荐协作流程

```text
本地开发 → 提交 Git → 推送 GitHub → 开启 PR → Review → 合并 main → Vercel 自动部署
```

### 部署后检查清单

- [x] 首页与工具页可正常访问
- [x] `/sitemap.xml` 与 `/robots.txt` 可访问
- [x] Vercel 生产部署可用
- [x] Google Search Console 已验证
- [ ] 生产环境 `NEXT_PUBLIC_SITE_URL` 与 GSC 域名一致（如使用自定义域名）
- [ ] 页面 title / description 在浏览器与分享预览中正确

### 当前基础设施状态

| 项目 | 状态 |
|------|------|
| GitHub 仓库 | 已关联 |
| Vercel 部署 | 已上线（如 `toolnest-green-xi.vercel.app`） |
| SEO Metadata | `lib/seo.ts` + 各工具 `layout.tsx` |
| Sitemap / Robots | `app/sitemap.ts`、`app/robots.ts` |

---

## 相关文档

- [设计系统](./design-system.md) — UI 风格与组件规范
- [代码规范](./code-rules.md) — 编码约定与最佳实践
- [工具路线图](./tool-roadmap.md) — 未来工具规划
- [SEO Progress](./seo-progress.md) — 搜索与索引状态（English）
- [Development Log](./development-log.md) — 开发里程碑（English）
- [Feature Backlog](./feature-backlog.md) — 功能待办（English）

---

## 文档维护

| 项目 | 说明 |
|------|------|
| 更新时机 | 目录结构、技术栈或部署流程变更时 |
| 负责人 | 项目维护者 / Tech Lead |
| 语言 | 中文（面向团队内部与中文贡献者） |

*最后更新：2026 年 5 月（5 个工具已上线）*
