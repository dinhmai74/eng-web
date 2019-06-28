// @ts-nocheck
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Section, Container, Team } from '@front10/landing-page-book/dist/components'

class TeamMember extends Component {
  render() {
    return (
      <Section title={tran('ourTeacher')}>
        <Team members={[
          {
            // tslint:disable-next-line:max-line-length
            image: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/51036534_840820212927188_8240394829008207872_o.jpg?_nc_cat=100&_nc_oc=AQm6l78xgESZp8ORZnpW1m9wTuYaPgojkFm0Z6EuPQakWcSoR9ny-DydMGK0hEB-SFU&_nc_ht=scontent.fsgn4-1.fna&oh=be83eb60f3c226d5c0c38a9d9b496da8&oe=5D69835F',
            name: 'Linh bếu',
            job: 'Phát âm tiếng anh cực xịn',
            profile: [
              {
                social: 'facebook',
                url: 'https://www.facebook.com/kealshi'
              },
              {
                social: 'twitter',
              }
            ]
          },
          {
            // tslint:disable-next-line:max-line-length
            image: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/58441168_2372947552988900_5022790010143768576_o.jpg?_nc_cat=100&_nc_oc=AQmkjLkqM5hk30IC1uAnewkQxQ3oJKi17YhxilvMI2ypMY162P7901e4kDXr_zyGYRE&_nc_ht=scontent.fsgn4-1.fna&oh=b796c3fc1af78573a9f874efe5ee0e1f&oe=5D731DA0',
            name: 'Lộc giáo sư ',
            job: 'Ngữ pháp vô địch',
            profile: [
              {
                social: 'facebook',
                url: 'https://www.facebook.com/ddoitaymathuat'
              },
              {
                social: 'email',
              }
            ]
          },
          {
            // tslint:disable-next-line:max-line-length
            image: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/37738892_1053002581524884_3592104522303930368_o.jpg?_nc_cat=104&_nc_oc=AQlZoClOJXmUvF0het0WjGuOZBtmPJVMnOWWOst20wlcd6i33bZSyGaMKdXocFY9fEw&_nc_ht=scontent.fsgn3-1.fna&oh=73ca8bae8b7b11eac5e0cb79d5dc0b09&oe=5D77A5D6',
            name: 'Tài đa năng',
            job: 'Phục vụ trà đá',
            profile: [
              {
                social: 'facebook',
                url: 'https://www.facebook.com/quoctainguyenIT'
              },
              {
                social: 'twitter',
              }
            ]
          }
        ]}/>
      </Section>
    )
  }
}

export default TeamMember
