const body = document.querySelector('body'),
      sidebar = document.querySelector('.sidebar'),
      taggle = document.querySelector('.toggle'),
      searchBtn = document.querySelector('.search-box'),
      modeSwitch = document.querySelector('.toggle-switch'),
      switchgangan = document.querySelector('.switch'),
      modeSwutch = document.querySelector('.toggle-swutch'),
      modeText = document.querySelector('.mode-text'),
      modalText = document.querySelector('.modal-text'),
      closeSidebar = document.querySelector('.tuggle'),
      dashMan = document.querySelector('.home'),
      sidoebar = document.querySelector('.vetical-menu'),
      pictureLogo = document.querySelector('.laga'),
      pictureLago = document.querySelector('.loga');

  
      elemento = document.querySelector('#tuggleIconic');

      taggle.addEventListener('click', turela);
      
      function turela() {
        
        sidebar.classList.toggle('close');
        elemento.classList.toggle('noClose');
        console.log('E dey work');
      };
        

      closeSidebar.addEventListener('click', deyOpen);


      modeSwitch.addEventListener('click', modeWitch);
      
      // function modeWitch () {
      //   body.classList.toggle('dark');

      //   if(body.classList.contains('dark')) {
      //       pictureLogo.src = 'light.png'
      //       modeText.innerText = 'Light Mode'
      //       modeWucth ();
      //   }else{
      //       pictureLogo.src= 'logo.png'
      //       modeText.innerText = 'Dark Mode'
      //   }
      // }

      modeSwutch.addEventListener('click', modeWutch);
      
      // function modeWucth () {
      //   body.classList.toggle('dork');

      //   if(body.classList.contains('dork')) {
      //       pictureLogo.src = 'light.png'
      //       modalText.innerText = 'Light Mode'
      //       modeWitch ();
      //   }else{
      //       pictureLogo.src= 'logo.png'
      //       modalText.innerText = 'Dark Mode'
      //   }
      // };

      // switchgangan.addEventListener('click', switcham);

      // function modeWitch () {
      //   switchgangan.classList.add('daruk');

      //   if(switchgangan.classList.contains('daruk')) {
      //     body.classList.add('dark');
      //     // console.log(e.target);
      //     modeText.innerText = 'Light Mode'
      //     switchgangan.classList.remove('daruk');
      //     // switchgangan.classList.add('comot');
      //     modeSwitch.classList.add('camot');
      //   }
      // }
      // function switcham (e) {
      //   if (modeSwitch.classList.contains('camot')) {
      //     body.classList.remove('dark');
      //     console.log(e.target)
      //     console.log('work my broda');
      //     console.log(body.classList);
      //   } else {
          
      //     console.log('no work my broda, ajeh!');
      //     console.log(e.target.classList);
      //     console.log(body.classList);
      //   }
      // }
      
    //   function modeWitch() {
    //     if (!body.classList.contains('dark')) {
    //         body.classList.add('dark');
    //         modeText.innerText = 'Light Mode';
    //         modeSwitch.classList.add('camot');
    //     } 
    //     else if (modeSwitch.classList.contains('camot')) {
    //         body.classList.remove('dark');
    //         modeText.innerText = 'Dark Mode';
    //         modeSwitch.classList.remove('camot');
    //     }
    // }
    
    // function switcham(e) {
    //     if (modeSwitch.classList.contains('camot')) {
    //         body.classList.remove('dark');
    //         console.log('Light Mode');
    //     } else if (!body.classList.contains('dark')) {
    //         body.classList.add('dark');
    //         console.log('Dark Mode');
    //     }
    // }
    
  
function modeWitch() {
  if (!body.classList.contains('dark')) {
      enableDarkMode();
      enableDorkMode();
  } else if (modeSwitch.classList.contains('camot')) {
      disableDarkMode();
      disableDorkMode();
  }
}

function modeWutch() {
  if (!body.classList.contains('dark')) {
      enableDorkMode();
      enableDarkMode();
  } else if (modeSwutch.classList.contains('camot')) {
      disableDorkMode();
      disableDarkMode();
  }
}

  // function enableOpen() {
  //   sidebar.classList.add('close');
  // }

  // function disableOpen() {
  //   sidebar.classList.remove('close');
  // }

    function enableDarkMode() {
      body.classList.add('dark');
      pictureLogo.src = 'light.png'
      modeText.innerText = 'Light Mode';
      modeSwitch.classList.add('camot');
  }
  
  function disableDarkMode() {
      body.classList.remove('dark');
      pictureLogo.src= 'logo.png'
      modeText.innerText = 'Dark Mode';
      modeSwitch.classList.remove('camot');
  }
   function enableDorkMode() {
    body.classList.add('dark');
    pictureLago.src = 'light.png'
    modalText.innerText = 'Light Mode';
    modeSwutch.classList.add('camot');
}

function disableDorkMode() {
    body.classList.remove('dark');
    pictureLago.src= 'logo.png'
    modalText.innerText = 'Dark Mode';
    modeSwutch.classList.remove('camot');
}

      // document.addEventListener('DOMContentLoaded', function () {
      //   const menuIcon = document.getElementById('menuIcon');
      
      //   menuIcon.addEventListener('click', function () {
      //     menuIcon.classList.toggle('closed');
      //   });
      // });
      const verticalOpen = document.querySelector('.openX'),
            verticalClose = document.querySelector('.closex');

            verticalOpen.addEventListener('click', dofo);
            verticalClose.addEventListener('click', dontfo);

            function dontfo(e) {
              
              if(e.target.classList.contains('closex')){
                sidoebar.style.display = 'none'
              }
            }
            function dofo(e) {
              
              if(e.target.classList.contains('openX')){
                sidoebar.style.display = 'flex'
              }
            }
    //   function hideSidebar() {
    //   }
    //   function showSidebar() {
    // }

    
//   document.addEventListener('DOMContentLoaded', function () {
//     const sidebar = document.querySelector('.sidebar');
//     const toggleIcon = document.getElementById('tuggleIconic');

//     toggleIcon.addEventListener('click', function () {
//         sidebar.classList.toggle('cluse');
//         toggleIcon.classList.toggle('clused');
//     });
// });


function deyOpen() {
 if(sidebar.classList.contains('close')) {
  elemento.classList.toggle('openam');
  sidebar.classList.toggle('comotGuy');
  dashMan.classList.toggle('comotNigga');
 }
};
function enter() {
  if(!sidebar.classList.contains('close')) {
    elemento.classList.remove('openam');
  }
}
// function insideOut() {
//   // console.log(sidebar.classList); 
//   // if(!sidebar.classList.contains('close')) {
//   //   console.log('Class not found');
//   // }
//   if(sidebar.classList.contains('comotGuy')) {
//     elemento.classList.remove('openam');
//   }
// }

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});
const obsorver = new IntersectionObserver((entrios) => {
  entrios.forEach((entri) => {
    console.log(entri);
    if(entri.isIntersecting) {
      entri.target.classList.add('shuw');
    }else{
      entri.target.classList.remove('shuw');
    }
  });
});
const obsarver = new IntersectionObserver((entrias) => {
  entrias.forEach((entra) => {
    console.log(entra);
    if(entra.isIntersecting) {
      entra.target.classList.add('shaw');
    }else{
      entra.target.classList.remove('shaw');
    }
  });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const huddenElements = document.querySelectorAll('.hudden');
huddenElements.forEach((el) => obsorver.observe(el));

const haddenElements = document.querySelectorAll('.bab');
haddenElements.forEach((el) => obsarver.observe(el));