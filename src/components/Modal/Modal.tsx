"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactNode }) => {
  const { back } = useRouter();
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    modalRef.current?.showModal();
    modalRef.current?.scrollTo({
      top: 0,
    });
  }, []);

  return createPortal(
    <dialog
      className="rounded-lg backdrop:bg-[rgba(0,0,0,0.8)]"
      onClose={() => back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          back();
        }
      }}
      ref={modalRef}
    >
      {children}
    </dialog>,
    document.body,
  );
};

export default Modal;
