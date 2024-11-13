"use client";

import { MouseEventHandler } from "react";

interface IModalOption {
  value: string;
  onConfirm: MouseEventHandler<HTMLButtonElement>;
  onCancel: MouseEventHandler<HTMLButtonElement>;
}

export const ModalOption = ({ value, onConfirm, onCancel }: IModalOption) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
      <div className="bg-white p-8 rounded-xl max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Confirm your answer</h2>
        <p className="mb-6">
          Are you sure you want to select:{" "}
          <span className="font-semibold">{value}</span>?
        </p>
        <div className="flex gap-4 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
