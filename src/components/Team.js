import React from 'react'
const content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique.Integer congue, ex ut tristique commodo, lacus tortor vestibulum justo, nec ultricies purus risus nec mauris. '
const users =[
    {
    url:'https://s3-alpha-sig.figma.com/img/4612/91fa/f3f7c54a3f2de230e1912a46193c019c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWhkWY0ymnH1NiLvSHmxRYtlJ5phA2WjdDIraFpgytQzkZ89RlUPh~2zissn~5hAVow5WpKMEPVob5Gt423VtCBwqYlyU45kaw9w-day36O1ZpDe1KMjMMDhoVJ35kPvGgXXR2eoVhjNVcVWAc3KTGh5SZhRVYqtpoih2SmEye7jFqlGlxWaDMr1XmFajSnX2EFfGN7tZP5IoTYH-sgyqIeYH0UCSRhnmfr8kwV86NmTXY2ZUFhVf2~W7TEtbDoWXztzvi5twaNI4Bv6lrLgUCovNL91d7vh9rlnZQdMSI79DuIaZjniKVKqWksnLLV~F2x8sy~GbRLGZqX0A7PTpA__' , name: 'John Smiths', designation :'Designation here ' , about:'Integer congue, ex ut tristique commodo, lacus tortor vestibulum justo, nec ultricies purus risus nec mauris. Ut sit amet nisi vel lectus luctus luctus '
    }
    ,
    {
        url:'https://s3-alpha-sig.figma.com/img/4316/c574/4cca8e430c2d9f50e72234abc8fd1c0c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jUnx4pEpHDP86AqX4C4LeBbKl8nTXgOiKUaNxSKbr91dmGAECOGF0g~XtM5ImutaSsJd6uuszDw6zkHHr9LZq9xxCL7wXDuuWUzvKfD33neNOFbKaeWBRVrQEG7X1VJy-lSViiTU32cI3RTOUogS5mpo8pAToaDB2F74Wn~IL34QElejmtey-mpAxJ2T2SCSBWohzJGGWNkpGO6wivCDR-cU13T34QGUq-tgRM5yNCRqOePc0wO7QJvwIBKs7zV1RjqLZpRYzrCobbRLnZfb9DL3A9EDchYioriZZ9D8Qq8IRu8hGJt0k0n52QegNVHBBVhf7F75LNBnsPB-S~WPhA__' , name: 'Elina Williams', designation :'Designation here ' , about:'Integer congue, ex ut tristique commodo, lacus tortor vestibulum justo, nec ultricies purus risus nec mauris. Ut sit amet nisi vel lectus luctus luctus '
    },
    {
        url:'https://s3-alpha-sig.figma.com/img/c5f0/f097/f060c63093179c9aa8c4ce86a8cac7f7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0TvWkMEpvzWqu3lgSFfn0Cql-W2UPXvIp37Eg58U~jiurGPZoGCpKF81agPfRd2xJ8yG~y9g4x4oOQHjnaklWF-GbwnZz6C5huv0JJd9YZ9u-yHY3pjm5QNg7c-jQY3v6IHQpR1OAY5SmH1i88J6qQQr62qN8I5GVr~qUEQREK9NcscfAE8IWVoqb8laxX99Er2y0bQGvBiJQkVtpKs~wa~Rx05-1MBUHqU4q5bDeeoe4z81IQKSZdU1QJUMM-6XF87IeSF-~y2Tihn7PGmJnO6Hbhuxj9deZLsCoC4sgF3o0VY8eA2pxvOhMe6lfREEUPRik9zSkRy2bDebXMJuQ__' , name: 'John Smiths', designation :'Designation here ' , about:'Integer congue, ex ut tristique commodo, lacus tortor vestibulum justo, nec ultricies purus risus nec mauris. Ut sit amet nisi vel lectus luctus luctus '
    }
]


function Team() {
  return (
    <div className='bg-white rounded-md p-8 mt-4 mb-4 shadow-md'>
        <h1 className='text-3xl font-extrabold mb-8'>Team</h1>
    {content}
    {users.map((user, index) => (
  <div key={index} className="bg-gray-100 p-4 mb-4 rounded-md flex mt-4">
     <div className='w-1/3'>
   <img src={user.url} alt={user.name} className="w-40 h-40  mb-4" />
    <h2 className="text-xl font-bold mb-2">{user.name}</h2>
    <p className="text-gray-600 mb-2">{user.designation}</p>
     </div>
    <p className="text-gray-700 mt-12">{user.about}</p>
    
  </div>
))}

    </div>
  )
}

export default Team