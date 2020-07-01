import { useInfiniteQuery, useQuery } from "react-query"
import { AppAPI } from "./api-config"

const getFetchMore = (lastGroup) => {
  if (!lastGroup!.pagination!.hasNext) return false
  return (lastGroup!.pagination!.currentPage || 1) + 1
}

const BASE_END_POINT = "Products/"

const detailUrls = {
  getProducts: "get-all",
  getProduct: "get",
  getProductsByIds: "get-products-with-id",
  getByProvider: "Get-With-Provider",
  getByRate: "Get-With-Rate",
  getByPrice: "Get-With-Range-Price",
  getByDiscount: "Get-With-Higher-Discount",
}

// eslint-disable-next-line
Object.keys(detailUrls).map((key) => {
  detailUrls[key] = BASE_END_POINT + detailUrls[key]
})

// export const getProductGeneral = ({ page }: { page?: number }) =>
// fetch(`${detailUrls.getGeneral}?pageNumber=${page || 0}&pageSize=10`)

export const getProductsGeneral = async (cursor = 1): Promise<API.ProductsResponseData> => {
  const data: any = await AppAPI.get(
    `${detailUrls.getProducts}?pageNumber=${cursor || 0}&pageSize=10`,
  )
  return data
}

export const getProduct = async (_, id: string): Promise<API.ProductData> => {
  const data: any = await AppAPI.get(`${detailUrls.getProduct}/${id}`)
  return data
}

export const useGetProducts = () => {
  return useInfiniteQuery(
    "products",
    async (key, nextId = 0) => {
      const data = await getProductsGeneral(nextId)
      return data
    },
    {
      getFetchMore,
    },
  )
}

export const useGetProduct = (id: string) => {
  return useQuery(["getProductById", id], getProduct)
}

export const getProductsByIds = async (_, ids: string[]): Promise<API.ProductData[]> => {
  let params = ""
  ids.forEach((v, i) => {
    if (i !== 0) params += "&"
    params += `ids=${v}`
  })
  return await AppAPI.get(`${detailUrls.getProductsByIds}?${params}`)
}

export const useGetProductsByIdsQuery = (ids: string[]) => {
  return useQuery(["getProductsByIds", ids], getProductsByIds)
}

export const useQueryGetProductsByProvider = (providerName: string) => {
  return useInfiniteQuery<API.ProductsResponseData, any, any>(
    "getProductByProvider",
    async (key, nextId = 0) => {
      const data = await AppAPI.get(
        `${detailUrls.getByProvider}/${providerName}?pageSize=10&pageNumber=${nextId}`,
      )
      return data
    },
    {
      getFetchMore,
      initialData: [],
      enabled: !!providerName,
    },
  )
}

export const useQueryGetProductsByRate = (rate: number) => {
  return useInfiniteQuery<API.ProductsResponseData, any, any>(
    "getProductByRate",
    async (key, nextId = 1) => {
      const url = `${detailUrls.getByRate}/${rate}?pageSize=10&pageNumber=${nextId}`
      const data = await AppAPI.get(url)
      // const data = await AppAPI.get(
      // `${detailUrls.getByProvider}/Wolsen?pageSize=10&pageNumber=${nextId}`,
      // )
      return data
    },
    {
      getFetchMore,
      initialData: [],
      enabled: !!rate,
    },
  )
}
export const useQueryGetProductsByDiscount = (discount: number) => {
  return useInfiniteQuery<API.ProductsResponseData, any, any>(
    "getProductByDiscount",
    async (key, nextId = 1) => {
      const url = `${detailUrls.getByDiscount}/${discount}?pageSize=10&pageNumber=${nextId}`
      const data = await AppAPI.get(url)
      return data
    },
    {
      getFetchMore,
      initialData: [],
      enabled: !!discount,
    },
  )
}

export const useQueryGetProductsByPrice = (min: number, max: number) => {
  return useInfiniteQuery<API.ProductsResponseData, any, any>(
    "getProductByPrice",
    async (key, nextId = 1) => {
      const url = `${detailUrls.getByPrice}?fromPrice=${min}&toPrice=${max}&pageSize=10&pageNumber=${nextId}`
      const data = await AppAPI.get(url)
      return data
    },
    {
      getFetchMore,
      initialData: [],
      enabled: !!min && !!max,
    },
  )
}
