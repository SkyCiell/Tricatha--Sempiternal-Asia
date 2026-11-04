# Project Rules & Engineering Standards

## 1. Understand Before Changing
1. Inspect the existing project structure, architecture, components, styles, and dependencies before making changes.
2. Understand how existing features and interactions work before modifying them.
3. Never make assumptions about the codebase without inspecting the relevant files.
4. Preserve existing functionality, business logic, routing, and data flow.
5. Do not rewrite working code simply because you prefer a different implementation.
6. Make the smallest effective change that solves the actual problem.

## 2. Anti-AI-Slop Design Philosophy
1. Every design decision must have a clear functional or visual purpose.
2. Avoid generic AI-generated website patterns, predictable layouts, and template-like compositions.
3. Do not blindly follow popular UI trends or copy familiar SaaS landing page structures.
4. Avoid unnecessary badges, pills, eyebrow labels, decorative numbers, floating tags, and redundant section identifiers.
5. Do not repeat the same section layout, card composition, or visual pattern throughout the website.
6. Avoid excessive rounded containers, unnecessary borders, oversized headings, and repetitive boxed content.
7. Do not add decorative elements simply to make a section look more interesting.
8. Avoid excessive gradients, glassmorphism, neon effects, artificial glows, and unnecessary shadows.
9. Avoid meaningless visual elements such as random dots, lines, grids, and floating geometric shapes.
10. Do not force asymmetry, whitespace, or visual complexity when they do not improve the composition.
11. Never make a design look premium by simply adding more effects, larger typography, or excessive spacing.

## 3. Visual Direction & Composition
1. Establish a distinctive and consistent visual identity based on the project's actual purpose and brand.
2. Prioritize strong composition, typography, hierarchy, proportion, and alignment.
3. Use whitespace intentionally. Neither overcrowd nor artificially empty the interface.
4. Create visual variation through layout, image placement, content structure, and typography rather than decorative gimmicks.
5. Use editorial layouts, asymmetric compositions, split sections, and image-led layouts when they genuinely improve the experience.
6. Avoid making every element a card or placing every piece of content inside a container.
7. Images must feel integrated into the design, not randomly inserted to fill empty space.
8. Maintain consistent visual language across all pages without making every page look identical.
9. Use color selectively and maintain a controlled, coherent palette.
10. Ensure the result feels art-directed and intentionally crafted rather than automatically assembled.

## 4. Component & Code Architecture
1. Reuse existing components, utilities, hooks, and design tokens whenever appropriate.
2. Do not create duplicate components or conflicting styling systems.
3. Avoid unnecessary abstraction and overengineering.
4. Use clear and consistent naming conventions.
5. Avoid hardcoded values when existing variables, tokens, or configuration can be reused.
6. Remove unused imports, variables, components, and obsolete styles introduced by your changes.
7. Do not introduce dependencies unless they provide a necessary benefit.
8. Keep components maintainable, focused, and reasonably scoped.
9. Do not modify project configuration, build systems, or environment settings without a clear technical reason.
10. Avoid unnecessary refactoring unrelated to the requested task.

## 5. Interaction & Motion
1. Every interactive element must have a clear purpose and predictable behavior.
2. Buttons, links, navigation, forms, and interactive components must work correctly.
3. Animations must communicate state, guide attention, or improve interaction.
4. Avoid animating every element simply for visual appeal.
5. Use consistent timing, easing, and transitions.
6. Avoid excessive parallax, scroll effects, hover animations, and distracting movement.
7. Respect reduced-motion accessibility preferences.
8. Preserve existing interactions unless a change is explicitly required.

## 6. Responsive Design & Accessibility
1. Test layouts across desktop, tablet, and mobile breakpoints.
2. Do not simply shrink desktop layouts to fit mobile screens.
3. Adapt spacing, typography, navigation, and component composition to each viewport.
4. Prevent horizontal overflow, clipped content, and overlapping elements.
5. Maintain readable typography and sufficient color contrast.
6. Support keyboard navigation and visible focus states.
7. Use semantic HTML and accessible interaction patterns.

## 7. Content & Data Integrity
1. Never modify existing copywriting, text, or content without explicit instructions.
2. Never replace real content with placeholder text or invented data.
3. Reuse existing data sources and API integrations.
4. Do not introduce dummy data when real project data is available.
5. Preserve existing routes, links, forms, and integrations.
6. Do not remove content simply to make a layout look cleaner.

## 8. Quality Assurance
1. Inspect the impact of every change across related pages and components.
2. Check for broken imports, runtime errors, console warnings, and styling conflicts.
3. Verify that existing functionality still works after UI changes.
4. Validate responsive behavior after implementation.
5. Ensure no unnecessary dependencies, duplicated styles, or unused code remain.
6. Do not claim a feature works without verifying its actual behavior.
7. Fix regressions caused by your changes before considering the task complete.

## 9. Mandatory Working Process

Before implementation:
- Inspect the relevant project files.
- Identify existing components and reusable styles.
- Understand the current implementation.
- Determine exactly what needs to change.
- Avoid modifying unrelated areas.

During implementation:
- Make deliberate, incremental changes.
- Preserve existing architecture and functionality.
- Reuse existing patterns where appropriate.
- Avoid introducing unnecessary visual or technical complexity.

After implementation:
- Review the final result across relevant screen sizes.
- Verify functionality and interactions.
- Check for visual inconsistencies and regressions.
- Remove unused code introduced during implementation.
- Report what changed and identify anything that could not be verified.

## FINAL DESIGN STANDARD

The final result must feel intentional, distinctive, cohesive, and professionally executed.

Do not confuse minimalism with emptiness.
Do not confuse premium design with visual effects.
Do not confuse creativity with unnecessary complexity.
Do not confuse modern UI with generic AI-generated layouts.

Prioritize design decisions that have a reason to exist.

If an element does not improve usability, visual hierarchy, brand identity, content presentation, or interaction, reconsider whether it belongs.

**Quality over quantity. Design with intention. Engineer with discipline.**