"use client";

import { useState } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
	return isOpen ? (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-4 rounded">
				<h2 className="text-2xl font-semibold mb-2">사용방법 설명</h2>
				<p>이렇게 이렇게 블라블라~쓴다</p>
				<button
					className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
					onClick={onClose}
				>
					닫기
				</button>
			</div>
		</div>
	) : null;
};

export default Modal;
