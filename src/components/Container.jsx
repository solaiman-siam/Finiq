import PropTypes from "prop-types"

function Container({children}) {
  return (
    <div className="container h-full max-w-[1420px] mx-auto ">
        {children}
    </div>
  )
}

Container.propTypes = {
    children: PropTypes.node
}
export default Container