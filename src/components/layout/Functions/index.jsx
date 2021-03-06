import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../shared/Button'

const Functions = ({ onContentClear, onDelete }) => (
  <section className="calculator__functions">
    <Button type='button--long-text' text="clear" clickHandler={onContentClear} />
    <Button text="r" clickHandler={onDelete} />
  </section>
)

Functions.propTypes = {
  onContentClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Functions
