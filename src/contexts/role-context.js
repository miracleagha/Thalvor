import { createContext, useContext } from 'react'

export const STORAGE_KEY = 'thalvor.role'

export const RoleContext = createContext(null)

export function useRoleContext() {
  const ctx = useContext(RoleContext)
  if (!ctx) throw new Error('useRoleContext must be used inside <RoleProvider>')
  return ctx
}

/** Convenience: returns the active role data (never null — components below the selector only mount when a role is picked). */
export function useRole() {
  const { role } = useRoleContext()
  return role
}
