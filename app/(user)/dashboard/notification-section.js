import Image from "next/image";

export default function NotificationSection() {
  return (
    <div className="flex justify-center gap-y-4 items-center flex-col mt-10 mx-auto text-center">
      <Image
        src="/under-construction.svg"
        alt="No Data"
        width={300}
        height={300}
      />
      <h4 className="text-xl mt-2 font-bold font-petrona text-pretty lg:text-2xl">
        This section is currently under construction.
      </h4>
    </div>
  );
}
