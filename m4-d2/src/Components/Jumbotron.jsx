import {Card} from 'react-bootstrap'
import horror from './json/horror.json'


const MyJumbotron = (props) =>{
    return(
        <Card className="bg-dark text-white">
            <Card.Img src="https://images.idgesg.net/images/article/2020/07/stack_of_books_one_open_scattering_flying_letters_language_reading_education_dictionary_by_domin_domin_gettyimages-157719194_abstract_binary_by_aleksei_derin_gettyimages-914850254_cso_2400x1600-100853104-large.jpg" alt="Card image" className='fluid' style={{height:200}} />
            <Card.ImgOverlay>
            <Card.Title>{props.titiel}</Card.Title>
            <Card.Text>
     Welcome to Strive Book Store
            </Card.Text>
             </Card.ImgOverlay>
             </Card>
    )
}

export default MyJumbotron