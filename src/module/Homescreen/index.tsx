import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../axios-instance'
import { queryKeys } from '../../react-query/constants'
import { motion } from 'framer-motion'
import Banner from './Banner'
import Arrivals from './arrivals'
import Loader from '../../components/Loader'
import store from "../../assets/store.jpg"
import "./home.scss"
import { ImgContainer, detailsContainer } from '../../utils/animation'
import Footer from '../../components/Footer'

const HomeScreen = () => {
    const { data: productsData, isLoading } = useQuery({
        queryKey: [queryKeys.PRODUCTS],
        queryFn: getProducts
    })

    return (
        <div className='mainContainer'>
            {isLoading ? <Loader loading={isLoading} /> : (
                <>
                    <Banner />
                    <Arrivals data={productsData} />

                    <section className='latest'>
                        <motion.div
                            variants={ImgContainer}
                            initial="hidden"
                            whileInView="show"
                            className="left"
                        >
                            <img src={store} alt="Store" />
                        </motion.div>
                        <motion.div
                            className="right"
                            variants={detailsContainer}
                            initial="hidden"
                            whileInView="show"
                        >
                            <h3>Find your perfect look at Volt's Stylish New on Tokyo</h3>
                            <p>Welcome to the newest Volt outlet in Shibuya, Japan! Step into our stylish and trending store
                                and discover the latest in fashion and apparel. Come and experience the unique and vibrant atmosphere.
                            </p>
                            <span>Come and Enjoy Sales!</span>
                            <b>50%</b>
                            <button>See on Maps</button>
                        </motion.div>
                    </section>

                    <section className='collections'>
                        <h4>Featured Collections</h4>
                        <p>Dare to mix and match! Check our collections to level up your fashion game</p>

                        <motion.div
                            variants={ImgContainer}
                            initial="hidden"
                            whileInView="show"
                            className="wrapper">
                            <div className="col">
                                <div className="row">
                                    <span>Footwear</span>
                                </div>
                                <div className="row">
                                    <span>Headwear</span>
                                </div>
                            </div>

                            <div className="col">
                                <div className="row">
                                    <span>Jacket</span>
                                </div>
                                <div className="row">
                                    <span>Bags</span>
                                </div>
                            </div>

                            <div className="col">
                                <div className="row">
                                    <span>Accesories</span>
                                </div>
                                <div className="row">
                                    <span>Bottoms</span>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    <Footer />
                </>
            )}

        </div>
    )
}

export default HomeScreen