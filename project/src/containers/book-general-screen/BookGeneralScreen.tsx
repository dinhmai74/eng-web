import React from "react"
import { Screen, Text } from "components"
import { BookInfo } from "./components/BookItem.d"
import StackGrid from "react-stack-grid"
import { BookItem } from "./components/BookItem"
import { useGetProducts } from "services/api"

interface BookGeneralScreenProps {}

export const BookGeneralScreen: React.FC<BookGeneralScreenProps> = (props) => {
  const [books, setBooks] = React.useState<BookInfo[]>([])
  const [hasError, setErrors] = React.useState<any>(false)
  const { data, isLoading } = useGetProducts()
  if (isLoading) return null

  console.log("data", data)

  return (
    <Screen>
      <Text className="text-2xl">bookGeneral.title</Text>

      <div className="">
        <StackGrid columnWidth={600} duration={0}>
          {data!.map((products) => {
            return products!.items!.map((v) => {
              return <BookItem book={v} key={v.id} className="mx-8 mb-24" />
            })
          })}
        </StackGrid>
      </div>
    </Screen>
  )
}
