const Modal = ({ msg, showModal = false, closeModal }) => {
	return (
		<div id="modal-layer" style={{ display: showModal ? "flex" : "none" }}>
			<div id="msg-modal-container">
				<div id="msg-modal">
					<p id="msg-modal-p">{msg}</p>
				</div>
				<div id="msg-modal-btn">
					<button id="modal-close" className="btn" onClick={closeModal}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
