import React from 'react'
import PropTypes from 'prop-types'
import { TeamMemberTemplate } from '../../templates/team-member'

const TeamMemberPreview = ({ widgetFor }) => (
  <TeamMemberTemplate
    content={widgetFor('body')}
  />
)

TeamMemberPreview.propTypes = {
  widgetFor: PropTypes.func,
}

export default TeamMemberPreview
