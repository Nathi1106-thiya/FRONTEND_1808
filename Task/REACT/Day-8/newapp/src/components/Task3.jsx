const Task3 = ({ arrob }) => {
  return (
   <>
   <h1 className="bg-amber-200 p-3">TASK3</h1>
    <div className="p-5">
      <table className="w-full border-collapse border border-black text-center">
        <thead className="bg-violet-200">
          <tr>
            <th className="border border-black p-3">No</th>
            <th className="border border-black p-3">Name</th>
            <th className="border border-black p-3">Salary</th>
            <th className="border border-black p-3">Department</th>
          </tr>
        </thead>

        <tbody>
          {arrob.map((e, i) => (
            <tr key={i} className="hover:bg-gray-100">
              <td className="border border-black p-3">{i + 1}</td>
              <td className="border border-black p-3">{e.name}</td>
              <td className="border border-black p-3">{e.salary}</td>
              <td className="border border-black p-3">{e.Department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </>
  )
}

export default Task3