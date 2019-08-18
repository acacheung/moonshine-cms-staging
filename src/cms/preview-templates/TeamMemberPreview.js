import React from 'react'
import PropTypes from 'prop-types'
import { TeamMemberTemplate } from '../../templates/team-member'

const TeamMemberPreview = ({ widgetFor }) => (
  <div>
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
