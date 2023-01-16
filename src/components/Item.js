import PropTypes from "prop-types"

export default function Item({marca, lancamento}){

    Item.propTypes={
        marca: PropTypes.string.isRequired,
        lancamento: PropTypes.number,
    }

    return(
        <>
            <li>{marca} - {lancamento}</li>
        </>
    )
}