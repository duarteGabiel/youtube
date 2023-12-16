import { MenuContext } from "../../contexts/menuContexts";
import { useCategoryContext } from "../../contexts/searchCategory";
import { Container,Button } from "./styles";
import { useContext } from 'react'




function Category() {

    const {openMenu} = useContext(MenuContext)
    const items = [
        {name: 'Tudo', id: '0'},
        {name: 'Games', id: '20'},
        {name: 'Futebol', id: '17'},
        {name: 'Entretenimento', id: '24'},
        {name: 'Música', id: '10'},
        {name: 'Pessoas e blogs', id: '22'},
        {name: 'Automóveis e veículos', id: '2'},
        {name: 'Animais e pets', id: '15'},
        {name: 'Notícias e política', id: '25'},
        {name: 'Comédia', id: '23'},
        {name: 'Shorts', id: '26'},
    ]
    
    const {setCategoryId} = useCategoryContext()

    function searchCategory(id: string) {
        setCategoryId(id)
      }

    return(
        <Container openMenu={openMenu}>
            {items.map((button, index) => (
          <Button openMenu={openMenu} onClick={() => searchCategory(button.id)} key={index}>{button.name}</Button>
            ))}
        </Container>
    )
}

export default Category;