import React from 'react'
import PropTypes from 'prop-types'
import { TeamMemberTemplate } from '../../templates/team-member'

const TeamMemberPreview = ({ entry, widgetFor }) => {
  <TeamMemberTemplate
    content={widgetFor('body')}
    firstname={entry.getIn(['data', 'firstname'])}
    lastname={entry.getIn(['data', 'lastname'])}
    role={entry.getIn(['data', 'role'])}
  />
}

TeamMemberPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeamMemberPreview
