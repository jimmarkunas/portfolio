import { Search } from 'lucide-react';
import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';
import type { CSSProperties } from 'react';

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
};

type CssVarStyle = CSSProperties & Record<`--${string}`, string>;

export function TextInput({ id, label, placeholder }: InputProps) {
  const inputStyle: CssVarStyle = {
    '--input-focus': t.color.accent,
    borderColor: t.color.border,
    backgroundColor: t.color.bg,
    color: t.color.ink,
  };

  return (
    <label className="grid gap-2">
      <span className={`${t.type.eyebrow}`} style={{ color: t.color.accent }}>
        {label}
      </span>
      <input
        className={`${t.type.utility} h-12 rounded-[8px] border px-4 outline-none transition-colors duration-200 focus:[border-color:var(--input-focus)]`}
        defaultValue=""
        id={id}
        placeholder={placeholder}
        style={inputStyle}
        type="text"
      />
    </label>
  );
}

export function SearchField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-2">
      <span className={`${t.type.eyebrow}`} style={{ color: t.color.accent }}>
        {label}
      </span>
      <div className="flex h-12 items-center gap-2 rounded-[8px] border px-3" style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}>
        <Search className="h-4 w-4" style={{ color: t.color.muted }} />
        <input
          className={`${t.type.utility} w-full bg-transparent outline-none`}
          defaultValue=""
          placeholder={placeholder}
          style={{ color: t.color.ink }}
          type="search"
        />
      </div>
    </label>
  );
}
