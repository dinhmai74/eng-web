// @ts-nocheck
import { Container, Section, Team } from '@front10/landing-page-book/dist/components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'

class TeamMember extends Component {
  render() {
    return (
      <Section title={tran('ourTeacher')}>
        <Team members={[
          {
            // tslint:disable-next-line:max-line-length
            image: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-1/62509126_922572224751986_4974984661907275776_n.jpg?_nc_cat=105&_nc_oc=AQm3ZIKUgrivCXDmlrQKtjxtQD5Tjoo5KE_orIKjhco91aZWyYfYzPMe-0i-QfrujTc&_nc_ht=scontent.fsgn4-1.fna&oh=1b803662e8bc8d08ed83f6698ae92bd3&oe=5DBFD084',
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
