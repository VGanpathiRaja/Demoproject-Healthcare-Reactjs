import React from 'react';
import { Overviewbox } from './Overviewbox';
import { Sidenavbar } from './Sidenavbar';

export const Psychotherapistsoverview = () => {
  const data = [
    { id: 1, name: 'John Doe', DOB_Age: '26',  Height_Blood: '165h b+', Primary: '8523697410', alternative: '3698521470', Gmail: 'jane@example.com', Address: 'vellachery', Patuent_notes: 'strain and stress over' },
    { id: 2, name: 'John Doe', DOB_Age: '26',  Height_Blood: '165h b+', Primary: '8523697410', alternative: '3698521470', Gmail: 'jane@example.com', Address: 'vellachery', Patuent_notes: 'strain and stress over' },
    { id: 3, name: 'Sam Johnson',  DOB_Age: '26',  Height_Blood: '165h b+', Primary: '8523697410', alternative: '3698521470', Gmail: 'jane@example.com', Address: 'vellachery', Patuent_notes: 'strain and stress over' },
    { id: 4, name: 'Johnson',  DOB_Age: '26',  Height_Blood: '165h b+', Primary: '8523697410', alternative: '3698521470', Gmail: 'jane@example.com', Address: 'vellachery', Patuent_notes: 'strain and stress over' },
    { id: 5, name: 'jhone',  DOB_Age: '26',  Height_Blood: '165h b+', Primary: '8523697410', alternative: '3698521470', Gmail: 'jane@example.com', Address: 'vellachery', Patuent_notes: 'strain and stress over' },
  ];

  return (
    <div className='flex'>

    <Sidenavbar/>
        <div className='basis-[85%] h-[100vh] border bg-slate-100'>
            <div className='p-5 bg-slate-400 '>
                <h1 className='text-[18px] text-white font-bold'>Psychotherapy Patients Overview</h1>
            </div>
            
            <div className='flex items-center justify-between'>
            <Overviewbox overviewtitle="Over All cases" overviewcount="36"/>
            <Overviewbox overviewtitle="Patient Count" overviewcount="50"/>
            <Overviewbox overviewtitle="Video Call " overviewcount="20"/>
            <Overviewbox overviewtitle="Patient Notes" overviewcount="16"/>
            </div>
            {/* <div className='p-5 bg-slate-400 '>
                <h1 className='text-[18px] text-white font-bold'>Patient Information</h1>
            </div> */}
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                  <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                    <h2 className="text-2xl leading-tight">Patient Information</h2>
                  </div>
                  <div className="px-4 py-4 -mx-4 sm:-mx-8 sm:px-8 overflow-x-auto">
                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                            >
                            Fullname
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                            >
                             DOB & Age
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                            >
                              Height & Blood Group
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                            >
                              Primary Number
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                            >
                             Alternative number
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                            >
                            Gmail
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                            >
                              Address
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                            >
                              Patient Notes
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((user) => (
                            <tr key={user.id}>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{user.DOB_Age}</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{user.Height_Blood}</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{user.Primary}</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{user.alternative}</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{user.Gmail}</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{user.Address}</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{user.Patuent_notes}</p>
                              </td>
                            </tr>
                          ))} 
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

        </div>
    </div>
  )
}
