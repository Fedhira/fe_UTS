export let isiTabel = `
<tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <!-- Avatar with inset shadow -->
                          <div
                            class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                          >
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p class="font-semibold">#NAMA_BANK#</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400">
                            #LOKASI_BANK#                          
                             </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm">
                      <p class="font-semibold">#NAMA_NASABAH#</p>
                      <p class="text-xs text-gray-600 dark:text-gray-400">
                            #PHONE_NUMBER#                          
                             </p>
                             <p class="text-xs text-gray-600 dark:text-gray-400">
                            #EMAILN#                          
                             </p>
                      </td>
                      <td class="px-4 py-3 text-sm">
                      <p class="font-semibold">#TAGIHAN#</p>
                      <p class="text-xs text-gray-600 dark:text-gray-400">
                            #TANGGAL#                          
                             </p>
                      </td>
                      <td class="px-4 py-3 text-sm">
                      #DESKRIPSI#
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span
                          class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                        >
                        #STATUS#
                        </span>
                      </td>
                      <td class="px-4 py-3 text-sm">
                      <p class="font-semibold">#NAMA_PENAGIH#</p>
                      <p class="text-xs text-gray-600 dark:text-gray-400">
                            #NO_HP#                          
                             </p>
                             <p class="text-xs text-gray-600 dark:text-gray-400">
                            #EMAILP#                          
                             </p>
                      </td>
                    </tr>
`;