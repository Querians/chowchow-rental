import { DropdownCard } from 'ui';

export const ConfirmContact = ({ contact }) => {
  return(
  <>
    <DropdownCard topic={'การติดต่อ'} backText={'เลือกสินค้าเพิ่มเติม'}>
      <label
        htmlFor="email"
        className="mb-2.5 block text-sm font-medium text-black dark:text-white"
      >
        Email
      </label>
      <input
        name="email"
        type="text"
        value={contact.email}
        className="border-1 mb-2.5 block w-full cursor-not-allowed rounded-md border-black bg-[#CDCDCD] p-2.5 text-sm"
        disabled
        readonly
      />
      <label
        htmlFor="Phone"
        className="mb-2.5 block text-sm font-medium text-black dark:text-white"
      >
        Tel.
      </label>
      <input
        name="Phone"
        type="text"
        value={contact.phone}
        className="border-1 mb-2.5 block w-full cursor-not-allowed rounded-md border-black bg-[#CDCDCD] p-2.5 text-sm"
        disabled
        readonly
      />
    </DropdownCard>
  </>
  )
}
