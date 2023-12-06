/* eslint-disable react/prop-types */
const SidebarItem = ({ itemName, logo, notification }) => {
  return (
    <div>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg
             hover:bg-gray-100  group"
        >
          {logo}
          <span className="flex-1 ms-3 whitespace-nowrap">{itemName}</span>
          {notification}
        </a>
      </li>
    </div>
  );
};

export default SidebarItem;
