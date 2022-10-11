import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Checkbox,
  Dropdown,
  Sidebar as FlowbiteSidebar,
  Footer,
  Label,
  ListGroup,
  Navbar,
  Pagination,
  Progress,
  Rating,
  Spinner,
  Table,
  Tabs,
  TextInput,
  Timeline,
  Toast,
  Tooltip,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import {
  HiAdjustments,
  HiArrowNarrowRight,
  HiArrowSmRight,
  HiChartPie,
  HiCheck,
  HiClipboardList,
  HiCloudDownload,
  HiDatabase,
  HiExclamation,
  HiEye,
  HiHome,
  HiInbox,
  HiOutlineAdjustments,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiUserCircle,
  HiViewBoards,
  HiX,
} from "react-icons/hi";
import React, { useState } from "react";

import { BiBuoy } from "react-icons/bi";

export default function ActualSidebar(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <>
      <Button color="bg-text-color" onClick={toggle}>
        Toggle sidebar
      </Button>
      <div className=" hidden md:block my-6 h-96">
        <FlowbiteSidebar aria-label="Menu du cours" collapsed={isOpen}>
          <FlowbiteSidebar.Items>
            <FlowbiteSidebar.ItemGroup>
              <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
                Semaine 1
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiInbox} >
                Semaine 2
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiUser}>
                Semaine 3
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
                Semaine 4
              </FlowbiteSidebar.Item>
            </FlowbiteSidebar.ItemGroup>
          </FlowbiteSidebar.Items>
        </FlowbiteSidebar>
      </div>
    </>
  );
}
