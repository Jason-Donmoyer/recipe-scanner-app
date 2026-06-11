// Cookbook
export type Cookbook = {
    id: string
    user_id: string
    name: string
    created_at: string
}

// Recipe
export type Recipe = {
    id: string
    user_id: string
    cookbook_id: string
    name: string
    page_number: number | null
    notes: string | null
    created_at: string
}

// Ingredient Master
export type IngredientMaster = {
    id: string
    name: string
    created_at: string
}

// Recipe Ingredient
export type RecipeIngredient = {
    id: string
    recipe_id: string
    ingredient_id: string
    amount: string | null
    unit: string | null
}

// Pantry Item
export type PantryItem = {
    id: string
    user_id: string
    ingredient_id: string
    category_id: string | null
    amount: string | null
    unit: string | null
}

// Pantry Category
export type PantryCategory = {
    id: string
    user_id: string
    name: string
}