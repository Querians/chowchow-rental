import { DropdownCard } from 'ui';

export const ConfirmPayment = () => {
  return(
  <>
    <DropdownCard topic={'การชำระเงิน'} backText={'กลับไปการจัดส่ง'}>
      <div>
        <p className='mb-2.5'>เลือกช่วงการแบ่งชำระจ่าย</p>
        <div class="flex flex-col mb-2.5">
          <div>
            <input required id="2times" type="radio" value="2" name="times" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="2times" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">แบ่งชำระจ่าย 2 งวด</label>
          </div>
          <div>
            <input required id="3times" type="radio" value="3" name="times" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="3times" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">แบ่งชำระจ่าย 3 งวด</label>
          </div>
          <div>
            <input required id="5times" type="radio" value="4" name="times" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="5times" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">แบ่งชำระจ่าย 4 งวด</label>
          </div>
        </div>
      </div>

      <div>
        <p>เลือกวิธีการชำระเงิน</p>
        <div class="flex flex-col mb-2.5">
          <div>
            <input required id="mobile" type="radio" value="mobile" name="payment_methode" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="mobile" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">mobile banking</label>
          </div>
          <div>
            <input required id="debit" type="radio" value="debit" name="payment_methode" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="debit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">debit card</label>
          </div>
          <div>
            <input required id="credit" type="radio" value="credit" name="payment_methode" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="credit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">credit card</label>
          </div>
        </div>
      </div>
    </DropdownCard>
  </>
  )
}
