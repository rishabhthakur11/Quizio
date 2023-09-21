import QuestionOverviewPanel from "@/components/QuestionOverviewPanel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black w-screen h-screen flex  md:gap-10">
      <div className="flex-1 mx-auto">{children}</div>
      <div>
        <QuestionOverviewPanel />
      </div>
    </div>
  );
}
