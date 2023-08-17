

function DataTable({data, cellWidth = "20", cellHight = "20", tableWidth = "full", textSize = "20px"}) {

  console.log(data)

  return (
    <div className={`w-full overflow-x-auto overflow-y-auto text-[${textSize}]`}>
      <table className={`w-${tableWidth} border-collapse`}>
        <thead>
          <tr>
            <th className={`tableHeader w-${cellWidth} h-${cellHight}`}>Name</th>
            <th className={`tableHeader w-${cellWidth} h-${cellHight}`}>ID</th>
            <th className={`tableHeader w-${cellWidth} h-${cellHight}`}>Name Type</th>
            <th className={`tableHeader w-${cellWidth} h-${cellHight}`}>Rec Class</th>
            <th className={`tableHeader w-${cellWidth} h-${cellHight}`}>Mass</th>
            <th className={`tableHeader w-${cellWidth} h-${cellHight}`}>Fall</th>
            <th className={`tableHeader w-${cellWidth} h-${cellHight}`}>Year</th>
            <th className={`tableHeader w-${cellWidth} h-${cellHight}`}>Latitude</th>
            <th className={`tableHeader w-${cellWidth} h-${cellHight}`}>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className={`tableData w-${cellWidth} h-${cellHight}`}>{item.name}</td>
              <td className="tableData">{item.id}</td>
              <td className="tableData">{item.nametype}</td>
              <td className="tableData">{item.recclass}</td>
              <td className="tableData">{item.mass}</td>
              <td className="tableData">{item.fall}</td>
              <td className="tableData">{item.year?.slice(0,10)}</td>
              <td className="tableData">{item.reclat}</td>
              <td className="tableData">{item.reclong}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;