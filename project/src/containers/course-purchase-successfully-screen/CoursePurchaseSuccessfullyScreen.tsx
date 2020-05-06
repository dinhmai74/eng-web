import cx from "classnames"
import { Screen, Text } from "components"
import Interwave from "interweave"
import { tran } from "localization/i18n"
import moment from "moment"
import React from "react"
import { images } from "themes"
import { strings } from "tools"

interface CoursePurchaseSuccessfullyScreenProps {}

export const CoursePurchaseSuccessfullyScreen: React.FC<CoursePurchaseSuccessfullyScreenProps> = (
  props,
) => {
  return (
    <Screen className="flex">
      <div className="flex flex-col flex-1 items-center">
        <Text className="text-3xl">purchaseSuccess.toeicA.congrad</Text>

        <div className="flex w-full px-12 py-16 justify-center">
          <img src={images.illuPitching} alt="illu" className="w-64" />

          <div className="ml-12">
            <Text className={cx("text-xl")}>purchaseSuccess.toeicA.note.title</Text>

            <Interwave content={tran("purchaseSuccess.toeicA.note.mustDo")} />
          </div>
        </div>

        <div className="py-8 flex flex-col items-center">
          <Text className="text-2xl">purchaseSuccess.toeicA.info.title</Text>

          <div className="p-4 ">
            <Text className="mb-2">purchaseSuccess.toeicA.info.canPick</Text>

            <table className="table-fixed">
              <thead>
                <tr>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Teacher</th>
                  <th className="px-4 py-2">Classroom</th>
                  <th className="px-4 py-2">Class name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">
                    {moment().add(1, "day").format(strings.formatDateDisplayWithTime)}
                  </td>
                  <td className="px-4 py-2 border">Lottie Dixon</td>
                  <td className="px-4 py-2 border">B5.2</td>
                  <td className="px-4 py-2 border">A102</td>
                </tr>
                <tr className="">
                  <td className="px-4 py-2 border">
                    {moment()
                      .add(4, "days")
                      .add(3, "hours")
                      .format(strings.formatDateDisplayWithTime)}
                  </td>
                  <td className="px-4 py-2 border">Hilda Richardson</td>
                  <td className="px-4 py-2 border">B3.2</td>
                  <td className="px-4 py-2 border">A104</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">
                    {moment()
                      .add(5, "days")
                      .add(2, "hours")
                      .add(40, "minutes")
                      .format(strings.formatDateDisplayWithTime)}
                  </td>
                  <td className="px-4 py-2 border">Clarence Padilla</td>
                  <td className="border px-4 py-2">B3.1</td>
                  <td className="px-4 py-2 border">A102</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="py-4 children:my-2">
          <Text className="text-gray-600">purchaseSuccess.toeicA.info.feelFree</Text>
          <span className="flex">
            <p className="text-gray-700 mr-2">Code: </p>
            <p className="text-purple-700 font-bold">44d53cfc</p>
          </span>
        </div>
      </div>
    </Screen>
  )
}
