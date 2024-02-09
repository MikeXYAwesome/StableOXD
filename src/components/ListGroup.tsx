import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (items: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <Link to={heading} key={item}>
            <li
              className={
                selectedIndex === index
                  ? //selectedIndex === id
                    "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// to page

// {SidebarData.map((val, key) => {
//   const items = [val.title];
//   return (
//     <ListGroup
//       items={items}
//       heading={val.link}
//       key={key}
//       onSelectItem={hadleOnSelect}
//     />
//   );
// })}
