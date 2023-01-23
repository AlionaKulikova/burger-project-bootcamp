import { Logo, Button, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./styles.module.css";


function AppHeader() {
  return (
    
      
      
      <nav className = {styles.header}>
 
<div className=" mb-4 mt-4 mr-2">
      <Button htmlType="button" type="secondary" size="medium" className={styles.button_style}>

      <div className=" ml-5 mr-2">
     <BurgerIcon type="primary" />
     </div>

     <div>
     <p className="text text_type_main-small">Конструктор</p>
     </div>
     
     </Button>
     </div>
   
     <div className="mt-4 mb-4">
     <Button htmlType="button" type="secondary" size="medium" className={styles.button_style}>

     <ListIcon type="primary" />
     <p className="text text_type_main-small">Лента заказов</p>
    
</Button>
</div>
<div className = {styles.logo}>
     <Logo />
     </div>
     <div className="mt-4 mb-4">
     <Button htmlType="button" type="secondary" size="medium" className={styles.button_style}>

     <ProfileIcon type="primary" />
     <p className="text text_type_main-small">Личный кабинет</p>
     
     </Button>
     </div>
     </nav>
    
     
  );
}

export default AppHeader;