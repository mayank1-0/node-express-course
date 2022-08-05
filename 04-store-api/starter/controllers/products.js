const getAllProductsStatic = async (req,res) => {
    try {
        res.status(200).json({ msg:'products testing route' })
    } catch (error) {
        
    }
}

const getAllProducts = async (req,res) => {
    try {
        res.status(200).json({ msg:'products route' })
    } catch (error) {
        
    }
}

module.exports = {getAllProducts, getAllProductsStatic}