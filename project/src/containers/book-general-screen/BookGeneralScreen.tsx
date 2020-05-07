import React from "react"
import { Screen, Text } from "components"
import { apiWorker } from "api/api-worker"
import { BookInfo } from "./components/BookItem.d"
import StackGrid from "react-stack-grid"
import { BookItem } from "./components/BookItem"

interface BookGeneralScreenProps {}

export const BookGeneralScreen: React.FC<BookGeneralScreenProps> = (props) => {
  const [books, setBooks] = React.useState<BookInfo[]>([])
  const [hasError, setErrors] = React.useState<any>(false)

  React.useEffect(() => {
    apiWorker
      .getBooks()
      .then((rs) => {
        if (rs && rs.items) setBooks(rs.items)
      })
      .catch((err) => setErrors(err))
  }, [])
  console.log("books", books)

  return (
    <Screen>
      <Text className="text-2xl">bookGeneral.title</Text>

      <div className="">
        <StackGrid columnWidth={600} duration={0}>
          {books.map((v, i) => (
            <BookItem book={v} key={i} className="mx-8 mb-24" />
          ))}
        </StackGrid>
      </div>
    </Screen>
  )
}
