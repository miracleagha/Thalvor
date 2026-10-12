import { useCallback, useEffect, useMemo, useState } from 'react'
import { getRole, roles } from '@/data/roles'
import { RoleContext, STORAGE_KEY } from './role-context.js'

export function RoleProvider({ children }) {
  const [roleId, setRoleId] = useState(() => {
    if (typeof window === 'undefined') return null
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      return stored && getRole(stored) ? stored : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      if (roleId) window.localStorage.setItem(STORAGE_KEY, roleId)
      else window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Ignore storage errors (private browsing, quota, etc.)
    }
  }, [roleId])

  useEffect(() => {
    if (!roleId || typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [roleId])

  const selectRole = useCallback((id) => {
    if (getRole(id)) setRoleId(id)
  }, [])

  const clearRole = useCallback(() => setRoleId(null), [])

  const role = useMemo(() => getRole(roleId), [roleId])

  const value = useMemo(
    () => ({ roleId, role, roles, selectRole, clearRole }),
    [roleId, role, selectRole, clearRole],
  )

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
}
