const button = document.querySelector('button');

button.addEventListener('click', () => {
  const modal = new Modal(document.body, `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut perferendis obcaecati fuga animi a aperiam! Cupiditate sit placeat necessitatibus, vero ad doloribus nemo dicta eaque voluptates labore laboriosam eveniet?</p>
  `);

  modal.show();
  modal.wrapper.addEventListener('click', (ev) => {
    if (ev.target === modal.wrapper) {
      modal.dimiss();
    }
  })
});

class Modal {
  constructor(parent, content) {
    this.parent = parent;
    this.content = content;
  }
  
  show() {
    this.wrapper = document.createElement('div');
    this.wrapper.id = 'modal-wrapper';
    this.modal = document.createElement('div');
    this.modal.id = 'modal';
    this.modal.innerHTML = this.content;

    this.wrapper.append(this.modal);
    this.parent.append(this.wrapper);
    
    setTimeout(() => {
      this.wrapper.style.opacity = 1;
      this.modal.style.transform = 'scale(1)';
    });
  }

  dimiss() {
    this.modal.style.transform = 'scale(.3)';
    this.wrapper.style.opacity = 0;
    
    setTimeout(() => {
      this.modal.remove();
      this.wrapper.remove();
    }, 250);
  }
}