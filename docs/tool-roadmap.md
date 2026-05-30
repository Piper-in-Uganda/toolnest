# ToolNest 工具路线图

## 文档说明

本文档规划 ToolNest 未来工具扩展方向、优先级与实现要点，供产品与开发对齐长期迭代节奏。路线图会随用户反馈与数据调整，建议每季度回顾一次。

英文待办清单见 [feature-backlog.md](./feature-backlog.md)；SEO 进展见 [seo-progress.md](./seo-progress.md)。

---

## 路线图总览

```text
阶段一（已完成）   核心文本工具 MVP（4 个工具）
    ↓
阶段二（进行中）   写作增强 + 开发者工具（高优先级待办）
    ↓
阶段三（中期）     格式转换与预览类工具
    ↓
阶段四（长期）     协作、账户与国际化
```

---

## 阶段一：已完成

| 工具 | 路由 | 状态 | 核心价值 |
|------|------|------|----------|
| 字数统计 | `/tools/word-counter` | ✅ 已上线 | 字数、字符、句子、阅读时间；含 SEO 内容区 |
| 文本对比 | `/tools/text-compare` | ✅ 已上线 | Diff 高亮、相似度、差异统计 |
| 去除重复行 | `/tools/remove-duplicate-lines` | ✅ 已上线 | 行级去重、顺序保留、复制结果 |
| 去除空行 | `/tools/remove-empty-lines` | ✅ 已上线 | 删除空行与空白行、统计与复制 |

### 阶段一成果

- SaaS 风格首页（Hero、Popular Tools、Why ToolNest、Footer）
- 共享 UI：`ToolPageLayout`、`Button`、`StatsCard`、`StatsGrid`、`SectionTitle`
- SEO：`robots.txt`、`sitemap.xml`、逐页 Metadata、Search Console 验证
- 文档体系：中文规范文档 + 英文运营文档

---

## 阶段二：高优先级（下一批）

详见 [feature-backlog.md](./feature-backlog.md) High Priority 章节。

| 工具 | 建议路由 | 优先级 |
|------|----------|--------|
| 大小写转换 | `/tools/case-converter` | P0 |
| 字符计数 | `/tools/character-counter` | P0 |
| JSON 格式化 | `/tools/json-formatter` | P0 |
| 密码生成器 | `/tools/password-generator` | P0 |
| URL 编解码 | `/tools/url-encoder` | P0 |
| Base64 编解码 | `/tools/base64-encoder` | P0 |

### 横切任务（与工具并行）

| 任务 | 说明 |
|------|------|
| 全工具 SEO 内容区 | 参照 Word Counter 的指南 + FAQ 模板 |
| 核心算法单元测试 | `text-diff`、去重、去空行等 |
| Open Graph 图片 | 社交分享预览优化 |

---

## 阶段三：中期规划

| 工具 | 建议路由 | 功能描述 | 优先级 |
|------|----------|----------|--------|
| Markdown 预览 | `/tools/markdown-preview` | 实时渲染 Markdown | P1 |
| HTML 实体编解码 | `/tools/html-encoder` | 编码与解码 | P2 |
| 正则测试器 | `/tools/regex-tester` | 匹配高亮、分组展示 | P2 |
| Lorem 占位符 | `/tools/lorem-ipsum` | 按字数/段落生成 | P1 |
| 可读性分析 | `/tools/readability` | 简易可读性评分 | P2 |
| 行首尾去空格 | `/tools/trim-lines` | 批量 trim 每行 | P1 |

### 实现要点

- JSON / Markdown 类注意大文本性能（防抖、`useMemo`）
- 轻量依赖需评估包体积
- 错误提示友好，避免白屏

---

## 阶段四：长期规划

| 方向 | 说明 |
|------|------|
| 用户账户 | 历史记录、收藏（需后端或 BaaS） |
| 团队协作 | 共享结果、批注 |
| 多语言界面 | `next-intl` 等 |
| 浏览器扩展 | 快速调用工具 |
| 开放 API | 需服务端与限流 |
| 付费高级功能 | 批量导出、无广告等 |

---

## 新工具接入 checklist

### 产品

- [ ] 明确目标用户与核心场景
- [ ] 确定工具名称、路由 slug、一句话描述
- [ ] 确认与现有工具无功能重叠

### 开发

- [ ] `lib/tools.ts` 注册工具元数据
- [ ] `app/tools/[slug]/page.tsx` 实现功能
- [ ] `app/tools/[slug]/layout.tsx` 配置 SEO
- [ ] `lib/seo.ts` 添加页面 SEO 对象
- [ ] `app/sitemap.ts` 加入索引条目
- [ ] 复用 `ToolPageLayout`、`StatsCard`、`Button` 等组件
- [ ] `npm run lint` 与 `npm run build` 通过

### 发布与文档

- [ ] Vercel 预览与生产验证
- [ ] Search Console 提交/检查 sitemap
- [ ] 更新 [tool-roadmap.md](./tool-roadmap.md)、[development-log.md](./development-log.md)、[feature-backlog.md](./feature-backlog.md)

---

## 优先级定义

| 级别 | 含义 |
|------|------|
| P0 | 下一迭代必须完成 |
| P1 | 本季度内完成 |
| P2 | 有资源时安排 |
| P3 | 观望 / 待验证需求 |

---

## 技术债务与改进（横切）

| 项目 | 说明 |
|------|------|
| 单元测试 | 为 `lib/*` 核心算法补充测试 |
| 性能 | 超长文本 Diff 优化 |
| 国际化 | UI 文案抽离 |
| 分析 | Plausible 等隐私友好统计 |
| OG 图片 | 各工具专属分享图 |

---

## 版本记录

| 日期 | 变更 |
|------|------|
| 2026-05 | 初版：Word Counter、Text Compare |
| 2026-05 | 首页改版、共享组件、SEO 系统 |
| 2026-05 | Remove Duplicate Lines、Remove Empty Lines 上线 |
| 2026-05 | Word Counter SEO 内容区；英文 ops 文档；路线图同步至 4 工具 |

---

## 相关文档

- [项目概览](./project-overview.md)
- [设计系统](./design-system.md)
- [代码规范](./code-rules.md)
- [Feature Backlog](./feature-backlog.md)
- [Development Log](./development-log.md)
- [SEO Progress](./seo-progress.md)

*维护说明：新增或上线工具后，请同步更新本文档与 feature-backlog.md。*
