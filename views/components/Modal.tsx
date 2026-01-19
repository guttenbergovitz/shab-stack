interface ModalProps {
  title: string;
  children: any;
}

export default function Modal({ title, children }: ModalProps) {
  return (
    <div class="modal-content">
      <div class="modal-header">
        <h2>{title}</h2>
        <button 
          type="button" 
          hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" 
          class="modal-close"
        >
          ✕
        </button>
      </div>
      <div class="modal-body">
        {children}
      </div>
    </div>
  );
}
