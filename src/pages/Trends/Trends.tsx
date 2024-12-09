import { Card } from "../../components";
import { useTrends } from "./Trends.hooks";

export const Trends = () => {
  const { loading, trends, handleSearch } = useTrends();

  return (
    <div className="space-y-10">
      <h2 className="font-bold text-4xl text-left">Giphy Searcher</h2>
      <input
        onChange={handleSearch}
        className="border-slate-300 bg-slate-100 p-4 rounded-sm w-full shadow-lg"
        type="text"
        placeholder="Search"
      />
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {trends?.data?.map((trend) => (
          <Card key={trend.id} {...trend} />
        ))}
      </div>
    </div>
  );
};
