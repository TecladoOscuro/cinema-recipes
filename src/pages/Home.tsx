import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { recipes, getDifficultyColor } from '../data/recipes'

const allTags = [
  { key: 'cine', label: '🎬 Cine' },
  { key: 'series', label: '📺 TV/Series' },
  { key: 'anime', label: '🎌 Anime' },
  { key: 'postre', label: '🧁 Postre' },
  { key: 'fast-food', label: '🍔 Fast Food' },
  { key: 'snack', label: '🍿 Snack' },
  { key: 'plato-principal', label: '🍝 Plato Principal' },
  { key: 'bebida', label: '🥤 Bebida' },
  { key: 'fantasia', label: '🧙 Fantasía' },
  { key: 'crimen', label: '🔪 Crimen/Drama' },
  { key: 'comedia', label: '🤣 Comedia' },
  { key: 'animacion', label: '👶 Animación' },
  { key: 'pre-2000', label: '🎬 Pre-2000' },
  { key: 'decada-2000', label: '📺 2000s' },
  { key: 'post-2010', label: '📱 2010s+' },
  { key: 'hollywood', label: '🇺🇸 Hollywood' },
  { key: 'britanico', label: '🇬🇧 Británico' },
  { key: 'japones', label: '🇯🇵 Japonés' },
  { key: 'global', label: '🌎 Global' },
]

export function Home() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = useMemo(() => {
    if (!activeTag) return recipes
    return recipes.filter((r) => r.tags?.includes(activeTag))
  }, [activeTag])

  return (
    <div className="bg-pc-bg text-pc-text min-h-dvh">
      <div className="fixed top-0 left-0 right-0 z-20 bg-pc-bg border-b border-pc-border pt-[env(safe-area-inset-top,0px)]">
        <div className="flex items-center justify-between h-12 px-5">
          <h1 className="text-lg font-bold">🎬🍿 Platós de Cine</h1>
          <span className="text-xs text-pc-muted bg-pc-surface rounded-full px-2.5 py-1">
            {filtered.length}/{recipes.length}
          </span>
        </div>
      </div>

      <div className="fixed top-[calc(3rem+env(safe-area-inset-top,0px))] left-0 right-0 z-10 bg-pc-bg border-b border-pc-border overflow-x-auto no-scrollbar">
        <div className="flex gap-1.5 px-4 py-2 whitespace-nowrap">
          <button
            onClick={() => setActiveTag(null)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${!activeTag ? 'bg-pc-accent text-white' : 'bg-pc-surface text-pc-muted'}`}
          >
            Todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag.key}
              onClick={() => setActiveTag(activeTag === tag.key ? null : tag.key)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${activeTag === tag.key ? 'bg-pc-accent text-white' : 'bg-pc-surface text-pc-muted'}`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-[calc(7rem+env(safe-area-inset-top,0px))] pb-8 px-4">
        <div className="space-y-3">
          {filtered.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/receta/${recipe.id}`}
              className="block bg-pc-card rounded-2xl border border-pc-border p-4 active:scale-[0.98] transition-transform duration-100"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium rounded-md px-2 py-0.5 ${getDifficultyColor(recipe.difficulty)}`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                  <h2 className="text-base font-semibold leading-snug">{recipe.name}</h2>
                  <p className="text-xs text-pc-muted mt-0.5 leading-snug">{recipe.subtitle}</p>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {recipe.tags?.slice(0, 3).map((t) => {
                      const tag = allTags.find((tt) => tt.key === t)
                      return (
                        <span key={t} className="text-[10px] text-pc-muted bg-pc-surface rounded px-1.5 py-0.5">{tag?.label ?? t}</span>
                      )
                    })}
                  </div>
                  <p className="text-sm text-pc-muted mt-1.5 line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2.5">
                    <span className="text-xs text-pc-muted">⏱ {recipe.totalTime}</span>
                    <span className="text-xs text-pc-muted">🍽 {recipe.servings}</span>
                    <span className="text-xs text-pc-muted">{recipe.kcal}</span>
                  </div>
                </div>
                <svg className="w-5 h-5 text-pc-border mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
