import { NextPage } from "next";

interface Team {
  name: string;
  players: string[];
}

interface Stats {
  win: number;
  lose: number;
  draw: number;
}

interface GameData {
  game: string;
  teams: {
    [key: string]: Team;
  };
  stats: {
    [key: string]: Stats;
  };
}

const gameData: GameData = {
  game: "cricket",
  teams: {
    "123": {
      name: "Mumbai",
      players: ["1", "2", "3"],
    },
    "345": {
      name: "Bhubaneswar",
      players: ["1", "2", "3"],
    },
    "456": {
      name: "Gurgaon",
      players: ["1", "2", "3"],
    },
    "567": {
      name: "Surat",
      players: ["1", "2", "3"],
    },
  },
  stats: {
    "123": {
      win: 234,
      lose: 140,
      draw: 12,
    },
    "345": {
      win: 345,
      lose: 120,
      draw: 6,
    },
    "456": {
      win: 540,
      lose: 350,
      draw: 18,
    },
    "567": {
      win: 800,
      lose: 500,
      draw: 12,
    },
  },
};

const Table: NextPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
      <pre className="max-w-3xl bg-gray-800 text-gray-200 p-4 rounded-md w-full overflow-scroll h-80">
        {JSON.stringify(gameData, null, 2)}
      </pre>
      <div className="max-w-3xl w-full flex">
        <table className=" mt-6 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="rounded-md">
              <th scope="col" className="px-3 py-3">
                Team ID
              </th>
              <th scope="col" className="px-3 py-3">
                Team Name
              </th>
              <th scope="col" className="px-3 py-3">
                Wins
              </th>
              <th scope="col" className="px-3 py-3">
                Loses
              </th>
              <th scope="col" className="px-3 py-3">
                Draws
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(gameData?.teams)?.map((teamId, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="p-3">{teamId}</td>
                <td className="p-3">{gameData.teams[teamId].name}</td>
                <td className="p-3">{gameData.stats[teamId].win}</td>
                <td className="p-3">{gameData.stats[teamId].lose}</td>
                <td className="p-3">{gameData.stats[teamId].draw}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
