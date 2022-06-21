import React from 'react'
import { IUser } from '../interfaces/IUser'

interface ListUserProp {
  users: IUser[]
}

const ListUser = ({ users }: ListUserProp) => {
  return (
    <>
      <div className="container mx-auto pb-6 px-8">
        <div className="flex items-center justify-center min-w-full shadow md:shadow-xl md:pl-4 pt-6 rounded-lg overflow-hidden">
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                    <div className="flex items-center ">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={user.profile_image}
                          alt=""
                        />
                      </div>
                      <div className="ml-2 text-sm    ">
                        <p className="md:text-base text-gray-900 whitespace-pre">
                          {user.username}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 bg-white text-sm">
                    <p className="md:text-base  text-gray-900 whitespace-no-wrap">
                      {user.password}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                    <p className="md:text-base  text-gray-900 whitespace-no-wrap">
                      {user.joined_date.toLocaleString()}
                    </p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </div>
      </div>
    </>
  )
}

export default ListUser
