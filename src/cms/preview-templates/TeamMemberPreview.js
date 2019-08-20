import React from 'react'
import PropTypes from 'prop-types'
import { TeamMemberTemplate } from '../../templates/team-member'

const TeamMemberPreview = ({ widgetFor }) => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Merriweather:300i,400,400i&display=swap" rel="stylesheet"></link>
    <br />
    <br />
    <br />
    <TeamMemberTemplate
      content={widgetFor('body')}
    />
  </div>
)

TeamMemberPreview.propTypes = {
  widgetFor: PropTypes.func,
}

export default TeamMemberPreview
