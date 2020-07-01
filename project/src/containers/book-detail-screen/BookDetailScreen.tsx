import { Screen } from "components"
import { useSnackbar } from "notistack"
import React from "react"
import { useParams } from "react-router-dom"
import { useGetProduct } from "services/api"
import { Gallary } from "./components/Gallary"
import { ProductInfo } from "./components/ProductInfo"
import { QuestionsAndAnswer } from "./components/QuestionsAndAnswer"

interface BookDetailScreenProps {}

export const BookDetailScreen: React.FC<BookDetailScreenProps> = (props) => {
  const { id } = useParams()
  const { data, error, isFetching } = useGetProduct(id || "")
  const { enqueueSnackbar } = useSnackbar()

  if (error) {
    enqueueSnackbar(error!.message, { variant: "warning" })
  }

  if (isFetching || !data) return <div className="min-h-screen">loading...</div>

  return (
    <Screen>
      <div className="flex">
        <Gallary
          thumbnailId={data!.thumbnailId}
          gallariesId={data!.pictures}
          className="flex flex-col w-1/3 mt-24"
        />
        <ProductInfo product={data} />
      </div>

      <QuestionsAndAnswer productId={id} />
    </Screen>
  )
}
