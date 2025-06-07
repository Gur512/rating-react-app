import { useState } from 'react';
import Dialog from './components/Dialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const images = [
    "https://plaky.com/blog/wp-content/uploads/2023/08/It-was-me.jpg",
    "https://plaky.com/blog/wp-content/uploads/2023/08/Hysteria-induced-laughter.jpg",
    "https://plaky.com/blog/wp-content/uploads/2023/08/Dev-vs-tester-royal-rumble.jpg",
    "https://plaky.com/blog/wp-content/uploads/2023/08/Easy-user-interface.gif",
    "https://i.pinimg.com/736x/7d/9e/67/7d9e67daf1053d59dd5cd6cc66377516.jpg",
    "https://i.pinimg.com/736x/52/19/13/5219131c19d3a7f7d7be09e27b588276.jpg",
    "https://i.pinimg.com/236x/f4/e1/32/f4e132ed2dbb7c396fb0a4125f4d14d2.jpg",
    "https://i.pinimg.com/736x/4f/ce/05/4fce05cf64839b528c387fab1478a572.jpg",
    "https://i.pinimg.com/736x/0a/e6/04/0ae6047e7f2828075463872ad1362518.jpg",
    "https://plaky.com/blog/wp-content/uploads/2023/08/Follow-or-comprehend.jpg"
  ];

  return (
    <div className='btn-container'>
      <h2 className='header-txt'>Let's have some fun!!</h2>
      <button onClick={openDialog} className='rate-btn'>Rate Us</button>
      {isOpen && <Dialog onClose={closeDialog} images={images}/>}
    </div>
  );
}

export default App;
