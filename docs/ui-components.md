# UI Components Instructions

This document outlines the UI component architecture and rules for the Link Shortener application.

## Core Principle

**All UI elements in this app use shadcn/ui.** Never create custom UI components from scratch - always use shadcn/ui components.

## Component Library

- **Library:** shadcn/ui
- **Installation:** Components are added individually via CLI
- **Documentation:** https://ui.shadcn.com/

## Component Usage Rules

### 1. Always Use shadcn/ui Components

- **DO:** Use shadcn/ui components for all UI elements (buttons, forms, dialogs, cards, etc.)
- **DON'T:** Create custom components for common UI patterns
- **DON'T:** Use other component libraries (Material-UI, Ant Design, etc.)

### 2. Adding New Components

When you need a new UI component:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

### 3. Component Location

- shadcn/ui components are installed in `/components/ui/`
- These components are owned by shadcn/ui and should not be modified
- For customization, use Tailwind classes or composition

### 4. Importing Components

Always import from the `/components/ui` directory:

```typescript
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
```

### 5. Styling Components

- Use Tailwind CSS classes for styling
- shadcn/ui components accept `className` prop for additional styles
- Follow the existing theme defined in Tailwind config

Example:
```typescript
<Button className="w-full mt-4" variant="default">
  Submit
</Button>
```

## Common Components

Frequently used shadcn/ui components in this project:

- **Button** - For all clickable actions
- **Card** - For content containers
- **Input** - For text inputs
- **Form** - For form handling
- **Dialog** - For modals
- **Badge** - For status indicators
- **Table** - For data display
- **Dropdown Menu** - For menus
- **Toast** - For notifications

## Component Composition

When building complex UI:

1. Compose existing shadcn/ui components together
2. Wrap shadcn/ui components in feature-specific components if needed
3. Keep composition components in `/components` (not `/components/ui`)

Example:
```typescript
// /components/link-card.tsx
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function LinkCard({ url, shortCode }: Props) {
  return (
    <Card>
      <CardHeader>{shortCode}</CardHeader>
      <CardContent>
        <p>{url}</p>
        <Button>Copy</Button>
      </CardContent>
    </Card>
  );
}
```

## Important Reminders

- ✅ Always check shadcn/ui documentation first before creating new components
- ✅ Use existing variants and props provided by shadcn/ui
- ✅ Install only the components you need (not the entire library)
- ❌ Never create custom buttons, inputs, or common UI elements from scratch
- ❌ Never modify files in `/components/ui/` directly

## Additional Resources

- shadcn/ui Documentation: https://ui.shadcn.com/
- shadcn/ui Components: https://ui.shadcn.com/docs/components
- Tailwind CSS: https://tailwindcss.com/docs

---

**Last Updated:** January 9, 2026
