import * as React from 'react'

interface Props {
  name?: string
}

const Header: React.SFC<Props> = (props: Props) => (
  <h1>Hello, {props.name}! Welcome to React and TypeScript.</h1>
)

Header.defaultProps = {
  name: 'world'
}

export default Header
