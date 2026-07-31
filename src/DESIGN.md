# src — 模块设计

FormX Consultants 网站的 `src/` 模块：Next.js 16 App Router 架构、设计系统与交互层。

## 定位

- **app/** — 路由页面（静态 SSG + 动态 detail 页）
- **components/** — UI 设计系统、布局、共享组件、表单
- **data/** — 内容数据（services / sectors / projects / content / site）
- **lib/** — 工具（`cn` 类名合并）

## 关键设计决策

1. **品牌令牌**：`x-red` `#de3024`、`x-desat`、`formx-cut-x formx-edge`、`section-y`、`x-lift`、`font-display`（Chakra Petch）、`ink`/`ink-muted`。
2. **视图过渡**：`experimental.viewTransition` + `<ViewTransition>`（`nav-forward`/`nav-back` 方向映射），header/footer 锚定，reduced-motion 关闭。
3. **表单反馈**：`FormMessage`（`role=alert`/`role=status` 活动区域）+ `aria-invalid`/`aria-describedby`/`aria-busy`，提交后聚焦首个非法字段。
4. **结构化数据**：Organization 站点级；BreadcrumbList 由 PageHero 统一输出；Article（知识中心/新闻）、Service（服务）、FAQPage（仅 `/contact`）。
5. **SEO/韧性**：品牌化 error/global-error、动态 OG 卡片、`metadataBase`、viewport。

## 已知限制

- **无测试框架**：仓库无 test script（package.json 无 jest/vitest）。变更闸门的测试警告暂以本记录说明，未引入测试基建。
- 数据文案行较长（`data/content.ts` 等为内容数据，质量检查器仅提示 ℹ 级别，非阻断）。
- 所有资源为占位/示例资产，正式事实待移交填充。

## 变更历史

### [2026-07-31] — 批量 B：详情页视觉统一

**变更内容**: 抽取 `SectionHeader` 共享组件；统一详情页纵向节奏（`py-14 md:py-20`）；作者首字母由姓名推导；新闻页返回链接样式对齐；文章页补充移动端 StickyEnquire。
**变更理由**: 消除跨 5 个详情模板的重复与漂移，统一品牌视觉节奏。
**影响范围**: `src/app/{services,sectors,knowledge-center,news}/[slug]/page.tsx`、`src/components/ui/SectionHeader.tsx`。

### [2026-07-31] — 批量 C：表单反馈 UX

**变更内容**: 新增 `FormMessage` 共享反馈组件；VendorForm 增加客户端校验 + ARIA 关联 + `aria-pressed`；Contact/Newsletter 补齐 `aria-describedby`/`aria-busy`；提交失败聚焦首个非法字段。
**变更理由**: 提升可访问性与错误反馈即时性（无理由/无记录的变更不通过闸门）。
**影响范围**: `src/components/ui/FormMessage.tsx`、`src/components/{forms/VendorForm,home/Contact,shared/NewsletterForm}.tsx`。

### [2026-07-31] — 批量 D：按路由结构化数据

**变更内容**: `JsonLd.tsx` 重构为 `JsonLd`/`FaqJsonLd`/`BreadcrumbJsonLd`/`ArticleJsonLd`/`ServiceJsonLd`；PageHero 统一输出 BreadcrumbList；FAQPage 收敛到 `/contact`；知识中心/新闻增加 Article，服务页增加 Service。
**变更理由**: 修正 FAQPage 全站误放，补齐面包屑/文章/服务结构化数据。
**影响范围**: `src/components/shared/JsonLd.tsx`、`src/components/ui/PageHero.tsx`、`src/app/{contact,knowledge-center,news,services}/[slug|page].tsx`。

### [2026-07-31] — 批量 E：质量闸门

**变更内容**: 运行 verify-quality（通过，0 错误/0 警告）与 verify-change；按闸门要求补齐本 DESIGN.md 文档同步；测试覆盖因仓库无测试框架而记录留待决策。
**变更理由**: CCG 质量闸门要求变更留痕与文档同步。
**影响范围**: 文档层面。
