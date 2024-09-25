import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface ITableData {
  topic: string;
  description: string;
  href: string;
}

const tableData: ITableData[] = [
  {
    topic: "Dynamic Styling (Tailwind.config)",
    description:
      "The styling of the component should be changed dynamically in the tailwind.config file when user according to the user's actions.",
    href: "/card",
  },
  {
    topic: "Dynamic Grid (Images Display)",
    description:
      "This should have a grid component that will have images and number of images will be decided by the dynamic grid width",
    href: "/grid",
  },
  {
    topic: "Teams and players Data into a Table",
    description:
      "Table for displaying the data of different teams and their stats",
    href: "/table",
  },
];

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
      <h1 className="text-h1 mb-10">Interview Remaining Pointers</h1>
      <div className="max-w-3xl w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="rounded-md">
              <th scope="col" className="px-6 py-3">
                Topic
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((row, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {row.topic}
                </th>
                <td className="px-6 py-4">{row.description}</td>
                <td className="px-6 py-4">
                  <Link href={row.href}>
                    <span>
                      <ArrowTopRightOnSquareIcon className="w-6" />
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
