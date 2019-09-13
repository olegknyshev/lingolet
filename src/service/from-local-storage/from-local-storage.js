const FromLocalStorage = () => {
 
    if (localStorage.getItem('settings')) {
      let data = localStorage.getItem('settings');
      data = JSON.parse(data);
      return data;
    } 
    else return null;
}

export default FromLocalStorage;