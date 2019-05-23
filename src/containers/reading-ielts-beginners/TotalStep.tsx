import * as React from 'react'

import { Wizard } from '@front10/landing-page-book/dist/components'
import QuestionOne from './Question/QuestionOne'
import QuestionTwo from './Question/QuestionTwo'
import QuestionThree from './Question/QuestionThree'
import QuestionFour from './Question/QuestionFour'
import QuestionFive from './Question/QuestionFive'
import TitleQuestionOne from './title-question/TitleQuestionOne'
import TitleQuestionTwo from './title-question/TitleQuestionTwo'
import TitleQuestionThree from './title-question/TitleQuestionThree'
import TitleQuestionFour from './title-question/TitleQuestionFour'
import TitleQuestionFive from './title-question/TitleQuestionFive'

export default class TotalStep extends React.Component<any, any> {
  render() {
    return (
      <Wizard
        contentAlign="left"
        backButtonText="Prev"
        steps={[
          {
            name: <TitleQuestionOne />,
            component: <QuestionOne />
          },
          {
            name: <TitleQuestionTwo />,
            component: <QuestionTwo />
          },
          {
            name: <TitleQuestionThree />,
            component: <QuestionThree />
          },
          {
            name: <TitleQuestionFour />,
            component: <QuestionFour />
          },
          {
            name: <TitleQuestionFive />,
            component: <QuestionFive />
          }
        ]}
      />
    )
  }
}
