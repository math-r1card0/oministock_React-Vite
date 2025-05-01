import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './list-item.css'

const ListItem = (props) => {
  return (
    <div className="list-item-container">
      <h5 className="list-item-text1">
        {props.heading ?? (
          <Fragment>
            <span className="list-item-text3">
              1. Listen to Social Conversations
            </span>
          </Fragment>
        )}
      </h5>
      <span>{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  heading: undefined,
  description:
    'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
}

ListItem.propTypes = {
  heading: PropTypes.element,
  description: PropTypes.string,
}

export default ListItem
