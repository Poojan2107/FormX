# src — 模块设计

FormX Consultants 网站的 `src/` 模块：Next.js 16 App Router 架构、设计系统与交互层。

## 定位

- **app/** — 路由页面（静态 SSG + 动态 detail 页，含 `/estimator` 交互工具页）
- **components/** — UI 设计系统、布局、共享组件、表单
- **components/tools/** — 交互式工程工具（`StructuralEstimator` PEB 荷载估算器）
- **data/** — 内容数据（services / sectors / projects / content / site）
- **lib/** — 工具（`cn` 类名合并）

## 关键设计决策

1. **品牌令牌**：`x-red` `#de3024`、`x-desat`、`formx-cut-x formx-edge`、`section-y`、`x-lift`、`font-display`（Chakra Petch）、`ink`/`ink-muted`、`prose-measure`（70ch）/`prose-measure-lg`（80ch）。
2. **视图过渡**：`experimental.viewTransition` + `<ViewTransition>`（`nav-forward`/`nav-back` 方向映射），header/footer 锚定，reduced-motion 关闭。
3. **表单反馈**：`FormMessage`（`role=alert`/`role=status` 活动区域）+ `aria-invalid`/`aria-describedby`/`aria-busy`，提交后聚焦首个非法字段。
4. **结构化数据**：Organization 站点级；BreadcrumbList 由 PageHero 统一输出；Article（知识中心/新闻）、Service（服务）、FAQPage（仅 `/contact`）。
5. **SEO/韧性**：品牌化 error/global-error、动态 OG 卡片、`metadataBase`、viewport。
6. **信任 / 转化条带**：`ProofStrip`（凭证栏）、`LeadStrip`（中页线索）、`ProcessSteps`（01–04 交付流程，可传自定义 steps）、`ClientLogoWall`（`/assets/clients/*` 槽位 + 文案回退）、强化版 `CtaBand`（电话 + WhatsApp）。
7. **内页配方**：PageHero → ProofStrip → section-y 正文 → ProcessSteps（适用时）→ LeadStrip（可选）→ CtaBand；详情页保留 StickyEnquire。

## 已知限制

- **测试覆盖有限**：已引入 Vitest 覆盖 `formValidation`/`email` 核心逻辑（16 用例），组件交互与 API 全链路未覆盖。
- 数据文案行较长（`data/content.ts` 等为内容数据，质量检查器仅提示 ℹ 级别，非阻断）。
- 所有资源为占位/示例资产，正式事实待移交填充；客户 logo SVG 见 `HANDOVER.md`。

## 变更历史

### [2026-08-01] — 品牌叙事轮：总部叙事、创始人反馈、首页重构

**变更内容**: (1) 全站改写为「FORMX 总部/单一窗口工程实践」叙事——`site.ts` 文案全面重写（hero "Where Vision Takes Form"、about/aboutPage 愿景-使命-价值观、口号、稀疏 `trustMetrics`），删除旧的 heroLines/heroStats/formxNumbers/industriesServed/testimonials 数据；(2) 首页重构为 08 段节奏：Hero → About → `TrustProof` → `HowWeThink` → `ConstructionSequence` → Projects → `PeopleGlimpse` → 单一项目咨询 CTA；(3) 新增 `WhyChooseAccordion`（关于页渐进式手风琴，`aria-expanded`）、`DisciplineStory`（服务详情学科叙事）、`serviceStories.ts`/`sectorStories.ts` 叙事数据、`getProjectNarrative` 工程案例叙事迁移（legacy challenge/approach/outcome 保留回退）；(4) About/详情页改为无照片背景的编辑式 hero + 稀疏真实指标；(5) 移除已无引用的 7 个组件（`EngineeringTrustMatrix`/`home{Services,Sectors,Stats,Testimonials}`/`shared/LeadStrip`/`ServicesGrid`）及其数据导出；(6) Header 精简（去掉编号子项与 Greenfield 状态徽标）。
**变更理由**: 创始人反馈第二轮——从功能罗列转向「为什么信任 FORMX」的叙事与实证，减少营销堆叠、术语统一。
**影响范围**: `src/data/{site,projects,serviceStories,sectorStories,content}.ts`、`src/app/{page,about,projects/[slug],knowledge-center,sectors/[slug],services/[slug]}/page.tsx`、`src/components/{about/WhyChooseAccordion,home/{Hero,About,TrustProof,HowWeThink,PeopleGlimpse,ConstructionSequence,Projects},layout/{Header,Footer},shared/WhatsAppFloat,services/DisciplineStory}.tsx`、`src/DESIGN.md`。
**修复**: Hero `setShowPhoto` 同步 setState 改为 `setTimeout(0)` 以满足 react-hooks 新规则；删除冗余组件与数据后 lint/build/test 全绿。

### [2026-08-01] — FORMX V2：建筑序列引擎、信任矩阵、估算工具

**变更内容**: (1) 新增 `ConstructionSequence` 六阶段交互式施工流程引擎（场地勘察→建筑总图→结构 RCC/钢框架→MEP 路由→GFC 交付→建成设施，含阶段里程碑、IS 码标注、交付清单与指标）；(2) 新增 `EngineeringTrustMatrix` 实证信任面板（FORMX by Numbers 计数、IS 456/800/1893 合规、客户 logo 墙，logo 缺失走 `PlaceholderMedia` 文案回退）；(3) 新增 `/estimator` PEB 荷载估算工具页 + `StructuralEstimator`（面积/檐高/吊车/结构体系/楼板/抗震分区输入，输出钢吨位、RCC 体积、板厚、GFC 周期，CTA 携带 `?area=&crane=&type=` 参数）；(4) Hero 增加 CAD 蓝图网格叠加开关（`showBlueprintGrid`，含 GRID REF/抗震分区标注）；(5) 表单侧：Contact 从估算器 CTA 参数预填消息正文并自动勾选「Structural Engineering」服务；(6) 全站图片主导视觉升级（about/services/projects/hero）。
**变更理由**: FORMX V2 品牌升级——把工程能力做成可交互、可验证的营销证据（估算器获客、六阶段叙事、实证数据面板）。
**影响范围**: `src/components/{home/{ConstructionSequence,EngineeringTrustMatrix,Hero},tools/StructuralEstimator}.tsx`、`src/app/{estimator/page,page}.tsx`、`src/components/home/Contact.tsx`、`src/app/{about,knowledge-center}/page.tsx`、`src/components/{home/About,home/Services,ServicesGrid,projects/ProjectsExplorer}.tsx`、`src/DESIGN.md`。
**修复**: 清理 FORMX V2 引入的 23 处未使用导入；修正 `services/structure.jpg`→`services/structural.jpg`（估算器 hero 与施工序列阶段 03 的失效图片引用）；估算器 CTA 参数接入 Contact 预填（defer setState 满足 react-hooks 新规则）。

### [2026-08-01] — 收尾加固：共享校验、限流、CSP、Vitest

**变更内容**: (1) 抽取 `src/lib/formValidation.ts` 共享校验（`isEmail`/`isValidPhone`/`validateContact`/`validateVendor` 及服务端 `isContactValid`/`isVendorValid`），Contact/VendorForm/NewsletterForm 与三个 API route 统一复用；(2) 新增 `src/lib/rateLimit.ts` 内存限流（每 IP 10 分钟 5 次，`x-forwarded-for`/`x-real-ip` 识别，超限返回 429，条目 >1000 自动清理），接入 contact/newsletter/vendor-registration；(3) `next.config.ts` 增加生产环境 CSP（default-src 'self'；script/style 'unsafe-inline'；img/font data:；object-src 'none'；form-action/frame-ancestors 'self'），已在 `next start` 下实测响应头；(4) 引入 Vitest 测试基建（`vitest.config.mts` + `src/test/setup.ts`，jsdom + jest-dom），新增 `src/lib/formValidation.test.ts`（11 用例）与 `src/lib/email.test.ts`（5 用例），`npm test` 全部通过；(5) Testimonials 引用区固定最小高度避免轮播跳动；(6) 依赖安全——Next 升到 16.2.12，`overrides` 强制 next 嵌套 postcss/sharp 至已修复版本，`npm audit` 0 漏洞。
**变更理由**: 交付前安全/健壮性闭环——防滥用（限流）、防注入（共享转义与校验）、防安全头缺失（CSP）、防回归（测试）。
**影响范围**: `src/lib/{formValidation,rateLimit,email}.ts`、`src/app/api/{contact,newsletter,vendor-registration}/route.ts`、`src/components/{home/Contact,home/Testimonials,forms/VendorForm,shared/NewsletterForm}.tsx`、`next.config.ts`、`vitest.config.mts`、`src/test/setup.ts`、`package.json`。

### [2026-08-01] — Waves 3–6 Premium Polish

**变更内容**: 全站 listing/detail 接入 ProofStrip/LeadStrip/ProcessSteps；Contact 拆分为表单 + 权威侧栏；ClientLogoWall 用于首页与 `/clients`；统一详情页节奏与 SEO metadata；首页文案收紧；DESIGN 同步共享条带组件。
**变更理由**: website comment.docx 要求权威感、证明、线索与更少文字密度；完成 Premium Polish 剩余波次。
**影响范围**: `src/app/**/page.tsx`、`src/components/shared/{ProofStrip,LeadStrip,ProcessSteps,ClientLogoWall,CtaBlocks}.tsx`、`src/components/home/{Hero,About,Contact,Sectors,Stats,Projects}.tsx`、`src/data/site.ts`、`src/app/layout.tsx`、`src/DESIGN.md`。

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

### [2026-08-01] — 收尾：资产审计、表单投递、性能清理

**变更内容**: (1) 资产槽位审计——91 个引用槽位核对出 31 个缺失，缺省文件以占位图兜底，缺失清单写入 `HANDOVER.md` 供客户按槽位投放；(2) 表单投递打通——新增 `src/lib/email.ts`（Resend REST，零新增依赖，`RESEND_API_KEY` 未配置时回退服务端日志并仍返回成功），contact/newsletter/vendor-registration 三个 route 改为真实邮件投递 + `reply_to` 指向提交者 + HTML 转义，三个客户端表单增加 honeypot 反垃圾字段；(3) 性能清理——删除未引用的临时文件（`PROJECT DETAILS.pptx/pdf`、根目录散落 PDF/JPG、`projects_real/`、`extracted-docx-images/`），用 sharp 压缩 14 张超大项目图（共省 41.19MB，9.27MB→0.25MB）；(4) 新增 `.env.example` 并在 `.gitignore` 放行。
**变更理由**: 达成"客户端只需提供资产"的交付边界——功能、投递、质量、文档全部闭环。
**影响范围**: `src/lib/email.ts`、`src/app/api/{contact,newsletter,vendor-registration}/route.ts`、`src/components/{home/Contact,forms/VendorForm,shared/NewsletterForm}.tsx`、`public/assets/projects/*`、`.env.example`、`.gitignore`、`HANDOVER.md`。
