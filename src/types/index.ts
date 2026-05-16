export interface Ingredient {
  id: string
  name: string
  quantity: string
  category: 'entrante' | 'principal' | 'guarnicion' | 'bebida' | 'postre' | 'snack' | 'salsas' | 'condimentos' | 'pan'
}

export interface PreparationStep {
  order: number
  description: string
  time?: string
  heatLevel?: string
}

export interface Recipe {
  id: string
  name: string
  subtitle: string
  level: number
  difficulty: 'Muy fácil' | 'Fácil' | 'Media' | 'Media-Alta' | 'Difícil' | 'Avanzado'
  totalTime: string
  servings: string
  kcal: string
  description: string
  story: string
  tags: string[]
  ingredients: Ingredient[]
  prepSteps: PreparationStep[]
  chefTips: string[]
  contextTitle: string
  context: string
  mediaType: string
  year: string
  genre: string
}

export interface ShoppingItem {
  recipeId: string
  items: Record<string, boolean>
}
