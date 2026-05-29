# ToolNest 设计系统

## 文档说明

本文档定义 ToolNest 的视觉风格、排版、色彩、间距与组件使用规范，确保全站 UI 一致、专业且易于长期维护。

---

## 设计原则

1. **极简现代**：留白充足，避免视觉噪音
2. **浅色优先**：深色文字 + 浅色背景，保证可读性
3. **工具优先**：交互区域清晰，统计与结果一目了然
4. **响应式优先**：移动端单列，桌面端多列
5. **一致复用**：通过共享组件（`ToolCard`、`PageContainer` 等）保持统一

---

## 色彩系统

### 主色与中性色（Tailwind Slate）

| 用途 | Tailwind 类名 | 说明 |
|------|---------------|------|
| 页面背景 | `bg-slate-50` | 整体浅灰背景 |
| 主文字 | `text-slate-900` | 标题与正文 |
| 次要文字 | `text-slate-600` | 描述、辅助说明 |
| 弱化文字 | `text-slate-500` | 标签、元信息 |
| 边框 | `border-slate-200` | 卡片、输入框默认边框 |
| 边框悬停 | `border-slate-300` | 悬停态加强 |
| 卡片背景 | `bg-white` | 主内容卡片 |
| 次级表面 | `bg-slate-50` | 统计卡、工具卡片底色 |

### 强调色（Indigo，用于首页 Hero）

| 用途 | Tailwind 类名 |
|------|---------------|
| 徽章背景 | `bg-indigo-50` |
| 徽章边框 | `border-indigo-200` |
| 徽章文字 | `text-indigo-700` |
| 渐变点缀 | `to-indigo-50/50`、`bg-indigo-100/60` |

### 功能色（文本对比 Diff）

| 状态 | 背景 | 文字 |
|------|------|------|
| 删除 / 变更（左侧） | `bg-rose-200` | `text-rose-950` + 删除线 |
| 新增（右侧） | `bg-emerald-200` | `text-emerald-950` |

### 主操作按钮

| 类型 | 样式 |
|------|------|
| 主按钮 | `bg-slate-900 text-white hover:bg-slate-800` |
| 次按钮 | `border-slate-300 bg-white hover:bg-slate-50` |

---

## 字体与排版

### 字体族

- **无衬线**：Geist Sans（`font-sans`，通过 `next/font` 注入 CSS 变量）
- **等宽**：Geist Mono（代码场景预留）

### 字号层级

| 元素 | 类名参考 | 场景 |
|------|----------|------|
| 首页主标题 | `text-4xl sm:text-5xl lg:text-6xl font-bold` | Hero |
| 页面标题 | `text-3xl sm:text-4xl font-bold` | 工具页 H1 |
| 区块标题 | `text-2xl sm:text-3xl font-bold` | Popular Tools 等 |
| 卡片标题 | `text-lg font-semibold` | ToolCard |
| 正文 | `text-sm sm:text-base` | 描述段落 |
| 标签 / 统计标签 | `text-xs uppercase tracking-wide` | StatCard 标签 |

### 行高

- 正文段落：`leading-6` 或 `leading-7`
- 长文本输入/预览：`leading-7`

### 字重

- 标题：`font-bold` 或 `font-semibold`
- 正文：默认（400）
- 导航 / 按钮：`font-medium` 或 `font-semibold`

---

## 间距与布局

### 页面容器

- 全局内容区：`max-w-6xl`，水平居中，`px-4 sm:px-6 lg:px-8`
- 工具内容卡片：`PageContainer` 默认 `max-w-5xl`，文本对比页 `max-w-6xl`
- 区块垂直间距：首页 `space-y-20 sm:space-y-24`

### 圆角

| 元素 | 圆角 |
|------|------|
| 大卡片 / Hero | `rounded-3xl` |
| 标准卡片 | `rounded-2xl` |
| 输入框 / 小卡片 | `rounded-xl` |
| 徽章 | `rounded-full` |

### 阴影

- 默认卡片：`shadow-sm`
- 悬停工具卡：`hover:shadow-md`
- 避免过重阴影，保持轻盈感

---

## 组件规范

### Navbar（`components/navbar.tsx`）

- 固定在顶部的白色半透明条：`bg-white/90 backdrop-blur`
- 底部分割线：`border-b border-slate-200`
- Logo 左对齐，导航链接右对齐
- 链接悬停：`hover:text-slate-900`

### Footer（`components/footer.tsx`）

- 白底 + 顶部分割线
- 多列网格：品牌介绍 + 工具链接 + 导航链接
- 底部版权与 Slogan

### PageContainer（`components/ui/page-container.tsx`）

- 白色圆角卡片包裹页面主内容
- 内边距：`p-6 sm:p-8`
- 用于所有工具页统一外壳

### ToolCard（`components/ui/tool-card.tsx`）

- 可点击整卡（`Link` 包裹）
- 悬停微抬：`hover:-translate-y-0.5`
- 标题 + 「Open tool →」+ 描述

### StatCard（`components/ui/stat-card.tsx`）

- 浅灰底 `bg-slate-50`，居中数字展示
- 用于工具页实时统计指标

---

## 表单与输入

### Textarea（工具页标准样式）

```text
h-56 或 h-72（按页面调整）
w-full resize-y
rounded-xl border border-slate-300 bg-white
p-4 text-base leading-7 text-slate-900
focus:border-slate-400 focus:ring-2 focus:ring-slate-200
```

### 标签

- `text-sm font-semibold text-slate-700`
- 与输入框关联，必要时使用 `aria-label`

---

## 响应式断点

遵循 Tailwind 默认断点：

| 断点 | 宽度 | 典型布局 |
|------|------|----------|
| 默认 | &lt; 640px | 单列、全宽按钮 |
| `sm` | ≥ 640px | 两列工具网格、横排按钮 |
| `lg` | ≥ 1024px | 文本对比双栏并排 |

---

## 动效与交互

- 过渡：`transition` 用于颜色、边框、阴影
- 悬停：轻微颜色变化或位移，避免夸张动画
- 不使用自动播放动画，保证可访问性

---

## 无障碍（A11y）

- 页面使用语义化标签：`<header>`、`<main>`、`<footer>`、`<article>`、`<section>`、`<nav>`
- 区块标题配备 `aria-labelledby` 或 `aria-label`
- 装饰性渐变层使用 `aria-hidden`
- 对比度：深色文字 on 浅色背景，符合 WCAG 基本要求

---

## 禁止事项

- ❌ 不要在单页引入大量自定义 CSS，优先 Tailwind 工具类
- ❌ 不要混用多套主色（保持 Slate + 少量 Indigo）
- ❌ 不要使用深色模式作为默认（当前产品定位为浅色主题）
- ❌ 不要破坏 `PageContainer` / `ToolCard` 的统一圆角与边框风格

---

## 扩展新页面时的 UI 检查清单

- [ ] 使用 `PageContainer` 包裹内容
- [ ] 标题层级正确（每页一个 H1）
- [ ] 色彩来自本文档定义的 Slate / 功能色
- [ ] 移动端布局已测试
- [ ] 交互元素具备 focus 样式

---

## 相关文档

- [项目概览](./project-overview.md)
- [代码规范](./code-rules.md)

*最后更新：2026 年 5 月*
