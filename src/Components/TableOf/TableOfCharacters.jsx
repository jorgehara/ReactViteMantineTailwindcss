import { useState } from "react";
import {
  createStyles,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Text,
} from "@mantine/core";
import mockData from './MockData';


const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));
const [data, setData] = useState(mockData());


  console.log(data);



const TableOfCharacters = data.map((row, index) => (
    <tr key={index}>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.phone}</td>
    </tr>
));


<table>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
        </tr>
    </thead>
    <tbody>
        {TableOfCharacters}
    </tbody>
</table>






// const TableOfCharacters = ({ data }) =>{




// }



    // const { classes, cx } = useStyles()
    // const [selection, setSelection] = useState(["1"])
    // const toggleRow = id =>
    //   setSelection(current =>
    //     current.includes(id)
    //       ? current.filter(item => item !== id)
    //       : [...current, id]
    //   )
    // const toggleAll = () =>
    //   setSelection(current =>
    //     current.length === data.length ? [] : data.map(item => item.id)
    //   )
    // const rows = data.map(item => {
    //   const selected = selection.includes(item.id)
    //   return (
    //     <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
    //       <td>
    //         <Checkbox
    //           checked={selection.includes(item.id)}
    //           onChange={() => toggleRow(item.id)}
    //           transitionDuration={0}
    //         />
    //       </td>
    //       <td>
    //         <Group spacing="sm">
    //           <Avatar size={26} src={item.avatar} radius={26} />
    //           <Text size="sm" weight={500}>
    //             {item.name}
    //           </Text>
    //         </Group>
    //       </td>
    //       <td>{item.email}</td>
    //       <td>{item.job}</td>
    //     </tr>
    //   )
    // })

    // return (






    //   <ScrollArea>
    //     <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
    //       <thead>
    //         <tr>
    //           <th style={{ width: 40 }}>
    //             <Checkbox
    //               onChange={toggleAll}
    //               checked={selection.length === data.length}
    //               indeterminate={
    //                 selection.length > 0 && selection.length !== data.length
    //               }
    //               transitionDuration={0}
    //             />
    //           </th>
    //           <th>User</th>
    //           <th>Email</th>
    //           <th>Job</th>
    //         </tr>
    //       </thead>
    //       <tbody>{rows}</tbody>
    //     </Table>
    //   </ScrollArea>
//     )
// }
// export default TableOfCharacters;