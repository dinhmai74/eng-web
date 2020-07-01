import { apiWorker } from "services/api/api-worker"
import { immer, persist } from "utils/zustand"
import { create } from "zustand"

type AccountInfo = API.AccountInfo

interface AccountState {
  account: AccountInfo
  setAccount: (account: AccountInfo) => void
  loading: boolean
  setLoading: (isLoading: boolean) => void
  login: (data: object) => Promise<AccountInfo>
  signUp: (data: object) => Promise<AccountInfo>
  fetchNew: () => Promise<AccountInfo>
  updateInfo: (data: object) => Promise<AccountInfo>
  updateAllInfo: (data: object) => Promise<AccountInfo>
  addAddress: (data) => Promise<AccountInfo>
  editAddress: (data) => Promise<AccountInfo>
  removeAddress: (data: object) => Promise<AccountInfo>
}

export const [useAccountStore] = create<AccountState>(
  persist("Account")(
    immer((set: any, get: any) => ({
      account: {},
      loading: false,
      setLoading: (isLoading = true) =>
        set((state: AccountState) => {
          state.loading = isLoading
        }),
      setAccount: (account: AccountInfo) => {
        set((state: AccountState) => {
          state.account = account
        })
      },
      login: async (data): Promise<AccountInfo> => {
        get().setLoading(true)
        const rs = await apiWorker.signIn(data)
        set((state: AccountState) => {
          state.account = rs.info
          state.account.token = rs.token
        })
        get().setLoading(false)

        return rs.info
      },
      signUp: async (data): Promise<AccountInfo> => {
        get().setLoading(true)
        const rs = await apiWorker.signUp(data)
        set((state: AccountState) => {
          state.account = rs.info
          state.account.token = rs.token
        })
        get().setLoading(false)

        return rs.info
      },
      updateInfo: async (data): Promise<AccountInfo> => {
        get().setLoading(true)
        const rs = await apiWorker.updateUserInfo(data)
        console.log("rs updateUserInfo", rs)
        set((state: AccountState) => {
          state.account = { ...state.account, ...rs }
        })
        get().setLoading(false)

        return rs
      },
      updateAllInfo: async (data): Promise<AccountInfo> => {
        get().setLoading(true)
        const rs = await apiWorker.updateAllUserInfo(data)
        console.log("rs update all info", rs)
        set((state: AccountState) => {
          state.account = rs
        })
        get().setLoading(false)
        return rs
      },
      fetchNew: async () => {
        get().setLoading(true)
        const rs = await apiWorker.getUserInfo()
        set((state: AccountState) => {
          state.account = { ...state.account, ...rs }
        })
        get().setLoading(false)
        return rs
      },

      addAddress: async (data) => {
        get().setLoading(true)
        const rs = await apiWorker.addUserAddress(data)
        console.log("rs add userAddress", rs)
        set((state: AccountState) => {
          state.account = { ...state.account, ...rs }
        })
        get().setLoading(false)
        return rs
      },

      removeAddress: async (data) => {
        get().setLoading(true)
        const rs = await apiWorker.removeUserAddress(data)
        set((state: AccountState) => {
          state.account = { ...state.account, ...rs }
        })
        get().setLoading(false)
        return rs
      },

      editAddress: async (data) => {
        get().setLoading(true)
        const rs = await apiWorker.editUserAddress(data)
        set((state: AccountState) => {
          state.account = { ...state.account, ...rs }
        })
        get().setLoading(false)
        return rs
      },
    })),
  ),
)
