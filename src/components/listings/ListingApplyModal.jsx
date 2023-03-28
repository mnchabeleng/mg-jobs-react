import { Dialog } from '@headlessui/react'

import ListingApplyForm from './ListingApplyForm'
import Button from '../html/form/Button'

export default function ListingApplyModal({ isOpen, setIsOpen }) {
  return (
    <Dialog
      open={ isOpen }
      onClose={ () => setIsOpen(false) }
      className="relative z-50">
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black">
          <Dialog.Panel
            className="w-full max-w-sm rounded bg-white">
            <Dialog.Title>Deactivate account</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>

            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>

            <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </Dialog.Panel>
        </div>
    </Dialog>
  )
}
